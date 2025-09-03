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
      bg: "#e6e5dc",
      primary : "#0398fc",
      secondary: "#1a4570",
      link: "#121212",
      fadeGray: "#919191"
    }

  
  
  },
  },
  plugins: [],
}