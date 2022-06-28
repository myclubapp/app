module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myclublight: '#EB1927',
        myclubdark: '#EB1927',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
