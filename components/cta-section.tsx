"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactModal } from "@/components/contact-modal"
import { DemoModal } from "@/components/demo-modal"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

export function CtaSection() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const ctaAnimation = useScrollAnimation({ delay: 0 })

  return (
    <section className="relative pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16 overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card 
          ref={ctaAnimation.ref}
          className={`relative overflow-hidden border border-border/30 bg-white/80 p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-xl max-w-4xl mx-auto rounded-xl shadow-lg transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
            ctaAnimation.isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          {/* Background Decoration - Blurred Circles */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-chart-2/5 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto flex max-w-[700px] flex-col items-center text-center">
            {/* Headline */}
            <h2 className="mb-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Ready to Reduce Returns & Boost Sales?
            </h2>

            {/* Subheadline */}
            <p className="mb-8 max-w-[800px] text-balance text-lg sm:text-xl leading-relaxed text-foreground/70">
              Bring the next generation of shopping to your store see how AI-powered virtual try-on and smart assistance can transform your customer experience.
            </p>

            {/* Button Group */}
            <div className="flex flex-wrap justify-center gap-3">
              {/* <Button
                size="lg"
                onClick={() => setDemoModalOpen(true)}
                className="h-12 min-w-[160px] bg-primary text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md active:translate-y-0"
              >
                Request Demo
              </Button> */}
              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                className="h-12 min-w-[180px] bg-foreground text-background hover:bg-foreground/90 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 rounded-lg font-medium text-base"
              >
                Join the waiting list
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Modals */}
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </section>
  )
}
