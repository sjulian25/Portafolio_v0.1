/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      color: {
        primary: "#021526",
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

