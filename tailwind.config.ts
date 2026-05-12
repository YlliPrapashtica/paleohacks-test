import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#55338A",
          red: "#DB250D",
          redDeep: "#DB250D",
          yellow: "#FFF962",
          orange: "#F25C2C",
          bannerBg: "#F0F1F7",
        },
      },
      fontFamily: {
        body: ["Arial", "Helvetica", "sans-serif"],
        heading: ["var(--font-roboto-condensed)", "Arial Narrow", "sans-serif"],
      },
      maxWidth: {
        content: "640px",
        shell: "1024px",
      },
    },
  },
  plugins: [],
};

export default config;
