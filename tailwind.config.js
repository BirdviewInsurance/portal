/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include your src folder with all JS, JSX, TS, TSX files
  ],
  theme: {
    extend: {
      colors: {
        redCustom: '#E42D2C',
        blueCustom: '#157EBC',
      },
    },
  },
  plugins: [],
};
