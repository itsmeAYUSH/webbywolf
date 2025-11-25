'use client';
import { robotoCondensed } from "../../../fonts";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Cards() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-repeat rotate-30 pointer-events-none"
        style={{ backgroundImage: "url('/images/design1.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-blue-600 text-sm font-medium mb-2 uppercase">
            Lorem ipsum dolor sit amet
          </div>
          <h1
            className={`${robotoCondensed.className} text-[42px]`}
            style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
          >
            LOREM IPSUM DOLOR SIT
          </h1>
        </motion.div>

        <motion.div
          className="max-w-4xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Description Text */}
          <div className="text-gray-600 leading-relaxed space-y-4 mb-8 text-center md:text-left">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((_, idx) => (
            <motion.article
              key={idx}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 * idx }}
            >
              <div className="w-full h-44 md:h-48 overflow-hidden">
                <Image
                  src={`/images/cards/card${idx + 1}.png`}
                  alt={`Card ${idx + 1}`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                  faucibus cursus nisl. Nunc montes molestie a vitae vulputate.
                  Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero
                  iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim
                  venenatis bibendum.
                </p>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Learn More
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}