import { robotoCondensed } from "../../../fonts";
import Image from "next/image";

export default function Features() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-semibold text-sm mb-3">
                Lorem ipsum dolor sit amet
              </h2>

              <h1
                className={`${robotoCondensed.className} text-3xl lg:text-[42px] leading-tight`}
                style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
              >
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
                Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
                leo eleifend condimentum in vitae faucibus. Amet massa malesuada
                sit pretium. Donec pharetra erat lacus suspendisse ornare.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6 lg:space-y-8 mt-6">
              <div className="flex gap-4 lg:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                    <Image
                      src="/images/icon.png"
                      alt="icon"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-semibold text-base leading-snug mb-2">
                    Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                    egestas.
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                    eu non viverra. Risus quam mattis senectus vitae interdum
                    odio ornare gravida vestibulum. Donec turpis nulla felis
                    mauris eu donec. Ipsum sit ut tortor.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 lg:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                    <Image
                      src="/images/icon.png"
                      alt="icon"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-semibold text-base leading-snug mb-2">
                    Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                    egestas.
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                    eu non viverra. Risus quam mattis senectus vitae interdum
                    odio ornare gravida vestibulum. Donec turpis nulla felis
                    mauris eu donec. Ipsum sit ut tortor.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 lg:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                    <Image
                      src="/images/icon.png"
                      alt="icon"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-semibold text-base leading-snug mb-2">
                    Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                    egestas.
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                    eu non viverra. Risus quam mattis senectus vitae interdum
                    odio ornare gravida vestibulum. Donec turpis nulla felis
                    mauris eu donec. Ipsum sit ut tortor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end hidden lg:flex">
            <div className="relative overflow-hidden shadow-xl w-full max-w-md">
              <Image
                src="/images/twomen.png"
                alt="two men"
                className="w-full h-[520px] md:h-[480px] lg:h-[560px] object-cover"
                width={500}
                height={600}
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line (thicker to match image) */}
      <div className="relative w-full" aria-hidden>
        <div
          className="w-full h-6 lg:h-8"
          style={{
            background:
              "linear-gradient(90deg, #1E40AF 0%, #059669 50%, #7C3AED 100%)",
          }}
        />
      </div>
    </div>
  );
}
