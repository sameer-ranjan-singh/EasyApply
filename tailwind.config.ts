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
        light:{
          primary:"#f1faee", 
          secondary:"#e63946",
          bg:"#457b9d",
          text:"#a8dadc",
          border:"#1d3557",
        },
        dark:{
          primary: '#007bff',
          secondary: '#6c757d',
          bg: '#212529',
          text: '#f8f9fa',
          border:"#1d3557",
        }        
      },
    },
  },
  plugins: [],
};
export default config;
