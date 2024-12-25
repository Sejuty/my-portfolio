/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', "serif"], // Add your custom font
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },

      colors: {
        primary: "#23153c", // Add a custom color
        secondary: "#FF3F81", // Add another custom color
        tertiary: "#2196F3", // Add another custom color
      },
    },
  },
  plugins: [],
};
