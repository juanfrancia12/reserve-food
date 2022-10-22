/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D4EBFF",
          200: "#A0D1FB",
          300: "#69B4F4",
          400: "#3996E4",
          500: "#4798DE",
          600: "#3887CA",
        },
        gray: {
          100: "#FFFFFF",
          200: "#F5F5F5",
          300: "#EBEBEB",
          400: "#E4E4E4",
          500: "#CECECE",
          600: "#A9A9A9",
          700: "#7C7C7C",
        },
        red: {
          100: "#FAD4D4",
          200: "#F5A9A9",
          300: "#F17E7E",
        },
        green: {
          100: "#D0EDE2",
          200: "#B9E4D4",
          300: "#5FE0B7",
        },
      },
    },
  },
  plugins: [],
}
