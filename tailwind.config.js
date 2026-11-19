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
        'text': '#f4f1f8',
        'background': '#17131f',
        'primary': '#9a83f5',
        'secondary': '#73daca',
        'accent': '#bcb4ca',
        'button1': "#252033",
        "linearPrimarySecondary": "linear-gradient(#9a83f5, #73daca)"
      },

    },
  },
  plugins: [],
}

