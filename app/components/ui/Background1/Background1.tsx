import { robotoCondensed } from "../../../fonts";
import Image from "next/image";

export default function Background1() {
  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg1.png')" }}
      ></div>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute top-8 left-8 z-10">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="h-8 w-auto"
        />
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1
          className={`${robotoCondensed.className} text-[42px] mb-8 `}
          style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
        >
          Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas
          aliquam viverra mi.
        </h1>

        {/* Description Text */}
        <div className="space-y-6 text-lg md:text-xl leading-relaxed mb-12">
          <p>
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
            volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
            justo pellentesque id sed. Id tellus id luctus id. At quis nunc
            libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum
            nulla quam.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
            condimentum ultrices non. Ornare semper in tincidunt pellentesque
            cras mauris in vitae. At viverra quis eu malesuada vel et porttitor.
            Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a
            pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
          </p>
        </div>
        <button className="mt-6 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow-md transition">
          <span className="mr-3">{"Loerum Ipsum"}</span>
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
    </section>
  );
}