/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#17211f",
        mist: "#f7f7f2",
        ocean: "#0f7f88",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 33, 31, 0.11)",
      },
    },
  },
  plugins: [],
};
