"use client";
import { useState } from "react";
import { robotoCondensed, inter } from "../../../fonts";
import Image from "next/image";

export default function Tools() {
  const [active, setActive] = useState<"Research" | "Plan" | "Design">(
    "Research"
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left column */}
        <div>
          <h1
            className={`${robotoCondensed.className} text-[42px]`}
            style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
          >
            LOREM IPSUM DOLOR SIT AMET
          </h1>

          {/* Buttons */}
          <div className="mt-6 inline-flex rounded-lg bg-white border border-gray-200 shadow-sm overflow-hidden">
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
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </p>

          {/* Check tools link */}
          <a
            href="#"
            className="mt-6 inline-flex items-center text-blue-600 text-sm font-medium hover:underline"
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
          </a>
        </div>

        {/* Right column - image */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-lg">
            <Image
              src="/images/handshake.png"
              alt="Handshake"
              className="object-cover rounded-sm shadow-md"
              width={760}
              height={420}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
