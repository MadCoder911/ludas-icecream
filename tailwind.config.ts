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
        cookies: "#4FBBFB",
        biscuit: "#FDBF79",
        vanilla: "#F8DA9B",
        brownies: "#996955",
      },
    },
  },
  plugins: [],
};
export default config;
