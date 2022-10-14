module.exports = {
  darkMode: "media", // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myclublight: "#339BDE",
        myclubdark: "#795DEB"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
