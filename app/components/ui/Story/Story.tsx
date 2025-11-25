'use client'
import React, { useEffect, useState } from "react";
import { robotoCondensed, inter } from "../../../fonts";

export default function Story() {
  const slides = [
    {
      image: "/images/story.png",
      title: "Artist & Investor",
      text: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    },
    {
      image: "/images/bg1.png",
      title: "Traveler & Explorer",
      text: "jdhkadbadak duadhahd dhaudkhf ifjslfdj sjadhryiuhs isdjf uhsujd hkadbadbak duadhahd dhaudkhf ifjslfdj sjadhryiuhs isdjf uhsu",
    },
    {
      image: "/images/bg2.png",
      title: "Entrepreneur & Innovator",
      text: "qwertyuiopasd fghjkzx cvbnmqwe rtyuiopas dfghjkzxcv bnmqwertyuio pasdfghjkzx cvbnmqwert yuiopasdfghj kzxcvbnmqwertyuio pasdfghjkzxcvbnm",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1
          className={`${robotoCondensed.className} text-[42px] text-center mb-8 uppercase`}
          style={{ letterSpacing: '-0.02em', fontWeight: 700 }}
        >
          LOREM IPSUM DOLOR SIT AMET
        </h1>

        {/* Description */}
        <div className="text-center mb-10">
          <p className="text-gray-600 leading-relaxed max-w-1xl mx-auto">
            Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
            Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
            aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum
            eget purus ornare. Risus elit et fringilla habitant ut facilisi.
          </p>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 relative z-0">
              <div className="relative">
                <img
                  src={slides[index].image}
                  alt={slides[index].title}
                  className="w-full h-80 md:h-96 lg:h-[420px] object-cover rounded-sm shadow-sm"
                />
              </div>
            </div>

            {/* Card (overlapping, on right) - Added relative z-10 to bring to front */}
            <div className="lg:col-span-5 lg:-ml-20 lg:mt-12 relative z-10">
              <div className="bg-white rounded-md shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-[#1f3749] mb-4">
                  {slides[index].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {slides[index].text}
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium inline-flex items-center hover:underline"
                >
                  Read Full Story
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
                </a>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center items-center space-x-3">
            <div className="flex items-center space-x-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === index ? "bg-blue-600" : "bg-blue-100"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}