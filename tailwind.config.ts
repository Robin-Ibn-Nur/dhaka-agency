import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: "#E31E24",
          stamp: "#8B1E1E",
          hover: "#C9141A",
          dark: "#661414",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          deep: "#0E0E0E",
          muted: "#4A4A4A",
          faint: "#7A7A7A",
        },
        parchment: {
          DEFAULT: "#F3EFE6",
          surface: "#FAF7EE",
          border: "#E5DEC9",
          aged: "#E8DFCA",
          dark: "#D8CDAE",
        },
        brass: {
          DEFAULT: "#C5A059",
          dark: "#8F6E2C",
          light: "#E3C27E",
        },
      },
      fontFamily: {
        sans: ["'Old Newspaper'", "var(--font-old-newspaper)", "var(--font-headline)", "sans-serif"],
        newspaper: ["'Old Newspaper'", "var(--font-old-newspaper)", "var(--font-headline)", "sans-serif"],
        headline: ["'Old Newspaper'", "var(--font-old-newspaper)", "var(--font-headline)", "sans-serif"],
        body: ["var(--font-body)", "'EB Garamond'", "Georgia", "serif"],
        mono: ["'Old Newspaper'", "var(--font-old-newspaper)", "monospace"],
        inkbleed: ["'Old Newspaper'", "var(--font-old-newspaper)", "sans-serif"],
        "inkbleed-serif": ["'Old Newspaper'", "var(--font-old-newspaper)", "serif"],
        bengali: ["var(--font-bengali)", "serif"],
      },
      boxShadow: {
        deboss: "4px 4px 0px 0px #1A1A1A",
        "deboss-sm": "2px 2px 0px 0px #1A1A1A",
        "deboss-lg": "6px 6px 0px 0px #1A1A1A",
        "deboss-crimson": "4px 4px 0px 0px #E31E24",
        "stamp": "inset 0 0 0 2px #8B1E1E, inset 0 0 10px rgba(139, 30, 30, 0.15)",
      },
      animation: {
        "crank-slow": "crank 18s linear infinite",
        "crank-reverse": "crank-rev 14s linear infinite",
        "flicker": "film-flicker 0.15s infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
      },
      keyframes: {
        crank: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "crank-rev": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "film-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.96" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.92", transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
