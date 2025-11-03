"use client";
import { motion } from "framer-motion";
import GallerySection from "./GallerySection";
import { useEffect, useRef, useState } from "react";
import MarqueeGallery from "./GalleryCourousel";
import Footer from "./Footer";
import TestimonialsMarquee from "./Testimonials";
import { Seo } from "./SeoOptimization";

// Single-file Next.js page (App Router) using Tailwind CSS + Framer Motion
// Place this file at app/page.jsx (or pages/index.jsx for Pages Router)

const sections = [
  "Hero",
  "About",
  "Services",
  "Portfolio",
  "Process",
  "Booking",
  "Testimonials",
  "Gallery",
  "FAQ",
  "Contact",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 } }),
};
export const galleryImages = [
  {
    src: "/images/henna2.jpeg",
    alt: "Bridal mehndi with full-hand intricate design",
    title: "Bridal Full-Hand Mehndi",
    description:
      "Elegant bridal mehndi with full-hand coverage featuring floral and paisley motifs, perfect for weddings and festive occasions.",
  },
  {
    src: "/images/henna2.jpeg",
    alt: "Intricate henna with floral motifs and detailed patterns",
    title: "Intricate Henna Design",
    description:
      "Delicate mehndi artwork showcasing fine floral motifs, geometric patterns, and a graceful flow ideal for modern brides.",
  },
  {
    src: "/images/henna3.jpeg",
    alt: "Traditional mehndi design on palm",
    title: "Traditional Palm Mehndi",
    description:
      "Classic Indian mehndi with concentric circles and mandala-style detailing for a timeless bridal look.",
  },
  {
    src: "/images/henna4.jpeg",
    alt: "Arabic mehndi with flowing floral patterns",
    title: "Arabic Floral Mehndi",
    description:
      "Stylish Arabic mehndi design with flowing floral vines and bold outlines, perfect for engagement ceremonies.",
  },
  {
    src: "/images/henna5.jpeg",
    alt: "Full leg mehndi for bridal occasion",
    title: "Bridal Leg Mehndi",
    description:
      "Detailed bridal leg mehndi with peacock and paisley elements symbolizing joy and elegance for wedding rituals.",
  },
  {
    src: "/images/henna6.jpeg",
    alt: "Backhand mehndi with minimalist geometric style",
    title: "Backhand Minimal Mehndi",
    description:
      "Contemporary backhand mehndi featuring clean geometric lines and floral touch for a modern minimalist look.",
  },
  {
    src: "/images/henna7.jpeg",
    alt: "Bridal mehndi featuring mandala and lotus motifs",
    title: "Mandala Lotus Mehndi",
    description:
      "Centered mandala mehndi design with lotus motifs representing purity and prosperity for special events.",
  },
  {
    src: "/images/henna8.jpeg",
    alt: "Elegant mehndi with peacock design",
    title: "Peacock Elegance Mehndi",
    description:
      "Exquisite peacock mehndi combining tradition with artistry, symbolizing love, beauty, and celebration.",
  },
  {
    src: "/images/henna9.jpeg",
    alt: "Detailed mehndi covering both palms",
    title: "Double Palm Mehndi",
    description:
      "Symmetrical double-palm mehndi design representing harmony and grace, ideal for engagement functions.",
  },
  {
    src: "/images/henna10.jpeg",
    alt: "Contemporary henna with wrist and finger highlights",
    title: "Modern Wrist Mehndi",
    description:
      "Stylish wrist and finger mehndi with minimal detailing for casual parties and modern festive occasions.",
  },
  {
    src: "/images/henna11.jpeg",
    alt: "Full bridal mehndi with traditional Rajasthani style",
    title: "Rajasthani Bridal Mehndi",
    description:
      "Traditional Rajasthani-style mehndi filled with bride and groom figures, elephants, and fine line detailing.",
  },
  {
    src: "/images/henna12.jpeg",
    alt: "Henna featuring Arabic fusion motifs",
    title: "Fusion Arabic Mehndi",
    description:
      "A creative fusion of Arabic and Indian mehndi featuring flowing floral vines and intricate lace-inspired details.",
  },
  {
    src: "/images/henna13.jpeg",
    alt: "Mehndi with heart pattern and initials for bride & groom",
    title: "Couple Initials Mehndi",
    description:
      "Romantic mehndi design incorporating couple initials and heart patterns, ideal for engagement or pre-wedding shoots.",
  },
  {
    src: "/images/henna14.jpeg",
    alt: "Full arm mehndi with detailed motifs and shading",
    title: "Full Arm Detailed Mehndi",
    description:
      "Full-arm mehndi filled with artistic motifs, shading, and symmetry — perfect for bridal elegance.",
  },
  {
    src: "/images/henna15.jpeg",
    alt: "Simple floral mehndi for festive occasions",
    title: "Festive Floral Mehndi",
    description:
      "Light and elegant floral mehndi for Eid, Diwali, or family celebrations — simple yet stunning.",
  },
  {
    src: "/images/henna16.jpeg",
    alt: "Henna design with circular mandala and dots",
    title: "Mandala Charm Mehndi",
    description:
      "Mesmerizing circular mandala design centered on the palm, surrounded by fine dot detailing for an elegant touch.",
  },
  {
    src: "/images/henna17.jpeg",
    alt: "Side hand mehndi with Arabic curves and floral art",
    title: "Side-Hand Arabic Mehndi",
    description:
      "Flowy Arabic side-hand mehndi design with curved floral trails — perfect for bridesmaids and festive wear.",
  },
  {
    src: "/images/henna18.jpeg",
    alt: "Bridal feet mehndi with paisley and floral mix",
    title: "Bridal Feet Mehndi",
    description:
      "Graceful feet mehndi featuring paisley and lotus motifs, adding a royal touch to bridal elegance.",
  },
];

const images = [
  "https://plus.unsplash.com/premium_photo-1661896237419-6e232b54eefc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
  "https://plus.unsplash.com/premium_photo-1682092018999-2c8fcfe944f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670",
  "https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
  "https://images.unsplash.com/photo-1726509698494-14467502ecf8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2621",
  "https://images.unsplash.com/photo-1599799045747-9dbfcfef6b97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670",
  "https://images.unsplash.com/photo-1684814070823-97e0b9e99c69?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1286",
  "https://images.unsplash.com/photo-1684814070468-c73a55585221?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1286",
  "https://images.unsplash.com/photo-1593489062665-9f26fa627d73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
  "https://images.unsplash.com/photo-1684813270065-73dce8b31b92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1286",
];
export default function MehndiArtistWebsite() {
  const [activeImage, setActiveImage] = useState<string>(images[0]);
  const countRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      countRef.current = setInterval(() => {
        const index = Math.floor(Math.random() * images.length);
        setActiveImage(images[index]);
      }, 2000);
    }

    return () => {
      clearInterval(countRef.current);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-white text-slate-900">
      <Seo
        title={"best mehandi and tattoo shop in gaya bihar india"}
        description={"Beautiful, handcrafted henna for every celebration."}
        url={"https://www.shivamehandiart.com/"}
        images={[
          "https://www.shivamehandiart.com/images/henna2.jpeg",
          "https://www.shivamehandiart.com/images/henna3.jpeg",
        ]}
        jsonLd={null}
      />
      {/* NAV */}
      <nav className="fixed w-full z-40 backdrop-blur-sm bg-white/30 border-b border-white/50">
        <div className="w-[90%] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-amber-300 flex items-center justify-center shadow-lg">
              <span className="font-bold text-white">SA</span>
            </div>
            <div>
              <div className="text-sm font-semibold">Shiva Mehndi Arts</div>
              <div className="text-xs text-slate-700">
                Bridal | Events | Custom
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#portfolio" className="hover:underline">
              Portfolio
            </a>
            <a href="#booking" className="hover:underline">
              Booking
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-rose-500 text-white shadow hover:scale-105 transform transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="pt-24 pb-20">
        <div className="w-[90%] mt-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hand-crafted <span className="text-rose-500">Mehndi</span> designs
              <br />
              for every celebration
            </h1>
            <p className="mt-6 text-lg text-slate-700">
              Traditional motifs, modern twists — bespoke mehndi art for brides,
              parties and photo shoots. Book a consultation or view the
              portfolio.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#booking"
                className="px-6 py-3 rounded-full bg-rose-500 text-white font-semibold shadow hover:scale-105 transform transition"
              >
                Book Now
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 rounded-full border border-rose-200 text-rose-600 font-semibold hover:bg-rose-50"
              >
                View Portfolio
              </a>
            </div>

            <div className="mt-8 flex gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center shadow">
                  ⭐
                </div>
                <div>
                  <div className="font-semibold">4.9</div>
                  <div className="text-xs">(250+ reviews)</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center shadow">
                  🎨
                </div>
                <div>
                  <div className="font-semibold">500+</div>
                  <div className="text-xs">Designs</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl flex">
              <motion.img
                key={activeImage}
                src={activeImage}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-[420px] object-cover"
              />
            </div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="absolute -bottom-8 left-6 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border"
            >
              <div className="text-sm font-semibold">Bridal special</div>
              <div className="text-xs text-slate-700">
                Custom motifs + trial session
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 border-t border-white/60">
        <div className="w-[90%] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="md:col-span-1"
          >
            <h2 className="text-2xl font-bold">About the Artist</h2>
            <p className="mt-4 text-slate-700">
              With a decade of experience, the artist blends traditional henna
              art with modern aesthetics to craft unique stories on skin.
              Trained under master artists and available for destination events.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• 10+ years experience</li>
              <li>• Bridal packages</li>
              <li>• Custom designs & workshops</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="rounded-xl overflow-hidden shadow">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                alt="about1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                alt="about2"
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16">
        <div className="w-[90%] mx-auto px-6">
          <motion.h3
            className="text-xl font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Services
          </motion.h3>
          <motion.div
            className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Bridal",
                desc: "Full bridal mehndi with trial and touchups",
                price: "Contact for pricing",
              },
              {
                title: "Party & Events",
                desc: "Guests mehndi, minimal to detailed",
                price: "From ₹500",
              },
              {
                title: "Custom Sessions",
                desc: "Photoshoots, workshops and private sessions",
                price: "Custom",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="p-6 bg-white/70 rounded-2xl shadow"
              >
                <div className="text-sm font-semibold text-rose-500">
                  {s.title}
                </div>
                <div className="mt-3 font-bold">{s.desc}</div>
                <div className="mt-4 text-sm text-slate-600">{s.price}</div>
                <div className="mt-6">
                  <a
                    href="#booking"
                    className="px-4 py-2 rounded-full bg-rose-500 text-white text-sm font-medium"
                  >
                    Book
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-16 border-t border-white/60">
        <div className="w-[90%] mx-auto px-6">
          <h3 className="text-xl font-semibold">Portfolio</h3>
          <p className="text-slate-600 mt-2">
            A curated selection of recent works.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((v, idx) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={idx}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={v.src}
                  alt={`portfolio-${idx}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <div className="font-semibold">{v.title}</div>
                  <div className="text-sm text-slate-600 mt-2">
                    {v.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16">
        <div className="w-[90%] mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold">Booking & Process</h3>
          <p className="mt-3 text-slate-600">
            Simple steps from consultation to the final touch-up.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Consult", desc: "Share inspiration & event details" },
              {
                title: "Trial",
                desc: "Trial design (for bridal) and timeline",
              },
              { title: "Event Day", desc: "Flawless execution & touchups" },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="p-6 bg-white/70 rounded-2xl shadow"
              >
                <div className="text-rose-500 font-bold">{p.title}</div>
                <div className="mt-2 text-slate-700">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeGallery images={galleryImages as any} height={"h-68"} />
      {/* BOOKING */}
      <section id="booking" className="py-16 border-t border-white/60">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold">Book a Session</h3>
          <p className="mt-2 text-slate-600">
            Fill details below and our team will reach out to confirm
            availability.
          </p>

          <motion.form
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/70 p-12 rounded-2xl shadow"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted (demo).");
            }}
          >
            <input
              required
              placeholder="Full name"
              className="p-3 rounded-lg border"
            />
            <input
              required
              placeholder="Phone or WhatsApp"
              className="p-3 rounded-lg border"
            />
            <input
              required
              placeholder="Event date"
              type="date"
              className="p-3 rounded-lg border"
            />
            <select className="p-3 rounded-lg border">
              <option>Bridal</option>
              <option>Party</option>
              <option>Workshop</option>
            </select>
            <textarea
              placeholder="Share a short note or reference"
              className="p-3 rounded-lg border col-span-1 md:col-span-2"
            />
            <button
              type="submit"
              className="col-span-1 md:col-span-2 px-6 py-3 rounded-full bg-rose-500 text-white font-semibold"
            >
              Send Request
            </button>
          </motion.form>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsMarquee />

      {/* GALLERY */}
      <GallerySection images={galleryImages} />

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-semibold">FAQ</h3>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-white/70 rounded-lg shadow">
              <div className="font-semibold">How long does mehndi last?</div>
              <div className="text-slate-700 mt-1">
                Typically 1-3 weeks depending on aftercare and skin type.
              </div>
            </div>
            <div className="p-4 bg-white/70 rounded-lg shadow">
              <div className="font-semibold">Do you travel?</div>
              <div className="text-slate-700 mt-1">
                Yes — travel charges may apply for outstation events.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <Footer />
    </main>
  );
}
