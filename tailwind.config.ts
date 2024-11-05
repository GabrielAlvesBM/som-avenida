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
        myLightBlack2: "var(--my-light-black2)",
        myBlackGray: "var(--my-black-gray)",
        myLightGray: "var(--my-light-gray)",
        myWhite: "var(--my-white)",
        myOrange: "var(--my-orange)",
        rangeInput: "var(--range-input)",
        selectedColor: "var(--selected-color)",
        adsBg: "var(--ads-bg)",
        footerColor: "var(--footer-color)",
        formInputColor: "var(--form-input)",
      },
      screens: {
        'custom-500': '500px',
        'custom-375': '375px',
      },
    },
  },
  plugins: [],
};
export default config;
