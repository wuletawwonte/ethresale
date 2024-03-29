// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Ethresale",
      meta: [
        {
          name: "theme-color",
          content: "#0047E1",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxtjs/supabase",
    "@nuxtjs/i18n",
    "@vee-validate/nuxt",
    "@vite-pwa/nuxt",
    "@nuxt/image",
  ],
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
    dataValue: "theme",
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: true,
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/", "/register"],
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.json",
      },
      {
        code: "am",
        iso: "am-ET",
        name: "አማርኛ",
        file: "am-ET.json",
      },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
    lazy: true,
    langDir: "lang/",
  },
  veeValidate: {
    // options
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  pwa: {
    manifest: {
      name: "Ethresale",
      short_name: "Ethresale",
      description: "A marketplace for used items",
      theme_color: "#0047E1",
      background_color: "#ffffff",
      screenshots: [
        {
          src: "screenshots/screenshot_wide.png",
          sizes: "2560x1600",
          type: "image/png",
          form_factor: "wide",
        },
        {
          src: "screenshots/screenshot_mobile.png",
          sizes: "1600x2560",
          type: "image/png",
        },
      ],
      icons: [
        {
          src: "icons/icon-48-48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "icons/icon-72-72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "icons/icon-96-96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "icons/icon-144-144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/icon-192-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon-512-512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          purpose: "maskable",
          src: "icons/icon512_maskable.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  srcDir: "src/",
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
