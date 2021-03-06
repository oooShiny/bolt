import lazySizes from 'lazysizes'; // Mostly just for automatic `size` attribute support
// import 'lazysizes/src/lazysizes-intersection';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import 'lazysizes/plugins/progressive/ls.progressive';
import 'lazysizes/plugins/respimg/ls.respimg'; // Lighter weight version of picturefill

// https://github.com/aFarkas/lazysizes/issues/410
// lazySizes.cfg == window.lazySizesConfig
Object.assign(lazySizes.cfg, {
  lazyClass: 'js-lazyload',
  loadingClass: 'is-lazyloading',
  loadedClass: 'is-lazyloaded',
  preloadAfterLoad: true,
  // preloadAfterLoad: false,
});
