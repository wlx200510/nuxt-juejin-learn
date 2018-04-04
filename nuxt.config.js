module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-juejin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/stylus/main.styl'],
  /*
  ** Nuxt Plugins
  */
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/main-plugin',
    '~/plugins/axios'
  ],
  // router: {
  //   middleware: 'auth'
  // },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: ['@nuxtjs/axios'],
  axios: {
    proxy: true,
    baseURL: `http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 3001}`
  },
  proxy: {
    '/api': {
      target: 'https://banner-storage-ms.juejin.im',
      pathRewrite: { '/api': '' }
    },
    '/japi': {
      target: 'https://gold-tag-ms.juejin.im',
      pathRewrite: { '/japi': '' }
    },
    '/rapi': {
      target: 'https://recommender-api-ms.juejin.im',
      pathRewrite: { '/rapi': '' }
    },
    '/tapi': {
      target: 'https://timeline-merger-ms.juejin.im',
      pathRewrite: { '/tapi': '' }
    }
  },
  /*
   ** Generate Static Page for static pages
   */
  generate: {
    routes: [
      '/welcome/frontend',
      '/welcome/android',
      '/welcome/backend',
      '/welcome/ai',
      '/welcome/ios',
      '/welcome/freebie',
      '/welcome/article'
    ],
    minify: {
      collapseWhitespace: false
    }
  }
}
