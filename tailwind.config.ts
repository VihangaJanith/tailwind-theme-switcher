import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
        },
      },
      backgroundColor: {
        skin: {
          primary: "var(--color-bg-primary)",
          secondary: "var(--color-bg-secondary)",
          btn: "var(--color-btn-primary)",
          "btn-hover": "var(--color-btn-primary-hover)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
