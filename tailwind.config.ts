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
        myBlackGray: "var(--my-black-gray)",
        myLightBlack: "var(--my-light-black)",
        myLightGray: "var(--my-light-gray)",
        myWhite: "var(--my-white)",
        myOrange: "var(--my-orange)",
        rangeInput: "var(--range-input)",
        selectedColor: "var(--selected-color)",
      },
    },
  },
  plugins: [],
};
export default config;
