module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myclublight: '#F89828',
        myclubdark: '#F89828',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
