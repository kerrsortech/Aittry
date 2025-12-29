"use client"

import { X, Check } from "lucide-react"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

export function ComparisonSection() {
  const comparisons = [
    {
      attribute: "Visual Realism",
      others: "Gimmicky overlays, fake look & feel",
      yours: "Photoreal outputs, studio-grade images",
      highlight: "Photoreal outputs",
    },
    {
      attribute: "Catalog Support",
      others: "Supports mostly garments and a few accessories such as shoes and watch",
      yours: "15+ categories diverse category catalog across a lot of fashion with garments and accessories",
      highlight: "15+ categories",
    },
    {
      attribute: "Performance & Reliability",
      others: "Device-dependent AR, inconsistent results",
      yours: "Fast & consistent, works on any device",
      highlight: "Fast & consistent",
    },
    {
      attribute: "AI Shopping Assistant",
      others: "Generic chatbots, no product knowledge",
      yours: "Brand-trained AI, personalized recommendations",
      highlight: "Brand-trained AI",
    },
    {
      attribute: "Merchant Analytics",
      others: "No insights, blind to performance impact",
      yours: "Actionable data: track conversions & returns",
      highlight: "Actionable data",
    },
    {
      attribute: "Pricing Transparency",
      others: "Complex pricing, hidden fees",
      yours: "Predictable pricing. Choose from diverse plans",
      highlight: "Predictable pricing",
    },
    {
      attribute: "Platform Support",
      others: "Limited integrations, single-platform only",
      yours: "Works everywhere: Shopify, custom",
      highlight: "Works everywhere",
    },
  ]

  const headerAnimation = useScrollAnimation({ delay: 0 })
  const tableAnimation = useScrollAnimation({ delay: 200 })

  return (
    <section id="why-us" className="relative pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerAnimation.ref}
          className={`mb-12 md:mb-16 text-center transition-all duration-700 ${headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="mb-4 text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl tracking-tight">Why Choose Us?</h2>
          <p className="text-lg sm:text-xl text-foreground/70">Real differences that impact your bottom line</p>
        </div>


        {/* Trust Line */}
        <div
          className="mb-8 text-center"
        >
          <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2 inline-block">
            Proven in production: 1,000,000+ text and image requests processed across real shopping sessions.
          </p>
        </div>

        {/* Comparison Table */}
        <div
          ref={tableAnimation.ref}
          className={`overflow-hidden rounded-xl border border-border/30 bg-white/80 backdrop-blur-xl max-w-5xl mx-auto shadow-sm transition-all duration-700 ${tableAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border/50 bg-muted/20">
                  <th className="px-4 py-4 text-left text-xs sm:text-sm font-medium text-foreground sm:px-6 sm:py-5">Attribute</th>
                  <th className="px-4 py-4 text-left text-xs sm:text-base font-normal text-muted-foreground sm:px-6 sm:py-5">Others</th>
                  <th className="px-4 py-4 text-left text-xs sm:text-base font-medium text-foreground sm:px-6 sm:py-5 font-sora">Stylr</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border/30 transition-colors hover:bg-muted/10 ${index === comparisons.length - 1 ? "border-b-0" : ""
                      }`}
                  >
                    {/* Attribute Column */}
                    <td className="px-4 py-4 align-top text-xs sm:text-sm font-medium text-foreground sm:px-6 sm:py-5">{item.attribute}</td>

                    {/* Others Column */}
                    <td className="px-4 py-4 align-top sm:px-6 sm:py-5">
                      <div className="flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-red-500" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{item.others}</span>
                      </div>
                    </td>

                    {/* Your Platform Column */}
                    <td className="px-4 py-4 align-top sm:px-6 sm:py-5">
                      <div className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                        <span className="text-xs sm:text-sm font-medium text-foreground">
                          <strong className="font-medium text-primary">{item.highlight}</strong>
                          {item.yours.replace(item.highlight, "")}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
