const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        hanSans: ["Black Han Sans", "sans-serif"],
        sans : ["Open Sans", "sans-serif"]
      },
      colors: {
        custom: "#EFEFEF",
        Ylate:'#F1EBDF'
        
      },
    },
    screens: {
  
      'sm': '414px',
      // => @media (min-width: 640px) { ... }
      'sm1' : '430px',
      'sm2':'412px',
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
   
  },
  plugins: [],
});
