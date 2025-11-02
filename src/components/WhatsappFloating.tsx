// components/WhatsAppFloating.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

/**
 * WhatsAppFloating
 *
 * Props:
 *  - phone (required) : string (international format without +, e.g. "919876543210")
 *  - message (optional): string (default: "Hi, I would like to book a mehndi session.")
 *  - className (optional)
 *
 * Usage:
 * <WhatsAppFloating phone="919876543210" message="Hi! I'm interested in bridal mehndi." />
 *
 * NOTE:
 * - Uses wa.me link which works in browsers and mobile apps.
 * - For small screens, opens in-app; on desktop it'll open WhatsApp Web.
 * - Install react-icons & framer-motion if not already installed:
 *    npm install react-icons framer-motion
 */
export default function WhatsAppFloating({
  phone,
  message = "Hi! 👋 I'm interested in booking a mehndi session. Can you share availability?",
  className = "",
}: any) {
  if (!phone) return null;

  // encode message
  const encoded = encodeURIComponent(message);
  // wa.me expects international number without +
  const waLink = `https://wa.me/${phone}?text=${encoded}`;

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="group flex items-center gap-3 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 text-white shadow-2xl px-4 py-3 hover:shadow-emerald-300 focus:outline-none focus:ring-4 focus:ring-emerald-200"
      >
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
          <FaWhatsapp className="w-5 h-5" aria-hidden />
        </span>

        <div className="hidden md:flex flex-col text-left leading-tight">
          <span className="text-sm font-semibold">Chat on WhatsApp</span>
          <span className="text-xs opacity-90">Quick booking & enquiries</span>
        </div>

        {/* small pulsating dot on the edge */}
        <span
          className="absolute -right-2 -top-2 w-3 h-3 rounded-full bg-rose-500 shadow animate-pulse"
          aria-hidden
        />
      </motion.a>
    </div>
  );
}
