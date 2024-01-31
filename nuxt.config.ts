// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
    dataValue: 'theme',
  },
});
