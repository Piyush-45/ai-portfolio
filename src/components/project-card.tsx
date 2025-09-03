"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import Image, { StaticImageData } from "next/image"

interface ProjectCardProps {
  title: string
  year: string
  description: string
  image?: string | StaticImageData
  liveLink?: string
  githubLink?: string
  comingSoon?: boolean
  tags?: string[]
}

export default function ProjectCard({
  title,
  year,
  description,
  image,
  liveLink,
  githubLink,
  comingSoon = false,
  tags = [],
}: ProjectCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
    >
      {/* Image */}
      <div className="relative aspect-video rounded-lg bg-gray-100 mb-4 overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition duration-500 ${comingSoon ? "blur-sm grayscale" : "group-hover:scale-105"
              }`}
          />
        )}

        {/* Coming Soon Overlay */}
        {comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="animate-pulse px-3 py-1 text-xs font-semibold text-white bg-gray-800 rounded-full">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold group-hover:underline text-gray-900">
        {title} <span className="text-gray-400">({year})</span>
      </h3>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{description}</p>

      {/* Buttons */}
      {!comingSoon && (
        <div className="mt-5 flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              View Live <ArrowUpRight size={16} />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              GitHub <Github size={16} />
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}