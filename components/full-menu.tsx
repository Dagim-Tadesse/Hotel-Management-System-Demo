'use client'

import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'

const menuCategories = {
  burgers: [
    { name: 'Flame Master Burger', price: '180 ETB', bestseller: true },
    { name: 'Double Cheesy Delight', price: '200 ETB', bestseller: false },
    { name: 'Spicy Inferno', price: '190 ETB', bestseller: false },
    { name: 'Classic Cheeseburger', price: '150 ETB', bestseller: false },
    { name: 'Bacon Bliss Burger', price: '210 ETB', bestseller: false },
    { name: 'Triple Stack', price: '240 ETB', bestseller: false },
  ],
  combos: [
    { name: 'Burger + Fries + Drink', price: '220 ETB', bestseller: true },
    { name: 'Double Burger Combo', price: '350 ETB', bestseller: false },
    { name: 'Family Combo (4 Burgers)', price: '680 ETB', bestseller: false },
    { name: 'Premium Combo', price: '260 ETB', bestseller: false },
  ],
  sides: [
    { name: 'Crispy French Fries (Regular)', price: '60 ETB', bestseller: false },
    { name: 'Crispy French Fries (Large)', price: '90 ETB', bestseller: false },
    { name: 'Onion Rings', price: '80 ETB', bestseller: false },
    { name: 'Cheese Fries', price: '110 ETB', bestseller: false },
    { name: 'Coleslaw', price: '50 ETB', bestseller: false },
  ],
  drinks: [
    { name: 'Soft Drink (Regular)', price: '40 ETB', bestseller: false },
    { name: 'Soft Drink (Large)', price: '60 ETB', bestseller: false },
    { name: 'Fresh Juice', price: '70 ETB', bestseller: false },
    { name: 'Milkshake', price: '100 ETB', bestseller: false },
    { name: 'Iced Tea', price: '55 ETB', bestseller: false },
  ],
}

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuCategories>('burgers')

  return (
    <section id="fullmenu" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Complete <span className="text-accent">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg">Explore our full selection of delicious food & drinks</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as keyof typeof menuCategories)}
              className={`px-6 py-2 rounded-full font-bold transition-all capitalize ${
                activeCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-foreground hover:border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu items - Clean List Style */}
        <div className="space-y-1 border-t border-border/30">
          {menuCategories[activeCategory].map((item, index) => (
            <div
              key={index}
              className="group px-4 py-4 sm:px-6 flex items-center justify-between border-b border-border/20 hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-foreground font-semibold text-base sm:text-lg group-hover:text-accent transition-colors">{item.name}</h3>
                  {item.bestseller && (
                    <span className="text-xs font-bold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                      BESTSELLER
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-6">
                <p className="text-accent font-black text-lg sm:text-xl min-w-[80px] text-right">{item.price}</p>
                <button className="bg-accent/90 text-accent-foreground p-2 sm:p-2.5 rounded-lg hover:bg-accent scale-90 sm:scale-100 hover:scale-110 transition-all active:scale-95">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to order?</p>
          <a
            href="https://wa.me/251942123456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Order via WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  )
}
