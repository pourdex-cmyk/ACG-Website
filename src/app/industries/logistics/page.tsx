import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2, Truck, Map, Wrench, Radio } from "lucide-react";

export const metadata: Metadata = {
  title: "Logistics AI Operations | Augmentation Consulting Group",
  description:
    "AI-powered logistics operations consulting. Route optimization, predictive maintenance, supply chain visibility, and dispatch automation for distribution networks.",
};

const focusAreas = [
  {
    icon: <Map className="w-6 h-6" />,
    title: "Route Optimization",
    description:
      "Manual route planning relies on dispatcher experience and static rule sets that cannot adapt to dynamic conditions — traffic, weather, delivery time windows, and load constraints. ACG's predictive route optimization deploys ML models that continuously recalibrate routes based on real-time and forecast data.",
    solutions: ["Dynamic route recalculation", "Multi-constraint optimization", "Time window compliance", "Load consolidation intelligence"],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Predictive Maintenance",
    description:
      "Fleet and equipment downtime is among the most expensive operational events in logistics. Predictive maintenance models analyze sensor data, usage patterns, and maintenance history to identify failure probability windows — enabling scheduled maintenance before breakdowns occur.",
    solutions: ["Fleet failure prediction", "Maintenance window optimization", "Parts inventory pre-positioning", "Cost-per-mile reduction"],
  },
  {
    icon: <Radio className="w-6 h-6" />,
    title: "Supply Chain Visibility",
    description:
      "Fragmented visibility across carriers, 3PLs, and warehousing partners creates the exception management overhead that consumes operations team capacity. ACG builds the unified supply chain intelligence layer that surfaces exceptions before they impact customers.",
    solutions: ["End-to-end shipment visibility", "Exception detection and alerting", "Carrier performance scoring", "ETA prediction accuracy"],
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Dispatch Automation",
    description:
      "Manual dispatch decisions — driver assignment, load matching, hub routing — create scheduling bottlenecks during peak periods and introduce human variability into what should be systematic processes. AI-powered dispatch automation reduces decision latency and improves assignment quality.",
    solutions: ["Automated driver-load matching", "Hub routing optimization", "Peak period capacity management", "Real-time schedule adjustment"],
  },
];

const caseStudyStats = [
  { value: "22%", label: "Automation ROI" },
  { value: "-64%", label: "Dispatch Time" },
  { value: "+15%", label: "On-Time Delivery" },
  { value: "8", label: "Regional Hubs Optimized" },
];

export default function LogisticsPage() {
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
              <Link href="/industries" className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors">Industries</Link>
              <span className="text-[#475569]">/</span>
              <span className="text-xs text-[#0ea5e9]">Logistics</span>
            </div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Logistics</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Operations for
              <br />
              <span className="acg-gradient-text">Logistics Networks</span>
            </h1>
            <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
              Logistics operations run on margins where every percentage point matters. Manual
              dispatch decisions, reactive maintenance, and fragmented supply chain visibility are
              no longer sustainable competitive strategies. ACG deploys predictive intelligence
              across logistics operations to drive efficiency gains that compound over time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-consultation" className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-7 py-3 rounded-xl text-sm">
                <span className="relative z-10">Discuss Your Operations</span>
              </Link>
              <Link href="/case-studies/logistics-automation-roi" className="inline-flex items-center gap-2 acg-btn-outline text-white font-medium px-7 py-3 rounded-xl text-sm">
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
              Where AI Drives <span className="acg-gradient-text">Logistics Performance</span>
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

      {/* Integration & Case Study */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">System Integration</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Works With Your <span className="acg-gradient-text">Existing TMS & WMS</span>
              </h2>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                ACG's logistics AI systems are designed to augment your existing technology stack —
                not replace it. We build integration layers that connect our predictive intelligence
                to the TMS, WMS, and ELD systems your operations already depend on.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "TMS integration: MercuryGate, McLeod, Oracle TMS, SAP TM",
                  "WMS integration: Manhattan, Blue Yonder, HighJump",
                  "ELD and telematics: Samsara, Geotab, KeepTruckin",
                  "Carrier visibility: project44, FourKites, Descartes",
                  "ERP: SAP, Oracle, NetSuite",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="acg-card acg-border-glow rounded-2xl p-8">
              <p className="text-xs text-[#0ea5e9] uppercase tracking-wider font-semibold mb-4">Featured Case Study</p>
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-[10px] font-semibold uppercase tracking-wide mb-4">
                Predictive Analytics
              </span>
              <h3 className="text-white font-bold text-xl leading-snug mb-4">
                National Distribution Network Achieved 22% Automation ROI
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                A national logistics provider with 8 regional hubs was losing operational efficiency
                through manual dispatch and route planning. ACG deployed predictive route optimization,
                automated dispatch scheduling, and a real-time operational intelligence dashboard
                integrated with the client&apos;s existing TMS infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-4 py-5 border-y border-white/[0.06] mb-6">
                {caseStudyStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold text-[#0ea5e9] acg-stat-value">{s.value}</p>
                    <p className="text-[#475569] text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/case-studies/logistics-automation-roi" className="inline-flex items-center gap-2 text-sm text-[#0ea5e9] hover:text-[#38bdf8] font-medium transition-colors">
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
