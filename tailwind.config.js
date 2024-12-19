/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './JS/script.js'],
  theme: {
    container: {
      center: true,
    },
    
    extend: {
      colors: {
        'primary': '#1f1f1f',
        'secondary': '#0ea5e9',
      },

      screens: {
        supersmall: '340px',
        xsmall: '360px',
        smaller: '450px',
        tabletsmall: '768px',
        tablet: '981px',
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

