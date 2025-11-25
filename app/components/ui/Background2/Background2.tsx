import Image from "next/image";
export default function Background2() {
  return (
    <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg2.png')" }}
      ></div>

      <div className="absolute inset-0 bg-black/30"></div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <Image 
        src = "/images/logo.png"
        alt="Logo"
        width={128}
        height={32}
        className="h-8 w-auto"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold mb-8 uppercase">
          dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
          viverra mi. dolor sit amet consectetur. Quis adipiscing
        </h1>
      </div>
    </section>
  );
}
