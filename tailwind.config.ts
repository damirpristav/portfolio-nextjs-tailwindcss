import type { Config } from "tailwindcss";
import { screens } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      tienne: ['var(--font-tienne)'],
      redressed: ['var(--font-redressed)'],
    },
    colors: {
      white: '#fff',
      primary: {
        DEFAULT: '#3f6da4',
        400: '#dee5ed',
        300: '#98b3d3',
        200: '#c5d8ee',
      },
      dark: {
        DEFAULT: '#00090d',
        400: '#051014',
        300: '#142429',
      },
    },
    screens: {
      ...screens,
      'xs': '400px',
    },
  },
  plugins: [],
};
export default config;
