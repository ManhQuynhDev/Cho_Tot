/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors :{
        primary: "#2489D3",
        secondary: "#000000",
        danger: "#E63946",
        success: "#28a745",
        customGray: "#f5f5f5",
      },
      fontSize :{
        '30' : '30.875rem',
        's-16' : '1rem'
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

