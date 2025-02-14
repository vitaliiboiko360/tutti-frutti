export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/': { prerender: true },
  },

  modules: ['@pinia/nuxt', '@hebilicious/vue-query-nuxt'],
  compatibilityDate: '2025-02-13',
});
