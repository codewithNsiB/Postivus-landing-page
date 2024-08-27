/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      green: "#B9FF66",
      dark: "#191A23",
      gray: "#F3F3F3",
      black: "#000000",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },

    extend: {
      boxShadow: {
        "bottom-10": "0 10px 10px -5px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        scroll: "scroll 50s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
