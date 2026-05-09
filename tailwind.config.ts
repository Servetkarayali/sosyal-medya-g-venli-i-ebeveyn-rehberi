import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Çocuk dostu, sıcak ve güven veren palet
        family: {
          sky: "#7dd3fc",       // Açık gök mavisi
          ocean: "#38bdf8",     // Okyanus
          lavender: "#c4b5fd",  // Lavanta
          lilac: "#e9d5ff",     // Açık lila
          peach: "#fed7aa",     // Şeftali
          coral: "#fca5a5",     // Mercan
          mint: "#6ee7b7",      // Nane yeşili
          leaf: "#34d399",      // Yaprak
          sun: "#fde047",       // Güneş sarısı
          cloud: "#f1f5f9",     // Bulut beyazı
        },
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        safety: {
          green: "#10b981",
          yellow: "#f59e0b",
          red: "#ef4444",
          blue: "#0ea5e9",
        },
      },
      fontFamily: {
        sans: ["Nunito", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "soft": "0 4px 20px -2px rgba(0, 0, 0, 0.06)",
        "glow-blue": "0 0 30px -5px rgba(56, 189, 248, 0.3)",
        "glow-purple": "0 0 30px -5px rgba(196, 181, 253, 0.4)",
        "glow-green": "0 0 30px -5px rgba(110, 231, 183, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
