const { nextui } = require("@nextui-org/theme");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small screens (default)
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra-large screens
        "2xl": "1536px", // 2x Extra-large screens
      },
      colors: {
        primary: "#174d7b",
        primaryLight: "#236ba7",
        primaryDark: "#184e7d",
        secondary: "#ffa31a",
        tertiary: "#679b48",
        black: "#212121",
        white: "#ffffff",
        gray: "#808080e2",
        error: "#e00017",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};
export default config;
