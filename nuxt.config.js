const pkg = require('./package');
const translationsFR = require('./assets/translations/fr.json');
const translationsEN = require('./assets/translations/en.json');
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
    ['@nuxtjs/axios'],
    [
      'nuxt-i18n',
      {
        locales: [{ code: 'fr', iso: 'fr-FR' }, { code: 'en', iso: 'en-US' }],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: translationsEN,
            fr: translationsFR,
          },
        },
        detectBrowserLanguage: {
          // A cookie is set once a user has been redirected to his preferred language to prevent subsequent redirections
          useCookie: true,
          cookieKey: 'i18n_redirected',
        },
        strategy: 'prefix_except_default',
        seo: true,
        vuex: {
          // Module namespace
          moduleName: 'i18n',
          // Mutations config
          mutations: {
            // Mutation to commit to store current locale, set to false to disable
            setLocale: 'I18N_SET_LOCALE',
            // Mutation to commit to store current message, set to false to disable
            setMessages: 'I18N_SET_MESSAGES',
          },
        },
      },
    ],
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
