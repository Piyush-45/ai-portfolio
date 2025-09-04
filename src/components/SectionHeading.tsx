// components/SectionHeading.tsx
"use client"
import { motion } from "framer-motion"

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative text-3xl md:text-4xl font-bold text-center mb-14 md:mb-16"
    >
      <span className="inline-block relative">
        {children}
        <svg
          className="absolute left-1/2 -bottom-3 w-20 h-3 text-gray-300 -translate-x-1/2"
          viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" />
        </svg>
      </span>
    </motion.h2>
  )
}