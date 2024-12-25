/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23153c", // Add a custom color
        secondary: "#FF3F81", // Add another custom color
      },
    },
  },
  plugins: [],
};
