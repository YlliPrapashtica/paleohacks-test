import { Roboto_Condensed } from "next/font/google";

export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto-condensed",
  preload: true,
});
