"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import profilepic from "@/images/profilepic1.png"
import SectionBackdrop from "../SectionBackdrop"
import SectionHeading from "../SectionHeading"

import { Linkedin, FileDown, ArrowRight } from "lucide-react"
import AboutPolished from "./Aboutme"
export default function SkillsAndAbout() {
  return (
    <>
      <AboutPolished />

      {/*  SKILL SECTION */}

      <section id="skills" className=" relative max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
        <SectionBackdrop />
        {/* Section Heading with zigzag */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Tech I Work With
          <svg
            className="absolute left-1/2 -bottom-3 w-20 h-3 text-gray-300 -translate-x-1/2"
            viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2 ">
          {/* Capabilities (left) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
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

          {/* Toolbelt (right) */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Group label="Frontend">
              <Chip>React</Chip>
              <Chip>Next.js</Chip>
              <Chip>Tailwind CSS</Chip>
              <Chip>Framer Motion</Chip>
            </Group>

            <Group label="Backend">
              <Chip>Node.js</Chip>
              <Chip>PostgreSQL</Chip>
              <Chip>Prisma</Chip>
              <Chip>tRPC / REST</Chip>
            </Group>

            <Group label="AI / LLM">
              <Chip>LangChain</Chip>
              <Chip>LangGraph</Chip>
              <Chip>RAG</Chip>
              <Chip>OpenAI API</Chip>
              <Chip>Vector DBs</Chip>
            </Group>

            <Group label="Ops & Ship">
              <Chip>Vercel</Chip>
              <Chip>Docker</Chip>
              <Chip>GitHub Actions</Chip>
            </Group>
          </motion.div>
        </div>
      </section>
    </>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

/* Category with staggered SkillItems */
function Category({ title, items }: { title: string; items: { icon: string; name: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-6 text-center md:text-left relative">
        {title}
        <span className="absolute left-1/2 md:left-0 -bottom-2 w-8 h-0.5 bg-gray-300 rounded-full transform -translate-x-1/2 md:translate-x-0"></span>
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {items.map((item, index) => (
          <SkillItem key={index} icon={item.icon} name={item.name} />
        ))}
      </motion.div>
    </div>
  )
}

/* Skill Card */
function SkillItem({ icon, name }: { icon: string; name: string }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, rotate: 0.5 }}
      className="p-5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:shadow-md transition flex flex-col items-center"
    >
      <img src={icon} alt={name} className="h-8 w-8 mb-2" />
      <p className="text-sm font-semibold text-gray-800">{name}</p>
    </motion.div>
  )
}



/* ---------- subcomponents ---------- */

function Capability({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <ul className="space-y-2">
        {points.map((p, i) => (
          <li key={i} className="text-gray-600 text-[15px] leading-relaxed">
            • {p}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
      {children}
    </span>
  )
}

function Logo({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="h-6 w-auto" />
}