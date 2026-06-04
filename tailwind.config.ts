import type { Config } from "tailwindcss"

const config = {
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
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        /* ── shadcn/ui CSS-variable tokens ── */
        border:      "hsl(var(--border))",
        input:       "hsl(var(--input))",
        ring:        "hsl(var(--ring))",
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* ── Brand palette (named tokens) ── */
        brand: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#3730a3",   /* primary light-mode */
          800: "#312e81",
          900: "#1e1b4b",
          950: "#0c0b1d",   /* dark-mode bg */
        },
        cta: {
          DEFAULT: "#f59e0b",   /* amber-500 — all primary CTAs */
          hover:   "#d97706",   /* amber-600 */
          light:   "#fef3c7",   /* amber-100 bg tint */
          dark:    "#fbbf24",   /* amber-400 for dark mode */
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans:    ["var(--font-body)",    "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg:   "var(--radius)",                      /* 14px */
        md:   "calc(var(--radius) - 2px)",          /* 12px */
        sm:   "calc(var(--radius) - 6px)",          /* 8px  */
        card: "16px",
        cta:  "12px",
        pill: "9999px",
      },
      boxShadow: {
        card:         "0 1px 4px 0 rgba(15,23,42,0.06), 0 4px 16px 0 rgba(15,23,42,0.04)",
        "card-hover": "0 4px 16px 0 rgba(55,48,163,0.12), 0 8px 32px 0 rgba(55,48,163,0.06)",
        "cta":        "0 4px 14px 0 rgba(245,158,11,0.35)",
        "cta-hover":  "0 6px 20px 0 rgba(245,158,11,0.50)",
        "nav":        "0 1px 0 0 rgba(15,23,42,0.06)",
        /* dark-mode variants */
        "card-dark":      "0 1px 4px 0 rgba(0,0,0,0.3), 0 4px 16px 0 rgba(0,0,0,0.2)",
        "card-hover-dark":"0 4px 16px 0 rgba(129,140,248,0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
        shimmer: {
          "0%, 90%, 100%": { "background-position": "calc(-100% - var(--shimmer-width, 200px)) 0" },
          "30%, 60%":       { "background-position": "calc(100%  + var(--shimmer-width, 200px)) 0" },
        },
        shine: {
          from: { backgroundPosition: "0 0" },
          to:   { backgroundPosition: "-200% 0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        scroll:    "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        shimmer:   "shimmer 8s infinite",
        shine:     "shine 2s linear infinite",
        "fade-up": "fade-up 0.5s ease-out both",
        "fade-in": "fade-in 0.4s ease-out both",
        "slide-down": "slide-down 0.25s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
