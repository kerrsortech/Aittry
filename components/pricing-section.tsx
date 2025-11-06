"use client"

import { Check, Image, MessageSquare, Maximize2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$79",
      period: "/mo",
      badge: null,
      features: [
        { icon: Image, text: "600 image generations" },
        { icon: MessageSquare, text: "2,000 chat outputs" },
        { icon: Maximize2, text: "2K image resolution" },
      ],
      description: "Perfect for small shops with a limited catalog—get started with photoreal try-ons and smart AI recommendations.",
      featured: false,
    },
    {
      name: "Pro",
      price: "$149",
      period: "/mo",
      badge: "Most Popular",
      features: [
        { icon: Image, text: "1,200 image generations" },
        { icon: MessageSquare, text: "4,000 chat outputs" },
        { icon: Maximize2, text: "4K image resolution" },
      ],
      description: "Ideal for growing stores with high traffic and large product ranges—scale your business with advanced virtual try-on and AI features.",
      featured: true,
    },
    {
      name: "Elite",
      price: "$299",
      period: "/mo",
      badge: null,
      features: [
        { icon: Image, text: "2,500 image generations" },
        { icon: MessageSquare, text: "10,000 chat outputs" },
        { icon: Maximize2, text: "4K image resolution" },
      ],
      description: "Built for mature brands with diverse catalogs and high sales volumes—unlock premium virtual try-on and robust AI solutions for peak performance.",
      featured: false,
    },
  ]

  const commonFeatures = [
    "Attach unlimited brand policies & guidelines",
    "Unlimited product catalogue support",
    "Automatic ticket creation for customer complaints",
    "Custom integration tech support",
  ]

  return (
    <section id="pricing" className="relative py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="mb-6 text-2xl font-semibold text-foreground sm:text-3xl">
            Plans That Fit Your Brand and Your Budget.
          </h2>
          <p className="mb-8 text-base sm:text-lg text-white">
            Your monthly plan covers all virtual try-on and AI features, with zero hidden fees, overages, or unexpected charges.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mb-12 md:mb-16 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-5">
          {plans.map((plan, index) => {
            return (
              <Card
                key={plan.name}
                className={`relative flex flex-col overflow-hidden border border-border/50 bg-card/50 backdrop-blur-xl transition-all hover:shadow-lg ${
                  plan.featured
                    ? "border-primary/50 shadow-lg ring-1 ring-primary/20"
                    : ""
                }`}
                role="article"
                aria-label={`${plan.name} pricing plan`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute right-4 top-4 z-10">
                    <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  {/* Plan Name */}
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-base text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="mb-6 space-y-4 flex-1">
                    {plan.features.map((feature, featureIndex) => {
                      const IconComponent = feature.icon
                      return (
                        <div
                          key={featureIndex}
                          className={`flex items-start gap-3 ${
                            featureIndex < plan.features.length - 1
                              ? "border-b border-border/30 pb-4"
                              : ""
                          }`}
                        >
                          <IconComponent className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-sm font-medium text-foreground">
                            {(() => {
                              const parts = feature.text.split(" ")
                              const firstWord = parts[0]
                              const rest = parts.slice(1).join(" ")
                              return (
                                <>
                                  <strong>{firstWord}</strong> {rest}
                                </>
                              )
                            })()}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Common Features Panel */}
        <div className="overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl p-6 md:p-8">
          <h3 className="mb-6 text-lg font-medium text-foreground">
            All Plans Include:
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commonFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
                role="listitem"
              >
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Pricing Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            For higher usage needs, we offer custom credit-based pricing for larger enterprise clients—contact us for details.
          </p>
        </div>
      </div>
    </section>
  )
}

