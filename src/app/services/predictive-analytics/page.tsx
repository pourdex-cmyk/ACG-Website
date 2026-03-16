import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2, TrendingUp, Database, Brain, Activity, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Predictive Analytics Systems | Augmentation Consulting Group",
  description:
    "Move from reactive reporting to forward-looking intelligence. ACG builds enterprise predictive analytics systems that drive proactive decisions across operations, risk, and revenue.",
};

const modelTypes = [
  {
    title: "Demand Forecasting Models",
    description:
      "Anticipate volume, capacity needs, and resource requirements across time horizons — from 72-hour operational windows to 12-month strategic planning cycles.",
    useCases: ["Staffing optimization", "Inventory pre-positioning", "Budget allocation"],
  },
  {
    title: "Risk Prediction Engines",
    description:
      "Identify high-probability risk events before they materialize — churn signals, compliance drift, credit deterioration, and operational failure patterns.",
    useCases: ["Customer churn prevention", "Credit risk scoring", "Operational SLA breach prediction"],
  },
  {
    title: "Revenue Intelligence Models",
    description:
      "Surface revenue opportunities and leakage risks embedded in your transaction data — pricing optimization, upsell timing, and billing anomaly detection.",
    useCases: ["Pricing elasticity modeling", "Revenue leakage detection", "Cross-sell propensity scoring"],
  },
  {
    title: "Operational Performance Predictors",
    description:
      "Predict operational outcomes before they occur — throughput bottlenecks, equipment failure windows, and process exception rates.",
    useCases: ["Predictive maintenance", "Throughput forecasting", "Quality defect prediction"],
  },
];

const engagementPhases = [
  {
    phase: "01",
    title: "Data Landscape Assessment",
    duration: "Weeks 1–2",
    description:
      "We audit your data infrastructure — sources, quality, lineage, and completeness. We identify which data assets are analytically viable today and what gaps need to be addressed before model development begins.",
    deliverables: [
      "Data quality scorecard",
      "Feature availability matrix",
      "Data architecture gap analysis",
      "Source-of-truth alignment document",
    ],
  },
  {
    phase: "02",
    title: "Model Design & Feature Engineering",
    duration: "Weeks 3–5",
    description:
      "Our data science team designs the predictive model architecture, selects algorithms appropriate to your problem type, and engineers the feature set that will drive predictive accuracy. We use explainability-first design principles.",
    deliverables: [
      "Model architecture specification",
      "Feature engineering pipeline",
      "Algorithm selection rationale",
      "Explainability framework",
    ],
  },
  {
    phase: "03",
    title: "Model Development & Validation",
    duration: "Weeks 6–9",
    description:
      "Models are built, trained, and validated against historical holdout data. We apply rigorous backtesting protocols and report not just accuracy metrics but business-context performance — precision, recall, and economic impact of predictions.",
    deliverables: [
      "Trained model suite",
      "Validation and backtesting report",
      "Confusion matrix and business impact analysis",
      "Model card with performance bounds",
    ],
  },
  {
    phase: "04",
    title: "Production Deployment & Monitoring",
    duration: "Weeks 10–14",
    description:
      "Models are deployed into your operational environment with automated scoring pipelines, integration to decision workflows, and ongoing performance monitoring. Drift detection ensures predictions remain accurate as data patterns evolve.",
    deliverables: [
      "Production model deployment",
      "Automated scoring pipeline",
      "Model performance dashboard",
      "Drift detection and retraining triggers",
    ],
  },
];

const dataRequirements = [
  { category: "Historical Volume", detail: "Minimum 12–24 months of operational data for time-series models; 18+ months preferred" },
  { category: "Data Completeness", detail: "Key predictive features should achieve >80% completeness; we guide remediation for gaps" },
  { category: "System Access", detail: "Read-only API access or data exports from core operational systems (ERP, CRM, BI tools)" },
  { category: "Business Outcomes", detail: "Historical labeled outcomes for supervised learning — events, conversions, failures, or escalations" },
];

export default function PredictiveAnalyticsPage() {
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
              <Link href="/services" className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors">Services</Link>
              <span className="text-[#475569]">/</span>
              <span className="text-xs text-[#0ea5e9]">Predictive Analytics</span>
            </div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Service</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Predictive Analytics
              <br />
              <span className="acg-gradient-text">Systems</span>
            </h1>
            <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
              Reactive reporting tells you what happened. Predictive analytics tells you what will
              happen — and gives your team the lead time to act. ACG designs and deploys enterprise
              predictive intelligence systems that transform historical data into forward-looking
              operational advantage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-consultation" className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-7 py-3 rounded-xl text-sm">
                <Clock className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Schedule a Strategy Call</span>
              </Link>
              <Link href="#models" className="inline-flex items-center gap-2 acg-btn-outline text-white font-medium px-7 py-3 rounded-xl text-sm">
                Explore Model Types
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
            {[
              { value: "89%", label: "Average prediction accuracy on production models" },
              { value: "3.2×", label: "Faster decision cycles with predictive intelligence" },
              { value: "45%", label: "Reduction in reactive firefighting for operations teams" },
              { value: "14", label: "Days to first prediction output from data onboarding" },
            ].map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold acg-gradient-text-blue acg-stat-value mb-2">{o.value}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reactive vs Predictive */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">The Shift</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              From Reactive Reporting to{" "}
              <span className="acg-gradient-text">Forward-Looking Intelligence</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="acg-card rounded-2xl p-8 border-red-500/10 border">
              <p className="text-xs text-red-400 uppercase tracking-wider font-semibold mb-4">Reactive State</p>
              <div className="space-y-4">
                {[
                  "Dashboards show what happened — last week, last month, last quarter",
                  "Teams discover problems after they've impacted operations or revenue",
                  "Decisions rely on intuition and experience rather than data signals",
                  "Root cause analysis happens post-incident, not pre-emptively",
                  "Planning cycles are based on historical averages and linear projections",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 mt-1.5 flex-shrink-0" />
                    <p className="text-[#64748b] text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="acg-card rounded-2xl p-8 border-[#0ea5e9]/20 border">
              <p className="text-xs text-[#0ea5e9] uppercase tracking-wider font-semibold mb-4">Predictive State</p>
              <div className="space-y-4">
                {[
                  "Models surface likely outcomes 7–90 days before they materialize",
                  "Teams receive risk alerts with sufficient lead time to intervene",
                  "Every significant decision is augmented with probability-weighted forecasts",
                  "Operational issues are predicted and addressed before they escalate",
                  "Planning is driven by dynamic, adaptive forecasting tuned to your data",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Types */}
      <section id="models" className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Model Types</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Purpose-Built <span className="acg-gradient-text">Predictive Models</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              We do not deploy generic analytics platforms. Every model is purpose-built for your
              specific business problem, data environment, and decision workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {modelTypes.map((model) => (
              <div key={model.title} className="acg-card acg-card-hover rounded-2xl p-7">
                <h3 className="text-white font-bold text-lg mb-3">{model.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{model.description}</p>
                <div className="flex flex-wrap gap-2">
                  {model.useCases.map((uc) => (
                    <span key={uc} className="px-3 py-1 rounded-full bg-[#0ea5e9]/8 border border-[#0ea5e9]/15 text-[#0ea5e9] text-xs font-medium">
                      {uc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Requirements */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Data Requirements</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                What We Need to{" "}
                <span className="acg-gradient-text">Build Your System</span>
              </h2>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                Every predictive analytics engagement begins with an honest assessment of your
                data landscape. We work with what you have and guide you on what gaps to close.
                You do not need a perfect data environment to start — but you do need a clear
                picture of what exists.
              </p>
              <div className="space-y-4">
                {dataRequirements.map((req) => (
                  <div key={req.category} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <Database className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold mb-1">{req.category}</p>
                      <p className="text-[#64748b] text-xs leading-relaxed">{req.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Technology Stack</p>
              <div className="acg-card rounded-2xl p-7 mb-6">
                <p className="text-white font-semibold text-sm mb-4">Core Technologies We Deploy</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Python (scikit-learn, XGBoost, LightGBM)",
                    "Time-series: Prophet, LSTM, ARIMA",
                    "Feature stores: Feast, custom pipelines",
                    "MLflow for experiment tracking",
                    "Apache Airflow for pipeline orchestration",
                    "REST API / webhook delivery layer",
                    "Grafana / custom dashboards for monitoring",
                    "Cloud: AWS SageMaker, Azure ML, GCP Vertex",
                  ].map((tech) => (
                    <div key={tech} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] mt-1.5 flex-shrink-0" />
                      <p className="text-[#64748b] text-xs leading-relaxed">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="acg-card acg-border-glow rounded-2xl p-7">
                <Brain className="w-8 h-8 text-[#0ea5e9] mb-4" />
                <h3 className="text-white font-bold text-lg mb-3">Explainability-First Design</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  Every ACG predictive model is built with interpretability as a core requirement.
                  We use SHAP values, feature importance ranking, and business-language explanation
                  layers so your team understands not just what the model predicts but why — enabling
                  confident action and audit-ready decision trails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Structure */}
      <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Engagement Structure</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              4-Phase Delivery <span className="acg-gradient-text">Framework</span>
            </h2>
          </div>
          <div className="space-y-6">
            {engagementPhases.map((phase) => (
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
