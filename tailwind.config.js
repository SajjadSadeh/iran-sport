/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstOrange: "#FFBD5C",
        secondOrange: "#FF9800",
        firstGray: "#2E353C",
        SecondGray: "#94A0AE",
        thirdGray: "#eee",
        blueGray: "#DBE6F2",
      },
    },
  },
  plugins: [],
};
