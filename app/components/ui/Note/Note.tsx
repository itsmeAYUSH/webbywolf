'use client';
import { robotoCondensed } from "../../../fonts";
import { motion } from "framer-motion";

export default function Note() {
  return (
    <section className="relative bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Left text column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className={`${robotoCondensed.className} text-[42px] font-extrabold text-[#1859b8] leading-tight uppercase`}
              style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Lorem ipsum dolor sit <br /> amet consectetur.
              <br /> Dignissim tellus.
            </motion.h1>
            <motion.p
              className="mt-6 text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
              blandit laoreet urna sapien quam pulvinar. Dolor aliquet est
              tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis
              porta nisl felis. Massa in facilisis semper libero eget eu quisque
              bibendum platea. Tortor fames.
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="inline-flex items-center bg-[#2266d6] hover:bg-[#1b54b6] text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm transition">
                Loerum Ipsum
                <svg
                  className="ml-2 w-4 h-4"
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
          {/* Right image column */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src="./images/note.png"
                alt="Illustration"
                className="w-full h-auto object-cover rounded-sm shadow"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Overlapping note card */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 lg:left-[6%] lg:translate-x-0 -bottom-10 w-[88%] max-w-lg lg:max-w-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="relative bg-white rounded-md shadow-lg border border-gray-100 p-6">
          {/* pin image */}
          <img
            src="./images/pin.png"
            alt="pin"
            className="absolute top-2 right-4 w-8 h-8"
          />
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Lorem ipsum dolor sit
          </h3>
          <div className="text-sm text-gray-600 space-y-3">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae
              amet habitasse semper.{" "}
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
              placerat vitae est suspendisse fermentum velit. Nibh dolor nunc id
              tristique sit.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet
              quisque scelerisque facilisi. Ultrices lectus viverra pharetra
              commodo.{" "}
            </p>
          </div>
        </div>
      </motion.div>
      <div className="mt-24">
        <img
          src="./images/line.png"
          alt="decorative line"
          className="w-full h-3 object-cover"
        />
      </div>
    </section>
  );
}
