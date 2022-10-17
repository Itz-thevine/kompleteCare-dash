/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./layouts/*.vue",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        'mainBg': '#F5F5Fb',
        'customTxt': '#382F90',
        'buttonColor': '#2A36A4',
        'menuText': '#A0A0A0',
        'dis': '#9FA2B4'
      }
    },
  },
  plugins: [],
}
