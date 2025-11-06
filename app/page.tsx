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

export default function Home() {
  return (
    <>
      {/* Fixed viewport gradient background - always visible behind all content */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 bottom-0 z-[1] overflow-hidden">
        {/* Top area gradients */}
        <div className="absolute left-0 top-[10%] h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/25 via-primary/18 to-chart-1/15 blur-3xl animate-glow-left" />
        <div className="absolute right-0 top-[15%] h-[40rem] w-[40rem] translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-l from-chart-4/25 via-chart-4/20 to-chart-1/15 blur-3xl animate-glow-right" />
        <div className="absolute left-1/2 top-[20%] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/22 blur-3xl animate-glow-pulse" />
        
        {/* Middle area gradients */}
        <div 
          className="absolute left-0 top-[50%] h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-chart-2/22 via-chart-2/18 to-chart-3/12 blur-3xl animate-glow-left"
          style={{ animationDelay: "3s" }}
        />
        <div 
          className="absolute right-0 top-[45%] h-[32rem] w-[32rem] translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-l from-primary/22 via-primary/18 to-chart-2/12 blur-3xl animate-glow-right"
          style={{ animationDelay: "5s" }}
        />
        <div className="absolute left-1/2 top-[50%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chart-2/18 blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Bottom area gradients */}
        <div 
          className="absolute left-0 bottom-[20%] h-[28rem] w-[28rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-r from-chart-5/20 via-chart-4/15 to-primary/10 blur-3xl animate-glow-drift"
          style={{ animationDelay: "6s" }}
        />
        <div 
          className="absolute right-0 bottom-[25%] h-[26rem] w-[26rem] translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-l from-chart-3/20 via-chart-5/15 to-chart-4/10 blur-3xl animate-glow-drift"
          style={{ animationDelay: "8s" }}
        />
        <div className="absolute left-1/2 bottom-[30%] h-[30rem] w-[30rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-chart-1/12 blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Additional accent gradients distributed across viewport */}
        <div 
          className="absolute left-[15%] top-[25%] h-[24rem] w-[24rem] rounded-full bg-gradient-to-br from-chart-3/22 via-chart-3/18 to-chart-5/12 blur-3xl animate-glow-drift" 
          style={{ animationDelay: "2s" }}
        />
        <div 
          className="absolute right-[20%] top-[60%] h-[26rem] w-[26rem] rounded-full bg-gradient-to-tl from-chart-5/22 via-chart-1/18 to-chart-3/12 blur-3xl animate-glow-drift" 
          style={{ animationDelay: "4s" }}
        />
        <div 
          className="absolute left-[25%] bottom-[15%] h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-chart-1/20 via-primary/15 to-chart-2/10 blur-3xl animate-glow-pulse" 
          style={{ animationDelay: "7s" }}
        />
        <div 
          className="absolute right-[25%] top-[35%] h-[20rem] w-[20rem] rounded-full bg-gradient-to-bl from-chart-4/20 via-chart-5/15 to-chart-1/10 blur-3xl animate-glow-pulse" 
          style={{ animationDelay: "9s" }}
        />
      </div>

      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="relative min-h-screen pt-16 overflow-x-hidden z-10">
        <HeroSection />
        <FeaturesGrid />
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
