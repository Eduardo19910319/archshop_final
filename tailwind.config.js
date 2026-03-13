/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'archshop-orange': '#F58249',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
