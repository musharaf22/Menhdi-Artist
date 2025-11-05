"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiArrowUp,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiYoutube,
} from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-12 bg-gradient-to-tr from-rose-50 to-amber-50 border-t border-white/40">
      <h1 className="hidden">Best mehandi works in gaya bihar</h1>
      <div className="w-[90%] mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center shadow-lg">
                <span className="font-bold text-white">SA</span>
              </div>
              <div>
                <div className="text-lg md:text-xl font-extrabold">
                  Shiva Menhdi Arts
                </div>
                <div className="text-sm text-slate-600">
                  Detailed mehndi for brides & celebrations
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 max-w-sm">
              Best mehandi works in gaya bihar, Make your moments memorable —
              handcrafted henna designs, friendly consultations, and on-time
              service. Serving local & destination events.
            </p>

            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.06 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 shadow text-slate-800 text-sm"
                href="https://youtube.com/shorts/jprnjPQKxJw?si=04bBFgfs8nsh_llA"
                target="_blank"
                rel="noreferrer"
                aria-label="Youtube"
              >
                <FiYoutube className="w-5 h-5" /> Youtube
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.06 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 shadow text-slate-800 text-sm"
                href="https://www.instagram.com/reel/DQVkVadEfel/?igsh=MWNwZjdvenlnOXBpMQ=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" /> Instagram
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.06 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 shadow text-slate-800 text-sm"
                href="https://wa.me/916287054190"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" /> WhatsApp
              </motion.a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="text-sm font-semibold">Contact</div>

            <div className="flex flex-col gap-2 text-slate-700">
              <a
                className="flex items-center gap-3 hover:text-rose-500"
                href="tel:+916287054190"
                aria-label="Call phone"
              >
                <span className="p-2 rounded-lg bg-white/80 shadow">
                  <FiPhone className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-medium">+916287054190</div>
                  <div className="text-xs">Call or WhatsApp</div>
                </div>
              </a>

              <a
                className="flex items-center gap-3 hover:text-rose-500"
                href="snayak5034@gmail.com"
                aria-label="Send email"
              >
                <span className="p-2 rounded-lg bg-white/80 shadow">
                  <FiMail className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-medium">snayak5034@gmail.com</div>
                  <div className="text-xs">Response within 24 hours</div>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-white/80 shadow">
                  <FiMapPin className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-medium">Gaya Bihar — India</div>
                  <div className="text-xs">
                    Available for local & destination events
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter / Quick Links */}
          <div className="space-y-4">
            <div className="text-sm font-semibold">Stay in touch</div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: wire to API (Mailchimp / Netlify / serverless function)
                alert("Thanks! We'll reach out soon. (Demo)");
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                aria-label="Email address"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-lg border border-white/60 bg-white/90 placeholder:text-slate-400 focus:outline-none"
              />
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="px-4 py-3 rounded-lg bg-rose-500 text-white font-semibold shadow"
                type="submit"
              >
                Subscribe
              </motion.button>
            </form>

            <div className="mt-2">
              <div className="text-sm font-semibold mb-2">Quick links</div>
              <div className="flex flex-wrap gap-2">
                <a
                  className="text-sm px-3 py-1 rounded-full bg-white/80 shadow text-slate-800"
                  href="#portfolio"
                >
                  Portfolio
                </a>
                <a
                  className="text-sm px-3 py-1 rounded-full bg-white/80 shadow text-slate-800"
                  href="#services"
                >
                  Services
                </a>
                <a
                  className="text-sm px-3 py-1 rounded-full bg-white/80 shadow text-slate-800"
                  href="#booking"
                >
                  Booking
                </a>
                <a
                  className="text-sm px-3 py-1 rounded-full bg-white/80 shadow text-slate-800"
                  href="#faq"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 border-t border-white/40 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">
            © {year} Mehndi Artistry — All rights reserved
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs text-slate-500">
              Designed with ♥ — handcrafted motifs
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 shadow text-slate-800"
            >
              <FiArrowUp className="w-4 h-4" /> Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
