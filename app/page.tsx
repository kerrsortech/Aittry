import { Header } from "@/components/header"
import { FeaturesGrid } from "@/components/features-grid"
import { HeroSection } from "@/components/hero-section"
import { IntegrationSection } from "@/components/integration-section"
import { MetricsSection } from "@/components/metrics-section"
import { PricingSection } from "@/components/pricing-section"
import { ComparisonSection } from "@/components/comparison-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ChatbotExamples } from "@/components/chatbot-examples"

export default function Home() {
  return (
    <>
      {/* Textured gradient background with clouds and petals */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 bottom-0 z-[1] overflow-hidden textured-gradient will-change-transform">
        {/* Cloud shapes */}
        <div className="cloud-shape w-[300px] h-[150px] top-[10%] left-[5%]" style={{ animationDelay: "0s" }} />
        <div className="cloud-shape w-[250px] h-[120px] top-[5%] right-[10%]" style={{ animationDelay: "3s" }} />
        <div className="cloud-shape w-[200px] h-[100px] top-[30%] left-[15%]" style={{ animationDelay: "6s" }} />

        {/* Petal shapes */}
        <div className="petal-shape w-[80px] h-[80px] top-[15%] right-[20%]" style={{ animationDelay: "2s" }} />
        <div className="petal-shape w-[60px] h-[60px] top-[25%] right-[15%]" style={{ animationDelay: "5s" }} />
        <div className="petal-shape w-[70px] h-[70px] top-[20%] right-[25%]" style={{ animationDelay: "8s" }} />
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="relative min-h-screen pt-20 overflow-x-hidden z-10">
        <HeroSection />
        <FeaturesGrid />
        <ChatbotExamples />
        <IntegrationSection />
        <MetricsSection />
        <PricingSection />
        <ComparisonSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
