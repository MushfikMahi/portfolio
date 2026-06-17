import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#08080A",
        onyx: "#121216",
        charcoal: "#1B1B21",
        gold: {
          DEFAULT: "#CBA869",
          bright: "#EAD6A0",
          deep: "#8A6E3B",
        },
        ivory: "#F4EFE6",
        smoke: "#9C9790",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #EAD6A0 0%, #CBA869 45%, #8A6E3B 100%)",
        "radial-glow":
          "radial-gradient(circle at 50% 50%, rgba(203,168,105,0.16) 0%, rgba(203,168,105,0) 70%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        "spin-slow": "spin-slow 90s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
