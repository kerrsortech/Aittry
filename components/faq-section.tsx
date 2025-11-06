"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Script from "next/script"

const faqs = [
  {
    question: "How does it work?",
    answer:
      "We use AI to create a realistic image of your chosen product on your photo, plus a chatbot trained to answer your customers' questions in your style.",
  },
  {
    question: "Can the chatbot answer complex questions?",
    answer:
      "Yes! It can handle budgets, specific events, styles, and suggest full outfits or individual items.",
  },
  {
    question: "Can I integrate this on my custom website?",
    answer:
      "Yes—choose our SDK for custom sites or our Shopify app, and our team will get you live in 7 days.",
  },
  {
    question: "What categories do you support?",
    answer:
      "Clothing, eyewear, handbags, footwear, jewelry, and more—over 15 categories, with new ones added all the time.",
  },
  {
    question: "Do I need to upload all my products manually?",
    answer:
      "No, your product catalog syncs automatically. No manual uploading is required.",
  },
  {
    question: "How long does custom plugin integration take?",
    answer:
      "Up to 7 days, depending on your requirements. Our team makes sure it's seamless and fully tailored for your brand.",
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
          <p className="text-base sm:text-lg text-white">Everything you need to know</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-xl transition-all p-0 gap-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-4 py-2.5 text-left transition-colors hover:bg-muted/20"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="pr-4 text-sm font-medium text-foreground flex-1 text-left">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-primary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all ${openIndex === index ? "max-h-64" : "max-h-0"}`}
                aria-hidden={openIndex !== index}
              >
                <div className="border-t border-border/30 px-4 py-2.5">
                  <p className="text-sm leading-relaxed text-muted-foreground text-left">{faq.answer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Structured Data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }),
        }}
      />
    </section>
  )
}
