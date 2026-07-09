import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        panel: "#111111",
        line: "#2A2A2A",
        mute: "#A3A3A3",
        brand: "#5B29DA",
        brandSoft: "#7C4DFF",
        accent: "#75C32C",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(91, 41, 218, 0.35), 0 24px 80px rgba(91, 41, 218, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
