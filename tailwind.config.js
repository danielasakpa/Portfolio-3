/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ["Poppins"],
        'Bebas': ["Bebas Neue"],
      },
      colors: {
        'text': '#96e9c6',
        'background': '#6c22a5',
        'primary': '#6962ac',
        'secondary': '#85c0c1',
        'accent': '#ededf2',
        'button1': "#7452AD",
        "linearPrimarySecondary": "linear-gradient(#6962ac, #85c0c1)"
      },

    },
  },
  plugins: [],
}

