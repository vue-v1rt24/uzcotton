// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],

  /*  */

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },

  /*  */

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },

  //
  /* runtimeConfig: {
    apiDomain: process.env.NUXT_API_DOMAIN,

    public: {
      domains: process.env.NUXT_PUBLIC_DOMAINS,
      graphqlUrl: process.env.NUXT_PUBLIC_GRAPHQL_URL,
    },
  }, */

  //
  css: ['assets/css/index.css'],

  //
  experimental: {
    typedPages: true,
  },

  //
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active',
    },
  },

  /* image: {
    domains: [process.env.NUXT_PUBLIC_DOMAINS || 'pranaadmimwp.pranait.ru', 'nuxtjs.org'],

    // Другие варианты
    domains: [process.env.NUXT_PUBLIC_DOMAINS || 'https://pranaadmimwp.pranait.ru', 'nuxtjs.org'],
    domains: ['pranaadmimwp.pranait.ru'],
    domains: ['https://pranaadmimwp.pranait.ru'],
    domains: [`${process.env.NUXT_PUBLIC_DOMAINS}`],
  }, */
}); // end defineNuxtConfig
