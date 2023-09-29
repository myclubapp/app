module.exports = {
  darkMode: "media", // or 'media' or 'class'
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", '"Segoe UI"', "sans-serif"],
    },
    extend: {
      colors: {
        myclublight: "#EB6109",
        myclubdark: "#EB6109",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
