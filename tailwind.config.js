/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx,vue}"
  ],
  theme: {
    extend: {
      colors:{
        'mushafBg': '#FFFBF9',
        'Neon-Green': 'hsl(150, 100%, 66%)',
        'Grayish-Blue': 'hsl(217, 19%, 38%)',
        'Dark-Grayish-Blue': 'hsl(217, 19%, 24%)',
        'Dark-Blue': 'hsl(218, 23%, 16%)',
      },
      fontSize:{
        '2.5xl':'28px'
      }
    },
  },
  plugins: [],
}