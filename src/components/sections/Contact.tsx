"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Youtube } from "lucide-react"
import SectionHeading from "../SectionHeading"
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      alert("✅ Message sent successfully!")
      form.reset()
    } else {
      alert("❌ Failed to send message. Please try again.")
    }
  }

  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-20 scroll-mt-20"
    >
      {/* Section Title */}
      <SectionHeading>Get in Touch</SectionHeading>
      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 mb-12 max-w-xl mx-auto"
      >
        Got an idea, project, or just want to say hi?
        Let’s connect and build something amazing.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message..."
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full rounded-xl bg-black px-6 py-3 text-white font-medium transition hover:bg-gray-800"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center gap-6"
      >
        <a
          href="https://github.com/Piyush-45"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/piyushtyagidev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://x.com/Piyush_ty"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition"
        >
          <FaTwitter size={22} />
        </a>
        <a
          href="https://www.youtube.com/@flowingFrontend03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition"
        >
          <FaYoutube size={22} />
        </a>


      </motion.div>
    </section>
  )
}