"use client"

import { motion } from "framer-motion"
import SectionHeading from "@/components/SectionHeading"

type Step = { num: string; title: string; text: string }

const STEPS: Step[] = [
  { num: "01", title: "Kickoff Call", text: "We align on outcomes, constraints, and success metrics. The goal is clarity, not a feature dump." },
  { num: "02", title: "Design the Flow", text: "I map the user journey and system shape. Just enough fidelity to agree fast and keep momentum." },
  { num: "03", title: "Build in Slices", text: "Ship small, working chunks with live Vercel previews from day one—no big-bang reveals." },
  { num: "04", title: "Refine & Ship", text: "Test, polish, and measure. For AI: evals, guardrails, and dataset versioning so we ship with confidence." },
]

export default function ProcessTimeline() {
  return (
    <section id="process" className="max-w-6xl mx-auto px-6 py-20 md:py-24 scroll-mt-20">
      <SectionHeading>How I Work</SectionHeading>

      <div className="relative mt-12">
        {/* Mobile rail (left) */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 md:hidden" />

        {/* Desktop center rail */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gray-200" />

        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-12 md:gap-x-12">
          {STEPS.map((s, i) => {
            const leftSide = i % 2 === 0 // alternate on desktop
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.06 }}
                className={`relative pl-12 md:pl-0 ${leftSide ? "md:pr-16 md:col-start-1" : "md:pl-16 md:col-start-2"}`}
              >
                {/* MOBILE: numbered chip on left rail */}
                <span className="absolute left-2 top-7 flex h-7 w-7 items-center justify-center rounded-full bg-black text-white text-[11px] font-semibold md:hidden">
                  {s.num}
                </span>

                {/* DESKTOP: connector from card to center rail (animated) */}
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                  style={{ transformOrigin: leftSide ? "right center" : "left center" }}
                  className={`hidden md:block absolute top-9 h-px bg-gray-200 ${leftSide ? "right-9" : "left-9"} w-10`}
                />

                {/* DESKTOP: numbered node on the rail */}
                <span
                  className={`hidden md:flex absolute top-[30px] h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-white text-[11px] font-semibold shadow
                    ${leftSide ? "right-[-14px]" : "left-[-14px]"}`}
                >
                  {s.num}
                </span>

                {/* Card */}
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow hover:shadow-md transition">
                  <h3 className="text-base font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* <p className="mt-8 text-sm text-gray-500">
          AI projects include eval harnesses, guardrails, dataset versioning, and observability.
        </p> */}
      </div>
    </section>
  )
}