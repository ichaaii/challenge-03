/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontfamily: {
        sans: ["Overpass", "sans-serif"],
      },
      colors: {
        'costum-red' : {
          100: '#902849',
          200: '#681d35',
        },
        'costum-pink' : {
          100: '#D16480',
          200: '#D1649b',
          300: '#cb5070'
        },
        'costum-purple' : {
          100: '#494074',
          200: '#5e5295',
          300: '#685ca5'
        },
        'costum-violet' : {
          100: '#924F84',
          200: '#924f8f',
          300: '#a35893'
        },
        'costum-orange' : {
          100: '#FC896F',
          200: '#FC726f'
        },
        'costum-blue' : {
          100: '#2B5B94',
          200: '#2B5294'
        },
      },
    },
  },
  plugins: [],
}