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
        "aspen-blue": "rgba(38, 93, 161, 0.91)",
        "aspen-gray": "rgba(238,238,238,0.9)",
      },
      backgroundImage: {
        aspen: "url('/images/bg-students.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
