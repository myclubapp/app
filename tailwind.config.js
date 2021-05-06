module.exports = {
  mode: 'jit', // https://tailwindcss.com/docs/just-in-time-mode
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
