/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
      '70/1': '70%',
      '40/1': '40%',
      '50/1': '50%',
      '45/1': '45%',
      '5/1': '5%',
      '10/1': '10%'
      },
      height: {
      '95/1': '95%',
      '50/1': '50%'
      },
      flexBasis:{
        '50/1': '50%'
      },
      gap:{
        '5/1': '5%',
        '10/1': '10%'
      },
      fontFamily: {
        'poppins': '"Poppins", sans-serif'
      },
      backgroundColor: {
        'gfn' : 'rgb(70, 180, 70)'
      },
      padding: {
        'center': '500px'
      }
    },
  },
  plugins: [],
}
