// components/SkillsSectionEnhanced.tsx
"use client"

import { motion } from "framer-motion"

export default function SkillsSectionEnhanced() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20 scroll-mt-20">
      {/* subtle split backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-200/50 to-transparent" />
      </div>

      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative mb-16 text-center text-3xl font-bold md:text-4xl"
      >
        Tech I Work With
        <svg
          className="absolute left-1/2 -bottom-3 h-3 w-20 -translate-x-1/2 text-gray-300"
          viewBox="0 0 100 10"
          fill="none"
          aria-hidden="true"
        >
          <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" />
        </svg>
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2">
        {/* LEFT: Capabilities */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="space-y-10"
        >
          <Capability
            title="AI Product Engineering"
            points={[
              "RAG systems with evals & guardrails",
              "Agents/Workflows (LangChain, LangGraph)",
              "LLM-first UX & prompt systems",
            ]}
          />

          <Capability
            title="Full-Stack Web"
            points={[
              "Next.js apps with clean IA & DX",
              "APIs in Node.js, Prisma, PostgreSQL",
              "Deploys on Vercel with CI/CD",
            ]}
          />

          <Capability
            title="Conversational Experiences"
            points={[
              "Chatbots with memory & tools",
              "Domain grounding & retrieval",
              "Analytics + iteration loop",
            ]}
          />
        </motion.div>

        {/* RIGHT: Toolbelt */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="space-y-8"
        >
          <Group label="Frontend" accent="neutral">
            <Chip>React</Chip>
            <Chip>Next.js</Chip>
            <Chip>Tailwind CSS</Chip>
            <Chip>Framer Motion</Chip>
          </Group>

          <Group label="Backend" accent="neutral">
            <Chip>Node.js</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>Prisma</Chip>
            <Chip>tRPC / REST</Chip>
          </Group>

          <Group label="AI / LLM" accent="ai">
            <Chip variant="ai">LangChain</Chip>
            <Chip variant="ai">LangGraph</Chip>
            <Chip variant="ai">RAG</Chip>
            <Chip variant="ai">OpenAI API</Chip>
            <Chip variant="ai">Vector DBs</Chip>
          </Group>

          <Group label="Ops & Ship" accent="ops">
            <Chip variant="ops">Vercel</Chip>
            <Chip variant="ops">Docker</Chip>
            <Chip variant="ops">GitHub Actions</Chip>
          </Group>
        </motion.div>
      </div>

      {/* ultra-subtle background logo strip (seamless + low opacity) */}
      <div className="pointer-events-none relative mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          viewport={{ once: true }}
          className="absolute inset-x-0 -z-10 overflow-hidden"
        >
          <div className="flex gap-12 animate-[marquee_28s_linear_infinite] whitespace-nowrap">
            {logos.map((src, i) => (
              <img key={`a-${i}`} src={src} alt="" className="h-8 w-auto opacity-90" />
            ))}
            {logos.map((src, i) => (
              <img key={`b-${i}`} src={src} alt="" className="h-8 w-auto opacity-90" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* reduce-motion safety */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[marquee_28s_linear_infinite] {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}

/* ---------------- subcomponents ---------------- */

function Capability({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <ul className="space-y-2">
        {points.map((p, i) => (
          <li key={i} className="text-[15px] leading-relaxed text-gray-600">
            • {p}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Group({
  label,
  children,
  accent = "neutral",
}: {
  label: string
  children: React.ReactNode
  accent?: "neutral" | "ai" | "ops"
}) {
  const underline =
    accent === "ai"
      ? "text-purple-300"
      : accent === "ops"
        ? "text-blue-300"
        : "text-gray-300"

  return (
    <div>
      <div className="mb-2">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
          {label}
        </div>
        <svg
          className={`mt-1 h-[10px] w-16 ${underline}`}
          viewBox="0 0 100 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 5 Q 25 0, 50 5 T 100 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap gap-2"
      >
        {children}
      </motion.div>
    </div>
  )
}

function Chip({
  children,
  variant = "neutral",
}: {
  children: React.ReactNode
  variant?: "neutral" | "ai" | "ops"
}) {
  const palette =
    variant === "ai"
      ? "bg-purple-50 text-purple-700 hover:bg-purple-100"
      : variant === "ops"
        ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"

  return (
    <motion.span
      variants={itemVariants}
      className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${palette}`}
    >
      {children}
    </motion.span>
  )
}

/* ---------------- motion variants ---------------- */

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.03 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
}

/* ---------------- assets for faint strip ---------------- */

const logos = [
  "/icons/react.svg",
  "/icons/nextjs.svg",
  "/icons/tailwind.svg",
  "/icons/nodejs.svg",
  "/icons/postgres.svg",
  "/icons/langchain.svg",
  "/icons/langgraph.svg",
  "/icons/docker.svg",
  "/icons/vercel.svg",
  "/icons/git.svg",
]