module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            console: {
                black: '#000',
                dark: '#222',
                gray: '#555',
                purple: '#4a254c',
                green: '#0e0',
                pink: {
                    '400': '#f587ff',
                    '500': '#e200ff',
                    '600': '#aa00c6',
                }
            }
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
