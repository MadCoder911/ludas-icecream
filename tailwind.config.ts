import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cookie: "#4FBBFB",
        brownie: "#996955",
        biscuit: "#FDBF79",
        vanilla: "#F8DA9B",
      },
    },
  },
  plugins: [],
};
export default config;
