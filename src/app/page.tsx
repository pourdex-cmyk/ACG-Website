import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { ImpactMetrics } from "@/components/home/ImpactMetrics";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { MethodologyPreview } from "@/components/home/MethodologyPreview";
import { WhyACG } from "@/components/home/WhyACG";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <ImpactMetrics />
      <ServicesOverview />
      <MethodologyPreview />
      <WhyACG />
      <IndustriesSection />
      <ProductsSection />
      <InsightsPreview />
      <ConsultationCTA />
    </PageLayout>
  );
}
