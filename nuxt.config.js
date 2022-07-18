export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Save Tweet Punyanya Ijal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: `description`,
        content: `Save Tweet alias bookmark versi Ijal`
      }, {
        name: `keyword`,
        content: `tweet,twitter,thread,savetweet`
      }, {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: `summary`
      },  {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `Save Tweet Punyanya Ijal`
      }, {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: `@afrizalpatlas`
      }, {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `Save Tweet alias bookmark versi Ijal`
      }, {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `https://savetweet.afrizalmy.com/twt.png`
      }, {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: `https://savetweet.afrizalmy.com/`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/twt.ico' }
    ],
    // script: [
    //   { src: "https://platform.twitter.com/widgets.js",  charset: "utf-8"}
    // ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://saveantweet-ijal.herokuapp.com'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Saved Tweet ijal',
      lang: 'id',
      dir: 'ltr',
      short_name: 'Saved Tweet ijal',
      description: 'ini adalah koleksi simpenan tweet ijal',
      theme_color: 'transparent',
      orientation: 'portrait',
      background_color: '#e8f6ff',
      useWebmanifestExtension: false
    },
    icon: {
      fileName: "twt.png",
      purpose: ['any']
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
