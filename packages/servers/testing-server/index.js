const { handleRequest } = require('@bolt/api');
const express = require('express');
const { join } = require('path');
const globby = require('globby');
const app = express();
const path = require('path');

const port = process.env.PORT || 4444;

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const createWebpackConfig = require('@bolt/build-tools/create-webpack-config');
const { getConfig } = require('@bolt/build-tools/utils/config-store');

let server;

// @todo: re-evaluate if this is worthwhile to re-enable
// const allComponentsWithTests = globby
//   .sync(
//     path.join(__dirname, '../../../', '/packages/components/**/__tests__'),
//     {
//       onlyDirectories: true,
//     },
//   )
//   .map(testsDirPath =>
//     require(path.join(path.resolve(testsDirPath, '..'), 'package.json')),
//   )
//   .map(pkg => pkg.name);

getConfig().then(async boltConfig => {
  let config = boltConfig;

  // don't compile anything in Webpack except for the exported JSON data from Bolt's Design Tokens + all packages with tests
  // config.components.global = [
  //   './packages/core/styles/index.scss',
  //   '@bolt/global',
  //   ...allComponentsWithTests,
  // ];

  config.mode = 'client';
  config.components.individual = [];
  config.prod = true;
  config.sourceMaps = false;

  const webpackConfig = await createWebpackConfig(config);
  const compiler = webpack(webpackConfig);

  // This function makes server rendering of asset references consistent with different webpack chunk/entry configurations
  function normalizeAssets(assets) {
    return Array.isArray(assets) ? assets : [assets];
  }

  app.use(
    middleware(compiler, {
      serverSideRender: true,
      stats: webpackConfig[0].devServer.stats,
    }),
  );

  app.use(express.static(path.relative(process.cwd(), config.wwwDir)));

  // The following middleware would not be invoked until the latest build is finished.
  app.use((req, res) => {
    const assetsByChunkName = res.locals.webpackStats.toJson().children[0]
      .assetsByChunkName;
    const fs = res.locals.fs;
    const outputPath = res.locals.webpackStats.toJson().children[0].outputPath;

    // then use `assetsByChunkName` for server-sider rendering
    // For example, if you have only one main chunk:
    res.send(
      `<html class="js-fonts-loaded">
        <head>
          <title>Test</title>
          <style>${normalizeAssets(assetsByChunkName['bolt-global'])
            .filter(path => path.endsWith('.css'))
            .map(path => fs.readFileSync(outputPath + '/' + path))
            .join('\n')}</style>
        </head>
        <body>
          <div id="root"></div>
          ${normalizeAssets(assetsByChunkName['bolt-global'])
            .filter(path => path.endsWith('.js'))
            .map(path => `<script src="${path}"></script>`)
            .join('\n')}
        </body>
      </html>`,
    );
  });

  app.get(['/docs', '/docs/', '/docs/index.html'], (req, res) => {
    res.redirect('/docs/getting-started/index.html');
  });

  app.get('/pattern-lab/splash-screen', (req, res) => {
    res.redirect('/pattern-lab');
  });

  app.get('/favicon.ico', (req, res) => {
    res.redirect('/pattern-lab/favicons/favicon.ico');
  });

  app.use('/api', handleRequest);

  server = app.listen(port, () => {
    console.log(`Express listening on http://localhost:${port}`);
  });

  app.redirect;

  // handle cleaning up + shutting down the server instance
  process.on('SIGTERM', shutDownSSRServer);
  process.on('SIGINT', shutDownSSRServer);
});

// console.log('Received kill signal, shutting down gracefully');
function shutDownSSRServer() {
  server.close(() => {
    process.exit(0);
  });

  setTimeout(() => {
    console.warn(
      'Could not close connections in time, forcefully shutting down',
    );
    process.exit(1);
  }, 5000);
}
