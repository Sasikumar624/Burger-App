/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: "#FF7700",
          "text-dark": "#222222",
          "text-gray": "#777777",
          "input-bg": "#F5F7FA",
          "border-light": "#E6EAEF",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  