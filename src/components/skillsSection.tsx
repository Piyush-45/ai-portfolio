"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import profilepic from "@/images/profilepic1.png"

export default function Skills() {
  return (
    <>
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20"
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About Me
          <svg
            className="absolute left-1/2 -bottom-3 w-20 h-3 text-gray-300 transform -translate-x-1/2"
            viewBox="0 0 100 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={profilepic}
                alt="Piyush Tyagi"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 space-y-6 text-lg leading-relaxed"
          >
            <p>
              I’m <span className="font-semibold text-gray-900">Piyush</span>, an{" "}
              <span className="font-semibold text-gray-900">AI Engineer & Product Builder</span>{" "}
              who loves turning complex ideas into usable products. Over the years, I’ve
              built projects ranging from{" "}
              <span className="font-semibold text-gray-900">AI-driven medical health apps</span>{" "}
              to <span className="font-semibold text-gray-900">conversational chatbots</span>{" "}
              and modern web applications.
            </p>

            <p>
              My goal is simple: build products that feel intuitive, elegant, and
              impactful — combining clean design with powerful technology.
            </p>

            <p>
              I also love sharing knowledge through my{" "}
              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-black hover:underline"
              >
                YouTube channel
              </a>{" "}
              and teaching sessions, where I simplify AI and modern web development
              for others.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block cursor-pointer rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20"
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Tech I Work With
          <svg
            className="absolute left-1/2 -bottom-3 w-20 h-3 text-gray-300 transform -translate-x-1/2"
            viewBox="0 0 100 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.h2>


        <div className="space-y-16">
          <Category title="Frontend" items={[
            { icon: "/icons/react.svg", name: "React" },
            { icon: "/icons/nextjs.svg", name: "Next.js" },
            { icon: "/icons/tailwind.svg", name: "Tailwind CSS" },
          ]} />

          <Category title="Backend" items={[
            { icon: "/icons/nodejs.svg", name: "Node.js" },
            { icon: "/icons/postgres.svg", name: "PostgreSQL" },
          ]} />

          <Category title="AI / ML" items={[
            { icon: "/icons/langchain.svg", name: "LangChain" },
            { icon: "/icons/langgraph.svg", name: "LangGraph" },
            { icon: "/icons/rag.svg", name: "RAG" },
          ]} />

          <Category title="Tools" items={[
            { icon: "/icons/git.svg", name: "Git" },
            { icon: "/icons/vercel.svg", name: "Vercel" },
            { icon: "/icons/docker.svg", name: "Docker" },
          ]} />
        </div>

        {/* Optional Divider for Flow */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
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

const itemVariants = {
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