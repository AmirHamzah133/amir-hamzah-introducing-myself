/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
    },
    
    extend: {
      colors: {
        'primary': '#222222',
        'secondary': '#0ea5e9',
      },

      screens: {
        xsmall: '360px',
        smaller: '450px',
      },

      fontFamily: {
        primary: 'Host Grotesk, serif',
        japan: 'Noto Serif JP, serif',
        spaceg: 'Funnel Sans, serif',
        gothic: 'Didact Gothic, serif',
        display: 'Funnel Display, serif',
      }
    },
  },
  plugins: [],
}

