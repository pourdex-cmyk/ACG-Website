import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Insurer Revenue Leakage Recovery | ACG Case Study",
  description:
    "How ACG helped a national insurance firm recover $10.4M in systematic revenue leakage through data intelligence, pattern detection, and automated correction systems.",
};

const results = [
  { value: "$10.4M", label: "Revenue Recovered", detail: "Systematic leakage identified and recovered in 12 months post-implementation" },
  { value: "94%", label: "Detection Accuracy", detail: "Precision rate of the automated leakage detection system" },
  { value: "-58%", label: "Process Time", detail: "Reduction in billing cycle and exception handling processing time" },
  { value: "7", label: "Leakage Patterns", detail: "Distinct systematic revenue leakage patterns identified and closed" },
];

const leakagePatterns = [
  { pattern: "Policy Exception Miscoding", annualImpact: "$2.8M", description: "Systematic miscoding of policy exceptions resulting in incorrect premium calculations across 12,000+ accounts" },
  { pattern: "Billing Cycle Timing Gaps", annualImpact: "$2.1M", description: "Retroactive policy changes not reflected in billing cycles, creating persistent underbilling" },
  { pattern: "Claims Offset Failures", annualImpact: "$1.9M", description: "Reinsurance treaty offset calculations not applying correctly across 3 product lines" },
  { pattern: "Endorsement Processing Delays", annualImpact: "$1.4M", description: "Mid-term policy endorsements processed after billing cutoff, missing effective dates" },
  { pattern: "Agent Commission Overpayments", annualImpact: "$1.1M", description: "Commission calculation errors on policy upgrades creating systematic overpayment" },
  { pattern: "Policy Lapse Revenue Errors", annualImpact: "$0.8M", description: "Lapsed policy revenue recognition timing errors across state-specific regulations" },
  { pattern: "Catastrophe Reinsurance Reporting", annualImpact: "$0.3M", description: "CAT event grouping logic creating incorrect reinsurance layer reporting" },
];

const implementationPhases = [
  {
    phase: "Phase 1",
    title: "Transactional Data Ingestion & Profiling",
    weeks: "Weeks 1–4",
    description:
      "ACG's data engineering team ingested 18 months of transactional records from the client's policy administration system, billing platform, claims system, and reinsurance treaty management platform. Data quality profiling revealed significant inconsistencies across systems that had been masked by manual reconciliation processes.",
    highlights: [
      "14.2M transaction records ingested across 4 source systems",
      "Data quality score of 67% at project start — significantly below the 85% threshold required for reliable analytics",
      "3 weeks invested in data remediation before analysis could begin",
      "Cross-system reconciliation gaps identified as the primary root cause of most leakage patterns",
    ],
  },
  {
    phase: "Phase 2",
    title: "Anomaly Detection Model Development",
    weeks: "Weeks 5–9",
    description:
      "With clean, reconciled data in place, ACG built an ensemble anomaly detection system that compared actual billing and claims outcomes against expected values derived from policy terms, treaty structures, and regulatory requirements. The model was designed to identify both point anomalies (individual transaction errors) and systematic patterns (structural process failures).",
    highlights: [
      "Ensemble model combining rule-based logic, statistical process control, and ML anomaly detection",
      "7 distinct anomaly categories identified through unsupervised pattern detection",
      "Each anomaly category validated against policy documentation and treaty terms",
      "94% precision rate validated against manual review of 2,000-record sample",
    ],
  },
  {
    phase: "Phase 3",
    title: "Revenue Recovery Workflow",
    weeks: "Weeks 10–12",
    description:
      "For identified historical leakage, ACG designed and implemented a recovery workflow that generated correction transactions, routed them through the appropriate approval and regulatory compliance checks, and tracked recovery status. For ongoing prevention, automated detection triggers were integrated into the billing processing pipeline.",
    highlights: [
      "Recovery workflow generated 4,847 correction transactions in first 90 days",
      "Compliance review integration ensured regulatory alignment in all recovery actions",
      "Real-time leakage detection integrated into billing pipeline — new patterns caught at time of processing",
      "$10.4M recovery documented within first 12 months of system operation",
    ],
  },
  {
    phase: "Phase 4",
    title: "Process Remediation",
    weeks: "Weeks 11–14",
    description:
      "Recovery without process correction produces only temporary improvement. ACG worked with the client's operations and IT teams to remediate the underlying process and system failures that created each leakage pattern — eliminating future recurrence rather than just identifying past losses.",
    highlights: [
      "Policy administration system configuration corrections deployed for 4 of 7 patterns",
      "Billing workflow redesign addressing timing gaps and endorsement processing",
      "Automated reconciliation processes replacing 6 manual monthly reconciliation steps",
      "Ongoing monitoring dashboard tracking leakage KPIs with weekly executive reporting",
    ],
  },
];

const keyLearnings = [
  {
    title: "Data Quality Is a Revenue Issue",
    description:
      "The engagement began as a revenue leakage investigation but immediately surfaced data quality as the foundational problem. Organizations that invest in data quality remediation as a standalone initiative often struggle to justify the ROI. Framing it as a prerequisite to revenue recovery made the investment case immediate and compelling.",
  },
  {
    title: "Systematic Patterns Trump Spot Audits",
    description:
      "The client had conducted periodic manual audits of billing accuracy. Those audits caught individual errors but missed the systematic patterns that drove the majority of leakage — because the patterns were structural, not random. Process-level pattern detection is categorically more effective than transaction-level sampling.",
  },
  {
    title: "Recovery and Prevention Are Different Workstreams",
    description:
      "Recovering historical leakage and preventing future leakage require different technical and organizational approaches. ACG ran them as parallel workstreams rather than sequential ones — recovering historical value while simultaneously building the prevention infrastructure.",
  },
  {
    title: "Regulatory Complexity Requires Embedded Compliance Review",
    description:
      "Insurance revenue recovery intersects with complex regulatory requirements across multiple states. Recovery actions needed compliance review before execution. Building compliance checkpoints into the recovery workflow — rather than treating compliance as an afterthought — was essential to avoiding regulatory risk while recovering value.",
  },
];

export default function InsurerRevenuLeakagePage() {
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
              <Link href="/case-studies" className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors">Case Studies</Link>
              <span className="text-[#475569]">/</span>
              <span className="text-xs text-[#0ea5e9]">Financial Services</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-2.5 py-1 rounded-md bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-[10px] font-semibold uppercase tracking-wide">
                Revenue Intelligence
              </span>
              <span className="text-xs text-[#475569]">Financial Services</span>
              <span className="text-xs text-[#475569]">· 14-week engagement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              National Insurer Recovered
              <br />
              <span className="acg-gradient-text">$10M+ in Revenue Leakage</span>
            </h1>
            <p className="text-[#94a3b8] text-lg leading-relaxed max-w-3xl">
              A national insurance firm with $850M in annual premiums deployed ACG&apos;s data intelligence
              platform to identify and recover systematic revenue leakage — recovering $10.4M in the
              first 12 months while permanently closing the process gaps that created it.
            </p>
          </div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="relative py-12 bg-[#020912] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((r) => (
              <div key={r.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold acg-gradient-text-blue acg-stat-value mb-1">{r.value}</p>
                <p className="text-white text-sm font-medium mb-1">{r.label}</p>
                <p className="text-[#475569] text-xs leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Context */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Client Context</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                A Revenue Problem <span className="acg-gradient-text">Hidden in Plain Sight</span>
              </h2>
              <div className="space-y-4 text-[#94a3b8] text-sm leading-relaxed">
                <p>
                  The client is a national insurance carrier operating across 38 states with $850M in
                  annual premiums written. The company had grown through a series of acquisitions over
                  the preceding decade, inheriting diverse technology platforms, inconsistent billing
                  processes, and fragmented data architectures that were never fully harmonized.
                </p>
                <p>
                  The CFO had flagged a persistent gap between premium income projections and actual
                  collected revenue — consistently running 1.2–1.5% below model. At $850M in premiums,
                  this represented $10–13M annually. Finance and operations attributed the variance to
                  normal policy lapse and cancellation patterns, but the gap appeared structural rather
                  than cyclical.
                </p>
                <p>
                  Internal audit had conducted two reviews of billing accuracy in the preceding 18 months,
                  using sampling-based approaches that cleared individual transactions within tolerance
                  bands. Neither review surfaced the systematic patterns that ACG ultimately identified —
                  because sampling-based audits cannot detect structural process failures that affect
                  all transactions in a category uniformly.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="acg-card rounded-2xl p-6">
                <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-4">Engagement Profile</p>
                <div className="space-y-3">
                  {[
                    { label: "Client Type", value: "National Insurance Carrier" },
                    { label: "Annual Premiums", value: "$850M" },
                    { label: "Operating States", value: "38 states" },
                    { label: "Data Ingested", value: "14.2M transactions" },
                    { label: "Duration", value: "14 weeks" },
                    { label: "Services", value: "Data Intelligence, Predictive Analytics" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-3">
                      <span className="text-[#475569] text-xs">{item.label}</span>
                      <span className="text-[#94a3b8] text-xs text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leakage Patterns */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">The Findings</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              7 Systematic <span className="acg-gradient-text">Leakage Patterns</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              Each pattern was invisible to standard reporting — only surfaced through cross-system
              pattern analysis at scale.
            </p>
          </div>
          <div className="space-y-3">
            {leakagePatterns.map((lp, i) => (
              <div key={lp.pattern} className="acg-card rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-8 h-8 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] font-bold text-xs flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">{lp.pattern}</p>
                      <p className="text-[#64748b] text-xs leading-relaxed mt-0.5">{lp.description}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[#0ea5e9] font-bold text-lg acg-stat-value">{lp.annualImpact}</p>
                    <p className="text-[#475569] text-xs">annual impact</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Implementation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The 14-Week <span className="acg-gradient-text">Recovery Program</span>
            </h2>
          </div>
          <div className="space-y-6">
            {implementationPhases.map((phase) => (
              <div key={phase.phase} className="acg-card rounded-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-60 bg-gradient-to-br from-[#1565c0]/10 to-[#0ea5e9]/5 p-7 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                    <p className="text-[#0ea5e9] text-xs font-semibold uppercase tracking-wider mb-2">{phase.phase}</p>
                    <h3 className="text-white font-bold text-base leading-snug mb-3">{phase.title}</h3>
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium">
                      {phase.weeks}
                    </span>
                  </div>
                  <div className="flex-1 p-7">
                    <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{phase.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] mt-1.5 flex-shrink-0" />
                          <p className="text-[#64748b] text-xs leading-relaxed">{h}</p>
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

      {/* Key Learnings */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Key Learnings</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What This Engagement <span className="acg-gradient-text">Taught Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {keyLearnings.map((learning) => (
              <div key={learning.title} className="acg-card rounded-2xl p-7">
                <h3 className="text-white font-bold text-base mb-3">{learning.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{learning.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="relative py-16 bg-[#050e1d] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">Related</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Predictive Analytics", href: "/services/predictive-analytics" },
                  { label: "Financial Services", href: "/industries/financial-services" },
                  { label: "All Case Studies", href: "/case-studies" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="inline-flex items-center gap-1.5 text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium">
                    {item.label} <ArrowRight className="w-3 h-3" />
                  </Link>
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
