import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2, Zap, GitBranch, Server, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Industry AI Operations | Augmentation Consulting Group",
  description:
    "AI-powered operational intelligence for high-growth technology companies. Engineering velocity, platform scaling, DevOps intelligence, and product operations optimization.",
};

const focusAreas = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Engineering Velocity",
    description:
      "Scaling engineering organizations face a paradox: adding engineers often slows overall velocity as coordination overhead grows. ACG maps your engineering workflows — code review cycles, deployment pipelines, incident response patterns — and identifies the bottlenecks suppressing throughput.",
    solutions: ["Deployment pipeline optimization", "Code review cycle analysis", "Sprint velocity intelligence", "Engineering bottleneck mapping"],
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Product Operations",
    description:
      "Release management complexity, feature flag sprawl, and cross-functional coordination overhead silently drain product and engineering productivity. We bring process mining to your product operations to surface the specific handoffs and approval chains adding delay.",
    solutions: ["Release process optimization", "Feature deployment analytics", "Cross-team coordination mapping", "Product ops workflow automation"],
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Platform Scaling & Reliability",
    description:
      "Operational incident patterns, infrastructure capacity management, and SLA monitoring all benefit from predictive intelligence. ACG builds the AI-powered observability and prediction layer that enables proactive infrastructure management.",
    solutions: ["Incident pattern prediction", "Capacity demand forecasting", "SLA breach prediction", "On-call optimization"],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "AI for DevOps",
    description:
      "Technology companies are uniquely positioned to benefit from AI-augmented DevOps — but most are not yet realizing the full potential. ACG builds the AI layer that transforms your deployment and operations toolchain from reactive to predictive.",
    solutions: ["Predictive deployment risk scoring", "Automated rollback intelligence", "AI-powered incident triage", "Developer productivity analytics"],
  },
];

export default function TechnologyPage() {
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
              <span className="text-xs text-[#0ea5e9]">Technology</span>
            </div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Technology</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Operational AI for
              <br />
              <span className="acg-gradient-text">Technology Companies</span>
            </h1>
            <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
              High-growth technology companies build AI products for others — but often operate
              their own internal functions on reactive, manual processes. ACG brings the same
              operational intelligence rigor to your engineering, product, and platform operations
              that you build into your products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-consultation" className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-7 py-3 rounded-xl text-sm">
                <span className="relative z-10">Start a Conversation</span>
              </Link>
              <Link href="/methodology" className="inline-flex items-center gap-2 acg-btn-outline text-white font-medium px-7 py-3 rounded-xl text-sm">
                Our Methodology
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
              { value: "41%", label: "Average deployment cycle acceleration" },
              { value: "28%", label: "Reduction in operational incidents" },
              { value: "3.1×", label: "Engineering throughput improvement" },
              { value: "52%", label: "Reduction in mean time to recovery" },
            ].map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold acg-gradient-text-blue acg-stat-value mb-2">{o.value}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{o.label}</p>
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
              Where AI Creates <span className="acg-gradient-text">Operational Leverage</span>
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

      {/* Why Tech Companies Work With ACG */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Why Tech Companies Choose ACG</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                We Speak Your <span className="acg-gradient-text">Technical Language</span>
              </h2>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-6">
                Technology companies are understandably skeptical of consultants who lack genuine
                technical depth. ACG's team combines management consulting rigor with hands-on
                engineering capability. We build the systems we recommend — we do not outsource
                implementation to integration partners.
              </p>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                We also understand the operational reality of scaling engineering organizations —
                the tradeoffs between velocity and reliability, the technical debt accumulation
                patterns, and the organizational dynamics of fast-growing teams.
              </p>
              <div className="space-y-3">
                {[
                  "API-first integration approach — fits into your existing toolchain",
                  "Works with GitHub, GitLab, Jira, Linear, PagerDuty, Datadog, and others",
                  "Engineering team collaboration — not black-box consulting",
                  "Source code review and architectural advisory included where relevant",
                  "Ongoing managed support options for deployed AI systems",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="acg-card acg-border-glow rounded-2xl p-7">
                <p className="text-white font-bold text-lg mb-3">Typical Technology Engagement</p>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
                  A Series B SaaS company growing from 80 to 200 engineers finds that deployment
                  frequency has actually declined despite headcount doubling. ACG's process mining
                  reveals that a 6-step approval chain — designed for a 20-person team — is now
                  creating 11-day average deployment delays.
                </p>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                  We redesign the approval workflow, build an AI-powered deployment risk scoring
                  system that routes low-risk changes automatically, and implement predictive
                  rollback triggers. Within 90 days, deployment frequency triples.
                </p>
                <Link href="/book-consultation" className="inline-flex items-center gap-2 text-sm text-[#0ea5e9] hover:text-[#38bdf8] font-medium transition-colors">
                  Discuss Your Engineering Ops
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "90 days", label: "To first measurable velocity improvement" },
                  { value: "Zero", label: "Production system risk from our integrations" },
                ].map((s) => (
                  <div key={s.label} className="acg-card rounded-xl p-5 text-center">
                    <p className="text-xl font-bold text-[#0ea5e9] acg-stat-value mb-1">{s.value}</p>
                    <p className="text-[#64748b] text-xs">{s.label}</p>
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
