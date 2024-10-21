/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': 'rgba(0, 0, 0, 0.5)',
        'custom-red': '#E50914',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'libre': ['Libre Baskerville', 'serif'],
        'flower':['Indie Flower', 'cursive'],
        'roboto':['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
