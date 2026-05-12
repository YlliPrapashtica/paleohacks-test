import type { Viewport } from "next";
import { robotoCondensed } from "@/lib/fonts";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoCondensed.variable}>
      <body>{children}</body>
    </html>
  );
}
