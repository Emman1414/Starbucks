/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#006241",
        secondary: "#D4E9E2",
        tertiary: "#1E3932",
        accent: "#00754A",
        hover: " #158159",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
