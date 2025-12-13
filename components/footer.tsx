"use client"

import { MapPin } from "lucide-react"

export function Footer() {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Integration", href: "#integration" },
    { label: "Why Us", href: "#why-us" },
    { label: "Pricing", href: "#pricing" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="relative border-t border-border/30 bg-white/90 backdrop-blur-sm pt-12 pb-12 md:pt-16 md:pb-16" role="contentinfo">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
          {/* Left Side: Logo and Company Info */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center">
                <img 
                  src="/Stylr_icon.png" 
                  alt="Stylr Logo" 
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="text-3xl font-semibold text-foreground font-sora">Stylr</span>
            </div>
            
            {/* Locations */}
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Leeds, UK</span>
              </div>
            </div>

            {/* Contact */}
            <div className="text-sm text-muted-foreground">
              <a href="mailto:hello@stylr.tech" className="hover:text-foreground transition-colors">
                hello@stylr.tech
              </a>
            </div>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex justify-start md:justify-end">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/30 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stylr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
