'use client'

import Image from 'next/image'
import { Leaf, Zap, DollarSign } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'Premium quality ingredients sourced daily for maximum freshness and taste',
    },
    {
      icon: Zap,
      title: 'Fast Service',
      description: 'Quick preparation without compromising on quality or deliciousness',
    },
    {
      icon: DollarSign,
      title: 'Affordable Prices',
      description: 'Premium burgers at prices that fit every budget',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-accent/15 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative w-full max-h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hd-png-hamburger-meal-with-soda-and-french-fries-701751710849813pm6pyhly5j-3JBCTudeSsP20L2eKTtQb2VzXzpbuf.png"
                alt="Burger meal with fries and drink"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
              About <span className="text-accent">IN-JOY</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At IN-JOY Burger Tulu Dimtu Branch, we believe that great burgers bring people together with joy and satisfaction. Every burger we craft is a promise of quality, deliciousness, and happiness on every bite.
            </p>

            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              From carefully selected premium ingredients to our secret sauce recipe, we take pride in delivering an unforgettable fast-food experience that goes beyond the ordinary.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
