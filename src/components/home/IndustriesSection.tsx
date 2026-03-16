"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Cpu, Landmark, Truck, Building2, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Reduce patient processing times, optimize care delivery workflows, and implement predictive resource allocation across health networks.",
    stat: "37% reduction in patient processing time",
    href: "/industries/healthcare",
    color: "#0ea5e9",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "Accelerate product delivery pipelines, optimize engineering workflows, and implement AI systems that scale with your platform growth.",
    stat: "22% improvement in sprint delivery",
    href: "/industries/technology",
    color: "#38bdf8",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description:
      "Streamline compliance operations, automate risk monitoring, and apply predictive analytics to credit, fraud, and operational exposure.",
    stat: "$10M+ in leakage identified",
    href: "/industries/financial-services",
    color: "#0ea5e9",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Optimize supply chain visibility, reduce dwell time, and implement predictive maintenance and route intelligence systems.",
    stat: "18% reduction in operational costs",
    href: "/industries/logistics",
    color: "#38bdf8",
  },
  {
    icon: Building2,
    title: "Enterprise SaaS",
    description:
      "Improve onboarding workflows, reduce churn through predictive health scoring, and automate customer success operations at scale.",
    stat: "31% improvement in onboarding time",
    href: "/industries/enterprise-saas",
    color: "#0ea5e9",
  },
];

export function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 lg:py-28 acg-section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-3">
              Industries
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Built for Your
              <br />
              <span className="acg-gradient-text">Industry Context</span>
            </h2>
          </div>
          <p className="text-[#64748b] text-base max-w-sm leading-relaxed lg:text-right">
            We bring domain expertise across critical industries where operational intelligence
            drives competitive advantage.
          </p>
        </div>

        {/* Industry Cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={industry.href}
                  className="acg-card acg-card-hover rounded-2xl p-5 flex flex-col gap-4 h-full group"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${industry.color}18 0%, ${industry.color}08 100%)`,
                      border: `1px solid ${industry.color}22`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: industry.color }} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-base mb-2">{industry.title}</h3>
                    <p className="text-[#64748b] text-xs leading-relaxed">{industry.description}</p>
                  </div>

                  {/* Stat */}
                  <div className="pt-3 border-t border-white/[0.05]">
                    <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: industry.color }}>
                      {industry.stat}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white transition-colors border border-white/[0.08] hover:border-white/20 px-6 py-3 rounded-xl font-medium"
          >
            Explore All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
