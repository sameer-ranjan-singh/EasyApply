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
          bg:"#e63946",
          text:"#f1faee",
          border:"#1d3557",
        },
        light1:{
          primary:"#FFEEA9", 
          secondary:"#e63946",
          bg:"#FEFFD2",
          text:"#FF7D29",
          border:"#FFBF78",
        },
        dark:{
          primary: '#007bff',
          secondary: '#6c757d',
          bg: '#181C14',
          text: '#ECDFCC',
          border:"#3C3D37",
        },
        dark1:{
          primary: '#007bff',
          secondary: '#6c757d',
          bg: '#212529',
          text: '#f8f9fa',
          border:"#1d3557",
        },
        dark2:{
          primary: '#FF6500',
          secondary: '#1E3E62',
          bg: '#0B192C',
          text: '#000000',
          border:"#1d3557",
        },      
        dark3:{
          primary: '#1E201E',
          secondary: '#3C3D37',
          bg: '#697565',
          text: '#ECDFCC',
          border:"#1d3557",
        },      
      },
    },
  },
  plugins: [],
};
export default config;
