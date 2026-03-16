"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, MapPin, Database, BrainCircuit, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "Deep-dive assessment of your current operations, technology stack, data infrastructure, and process performance baselines.",
    deliverable: "Operational Assessment Report",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Process Mapping",
    description:
      "Reconstruct your actual end-to-end workflows using process mining and structured requirement gathering with operational stakeholders.",
    deliverable: "Process Intelligence Map",
  },
  {
    number: "03",
    icon: Database,
    title: "Data Intelligence",
    description:
      "Analyze operational data streams to identify patterns, anomalies, and leading indicators that drive predictive decision frameworks.",
    deliverable: "Data Intelligence Brief",
  },
  {
    number: "04",
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Design and deploy AI solutions tailored to your operational context — from predictive models to intelligent workflow automation.",
    deliverable: "Deployed AI Systems",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Continuous Optimization",
    description:
      "Monitor, measure, and evolve your AI systems through iterative refinement cycles — ensuring sustained performance improvement.",
    deliverable: "Optimization Roadmap",
  },
];

export function MethodologyPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 acg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#1565c0]/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            The ACG Operational
            <br />
            <span className="acg-gradient-text">Intelligence Framework</span>
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto text-base">
            A structured five-phase methodology that transforms operational chaos into measurable,
            AI-powered performance improvement.
          </p>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ea5e9]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Node */}
                  <div className="relative mb-5 z-10">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center relative acg-card border border-white/[0.08] group-hover:border-[#0ea5e9]/40 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#0ea5e9]" />
                      <div className="absolute -bottom-1 -right-1 w-6 h-5 rounded bg-[#0a1628] border border-white/[0.08] flex items-center justify-center">
                        <span className="text-[9px] font-bold text-[#0ea5e9]">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-[#64748b] text-xs leading-relaxed mb-3">{step.description}</p>

                  {/* Deliverable pill */}
                  <span className="px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-[10px] font-medium">
                    {step.deliverable}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/methodology"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0ea5e9] hover:text-[#38bdf8] transition-colors"
          >
            View Full Methodology
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
