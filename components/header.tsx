"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"
import { DemoModal } from "@/components/demo-modal"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [demoModalOpen, setDemoModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "border-b border-border/50 bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 transition-opacity hover:opacity-80" aria-label="Stylr Home">
            <div className="flex h-9 w-9 items-center justify-center" aria-hidden="true">
              <img 
                src="/stylr icon.svg" 
                alt="Stylr Logo" 
                width={36} 
                height={36}
                className="h-9 w-9 object-contain"
              />
            </div>
            <span className="text-3xl font-bold text-foreground">Stylr</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden items-center gap-3 md:flex">
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setContactModalOpen(true)}
            >
              Join the waiting list
            </Button>
            {/* <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setDemoModalOpen(true)}
            >
              Request Demo
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card/50 text-foreground transition-colors hover:bg-muted/50 md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="border-t border-border/50 bg-background/95 py-4 backdrop-blur-xl md:hidden" role="navigation" aria-label="Mobile navigation">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="rounded-lg px-4 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2 px-4">
              <Button 
                size="sm" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  setContactModalOpen(true)
                  setIsMobileMenuOpen(false)
                }}
              >
                Join the waiting list
              </Button>
              {/* <Button 
                size="sm" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  setDemoModalOpen(true)
                  setIsMobileMenuOpen(false)
                }}
              >
                Request Demo
              </Button> */}
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </header>
  )
}
