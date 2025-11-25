import { robotoCondensed } from "../../../fonts";
import Image from "next/image";

export default function NoLimits() {
  return (
    <section className="min-h-screen bg-[#F1F5F9] relative">
      {/* Background Image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-100 w-11/12 h-44 sm:h-56 opacity-70 z-0 pointer-events-none lg:inset-0 lg:w-[80vw] lg:h-[95vh] lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:opacity-100">
        <Image
          src="/images/noLimits.png"
          alt="No Limits Visual"
          className="w-full h-full object-cover"
          fill
        />
      </div>

      {/* Text Content - Upper Left Corner */}
      <div className="relative z-10 pt-8 pl-8 md:pt-12 md:pl-12 lg:pt-16 lg:pl-16 max-w-lg">
        {/* Subheading */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-600 uppercase tracking-wide">
          NO LIMITS
        </h3>

        {/* Main Heading */}
        <h1
          className={`${robotoCondensed.className} text-[42px]`}
          style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
        >
          LOREM IPSUM DOLOR SIT AMET
        </h1>

        {/* Description */}
        <div className="space-y-4 mt-6">
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
        </div>

        {/* Button/Link */}
        <div className="pt-4">
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
        </div>
      </div>
    </section>
  );
}
