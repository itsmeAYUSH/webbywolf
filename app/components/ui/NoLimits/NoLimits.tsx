"use client";
import { robotoCondensed } from "../../../fonts";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NoLimits() {
  return (
    <section className="min-h-screen bg-[#F1F5F9] relative">
      {/* Background Image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-100 w-11/12 h-44 sm:h-56 opacity-70 z-0 pointer-events-none lg:inset-0 lg:w-[80vw] lg:h-[95vh] lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:opacity-100">
        <Image
          src="/images/noLimits.png"
          alt="No Limits Visual"
          className="w-full h-full object-cover"
          fill
        />
      </div>
      {/* Text Content - Upper Left Corner */}
      <motion.div
        className="relative z-10 pt-8 pl-8 md:pt-12 md:pl-12 lg:pt-16 lg:pl-16 max-w-lg"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.h3
          className="text-xl md:text-2xl font-bold text-gray-600 uppercase tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          NO LIMITS
        </motion.h3>
        <motion.h1
          className={`${robotoCondensed.className} text-[42px]`}
          style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          LOREM IPSUM DOLOR SIT AMET
        </motion.h1>
        <motion.div
          className="space-y-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
        </motion.div>
        <motion.div
          className="pt-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            type="submit"
            className="mt-6 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow-md transition"
          >
            <span className="mr-3">Loerum Ipsum</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
