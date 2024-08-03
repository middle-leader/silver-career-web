/** @type {import('tailwindcss').Config} */
const path = require("path");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "DM Serif Display",
      secondary: "Jost",
    },
    backgroundImage: (theme) => ({
      hero: `url('${path.resolve(
        __dirname,
        "./src/assets/images/hero/bg.jpg"
      )}')`,
      grid: `url('${path.resolve(
        __dirname,
        "./src/assets/images/grid/bg.jpg"
      )}')`,
    }),
    extend: {
      colors: {
        primary: {
          DEFAULT: "#292f36",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
        mentor: "#2400FF",
        mentee: "#F24822",
        blue: {
          DEFAULT: "#0366FF",
          hover: "#024db8",
        },
      },
    },
  },
  plugins: [],
};
