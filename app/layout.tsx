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

  alternates: {
    canonical: "https://amjidsattar.com",
  },

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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Muhammad Amjid Sattar",
                alternateName: [
                  "Amjid Sattar",
                  "Muhammad Amjid Sattar",
                  "Amjad Sattar",
                  "Muhammad Amjad Sattar",
                ],
                url: "https://amjidsattar.com",
                image: "https://amjidsattar.com/images/amjidsattar.png",
                jobTitle: "DVM Student · Developer · Builder · AI Explorer",
                description:
                  "DVM student, developer, builder, and AI explorer working at the intersection of medicine, technology, and AI.",
                sameAs: [
                  "https://github.com/amjidsattar50",
                  "https://www.linkedin.com/in/muhammad-amjid-sattar-49a9763b0/",
                ],
                knowsAbout: [
                  "Veterinary Medicine",
                  "Software Development",
                  "Web Development",
                  "Artificial Intelligence",
                  "AI Automation",
                ],
                affiliation: {
                  "@type": "CollegeOrUniversity",
                  name: "University of Veterinary and Animal Sciences",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Muhammad Amjid Sattar",
                alternateName: [
                  "Amjid Sattar",
                  "Muhammad Amjid Sattar",
                  "Amjad Sattar",
                  "Muhammad Amjad Sattar",
                ],
                url: "https://amjidsattar.com",
                description:
                  "Personal portfolio of Muhammad Amjid Sattar — a DVM student, developer, builder, and AI explorer.",
                publisher: {
                  "@type": "Person",
                  name: "Muhammad Amjid Sattar",
                },
              },
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
