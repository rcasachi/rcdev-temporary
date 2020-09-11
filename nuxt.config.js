
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Rafael Casachi',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'title', name: 'title', content: 'Rafael Casachi' },
      { hid: 'author', name: 'author', content: 'Rafael Casachi' },
      { hid: 'url', name: 'url', content: 'https://rafaelcasachi.dev' },
      { hid: 'canonical', name: 'canonical', content: 'https://rafaelcasachi.dev' },
      {
        hid: 'description',
        name: 'description',
        content: 'Bem vindo ao meu site. Empreendedorismo, Life Hacks e Viagens.'
      },
      { hid: 'robots', name: 'robots', content: 'index, follow' },

      { hid: 'og:site_name', name: 'og:site_name', content: 'Rafael Casachi' },
      { hid: 'og:locale', name: 'og:locale', content: 'en' },
      { hid: 'og:title', name: 'og:title', content: 'Rafael Casachi' },
      { hid: 'og:description', name: 'og:description', content: 'Bem vindo ao meu site. Empreendedorismo, Life Hacks e Viagens.' },
      { hid: 'og:image', name: 'og:image', content: '/_nuxt/assets/images/atacama.png' },
      { hid: 'og:url', name: 'og:url', content: 'https://rafaelcasachi.dev/' },
      { hid: 'og:type', name: 'og:type', content: 'article' },

      { hid: 'twitter:card', name: 'twitter:card', content: 'Rafael Casachi' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://rafaelcasachi.dev/' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@rcasachi' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Rafael Casachi' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Bem vindo ao meu site. Empreendedorismo, Life Hacks e Viagens.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/_nuxt/assets/images/atacama.png' },

      { hid: 'name', itemprop: 'name', content: 'Rafael Casachi' },
      { hid: 'description', itemprop: 'description', content: 'Bem vindo ao meu site. Empreendedorismo, Life Hacks e Viagens.' },
      { hid: 'url', itemprop: 'url', content: 'https://rafaelcasachi.dev/' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'
      }
    ]
  },
  render: {
    ssrLog: 'collapsed',
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap',
    '@bazzite/nuxt-optimized-images',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(s?css)$/,
            chunks: 'all',
            enforce: true,
          }
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  googleAnalytics: {
    id: "UA-83751838-1",
    dev: false
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://rafaelcasachi.dev',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      '/',
    ].map(route => ({
      url: route,
      changefreq: 'weekly',
      priority: 1,
      lastmodISO: new Date().toISOString().split('T')[0]
    }))
  },
}
