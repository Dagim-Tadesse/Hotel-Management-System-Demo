'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 text-pretty">
              Hot & Fresh
              <br />
              <span className="text-accent">Burgers,</span>
              <br />
              Made With <span className="text-accent">Joy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              Juicy, delicious burgers crafted with premium ingredients, bold flavors, and lightning-fast service. Every bite is pure happiness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#menu" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105 active:scale-95">
                View Menu <ArrowRight size={20} />
              </Link>
              <a href="https://wa.me/251942123456" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/10 transition-all">
                Order via WhatsApp
              </a>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent rounded-full blur-2xl"></div>
            <div className="relative w-full h-full max-h-96 md:max-h-none flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-esEpgYiTW9RaoBkEVL0zZQbXfrIqBw.png"
                alt="Premium flaming burger with fiery sauce"
                width={500}
                height={500}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
