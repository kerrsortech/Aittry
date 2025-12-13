"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Script from "next/script"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

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
      "Yes choose our SDK for custom sites or our Shopify app, and our team will get you live in 7 days.",
  },
  {
    question: "What categories do you support?",
    answer:
      "Clothing, eyewear, handbags, footwear, jewelry, and more over 15 categories, with new ones added all the time.",
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
  const headerAnimation = useScrollAnimation({ delay: 0 })
  const faqAnimation = useScrollAnimation({ delay: 150 })

  return (
    <section id="faq" className="relative pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`mb-12 md:mb-16 text-center transition-all duration-700 ${
            headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="mb-4 text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg sm:text-xl text-foreground/70">Everything you need to know</p>
        </div>

        {/* FAQ Accordion */}
        <div 
          ref={faqAnimation.ref}
          className={`space-y-3 sm:space-y-4 max-w-4xl mx-auto transition-all duration-700 ${
            faqAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden border border-border/30 bg-white/80 backdrop-blur-xl transition-all p-0 gap-0 hover:shadow-md hover:-translate-y-0.5 rounded-xl">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-5 py-4 sm:px-6 sm:py-5 text-left transition-all duration-200 hover:bg-muted/20"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="pr-4 text-sm sm:text-base font-medium text-foreground flex-1 text-left">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all ${openIndex === index ? "max-h-64" : "max-h-0"}`}
                aria-hidden={openIndex !== index}
              >
                <div className="border-t border-border/30 px-5 py-4 sm:px-6 sm:py-5">
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-left">{faq.answer}</p>
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
