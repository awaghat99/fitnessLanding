/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "lemon-yellow": "#D7FB00",
        white: "#FFFFFF",
        "gray-md": "#999999",
        "gray-dk": "#666666",
        black: "#000000",
      },
      backgroundImage: {
        hero: "url('./assests/images/hero-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
