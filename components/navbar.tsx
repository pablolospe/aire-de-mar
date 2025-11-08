"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-08%20at%208.01.41%E2%80%AFPM-KKJJseTZbFitEwAsNQUV6520H5XeIo.png"
              alt="Aire de Mar"
              width={160}
              height={100}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/#proyectos"
              className="text-sm tracking-wider font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="/#estudio"
              className="text-sm tracking-wider font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Estudio
            </Link>
            <Link
              href="/#contacto"
              className="text-sm tracking-wider font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-8 space-y-6">
            <Link
              href="/#proyectos"
              onClick={() => setIsOpen(false)}
              className="block text-lg tracking-wider font-light text-foreground"
            >
              Proyectos
            </Link>
            <Link
              href="/#estudio"
              onClick={() => setIsOpen(false)}
              className="block text-lg tracking-wider font-light text-foreground"
            >
              Estudio
            </Link>
            <Link
              href="/#contacto"
              onClick={() => setIsOpen(false)}
              className="block text-lg tracking-wider font-light text-foreground"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
