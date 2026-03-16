"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    industry: "Healthcare",
    title: "Healthcare Network Reduced Patient Processing Time by 37%",
    challenge:
      "A regional healthcare network with 14 facilities was experiencing significant bottlenecks in patient intake and discharge workflows, leading to extended wait times and reduced capacity.",
    solution:
      "We deployed process mining across their EMR system to map actual workflow paths, identified 23 distinct bottleneck patterns, and implemented an AI-driven triage routing system.",
    outcomes: [
      { label: "Processing Time", value: "-37%" },
      { label: "Throughput", value: "+22%" },
      { label: "Cost Savings", value: "$4.2M" },
    ],
    tag: "Process Optimization",
    href: "/case-studies/healthcare-processing-optimization",
  },
  {
    industry: "Financial Services",
    title: "National Insurer Recovered $10M+ in Revenue Leakage",
    challenge:
      "An insurance firm was experiencing systematic revenue leakage due to billing process gaps, claims processing inconsistencies, and undetected policy exception patterns.",
    solution:
      "Our data intelligence layer ingested 18 months of transactional data, identified 7 systematic leakage patterns, and built an automated detection and correction system.",
    outcomes: [
      { label: "Revenue Recovered", value: "$10.4M" },
      { label: "Detection Accuracy", value: "94%" },
      { label: "Process Time", value: "-58%" },
    ],
    tag: "Revenue Intelligence",
    href: "/case-studies/insurer-revenue-leakage",
  },
  {
    industry: "Logistics",
    title: "Distribution Network Achieved 22% Automation ROI",
    challenge:
      "A national logistics provider's manual dispatch and route planning operations were creating scheduling inefficiencies and increasing operational costs across 8 regional hubs.",
    solution:
      "Deployed predictive route optimization, automated dispatch scheduling, and a real-time operational intelligence dashboard integrated with existing TMS infrastructure.",
    outcomes: [
      { label: "Automation ROI", value: "22%" },
      { label: "Dispatch Time", value: "-64%" },
      { label: "On-Time Delivery", value: "+15%" },
    ],
    tag: "Predictive Analytics",
    href: "/case-studies/logistics-automation-roi",
  },
];

export function CaseStudiesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
      <div className="absolute inset-0 acg-grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-3">
              Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Results That
              <br />
              <span className="acg-gradient-text">Speak for Themselves</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0ea5e9] hover:text-[#38bdf8] transition-colors flex-shrink-0"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <Link
                href={cs.href}
                className="acg-card acg-card-hover rounded-2xl p-6 flex flex-col gap-5 h-full group"
              >
                {/* Tag + Industry */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-[10px] font-semibold uppercase tracking-wide">
                    {cs.tag}
                  </span>
                  <span className="text-xs text-[#475569]">{cs.industry}</span>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base leading-snug group-hover:text-[#90caf9] transition-colors">
                  {cs.title}
                </h3>

                {/* Challenge */}
                <p className="text-[#64748b] text-xs leading-relaxed flex-1">{cs.challenge}</p>

                {/* Outcomes */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/[0.06]">
                  {cs.outcomes.map((outcome) => (
                    <div key={outcome.label} className="text-center">
                      <p className="text-[#0ea5e9] font-bold text-lg acg-stat-value">
                        {outcome.value}
                      </p>
                      <p className="text-[#475569] text-[10px] mt-0.5 leading-tight">
                        {outcome.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Read more */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#64748b] group-hover:text-[#0ea5e9] transition-colors">
                  Read Case Study
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
