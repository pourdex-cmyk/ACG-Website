"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  BarChart2,
  Cpu,
  GitMerge,
  Code2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Process Optimization",
    tagline: "Eliminate operational waste at scale",
    description:
      "We analyze your end-to-end processes using AI-driven diagnostics to surface inefficiencies, bottlenecks, and automation opportunities that traditional consulting misses.",
    href: "/services/ai-process-optimization",
    color: "#0ea5e9",
    outcomes: ["Process cycle time reduction", "Cost base optimization", "Waste elimination"],
  },
  {
    icon: BarChart2,
    title: "Predictive Analytics Systems",
    tagline: "See what's coming before it happens",
    description:
      "Design and deploy predictive models that transform operational data into forward-looking intelligence — enabling proactive rather than reactive decision-making.",
    href: "/services/predictive-analytics",
    color: "#38bdf8",
    outcomes: ["Demand forecasting", "Risk prediction", "Resource optimization"],
  },
  {
    icon: Cpu,
    title: "AI Implementation Consulting",
    tagline: "From strategy to deployed AI systems",
    description:
      "Navigate the complexity of enterprise AI adoption with a structured methodology that ensures technical deployment aligns with operational goals and measurable ROI.",
    href: "/services/ai-implementation",
    color: "#0ea5e9",
    outcomes: ["AI readiness assessment", "System selection", "Deployment roadmap"],
  },
  {
    icon: GitMerge,
    title: "Process Mining & Workflow Intelligence",
    tagline: "Discover your actual process reality",
    description:
      "Use event log data and process mining to reconstruct exactly how your organization operates — revealing hidden variation, rework loops, and conformance gaps.",
    href: "/services/process-mining",
    color: "#38bdf8",
    outcomes: ["Workflow discovery", "Conformance analysis", "Rework identification"],
  },
  {
    icon: Code2,
    title: "AI Software Development",
    tagline: "Purpose-built intelligent systems",
    description:
      "Build proprietary AI applications, operational intelligence dashboards, and automation platforms designed specifically for your processes and technology environment.",
    href: "/services/ai-software-development",
    color: "#0ea5e9",
    outcomes: ["Custom ML systems", "Operational dashboards", "Automation platforms"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 lg:py-28 acg-section-dark overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[2px] acg-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Services Built for
            <br />
            <span className="acg-gradient-text">Enterprise Operations</span>
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto text-base leading-relaxed">
            Our consulting practice combines deep operational expertise with advanced AI
            capabilities to deliver measurable transformation.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLast = i === services.length - 1;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`acg-card acg-card-hover rounded-2xl p-6 lg:p-7 flex flex-col group ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Icon + Tagline */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}18 0%, ${service.color}08 100%)`,
                      border: `1px solid ${service.color}20`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[#64748b] text-xs mt-0.5">{service.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Outcomes */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.outcomes.map((o) => (
                    <span
                      key={o}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: `${service.color}10`,
                        color: service.color,
                        border: `1px solid ${service.color}20`,
                      }}
                    >
                      {o}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={service.href}
                  className="flex items-center gap-1.5 text-sm font-medium text-[#0ea5e9] group-hover:text-[#38bdf8] transition-colors mt-auto"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#94a3b8] hover:text-white transition-colors border border-white/[0.08] hover:border-white/20 px-6 py-3 rounded-xl"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
