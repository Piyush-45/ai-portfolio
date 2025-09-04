"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import venuebotImg from "@/images/venuebot.png"
import medicalReportImg from "@/images/medical1.png"
import SectionHeading from "../SectionHeading"

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20"
    >
      {/* Section Title */}
      <SectionHeading>Selected Work</SectionHeading>

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
          githubLink="https://github.com/Piyush-45/mrreport"
          tags={["AI", "Fullstack"]}
        />

        <ProjectCard
          title="🏛 Venue Bot"
          year="2024"
          description="Conversational AI assistant for wedding venues, helping clients explore and book events."
          image={venuebotImg}
          liveLink="https://advance-rag.vercel.app/admin"
          githubLink="https://github.com/Piyush-45/advance-rag"
          tags={["AI", "RAG", "Chatbot"]}
        />

        <ProjectCard
          title="⚡ Secret AI Project"
          year="2025"
          description="A new AI product I’m currently building. Stay tuned!"
          image=""
          comingSoon={true}
          tags={["AI", "Experimental", "RAG"]}
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