module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        IBM: ['IBM Plex Mono', 'monospace'],
      },
      screens: {
        desktop: '75rem', //1000px
      },
      colors: {
        themeBlue: '#6196E4',
        themeDarkBlue: '#020215',
      },
      height: {
        0.5: '2px',
      },
      width: {
        7.5: '30px',
      },
      padding: {
        0.5: '2px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
