export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_BASE_URL,
      apiKey:  process.env.NUXT_API_KEY,
    },
  },
  typescript: {
    strict: true
  }
});
