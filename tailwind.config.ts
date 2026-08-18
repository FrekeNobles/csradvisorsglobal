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
        ink: "#10213F",
        navy: "#0B1830",
        teal: "#0B8FA3",
        cyan: "#1DB7C8",
        mist: "#F4F8FA",
        line: "#DDE8EE",
        gold: "#D8A63C",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(16, 33, 63, 0.10)",
        glass: "0 12px 40px rgba(16, 33, 63, 0.12)",
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up .65s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
