import { Header } from "@/components/header"
import { FeaturesGrid } from "@/components/features-grid"
import { HeroSection } from "@/components/hero-section"
import { IntegrationSection } from "@/components/integration-section"
import { MetricsSection } from "@/components/metrics-section"
import { ComparisonSection } from "@/components/comparison-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16 overflow-x-hidden">
        <HeroSection />
        <FeaturesGrid />
        <IntegrationSection />
        <MetricsSection />
        <ComparisonSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
