/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'moranga': ['Moranga'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      colors: {
        'dark': "#090c10",
        'dark-lightgray': "#21262d",
        'dark-gray': "#30363d"
      },
      boxShadow: {
        'border-dark': "0px 0px 0px 2px rgba(48, 54, 61, 1)",
        'border-dark-outer': "0px 0px 0px 5px rgba(48, 54, 61, 1)",
        'border-light': "0px 0px 0px 2px rgba(240, 242, 248, 0.5)",
        'border-light-outer': "0px 0px 0px 5px rgba(240, 242, 248, 0.5)"
      }
    },
  },
  plugins: [],
}
