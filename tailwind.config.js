/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-color": "#FABC3F",
      "secondary-color": "#E85C0D",
      "light-red": "#C7253E",
      "dark-red": "#821131",
      "font-color": "#E9EFEC",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
