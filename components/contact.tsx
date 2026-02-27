'use client'

import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Visit <span className="text-accent">IN-JOY</span> Burger
          </h2>
          <p className="text-muted-foreground text-lg">Tulu Dimtu Branch</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Our Location</h3>
                  <p className="text-muted-foreground">Tulu Dimtu Branch</p>
                  <p className="text-muted-foreground text-sm">Addis Ababa, Ethiopia</p>
                  <a
                    href="https://maps.google.com/maps?q=Tulu+Dimtu,+Addis+Ababa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-accent font-semibold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Working Hours</h3>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <p><span className="font-semibold text-foreground">Monday - Friday:</span> 10:00 AM - 11:00 PM</p>
                    <p><span className="font-semibold text-foreground">Saturday:</span> 10:00 AM - 12:00 AM</p>
                    <p><span className="font-semibold text-foreground">Sunday:</span> 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="space-y-3">
              <a
                href="tel:+251942123456"
                className="flex items-center gap-3 bg-accent text-accent-foreground px-6 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                <Phone size={20} />
                Call Now: +251 94 212 3456
              </a>
              <a
                href="https://maps.google.com/maps?q=Tulu+Dimtu,+Addis+Ababa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-2 border-accent text-accent px-6 py-4 rounded-xl font-bold hover:bg-accent/10 transition-all"
              >
                <MapPin size={20} />
                Get Directions
              </a>
              <a
                href="https://wa.me/251942123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-2 border-foreground/30 text-foreground px-6 py-4 rounded-xl font-bold hover:border-foreground/50 transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp Order
              </a>
            </div>
          </div>

          {/* Right - Map */}
          <div className="rounded-2xl overflow-hidden border-2 border-accent/30 h-96 md:h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.5256571484234!2d38.74722!3d9.03461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859c0f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sTulu%20Dimtu%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IN-JOY Burger Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
