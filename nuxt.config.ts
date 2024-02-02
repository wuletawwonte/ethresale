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
    '@nuxtjs/i18n',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
    dataValue: 'theme',
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: true,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/register'],
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json',
      },
      {
        code: 'am',
        iso: 'am-ET',
        name: 'አማርኛ',
        file: 'am-ET.json',
      },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'lang/',
  },
});
