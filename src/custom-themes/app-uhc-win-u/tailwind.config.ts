import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/pages/auth/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", '"Segoe UI"', "sans-serif"],
    },
    extend: {
      colors: {
        myclublight: "#EB1927",
        myclubdark: "#EB1927",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
} satisfies Config

