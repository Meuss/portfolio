const pkg = require('./package');

module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: pkg.description }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css' }],
    // script [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js' }],
  },

  loading: { color: '#fff' },

  // Global CSS
  css: ['swiper/dist/css/swiper.css'],

  // Plugins to load before mounting the App
  plugins: [{ src: '~/plugins/nuxt-swiper-plugin.js', ssr: false }],

  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  build: {
    // You can extend webpack config here
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
