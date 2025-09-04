"use client"

import { motion } from "framer-motion"
import React from "react"

type HeroPillProps = {
  children: React.ReactNode
  ariaLabel?: string
  className?: string
}

/**
 * Small animated pill used above the hero headline.
 * - entrance fade + slide
 * - tiny "breath" loop (scale) so it feels alive
 * - hover lifts slightly
 */
export default function HeroPill({ children, ariaLabel, className = "" }: HeroPillProps) {
  return (
    <motion.div
      role="status"
      aria-label={ariaLabel ?? "hero-pill"}
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg select-none ${className}`}
    >
      {/* subtle looping micro animation (breath) */}
      <motion.span
        aria-hidden
        className="inline-block"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 6, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
    </motion.div>
  )
}