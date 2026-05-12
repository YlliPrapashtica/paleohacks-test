import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://paleohacks-test.vercel.app"),
  title: "Duke University Doctor: Do This For 3 Seconds Before You Shower",
  description:
    "How a simple 3-second pre-shower habit may help keep your heart strong at any age.",
  openGraph: {
    title: "Stay 'Heart Strong' at Any Age",
    description:
      "How a simple 3-second pre-shower habit may help keep your heart strong at any age.",
    type: "article",
  },
  robots: { index: true, follow: true },
};
