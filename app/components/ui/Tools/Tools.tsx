"use client";
import { useState } from "react";
import { robotoCondensed, inter } from "../../../fonts";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Tools() {
  const [active, setActive] = useState<"Research" | "Plan" | "Design">(
    "Research"
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1
            className={`${robotoCondensed.className} text-[42px]`}
            style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
          >
            LOREM IPSUM DOLOR SIT AMET
          </h1>
          <motion.div
            className="mt-6 inline-flex rounded-lg bg-white border border-gray-200 shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {(["Research", "Plan", "Design"] as const).map((label, idx) => {
              const isActive = active === label;
              return (
                <button
                  key={label}
                  onClick={() => setActive(label)}
                  className={[
                    "px-15 py-2 text-sm md:text-base",
                    "focus:outline-none",
                    "transition",
                    isActive
                      ? "bg-blue-50 text-blue-700 font-semibold border-r border-gray-200"
                      : "bg-white text-gray-700 hover:bg-gray-50 border-r border-gray-200",
                    idx === 2 ? "border-r-0" : "",
                  ].join(" ")}
                >
                  {label}
                </button>
              );
            })}
          </motion.div>
          <motion.p
            className="mt-6 text-gray-600 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </motion.p>
          <motion.a
            href="#"
            className="mt-6 inline-flex items-center text-blue-600 text-sm font-medium hover:underline"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Check tools
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
        {/* Right column - image */}
        <motion.div
          className="w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-full max-w-md lg:max-w-lg">
            <Image
              src="/images/handshake.png"
              alt="Handshake"
              className="object-cover rounded-sm shadow-md"
              width={760}
              height={420}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
