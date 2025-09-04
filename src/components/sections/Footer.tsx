"use client"

import { Github, Linkedin, Youtube } from "lucide-react"

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"

// export default function SocialLinks() {
//   return (

//   )
// }
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo / Name */}
        <a href="#hero" className="text-lg font-semibold hover:underline">
          Piyush
        </a>

        {/* Center: Nav Links */}
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#projects" className="hover:text-black transition">Work</a>
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-gray-600">
          <a href="https://github.com/your-handle" target="_blank" rel="noopener noreferrer">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/your-handle" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={22} />
          </a>
          <a href="https://youtube.com/@your-handle" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={22} />
          </a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="border-t border-gray-100 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} Piyush Tyagi. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  )
}