'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-secondary/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 flex-shrink-0">
            <div className="text-2xl font-bold tracking-wider">
              IN<span className="text-accent ml-1">JOY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-foreground hover:text-accent transition-colors">Home</Link>
            <Link href="#menu" className="text-foreground hover:text-accent transition-colors">Menu</Link>
            <Link href="#about" className="text-foreground hover:text-accent transition-colors">About</Link>
            <Link href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</Link>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+251942123456" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
              <Phone size={20} />
              <span className="hidden lg:inline">+251 94 212 3456</span>
            </a>
            <a href="https://wa.me/251942123456" target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2">
              <MessageCircle size={18} />
              <span className="hidden lg:inline">Order</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <Link href="#home" className="block py-2 text-foreground hover:text-accent transition-colors">Home</Link>
            <Link href="#menu" className="block py-2 text-foreground hover:text-accent transition-colors">Menu</Link>
            <Link href="#about" className="block py-2 text-foreground hover:text-accent transition-colors">About</Link>
            <Link href="#contact" className="block py-2 text-foreground hover:text-accent transition-colors">Contact</Link>
            <a href="tel:+251942123456" className="block py-2 text-foreground hover:text-accent transition-colors">Call Now</a>
            <a href="https://wa.me/251942123456" target="_blank" rel="noopener noreferrer" className="block py-2 text-accent font-semibold">Order via WhatsApp</a>
          </div>
        )}
      </div>
    </nav>
  )
}
