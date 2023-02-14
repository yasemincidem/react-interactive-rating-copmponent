/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-rgb': 'rgb(20, 21, 25)',
        'gray-hex': '#828890',
        'rate-hex': '#262F38',
      },
    },
  },
  plugins: [],
}
