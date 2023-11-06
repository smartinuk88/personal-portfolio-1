/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "custom-black": "#14141b",
      "support-text": "#e0c7c5",
      light: "#e0e2ee",
      fucshia: "#c662ac",
      mint: "#4abca0",
      "custom-orange": "#f47a54",
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
