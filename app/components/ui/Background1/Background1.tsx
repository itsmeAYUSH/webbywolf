'use client'
import { robotoCondensed } from "../../../fonts";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Background1() {
  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center">
      {/* BACKGROUND: decorative image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg1.png')" }}
      ></div>

      {/* OVERLAY: dark tint for better text contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* LOGO: brand mark at top-left */}
      <motion.div
        className="absolute top-8 left-8 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="h-8 w-auto"
        />
      </motion.div>

      {/* MAIN: centered headlines and CTA */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <motion.h1
          className={`${robotoCondensed.className} text-[42px] mb-8 `}
          style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas
          aliquam viverra mi.
        </motion.h1>

        {/* Description Text */}
        <motion.div
          className="space-y-6 text-lg md:text-xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
            volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
            justo pellentesque id sed. Id tellus id luctus id. At quis nunc
            libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum
            nulla quam.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
            condimentum ultrices non. Ornare semper in tincidunt pellentesque
            cras mauris in vitae. At viverra quis eu malesuada vel et porttitor.
            Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a
            pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
          </p>
        </motion.div>
        <motion.button
          className="mt-6 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow-md transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="mr-3">{"Loerum Ipsum"}</span>
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
        </motion.button>
      </div>
    </section>
  );
}