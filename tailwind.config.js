/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bcp-gradient-blue":
          "linear-gradient(126.97deg, #0030A1 0.91%, #000A23 67.25%)",
        "bcp-gradient-orange":
          "linear-gradient(126.97deg, #FF7A00 0.91%, #2A0F00 67.25%)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
