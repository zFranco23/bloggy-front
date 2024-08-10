import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        skyblue: {
          DEFAULT: "#0091FF",
          50: "#80C8FF",
          60: "#66BDFF",
          70: "#4DB2FF",
          80: "#33A7FF",
          90: "#1A9CFF",
          110: "#0083E6",
          120: "#0074CC",
          130: "#0066B3",
          140: "#005799",
        },
      },
    },
  },
  plugins: [],
};
export default config;
