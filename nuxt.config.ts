// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  gtag: {
    id: 'G-E1EZBDTEZC'
  },
  site: {
    url: "https://shotsbycade.com",
    name: "Shots by Cade",
    description:
      "Photography, Videography, and Graphic Design by Shots By Cade!",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
    trailingSlash: true,
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  modules: ["@nuxt/icon", "@nuxtjs/seo", ['@nuxtjs/robots', { configPath: "~/config/robots.config" }], "nuxt-gtag"],
  router: {
    options: {
      linkActiveClass: "link-active",
      linkExactActiveClass: "link-exact-active",
    },
  },
});