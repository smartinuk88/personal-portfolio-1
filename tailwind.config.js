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
      "lm-custom-black": "#101016",
      "lm-support": "#2d2827",
      "lm-light": "#fcfcfd",
      "lm-fucshia": "#9e4e8a",
      "lm-mint": "#3b9680",
      "lm-custom-orange": "#c36243",
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
