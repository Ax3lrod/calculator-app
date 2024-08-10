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
        calculatorbackground: "rgba(var(--calculatorbackground))",
        lightdarkbutton: "rgba(var(--lightdarkbutton))",
        topkeypad: "rgba(var(--topkeypad))",
        keypad: "rgba(var(--keypad))",
        buttontext: "rgba(var(--buttontext))",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
      },
      screens: {
				'4xl': '3517px',
				1558: '1558px',
				1120: '1120px',
				730: '730px',
				540: '540px',
				377: '377px',
				350: '350px',
				340: '340px',
				450: '450px',
				'3xs': '300px',
				xxs: '400px',
				xs: '475px',
			},
    },
  },
  plugins: [],
};
export default config;
