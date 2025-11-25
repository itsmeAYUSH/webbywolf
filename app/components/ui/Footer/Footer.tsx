'use client'
import Image from "next/image";
import { robotoCondensed } from "../../../fonts";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden">
      {/* Top area: logo, headline and newsletter CTA */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={48}
              height={12}
              className="h-12 w-auto"
            />
          </motion.div>

          <motion.h1
            className={`${robotoCondensed.className} text-[42px] font-bold uppercase`}
            style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Lorem ipsum dolor sit amet <br />
            consectetur. Dui.
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
        </div>
      </div>

      {/* Footer links: grouped columns and copyright/footer links */}
      <div className="bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: logo */}
            <div className="flex-shrink-0">
              <div className="inline-block mb-6 lg:mb-0">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-8 w-auto"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            {/* link columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
              {/* 1 */}
              <div>
                <h4 className="text-white font-semibold mb-4">Lorem Ipsum</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="hover:text-white cursor-pointer">
                    Lorem ipsum
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Lorem ipsum
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Lorem ipsum
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Lorem ipsum
                  </li>
                </ul>
              </div>

              {/* 2 */}
              <div>
                <h4 className="text-white font-semibold mb-4">Lorem Ipsum</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="hover:text-white cursor-pointer">
                    Lorem ipsum
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Lorem ipsum
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Lorem ipsum
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Lorem ipsum
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div>
                <h4 className="text-white font-semibold mb-4">Lorem Ipsum</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="hover:text-white cursor-pointer">
                    Lorem ipsum
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Lorem ipsum
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Lorem ipsum
                  </li>
                </ul>
              </div>

              {/* 4 */}
              <div>
                <h4 className="text-white font-semibold mb-4">Lorem Ipsum</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="hover:text-white cursor-pointer">
                    Lorem ipsum
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
