// app/about/page.jsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, type: "spring", stiffness: 120 },
  }),
};

export default function AboutPage() {
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
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
      <Head>
        <meta name="keywords" content={keywords} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://www.shivamehandiart.com/aboutus" />
      </Head>

      <main className="min-h-screen bg-white text-slate-900">
        <section className="pt-24 pb-8">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp as any}
              custom={1}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                About <span className="text-rose-500">Shiva Mehandi Art</span>
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                We craft hand-drawn mehndi that tells your story. Based in Gaya,
                Bihar, Shiva Mehandi Art specializes in bridal, party and
                personalized mehndi — combining traditional motifs with modern
                aesthetics.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="/booking"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-rose-500 text-white font-semibold shadow hover:scale-105 transform transition"
                >
                  Book a Trial
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-rose-200 text-rose-600 font-semibold hover:bg-rose-50"
                >
                  View Portfolio
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-slate-600">
                <div className="p-3 rounded-lg bg-white/80 shadow text-center">
                  <div className="font-semibold text-rose-500">10+</div>
                  <div className="text-xs">Years experience</div>
                </div>
                <div className="p-3 rounded-lg bg-white/80 shadow text-center">
                  <div className="font-semibold">500+</div>
                  <div className="text-xs">Designs</div>
                </div>
                <div className="p-3 rounded-lg bg-white/80 shadow text-center">
                  <div className="font-semibold">250+</div>
                  <div className="text-xs">Happy clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                {/* Using local static images from site; Next/Image will optimize */}
                <Image
                  src="/images/henna2.jpeg"
                  alt="Shiva Mehandi Art - hero"
                  width={1000}
                  height={650}
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Story / Values */}
        <section className="py-12 border-t border-white/60">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp as any}
              custom={1}
            >
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Shiva Mehandi Art began out of a love for intricate patterns and
                cultural tradition. Over the years we have trained with master
                artists and refined our craft — focusing on clean lines,
                photo-friendly compositions and skin-safe natural henna. We
                believe every bride deserves a design that reflects her
                personality and the story of the day.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white/90 shadow"
              >
                <h4 className="font-semibold">Hygiene & Safety</h4>
                <p className="mt-2 text-sm text-slate-600">
                  Single-use cones, natural henna paste and optional patch tests
                  for sensitive skin.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white/90 shadow"
              >
                <h4 className="font-semibold">Customization</h4>
                <p className="mt-2 text-sm text-slate-600">
                  Personal motifs, initials, and theme-matching designs to
                  complement your outfit and photos.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white/90 shadow"
              >
                <h4 className="font-semibold">On-Time Delivery</h4>
                <p className="mt-2 text-sm text-slate-600">
                  We coordinate with event planners and photographers to make
                  sure results are camera-ready and on schedule.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team + Testimonials CTA */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp as any}
              custom={1}
            >
              <h3 className="text-xl font-semibold">Meet the Artist</h3>
              <p className="mt-4 text-slate-700">
                Shiva leads a small team of trained mehndi artists. Each artist
                practices consistent linework and finishing techniques to ensure
                a uniform bridal look.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">
                  S
                </div>
                <div>
                  <div className="font-semibold">Shiva</div>
                  <div className="text-sm text-slate-500">
                    Founder & Lead Artist
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="/portfolio"
                  className="px-4 py-2 rounded-lg bg-rose-50 text-rose-600 text-sm"
                >
                  See portfolio
                </a>
                <a
                  href="/booking"
                  className="px-4 py-2 rounded-lg border text-sm"
                >
                  Book a trial
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden shadow">
                <Image
                  src="/images/henna3.jpeg"
                  alt="Shiva Mehandi Art team"
                  width={900}
                  height={600}
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="py-12 bg-gradient-to-r from-rose-50 to-amber-50">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold">
                Ready for your mehndi moment?
              </h4>
              <p className="text-sm text-slate-700 mt-1">
                Book a free consultation and trial. We travel for destination
                weddings — contact for quotes.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/booking"
                className="px-6 py-3 rounded-full bg-rose-500 text-white font-semibold"
              >
                Book Now
              </a>
              <a
                href="https://wa.me/916287054190"
                className="px-6 py-3 rounded-full border text-rose-600"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-white/60 mt-12">
          <div className="max-w-6xl mx-auto px-6 text-center text-slate-600">
            © {new Date().getFullYear()} Shiva Mehandi Art — Gaya, Bihar
          </div>
        </footer>
      </main>
    </>
  );
}
