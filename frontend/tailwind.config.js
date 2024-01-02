/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: { // https://daisyui.com/theme-generator/
          "primary": "#a855f7",                  
          "secondary": "#38bdf8",                  
          "accent": "#3b82f6",                 
          "neutral": "#a8a29e",                 
          "base-100": "#292524",                 
          "info": "#a8a29e",                 
          "success": "#10b981",                 
          "warning": "#eab308",                 
          "error": "#be123c",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

