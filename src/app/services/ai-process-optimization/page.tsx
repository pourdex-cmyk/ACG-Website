import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Search,
  BarChart3,
  Settings,
  Users,
  Clock,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Process Optimization | Augmentation Consulting Group",
  description:
    "Transform inefficient operations with AI-powered process diagnostics and Lean Six Sigma methodology. Achieve 37%+ efficiency gains across enterprise workflows.",
};

const methodologySteps = [
  {
    phase: "01",
    title: "Process Diagnostic Assessment",
    duration: "Weeks 1–2",
    description:
      "We deploy process mining agents across your operational systems — ERP, CRM, ITSM, custom platforms — to capture actual event logs and reconstruct process flows as they truly occur, not as they were designed.",
    deliverables: [
      "Process discovery map (as-is state)",
      "Bottleneck and rework frequency analysis",
      "Process variant heatmap",
      "Cost-per-case baseline",
    ],
  },
  {
    phase: "02",
    title: "AI-Powered Root Cause Analysis",
    duration: "Weeks 3–4",
    description:
      "Our AI layer applies conformance checking against your ideal process model, identifies deviation patterns, and correlates inefficiencies with cost drivers, staffing loads, and upstream data quality issues.",
    deliverables: [
      "Root cause classification report",
      "Deviation pattern library",
      "Cost impact model",
      "Prioritized opportunity matrix",
    ],
  },
  {
    phase: "03",
    title: "Redesign & Simulation",
    duration: "Weeks 5–7",
    description:
      "Using Lean Six Sigma principles combined with AI simulation, we prototype redesigned process flows and model projected outcomes before any system changes are made. Stakeholders validate logic before implementation begins.",
    deliverables: [
      "To-be process architecture",
      "Simulation model with projected KPIs",
      "Change impact assessment",
      "Stakeholder validation session",
    ],
  },
  {
    phase: "04",
    title: "Implementation & Continuous Monitoring",
    duration: "Weeks 8–16",
    description:
      "We deploy AI-assisted automation triggers, workflow routing logic, and real-time monitoring dashboards. A continuous optimization loop flags new deviations and surfaces improvement signals on an ongoing basis.",
    deliverables: [
      "Automated workflow deployment",
      "Real-time process monitoring dashboard",
      "Alerting and escalation rules",
      "30/60/90-day performance review cadence",
    ],
  },
];

const outcomes = [
  { value: "37%", label: "Average efficiency improvement across engagements" },
  { value: "22%", label: "Reduction in process rework and exception handling" },
  { value: "4.8×", label: "Average ROI within 12 months of implementation" },
  { value: "60", label: "Days to first measurable process improvement" },
];

const clientScenarios = [
  {
    icon: <Settings className="w-5 h-5 text-[#0ea5e9]" />,
    title: "Operations Under Pressure",
    description:
      "Your operational team is hitting capacity limits but headcount growth is constrained. You know there are inefficiencies but cannot pinpoint exactly where. ACG maps your actual process flows and identifies which steps are candidates for elimination, automation, or re-sequencing.",
  },
  {
    icon: <DollarSign className="w-5 h-5 text-[#0ea5e9]" />,
    title: "Cost Reduction Without Capability Loss",
    description:
      "Finance leadership is demanding cost reduction targets but you cannot afford to cut staff or degrade service quality. ACG's AI process diagnostics find the cost embedded in process waste — rework loops, idle wait time, and manual re-entry — without compromising what actually matters.",
  },
  {
    icon: <Users className="w-5 h-5 text-[#0ea5e9]" />,
    title: "Post-Merger Integration Complexity",
    description:
      "A recent acquisition introduced competing process standards, redundant workflows, and fragmented tooling. ACG normalizes your operational baseline, maps divergent process variants across both organizations, and builds a unified, optimized operating model.",
  },
];

const approachPillars = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Process Mining Technology",
    description:
      "We extract real event data from your systems — not survey responses or interviews. Our diagnostic layer reconstructs actual process paths with millisecond precision.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Lean Six Sigma Framework",
    description:
      "Every optimization recommendation is grounded in DMAIC discipline. We eliminate variation, reduce defects, and ensure improvements are statistically valid and sustained.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI Automation Layer",
    description:
      "Where humans are executing repetitive, rules-based tasks, we deploy intelligent automation. Where judgment is needed, we build decision-support tools that reduce cognitive load.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Continuous Intelligence Loop",
    description:
      "Process performance doesn't freeze after go-live. Our monitoring layer continuously surfaces new improvement signals, ensuring gains compound over time.",
  },
];

export default function AIProcessOptimizationPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1565c0]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/services"
                className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors"
              >
                Services
              </Link>
              <span className="text-[#475569]">/</span>
              <span className="text-xs text-[#0ea5e9]">AI Process Optimization</span>
            </div>

            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">
              Service
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Process
              <br />
              <span className="acg-gradient-text">Optimization</span>
            </h1>
            <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
              Enterprise organizations lose millions annually to process inefficiency — rework loops,
              manual handoffs, and invisible bottlenecks embedded deep in operations. ACG combines
              AI-powered process diagnostics with Lean Six Sigma methodology to surface and eliminate
              operational waste with precision.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-7 py-3 rounded-xl text-sm"
              >
                <Clock className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Schedule a Strategy Call</span>
              </Link>
              <Link
                href="#methodology"
                className="inline-flex items-center gap-2 acg-btn-outline text-white font-medium px-7 py-3 rounded-xl text-sm"
              >
                See Methodology
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Bar */}
      <section className="relative py-12 bg-[#020912] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold acg-gradient-text-blue acg-stat-value mb-2">
                  {o.value}
                </p>
                <p className="text-[#64748b] text-xs leading-relaxed">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Framing */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">
                The Problem
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Most Process Waste Is{" "}
                <span className="acg-gradient-text">Completely Invisible</span>
              </h2>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-6">
                Companies invest heavily in ERP systems, workflow platforms, and operations
                headcount — yet most cannot answer a fundamental question: how does work actually
                flow through their organization? The gap between designed processes and actual
                execution is where millions in efficiency are silently destroyed.
              </p>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                Traditional process improvement relies on interviews, workshops, and observation —
                all of which capture a distorted view of reality. People describe how they believe
                processes work, not how they actually do. ACG eliminates this gap entirely by
                extracting ground truth directly from your systems.
              </p>
              <div className="space-y-3">
                {[
                  "Process rework adds an average of 23% to per-case operational costs",
                  "Only 18% of enterprise processes execute as designed",
                  "Manual handoffs account for 40–60% of total process cycle time in complex ops",
                  "Idle wait time is the single largest hidden cost driver in knowledge work",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <p className="text-[#64748b] text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {clientScenarios.map((s) => (
                <div key={s.title} className="acg-card rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center flex-shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-2">{s.title}</h3>
                      <p className="text-[#64748b] text-xs leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Four Integrated Disciplines,{" "}
              <span className="acg-gradient-text">One Outcome</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              ACG's process optimization practice sits at the intersection of process mining
              technology, AI automation, Lean Six Sigma rigor, and continuous performance
              intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachPillars.map((pillar) => (
              <div key={pillar.title} className="acg-card acg-card-hover rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1565c0]/20 to-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-3">{pillar.title}</h3>
                <p className="text-[#64748b] text-xs leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">
              Engagement Structure
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              4-Phase Engagement{" "}
              <span className="acg-gradient-text">Methodology</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              Structured for enterprise rigor with startup-caliber speed. Most clients achieve
              measurable results within 60 days of engagement start.
            </p>
          </div>

          <div className="space-y-6">
            {methodologySteps.map((step, i) => (
              <div key={step.phase} className="acg-card rounded-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-64 bg-gradient-to-br from-[#1565c0]/10 to-[#0ea5e9]/5 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                    <div>
                      <p className="text-5xl font-bold text-[#0ea5e9]/20 mb-2">{step.phase}</p>
                      <h3 className="text-white font-bold text-lg leading-snug mb-3">
                        {step.title}
                      </h3>
                      <span className="inline-block px-2.5 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-8">
                    <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <div>
                      <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-3">
                        Key Deliverables
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.deliverables.map((d) => (
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

      {/* Business Outcomes */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">
                Business Outcomes
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Measurable, Sustained{" "}
                <span className="acg-gradient-text">Operational Gains</span>
              </h2>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                Our process optimization engagements produce results that are quantified, documented,
                and sustained. Every engagement begins with a clear baseline and ends with a
                verified improvement report tied to business impact metrics.
              </p>
              <div className="space-y-4">
                {[
                  {
                    metric: "Efficiency",
                    description:
                      "Documented 37% average cycle time reduction across all active engagements",
                  },
                  {
                    metric: "Cost Reduction",
                    description:
                      "Average 22% reduction in cost-per-case within first 90 days post-implementation",
                  },
                  {
                    metric: "Throughput",
                    description:
                      "Typical throughput increase of 15–28% without adding operational headcount",
                  },
                  {
                    metric: "Compliance",
                    description:
                      "Process conformance rates improve from industry average of 62% to 91%+",
                  },
                ].map((item) => (
                  <div
                    key={item.metric}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#0ea5e9] mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="text-white text-sm font-semibold">{item.metric}: </span>
                      <span className="text-[#64748b] text-sm">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="acg-card acg-border-glow rounded-2xl p-8">
              <p className="text-xs text-[#0ea5e9] uppercase tracking-wider font-semibold mb-6">
                Related Case Study
              </p>
              <div className="mb-6">
                <span className="px-2.5 py-1 rounded-md bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-[10px] font-semibold uppercase tracking-wide">
                  Healthcare
                </span>
              </div>
              <h3 className="text-white font-bold text-xl leading-snug mb-4">
                Regional Healthcare Network Reduced Patient Processing Time by 37%
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                A 14-facility healthcare network deployed ACG's process mining diagnostics across
                their EMR system, uncovering 23 bottleneck patterns and enabling an AI-driven triage
                routing system that transformed patient throughput.
              </p>
              <div className="grid grid-cols-3 gap-4 py-5 border-y border-white/[0.06] mb-6">
                {[
                  { value: "-37%", label: "Processing Time" },
                  { value: "+22%", label: "Throughput" },
                  { value: "$4.2M", label: "Cost Savings" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
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
