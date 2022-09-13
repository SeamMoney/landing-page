// const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: {
    tailwindcss:{},
    autoprefixer:{},
    // require('postcss-import'),
    // require('autoprefixer'),
    // require('./tailwind.js'),
    // require('cssnano')({
    //     preset: 'default',
    // }),
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/*/.{js,jsx,ts,tsx}',
    './src/**/*/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
}
