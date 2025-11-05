import React from "react";
import AboutPage from "./AboutUs";
import { Seo } from "@/components/SeoOptimization";

export const metadata = {
  title: "About — Shiva Mehandi Art | Best Bridal Mehndi in Gaya, Bihar",
  description:
    "Shiva Mehandi Art (Gaya, Bihar) — expert bridal & event mehndi with 10+ years of experience. Natural henna, custom designs, trials & on-time service.",
  openGraph: {
    title: "About — Shiva Mehandi Art",
    description:
      "Shiva Mehandi Art in Gaya offers handcrafted bridal mehndi, workshops, and event mehndi. Natural henna and personalized designs.",
    images: ["/images/henna2.jpeg", "/images/henna3.jpeg"],
    url: "https://www.shivamehandiart.com/aboutus",
  },
  robots: "index,follow",
};
const AboutPageMain = () => {
  const keywords = [
    "mehndi artist Gaya",
    "bridal mehndi Gaya",
    "henna artist Gaya",
    "Shiva Mehandi Art",
    "wedding mehndi Gaya",
    "best mehndi artist in Gaya",
  ].join(", ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Shiva Mehandi Art",
    description:
      "Shiva Mehandi Art is a premier mehndi studio in Gaya, Bihar providing bridal mehndi, party mehndi and custom henna workshops with natural henna and professional service.",
    url: "https://www.shivamehandiart.com",
    telephone: "+916287054190",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gaya Bihar Shiva mehndi art swarajpuri Road",
      addressLocality: "Gaya",
      addressRegion: "Bihar",
      postalCode: "823001",
      addressCountry: "IN",
    },
    image: ["https://www.shivamehandiart.com/images/henna2.jpeg"],
    sameAs: [
      "https://www.instagram.com/reel/DQaot3KkpSo/?igsh=MWkyN2w1b2ZiazZvaA==",
      "https://youtube.com/shorts/jprnjPQKxJw?si=04bBFgfs8nsh_llA",
      "https://youtube.com/@shivamehandiart-rj6yc?si=JLlyK177Nb0MP0ps",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "22:00",
      },
    ],
    areaServed: { "@type": "City", name: "Gaya" },
  };
  return (
    <>
      <Seo
        title={metadata.title}
        description={metadata.description}
        url={"https://www.shivamehandiart.com/aboutus"}
        images={[
          "https://www.shivamehandiart.com/images/henna2.jpeg",
          "https://www.shivamehandiart.com/images/henna3.jpeg",
        ]}
        jsonLd={jsonLd}
        keywordsContent={keywords}
      />
      <AboutPage description={metadata.description} title={metadata.title} />
    </>
  );
};

export default AboutPageMain;
