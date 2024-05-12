/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        boska: ["Boska", 'Arial', 'sans-serif'],
        switzer: ["Switzer", 'Arial', 'sans-serif']
      },
    },
  },
  plugins: [],
}

