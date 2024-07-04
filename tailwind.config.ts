import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smTab: "40.62em", // (used)
      tab: "48em", // (not used) // 925px / 875px = 54.68em / 768px = 48em // 1075px = 67.18em
    },
    colors: {
      desaturatedDarkCyan: "#5BA4A4",
      lightGrayishCyanBackground: "#EFFAFA",
      lightGrayishCyanFilter: "#EEF6F6",
      darkGrayishCyan: "#7B8E8E",
      veryDarkGrayishCyan: "#2C3A3A",
    },
    fontFamily: {
      leagueSpartan: ["var(--font-leagueSpartan)"],
    },
    gridTemplateRows: {
      cardRows: "32px auto auto",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
