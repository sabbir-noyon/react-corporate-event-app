/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif;",
        sourceSans:"'Source Sans 3', sans-serif;"
      }
    },
  },
  plugins: [require("daisyui")],
}

