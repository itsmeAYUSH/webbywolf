'use client';
import { robotoCondensed, inter } from "../../../fonts";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-white py-16 ml-8">
      <div className="px-2">
        <motion.div
          className="bg-white shadow-lg p-8 pb-0"
          style={{
            boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              {/* Header */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-[#0546D2]">
                  Lorem ipsum dolor sit
                </h2>
                <h1
                  className={`${robotoCondensed.className} text-[42px]`}
                  style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
                >
                  LOREM IPSUM DOLOR <br></br>SIT AMET
                </h1>
              </motion.div>

              {/* Description Text */}
              <motion.div
                className="text-gray-600 leading-relaxed space-y-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
                  facilisis donec dui. Mi porttitor ut aliquam mattis maecenas
                  eget integer in nam. Non nisl iaculis at felis aliquet.
                  Hendrerit tellus at purus lectus.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <div className="space-y-2">
                {[1, 2, 3].map((idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 * idx }}
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={`/images/contactbike${idx}.png`}
                        alt={`Contact ${idx}`}
                        width={120}
                        height={120}
                        className="w-30 h-30 object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-900 text-base leading-relaxed">
                        {idx === 1 &&
                          "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat."}
                        {idx === 2 &&
                          "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis."}
                        {idx === 3 &&
                          "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt."}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="pt-4 flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button
                  type="submit"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow-md transition"
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
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="#0546D2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="text-[#0546D2] text-xm font-bold">123456789</p>
              </motion.div>
            </div>
            {/* Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <Image
                  src="/images/bikes.png"
                  alt="Bikes"
                  width={600}
                  height={400}
                  className="w-full max-w-lg h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            className="mt-8 w-[90%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/images/line.png"
              alt="Line"
              width={800}
              height={100}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
