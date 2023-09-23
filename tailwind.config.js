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
        'costum-pink' : '#D16BA5',
        'costum-purple' : '#86A8E7',
        'costum-green' : '#5FFBF1',
      },
      // backgroundImage: {
      //   'custom-bg' :"url('../src/assets/bg.jpg')",
      // },
    },
  },
  plugins: [],
}