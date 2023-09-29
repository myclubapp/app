/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media", // or 'media' or 'class'
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", '"Segoe UI"', "sans-serif"],
    },
    extend: {
      colors: {
        myclublight: "#339BDE",
        myclubdark: "#795DEB",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
