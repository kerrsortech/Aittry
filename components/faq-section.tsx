"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How does virtual try-on work?",
    answer:
      "Our AI-powered virtual try-on uses advanced computer vision to accurately position products on user-uploaded images. It works across 15+ categories including eyewear, clothing, accessories, and more.",
  },
  {
    question: "What's the integration timeline?",
    answer:
      "Custom SDK integration typically takes 1-2 weeks with our support. Shopify app installation is instant with guided setup completed in under an hour.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "We offer flexible pricing based on your monthly active users and feature requirements. Contact us for a custom quote tailored to your store's needs.",
  },
  {
    question: "Can the chatbot understand complex queries?",
    answer:
      "Yes, our AI shopping assistant is trained on your product catalog and can handle budget constraints, style preferences, occasion-based recommendations, and multi-product outfit building.",
  },
  {
    question: "What kind of analytics do you provide?",
    answer:
      "Our dashboard tracks try-on engagement, conversion rates, product performance, customer satisfaction scores, and support cost reduction metrics in real-time.",
  },
  {
    question: "Do you support mobile devices?",
    answer:
      "Absolutely. Both virtual try-on and the AI chatbot are fully responsive and optimized for mobile, tablet, and desktop experiences.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-foreground sm:text-3xl">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-muted-foreground">Everything you need to know</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-xl transition-all p-0 gap-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-4 py-2.5 text-left transition-colors hover:bg-muted/20"
              >
                <span className="pr-4 text-sm font-medium text-foreground flex-1 text-left">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-primary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div className={`overflow-hidden transition-all ${openIndex === index ? "max-h-64" : "max-h-0"}`}>
                <div className="border-t border-border/30 px-4 py-2.5">
                  <p className="text-sm leading-relaxed text-muted-foreground text-left">{faq.answer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
