"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled
        ? "backdrop-blur-md bg-white/80 border-b border-gray-200"
        : "bg-transparent"
        }`}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        {/* Logo / Name */}
        <Link href="/" className="text-lg font-semibold">
          Piyush
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a
            href="#projects"
            className="hover:text-black transition text-gray-600"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover:text-black transition text-gray-600"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-black transition text-gray-600"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white/90 backdrop-blur-md border-t border-gray-200">
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-black transition text-gray-600"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-black transition text-gray-600"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-black transition text-gray-600"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}