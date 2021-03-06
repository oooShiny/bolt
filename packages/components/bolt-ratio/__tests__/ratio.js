import { render } from '@bolt/twig-renderer';

const timeout = 60000;

const imageVrtConfig = {
  failureThreshold: '0.02',
  failureThresholdType: 'percent',
};

describe('<bolt-ratio> Component', () => {
  let page;

  beforeEach(async () => {
    page = await global.__BROWSER__.newPage();
    await page.goto('http://127.0.0.1:4444/', {
      timeout: 0,
      waitLoad: true,
      waitNetworkIdle: true, // defaults to false
    });
  }, timeout);

  test('<bolt-ratio> compiles', async () => {
    const results = await render('@bolt-components-ratio/ratio.twig', {
      children: '<img src="/fixtures/1200x660.jpg">',
      ratio: '1200/660',
    });
    expect(results.ok).toBe(true);
    expect(results.html).toMatchSnapshot();
  });

  test('Default <bolt-ratio> w/o Shadow DOM renders', async function() {
    const renderedRatioHTML = await page.evaluate(() => {
      const ratio = document.createElement('bolt-ratio');
      const img = document.createElement('img');
      img.setAttribute('src', '/fixtures/1200x660.jpg');
      ratio.setAttribute('no-shadow', '');
      ratio.setAttribute('ratio', '1200/660');
      ratio.appendChild(img);
      document.body.appendChild(ratio);
      ratio.useShadow = false;
      ratio.updated();
      return ratio.outerHTML;
    });
    expect(renderedRatioHTML).toMatchSnapshot();

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(imageVrtConfig);

    const renderedRatioStyles = await page.evaluate(() => {
      const ratio = document.querySelector('bolt-ratio');
      const innerRatio = ratio.renderRoot.querySelector('.c-bolt-ratio');
      return innerRatio.style.getPropertyValue('--aspect-ratio').trim();
    });

    expect(renderedRatioStyles).toMatch(parseFloat(1200 / 660).toFixed(5));
  });

  test('<bolt-ratio> with HTML5 video renders', async function() {
    const renderedRatioHTML = await page.evaluate(() => {
      const ratio = document.createElement('bolt-ratio');

      ratio.innerHTML = `<video controls poster="/fixtures/poster.png">
        <source src="/fixtures/devstories.webm" type="video/webm;codecs=&quot;vp8, vorbis&quot;">
        <source src="/fixtures/devstories.mp4" type="video/mp4;codecs=&quot;avc1.42E01E, mp4a.40.2&quot;">
        <track src="/fixtures/devstories-en.vtt" label="English subtitles" kind="subtitles" srclang="en" default="">
      </video>`;
      ratio.setAttribute('ratio', '640/360');
      ratio.style.width = '640px';
      document.body.appendChild(ratio);
      ratio.updated();
      return ratio.outerHTML;
    });

    const renderedRatioSize = await page.evaluate(() => {
      const ratioSize = {
        width: document.querySelector('bolt-ratio').clientWidth,
        height: document.querySelector('bolt-ratio').clientHeight,
      };
      return ratioSize;
    });

    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot(imageVrtConfig);
    expect(renderedRatioHTML).toMatchSnapshot();
  });

  test('<bolt-ratio> twig - ratio prop fraction containing a decimal', async () => {
    const results = await render('@bolt-components-ratio/ratio.twig', {
      children: '<img src="/fixtures/1200x850-alt.jpg">',
      ratio: '12/8.5',
    });
    expect(results.ok).toBe(true);
    expect(results.html).toMatchSnapshot();

    const html = results.html;

    await page.evaluate(html => {
      const div = document.createElement('div');
      div.innerHTML = `${html}`;
      document.body.appendChild(div);
      const ratio = document.querySelector('bolt-ratio');
      ratio.updated();
    }, html);

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(imageVrtConfig);

    const renderedRatioStyles = await page.evaluate(() => {
      const ratio = document.querySelector('bolt-ratio');
      const innerRatio = ratio.renderRoot.querySelector('.c-bolt-ratio');
      return innerRatio.style.getPropertyValue('--aspect-ratio').trim();
    });

    expect(renderedRatioStyles).toMatch(parseFloat(1200 / 850).toFixed(5));
  });

  test('<bolt-ratio> web component - ratio prop fraction containing a decimal', async function() {
    const renderedRatioHTML = await page.evaluate(() => {
      const ratio = document.createElement('bolt-ratio');
      const img = document.createElement('img');
      img.setAttribute('src', '/fixtures/1200x850.jpg');
      ratio.setAttribute('ratio', '12/8.5');
      ratio.appendChild(img);
      document.body.appendChild(ratio);
      ratio.updated();
      return ratio.outerHTML;
    });
    expect(renderedRatioHTML).toMatchSnapshot();

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(imageVrtConfig);

    const renderedRatioStyles = await page.evaluate(() => {
      const ratio = document.querySelector('bolt-ratio');
      const innerRatio = ratio.renderRoot.querySelector('.c-bolt-ratio');
      return innerRatio.style.getPropertyValue('--aspect-ratio').trim();
    });

    expect(renderedRatioStyles).toMatch(parseFloat(1200 / 850).toFixed(5));
  });
});
