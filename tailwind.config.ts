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
        cream: "#fef8ec",
        ink: "#0a0a0a",
        hot: "#ff2e63",
        electric: "#0047ff",
        lime: "#d4ff00",
        mustard: "#ffb800",
        mint: "#a0f0c0",
        peach: "#ffb3a3",
        sky: "#8ecae6",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "sans-serif"],
        display: ['"Times New Roman"', "Georgia", "serif"],
        mono: ['"SF Mono"', "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        "brut": "6px 6px 0 0 #0a0a0a",
        "brut-lg": "10px 10px 0 0 #0a0a0a",
        "brut-sm": "3px 3px 0 0 #0a0a0a",
        "brut-hot": "6px 6px 0 0 #ff2e63",
        "brut-lime": "6px 6px 0 0 #d4ff00",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        "wiggle": "wiggle 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
