/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      "dm-custom-black": "#14141b",
      "dm-support": "#e0c7c5",
      "dm-light": "#e0e2ee",
      "dm-fucshia": "#c662ac",
      "dm-mint": "#4abca0",
      "dm-custom-orange": "#f47a54",
      "lm-custom-black": "#020202",
      "lm-support": "#292423",
      "lm-light": "#fefeff",
      "lm-fucshia": "#a86096",
      "lm-mint": "#4fa18d",
      "lm-custom-orange": "#c97256",
    },
    fontFamily: {
      sans: ["Poppins", "sans - serif"],
    },
    extend: {
      boxShadow: {
        "inner-fucshia": "inset 0 0 0 3px #c662ac",
        "inner-mint": "inset 0 0 0 3px #4abca0",
      },
      spacing: {
        "screen-minus-18": "calc(100vw - 4.5rem)",
        "screen-minus-19": "calc(100vw - 4.75rem)",
      },
    },
  },
  plugins: [],
};
