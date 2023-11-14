/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "dm-custom-black": "#14141b",
      "dm-support": "#e0c7c5",
      "dm-light": "#e0e2ee",
      "dm-fucshia": "#c662ac",
      "dm-mint": "#4abca0",
      "dm-custom-orange": "#f47a54",
      "lm-custom-black": "#101016",
      "lm-support": "#b39f9e",
      "lm-light": "#f9f9fc",
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
    },
  },
  plugins: [],
};
