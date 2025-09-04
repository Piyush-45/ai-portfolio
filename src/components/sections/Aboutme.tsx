// components/AboutPolished.tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
// Use react-icons for brand + outline icons
import { FaLinkedin } from "react-icons/fa"
import { HiOutlineDocumentArrowDown } from "react-icons/hi2"

import profileImg from "@/images/profilepic1.png"

export default function AboutPolished() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-24">
      {/* soft page backdrop (very subtle) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 via-white to-white"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Photo with subtle gradient glow */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center md:justify-start"
        >
          {/* glow blob */}
          <div
            aria-hidden
            className="absolute -left-10 -top-10 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-blue-100 to-purple-200 blur-3xl opacity-40"
          />
          <div className="relative h-[340px] w-[440px] max-w-full overflow-hidden rounded-2xl bg-white shadow-[0_12px_42px_rgba(0,0,0,0.08)] ring-1 ring-gray-100">
            <Image src={profileImg} alt="Piyush Tyagi" fill className="object-cover" priority />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto md:mx-0"
        >
          <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>

          {/* WHO I AM */}
          <MicroHeading>Who I Am</MicroHeading>
          <p className="mt-2 max-w-prose text-[17px] leading-[1.85] text-gray-700">
            I’m <span className="font-semibold">Piyush</span>, an{" "}
            <span className="font-semibold">AI Engineer & Product Builder</span> who loves turning
            complex ideas into usable products. I’ve built everything from{" "}
            <span className="font-semibold">AI-driven medical health apps</span> to{" "}
            <span className="font-semibold">conversational chatbots</span> and modern web apps.
          </p>

          {/* HOW I WORK */}
          <MicroHeading className="mt-6">How I Work</MicroHeading>
          <div className="mt-2 max-w-prose space-y-4 text-[17px] leading-[1.85] text-gray-700">
            <p>
              My work always starts with the outcome, not the feature list — what problem are we truly
              solving, and how can the solution feel effortless? I build in small slices, ship fast,
              and refine continuously.
            </p>
            <p className="font-medium">
              Clean design × strong engineering = products that feel effortless.
            </p>
          </div>

          {/* fun note */}
          <p className="mt-6 max-w-prose text-gray-600">
            Outside of shipping, I share what I learn through YouTube tutorials and workshops — breaking
            down AI and modern web dev into simple, practical lessons.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Primary */}
            <a
              href="https://www.linkedin.com/in/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0a66c2] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110"
            >
              <FaLinkedin className="h-4 w-4" />
              Connect on LinkedIn
              <ArrowNudge />
            </a>

            {/* Secondary */}
            <a
              href="/Piyush-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
            >
              <HiOutlineDocumentArrowDown className="h-5 w-5" />
              Download Résumé
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- tiny helpers ---------- */

function MicroHeading({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mt-6 ${className}`}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
        {children}
      </div>
      {/* subtle underline, matches your section zigzag vibe */}
      <svg
        className="mt-1 h-[10px] w-16 text-gray-300"
        viewBox="0 0 100 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 5 Q 25 0, 50 5 T 100 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

function ArrowNudge() {
  return (
    <svg
      className="h-4 w-4 translate-x-0 transition-transform group-hover:translate-x-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  )
}