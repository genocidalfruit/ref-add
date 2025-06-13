/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#4CAF50', // Example green, replace with your desired shade
        'custom-black': '#1A1A1A', // Example black, replace with your desired shade
        'custom-white': '#FFFFFF', // Example white, replace with your desired shade
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Example modern sans-serif font, you can replace with others like 'Inter', 'Open Sans', etc.
      },
    },
  },
  plugins: [],
}