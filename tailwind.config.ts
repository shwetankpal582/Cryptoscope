import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs': '350px',
      "xsm": "450px",
      "sm": "600px",
      "xlg": "950px",
      ...defaultTheme.screens,
    },
    dropShadow: {
      '3xl': '0 35px 35px rgba(255, 255, 255, 0.25)',
      '4xl': [
        '0 5px 15px rgba(255, 255, 255, 0.25)',
        '0 45px 65px rgba(0, 0, 0, 0.15)'
      ],
      "tile": "0px 0px 10px rgba(255, 247, 247, 0.25)"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pixel: ['var(--font-pixel)'],
        gadems: ["var(--font-gadems)"],
        ardestine: ["var(--font-ardestine)"],
        montserrat: ["var(--font-montserrat)"]
      },
    },
    colors: {
      text: "#ffffff",
      mainBackground: "linear-gradient(190.59deg, #020202 1.41%, #01171C 34.27%, #000000 67.14%, #01171C 100%)",
      tilesBackground: "rgba(0, 0, 0, 0.3)",
      tilesShadow: "0px 0px 17px rgba(255, 247, 247, 0.25)",
      tilesFilter: "blur(8px)",
      contentBackground: " rgba(255, 255, 255, 0.3);",
      inputBackground: "rgba(255, 255, 255, 0.2)",
      newTileBackground: "rgba(255, 255, 255, 0.1)"
    }
  },
  plugins: [],
};
export default config;
