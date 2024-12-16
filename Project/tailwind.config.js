/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
        
      },
      animation: {
        float1: "float1 3s infinite linear",
        float2: "float2 3.5s infinite linear",
      },
      keyframes: {
        float1: {
          "0%": {
            transform: "rotate(0deg) translate3d(10px, 0, 0) rotate(0deg)",
          },
          "100%": {
            transform: `rotate(360deg) translate3d(10px, 0, 0) rotate(-360deg)`,
          },
        },
        float2: {
          "0%": {
            transform: "rotate(0deg) translate3d(10px, 0, 0) rotate(0deg)",
          },
          "100%": {
            transform: `rotate(-360deg) translate3d(10px, 0, 0) rotate(360deg)`,
          },
        },
      },
    },
    fontFamily: {
      sans: "Montserrat, sans-serif",
      oswald: ['Oswald', 'sans-serif'],
    },
    fontWeight: {
      thin: "100",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    colors: {
      'custom-blue': '#1e40af',
        'custom-green': '#10b981',
        'custom-orange': '#f97316',
      transparent: "transparent",
      white: "#ffffff",
      red: "#ff0336",
      black: '#000000', // Add your custom black color here (this is the default black)
      customBlack: '#1A1A1A', // Example of a custom black color (darker or lighter shade)
      gray: {
        50: "#efefef",
        100: "#dedede",
        150: "#b4b4b4",
        200: "#a1a1a1",
        250: "#7e7e7e",
        300: "#6d6d6d",
        350: "#646464",
        400: "#595959",
        450: "#3f3f3f",
        500: "#323232",
        550: "#2b2b2b",
        600: "#000000",
      },
      yellow: {
        800: '#996600',
        500: '#FBBF24',
        600: '#ff9900',
        700: '#cc7a00',
        
        900: '#664d00', // Example color for yellow-500
      },
      
      
    },
    container: {
      center: true,
    },
    screens: {
      xsm: "375px",
      sm: "450px",
      md: "540px",
      lg: "620px",
      xl: "800px",
      "2xl": "1000px",
      "3xl": "1200px",
    },
  },
  plugins: [],
};
