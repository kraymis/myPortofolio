// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this to match your project's file structure
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { 'max': '640px' }, // Custom max-width breakpoint for <= 640px
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
      keyframes: {
        shake: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-2.5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-fill': {
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-stroke': {
          '-webkit-text-stroke': '1px grey',
        },
        '.text-stroke-thick': {
          '-webkit-text-stroke': '2px currentColor',
        },
        // You can add more custom utilities as needed
      }, ['responsive', 'hover']);
    },
  ],
});
