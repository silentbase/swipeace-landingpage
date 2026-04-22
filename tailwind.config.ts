import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:       "#FFFFFF",
        surface:          "#FFFFFF",
        surface2:         "#F1F3F9",
        "surface-active": "#E8EBF4",
        border:           "#E2E6F0",
        "border-light":   "#D0D5E8",
        primary:          "#5170FF",
        "primary-light":  "#6B85FF",
        "primary-dim":    "rgba(81,112,255,0.08)",
        success:          "#10B981",
        error:            "#EF4444",
        "text-primary":   "#0F1117",
        "text-secondary": "#4B5563",
        "text-muted":     "#9CA3AF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 70% 40% at 50% -5%, rgba(81,112,255,0.07), transparent 65%)",
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease forwards",
        "fade-in":   "fadeIn 0.4s ease forwards",
        "spin-slow": "spin 1.2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
