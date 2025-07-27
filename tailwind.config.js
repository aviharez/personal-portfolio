/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
        // Custom terminal colors
        "terminal-bg": "#0d1117",
        "terminal-surface": "#161b22",
        "terminal-border": "#21262d",
        "terminal-text": "#c9d1d9",
        "terminal-text-dim": "#8b949e",
        "syntax-green": "#7ee787",
        "syntax-blue": "#79c0ff",
        "syntax-yellow": "#f2cc60",
        "syntax-red": "#ff7b72",
        "syntax-orange": "#ffa657",
        "syntax-cyan": "#39d0d6",
        "syntax-highlight": "#7ee787",
        "syntax-string": "#f2cc60",
        "syntax-number": "#ffa657",
        "syntax-keyword": "#79c0ff",
        "syntax-comment": "#8b949e",
        "pixel-green": "#00ff00",
        "pixel-cyan": "#00ffff",
        "pixel-yellow": "#ffff00",
        "pixel-red": "#ff0040",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        mono: ["Fira Code", "Monaco", "monospace"],
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        glitch: {
          "0%, 14%, 15%, 49%, 50%, 99%, 100%": { transform: "translate(0)" },
          "15%, 49%": { transform: "translate(-2px, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s infinite",
        blink: "blink 1s infinite",
        glitch: "glitch 0.5s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  // Add safelist to ensure these classes are always included
  safelist: [
    "text-syntax-green",
    "text-syntax-blue",
    "text-syntax-yellow",
    "text-syntax-red",
    "text-syntax-orange",
    "text-syntax-cyan",
    "text-syntax-highlight",
    "text-syntax-string",
    "text-syntax-number",
    "text-syntax-keyword",
    "text-syntax-comment",
    "text-terminal-bg",
    "text-terminal-surface",
    "text-terminal-border",
    "text-terminal-text",
    "text-terminal-text-dim",
    "text-pixel-green",
    "text-pixel-cyan",
    "text-pixel-yellow",
    "text-pixel-red",
  ],
}
