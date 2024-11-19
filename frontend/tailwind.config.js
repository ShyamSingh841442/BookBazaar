// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Covers all React files in src
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFCE1A',
        'secondary': '#0D0842',
        'blackBG': '#f3f3f3',
        'Favorite': '#FF5841'
      },
      fontFamily: {
        'primary' : ["Montserrat", "sans-serif"],
        'secondary': ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
