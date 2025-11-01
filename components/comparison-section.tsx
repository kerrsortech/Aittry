"use client"

import { X, Check } from "lucide-react"

export function ComparisonSection() {
  const comparisons = [
    {
      attribute: "Visual Realism",
      others: "Gimmicky overlays, fake look & feel",
      yours: "Photoreal outputs, studio-grade images",
      highlight: "Photoreal outputs",
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
      yours: "Simple usage-based: $0.45/image",
      highlight: "Simple usage-based",
    },
    {
      attribute: "Platform Support",
      others: "Limited integrations, single-platform only",
      yours: "Works everywhere: Shopify, WooCommerce, custom",
      highlight: "Works everywhere",
    },
  ]

  return (
    <section id="why-us" className="relative py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-foreground sm:text-3xl">Why Choose Us?</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Real differences that impact your bottom line</p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border/50 bg-muted/20">
                  <th className="px-3 py-3 text-left text-xs sm:text-sm font-semibold text-foreground sm:px-5 sm:py-4">Attribute</th>
                  <th className="px-3 py-3 text-left text-xs sm:text-base font-medium text-muted-foreground sm:px-5 sm:py-4">Others</th>
                  <th className="px-3 py-3 text-left text-xs sm:text-base font-semibold text-foreground sm:px-5 sm:py-4">Closelook</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border/30 transition-colors hover:bg-muted/10 ${
                      index === comparisons.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    {/* Attribute Column */}
                    <td className="px-3 py-3 align-top text-xs sm:text-sm font-semibold text-foreground sm:px-5 sm:py-4">{item.attribute}</td>

                    {/* Others Column */}
                    <td className="px-3 py-3 align-top sm:px-5 sm:py-4">
                      <div className="flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-red-500" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{item.others}</span>
                      </div>
                    </td>

                    {/* Your Platform Column */}
                    <td className="px-3 py-3 align-top sm:px-5 sm:py-4">
                      <div className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                        <span className="text-xs sm:text-sm font-medium text-foreground">
                          <strong className="font-semibold text-primary">{item.highlight}</strong>
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
