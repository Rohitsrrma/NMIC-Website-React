/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
       'nmicbg':'#f9f3ef'
      }
    },
  },
  plugins: [
    require('tailwindcss-elevation'),
    require('flowbite/plugin')
  ],
}

