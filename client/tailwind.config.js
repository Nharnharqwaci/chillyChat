/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'violet':'#6F42C1',
      'mildviolet': '#ECE2FF',
      'green': '#69BC35',
      'white': '#ffffff',
      'inputcolor': ' #F6F5F6',
      'bordercolor':'#8672AB',
      'idcolor':'#8672AB',
      'timecolor':'#BDBDBD',
      'navcolor': '#4A2C81',
      'textcolor': ' #382161',
      'theadcolor':  '#DBD5E6'
  

    },
    
    fontFamily:{
      sans:['Poppins']
    },
    
    extend: {
      spacing: {
      '80%': '80%',
    }
}
    
  },
  plugins: [],
}
