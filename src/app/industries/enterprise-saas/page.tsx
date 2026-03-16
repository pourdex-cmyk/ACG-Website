import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2, UserCheck, TrendingUp, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise SaaS AI Operations | Augmentation Consulting Group",
  description:
    "AI-powered customer success operations for enterprise SaaS. Churn prediction, health scoring, onboarding optimization, and expansion revenue intelligence.",
};

const focusAreas = [
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Customer Health Scoring",
    description:
      "Static health scores based on login frequency and support tickets miss the true signals of customer value realization. ACG builds dynamic health scoring models that incorporate product usage patterns, business outcome indicators, and engagement quality signals.",
    solutions: ["Multi-signal health models", "Segment-specific scoring", "Health trend analytics", "Risk stratification"],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Churn Prediction",
    description:
      "Identifying at-risk accounts before the renewal conversation is the single highest-leverage capability for enterprise SaaS customer success teams. ACG builds churn prediction models that surface risk signals 60–90 days ahead of renewal, with enough lead time for meaningful intervention.",
    solutions: ["60-90 day churn prediction", "Churn driver attribution", "Renewal risk scoring", "Intervention playbook triggers"],
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Onboarding Optimization",
    description:
      "Time-to-value in enterprise SaaS onboarding is one of the strongest predictors of long-term retention. ACG maps your actual onboarding workflows through process mining to identify where customers lose momentum and what completion patterns correlate with long-term health.",
    solutions: ["Onboarding path mining", "Milestone completion analytics", "At-risk onboarding detection", "Success pattern identification"],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer Success at Scale",
    description:
      "As your customer base grows, the human-to-human CS model reaches capacity limits. ACG builds the AI layer that enables your CS team to manage growing account volumes without proportional headcount growth — automated monitoring, intelligent prioritization, and proactive escalation.",
    solutions: ["Automated account monitoring", "CS rep prioritization engine", "Expansion signal detection", "QBR preparation automation"],
  },
];

export default function EnterpriseSaaSPage() {
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
              <span className="text-xs text-[#0ea5e9]">Enterprise SaaS</span>
            </div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Enterprise SaaS</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered Customer Success
              <br />
              <span className="acg-gradient-text">at Enterprise Scale</span>
            </h1>
            <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
              Enterprise SaaS businesses live and die by net revenue retention. Every percentage
              point of churn reduction has a multiplier effect on enterprise value. ACG builds
              the predictive intelligence infrastructure that enables proactive customer success
              — not reactive firefighting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-consultation" className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-7 py-3 rounded-xl text-sm">
                <span className="relative z-10">Discuss Customer Success Ops</span>
              </Link>
              <Link href="/services/predictive-analytics" className="inline-flex items-center gap-2 acg-btn-outline text-white font-medium px-7 py-3 rounded-xl text-sm">
                Predictive Analytics
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
              { value: "31%", label: "Average churn rate reduction" },
              { value: "42%", label: "Faster customer time-to-value" },
              { value: "2.8×", label: "Net revenue retention improvement" },
              { value: "60 days", label: "Advance warning on at-risk accounts" },
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
              AI for <span className="acg-gradient-text">Customer Retention</span>
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

      {/* The NRR Argument */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">The Business Case</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why NRR Is the <span className="acg-gradient-text">Highest ROI Investment</span>
              </h2>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-6">
                At a 110% NRR, an enterprise SaaS company grows 10% per year from its existing
                customer base alone — before adding a single new logo. At 90% NRR, it must
                replace 10% of ARR annually just to stay flat. The delta between these two
                scenarios compounds dramatically over time.
              </p>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                ACG&apos;s SaaS practice is focused on the operational and analytical capabilities
                that move NRR north. Predictive churn models, onboarding optimization, and
                expansion signal detection are not features — they are enterprise value drivers.
              </p>
              <div className="space-y-3">
                {[
                  "Churn models trained on your own customer data, not generic benchmarks",
                  "Integration with Gainsight, Totango, Salesforce, HubSpot, and custom CS platforms",
                  "Works with your product analytics stack: Amplitude, Mixpanel, Segment, custom",
                  "CS rep workflow integration — insights surface in the tools they already use",
                  "Expansion playbook modeling — identify upsell timing with precision",
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
                <p className="text-white font-bold text-lg mb-3">Typical SaaS Engagement</p>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                  A $50M ARR enterprise SaaS company with 8% annual churn engages ACG to build
                  a churn prediction system. After 12 weeks, the model is in production — surfacing
                  at-risk accounts 60 days before renewal with 87% precision.
                </p>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                  In the first year, proactive intervention recovers accounts representing
                  $2.1M in ARR that would have churned. Net revenue retention improves from 92%
                  to 101%. At a 7× ARR multiple, the enterprise value impact is $14.7M.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.06]">
                  {[
                    { value: "$2.1M", label: "ARR Recovered" },
                    { value: "87%", label: "Model Precision" },
                    { value: "$14.7M", label: "Enterprise Value" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-lg font-bold text-[#0ea5e9] acg-stat-value">{s.value}</p>
                      <p className="text-[#475569] text-xs mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/book-consultation" className="block">
                <div className="acg-card acg-card-hover rounded-xl p-5 text-center cursor-pointer">
                  <p className="text-white font-semibold text-sm mb-1">Build Your Churn Intelligence System</p>
                  <p className="text-[#64748b] text-xs mb-3">Start with a 30-minute strategy call</p>
                  <div className="inline-flex items-center gap-2 text-[#0ea5e9] text-sm font-medium">
                    Schedule Now <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
