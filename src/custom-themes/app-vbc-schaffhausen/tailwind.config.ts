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
        myclublight: "#ffd000",
        myclubdark: "#ffd000",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
} satisfies Config

