/* eslint-disable quotes */
module.exports = {
  darkMode: "media", // or 'media' or 'class'
  // content: ["./src/**/*.{html,js}"],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", '"Segoe UI"', "sans-serif"],
      },
      colors: {
        myclublight: "#339BDE",
        myclubdark: "#795DEB",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
