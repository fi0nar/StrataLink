/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(220, 40%, 10%)", // Dark navy blue
        foreground: "hsl(0, 0%, 98%)", // Almost white for text
        primary: {
          DEFAULT: "hsl(200, 85%, 70%)", // Light blue
          foreground: "hsl(220, 40%, 10%)",
        },
        secondary: {
          DEFAULT: "hsl(220, 35%, 15%)", // Slightly lighter navy
          foreground: "hsl(0, 0%, 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84.2%, 60.2%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(220, 35%, 15%)",
          foreground: "hsl(0, 0%, 80%)",
        },
        accent: {
          DEFAULT: "hsl(200, 85%, 70%)", // Light blue
          foreground: "hsl(220, 40%, 10%)",
        },
        popover: {
          DEFAULT: "hsl(220, 40%, 10%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        card: {
          DEFAULT: "hsl(220, 35%, 15%)",
          foreground: "hsl(0, 0%, 98%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} 