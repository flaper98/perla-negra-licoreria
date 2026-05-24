/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pearl: "#f8f3e8",
        gold: "#d4af37",
        darkgold: "#a77d1d"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(0,0,0,.16)"
      }
    }
  },
  plugins: []
};
