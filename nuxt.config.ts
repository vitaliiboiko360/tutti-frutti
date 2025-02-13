export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    '/': { prerender: true },
  },

  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-02-13',
});