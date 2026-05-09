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
        void: "#05050a",
        carbon: "#0b0b12",
        ash: "#14141c",
        steel: "#2a2a36",
        neon: {
          cyan: "#00f0ff",
          pink: "#ff2daf",
          lime: "#caff33",
          purple: "#a855f7",
          amber: "#ffb020",
        },
        paper: "#f5f1e8",
        ink: "#0a0a0a",
        hot: "#ff2e63",
        electric: "#0047ff",
        lime: "#d4ff00",
        mustard: "#ffb800",
        cream: "#fef8ec",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "sans-serif"],
        display: ['"Times New Roman"', "Georgia", "serif"],
        mono: ['"SF Mono"', "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        "brut": "6px 6px 0 0 #0a0a0a",
        "brut-sm": "3px 3px 0 0 #0a0a0a",
        "glow-cyan": "0 0 40px rgba(0, 240, 255, 0.3)",
        "glow-pink": "0 0 40px rgba(255, 45, 175, 0.35)",
        "glow-lime": "0 0 40px rgba(202, 255, 51, 0.3)",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "scroll-line": "scroll-line 2s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "scroll-line": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
