import type { Config } from "tailwindcss";
// import {title} from "process";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        title: ["poppins"],
      }
    },
  },
  plugins: [],
} satisfies Config;
