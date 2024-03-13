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
        myclublight: "#F89828",
        myclubdark: "#F89828",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
} satisfies Config

