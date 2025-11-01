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
    <section id="why-us" className="relative py-32">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-semibold text-foreground">Why Choose Us?</h2>
          <p className="text-base text-muted-foreground">Real differences that impact your bottom line</p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border/50 bg-muted/20">
                  <th className="px-5 py-4 text-left text-sm font-semibold text-foreground">Attribute</th>
                  <th className="px-5 py-4 text-left text-base font-medium text-muted-foreground">Others</th>
                  <th className="px-5 py-4 text-left text-base font-semibold text-foreground">Closelook</th>
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
                    <td className="px-5 py-4 align-top text-sm font-semibold text-foreground">{item.attribute}</td>

                    {/* Others Column */}
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-start gap-2">
                        <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                        <span className="text-sm text-muted-foreground">{item.others}</span>
                      </div>
                    </td>

                    {/* Your Platform Column */}
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm font-medium text-foreground">
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
