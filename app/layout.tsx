import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Amjid Sattar — DVM Student · Developer · Builder",
  description:
    "Personal portfolio of Muhammad Amjid Sattar — a DVM student, developer, builder, and AI explorer working at the intersection of medicine, technology, and AI.",
  keywords: [
    "Muhammad Amjid Sattar",
    "Amjid Sattar",
    "DVM student",
    "veterinary medicine",
    "developer",
    "web developer",
    "software development",
    "AI",
    "portfolio",
  ],
  authors: [
    {
      name: "Muhammad Amjid Sattar",
    },
  ],
  creator: "Muhammad Amjid Sattar",

  metadataBase: new URL("https://amjidsattar.com"),

  openGraph: {
    title: "Muhammad Amjid Sattar — DVM Student · Developer · Builder",
    description: "Building at the intersection of medicine, technology & AI.",
    url: "https://amjidsattar.com",
    siteName: "Muhammad Amjid Sattar",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Amjid Sattar — DVM Student, Developer, Builder, AI Explorer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Amjid Sattar — DVM Student · Developer · Builder",
    description: "Building at the intersection of medicine, technology & AI.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
