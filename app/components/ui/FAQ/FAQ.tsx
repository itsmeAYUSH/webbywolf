'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          FREQUENTLY ASKED QUESTIONS (FAQS)
        </motion.h1>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
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
              {openIndex === index && (
                <motion.div
                  className="px-6 py-4 border-t border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}