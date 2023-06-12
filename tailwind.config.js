/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B1B1B",
        secondary: "#292929",
        accent: "#FFA31A",
        sechover: "#434343",
      },
    },
  },
  plugins: [],
};
