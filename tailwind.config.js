module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        desktop: '56.25rem', //900px
      },
      colors: {
        themeBlue: '#6196E4',
        themeDarkBlue: '#020215',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
