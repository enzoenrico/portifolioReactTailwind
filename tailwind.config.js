/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Roboto', 'Arial']
      },
      minWidth: {
        'project': '512px',

      },
      minHeight: {
        'project': '312px'
      }
    },
    plugins: [
    ],
  },
}



