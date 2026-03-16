import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare Network Processing Optimization | ACG Case Study",
  description:
    "How ACG helped a 14-facility healthcare network reduce patient processing time by 37%, increase throughput by 22%, and achieve $4.2M in annual cost savings through process mining and AI-driven triage routing.",
};

const results = [
  { value: "-37%", label: "Patient Processing Time", detail: "Average intake-to-discharge cycle reduced from 4.2 hours to 2.6 hours" },
  { value: "+22%", label: "Patient Throughput", detail: "Daily capacity across 14 facilities increased without adding staff" },
  { value: "$4.2M", label: "Annual Cost Savings", detail: "Combination of reduced rework, overtime elimination, and capacity revenue" },
  { value: "23", label: "Bottlenecks Resolved", detail: "Distinct bottleneck patterns identified and systematically eliminated" },
];

const implementationPhases = [
  {
    phase: "Phase 1",
    title: "Process Mining & Discovery",
    weeks: "Weeks 1–4",
    description:
      "ACG connected to the client's Epic EMR system via read-only API access, extracting 18 months of patient event log data across all 14 facilities. Process mining algorithms reconstructed actual patient flow paths — from registration through triage, clinical assessment, treatment, and discharge.",
    findings: [
      "Average patient journey involved 47 discrete steps across systems and departments",
      "Actual process conformance to designed pathways was only 23%",
      "Top 5 bottleneck points accounted for 68% of total cycle time",
      "Discharge delays alone added an average of 94 minutes per patient",
    ],
  },
  {
    phase: "Phase 2",
    title: "Root Cause Analysis & Prioritization",
    weeks: "Weeks 5–7",
    description:
      "With the full process map established, ACG's team conducted root cause analysis on the 23 identified bottleneck patterns. Each was scored by frequency, cost impact, and resolution complexity. Clinical operations leadership validated findings and provided operational context.",
    findings: [
      "8 bottlenecks were immediately resolvable through process redesign (no technology change)",
      "9 bottlenecks required workflow automation or routing logic changes",
      "6 bottlenecks required new predictive routing capability",
      "Combined impact of top 12 bottlenecks: $3.8M annual cost and 34% of excess cycle time",
    ],
  },
  {
    phase: "Phase 3",
    title: "AI-Driven Triage Routing System",
    weeks: "Weeks 8–13",
    description:
      "ACG developed and deployed a predictive triage routing model that assigns incoming patients to the optimal care pathway based on presenting symptoms, historical case patterns, current facility load, and staff availability. The system integrates directly with Epic and surfaces routing recommendations to triage nursing staff.",
    findings: [
      "Model trained on 380,000 historical patient encounters across all facilities",
      "Routing accuracy of 91% against clinical gold-standard assignments",
      "Average triage decision time reduced from 14 minutes to under 3 minutes",
      "System handles 94% of routing decisions autonomously; exceptions escalate to charge nurse",
    ],
  },
  {
    phase: "Phase 4",
    title: "Discharge Workflow Automation",
    weeks: "Weeks 14–16",
    description:
      "The single largest waste category identified was discharge delay — patients medically cleared for discharge but waiting for administrative processes to complete. ACG implemented automated discharge checklists, parallel documentation workflows, and predictive discharge readiness alerts.",
    findings: [
      "Discharge cycle reduced from average 94 minutes to 31 minutes",
      "Transportation coordination automated for 78% of discharge cases",
      "Insurance authorization pre-triggered during clinical assessment phase",
      "Bed availability notifications reduced room turnover time by 26 minutes",
    ],
  },
];

const keyLearnings = [
  {
    title: "Process Conformance Is the Core Problem",
    description:
      "The client had extensive clinical protocols and workflow guidelines in place. The problem was not a lack of process design — it was that actual execution diverged dramatically from designed pathways. The process mining discovery was the pivotal finding that shifted the engagement from generalist improvement work to targeted, precise intervention.",
  },
  {
    title: "Clinical Validation Before Technology Build",
    description:
      "Every identified bottleneck was validated with clinical operations leadership before any remediation work began. This validation step added two weeks to the engagement but saved significantly more time by ensuring recommendations were clinically sound and operationally feasible before implementation began.",
  },
  {
    title: "Discharge Optimization Delivered Disproportionate Impact",
    description:
      "The team initially expected triage routing to be the primary value driver. In practice, discharge workflow optimization delivered 47% of total cycle time reduction — a finding that only emerged from the data-driven discovery process. Pre-determined solutions would have missed this opportunity.",
  },
  {
    title: "Change Management Is a Clinical Competency",
    description:
      "Clinical staff adoption required engagement approaches tailored to healthcare environments — peer champions among senior nursing staff, phased rollout starting with one facility before network-wide deployment, and tight feedback loops during the first 30 days of live operation.",
  },
];

export default function HealthcareProcessingOptimizationPage() {
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
              <Link href="/case-studies" className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors">Case Studies</Link>
              <span className="text-[#475569]">/</span>
              <span className="text-xs text-[#0ea5e9]">Healthcare</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-2.5 py-1 rounded-md bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-[10px] font-semibold uppercase tracking-wide">
                Process Optimization
              </span>
              <span className="text-xs text-[#475569]">Healthcare</span>
              <span className="text-xs text-[#475569]">· 16-week engagement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Healthcare Network Reduced Patient Processing
              <br />
              <span className="acg-gradient-text">Time by 37%</span>
            </h1>
            <p className="text-[#94a3b8] text-lg leading-relaxed max-w-3xl">
              A regional healthcare network with 14 facilities deployed ACG&apos;s process mining and
              AI-driven triage routing across their Epic EMR system, transforming patient throughput
              and operational efficiency across the entire care network.
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
                A Regional Network Under <span className="acg-gradient-text">Capacity Pressure</span>
              </h2>
              <div className="space-y-4 text-[#94a3b8] text-sm leading-relaxed">
                <p>
                  The client is a regional healthcare network operating 14 acute care facilities across
                  three states, serving approximately 280,000 patients annually. The network had experienced
                  20% volume growth over the preceding three years — driven by population growth in their
                  service area and the acquisition of two smaller hospital systems.
                </p>
                <p>
                  Despite this volume growth, the network had not added proportional operational capacity.
                  Administrative and clinical leadership were under significant pressure to improve patient
                  throughput and reduce wait times without proportional headcount expansion or capital investment
                  in new facilities.
                </p>
                <p>
                  Patient satisfaction scores had declined 12 points year-over-year, with wait times and
                  discharge delays cited as primary negative factors in patient experience surveys. Payors
                  were beginning to flag the network&apos;s readmission rates and length-of-stay metrics in
                  contract renewal discussions.
                </p>
                <p>
                  The network&apos;s COO engaged ACG following an internal assessment that confirmed operational
                  inefficiency as the primary constraint on throughput — but was unable to pinpoint exactly
                  where the inefficiency resided or what was driving it.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="acg-card rounded-2xl p-6">
                <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-4">Engagement Profile</p>
                <div className="space-y-3">
                  {[
                    { label: "Client Type", value: "Regional Healthcare Network" },
                    { label: "Facilities", value: "14 acute care sites" },
                    { label: "Annual Volume", value: "~280,000 patients" },
                    { label: "Systems", value: "Epic EMR, custom scheduling" },
                    { label: "Duration", value: "16 weeks" },
                    { label: "Services", value: "Process Mining, AI Implementation" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-3">
                      <span className="text-[#475569] text-xs">{item.label}</span>
                      <span className="text-[#94a3b8] text-xs text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="acg-card rounded-2xl p-6">
                <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-4">Services Deployed</p>
                <div className="space-y-2">
                  {["Process Mining & Workflow Intelligence", "AI Process Optimization", "AI Implementation Consulting"].map((s) => (
                    <div key={s} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                      <p className="text-[#64748b] text-xs">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Implementation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The 16-Week <span className="acg-gradient-text">Transformation Journey</span>
            </h2>
          </div>
          <div className="space-y-6">
            {implementationPhases.map((phase, i) => (
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
                    <div>
                      <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-3">Key Findings</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {phase.findings.map((f) => (
                          <div key={f} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] mt-1.5 flex-shrink-0" />
                            <p className="text-[#64748b] text-xs leading-relaxed">{f}</p>
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

      {/* Key Learnings */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-15" />
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
      <section className="relative py-16 bg-[#020912] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">Related Services</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Process Mining", href: "/services/process-mining" },
                  { label: "AI Process Optimization", href: "/services/ai-process-optimization" },
                  { label: "Healthcare Industry", href: "/industries/healthcare" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="inline-flex items-center gap-1.5 text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium">
                    {item.label}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#94a3b8] transition-colors">
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
