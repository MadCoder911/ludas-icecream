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
        brownies: "#996955",
        vanilla: "#F8DA9B",
      },
    },
  },
  plugins: [],
};
export default config;
