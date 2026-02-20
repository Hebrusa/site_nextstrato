import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { MetricsBanner } from "@/components/sections/metrics-banner";
import { ApprochePreview } from "@/components/sections/approche-preview";
import { AgentsGrid } from "@/components/sections/agents-grid";
import { Differentiators } from "@/components/sections/differentiators";
import { Testimonials } from "@/components/sections/testimonials";
import { Integrations } from "@/components/sections/integrations";
import { CtaFinal } from "@/components/sections/cta-final";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MetricsBanner />
        <ApprochePreview />
        <AgentsGrid />
        <Differentiators />
        <Testimonials />
        <Integrations />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
