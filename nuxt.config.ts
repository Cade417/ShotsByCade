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
  app: {
    head: {
      title: 'Shots By Cade - Photography Services',
      meta: [
        { name: 'description', content: 'Vent, Family, Friends, and Sports photographer covering Southwest Missouri and Northwest Arkansas. View work on my website, and contact us today.' },

        // Open Graph / Facebook
        { property: 'og:title', content: 'Shots By Cade - Photography Services' },
        { property: 'og:description', content: 'Vent, Family, Friends, and Sports photographer covering Southwest Missouri and Northwest Arkansas.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://shotsbycade.com' },
        { property: 'og:image', content: 'https://shotsbycade.com/social-card.jpg' }, // Replace with actual image URL
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Shots By Cade - Photography Services' },
        { name: 'twitter:description', content: 'Vent, Family, Friends, and Sports photographer covering Southwest Missouri and Northwest Arkansas.' },
        { name: 'twitter:image', content: 'https://shotsbycade.com/social-card.jpg' }, // Replace with actual image URL
        { name: 'twitter:site', content: '@ShotsByCade' } // Optional if you have a Twitter handle
      ]
    }
  }
});