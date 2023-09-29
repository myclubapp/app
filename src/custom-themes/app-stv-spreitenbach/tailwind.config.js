module.exports = {
  darkMode: "media", // or 'media' or 'class'
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", '"Segoe UI"', "sans-serif"],
    },
    extend: {
      colors: {
        myclublight: "#3677bc",
        myclubdark: "#3677bc",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
