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
      },
      backgroundImage: {
        'coffee-1': "url('./dist/images/coffee-1.png')"
      },
      height: {
        '138': '38rem'
      }
    },
  },
  plugins: [],
}
