/** @type {import('tailwindcss').Config} */
import tailwindAnimate from 'tailwindcss-animate';

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "3xl": "1700px",
        "4xl": "2000px",
        "5xl": "2300px",
        "6xl": "2600px",
        "7xl": "2900px",
        "8xl": "3200px",
        "9xl": "3500px",
        "10xl": "3800px",
        "11xl": "4100px",
        "12xl": "4400px",
        "13xl": "4700px",
        "14xl": "5000px",
        "15xl": "5300px",
      },
    },
    extend: {
       opacity: {
        'light': '0.1', // 10% d'opacité, pour un effet très léger
        'medium': '0.5', // 50% d'opacité, pour un équilibre entre visible et transparent
        'heavy': '0.8', // 80% d'opacité, pour un effet plus prononcé tout en gardant une certaine transparence
        'almost-solid': '0.95', // 95% d'opacité, presque solide mais légèrement transparent
      },
      height: {
        Nav: "var(--nav-height)",
        Footer: "var(--footer-height)",
        fit:"calc(100dvh - var(--nav-height) - var(--footer-height))",
      },
      width: {
        drawerWidth: "var(--drawer-width)",
        drawerWidthMobile: "var(--drawer-width-mobile)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        nav: {
          DEFAULT: "hsl(var(--nav-background))",
          foreground: "hsl(var(--nav-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(-Muted))",
          foreground: "hsl(var(-Muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        label: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        menubar: {
          DEFAULT: "hsl(var(--primary-background))",
          foreground: "hsl(var(--primary-foreground))",
        },
        form: {
          DEFAULT: "hsl(var(--primary-background))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
}