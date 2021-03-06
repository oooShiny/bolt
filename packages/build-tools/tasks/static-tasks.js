const { render } = require('@bolt/twig-renderer');
const chalk = require('chalk');
const path = require('path');
const { promisify } = require('util');
const fs = require('fs');
const mkdirp = promisify(require('mkdirp'));
const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);
const lstat = promisify(fs.lstat);
const chokidar = require('chokidar');
const del = require('del');
const globby = require('globby');
const debounce = require('lodash.debounce');
const fm = require('front-matter');
const ora = require('ora');
const marked = require('marked');
const timer = require('../utils/timer');
const manifest = require('../utils/manifest');
const { getConfig } = require('../utils/config-store');
const log = require('../utils/log');
const events = require('../utils/events');
const sh = require('../utils/sh');
let config;

async function asyncConfig() {
  if (config) {
    return config;
  } else {
    config = Object.assign(
      {
        watchedExtensions: ['twig', 'md', 'html', 'yml'],
      },
      await getConfig(),
    );

    return config;
  }
}

/**
 * Prep a JSON string for use in bash
 * @param {string} string
 * @returns {string}
 */
function escapeNestedSingleQuotes(string) {
  return string.replace(/'/g, "'\\''");
}

/**
 * Get data for a single page that is Markdown or HTML with Yaml front matter
 * @param {string} file - Path to source file
 * @returns {Promise<{srcPath: string, distPath: string, meta: object, body: string}>} page - Page Data
 */
async function getPage(file) {
  config = config || (await asyncConfig());
  if (config.verbosity > 3) {
    log.dim(`Getting info for: ${file}`);
  }

  const url = path
    .relative(config.srcDir, file)
    .replace('.md', '.html')
    .split('/')
    .map(x => x.replace(/^[0-9]*-/, '')) // Removing number prefix `05-item` => `item`
    .join('/');
  const fileContents = await readFile(file, 'utf8');

  // https://www.npmjs.com/package/front-matter
  const { attributes, body, frontmatter } = fm(fileContents);

  const dirTree = url.split('/');

  let depth = url.split('/').filter(x => x !== 'index.html').length;

  let parent = dirTree[depth - 2];

  // Don't do it for homepage
  if (url === 'index.html') depth = 1;

  const page = {
    srcPath: file,
    url,
    depth,
    parent,
    meta: attributes,
    body: file.endsWith('.md') ? marked(body) : body,
  };

  return page;
}

/**
 * Get data for all pages
 * @param {string} files - Source directory
 * @see getPage
 * @returns {Promise<object[]>} - An array of page data objects
 */
async function getPages(srcDir) {
  config = config || (await asyncConfig());
  /** @type Array<String> */
  const allPaths = await globby([
    path.join(srcDir, '**/*.{md,html}'),
    '!**/_*/**/*.{md,html}',
    '!**/pattern-lab/**/*',
    '!**/_*.{md,html}',
  ]);

  return Promise.all(allPaths.map(getPage)).then(pages => {
    if (config.verbosity > 4) {
      log.dim('All data for Static pages:');
      console.log(pages);
      log.dim('END: All data for Static pages.');
    }
    return pages;
  });
}

/**
 * Recursively crawl a directory and subdirectory to build a nested content object.
 * Returns an object that reflects directory structure and contains html and
 * markdown file information generated by getPage().
 *
 * How this function works:
 * If the folder passed in is for a directory, it will run `getPage()` for the "index" file inside,
 * then also get info on all children all contents of that directory.
 *
 * @param {string} folder A system path to a directory
 * @returns {Promise<object[]>}
 */
async function getNestedPages(folder) {
  config = config || (await asyncConfig());

  const items = await globby(['*', '!_*', '!pattern-lab'], {
    cwd: folder,
    onlyFiles: false,
  });

  return Promise.all(
    items.map(async item => {
      const fullPath = path.join(folder, item);
      const stats = await lstat(fullPath);
      if (stats.isDirectory()) {
        const indexFile = path.join(fullPath, '00-index.md'); // @todo Make this work with `00-index.html`, `01-index.md`, `index.md`, or `index.html`
        const children = await getNestedPages(fullPath);
        // The children include the `indexFile` as well, so let's remove it.
        const filterChildren = children.filter(
          child => indexFile !== child.srcPath,
        );
        let item;
        try {
          item = await getPage(indexFile);
        } catch (error) {
          log.error(
            `Each folder in static site content must contain a file called "00-index.md", please make one here: ${indexFile}`,
          );
          process.exit(1); // exiting immediately so follow up error messages don't confuse user.
        }
        item.children = filterChildren;
        return item;
      } else {
        return await getPage(fullPath);
      }
    }),
  );
}

/**
 * Get the site data based on the pages
 * @param {object} pages
 * @returns {{pages}}
 */
async function getSiteData(pages) {
  config = config || (await asyncConfig());
  const nestedPages = await getNestedPages(config.srcDir);
  const site = {
    nestedPages,
    pages: pages.map(page => ({
      url: page.url,
      meta: page.meta,
      // choosing not to have `page.body` in here on purpose
    })),
  };

  return site;
}

/**
 * The main event - compile the whole site
 * @returns {Promise<any[]>}
 */
async function compile(exitOnError = true) {
  config = config || (await asyncConfig());
  const startMessage = chalk.blue('Compiling Static Site...');
  const startTime = timer.start();
  let spinner;
  if (config.verbosity > 2) {
    console.log(startMessage);
  } else {
    spinner = ora(startMessage).start();
  }

  const pages = await getPages(config.srcDir);

  const renderPages = pages.map(async page => {
    const site = await getSiteData(pages);

    const layout = page.meta.layout ? page.meta.layout : 'default';
    const { ok, html, message } = await render(`@bolt/${layout}.twig`, {
      page,
      site,
    });

    if (!ok) {
      if (exitOnError) {
        log.errorAndExit(message);
      } else {
        log.error(message);
      }
    }

    const htmlFilePath = path.join(config.wwwDir, page.url);
    await mkdirp(path.dirname(htmlFilePath));
    await writeFile(htmlFilePath, html);
    if (config.verbosity > 3) {
      log.dim(`Wrote: ${htmlFilePath}`);
    }

    return true;
  });

  Promise.all(renderPages)
    .then(() => {
      const endMessage = chalk.green(
        `Compiled Static Site in ${timer.end(startTime)}`,
      );
      if (config.verbosity > 2) {
        console.log(endMessage);
      } else {
        spinner.succeed(endMessage);
      }
    })
    .catch(error => {
      console.log(error);
      const endMessage = chalk.red(
        `Compiling Static Site failed in ${timer.end(startTime)}`,
      );
      spinner.fail(endMessage);
    });
}

function compileWithNoExit() {
  return compile(false);
}

async function watch() {
  config = Object.assign(
    {
      watchedExtensions: ['.twig', '.md', '.html', '.yml'],
    },
    await getConfig(),
  );

  const watchedPaths = [];

  // generate wwwDir globbed paths for each file extension being watched
  config.watchedExtensions.forEach(ext => {
    watchedPaths.push(path.join(process.cwd(), '**/*' + ext));
  });

  // The watch event ~ same engine gulp uses https://www.npmjs.com/package/chokidar
  const watcher = chokidar.watch(watchedPaths, {
    ignoreInitial: true,
    cwd: process.cwd(),
    ignored: ['**/node_modules/**', '**/vendor/**', '**/_patterns/**'],
  });

  // list of all events: https://www.npmjs.com/package/chokidar#methods--events
  watcher.on('all', (event, path) => {
    if (config.verbosity > 3) {
      console.log('Static Site watch event: ', event, path);
    }
    compileWithNoExit();
  });
}

module.exports = {
  compile,
  watch,
};
