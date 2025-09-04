"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { HiOutlineMenu } from "react-icons/hi"
import { HiOutlineXMark } from "react-icons/hi2"
import { motion, AnimatePresence } from "framer-motion"

type Item = { id: string; label: string }
const NAV_ITEMS: Item[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Drop me a line" },
]

export default function ImprovedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("")
  const [hovered, setHovered] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "hero") {
              setActive("") // none active when hero is visible
            } else {
              setActive(entry.target.id)
            }
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    )

      ;["hero", ...NAV_ITEMS.map(i => i.id)].forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })

    return () => observer.disconnect()
  }, [])

  // smooth scroll with offset for fixed header
  const handleJump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    const headerOffset = 72
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top: y, behavior: "smooth" })
  }

  const bgClass = useMemo(
    () =>
      isScrolled
        ? "backdrop-blur-md bg-white/80 border-b border-gray-200"
        : "bg-transparent",
    [isScrolled]
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${bgClass}`} aria-label="Primary">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Brand */}
        <Link href="/" className="text-lg font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-md px-1">
          Piyush_
        </Link>

        {/* Desktop nav */}
        <div
          ref={containerRef}
          className="relative hidden items-center gap-2 md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {/* Animated pill (shared layout) */}
          <div className="relative flex gap-2">
            {NAV_ITEMS.map(item => {
              const isActive = active === item.id
              const isHovered = hovered === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleJump(item.id)}
                  onMouseEnter={() => setHovered(item.id)}
                  className={`group relative rounded-lg px-3 py-2 text-sm font-medium transition
                    ${isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"}
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300`}
                >
                  {/* moving background pill */}
                  {(isActive || isHovered) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-gray-900/5"
                      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.6 }}
                    />
                  )}

                  {item.label}

                  {/* underline for active only */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-2 right-2 -bottom-1 h-[2px] rounded-full bg-gray-900"
                      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.6 }}
                    />
                  )}
                </a>
              )
            })}
          </div>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
          aria-label="Open menu"
        >
          <HiOutlineMenu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="absolute left-0 right-0 top-0 rounded-b-2xl bg-white p-4 shadow-xl"
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md p-2 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                  aria-label="Close menu"
                >
                  <HiOutlineXMark className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-2">
                {NAV_ITEMS.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={handleJump(item.id)}
                    className={`block rounded-lg px-3 py-3 text-base font-medium ${active === item.id ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}