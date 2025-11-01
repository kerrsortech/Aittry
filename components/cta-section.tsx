"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactModal } from "@/components/contact-modal"
import { DemoModal } from "@/components/demo-modal"

export function CtaSection() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [demoModalOpen, setDemoModalOpen] = useState(false)

  return (
    <section className="relative py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden border-border/50 bg-card/50 p-6 backdrop-blur-xl md:p-8 lg:p-12 max-w-4xl mx-auto">
          {/* Background Decoration - Blurred Circles */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-chart-2/5 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto flex max-w-[700px] flex-col items-center text-center">
            {/* Headline */}
            <h2 className="mb-3 text-balance text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Ready to Reduce Returns & Boost Sales?
            </h2>

            {/* Subheadline */}
            <p className="mb-8 max-w-[600px] text-balance text-base sm:text-lg leading-relaxed text-muted-foreground">
              See how leading retailers use AI-powered virtual try-on and smart assistance to create better shopping
              experiences
            </p>

            {/* Button Group */}
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                onClick={() => setDemoModalOpen(true)}
                className="h-12 min-w-[160px] bg-primary text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md active:translate-y-0"
              >
                Request Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setContactModalOpen(true)}
                className="h-12 min-w-[160px] border-border/50 bg-transparent transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-muted/50 active:translate-y-0"
              >
                Contact Sales
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
