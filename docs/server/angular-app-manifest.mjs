
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ghpages-exp1',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 520, hash: '0975fba7bf2e47ac82e5a21e31c19d39259382616880f6379294292d45846b2c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: '719e90e79804a929d59c5e72d9528206ea48b383919d9ce1f4d17d55fa352019', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
