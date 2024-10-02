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
        background: "var(--background)",
        foreground: "var(--foreground)",
        whiteBase: "var(--white-base)",
        blackBase: "var(--black-base)",
        base: "var(--base)",
        secondary: "var(--secondary)",
        myLightBlack: "var(--my-light-black)",
        myOrange: "var(--my-orange)",
        myGray: "var(--my-gray)",
      },
    },
  },
  plugins: [],
};
export default config;
