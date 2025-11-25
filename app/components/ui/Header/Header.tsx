"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  useEffect(() => {
    // Keep horizontal scroll disabled while this header mounts, restore later.
    const originalHtml = document.documentElement.style.overflowX;
    const originalBody = document.body.style.overflowX;
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = originalHtml || "";
      document.body.style.overflowX = originalBody || "";
    };
  }, []);

  const accordionItems = [
    { id: 1, title: "Lorem Ipsum" },
    { id: 2, title: "Lorem Ipsum" },
    { id: 3, title: "Lorem Ipsum" },
  ];

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <motion.header
      className="w-full bg-transparent absolute top-0 left-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-20">
          {/* Left: site logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo Text"
                width={100}
                height={24}
                className="h-6 w-auto ml-2 object-contain"
              />
            </Link>
          </motion.div>

          {/* Center: accordion items in the nav */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
            {accordionItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="flex items-center space-x-2 text-sm text-[#1959AC] hover:text-[#14488f] px-3 py-2 rounded transition-colors"
                >
                  <span className="font-medium">{item.title}</span>
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      openAccordion === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown: shows the content for this accordion */}
                {openAccordion === item.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                    <Link
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-b border-gray-100"
                      onClick={() => setOpenAccordion(null)}
                    >
                      Option A
                    </Link>
                    <Link
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      onClick={() => setOpenAccordion(null)}
                    >
                      Option B
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: sign-in button and toggle for the mobile menu */}
          <div className="ml-auto flex items-center space-x-3">
            <button className="hidden md:inline-flex items-center bg-white border border-gray-200 px-4 py-2 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:shadow-md hover:bg-gray-50 transition-colors">
              Sign in
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6 text-[#1959AC]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile: collapsible menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-white rounded-lg shadow-lg border border-gray-200 py-3">
            {/* Mobile menu items with simple expansion */}
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className="px-4 border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="flex items-center justify-between w-full text-[#1959AC] py-3 text-sm font-medium"
                >
                  <span>{item.title}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openAccordion === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openAccordion === item.id && (
                  <div className="pb-2 space-y-1">
                    <Link
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 py-2 px-3 rounded hover:bg-gray-50 transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Option A
                    </Link>
                    <Link
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 py-2 px-3 rounded hover:bg-gray-50 transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Option B
                    </Link>
                  </div>
                )}
              </div>
            ))}

            <div className="px-4 pt-3 border-t border-gray-200">
              <button
                className="w-full text-left text-[#1959AC] hover:text-[#14488f] py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </button>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
