import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue1: '#101626',
        cyan1: '#68E0CF',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #101626 ,#68E0CF)',
      },
      height: {
        'fill-available': 'fit-content', // Default value for non-webkit
      },
    },
  },
  plugins: [],
};
export default config;


