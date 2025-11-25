"use client";
import { robotoCondensed } from "../../../fonts";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Logos() {
  const logos = [
    "logos/hero.png",
    "logos/honda.png",
    "logos/bajaj.png",
    "logos/tvs.png",
    "logos/royalenfield.png",
    "logos/yamaha.png",
    "logos/ktm.png",
    "logos/ather.png",
    "logos/ola.png",
    "logos/revolt.png",
    "logos/ultraviolette.png",
    "logos/tork.png",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Text */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1
            className={`${robotoCondensed.className} text-[42px] uppercase mb-8`}
            style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
          >
            Lorem ipsum dolor sit amet
            <br />
            consectetur. Commodo leo amet.
          </h1>
        </motion.div>
        {/* Logo Grid - 3 rows of 4 logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
            >
              <Image
                src={`/images/${logo}`}
                alt={`Partner Logo ${index + 1}`}
                width={150}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
