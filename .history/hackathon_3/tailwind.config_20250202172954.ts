import type { Config } from "tailwindcss";
// import {title} from "process";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          Poppins: ["Poppins", "sans-serif"],
        },
        colors: {
          primary: "#FBEBB5",
        },
      },
    },
  };
  plugins: [],
} satisfies Config;
