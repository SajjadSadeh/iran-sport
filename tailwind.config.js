/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstOrange: "#FFBD5C",
        firstGray: "#2E353C",
      },
    },
  },
  plugins: [],
};
