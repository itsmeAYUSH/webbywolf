'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Background2() {
  return (
    <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      {/* BACKGROUND: hero image behind content */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg2.png')" }} />
      {/* TINT: slight dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* BRAND: site logo */}
      <motion.div className="absolute top-8 left-8 z-10" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={128}
          height={32}
          className="h-8 w-auto"
        />
      </motion.div>

      {/* CONTENT: centered headline */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-4xl lg:text-4xl font-bold mb-8 uppercase"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
          viverra mi. dolor sit amet consectetur. Quis adipiscing
        </motion.h1>
      </div>
    </section>
  );
}
