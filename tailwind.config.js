module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1000': '1000px'
     },
    extend: {
      translate: {
        '99': '99%',
      },
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
        7.5: '30px',
      },
      width: {
        7.5: '30px',
      },
      padding: {
        0.05: '0.05px',
        0.1: '1px',
        0.5: '2px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
