import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Methodology | Augmentation Consulting Group",
  description:
    "The ACG 5-phase operational AI framework: Discovery, Process Mapping, Data Intelligence, AI Integration, and Continuous Optimization. Structured for enterprise rigor.",
};

const phases = [
  {
    number: "01",
    name: "Discovery",
    tagline: "Understand Before You Build",
    duration: "2–3 Weeks",
    color: "#0ea5e9",
    overview:
      "The Discovery phase establishes the operational truth we need before any solution design begins. We resist the industry tendency to jump to technology recommendations before thoroughly understanding the problem environment. Every ACG engagement starts here.",
    activities: [
      "Executive and operations stakeholder interviews across all relevant functions",
      "Current-state technology and data infrastructure audit",
      "Business objective alignment and success criteria definition",
      "Regulatory, compliance, and risk constraint mapping",
      "Organizational change readiness assessment",
      "Initial hypothesis development for key inefficiency sources",
    ],
    deliverables: [
      "Operational context report",
      "Stakeholder alignment document",
      "Success criteria and KPI framework",
      "Technology and data audit summary",
      "Risk and constraint register",
    ],
    teamInvolvement: [
      "ACG engagement lead and senior consultant",
      "Your operations leadership and key process owners",
      "IT/data infrastructure stakeholders",
      "Compliance and risk representatives (where applicable)",
    ],
  },
  {
    number: "02",
    name: "Process Mapping",
    tagline: "See How Work Actually Flows",
    duration: "3–4 Weeks",
    color: "#38bdf8",
    overview:
      "Process Mapping is where we replace assumptions with evidence. Using process mining technology, we extract actual event logs from your operational systems and reconstruct precise, data-driven maps of how work flows through your organization — not how it was designed to flow.",
    activities: [
      "System connection and event log extraction (read-only access)",
      "Process discovery algorithm deployment across key workflows",
      "Process variant identification and frequency analysis",
      "Bottleneck detection and queue time measurement",
      "Conformance checking against designed process models",
      "Stakeholder validation sessions to contextualize findings",
    ],
    deliverables: [
      "Process discovery maps (as-is state)",
      "Process variant catalog with frequency heatmaps",
      "Bottleneck analysis report with cost impact",
      "Conformance checking scorecard",
      "Process gap and opportunity matrix",
    ],
    teamInvolvement: [
      "ACG process mining specialists",
      "Your IT team for system access facilitation",
      "Operations managers for finding validation",
      "Process owners for contextual interpretation",
    ],
  },
  {
    number: "03",
    name: "Data Intelligence",
    tagline: "Transform Raw Data Into Strategic Signal",
    duration: "3–5 Weeks",
    color: "#90caf9",
    overview:
      "Data Intelligence is where we build the analytical foundation that powers everything that follows. We assess your data landscape, engineer the feature set that will drive predictions, and construct the data pipelines that keep your intelligence layer current and accurate.",
    activities: [
      "Data quality assessment across all relevant source systems",
      "Feature engineering and signal extraction for predictive models",
      "Data pipeline architecture design and construction",
      "Historical analysis to establish performance baselines",
      "Model type selection based on problem framing and data characteristics",
      "Explainability framework design for model interpretability",
    ],
    deliverables: [
      "Data quality scorecard and remediation plan",
      "Feature store and engineering pipeline",
      "Data pipeline architecture documentation",
      "Performance baseline report",
      "Model design specification with algorithm rationale",
    ],
    teamInvolvement: [
      "ACG data science and engineering team",
      "Your data engineering or BI team",
      "Business stakeholders for outcome label validation",
      "IT security for data access governance",
    ],
  },
  {
    number: "04",
    name: "AI Integration",
    tagline: "Deploy Intelligence Into Operations",
    duration: "4–8 Weeks",
    color: "#1565c0",
    overview:
      "AI Integration is where the analytical work becomes operational reality. We deploy AI models, automation workflows, and intelligence dashboards directly into your operational environment — with change management, training, and governance built in from the start.",
    activities: [
      "AI model deployment into production environment",
      "Workflow automation rule configuration and testing",
      "Operational dashboard development and deployment",
      "Integration testing with existing systems",
      "Change management program design and execution",
      "Stakeholder training and adoption enablement",
    ],
    deliverables: [
      "Production AI model deployment",
      "Automated workflow configurations",
      "Real-time operational dashboard",
      "Integration test documentation",
      "Training materials and user guides",
      "Go-live runbook and incident response procedures",
    ],
    teamInvolvement: [
      "ACG engineering and change management team",
      "Your IT and engineering team for integration support",
      "Operations managers as change champions",
      "All end users for training sessions",
    ],
  },
  {
    number: "05",
    name: "Continuous Optimization",
    tagline: "Performance That Compounds Over Time",
    duration: "Ongoing",
    color: "#0ea5e9",
    overview:
      "Continuous Optimization is what separates a one-time project from a compounding strategic advantage. We maintain a live feedback loop that surfaces new improvement signals, monitors model performance, and drives progressive optimization of your AI-augmented operations.",
    activities: [
      "Ongoing model performance monitoring and drift detection",
      "Automated retraining triggers when performance thresholds are crossed",
      "Process performance review cadence (30/60/90-day cycles)",
      "New opportunity identification from emerging data patterns",
      "Stakeholder performance reporting and insight briefings",
      "Expansion scoping for new use cases as baseline value is proven",
    ],
    deliverables: [
      "Monthly performance review reports",
      "Model drift alerts and retraining logs",
      "Quarterly optimization recommendation reports",
      "Annual engagement value documentation",
      "Expansion opportunity assessments",
    ],
    teamInvolvement: [
      "ACG account and data science team",
      "Your operations leadership for review cadence",
      "Data team for pipeline maintenance support",
      "Executive sponsor for strategic alignment reviews",
    ],
  },
];

const principles = [
  {
    title: "Evidence Before Solutions",
    description: "We never recommend solutions before we understand the problem. Discovery and mapping phases are non-negotiable — they prevent the expensive mistake of building the right solution for the wrong problem.",
  },
  {
    title: "Quantified Impact",
    description: "Every engagement is anchored to measurable business outcomes. We define success criteria before work begins and track against them throughout. There are no ambiguous deliverables.",
  },
  {
    title: "Phased Value Delivery",
    description: "Our methodology delivers value at each phase, not only at program completion. Clients receive actionable insights from Discovery, not just a six-month wait for a final report.",
  },
  {
    title: "Organizational Sustainability",
    description: "We build for long-term adoption, not short-term demonstration. Change management, training, and knowledge transfer are woven into every phase.",
  },
];

export default function MethodologyPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1565c0]/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">How We Work</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The ACG
            <br />
            <span className="acg-gradient-text">5-Phase Framework</span>
          </h1>
          <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            A structured methodology built for enterprise scale. From initial discovery through
            continuous optimization, every phase is designed to deliver value, reduce risk, and
            build lasting operational capability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-consultation" className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-7 py-3 rounded-xl text-sm">
              <span className="relative z-10">Start a Conversation</span>
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 acg-btn-outline text-white font-medium px-7 py-3 rounded-xl text-sm">
              See It In Action
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Phase Overview Strip */}
      <section className="relative py-12 bg-[#020912] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {phases.map((phase) => (
              <Link
                key={phase.number}
                href={`#phase-${phase.number}`}
                className="flex items-center gap-3 px-5 py-3 rounded-xl acg-card acg-card-hover"
              >
                <span className="text-xs font-bold text-[#0ea5e9]">{phase.number}</span>
                <span className="text-sm font-medium text-white">{phase.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Phase Details */}
      {phases.map((phase, i) => (
        <section
          key={phase.number}
          id={`phase-${phase.number}`}
          className={`relative py-20 lg:py-28 overflow-hidden ${i % 2 === 0 ? "bg-[#050e1d]" : "bg-[#020912]"}`}
        >
          {i % 2 === 0 ? (
            <div className="absolute inset-0 acg-dot-pattern opacity-15" />
          ) : (
            <div className="absolute inset-0 acg-grid-pattern opacity-20" />
          )}

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Phase Header */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-12">
              <div className="flex items-center gap-6 lg:w-72 flex-shrink-0">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-3xl flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${phase.color}20 0%, ${phase.color}08 100%)`,
                    border: `1px solid ${phase.color}30`,
                    color: phase.color,
                  }}
                >
                  {phase.number}
                </div>
                <div>
                  <p className="text-[#64748b] text-xs uppercase tracking-wider font-semibold mb-1">Phase {phase.number}</p>
                  <h2 className="text-white font-bold text-2xl">{phase.name}</h2>
                  <p style={{ color: phase.color }} className="text-sm font-medium mt-1">{phase.tagline}</p>
                </div>
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium mb-4">
                  {phase.duration}
                </span>
                <p className="text-[#94a3b8] text-base leading-relaxed">{phase.overview}</p>
              </div>
            </div>

            {/* Phase Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Activities */}
              <div className="acg-card rounded-2xl p-7">
                <p className="text-xs text-[#0ea5e9] uppercase tracking-wider font-semibold mb-5">Key Activities</p>
                <div className="space-y-3">
                  {phase.activities.map((activity) => (
                    <div key={activity} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: phase.color }} />
                      <p className="text-[#94a3b8] text-xs leading-relaxed">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="acg-card rounded-2xl p-7">
                <p className="text-xs text-[#0ea5e9] uppercase tracking-wider font-semibold mb-5">Deliverables</p>
                <div className="space-y-3">
                  {phase.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-3">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                      <p className="text-[#94a3b8] text-xs leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Involvement */}
              <div className="acg-card rounded-2xl p-7">
                <p className="text-xs text-[#0ea5e9] uppercase tracking-wider font-semibold mb-5">Team Involvement</p>
                <div className="space-y-3">
                  {phase.teamInvolvement.map((member) => (
                    <div key={member} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#475569] mt-1.5 flex-shrink-0" />
                      <p className="text-[#64748b] text-xs leading-relaxed">{member}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Methodology Principles */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Design Principles</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Principles That <span className="acg-gradient-text">Shape Our Approach</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="acg-card acg-card-hover rounded-2xl p-6">
                <h3 className="text-white font-semibold text-sm mb-3">{p.title}</h3>
                <p className="text-[#64748b] text-xs leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
