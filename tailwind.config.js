const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE2626",
        secondary: "#221F1E",
        grey: "#F0F0F0",
        primaryred: "#ED2726",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", ...fontFamily.sans],
      },
      fontSize: {
        sizeone: "1rem",
        lgheading: "1.4rem",
        pointtwentyfour: "1.5rem",
        blackheading: "2.6rem",
        smallheading: "1.3rem",
        bodyfont: "1.125rem",
        pointnine: "0.9rem",
        pointeight: "0.8rem",
        pointnineteen: "1.188rem",
        pointeighteen: "1.125rem",
      },
      fontWeight: {
        light: 300,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};
