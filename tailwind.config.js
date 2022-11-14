/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'title': ['Gilda Display']
      },
      colors: {
        'primary': '#F87171'
      }
    },
  },
  plugins: [],
}
