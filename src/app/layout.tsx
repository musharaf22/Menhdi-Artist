import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { Seo } from "@/components/SeoOptimization";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiva Mehandi Art — Bridal & Party Mehndi Designs",
  description:
    "Professional & Best mehndi artist in gaya bihar specializing in bridal, party and custom mehndi designs. Serving local and destination events.",
  keywords:
    "shiva mehandi arts , shiva mehandi art , best mehandi in gaya , best mehandi in gaya bihar india , best henna work in gaya bihar , henna works in gaya , mehandi in gaya bihar , mehandi in gaya , best mehandi work in gaya , best bridal mehandi in gaya bihar , best bride mehandi in gaya , best bride mehandi in gaya bihar , bridal mehandi in bihar gaya , bridal mehandi in gaya , mehandi work in gaya bihar , best mehandi work in bihar gaya , best henna work in gaya bihar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const blogPostJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to make your mehndi last longer",
    image: [
      [
        "https://www.shivamehandiart.com/images/henna2.jpeg",
        "https://www.shivamehandiart.com/images/henna3.jpeg",
      ],
    ],
    author: { "@type": "Person", name: "Shiva Mehandi" },
    publisher: { "@type": "Organization", name: "Shiva Mehandi Art" },
    datePublished: "2025-01-01",
  };
  return (
    <html lang="en">
      <Seo
        title={metadata.title}
        description={metadata.description}
        url={"https://www.shivamehandiart.com/"}
        images={[
          "https://www.shivamehandiart.com/images/henna2.jpeg",
          "https://www.shivamehandiart.com/images/henna3.jpeg",
        ]}
        jsonLd={blogPostJsonLd}
        keywordsContent={metadata.keywords}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
