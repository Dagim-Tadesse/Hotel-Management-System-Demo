'use client'

import Link from 'next/link'
import { Instagram, Facebook, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-4">
              IN<span className="text-accent">JOY</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Hot & Fresh Burgers, Made With Joy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-muted-foreground hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="#menu" className="text-muted-foreground hover:text-accent transition-colors">Menu</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-accent transition-colors">About</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <a href="tel:+251942123456" className="hover:text-accent transition-colors">+251 94 212 3456</a>
              </li>
              <li className="text-muted-foreground text-sm">Tulu Dimtu Branch</li>
              <li className="text-muted-foreground text-sm">Addis Ababa, Ethiopia</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/251942123456"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
            <p>&copy; IN-JOY Burger Tulu Dimtu Branch. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
