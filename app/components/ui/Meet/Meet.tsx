'use client';
import Image from "next/image";
import { motion } from "framer-motion";
const Meet = () => {
  return (
    <div className="relative w-full mt-48 bg-[#F8F8F8]">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent"
          style={{
            backgroundImage: `repeating-linear-gradient(
                 45deg,
                 transparent,
                 transparent 10px,
                 rgba(59, 130, 246, 0.03) 10px,
                 rgba(59, 130, 246, 0.03) 20px
               )`,
          }}
        />
      </div>
      <div className="container mx-auto px-6 pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row items-center relative">
          {/* Image - Outside and Above the Content Div */}
          <motion.div
            className="w-full lg:w-1/2 relative z-10 -mt-24 lg:-mt-32 mb-8 lg:mb-0 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden shadow-2xl max-w-xl w-full">
              <Image
                src="/images/meet.png"
                alt="Motorcyclists on road"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          {/* Right Side - Content Div */}
          <motion.div
            className="space-y-6 w-full lg:w-1/2 p-8 lg:p-12  lg:-ml-16"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-4">
              <motion.h2
                className="text-blue-600 font-semibold text-sm uppercase tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Lorem ipsum
              </motion.h2>
              <motion.h1
                className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="text-blue-600">LOREM</span> IPSUM DOLOR SIT
                AMET CONSECTETUR. ENIM DONEC.
              </motion.h1>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio
                enim amet non.
              </motion.p>
            </div>
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {[
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
                "Lorem Ipsum",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <p className="text-gray-700 font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
            {/* CTA Button */}
            <motion.button
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Loerum ipsum
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
      {/* Bottom Gradient Line */}
      <div className="relative w-full h-2 mt-8">
        <Image
          src="/images/line.png"
          alt="Decorative line"
          className="w-full h-full object-cover"
          width={1920}
          height={10}
        />
      </div>
    </div>
  );
};

export default Meet;
