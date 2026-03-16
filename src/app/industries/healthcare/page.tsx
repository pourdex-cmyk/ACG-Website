import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2, Activity, Users, Clock, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare AI Operations | Augmentation Consulting Group",
  description:
    "AI-powered healthcare operations consulting. Improve patient throughput, care coordination, and resource allocation across hospital networks and health systems.",
};

const challenges = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Patient Throughput & Access",
    description:
      "Long wait times, intake bottlenecks, and discharge delays create downstream capacity constraints that limit the number of patients a network can effectively serve. ACG maps the actual patient flow across your EMR and scheduling systems to find and eliminate the specific steps creating throughput drag.",
    solutions: ["Patient intake process mining", "AI-driven triage routing", "Discharge workflow optimization", "Bed management intelligence"],
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Care Coordination",
    description:
      "Fragmented care coordination across departments, facilities, and care teams leads to duplicate work, communication delays, and missed handoffs. Our AI integration layer builds the connective intelligence that keeps care teams synchronized without adding administrative burden.",
    solutions: ["Cross-facility workflow mapping", "Automated care transition alerts", "Handoff protocol compliance monitoring", "Care gap identification"],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Resource Allocation",
    description:
      "Staffing mismatches, equipment scheduling inefficiencies, and supply chain gaps create both cost waste and care quality risk. Predictive demand modeling enables your operations team to allocate resources proactively rather than reactively.",
    solutions: ["Predictive staffing models", "Equipment utilization analytics", "Supply demand forecasting", "OR scheduling optimization"],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Compliance Operations",
    description:
      "Healthcare compliance requirements — from CMS regulations to HIPAA to accreditation standards — generate significant operational overhead. We build automated compliance monitoring systems that reduce manual audit burden and surface violations before they escalate.",
    solutions: ["Automated compliance monitoring", "Audit trail documentation", "Exception detection and escalation", "Regulatory reporting automation"],
  },
];

const caseStudyStats = [
  { value: "-37%", label: "Patient Processing Time" },
  { value: "+22%", label: "Patient Throughput" },
  { value: "$4.2M", label: "Annual Cost Savings" },
  { value: "23", label: "Bottleneck Patterns Resolved" },
];

export default function HealthcarePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0ea5e9]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/industries" className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors">Industries</Link>
              <span className="text-[#475569]">/</span>
              <span className="text-xs text-[#0ea5e9]">Healthcare</span>
            </div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Healthcare</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Operations for
              <br />
              <span className="acg-gradient-text">Healthcare Networks</span>
            </h1>
            <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
              Healthcare organizations face a unique convergence of pressures: growing patient
              demand, constrained resources, regulatory complexity, and the highest stakes in
              any industry. ACG's healthcare practice applies operational AI to the places where
              it matters most — patient access, care coordination, and resource efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-consultation" className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-7 py-3 rounded-xl text-sm">
                <span className="relative z-10">Discuss Your Operations</span>
              </Link>
              <Link href="/case-studies/healthcare-processing-optimization" className="inline-flex items-center gap-2 acg-btn-outline text-white font-medium px-7 py-3 rounded-xl text-sm">
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12 bg-[#020912] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudyStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold acg-gradient-text-blue acg-stat-value mb-2">{s.value}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Healthcare Challenges</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Where We Focus <span className="acg-gradient-text">Our Expertise</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              ACG's healthcare practice is built around the operational challenges that have the greatest impact on both care quality and cost efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="acg-card acg-card-hover rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1565c0]/20 to-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] mb-5">
                  {challenge.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{challenge.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{challenge.description}</p>
                <div className="flex flex-wrap gap-2">
                  {challenge.solutions.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-md bg-[#0ea5e9]/8 border border-[#0ea5e9]/15 text-[#0ea5e9] text-xs font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Our Healthcare Approach</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Clinical Context Meets{" "}
                <span className="acg-gradient-text">Operational AI</span>
              </h2>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-6">
                Healthcare operations are not the same as enterprise operations in other sectors.
                Clinical workflows carry patient safety implications. Compliance requirements are
                non-negotiable. Technology changes require careful change management with clinical staff.
              </p>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                ACG's healthcare practice team works alongside clinical operations leadership —
                not around them. Our AI systems are designed to support clinical judgment, not
                override it. And our implementations are designed to work within your existing
                Epic, Cerner, or custom EMR infrastructure.
              </p>
              <div className="space-y-3">
                {[
                  "HIPAA-compliant data handling across all engagements",
                  "EMR-native integration — Epic, Cerner, Meditech, and custom systems",
                  "Clinical workflow validation with nursing and physician leadership",
                  "Change management designed for clinical environments",
                  "Regulatory alignment review included in all healthcare engagements",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study Teaser */}
            <div className="acg-card acg-border-glow rounded-2xl p-8">
              <p className="text-xs text-[#0ea5e9] uppercase tracking-wider font-semibold mb-4">Featured Case Study</p>
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-[10px] font-semibold uppercase tracking-wide mb-4">
                Process Optimization
              </span>
              <h3 className="text-white font-bold text-xl leading-snug mb-4">
                14-Facility Healthcare Network Reduced Patient Processing Time by 37%
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                A regional healthcare network deployed ACG's process mining technology across their
                Epic EMR system, mapping actual patient flow across 14 facilities. Our analysis
                identified 23 distinct bottleneck patterns — many invisible to clinical leadership
                — and enabled implementation of an AI-driven triage routing system that transformed
                patient throughput without adding staff.
              </p>
              <div className="grid grid-cols-2 gap-4 py-5 border-y border-white/[0.06] mb-6">
                {caseStudyStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold text-[#0ea5e9] acg-stat-value">{s.value}</p>
                    <p className="text-[#475569] text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/case-studies/healthcare-processing-optimization"
                className="inline-flex items-center gap-2 text-sm text-[#0ea5e9] hover:text-[#38bdf8] font-medium transition-colors"
              >
                Read Full Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
