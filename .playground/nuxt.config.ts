export default defineNuxtConfig({
  compatibilityDate: '2024-09-17',
  future: {
    compatibilityVersion: 4,
  },

  extends: [
    '@gabortorma/nuxt-eslint-layer',
    '..',
  ],
})
