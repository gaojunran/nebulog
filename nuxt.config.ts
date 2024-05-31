// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Nebula\'s Blog',
      titleTemplate: '%s - Nebula\'s Blog',
      meta: [{ name: 'description', content: 'Nebula\'s Blog' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    url: 'https://nebulog-gaojunrans-projects.vercel.app/',
    identity: {
      type: 'Person',
    },
    // twitter: '@qdnvubp',
  },

  typescript: {
    strict: true,
  },

  nitro: {
    // prerender: {
    //   crawlLinks: true,
    //   routes: [
    //     '/',
    //   ],
    // },
    routeRules: {
      '/': {prerender: false}
    }
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    'nuxt-simple-sitemap',
    // '@nuxtjs/tailwindcss',
    '@stefanobartoletti/nuxt-social-share',
    "@nuxt/ui"
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },
})
