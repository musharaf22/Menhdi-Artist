// MarqueeGallery.jsx
import React from "react";

/**
 * MarqueeGallery
 *
 * Props:
 * - images: Array<{ src: string, alt?: string }>
 * - speed?: number      // pixels per second (default: 100)
 * - gap?: number        // gap between items in px (default: 16)
 * - height?: string     // tailwind height class or CSS height (default: 'h-56')
 *
 * Example:
 * <MarqueeGallery images={galleryImages} speed={120} gap={20} height="h-72" />
 */
export default function MarqueeGallery({
  images = [],
  speed = 100,
  gap = 16,
  height = "h-56",
}) {
  // Duplicate the array to create infinite-feel scrolling
  const items = [...images, ...images];

  // Compute duration based on total width estimate:
  // We estimate each item width as height * aspectRatio (approx 4/3).
  // This is just to derive a smooth duration if user supplies a speed.
  // The CSS animation itself uses percentage translate so duplication keeps it infinite.
  const approxItemWidth = 240; // a reasonable approximate px width per item
  const totalWidthPx = items.length * (approxItemWidth + gap);
  const durationSeconds = Math.max(10, Math.round(totalWidthPx / speed));

  return (
    <div className="w-full -rotate-2">
      {/* Big card wrapper */}
      <div
        className={`group relative overflow-hidden rounded-2xl bg-white/80 shadow-2xl border border-white/40 ${height}`}
        role="region"
        aria-label="Gallery marquee"
      >
        {/* Header */}
        <div className="absolute left-6 top-4 z-10">
          <div className="text-sm text-rose-500 font-semibold">Featured</div>
          <div className="text-lg font-bold">Gallery Highlights</div>
        </div>

        {/* Marquee track */}
        <div className="absolute inset-0 flex items-center">
          {/* The inner scroller is wider and will animate translateX */}
          <div
            className="marquee-track will-change-transform"
            style={{
              // make the animation speed dynamic
              animation: `marquee ${durationSeconds}s linear infinite`,
              display: "flex",
              gap: `${gap}px`,
              paddingLeft: 24,
              paddingRight: 24,
              alignItems: "center",
            }}
            // pause on hover via inline style class toggled by group-hover in CSS below
          >
            {items.map((img: any, i) => (
              <div
                key={`${img.src}-${i}`}
                className="flex-none rounded-xl overflow-hidden bg-slate-100 shadow-lg"
                style={{ width: approxItemWidth }}
              >
                {/* Plain img (use Next/Image if you prefer) */}
                <img
                  src={img.src}
                  alt={img.alt || `Gallery image ${i + 1}`}
                  className="w-full h-full object-cover block"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* overlay gradients for visual polish */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 to-transparent" />

        {/* Controls + instructions */}
        {/* <div className="absolute right-6 bottom-4 z-10 text-sm text-slate-700 hidden sm:flex gap-3 items-center">
          <div className="px-3 py-1 rounded-full bg-white/80 shadow">
            Hover to pause
          </div>
          <div className="px-3 py-1 rounded-full bg-white/80 shadow">
            Click image to open
          </div>
        </div> */}

        {/* Inline styles for marquee animation and hover pause */}
        <style>{`
          /* marquee animation: translate full width of one duplicated half (-50%) */
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); } /* duplicated content -> -50% gives seamless loop */
          }

          /* pause on hover of the whole card (group) */
          .group:hover .marquee-track,
          .group:focus-within .marquee-track {
            animation-play-state: paused !important;
          }

          /* make the animation smoother on prefers-reduced-motion */
          @media (prefers-reduced-motion: reduce) {
            .marquee-track { animation: none !important; }
          }

          /* small screens: reduce item width */
          @media (max-width: 640px) {
            .marquee-track > div { width: 160px !important; }
          }
        `}</style>
      </div>
    </div>
  );
}
