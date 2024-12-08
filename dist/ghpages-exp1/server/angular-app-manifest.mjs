
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ghpages-exp1/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 521, hash: '58d0dc576e5965dacddafe00ae9c23d77043c31437ff03ea8625f55995ad682c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: '918ee1e95f9d7d48a9bc2171944bcb223d193a5ad7c7731190a3e1aa8cba78c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
