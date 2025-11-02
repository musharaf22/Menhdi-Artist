"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * GallerySection
 * Props:
 *  - images: array of { src: string, alt?: string }
 *
 * Usage:
 * <GallerySection images={myImages} />
 *
 * This component renders a responsive grid of images. Clicking an image opens
 * a fullscreen modal with next / previous navigation, keyboard support (← → Esc),
 * animated transitions and thumbnails. Built with Tailwind CSS + Framer Motion.
 */

interface IProps {
  images: { src: string; alt: string }[];
}

export default function GallerySection({ images = [] }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // default sample images if none provided
  const items = images.length
    ? images
    : Array.from({ length: 8 }).map((_, i) => ({
        src: `https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder&i=${i}`,
        alt: `Mehndi ${i + 1}`,
      }));

  const openAt = (i: any) => {
    setIndex(i);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const next = useCallback(
    () => setIndex((p) => (p + 1) % items.length),
    [items.length]
  );
  const prev = useCallback(
    () => setIndex((p) => (p - 1 + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: any) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, next, prev]);

  return (
    <section id="gallery" className="py-16 border-t border-white/60">
      <div className="w-[90%] mx-auto px-6">
        <h3 className="text-xl font-semibold">Gallery</h3>
        <p className="text-slate-600 mt-2">
          Swipe through detailed close-ups and motifs.
        </p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.button
              key={i}
              onClick={() => openAt(i)}
              whileHover={{ scale: 1.03 }}
              className="rounded-lg overflow-hidden shadow focus:outline-none"
              aria-label={`Open image ${i + 1}`}
            >
              <img
                src={it.src}
                alt={it.alt || `img-${i}`}
                className="w-full h-40 object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
              onClick={close}
              aria-modal="true"
              role="dialog"
            >
              <motion.div
                initial={{ y: 24, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 24, opacity: 0, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="max-w-5xl w-full mx-auto bg-transparent"
                onClick={(e) => e.stopPropagation()} // prevent overlay click from closing when interacting with modal
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                  {/* Main image */}
                  <div className="w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-slate-100">
                    <motion.img
                      key={items[index].src}
                      src={items[index].src}
                      alt={items[index].alt}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="max-h-[60vh] md:max-h-[70vh] object-contain"
                    />
                  </div>

                  {/* Controls */}
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow focus:outline-none"
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow focus:outline-none"
                    aria-label="Next"
                  >
                    ›
                  </button>

                  {/* Close */}
                  <button
                    onClick={close}
                    className="absolute right-3 top-3 bg-white/80 backdrop-blur p-2 rounded-full shadow focus:outline-none"
                    aria-label="Close"
                  >
                    ✕
                  </button>

                  {/* Thumbnails */}
                  <div className="p-4 bg-white/90">
                    <div className="flex gap-2 overflow-x-auto">
                      {items.map((thumb, t) => (
                        <button
                          key={t}
                          onClick={() => setIndex(t)}
                          className={`flex-none rounded-lg overflow-hidden border-2 ${
                            t === index
                              ? "border-rose-500"
                              : "border-transparent"
                          } focus:outline-none`}
                          aria-label={`Open thumbnail ${t + 1}`}
                        >
                          <img
                            src={thumb.src}
                            alt={thumb.alt}
                            className="w-20 h-14 object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
