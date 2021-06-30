module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['DIN', 'sans-serif'],
      body: ['DIN', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#07c806',
        background: {
          100: '#F2F2F2',
          200: '999999',
        },
        fontColor: {
          100: '#ADB7BC',
        },
        socialColor: {
          facebook: '#3B5798',
        }
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
