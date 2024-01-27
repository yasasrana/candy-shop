module.exports={
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        Boodle:["Boodle-Black"],
      },
      screens: {
        'sm': '425px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '2560px',
      },
      colors: {
        primary: '#0a2d6a',
        secondary: '#F4346C'
     
      },
    },
  },
  plugins: [],
}

