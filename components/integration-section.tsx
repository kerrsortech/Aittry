"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Code2, ShoppingBag } from "lucide-react"

export function IntegrationSection() {
  return (
    <section id="integration" className="relative py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-foreground sm:text-3xl">Easy Integration</h2>
          <p className="text-base sm:text-lg text-white">Choose what works for your store</p>
        </div>

        {/* Integration Cards */}
        <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Custom SDK Card */}
          <Card className="group relative h-full overflow-hidden border-l-[3px] border-l-primary border-border/50 bg-card/50 p-5 backdrop-blur-xl transition-all">
            <div className="flex h-full flex-col">
              {/* Icon */}
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>

              {/* Beta Badge - Absolute positioned */}
              <div className="absolute top-3 right-3">
                <Badge className="bg-orange-500/20 text-orange-600 border-orange-500/30 dark:text-orange-400">Beta</Badge>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-foreground">Custom SDK</h3>

              {/* Description */}
              <p className="mb-4 text-base text-muted-foreground">
                Integrate with your custom e-commerce platform using our flexible SDK.
              </p>

              {/* Features List */}
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>RESTful APIs & webhooks</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>Complete documentation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>Full integration support from our team</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Shopify App Card */}
          <Card className="group relative h-full overflow-hidden border-l-[3px] border-l-primary border-border/50 bg-card/50 p-5 backdrop-blur-xl transition-all">
            <div className="flex h-full flex-col">
              {/* Icon */}
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-foreground">Shopify App</h3>

              {/* Description */}
              <p className="mb-4 text-base text-muted-foreground">
                One-click installation for Shopify stores. No coding required.
              </p>

              {/* Features List */}
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>Install from Shopify App Store</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>Automatic catalog synchronization</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>Guided setup & onboarding support</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Bottom Callout */}
        <div className="mt-6 text-center max-w-4xl mx-auto">
          <div className="inline-block rounded-lg border border-border/50 bg-card/30 px-3 py-3 backdrop-blur-sm">
            <p className="text-xs sm:text-sm text-muted-foreground">Our team provides full onboarding support for both options</p>
          </div>
        </div>
      </div>
    </section>
  )
}
