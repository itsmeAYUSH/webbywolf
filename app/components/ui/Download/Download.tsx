import Image from "next/image";
export default function Download() {
  return (
    <section className="bg-[#F3F3F3]">
      <div className="max-w-7xl mx-auto mb-40 px-4 my-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
          <div className="space-y-6 mr-8 lg:mr-12  py-16">
            {/* Subheading */}
            <h2 className="text-xl md:text-2xl font-bold text-[#0546D2]">
              Lorem Ipsum
            </h2>
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Lorem Ipsum Dolor
              <br />
              Sit Amet
            </h1>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
                morbi suspendisse convallis. Uma a urna lectus donec felis risus
                duis pellentesque. Pellentesque ultricies ipsum.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#" className="inline-block">
                <Image
                  src="/images/appstore.png"
                  alt="Download on App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" className="inline-block">
                <Image
                  src="/images/googleplay.png"
                  alt="Download on App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right Side*/}
          <div className="flex justify-end p-0 m-0">
            <div className="relative p-0 m-0">
              <Image
                src="/images/handwithphone.png"
                alt="Hand holding phone"
                width={500}
                height={600}
                className="w-[130%] h-auto max-w-none p-0 m-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
