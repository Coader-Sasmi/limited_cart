import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e1272e", //red
        secondary: "#F0F2F3", //light gray
        tertiary: "#020080", //blue
        textColor: "#484848", //dark gray
      },
    },
  },
  plugins: [],
} satisfies Config;
