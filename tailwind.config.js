/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 

      
      width:{
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px"
    },

    colors: {
      bg: "#E6E5DA",
      primary : "#AB3130",
      secondary: "#671917",
      link: "#121212",
      fadeGray: "#919191"
    }

  
  
  },
  },
  plugins: [],
}