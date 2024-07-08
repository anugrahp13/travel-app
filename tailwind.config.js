/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './databooking.html',
    './datapackage.html',
    './datadestination.html',
    './adddestination.html',
    './updatedestination.html',
    './datadesrun.html',
    './src/components/**/*.{html,js}',
    './pages/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': "#00D4FF",
        'secondary': "#00C0E6",
        'navy': "#152C5B",
        'lightGray': "#F5F6F8",  
        'pureGray': "#E5E5E5",
        'darkGray':"#B3B3B3",
        'textGray':"#8f8f8f",
        'pink': "#FF498B",
        'dark': '#0f172a'
      },
      screens: {
        '2xl' : '1320px'
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}