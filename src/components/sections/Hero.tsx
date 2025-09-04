


"use client"

import ProjectCard from "@/components/project-card"
import { motion, useScroll, useTransform } from "framer-motion"

import Image from "next/image"
import Skills from "@/components/sections/skillsSection"

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 100]) // slow parallax

  return (
    <>
      <main
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center px-6  overflow-hidden"
      >
        {/* Parallax Grid Background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 -z-10 
          bg-white 
          bg-[linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)] 
          bg-[size:40px_40px]
          [mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)]
          [mask-repeat:no-repeat]
          [mask-size:100%_100%]"
        ></motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold md:text-6xl text-gray-900"
        >
          Hey, I’m Piyush — your new favorite <br />
          <span className="text-gray-600">AI Engineer & Product Builder.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-xl text-center text-lg text-gray-500 md:text-xl"
        >
          I design and build AI-powered apps and chatbots that make complex
          problems simple and user-friendly.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#projects"
            className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-xl border border-gray-300 px-6 py-3 transition hover:bg-gray-100"
          >
            Get in Touch
          </a>
        </motion.div>
      </main>
    </>


  )
}