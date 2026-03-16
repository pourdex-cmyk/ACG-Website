import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | Augmentation Consulting Group",
  description:
    "Real results from real engagements. Explore how ACG has helped healthcare networks, financial services firms, and logistics providers achieve measurable operational transformation.",
};

const caseStudies = [
  {
    industry: "Healthcare",
    type: "Process Optimization",
    title: "Healthcare Network Reduced Patient Processing Time by 37%",
    challenge:
      "A regional healthcare network with 14 facilities was experiencing significant bottlenecks in patient intake and discharge workflows, leading to extended wait times and reduced capacity.",
    solution:
      "We deployed process mining across their EMR system to map actual workflow paths, identified 23 distinct bottleneck patterns, and implemented an AI-driven triage routing system.",
    outcomes: [
      { label: "Processing Time", value: "-37%" },
      { label: "Throughput", value: "+22%" },
      { label: "Cost Savings", value: "$4.2M" },
    ],
    duration: "16 weeks",
    href: "/case-studies/healthcare-processing-optimization",
  },
  {
    industry: "Financial Services",
    type: "Revenue Intelligence",
    title: "National Insurer Recovered $10M+ in Revenue Leakage",
    challenge:
      "An insurance firm was experiencing systematic revenue leakage due to billing process gaps, claims processing inconsistencies, and undetected policy exception patterns.",
    solution:
      "Our data intelligence layer ingested 18 months of transactional data, identified 7 systematic leakage patterns, and built an automated detection and correction system.",
    outcomes: [
      { label: "Revenue Recovered", value: "$10.4M" },
      { label: "Detection Accuracy", value: "94%" },
      { label: "Process Time", value: "-58%" },
    ],
    duration: "14 weeks",
    href: "/case-studies/insurer-revenue-leakage",
  },
  {
    industry: "Logistics",
    type: "Predictive Analytics",
    title: "Distribution Network Achieved 22% Automation ROI",
    challenge:
      "A national logistics provider's manual dispatch and route planning operations were creating scheduling inefficiencies and increasing operational costs across 8 regional hubs.",
    solution:
      "Deployed predictive route optimization, automated dispatch scheduling, and a real-time operational intelligence dashboard integrated with existing TMS infrastructure.",
    outcomes: [
      { label: "Automation ROI", value: "22%" },
      { label: "Dispatch Time", value: "-64%" },
      { label: "On-Time Delivery", value: "+15%" },
    ],
    duration: "12 weeks",
    href: "/case-studies/logistics-automation-roi",
  },
];

const industryFilters = ["All", "Healthcare", "Financial Services", "Logistics", "Technology", "Enterprise SaaS"];
const typeFilters = ["All", "Process Optimization", "Revenue Intelligence", "Predictive Analytics", "AI Implementation"];

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1565c0]/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Case Studies</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Results That
            <br />
            <span className="acg-gradient-text">Speak for Themselves</span>
          </h1>
          <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Every engagement begins with a measurable baseline and ends with a verified
            improvement report. These are our results — documented, specific, and reproducible.
          </p>
        </div>
      </section>

      {/* Aggregate Stats */}
      <section className="relative py-12 bg-[#020912] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "$14.6M+", label: "Total value delivered across active engagements" },
              { value: "37%", label: "Average operational efficiency improvement" },
              { value: "94%", label: "Highest prediction accuracy achieved" },
              { value: "60 days", label: "Average time to first measurable result" },
            ].map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold acg-gradient-text-blue acg-stat-value mb-2">{o.value}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative py-10 bg-[#050e1d] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 items-start">
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-3">By Industry</p>
              <div className="flex flex-wrap gap-2">
                {industryFilters.map((f) => (
                  <span
                    key={f}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                      f === "All"
                        ? "bg-[#0ea5e9]/15 border border-[#0ea5e9]/30 text-[#0ea5e9]"
                        : "bg-white/[0.04] border border-white/[0.08] text-[#64748b] hover:text-[#94a3b8]"
                    }`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-3">By Type</p>
              <div className="flex flex-wrap gap-2">
                {typeFilters.map((f) => (
                  <span
                    key={f}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                      f === "All"
                        ? "bg-[#0ea5e9]/15 border border-[#0ea5e9]/30 text-[#0ea5e9]"
                        : "bg-white/[0.04] border border-white/[0.08] text-[#64748b] hover:text-[#94a3b8]"
                    }`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <Link key={cs.href} href={cs.href} className="block group">
                <div className="acg-card acg-card-hover rounded-2xl overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 p-8 lg:p-10">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-2.5 py-1 rounded-md bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-[10px] font-semibold uppercase tracking-wide">
                          {cs.type}
                        </span>
                        <span className="text-xs text-[#475569]">{cs.industry}</span>
                        <span className="text-xs text-[#475569]">·</span>
                        <span className="text-xs text-[#475569]">{cs.duration} engagement</span>
                      </div>
                      <h2 className="text-white font-bold text-xl lg:text-2xl leading-snug mb-4 group-hover:text-[#90caf9] transition-colors">
                        {cs.title}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">Challenge</p>
                          <p className="text-[#64748b] text-sm leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">Solution</p>
                          <p className="text-[#64748b] text-sm leading-relaxed">{cs.solution}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-[#64748b] group-hover:text-[#0ea5e9] transition-colors">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <div className="lg:w-56 bg-gradient-to-br from-[#1565c0]/10 to-[#0ea5e9]/5 p-8 border-t lg:border-t-0 lg:border-l border-white/[0.06] flex flex-col justify-center">
                      <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-5">Results</p>
                      <div className="space-y-4">
                        {cs.outcomes.map((o) => (
                          <div key={o.label}>
                            <p className="text-2xl font-bold text-[#0ea5e9] acg-stat-value">{o.value}</p>
                            <p className="text-[#64748b] text-xs mt-0.5">{o.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
