import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#5B2A86",
          red: "#E2231A",
          redDeep: "#B5170F",
          yellow: "#FFF200",
          orange: "#F25C2C",
          bannerBg: "#EFEAEF",
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
