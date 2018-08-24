import { polyfillLoader } from '@bolt/core';

polyfillLoader.then(res => {
  if (!window.customElements.get('replace-with-children')) {
    import(/* 
      webpackMode: 'eager', 
      webpackChunkName: 'replace-with-children' 
    */ '@bolt/core/elements/replace-with-children');
  }

  if (!window.customElements.get('bolt-button')) {
    import(/* 
      webpackMode: 'eager', 
      webpackChunkName: 'bolt-button' 
    */ './button.standalone.js');
  }
});
