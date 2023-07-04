/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#D91F27",
        "primary-dark" : "#7C0000",
        "secondary" : "#494b57",
      }
    },

  },
  plugins: [],
}

