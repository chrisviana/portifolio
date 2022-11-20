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
          200: "#656D72",
          400: "#232E35",
          verde: "#03FA6E"
        },

        fontbranca: {
          200: "#F1F1F1"
        }

      }
    },

    fontFamily: {
      'plus': ['Plus Jakarta Sans', 'sans-serif']
    }
  },
  plugins: [],
}
