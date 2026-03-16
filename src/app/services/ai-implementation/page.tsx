import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2, Shield, Users, Layers, Target, Clock, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Implementation Consulting | Augmentation Consulting Group",
  description:
    "End-to-end AI implementation consulting — readiness assessment, vendor selection, deployment roadmap, and change management. Reduce implementation risk and accelerate time-to-value.",
};

const readinessFramework = [
  {
    dimension: "Data Readiness",
    description: "Assess data quality, accessibility, governance structures, and pipeline maturity",
    score: "High impact on implementation timeline",
  },
  {
    dimension: "Technology Infrastructure",
    description: "Evaluate existing cloud architecture, API capabilities, and integration readiness",
    score: "Determines vendor compatibility",
  },
  {
    dimension: "Organizational Capability",
    description: "Gauge team AI literacy, change appetite, and internal champion identification",
    score: "Critical for adoption success",
  },
  {
    dimension: "Process Maturity",
    description: "Confirm that target processes are stable and documented before AI augmentation",
    score: "Foundation for effective AI integration",
  },
  {
    dimension: "Governance & Compliance",
    description: "Map AI governance requirements, regulatory constraints, and risk tolerance",
    score: "Sets implementation guardrails",
  },
];

const vendorSelectionCriteria = [
  "Functional fit to your specific use case vs. generic platform capabilities",
  "Integration complexity with existing technology stack",
  "Total cost of ownership including implementation, licensing, and ongoing maintenance",
  "Vendor stability, roadmap credibility, and support quality",
  "Data sovereignty and security compliance (SOC 2, HIPAA, GDPR where applicable)",
  "Implementation timeline and professional services quality",
  "Exit risk and data portability should vendor relationships change",
];

const deploymentPhases = [
  {
    phase: "01",
    title: "AI Readiness Assessment",
    duration: "Weeks 1–3",
    description:
      "A comprehensive 5-dimension evaluation of your organization's readiness to successfully adopt and scale AI. We produce a scored readiness report with specific remediation recommendations for gaps that would otherwise compromise implementation success.",
    deliverables: [
      "AI Readiness Score across 5 dimensions",
      "Gap analysis with prioritized remediation plan",
      "Use case viability assessment",
      "Implementation risk register",
    ],
  },
  {
    phase: "02",
    title: "Vendor Evaluation & Selection",
    duration: "Weeks 4–7",
    description:
      "ACG conducts independent vendor assessments across the relevant AI platform market. We issue structured RFIs, facilitate vendor demonstrations, and produce a comparative analysis. Our recommendations are vendor-agnostic — we have no reseller relationships that create bias.",
    deliverables: [
      "Vendor landscape mapping",
      "Scored comparison matrix",
      "Reference check facilitation",
      "Vendor selection recommendation report",
    ],
  },
  {
    phase: "03",
    title: "Deployment Roadmap Design",
    duration: "Weeks 8–10",
    description:
      "We design a phased deployment roadmap that sequences implementation milestones to minimize operational risk, build internal capability progressively, and deliver value at each phase rather than waiting for a full-program go-live.",
    deliverables: [
      "Phased deployment roadmap",
      "Success criteria per phase",
      "Resource and team allocation plan",
      "Integration architecture specification",
    ],
  },
  {
    phase: "04",
    title: "Implementation Oversight & Change Management",
    duration: "Weeks 11–24",
    description:
      "ACG provides implementation oversight — coordinating between your team, the AI vendor, and system integrators. Simultaneously, our change management program ensures adoption, reduces resistance, and builds internal capability so the value does not dissolve post-launch.",
    deliverables: [
      "Implementation governance cadence",
      "Stakeholder communication plan",
      "Training program design and delivery",
      "Adoption metrics and go-live review",
    ],
  },
];

const commonFailures = [
  {
    icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    failure: "Skipping readiness assessment",
    consequence: "Deployment stalls when data quality or infrastructure gaps surface mid-implementation",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    failure: "Vendor-led requirements definition",
    consequence: "Technology chosen before problem is fully understood; solution misfit discovered post-contract",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    failure: "Underestimating change management",
    consequence: "Platform adopted but unused; adoption rates below 30% are common without structured change programs",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    failure: "Single-phase big-bang deployment",
    consequence: "High implementation risk, delayed ROI, and inability to course-correct based on early learnings",
  },
];

export default function AIImplementationPage() {
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
              <Link href="/services" className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors">Services</Link>
              <span className="text-[#475569]">/</span>
              <span className="text-xs text-[#0ea5e9]">AI Implementation Consulting</span>
            </div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Service</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Implementation
              <br />
              <span className="acg-gradient-text">Consulting</span>
            </h1>
            <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
              Most AI implementations fail not because the technology is wrong, but because the
              organizational conditions weren&apos;t right. ACG de-risks your AI investment with
              rigorous readiness assessment, independent vendor selection, phased deployment design,
              and structured change management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-consultation" className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-7 py-3 rounded-xl text-sm">
                <Clock className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Start with a Readiness Assessment</span>
              </Link>
              <Link href="#phases" className="inline-flex items-center gap-2 acg-btn-outline text-white font-medium px-7 py-3 rounded-xl text-sm">
                View Engagement Structure
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 bg-[#020912] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "73%", label: "Of AI implementations fail to reach production scale" },
              { value: "2.4×", label: "Higher success rate with structured implementation oversight" },
              { value: "40%", label: "Typical reduction in implementation timeline vs. unguided deployments" },
              { value: "94%", label: "Client adoption rate 6 months post-launch with our change program" },
            ].map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold acg-gradient-text-blue acg-stat-value mb-2">{o.value}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Implementations Fail */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">The Risk Landscape</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why AI Implementations{" "}
                <span className="acg-gradient-text">Fail at Scale</span>
              </h2>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-6">
                The Gartner AI Hype Cycle is littered with enterprise organizations that invested
                significantly in AI platforms and failed to realize their projected value. The
                failure modes are predictable — and preventable.
              </p>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                ACG's implementation consulting methodology was designed specifically to address
                the systemic patterns that derail enterprise AI programs. We have observed these
                failure modes across dozens of organizations — and built a practice to eliminate them.
              </p>
              <Link
                href="/methodology"
                className="inline-flex items-center gap-2 text-sm text-[#0ea5e9] hover:text-[#38bdf8] font-medium transition-colors"
              >
                See Our Full Methodology
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {commonFailures.map((item) => (
                <div key={item.failure} className="acg-card rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{item.failure}</p>
                      <p className="text-[#64748b] text-xs leading-relaxed">{item.consequence}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Readiness Framework */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Readiness Framework</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              5-Dimension AI <span className="acg-gradient-text">Readiness Assessment</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              Before any vendor is selected or implementation begun, we score your organization
              across five dimensions that predict AI implementation success.
            </p>
          </div>
          <div className="space-y-4">
            {readinessFramework.map((item, i) => (
              <div key={item.dimension} className="acg-card acg-card-hover rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] font-bold text-sm flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-base mb-1">{item.dimension}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#0ea5e9]/8 border border-[#0ea5e9]/15 text-[#0ea5e9] text-xs font-medium whitespace-nowrap">
                      {item.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Selection */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="acg-card acg-border-glow rounded-2xl p-8">
              <Shield className="w-10 h-10 text-[#0ea5e9] mb-6" />
              <h3 className="text-white font-bold text-2xl mb-4">Vendor-Agnostic Advisory</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                ACG does not have reseller relationships, referral fees, or preferred vendor agreements
                with any AI platform provider. Our vendor selection recommendations are based entirely
                on fit to your requirements.
              </p>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                This independence is not a minor point. Much of the poor vendor selection in the
                market flows from advisors with undisclosed financial incentives to recommend specific
                platforms. Our clients make decisions with full information.
              </p>
            </div>
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Vendor Selection</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Selection Criteria We{" "}
                <span className="acg-gradient-text">Evaluate For You</span>
              </h2>
              <div className="space-y-3">
                {vendorSelectionCriteria.map((criterion) => (
                  <div key={criterion} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{criterion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Phases */}
      <section id="phases" className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Engagement Structure</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              4-Phase Implementation <span className="acg-gradient-text">Framework</span>
            </h2>
          </div>
          <div className="space-y-6">
            {deploymentPhases.map((phase) => (
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
