"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, Layers, Users, LineChart, Zap } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Outcome-Driven Engagements",
    description:
      "Every engagement is structured around measurable business outcomes, not deliverable lists. We define success criteria before we begin.",
  },
  {
    icon: Layers,
    title: "Operational + Technical Depth",
    description:
      "Our consultants bridge the gap between operational reality and technical possibility — fluent in both process design and AI architecture.",
  },
  {
    icon: LineChart,
    title: "Data-First Methodology",
    description:
      "We let operational data guide our recommendations. Process mining and predictive analysis replace assumptions with evidence.",
  },
  {
    icon: Users,
    title: "Human-Centered AI Deployment",
    description:
      "We design AI systems that work with your team's workflows and cognitive patterns — ensuring adoption and sustainable performance.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Standards",
    description:
      "Our implementations adhere to enterprise security, compliance, and governance standards from the first line of code to final deployment.",
  },
  {
    icon: Zap,
    title: "Accelerated Time to Value",
    description:
      "Our structured methodology is designed to surface meaningful insights and deploy initial AI capabilities within 60 days of engagement start.",
  },
];

export function WhyACG() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0ea5e9]/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-3">
              Why ACG
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              A Different Kind
              <br />
              of <span className="acg-gradient-text">AI Firm</span>
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-8">
              Most consulting firms offer strategy decks. Most AI vendors offer tools. We deliver
              complete operational transformation — combining process consulting rigor with
              enterprise AI implementation capability.
            </p>
            <p className="text-[#64748b] text-base leading-relaxed mb-8">
              Augmentation Consulting Group was built specifically for the challenge of integrating
              AI into complex operational environments, where human processes, legacy systems, and
              data quality constraints require more than a software solution.
            </p>

            {/* Positioning statement */}
            <div className="acg-border-glow rounded-xl p-5">
              <p className="text-[#90caf9] text-sm leading-relaxed italic">
                "We combine Lean Six Sigma process discipline with modern AI deployment
                methodology — enabling organizations to achieve operational intelligence that
                sustains long after our engagement concludes."
              </p>
              <p className="text-[#475569] text-xs mt-3">
                — ACG Founding Principles
              </p>
            </div>
          </div>

          {/* Right — Differentiators Grid */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="acg-card rounded-xl p-4 flex flex-col gap-3 hover:border-[#0ea5e9]/20 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#0ea5e9]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-[#64748b] text-xs leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
