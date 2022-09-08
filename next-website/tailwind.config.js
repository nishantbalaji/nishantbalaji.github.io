/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "04B1C8",
        },
        background: {
          DEFAULT: "#121212",
        },
        nvidia: {
          DEFAULT: "#76B900",
        },
        nasa: {
          DEFAULT: "#0B3D91",
        },
        acm: {
          DEFAULT: "#22ACEA",
        },
        tse: {
          DEFAULT: "#DDBB02",
        }, 
        ucsd: {
          blue: "#00629B",
          gold: "#FFCD00",
        }
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