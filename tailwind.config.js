/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      poppins: "Poppins",
    },

    extend: {
      colors: {
        buttonPrimary: "#420074",
        textPrimary: "#2F2F2F",
        textSecondry: "#555555",
        textSecondry2: "#66686E",
        textNav: "#555555",
        borderColor: "#EEEEEE",
        bgGray: "#F0F0F1",
      },
    },
  },
  plugins: [],
};
