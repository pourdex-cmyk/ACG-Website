import { PageLayout } from "@/components/layout/PageLayout";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI process optimization, predictive analytics, AI implementation consulting, process mining, and AI software development for enterprise organizations.",
};

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden acg-hero-gradient">
        <div className="absolute inset-0 acg-grid-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1565c0]/20 blur-[120px] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Consulting Services for
            <br />
            <span className="acg-gradient-text">Enterprise AI Transformation</span>
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl mx-auto">
            Five core service lines built to address the complete AI transformation journey —
            from initial discovery through sustained operational intelligence.
          </p>
        </div>
      </section>

      <ServicesOverview />
      <ConsultationCTA />
    </PageLayout>
  );
}
