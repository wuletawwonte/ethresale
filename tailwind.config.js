/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        grid4: "repeat(4, minmax(200px, 500px))",
        grid3: "repeat(3, minmax(200px, 500px))",
        grid2: "repeat(2, minmax(200px, 500px))",
        grid1: "repeat(1, minmax(200px, 500px))",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
