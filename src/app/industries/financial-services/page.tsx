import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2, Shield, DollarSign, BarChart3, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Services AI Operations | Augmentation Consulting Group",
  description:
    "AI-powered operations for financial services firms. Compliance automation, revenue leakage recovery, predictive risk modeling, and claims processing optimization.",
};

const focusAreas = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Compliance Operations",
    description:
      "Financial services compliance is one of the most expensive operational functions in the sector — and one of the most amenable to AI augmentation. ACG builds automated compliance monitoring systems that reduce manual review burden, surface violations proactively, and generate audit-ready documentation.",
    solutions: ["Automated compliance monitoring", "Regulatory change impact analysis", "Audit trail automation", "Policy exception detection"],
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Revenue Leakage Recovery",
    description:
      "Billing inaccuracies, claims processing gaps, and policy exception patterns silently drain revenue from financial services organizations. Our data intelligence layer ingests transactional data at scale to surface systematic leakage patterns invisible to standard reporting.",
    solutions: ["Billing accuracy analysis", "Claims pattern anomaly detection", "Revenue reconciliation automation", "Exception identification and recovery"],
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Risk Monitoring",
    description:
      "Reactive risk management is increasingly insufficient in a rapidly evolving regulatory and market environment. ACG builds predictive risk intelligence systems that surface emerging risk concentrations before they become reportable events.",
    solutions: ["Credit risk prediction", "Portfolio concentration monitoring", "Counterparty risk intelligence", "Early warning systems"],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Claims & Underwriting Efficiency",
    description:
      "Insurance and lending operations face complex, multi-step workflows prone to bottlenecks, rework, and exception handling overhead. Process mining maps actual claims and underwriting flows to identify the specific steps suppressing throughput and quality.",
    solutions: ["Claims processing optimization", "Underwriting workflow automation", "Exception triage intelligence", "STP rate improvement"],
  },
];

const caseStudyStats = [
  { value: "$10.4M", label: "Revenue Recovered" },
  { value: "94%", label: "Detection Accuracy" },
  { value: "-58%", label: "Process Time" },
  { value: "7", label: "Leakage Patterns Resolved" },
];

export default function FinancialServicesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1565c0]/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/industries" className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors">Industries</Link>
              <span className="text-[#475569]">/</span>
              <span className="text-xs text-[#0ea5e9]">Financial Services</span>
            </div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Financial Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Operations for
              <br />
              <span className="acg-gradient-text">Financial Services</span>
            </h1>
            <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
              Financial services organizations operate under simultaneous pressure from regulatory
              complexity, competitive margin compression, and rising operational costs. ACG's
              financial services practice targets the specific operational pain points where AI
              intelligence delivers measurable, defensible impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-consultation" className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-7 py-3 rounded-xl text-sm">
                <span className="relative z-10">Discuss Your Operations</span>
              </Link>
              <Link href="/case-studies/insurer-revenue-leakage" className="inline-flex items-center gap-2 acg-btn-outline text-white font-medium px-7 py-3 rounded-xl text-sm">
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

      {/* Focus Areas */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Focus Areas</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Operational AI for <span className="acg-gradient-text">Financial Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="acg-card acg-card-hover rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1565c0]/20 to-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] mb-5">
                  {area.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{area.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.solutions.map((s) => (
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

      {/* Case Study + Compliance */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="acg-card acg-border-glow rounded-2xl p-8">
              <p className="text-xs text-[#0ea5e9] uppercase tracking-wider font-semibold mb-4">Featured Case Study</p>
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-[10px] font-semibold uppercase tracking-wide mb-4">
                Revenue Intelligence
              </span>
              <h3 className="text-white font-bold text-xl leading-snug mb-4">
                National Insurer Recovered $10M+ in Revenue Leakage
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                A national insurance firm was experiencing systematic revenue leakage through
                billing process gaps, claims processing inconsistencies, and undetected policy
                exception patterns. ACG's data intelligence layer ingested 18 months of
                transactional data, identified 7 systematic leakage patterns, and built an
                automated detection and correction system deployed in production within 14 weeks.
              </p>
              <div className="grid grid-cols-2 gap-4 py-5 border-y border-white/[0.06] mb-6">
                {caseStudyStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold text-[#0ea5e9] acg-stat-value">{s.value}</p>
                    <p className="text-[#475569] text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/case-studies/insurer-revenue-leakage" className="inline-flex items-center gap-2 text-sm text-[#0ea5e9] hover:text-[#38bdf8] font-medium transition-colors">
                Read Full Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Compliance & Data Security</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Built for Regulated <span className="acg-gradient-text">Environments</span>
              </h2>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                Financial services organizations require consultants who understand not just
                operational efficiency but the regulatory context in which improvements must operate.
                ACG's financial services practice team includes professionals with financial services
                operations backgrounds who understand compliance constraints from the inside.
              </p>
              <div className="space-y-3">
                {[
                  "SOC 2 Type II compliant data handling across all engagements",
                  "Data processing agreements aligned with financial services requirements",
                  "Model explainability documentation for regulatory examination",
                  "Audit-ready decision trail generation built into all AI systems",
                  "Integration with compliance platforms (Archer, MetricStream, others)",
                  "Regulatory change monitoring and impact modeling capabilities",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
