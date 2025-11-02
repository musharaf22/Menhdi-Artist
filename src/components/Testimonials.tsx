"use client";
// components/TestimonialsMarquee.jsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * TestimonialsMarquee
 *
 * Props:
 * - testimonials: Array<{ name, note, rating (1-5), date? }>
 * - speed: number (duration in seconds for one full loop, default: 30)
 * - cardWidth: number (approx px width for each card on large screens, default: 320)
 *
 * Usage:
 * <TestimonialsMarquee testimonials={data} speed={32} cardWidth={340} />
 */

function Stars({ value = 5, size = 14 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.round(value);
    stars.push(
      <svg
        key={i}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.2"
        className={filled ? "text-amber-400" : "text-slate-300"}
        aria-hidden
      >
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.172L12 18.897l-7.336 3.856 1.402-8.172L.132 9.21l8.2-1.192z" />
      </svg>
    );
  }
  return <div className="flex gap-1">{stars}</div>;
}

export default function TestimonialsMarquee({
  testimonials = [],
  speed = 20,
  cardWidth = 320,
}) {
  // fallback example testimonials if none provided
  const items =
    testimonials.length > 0
      ? testimonials
      : [
          {
            name: "Aisha",
            note: "Absolutely loved my bridal mehndi — artist was patient and creative.",
            rating: 5,
            date: "2025-06-15",
          },
          {
            name: "Sana",
            note: "Guests kept asking who the artist was. Highly recommend.",
            rating: 5,
            date: "2025-04-03",
          },
          {
            name: "Riya",
            note: "Professional and timely. Designs were flawless.",
            rating: 5,
            date: "2025-02-20",
          },
          {
            name: "Nisha",
            note: "Amazing attention to detail. My hands looked stunning!",
            rating: 4.8,
            date: "2025-03-09",
          },
          {
            name: "Gauri",
            note: "Nice service fully satisfied",
            rating: 5,
            date: "2025-08-12",
          },
        ];

  // duplicate to create seamless infinite scroll
  const looped = useMemo(() => [...items, ...items], [items]);

  // compute translate distance via CSS using -50% (duplicated content)
  // we use animation on the inner track with duration = speed seconds
  return (
    <section id="testimonials" className="py-16">
      <div className="w-[90%] mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold">What clients say</h3>
            <p className="text-sm text-slate-600 mt-1">
              Real words from lovely clients
            </p>
          </div>

          {/* average rating summary */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="rounded-full bg-white/90 px-3 py-2 shadow text-slate-800">
              <div className="text-xs text-slate-500">Avg. rating</div>
              <div className="flex items-center gap-2">
                <div className="font-semibold">
                  {(
                    items.reduce((s, x) => s + (x.rating || 5), 0) /
                    items.length
                  ).toFixed(1)}
                </div>
                <Stars
                  value={Math.round(
                    items.reduce((s, x) => s + (x.rating || 5), 0) /
                      items.length
                  )}
                  size={14}
                />
              </div>
            </div>
          </div>
        </div>

        {/* marquee card (big product-like card) */}
        <div
          className="group relative overflow-hidden rounded-2xl rotate-2 bg-none "
          role="region"
          aria-label="Client testimonials marquee"
        >
          {/* gradient overlays */}
          <div className="pointer-events-none absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-white/100 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-white/100 to-transparent z-10" />

          {/* track */}
          <div className="w-full py-6">
            <div
              className="testimonial-track flex gap-6 items-stretch px-6"
              style={{
                // CSS animation dynamic duration
                animation: `testimonial-marquee ${speed}s linear infinite`,
              }}
            >
              {looped.map((t, idx) => (
                <motion.div
                  key={`${t.name}-${idx}`}
                  className="flex-none bg-white rounded-xl p-6 shadow-md"
                  style={{ width: `${cardWidth}px` }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (idx % items.length) * 0.05 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold shadow-sm">
                      {t.name?.charAt(0) || "U"}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <div className="font-semibold text-slate-800">
                          {t.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <Stars value={t.rating ?? 5} />
                          <div className="text-xs text-slate-400">{t.date}</div>
                        </div>
                      </div>

                      <div className="mt-3 text-slate-700">“{t.note}”</div>

                      {/* optional actions */}
                      <div className="mt-4 flex items-center gap-3">
                        <a
                          href="#portfolio"
                          className="text-xs px-3 py-1 rounded-full bg-rose-50 text-rose-600"
                        >
                          View similar
                        </a>
                        <button
                          className="text-xs px-3 py-1 rounded-full border border-slate-200 text-slate-700"
                          onClick={() => {
                            // example CTA — you can replace with open modal or other action
                            const el = document.querySelector("#portfolio");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          See portfolio
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* animation styles */}
        <style>{`
          @keyframes testimonial-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); } /* duplicated content -> -50% */
          }

          /* pause on hover or focus */
          .group:hover .testimonial-track,
          .group:focus-within .testimonial-track {
            animation-play-state: paused !important;
          }

          /* mobile adjustments */
          @media (max-width: 768px) {
            .testimonial-track > div {
              width: 260px !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .testimonial-track { animation: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
