"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CtaSection() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="relative overflow-hidden border-border/50 bg-card/50 p-8 backdrop-blur-xl md:p-12 lg:p-16">
          {/* Background Decoration - Blurred Circles */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-chart-2/5 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto flex max-w-[700px] flex-col items-center text-center">
            {/* Headline */}
            <h2 className="mb-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              Ready to Reduce Returns & Boost Sales?
            </h2>

            {/* Subheadline */}
            <p className="mb-8 max-w-[600px] text-balance text-lg leading-relaxed text-muted-foreground">
              See how leading retailers use AI-powered virtual try-on and smart assistance to create better shopping
              experiences
            </p>

            {/* Button Group */}
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                className="h-12 min-w-[160px] bg-primary text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md active:translate-y-0"
              >
                Request Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 min-w-[160px] border-border/50 bg-transparent transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-muted/50 active:translate-y-0"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
