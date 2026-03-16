import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Logistics Automation ROI Case Study | ACG",
  description:
    "How ACG helped a national logistics provider achieve 22% automation ROI, reduce dispatch time by 64%, and improve on-time delivery by 15% across 8 regional hubs.",
};

const results = [
  { value: "22%", label: "Automation ROI", detail: "Documented return on automation investment within 12 months" },
  { value: "-64%", label: "Dispatch Time", detail: "Average dispatch decision time reduced from 28 to 10 minutes" },
  { value: "+15%", label: "On-Time Delivery", detail: "Network-wide on-time delivery rate improvement" },
  { value: "8", label: "Hubs Optimized", detail: "All regional hubs operating on the new AI-powered dispatch system" },
];

const systemsDeployed = [
  {
    name: "Predictive Route Optimization Engine",
    description: "ML model that generates optimal routes accounting for delivery time windows, load weight, driver hours, real-time traffic, and weather forecasts. Routes are recalculated dynamically throughout the day as conditions change.",
    metrics: ["Route efficiency improved 18% vs. manual planning", "Fuel consumption reduced 11% per delivery mile", "Driver overtime reduced 34%"],
  },
  {
    name: "Automated Dispatch Scheduling",
    description: "AI-powered driver-load matching system that automatically assigns available drivers to loads based on location, license class, HOS status, and customer priority. Routes 78% of dispatch decisions without human intervention.",
    metrics: ["78% of dispatches fully automated", "Average dispatch time: 10 minutes (was 28 minutes)", "Dispatcher capacity freed for exception management"],
  },
  {
    name: "Real-Time Operational Intelligence Dashboard",
    description: "Live command center dashboard showing all active loads, driver locations, ETA predictions, and exception alerts. Integrates with the client's existing TMS and provides supervisors with a single operational view across all 8 hubs.",
    metrics: ["100% load visibility across all hubs", "ETA prediction accuracy: 91%", "Exception alert latency: under 4 minutes"],
  },
];

const implementationPhases = [
  {
    phase: "Phase 1",
    title: "Operational Baseline & System Integration",
    weeks: "Weeks 1–3",
    description:
      "ACG began with a process mining analysis of the client's existing dispatch and routing operations — extracting event logs from the TMS, driver ELD systems, and customer delivery confirmation data. The baseline revealed significant variance in dispatch decision quality across hubs and dispatchers.",
    highlights: [
      "Dispatch time variance: 11 minutes (best dispatcher) to 47 minutes (median) per load",
      "Route quality variance: top routes ran 12% more efficiently than median routes",
      "34% of on-time delivery failures traced to dispatch assignment delays",
      "Hub performance ranged from 81% to 94% on-time — caused by process, not geography",
    ],
  },
  {
    phase: "Phase 2",
    title: "Route Optimization Model Development",
    weeks: "Weeks 4–8",
    description:
      "With historical routing and delivery data extracted, ACG's data science team built the predictive route optimization model. The model was trained on 18 months of delivery records, calibrated against actual vs. projected delivery times, and validated through simulation before any live deployment.",
    highlights: [
      "Training data: 2.3M historical deliveries across all hubs",
      "Model incorporates 47 variables including traffic, weather, load characteristics",
      "Backtesting showed 18% average route efficiency improvement vs. historical routes",
      "Simulation validated against 30-day holdout period before production deployment",
    ],
  },
  {
    phase: "Phase 3",
    title: "Dispatch Automation Deployment",
    weeks: "Weeks 9–11",
    description:
      "The automated dispatch system was deployed with a phased rollout — starting with one hub at full automation while other hubs received the route optimization tool only. This approach validated automation performance in a controlled environment before network-wide deployment.",
    highlights: [
      "Pilot hub (Nashville): 22% dispatch time reduction in first week",
      "Automated dispatch accuracy: 94% alignment with expert dispatcher decisions",
      "Exception handling workflow designed for the 22% of loads requiring human judgment",
      "Network-wide rollout completed over 3 weeks following pilot validation",
    ],
  },
  {
    phase: "Phase 4",
    title: "Dashboard & Monitoring Integration",
    weeks: "Weeks 12–14",
    description:
      "The operational intelligence dashboard was built on top of the live data feeds from the dispatch and routing systems, integrating with the client's existing TMS via API. Hub supervisors received training on exception management workflows using the new system.",
    highlights: [
      "Dashboard ingests real-time data from 847 active drivers across all hubs",
      "ETA prediction engine updates every 12 minutes based on traffic and load status",
      "Automated customer notification triggers at ETA deviation thresholds",
      "Week 1 post-launch: supervisors reported 60% reduction in status inquiry calls",
    ],
  },
];

const keyLearnings = [
  {
    title: "Dispatcher Variance Was the Core Problem",
    description:
      "The client assumed on-time delivery variance was primarily geographic or carrier-driven. Process mining revealed that the largest variance driver was dispatcher decision quality — not external factors. The best dispatchers in the network were achieving 94% on-time; the median was 84%. Automation to the level of best-in-class performance was achievable without new infrastructure.",
  },
  {
    title: "Pilot-Before-Scale Is Non-Negotiable in Logistics",
    description:
      "Deploying a new dispatch model across all 8 hubs simultaneously would have created unacceptable operational risk. The single-hub pilot approach added two weeks to the timeline but provided critical calibration data and built dispatcher confidence in the system before network-wide adoption.",
  },
  {
    title: "The Exception 22% Matters More Than the Automated 78%",
    description:
      "Initial scope conversations focused on maximizing automation rate. In practice, the most important design challenge was the exception handling workflow — the 22% of dispatches that the system correctly deferred to human judgment. The quality of that handoff determined whether dispatchers trusted the system.",
  },
  {
    title: "TMS Integration Is Both the Key and the Constraint",
    description:
      "The client's legacy TMS had limited API capabilities, requiring a custom integration layer that added two weeks to the timeline. This is a common constraint in logistics technology stacks — organizations considering AI deployments should assess TMS API readiness as an early-stage dependency.",
  },
];

export default function LogisticsAutomationROIPage() {
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
              <span className="text-xs text-[#0ea5e9]">Logistics</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-2.5 py-1 rounded-md bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-[10px] font-semibold uppercase tracking-wide">
                Predictive Analytics
              </span>
              <span className="text-xs text-[#475569]">Logistics</span>
              <span className="text-xs text-[#475569]">· 14-week engagement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Distribution Network Achieved
              <br />
              <span className="acg-gradient-text">22% Automation ROI</span>
            </h1>
            <p className="text-[#94a3b8] text-lg leading-relaxed max-w-3xl">
              A national logistics provider with 8 regional hubs deployed ACG&apos;s predictive route
              optimization and automated dispatch system, transforming manual operational decision-making
              into AI-powered precision across the entire distribution network.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
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
                Manual Dispatch in a <span className="acg-gradient-text">Data-Rich Environment</span>
              </h2>
              <div className="space-y-4 text-[#94a3b8] text-sm leading-relaxed">
                <p>
                  The client is a national LTL and truckload logistics provider operating 8 regional
                  distribution hubs with a fleet of 847 drivers and approximately 4,200 active loads
                  per week. The company had invested significantly in TMS technology and ELD compliance
                  infrastructure over the preceding five years.
                </p>
                <p>
                  Despite having real-time GPS tracking, load management data, and driver status information,
                  virtually all dispatch and routing decisions were made manually — dispatchers working from
                  experience, intuition, and paper-based load boards. The data existed; the intelligence
                  layer to extract value from it did not.
                </p>
                <p>
                  The VP of Operations engaged ACG after observing that on-time delivery performance varied
                  significantly across hubs without a clear operational explanation. Two hubs consistently
                  delivered at 91–94% on-time. Four others ran at 82–87%. The underperformers had similar
                  fleet quality, customer mix, and geography — but meaningfully worse outcomes.
                </p>
                <p>
                  This performance variance — concentrated in process quality rather than external factors —
                  was the signal that pointed toward a process and decision-intelligence opportunity rather
                  than a capital or capacity problem.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="acg-card rounded-2xl p-6">
                <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-4">Engagement Profile</p>
                <div className="space-y-3">
                  {[
                    { label: "Client Type", value: "National LTL/TL Provider" },
                    { label: "Regional Hubs", value: "8 facilities" },
                    { label: "Active Drivers", value: "847" },
                    { label: "Weekly Loads", value: "~4,200" },
                    { label: "Duration", value: "14 weeks" },
                    { label: "Services", value: "Predictive Analytics, AI Software" },
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

      {/* Systems Deployed */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Systems Built & Deployed</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Three Integrated <span className="acg-gradient-text">Intelligence Systems</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {systemsDeployed.map((sys) => (
              <div key={sys.name} className="acg-card acg-card-hover rounded-2xl p-7">
                <h3 className="text-white font-bold text-base mb-3">{sys.name}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{sys.description}</p>
                <div className="space-y-2">
                  {sys.metrics.map((m) => (
                    <div key={m} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                      <p className="text-[#64748b] text-xs">{m}</p>
                    </div>
                  ))}
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
              The 14-Week <span className="acg-gradient-text">Deployment Program</span>
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
          <div className="flex flex-wrap items-center gap-6 justify-between">
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">Related</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Predictive Analytics", href: "/services/predictive-analytics" },
                  { label: "Logistics Industry", href: "/industries/logistics" },
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
