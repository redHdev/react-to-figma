/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1120px',
      // => @media (min-width: 960px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    boxShadow : {
      "ladind_card" : "0px 1.03704px 2.47917px rgba(0, 0, 0, 0.052963)",
    },
    extend: {
      colors : {
        "dark_blue" : "#0A2A5E",
        "light_blue" : "#0049be",
        "black" : "#222222",
        "white" : "#FFFFFF",
        "footer_bg" : "rgba(255, 240, 245, 0.3)",
        'header1': "rgba(255, 240, 245, 0.2)",
      },
    },
    fontFamily : {
      "gilroy_regular" : "Gilroy-Regular",
      "raleway" : "Raleway",
      'inter' : "Inter"
    },
    backgroundImage : {
      'landing_gr' : "linear-gradient(90deg, rgba(235,251,255,1) 0%, rgba(240,240,230,1) 42%, rgba(240,240,230,1) 49%, rgba(198,218,253,1) 73%, rgba(198,218,253,1) 100%)"
    }
  },
  plugins: [],
}
