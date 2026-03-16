import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import type { Metadata } from "next";
import { Target, Eye, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Augmentation Consulting Group is an AI-native consulting firm helping organizations transform operations through operational intelligence, process optimization, and AI implementation.",
};

const values = [
  {
    icon: Target,
    title: "Outcome Orientation",
    description:
      "We measure success by the operational improvements our clients achieve, not by the deliverables we produce.",
  },
  {
    icon: Eye,
    title: "Evidence-Based Practice",
    description:
      "Every recommendation is grounded in operational data analysis, not intuition or generic best practices.",
  },
  {
    icon: Users,
    title: "Human-Centered Design",
    description:
      "AI systems that ignore human factors fail. We design with the operational team at the center of every solution.",
  },
  {
    icon: Award,
    title: "Continuous Refinement",
    description:
      "We build self-improving systems and maintain long-term client relationships to ensure sustained performance.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden acg-hero-gradient">
        <div className="absolute inset-0 acg-grid-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1565c0]/20 blur-[120px] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">
            About ACG
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built for the
            <br />
            <span className="acg-gradient-text">Operational AI Era</span>
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl mx-auto">
            Augmentation Consulting Group combines deep process consulting expertise with
            enterprise AI deployment capability — helping organizations move from operational
            complexity to intelligent performance.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-[#020912]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Operational Intelligence
                <br />
                <span className="acg-gradient-text">as Competitive Advantage</span>
              </h2>
              <div className="space-y-5 text-[#94a3b8] text-base leading-relaxed">
                <p>
                  We founded Augmentation Consulting Group on a fundamental conviction: the
                  organizations that will lead their industries in the next decade are the ones
                  that learn to operate with AI — not merely adopt it.
                </p>
                <p>
                  That distinction matters. Most AI initiatives fail not because the technology
                  is inadequate, but because they&apos;re disconnected from operational reality.
                  Models are trained on clean data that doesn&apos;t exist. Automation is built around
                  ideal processes that nobody follows. Dashboards surface metrics that nobody
                  acts on.
                </p>
                <p>
                  Our practice exists to solve that problem. We begin with your operations —
                  how they actually work, not how they&apos;re documented. We use process mining,
                  operational data analysis, and structured requirement gathering to build a
                  precise picture of your operational landscape. Then we design AI systems
                  that fit it.
                </p>
              </div>
            </div>

            {/* Stats Panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100+", label: "Engagements Delivered" },
                { value: "$50M+", label: "Client Value Generated" },
                { value: "37%", label: "Avg. Efficiency Improvement" },
                { value: "60", label: "Days to First Insight" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="acg-card rounded-2xl p-6 flex flex-col gap-2 text-center"
                >
                  <span className="text-3xl font-bold acg-gradient-text-blue">{stat.value}</span>
                  <span className="text-[#64748b] text-sm leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 acg-section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-3">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="acg-card acg-card-hover rounded-2xl p-6 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0ea5e9]" />
                  </div>
                  <h3 className="text-white font-semibold text-base">{value.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-[#020912]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="acg-card rounded-2xl p-8 lg:p-12 text-center acg-border-glow">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-3">
              Our Location
            </p>
            <h3 className="text-2xl font-bold text-white mb-3">Glastonbury, Connecticut</h3>
            <p className="text-[#64748b] text-base mb-2">
              2389 Main St. STE 100 · Glastonbury, CT 06033
            </p>
            <p className="text-[#475569] text-sm">
              Serving mid-market and enterprise clients across the United States
            </p>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
