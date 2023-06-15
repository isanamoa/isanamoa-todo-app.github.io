/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundImage: {
        desktopBg: "url('./src/assets/landscape-desktop.png')",
        mobileBg: "url('./src/assets/landscape-mobile.png')"
      }
    },
  },
  plugins: [],
}

