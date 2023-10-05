import { defineNuxtModule } from 'nuxt'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TreasureVice',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {  rel: "icon", type: "image/png", href: "/favicon.ico"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/main.scss",
    'primeicons/primeicons.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/aos",  ssr: false, mode: "client" },
    { src: '~/plugins/countrycode.ts', mode: 'client' },
    { src: '~/plugins/primevue.ts', ssr: false }

  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
    "@pinia/nuxt",
    "nuxt-gtag",
    'vue3-carousel-nuxt'
  ],
  carousel: {
    prefix: 'MyPrefix'
  },
  swiper:{
    prefix:'Swiper',
    
    styleLang: 'css',
    modules: ['navigation', 'pagination']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

}
