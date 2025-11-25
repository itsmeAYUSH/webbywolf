import { robotoCondensed } from "../../../fonts";
import Image from "next/image";

export default function Cards() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
     <div 
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-repeat rotate-30 pointer-events-none"
        style={{ backgroundImage: "url('/images/design1.png')" }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-left mb-12">
          <div className="text-blue-600 text-sm font-medium mb-2 uppercase">
            Lorem ipsum dolor sit amet
          </div>

          <h1
            className={`${robotoCondensed.className} text-[42px]`}
            style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
          >
            LOREM IPSUM DOLOR SIT
          </h1>
        </div>

        <div className="max-w-4xl mb-16">
          {/* Description Text */}
          <div className="text-gray-600 leading-relaxed space-y-4 mb-8 text-center md:text-left">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="w-full h-44 md:h-48 overflow-hidden">
              <Image
                src="/images/cards/card1.png"
                alt="Card 1"
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
          </article>

          {/* Card 2 */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="w-full h-44 md:h-48 overflow-hidden">
              <Image
                src="/images/cards/card2.png"
                alt="Card 2"
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
          </article>

          {/* Card 3 */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="w-full h-44 md:h-48 overflow-hidden">
              <Image
                src="/images/cards/card3.png"
                alt="Card 3"
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
          </article>

          {/* Card 4 */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="w-full h-44 md:h-48 overflow-hidden">
              <Image
                src="/images/cards/card4.png"
                alt="Card 4"
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
          </article>
        </div>
      </div>
    </section>
  );
}