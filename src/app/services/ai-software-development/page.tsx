import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, CheckCircle2, Code2, Layers, Monitor, Cpu, Clock, GitBranch } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Software Development | Augmentation Consulting Group",
  description:
    "Custom ML systems, operational intelligence dashboards, and automation platforms built for enterprise scale. ACG's engineering team delivers production-grade AI software with full deployment support.",
};

const buildTypes = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Custom ML Systems",
    description:
      "End-to-end machine learning systems built to your exact problem specification — from data pipeline design through model training, evaluation, deployment, and ongoing maintenance. We build for production reliability, not proof-of-concept demos.",
    examples: ["Predictive scoring engines", "Natural language processing pipelines", "Computer vision systems", "Anomaly detection platforms"],
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Operational Intelligence Dashboards",
    description:
      "Real-time operational visibility platforms that surface the metrics, signals, and alerts your operations team needs to manage performance proactively. Built for enterprise data volumes with sub-second query response.",
    examples: ["Process performance dashboards", "KPI monitoring platforms", "Predictive alert systems", "Executive reporting layers"],
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Automation Platforms",
    description:
      "Intelligent automation systems that go beyond simple RPA — incorporating decision logic, exception handling, and AI-augmented judgment to handle the full range of your operational workflows.",
    examples: ["Intelligent document processing", "Workflow routing engines", "Approval automation systems", "Data reconciliation platforms"],
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "AI Integration Layers",
    description:
      "When you need AI capabilities embedded into existing platforms — not a new system — we build the integration layer that connects AI models, data pipelines, and decision logic to your current technology stack.",
    examples: ["CRM AI augmentation", "ERP intelligence plugins", "API gateway AI routing", "Third-party model integration"],
  },
];

const techStack = {
  languages: ["Python", "TypeScript", "SQL", "Rust (performance-critical components)"],
  mlFrameworks: ["PyTorch", "scikit-learn", "XGBoost", "LightGBM", "Hugging Face Transformers"],
  infrastructure: ["AWS (SageMaker, Lambda, ECS)", "Azure (ML, Functions, Container Apps)", "GCP (Vertex AI, Cloud Run)", "Kubernetes for orchestration"],
  data: ["Apache Kafka", "Apache Airflow", "dbt", "PostgreSQL", "Snowflake", "Databricks"],
  frontend: ["Next.js", "React", "Recharts / D3.js", "Tailwind CSS"],
  mlOps: ["MLflow", "Weights & Biases", "DVC", "Evidently for drift detection"],
};

const developmentProcess = [
  {
    phase: "01",
    title: "Technical Discovery & Architecture Design",
    duration: "Weeks 1–3",
    description: "We define the technical architecture, data flow design, and integration requirements. Every system is designed for the performance, reliability, and scalability profile your operational context requires.",
    deliverables: ["System architecture document", "Data flow specification", "API contract design", "Infrastructure sizing and cost estimate"],
  },
  {
    phase: "02",
    title: "Core Development & Integration",
    duration: "Weeks 4–10",
    description: "Agile development sprints with weekly demos. We build in tight collaboration with your technical team, incorporating feedback iteratively rather than delivering a completed system blind.",
    deliverables: ["Sprint-by-sprint working software", "Test suite (unit, integration, load)", "API documentation", "Staging environment deployment"],
  },
  {
    phase: "03",
    title: "Production Deployment & Hardening",
    duration: "Weeks 11–13",
    description: "Production deployment with load testing, security review, failover configuration, and monitoring setup. We do not hand over code and disappear — we ensure the system is genuinely production-ready.",
    deliverables: ["Production deployment", "Monitoring and alerting configuration", "Security hardening review", "Runbook and incident response documentation"],
  },
  {
    phase: "04",
    title: "Handoff & Managed Support",
    duration: "Ongoing",
    description: "We provide knowledge transfer to your engineering team with thorough documentation, pair programming sessions, and optional managed support arrangements for ongoing model maintenance, retraining, and platform evolution.",
    deliverables: ["Technical documentation suite", "Knowledge transfer sessions", "Model retraining pipeline", "Optional SLA-based managed support"],
  },
];

const qualityPrinciples = [
  { title: "Production-First Engineering", description: "We build for production from day one — not research-grade prototypes that require complete rewrites before deployment." },
  { title: "Explainable AI Standards", description: "Every model includes interpretability tooling so your team and auditors can understand decision logic." },
  { title: "Observable Systems", description: "All platforms ship with structured logging, metrics instrumentation, and distributed tracing as standard." },
  { title: "Security by Design", description: "Data access controls, encryption at rest and in transit, and security review are built into every engagement." },
];

export default function AISoftwareDevelopmentPage() {
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
              <span className="text-xs text-[#0ea5e9]">AI Software Development</span>
            </div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Service</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Software
              <br />
              <span className="acg-gradient-text">Development</span>
            </h1>
            <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
              Off-the-shelf AI platforms solve generic problems. Your operational challenges are
              specific — and the software that addresses them should be too. ACG's engineering
              team builds custom ML systems, operational intelligence dashboards, and automation
              platforms designed for your exact context and built to production standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-consultation" className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-7 py-3 rounded-xl text-sm">
                <Clock className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Discuss Your Build</span>
              </Link>
              <Link href="#stack" className="inline-flex items-center gap-2 acg-btn-outline text-white font-medium px-7 py-3 rounded-xl text-sm">
                View Tech Stack
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
              { value: "100%", label: "Production deployments — zero proof-of-concept only engagements" },
              { value: "<90", label: "Days from project start to production deployment for standard builds" },
              { value: "99.7%", label: "Average uptime SLA across deployed operational platforms" },
              { value: "4.9/5", label: "Average client satisfaction score for development engagements" },
            ].map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold acg-gradient-text-blue acg-stat-value mb-2">{o.value}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Types */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">What We Build</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Four Categories of <span className="acg-gradient-text">Custom AI Software</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {buildTypes.map((type) => (
              <div key={type.title} className="acg-card acg-card-hover rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1565c0]/20 to-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] mb-5">
                  {type.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{type.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((ex) => (
                    <span key={ex} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#64748b] text-xs">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Technology Stack</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Enterprise-Grade <span className="acg-gradient-text">Technology Choices</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              We select technologies based on fit to your problem, not trend-following.
              Every technology choice is justified and documented.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="acg-card rounded-2xl p-6">
                <p className="text-xs text-[#0ea5e9] uppercase tracking-wider font-semibold mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[#94a3b8] text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Principles */}
      <section className="relative py-20 lg:py-28 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Engineering Standards</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Built to Enterprise{" "}
                <span className="acg-gradient-text">Quality Standards</span>
              </h2>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                The AI software market is full of impressive demos that fail in production. Our
                engineering practice is designed around the operational reality your team will
                actually live with — reliability, maintainability, observability, and security.
              </p>
              <div className="space-y-4">
                {qualityPrinciples.map((p) => (
                  <div key={p.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <Code2 className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold mb-1">{p.title}</p>
                      <p className="text-[#64748b] text-xs leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-center max-w-sm mx-auto lg:mx-0">
                <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-6">Development Process</p>
              </div>
              <div className="space-y-6">
                {developmentProcess.map((phase) => (
                  <div key={phase.phase} className="acg-card rounded-2xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] font-bold text-xs flex-shrink-0">
                        {phase.phase}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm mb-0.5">{phase.title}</p>
                        <p className="text-[#0ea5e9] text-xs mb-2">{phase.duration}</p>
                        <p className="text-[#64748b] text-xs leading-relaxed">{phase.description}</p>
                      </div>
                    </div>
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
