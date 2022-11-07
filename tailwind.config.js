/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.js",
      "./public/*.html"
  ],
  theme: {
    extend: {
      colors: {
        fundo: {
          700: "#1E1E1E"
        },

        font: {
          300: "#F1F1F1"
        }
      }
    },
  },
  plugins: [],
}
