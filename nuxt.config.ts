export default defineNuxtConfig({
  devtools: { enabled: false },

  routeRules: {
    '/': { prerender: true },
  },

  modules: ['@pinia/nuxt', '@hebilicious/vue-query-nuxt'],
  compatibilityDate: '2025-02-13',
});
