"use client"

import { Sparkles, MapPin } from "lucide-react"

export function Footer() {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Integration", href: "#integration" },
    { label: "Impact", href: "#impact" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="relative border-t border-border/50 bg-background/80 backdrop-blur-sm py-8 md:py-12" role="contentinfo">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
          {/* Left Side: Logo and Company Info */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-chart-2">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-base font-bold text-foreground">Closelook</span>
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
              <a href="mailto:hello@closelook.ai" className="hover:text-foreground transition-colors">
                hello@closelook.ai
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
            © {new Date().getFullYear()} Closelook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
