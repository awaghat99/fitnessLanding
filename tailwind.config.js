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
        hero: "url('./assets/images/hero-background.svg')",
        yoga: "url('./assets/images/yoga.jpg')",
        cardio: "url('./assets/images/cardio.jpg')",
        strength: "url('./assets/images/strength.jpg')",
        boxing: "url('./assets/images/boxing.jpg')",
        dance: "url('./assets/images/dance.jpg')",
        pilates: "url('./assets/images/pilates.jpg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
