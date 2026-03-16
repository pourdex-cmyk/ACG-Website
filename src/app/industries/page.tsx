import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Augmentation Consulting Group",
  description:
    "ACG delivers AI-powered operational transformation across Healthcare, Technology, Financial Services, Logistics, and Enterprise SaaS. Industry-specific expertise, enterprise-grade methodology.",
};

const industries = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    tagline: "Operational Excellence Across the Care Continuum",
    description:
      "Healthcare organizations face simultaneous pressure on throughput, cost, quality, and compliance. ACG's healthcare practice applies AI-powered process intelligence to patient workflow optimization, care coordination, and resource allocation — helping networks deliver better outcomes with existing capacity.",
    challenges: ["Patient throughput and access", "Care coordination across facilities", "Staff and resource allocation", "Regulatory compliance operations"],
    outcomes: [
      { value: "37%", label: "Processing time reduction" },
      { value: "+22%", label: "Patient throughput" },
      { value: "$4.2M", label: "Average cost savings" },
    ],
    href: "/industries/healthcare",
  },
  {
    slug: "technology",
    name: "Technology",
    icon: "⚙️",
    tagline: "Engineering Velocity and Operational Scale",
    description:
      "Technology companies scaling through growth phases face compounding operational complexity — engineering bottlenecks, product operations fragmentation, and platform reliability challenges. ACG brings AI-powered operational intelligence to the internal operations of high-growth tech organizations.",
    challenges: ["Engineering velocity and deployment efficiency", "Product operations and release management", "Platform scaling and reliability operations", "AI integration into DevOps workflows"],
    outcomes: [
      { value: "41%", label: "Faster deployment cycles" },
      { value: "28%", label: "Reduction in operational incidents" },
      { value: "3.1×", label: "Engineering throughput gain" },
    ],
    href: "/industries/technology",
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: "🏦",
    tagline: "Compliance Intelligence and Revenue Optimization",
    description:
      "Financial services organizations sit at the intersection of intense regulatory scrutiny and competitive revenue pressure. ACG's financial services practice targets compliance operations, risk monitoring, and revenue leakage — transforming these cost centers into competitive advantage platforms.",
    challenges: ["Compliance operations and regulatory reporting", "Revenue leakage and billing accuracy", "Risk monitoring and predictive credit modeling", "Operational efficiency in claims and underwriting"],
    outcomes: [
      { value: "$10.4M", label: "Revenue recovered per engagement" },
      { value: "94%", label: "Detection accuracy" },
      { value: "58%", label: "Process time reduction" },
    ],
    href: "/industries/financial-services",
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "🚛",
    tagline: "Supply Chain Visibility and Intelligent Dispatch",
    description:
      "Logistics operations run on thin margins where small efficiency improvements compound into significant competitive advantage. ACG's logistics practice targets route optimization, predictive maintenance, supply chain visibility, and dispatch automation — transforming manual operational decision-making into AI-powered precision.",
    challenges: ["Route optimization and dispatch efficiency", "Supply chain visibility and exception management", "Predictive maintenance for fleet and equipment", "Last-mile delivery performance"],
    outcomes: [
      { value: "22%", label: "Automation ROI" },
      { value: "-64%", label: "Dispatch time" },
      { value: "+15%", label: "On-time delivery" },
    ],
    href: "/industries/logistics",
  },
  {
    slug: "enterprise-saas",
    name: "Enterprise SaaS",
    icon: "☁️",
    tagline: "Customer Success at Scale and Churn Prevention",
    description:
      "Enterprise SaaS companies live and die by net revenue retention. ACG's SaaS practice builds the predictive intelligence infrastructure that enables proactive customer success — health scoring, churn prediction, onboarding optimization, and expansion signal identification.",
    challenges: ["Customer health scoring and churn prediction", "Onboarding optimization and time-to-value", "Customer success operations at scale", "Expansion revenue identification"],
    outcomes: [
      { value: "31%", label: "Reduction in churn rate" },
      { value: "42%", label: "Faster time-to-value" },
      { value: "2.8×", label: "NRR improvement" },
    ],
    href: "/industries/enterprise-saas",
  },
];

export default function IndustriesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1565c0]/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Industries</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Deep Industry Expertise,
            <br />
            <span className="acg-gradient-text">Enterprise-Grade Execution</span>
          </h1>
          <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            ACG serves five industries with purpose-built AI methodologies. Each practice area
            combines deep domain knowledge with our proven operational AI framework.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {industries.map((industry, i) => (
              <div key={industry.slug} className="acg-card acg-card-hover rounded-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Industry Info */}
                  <div className="flex-1 p-8 lg:p-10">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-2xl flex-shrink-0">
                        {industry.icon}
                      </div>
                      <div>
                        <p className="text-[#0ea5e9] text-xs font-semibold uppercase tracking-wider mb-1">{industry.tagline}</p>
                        <h2 className="text-white font-bold text-2xl lg:text-3xl">{industry.name}</h2>
                      </div>
                    </div>
                    <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{industry.description}</p>
                    <div className="mb-6">
                      <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-3">Key Challenges We Address</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.challenges.map((c) => (
                          <span key={c} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#94a3b8] text-xs">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={industry.href}
                      className="inline-flex items-center gap-2 text-sm text-[#0ea5e9] hover:text-[#38bdf8] font-medium transition-colors"
                    >
                      Explore {industry.name} Solutions
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Right: Outcomes */}
                  <div className="lg:w-64 bg-gradient-to-br from-[#1565c0]/10 to-[#0ea5e9]/5 p-8 border-t lg:border-t-0 lg:border-l border-white/[0.06] flex flex-col justify-center">
                    <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-6">Typical Outcomes</p>
                    <div className="space-y-5">
                      {industry.outcomes.map((o) => (
                        <div key={o.label}>
                          <p className="text-2xl font-bold text-[#0ea5e9] acg-stat-value mb-0.5">{o.value}</p>
                          <p className="text-[#64748b] text-xs">{o.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
