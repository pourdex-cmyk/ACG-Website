import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2, Activity, GitBranch, Eye, BarChart2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Process Mining & Workflow Intelligence | Augmentation Consulting Group",
  description:
    "Transform raw event logs into operational intelligence. ACG's process mining practice uncovers hidden process variants, conformance gaps, and bottleneck patterns across enterprise systems.",
};

const capabilities = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Event Log Analysis",
    description:
      "We extract structured event data from your operational systems — ERP, CRM, BPM platforms, ITSM tools — and reconstruct actual process execution paths with timestamped precision. Every case, every variant, every exception is captured.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Conformance Checking",
    description:
      "Your processes were designed to work a specific way. We measure how closely actual execution matches the designed model — quantifying the deviation rate, identifying which process steps are most prone to non-conformance, and calculating the cost of each gap.",
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Variant Analysis",
    description:
      "Most enterprise processes have dozens of execution variants — different paths employees take to complete the same task. We map all variants, score them by frequency and cost, and identify which variants are candidates for standardization or elimination.",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Bottleneck Detection",
    description:
      "Idle time, queue buildup, and handoff delays are invisible in traditional reporting. Process mining makes them visible with millisecond precision — showing exactly where cases wait, for how long, and what is causing the delay.",
  },
];

const systemIntegrations = [
  "SAP (ECC, S/4HANA)", "Salesforce CRM", "ServiceNow ITSM", "Oracle ERP",
  "Microsoft Dynamics 365", "Workday HCM", "Epic EMR", "Custom databases (PostgreSQL, SQL Server, MySQL)",
  "Event streaming (Kafka, Kinesis)", "BPM platforms (Appian, Pega, Camunda)",
];

const deliverables = [
  {
    title: "Process Discovery Map",
    description: "Visual representation of all actual process paths, rendered as a directed graph with frequency and time annotations.",
  },
  {
    title: "Variant Heatmap",
    description: "Color-coded visualization of process variants by volume, cycle time, and cost deviation from the optimal path.",
  },
  {
    title: "Bottleneck Analysis Report",
    description: "Ranked list of queue points and idle windows with median wait times, case volume impact, and cost-per-case attribution.",
  },
  {
    title: "Conformance Dashboard",
    description: "Live conformance rates against your designed process model, updated as new event data flows in.",
  },
  {
    title: "Opportunity Matrix",
    description: "Prioritized list of improvement opportunities ranked by expected efficiency gain and implementation complexity.",
  },
  {
    title: "Continuous Intelligence Feed",
    description: "Ongoing process performance monitoring with anomaly detection alerts delivered to your operations team.",
  },
];

const phases = [
  {
    phase: "01",
    title: "System Discovery & Data Extraction",
    duration: "Weeks 1–2",
    description: "We identify and connect to your operational data sources, extract structured event logs, and validate data quality. We work with read-only access — zero production system risk.",
    deliverables: ["Data source inventory", "Event log extraction", "Data quality baseline", "Coverage assessment"],
  },
  {
    phase: "02",
    title: "Process Discovery & Mapping",
    duration: "Weeks 3–4",
    description: "Algorithms reconstruct actual process flows from event data. We present discovery findings to stakeholders and capture their context for interpretation — bridging the gap between data patterns and operational reality.",
    deliverables: ["Process discovery map", "Variant catalog", "Case frequency analysis", "Stakeholder validation session"],
  },
  {
    phase: "03",
    title: "Deep Analysis & Insight Generation",
    duration: "Weeks 5–6",
    description: "We run conformance checking, bottleneck analysis, and root cause correlation. Findings are translated into business-language insights with quantified cost impact for each identified pattern.",
    deliverables: ["Conformance analysis report", "Bottleneck ranking", "Cost impact model", "Root cause correlation report"],
  },
  {
    phase: "04",
    title: "Continuous Monitoring Deployment",
    duration: "Weeks 7–10",
    description: "We deploy a live process intelligence dashboard with automated alerting for deviation patterns. Your operations team gains ongoing visibility into process health without relying on periodic audits.",
    deliverables: ["Live process dashboard", "Anomaly detection rules", "Alert routing configuration", "Team training and handoff"],
  },
];

export default function ProcessMiningPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0ea5e9]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/services" className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors">Services</Link>
              <span className="text-[#475569]">/</span>
              <span className="text-xs text-[#0ea5e9]">Process Mining</span>
            </div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Service</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Process Mining &<br />
              <span className="acg-gradient-text">Workflow Intelligence</span>
            </h1>
            <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
              Your operational systems contain a complete record of how work actually flows through
              your organization. Process mining transforms that raw event data into precise,
              actionable process intelligence — bottleneck maps, conformance scores, and variant
              analysis that no interview or workshop can produce.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-consultation" className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-7 py-3 rounded-xl text-sm">
                <Clock className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Start a Process Discovery</span>
              </Link>
              <Link href="#capabilities" className="inline-flex items-center gap-2 acg-btn-outline text-white font-medium px-7 py-3 rounded-xl text-sm">
                Explore Capabilities
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
            {[
              { value: "18%", label: "Average rate at which enterprise processes execute as designed" },
              { value: "23+", label: "Bottleneck patterns identified per average enterprise engagement" },
              { value: "100%", label: "Data-driven findings — no interviews, no guesswork" },
              { value: "2 wks", label: "From system connection to first process map delivered" },
            ].map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold acg-gradient-text-blue acg-stat-value mb-2">{o.value}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Core Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Four Lenses on Your <span className="acg-gradient-text">Process Reality</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              Process mining is not a single analysis — it is a multi-dimensional intelligence
              system that gives your operations team complete visibility into how work flows.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="acg-card acg-card-hover rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1565c0]/20 to-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] mb-5">
                  {cap.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{cap.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Integrations */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">System Coverage</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Works With Your{" "}
                <span className="acg-gradient-text">Existing Systems</span>
              </h2>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                ACG's process mining practice integrates with the enterprise systems your
                operations already run on. No new data infrastructure is required to get started.
                We extract event data using read-only connections, ensuring zero risk to
                your production environment.
              </p>
              <div className="flex flex-wrap gap-2">
                {systemIntegrations.map((sys) => (
                  <span key={sys} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#94a3b8] text-xs font-medium">
                    {sys}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Deliverables</p>
              <div className="space-y-3">
                {deliverables.map((d) => (
                  <div key={d.title} className="acg-card rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold text-sm mb-1">{d.title}</p>
                        <p className="text-[#64748b] text-xs leading-relaxed">{d.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Phases */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Engagement Structure</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              From Data to Insight in <span className="acg-gradient-text">10 Weeks</span>
            </h2>
          </div>
          <div className="space-y-6">
            {phases.map((phase) => (
              <div key={phase.phase} className="acg-card rounded-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-64 bg-gradient-to-br from-[#1565c0]/10 to-[#0ea5e9]/5 p-8 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                    <p className="text-5xl font-bold text-[#0ea5e9]/20 mb-2">{phase.phase}</p>
                    <h3 className="text-white font-bold text-lg leading-snug mb-3">{phase.title}</h3>
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium">
                      {phase.duration}
                    </span>
                  </div>
                  <div className="flex-1 p-8">
                    <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{phase.description}</p>
                    <div>
                      <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-3">Key Deliverables</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {phase.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                            <p className="text-[#64748b] text-xs leading-relaxed">{d}</p>
                          </div>
                        ))}
                      </div>
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
