  import Image from "next/image";
import { robotoCondensed, inter } from "../../../fonts";

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:pr-[50%]">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center min-h-[80vh]">
          {/* Left Text */}
          <div className="pr-0 lg:pr-0">
            <h1
              className={`${robotoCondensed.className} text-[42px]`}
              style={{ letterSpacing: "-0.02em", fontWeight: 700 }}
            >
              Lorem ipsum dolor
              <br /> sit amet
            </h1>

            <p className="text-[20px] md:text-[20px] text-[#222222] mb-8 max-w-2xl tracking-[-0.02em]">
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
              elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
              morbi libero imperdiet neque. Justo suspendisse tristique posuere
              quis eget viverra.
            </p>

            {/* Input + Button */}
            <form className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl">
              <input
                type="email"
                placeholder="example@mail.com"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#0546D2] text-[#222222]"
              />

              <button
                type="submit"
                className="inline-flex items-center bg-[#1959AC] hover:bg-[#0546D2] text-white px-5 py-3 rounded-md text-base font-semibold shadow-md transition-colors"
              >
                Submit
                <svg
                  className="w-4 h-4 ml-3"
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
            </form>

            {/* Checkbox line */}
            <div className="flex items-center gap-3 mt-5">
              <span className="w-6 h-6 rounded-full bg-[#1959AC] flex items-center justify-center text-white">
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-sm text-[#222222]">
                No credit card required!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden z-0">
        <Image
          src="/images/hero.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
        />

        {/* diagonal mask (keeps clean left edge) */}
        <div className="absolute left-0 top-0 h-full w-24 lg:w-36 bg-white -skew-x-12 origin-top-left" />

        {/* bottom fade overlay (gradient only, no blur) */}
        <div
          className="absolute left-0 right-0 bottom-0 h-48 pointer-events-none"
          style={{
            background:
              'linear-gradient(0deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.8) 25%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>
    </section>
  );
}