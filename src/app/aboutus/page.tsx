import React from "react";
import AboutPage from "./AboutUs";

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
  return <AboutPage />;
};

export default AboutPageMain;
