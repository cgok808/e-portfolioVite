/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        cOrange: "#e4991d",
        cDark: "#242424",
        cLight: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
