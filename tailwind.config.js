/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7f2a3c',
        secondary: '#c20000',
        tertiary: '#121212',
        creamson: '#fff0de',
        'dim-red': '#8b0000',
        'dim-white': '#ffffffb3'
      }
    },
    fontFamily: {
      inter: ['Inter', 'Helvetica', 'sans-serif']
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
