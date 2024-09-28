/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#FFFFFF",
        "secondary": "#000000",
        "red": "#7f0c0c"
      },
      fontFamily: {
        'Barley': ['Barley', 'sans-serif'],
        'Playwrite': ['PlaywriteDEGrund', 'sans-serif'],
        'Exo2': ['Exo2', 'sans-serif']
      },
      screens: {
        'mobile': '720px',  // Custom mobile breakpoint
        'desktop': '1024px', // Custom desktop breakpoint
      },
    },
  },
  plugins: [],
}

