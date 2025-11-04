/*
NextJS SEO Boilerplate (App Router) — Single-file reference
Place pieces from this file into your Next.js project. This file contains:
- Seo component (reusable) for page-level metadata, Open Graph, and structured data
- Example usage in an index Page component (app/page.jsx)
- robots.txt and next-sitemap.config.js examples (commented)
- Google Analytics (GA4) + Google Search Console instructions

Notes:
- This file is a reference collection. Copy the Seo component and the example page into your project files.
- App Router (Next 13+) supports the `metadata` export on each route — but a reusable Seo component is handy for dynamic structured data and per-page changes.

Dependencies:
- next (App Router)
- For production analytics use: npm install @vercel/analytics (optional) OR add GA4 script manually
*/

import Head from "next/head"; // Only for special tags (App Router supports metadata but we still use Head for LD+custom tags)

// ------------------------
// Seo Component
// ------------------------
export function Seo({
  title,
  description,
  url,
  images = [], // array of image URLs
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  canonical,
  jsonLd = null, // additional structured data object
  keywordsContent = [],
}: any) {
  const siteName = "Shiva Mehandi Art";
  const finalTitle = title ? `${title} | ${siteName}` : siteName;
  const finalUrl = canonical || url || "shivamehandiart.com";
  const image = images.length ? images[0] : `${finalUrl}/images/henna2.jpeg`;

  // Basic LocalBusiness structured data (customize fields)
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    image: images,
    telephone: "+916287054190",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gaya Bihar Shiva mehndi art swarajpuri Road",
      addressLocality: "Gaya, bihar India",
      addressRegion: "bihar",
      postalCode: "823001",
      addressCountry: "IN",
    },
    url: finalUrl,
    sameAs: [
      "https://www.instagram.com/reel/DQaot3KkpSo/?igsh=MWkyN2w1b2ZiazZvaA==",
      "https://youtube.com/shorts/jprnjPQKxJw?si=04bBFgfs8nsh_llA",
      "https://youtube.com/@shivamehandiart-rj6yc?si=JLlyK177Nb0MP0ps",
    ],
  };

  // Merge provided jsonLd
  const mergedJsonLd = jsonLd ? [localBusiness, jsonLd] : [localBusiness];

  return (
    <>
      <Head>
        <title>{finalTitle}</title>
        <meta name="description" content={description} />
        {keywordsContent?.length > 0 && (
          <meta name="keywords" content={keywordsContent} />
        )}

        {/* Canonical */}
        <link rel="canonical" href={finalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={finalTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={finalUrl} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={finalTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mergedJsonLd) }}
        />

        {/* If you have Google Search Console verification meta, add it here */}
        {/* <meta name="google-site-verification" content="YOUR_GSC_VERIFICATION_CODE" /> */}
      </Head>
    </>
  );
}

// ------------------------
// Example Page (app/page.jsx)
// ------------------------
// export default function Page() {
//   const metadata = {
//     title: "Mehndi Artistry — Bridal & Party Mehndi Designs",
//     description:
//       "Professional mehndi artist offering bridal, party, and custom henna designs. Book your session online.",
//     url: "https://mehndiartistry.example.com",
//     images: ["https://mehndiartistry.example.com/images/og-image.jpg"],
//   };

//   const blogPostJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BlogPosting",
//     headline: "How to make your mehndi last longer",
//     image: [metadata.images[0]],
//     author: { "@type": "Person", name: "Mehndi Artist" },
//     publisher: { "@type": "Organization", name: "Mehndi Artistry" },
//     datePublished: "2025-01-01",
//   };

//   return (
//     <main className="min-h-screen">
//       <Seo
//         title={metadata.title}
//         description={metadata.description}
//         url={metadata.url}
//         images={metadata.images}
//         jsonLd={blogPostJsonLd}
//       />

//       <header className="p-8 text-center">
//         <h1 className="text-4xl font-bold">Welcome to Mehndi Artistry</h1>
//         <p className="mt-4 text-slate-700">Beautiful, handcrafted henna for every celebration.</p>
//       </header>

//       {/* Rest of your page */}
//       <section className="p-8">
//         <h2 className="text-2xl font-semibold">Services</h2>
//         <p className="mt-2">Bridal, parties, workshops and more.</p>
//       </section>
//     </main>
//   );
// }

// ------------------------
// robots.txt (save to public/robots.txt)
// ------------------------
/*
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
Host: https://your-domain.com
*/

// ------------------------
// next-sitemap.config.js (add to project root)
// ------------------------
/*
module.exports = {
  siteUrl: 'https://your-domain.com',
  generateRobotsTxt: true, // (optional)
  changefreq: 'daily',
  priority: 0.7,
};
*/

// ------------------------
// Google Analytics (GA4) snippet (add to app/layout.jsx inside <Head>)
// ------------------------
/*
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { page_path: window.location.pathname });
</script>
*/

// ------------------------
// How to use (short)
// ------------------------
/*
1. Copy `Seo` component into a shared location (e.g., components/Seo.jsx).
2. For each page, import and use <Seo ... /> with page-specific title/description.
3. Add robots.txt to /public/robots.txt (copy above).
4. Install next-sitemap and add next-sitemap.config.js, then run `next build` and `npm run postbuild`.
5. Set up Google Search Console: add property, verify (DNS or HTML tag), submit sitemap.
6. Set up GA4 and add the snippet to app/layout.jsx (or use a tag manager).
7. Use Lighthouse / PageSpeed Insights to fix performance issues.
*/

// More example
{
  /* <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Mehndi Artistry",
  "description": "Professional mehndi artist specializing in bridal, party and custom mehndi designs. Serving local and destination events.",
  "image": [
    "https://your-domain.com/images/og-image.jpg",
    "https://your-domain.com/images/henna1.jpeg",
    "https://your-domain.com/images/henna2.jpeg"
  ],
  "url": "https://your-domain.com",
  "telephone": "+91 98765 43210",
  "email": "mehndi@example.com",
  "priceRange": "₹₹",
  "paymentAccepted": "Cash, Card, UPI",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Mehndi Lane",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.0760,
    "longitude": 72.8777
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "256"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Aisha"
      },
      "datePublished": "2025-06-15",
      "reviewBody": "Absolutely loved my bridal mehndi — artist was patient and creative.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Bridal Mehndi",
      "description": "Full bridal mehndi design with trial session and touch-ups."
    },
    {
      "@type": "Service",
      "name": "Party & Guest Mehndi",
      "description": "Quick guest mehndi and detailed designs for parties."
    },
    {
      "@type": "Service",
      "name": "Workshops",
      "description": "Private and group mehndi workshops."
    }
  ],
  "areaServed": {
    "@type": "City",
    "name": "Mumbai"
  },
  "sameAs": [
    "https://instagram.com/yourprofile",
    "https://facebook.com/yourprofile",
    "https://www.youtube.com/yourchannel"
  ],
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://your-domain.com/booking",
      "inLanguage": "en-IN",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/AndroidPlatform",
        "http://schema.org/IPhonePlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Mehndi Booking"
    }
  }
}
</script> */
}
