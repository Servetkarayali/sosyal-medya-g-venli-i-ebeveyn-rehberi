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
        paper: "#faf8f3",
        ink: "#141419",
        muted: "#6b6b74",
        line: "#e7e4dc",
        surface: "#ffffff",
        sand: "#f0ede4",
        accent: {
          DEFAULT: "#2f3aff",
          soft: "#eff0ff",
          ink: "#0e1180",
        },
        coral: "#ff5a4a",
        lime: "#c6ea3a",
        // legacy — eski sayfalar icin
        void: "#141419",
        carbon: "#1c1c23",
        ash: "#24242c",
        steel: "#e7e4dc",
        neon: {
          cyan: "#2f3aff",
          pink: "#ff5a4a",
          lime: "#c6ea3a",
          purple: "#8b5cf6",
          amber: "#ffb020",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "sans-serif"],
        display: ['"Times New Roman"', "Georgia", "serif"],
        mono: ['"SF Mono"', "Menlo", "Consolas", "monospace"],
      },
      animation: {
        "marquee": "marquee 45s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
