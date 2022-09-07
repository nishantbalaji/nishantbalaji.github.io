/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "04B1C8",
        },
      },
      fontFamily: {
        general: "Poppins, sans-serif"
      }, 
      // animation: {
      //   'button-hover': {
      //     'transition': { 'all' .35s, }
      //     'transition-timing-function': { cubic-bezier(
      //       0.310,
      //       -0.105,
      //       0.430,
      //       1.590
      //     )}
      //   }
      // }
    },
  },
  plugins: [],
}