/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'popins': ['Poppins', 'sans - serif']
      },
      colors: {
        'primary': '#a749ff',
        'white': '#ffffff',
        'black': '#000000',
        'red': '#ff0000',
        'secondary': '#ffaa00',
        'yellow': '#ffff00',
        'blue': '#0000aa',
        'green': '#008000',
        'cyan': '#800000',
        'purple': '#800080',
      }
    },
  },
  plugins: [],
}