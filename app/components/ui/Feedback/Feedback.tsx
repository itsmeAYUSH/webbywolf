"use client";
import { motion } from "framer-motion";
import { robotoCondensed, inter } from "../../../fonts";
import Image from "next/image";
import { useState } from "react";

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  const testimonials = [
    {
      icon: "/images/Feedback/icon1.png",
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      avatar: "/images/avatar.png",
      name: "Jane Cooper",
    },
    {
      icon: "/images/Feedback/icon2.png",
      text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim. Ipsum none euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      avatar: "/images/avatar.png",
      name: "Ralph Edwards",
    },
    {
      icon: "/images/Feedback/icon3.png",
      text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisl, aliquet ante laoreet.",
      avatar: "/images/avatar.png",
      name: "Courtney Henry",
    },
    {
      icon: "/images/Feedback/icon4.png",
      text: "Hendrerit augue ut mauris quis integer netus. Sit rhoncus magna habitasse. Egestas amet habitasse tellus ornare. Hendrerit senectus. Mauris egestas vitae praesent neque.",
      avatar: "/images/avatar.png",
      name: "Cameron Williamson",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - cardsToShow) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - cardsToShow ? 0 : prev + 1
    );
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#1E5EE8" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        {/* Header Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-2xl">
            <motion.h3
              className={`${inter.className} text-[24px]  text-white semibold `}
              style={{ letterSpacing: "-0.04em", fontWeight: 600 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Join other Sun harvesters
            </motion.h3>
            <motion.h1
              className={`${robotoCondensed.className} text-[42px]  text-white`}
              style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              LOREM IPSUM DOLOR SIT AMET
            </motion.h1>
            <motion.p
              className="text-white text-base leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Dui euismod iaculis libero, aliquet vitae at elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </motion.p>
          </div>

          <motion.button
            className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Lorem Ipsum
          </motion.button>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsToShow)
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-xl"
                  style={{
                    width: `calc(${100 / cardsToShow}% - ${
                      ((cardsToShow - 1) * 24) / cardsToShow
                    }px)`,
                    minWidth: "280px",
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 * index }}
                >
                  {/* Icon */}
                  <div className="mb-6 w-16 h-16">
                    <Image
                      src={testimonial.icon}
                      alt="Icon"
                      className="w-full h-full object-contain"
                      width={64}
                      height={64}
                    />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-800 text-sm leading-relaxed mb-8 min-h-[140px]">
                    {testimonial.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      width={48}
                      height={48}
                    />
                    <span className="text-gray-900 font-semibold text-base">
                      {testimonial.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <motion.div
          className="flex gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            aria-label="Previous"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            aria-label="Next"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
}