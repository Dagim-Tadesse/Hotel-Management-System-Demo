'use client'

import Image from 'next/image'
import { ShoppingCart, Star } from 'lucide-react'
import { useState } from 'react'

const popularBurgers = [
  {
    id: 1,
    name: 'Flame Master',
    price: '180 ETB',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deliciously-crispy-chicken-burger-hd-transparent-background-735811696679380g5lchfibmf-gjK94dIPLAKT083qL72h7JgFnIGmXw.png',
    badge: 'Best Seller',
    isBestSeller: true,
  },
  {
    id: 2,
    name: 'Double Cheesy',
    price: '200 ETB',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Delicious--grilled-burger-on-wooden-plate-on-transparent-background-PNG-yMoFMK63QstgoT2ZxQINF9QHh2cbog.png',
    badge: 'Popular',
    isBestSeller: false,
  },
  {
    id: 3,
    name: 'Spicy Inferno',
    price: '190 ETB',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngtree-close-up-of-burger-png-image_15955071-JfoxC4F6xJoVVukSiD67HHFJogrQpI.png',
    badge: 'Hot Pick',
    isBestSeller: false,
  },
  {
    id: 4,
    name: 'Classic Burger',
    price: '150 ETB',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deliciously-crispy-chicken-burger-hd-transparent-background-735811696679380g5lchfibmf-gjK94dIPLAKT083qL72h7JgFnIGmXw.png',
    badge: 'Classic',
    isBestSeller: false,
  },
]

export default function PopularMenu() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Popular <span className="text-accent">Burgers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our most loved burgers, crafted to perfection and ready to satisfy your cravings
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularBurgers.map((burger) => (
            <div
              key={burger.id}
              onMouseEnter={() => setHoveredId(burger.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              {/* Card with glassmorphism effect */}
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20">
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Best seller badge */}
                {burger.isBestSeller && (
                  <div className="absolute top-4 right-4 z-20 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={14} />
                    {burger.badge}
                  </div>
                )}

                <div className="relative p-6">
                  {/* Image container */}
                  <div className="relative h-48 mb-6 flex items-center justify-center overflow-hidden rounded-lg">
                    <Image
                      src={burger.image}
                      alt={burger.name}
                      width={300}
                      height={250}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">{burger.name}</h3>
                  
                  <div className="flex justify-between items-end">
                    <p className="text-2xl font-black text-accent">{burger.price}</p>
                    <button className="bg-accent text-accent-foreground p-3 rounded-full hover:scale-110 transition-transform active:scale-95">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View full menu CTA */}
        <div className="text-center mt-12">
          <a href="#fullmenu" className="inline-block border-2 border-accent text-accent px-8 py-3 rounded-full font-bold hover:bg-accent hover:text-accent-foreground transition-all">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}
