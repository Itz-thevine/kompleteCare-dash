// https://v3.nuxtjs.org/api/configuration/nuxt.config

// Modify the `nuxt.config.ts` file by adding to the `export default defineNuxtConfig()`
export default defineNuxtConfig({
    css: [
        "@/assets/css/styles.css",
      '@fortawesome/fontawesome-svg-core/styles.css',
    ],
    build: {
        postcss: {
          postcssOptions: require("./postcss.config.js"),
        },
    },
  })