


// "use client"

// import ProjectCard from "@/components/project-card"
// import { motion, useScroll, useTransform } from "framer-motion"

// import Image from "next/image"
// import Skills from "@/components/sections/skillsSection"

// export default function Hero() {
//   const { scrollY } = useScroll()
//   const y = useTransform(scrollY, [0, 1000], [0, 100]) // slow parallax

//   return (
//     <>
//       <main
//         id="hero"
//         className="relative flex min-h-screen flex-col items-center justify-center px-6  overflow-hidden"
//       >
//         {/* Parallax Grid Background */}
//         <motion.div
//           style={{ y }}
//           className="absolute inset-0 -z-10
//           bg-white
//           bg-[linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)]
//           bg-[size:40px_40px]
//           [mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)]
//           [mask-repeat:no-repeat]
//           [mask-size:100%_100%]"
//         ></motion.div>

//         {/* Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center text-4xl font-bold md:text-6xl text-gray-900"
//         >
//           Hey, I’m Piyush — your new favorite <br />
//           <span className="text-gray-600">AI Engineer & Product Builder.</span>
//         </motion.h1>

//         {/* Subtext */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="mt-6 max-w-xl text-center text-lg text-gray-500 md:text-xl"
//         >
//           I design and build AI-powered apps and chatbots that make complex
//           problems simple and user-friendly.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="mt-10 flex gap-4"
//         >
//           <a
//             href="#projects"
//             className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800"
//           >
//             Explore My Work
//           </a>
//           <a
//             href="#contact"
//             className="cursor-pointer rounded-xl border border-gray-300 px-6 py-3 transition hover:bg-gray-100"
//           >
//             Get in Touch
//           </a>
//         </motion.div>
//       </main>
//     </>


//   )
// }


// components/HeroEnhanced.tsx
"use client"

import { motion } from "framer-motion"
import HeroPill from "../HeroPill"

const pills = [
  "RAG",
  "Agents",
  "LangChain",
  "LangGraph",
  "Vector DBs",
  "Next.js",
  "Node.js",
  "Vercel",
]

export default function HeroEnhanced() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Grid background */}
      <div className="absolute inset-0 -z-20 bg-white" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,white_60%,transparent_100%)]" />
      {/* Watermark word cloud */}
      <WordCloud />

      <HeroPill
        ariaLabel="specialisation"
        className="bg-black text-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.12)]">
        🚀 From RAGs to Riches (AI systems)


      </HeroPill>
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="text-center mt-6 text-4xl font-bold md:text-6xl"
      >
        {/* Hey, I’m Piyush — your new favorite */}
        Hey, I’m Piyush
        <br />
        <span className="text-gray-600">Clean design × strong engineering × AI magic.</span>
        {/* <span className="text-gray-600">AI Engineer × Product Builder.</span> */}
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
        className="mt-5 max-w-2xl text-center text-lg text-gray-500 md:text-xl"
      >
        I craft applications where clean design meets strong engineering — from RAG systems and conversational AI to full-stack web products.


      </motion.p>


      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
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

      {/* local styles */}
      <style jsx>{`
        @keyframes floaty {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-floaty {
          animation: floaty 6.5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-floaty {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

/* ---------- watermark cloud ---------- */

function WordCloud() {
  // Carefully placed words so it feels intentional (not noisy)
  const words = [
    { t: "RAG", x: "12%", y: "18%", r: -8, s: "text-5xl md:text-6xl" },
    { t: "Agents", x: "70%", y: "16%", r: 7, s: "text-4xl md:text-5xl" },
    { t: "Next.js", x: "8%", y: "70%", r: 5, s: "text-5xl md:text-6xl" },
    { t: "LangChain", x: "78%", y: "70%", r: -6, s: "text-4xl md:text-5xl" },
    { t: "Vector DBs", x: "55%", y: "80%", r: -4, s: "text-3xl md:text-4xl" },
    { t: "LLM UX", x: "52%", y: "22%", r: -10, s: "text-3xl md:text-4xl" },
    { t: "Vercel", x: "30%", y: "82%", r: 6, s: "text-3xl md:text-4xl" },
  ]

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-1 select-none opacity-[0.06]"
    >
      {words.map((w, i) => (
        <div
          key={i}
          className={`absolute font-extrabold tracking-tight text-gray-950  animate-pulse ${w.s}`}
          style={{
            left: w.x,
            top: w.y,
            transform: `rotate(${w.r}deg)`,
            filter: "blur(0.2px)", // keeps it soft
            whiteSpace: "nowrap",

          }}
        >
          {w.t}
        </div>
      ))}
    </div>
  )
}
