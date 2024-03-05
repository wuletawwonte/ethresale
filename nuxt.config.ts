// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Ethresale',
    },
  },
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
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
  veeValidate: {
    // options
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      ErrorMessage: 'VeeErrorMessage',
    },    
  },
});
