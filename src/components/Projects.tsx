"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import venuebotImg from "@/images/venuebot.png"
import medicalReportImg from "@/images/medical1.png"

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=" relative text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Selected Work
        <svg
          className="absolute left-1/2 -bottom-3 w-20 h-3 text-gray-300 transform -translate-x-1/2"
          viewBox="0 0 100 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" />
        </svg>
      </motion.h2>

      {/* Grid with Staggered Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-12 md:grid-cols-2"
      >
        <ProjectCard
          title="🩺 Medical Health Report App"
          year="2024"
          description="AI app that analyzes lab reports and generates patient-friendly insights."
          image={medicalReportImg}
          liveLink="https://your-live-link.com"
          githubLink="https://github.com/your-repo"
          tags={["AI", "Fullstack"]}
        />

        <ProjectCard
          title="🏛 Venue Bot"
          year="2024"
          description="Conversational AI assistant for wedding venues, helping clients explore and book events."
          image={venuebotImg}
          liveLink="https://your-live-link.com"
          githubLink="https://github.com/your-repo"
          tags={["Chatbot", "AI"]}
        />

        <ProjectCard
          title="⚡ Secret AI Project"
          year="2025"
          description="A new AI product I’m currently building. Stay tuned!"
          image="/projects/secret-ai.png"
          comingSoon={true}
          tags={["AI", "Experimental"]}
        />
      </motion.div>
    </section>
  )
}

/* Motion variants for stagger effect */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
}