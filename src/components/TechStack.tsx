"use client"

import { motion } from "framer-motion"

type Tech = { label: string; icon?: React.ReactNode }

const FRONTEND: Tech[] = [
  { label: "React" },
  { label: "Next.js" },
  { label: "Tailwind CSS" },
]

const BACKEND: Tech[] = [
  { label: "Node.js" },
  { label: "PostgreSQL" },
]

const AI: Tech[] = [
  { label: "LangChain" },
  { label: "LangGraph" },
  { label: "RAG" },
]

const TOOLS: Tech[] = [
  { label: "Git" },
  { label: "Vercel" },
  { label: "Docker" },
]

export default function TechStack() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-24">
      {/* Background: subtle dot pattern + vignette fade */}
      <div
        aria-hidden
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.04),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.04),transparent_40%)]
          bg-[length:600px_600px]
        "
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(1200px_600px_at_50%_40%,black,transparent)]"
      >
        {/* micro dot grid */}
        <div className="h-full w-full opacity-[0.35]
                        bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
                        bg-[size:18px_18px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Heading (uses your zigzag underline style if you wrapped it) */}
        <h2 className="text-center text-3xl font-bold md:text-4xl">Tech I Work With</h2>

        {/* Groups */}
        <div className="mt-12 space-y-12">
          <TechGroup title="Frontend" items={FRONTEND} />
          <TechGroup title="Backend" items={BACKEND} />
          <TechGroup title="AI / ML" items={AI} />
          <TechGroup title="Tools" items={TOOLS} />
        </div>
      </div>
    </section>
  )
}

function TechGroup({ title, items }: { title: string; items: Tech[] }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold tracking-wider text-gray-500">{title}</h3>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((t, i) => (
          <motion.li
            key={t.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.03 }}
            className="
              group relative rounded-xl border border-gray-200 bg-white/90
              backdrop-blur-[1px] px-4 py-3 shadow-sm
              hover:shadow-md hover:-translate-y-0.5 transition
            "
          >
            {/* subtle inner highlight on hover */}
            <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition
                              [background:radial-gradient(400px_80px_at_50%_0%,rgba(17,24,39,0.04),transparent)]" />
            <div className="flex items-center gap-2">
              {/* optional icon slot */}
              {t.icon}
              <span className="text-sm font-medium text-gray-800">{t.label}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}