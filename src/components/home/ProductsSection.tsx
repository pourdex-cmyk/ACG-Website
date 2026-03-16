"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BarChart2, TrendingUp, AlertTriangle, ShoppingCart, Target, ExternalLink, Shield, FileText, Brain, Clock, Users } from "lucide-react";

const pourdexFeatures = [
  {
    icon: BarChart2,
    title: "POS-Driven Intelligence",
    description: "Automatically ingests every transaction, void, and modifier from Toast, Square, or Clover — no manual entry, no weighing.",
  },
  {
    icon: AlertTriangle,
    title: "Variance Detection",
    description: "Identifies over-pouring, comps, and shrinkage in real time. Clients average $1,200/month in recovered variance.",
  },
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    description: "Projects inventory needs by day and hour with 85%+ accuracy — built on ACG predictive analytics methodology.",
  },
  {
    icon: ShoppingCart,
    title: "Smart Ordering",
    description: "Generates automated reorder recommendations that reduce stockouts by 30% and cut over-ordering waste.",
  },
  {
    icon: Target,
    title: "Margin Intelligence",
    description: "Ranks every menu item by true profitability and targets 3–5% margin lift through optimized sales mix.",
  },
];

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 lg:py-28 bg-[#020912] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 acg-grid-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0ea5e9]/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-3">
            Our Products
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Intelligence Software
            <br />
            <span className="acg-gradient-text">Built by ACG</span>
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto text-base leading-relaxed">
            Beyond consulting engagements, Augmentation Consulting Group develops proprietary
            SaaS platforms that apply our operational intelligence methodology directly into
            purpose-built products.
          </p>
        </div>

        {/* Pourdex Card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="acg-card rounded-2xl overflow-hidden border border-white/[0.08]"
        >
          {/* Top accent bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0ea5e9]/60 to-transparent" />

          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Product overview */}
              <div>
                {/* Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-full bg-[#0ea5e9]/15 border border-[#0ea5e9]/30">
                    <span className="text-[#0ea5e9] text-xs font-bold tracking-widest uppercase">
                      ACG Product
                    </span>
                  </div>
                  <span className="text-[#475569] text-xs">Hospitality · Bar Operations</span>
                </div>

                {/* Logo / Name */}
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-white tracking-tight mb-1">
                    Pourdex
                  </h3>
                  <p className="text-[#0ea5e9] text-base font-medium">
                    Stop Guessing. Start Knowing.
                  </p>
                </div>

                <p className="text-[#94a3b8] text-base leading-relaxed mb-6">
                  Pourdex is a predictive intelligence platform for bars and restaurants that
                  transforms POS transaction data into operational clarity — tracking variance,
                  forecasting demand, and optimizing orders without manual inventory counts.
                </p>

                <p className="text-[#94a3b8] text-sm leading-relaxed mb-8">
                  Built on the same AI-driven analytics methodology ACG applies to enterprise
                  operations, Pourdex brings operational intelligence to hospitality venues of
                  all sizes. It integrates directly with Toast, Square, and Clover — capturing
                  every transaction, void, and modifier automatically — and surfaces the
                  insights operators need to reduce waste, recover variance, and improve margins.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/[0.06]">
                  {[
                    { value: "$1,200", label: "Avg. monthly variance recovered", suffix: "/mo" },
                    { value: "85%+", label: "Demand forecast accuracy", suffix: "" },
                    { value: "30%", label: "Fewer stockouts", suffix: "" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-xl font-bold acg-gradient-text-blue acg-stat-value">
                        {stat.value}
                      </p>
                      <p className="text-[#475569] text-[10px] mt-1 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.pourdex.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white acg-btn-primary relative z-10"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Visit Pourdex.com
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </a>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-[#94a3b8] hover:text-white border border-white/[0.1] hover:border-white/20 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right: Features */}
              <div className="space-y-4">
                <p className="text-xs text-[#64748b] uppercase tracking-[0.15em] font-semibold mb-5">
                  Platform Capabilities
                </p>
                {pourdexFeatures.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                      }}
                      className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#0ea5e9]/20 transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0ea5e9]/15 transition-colors">
                        <Icon className="w-4 h-4 text-[#0ea5e9]" />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-semibold mb-1">{feature.title}</h4>
                        <p className="text-[#64748b] text-xs leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Trial note */}
                <div className="pt-3">
                  <p className="text-xs text-[#475569] leading-relaxed">
                    <span className="text-[#0ea5e9] font-semibold">14-day free trial</span> — no credit card required.
                    Works with 5,000+ pre-loaded drink recipes out of the box.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0ea5e9]/20 to-transparent" />
        </motion.div>

        {/* Valor Claims OS Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="acg-card rounded-2xl overflow-hidden border border-white/[0.08] mt-8"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#38bdf8]/40 to-transparent" />

          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Product overview */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/25">
                    <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase">
                      ACG Product
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-[10px] font-semibold tracking-wide uppercase">
                    Under Development
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-white tracking-tight mb-1">
                    Valor Claims OS
                  </h3>
                  <p className="text-[#38bdf8] text-base font-medium">
                    AI Military Career OS for Veterans
                  </p>
                </div>

                <p className="text-[#94a3b8] text-base leading-relaxed mb-4">
                  Valor Claims OS is an AI-powered platform built to help veterans navigate
                  the VA claims process — tracking service exposures, symptoms, and medical
                  records to automatically build evidence-complete disability claims.
                </p>

                <p className="text-[#94a3b8] text-sm leading-relaxed mb-8">
                  Developed as part of ACG&apos;s commitment to delivering AI solutions that
                  create real-world impact beyond commercial clients, Valor Claims OS will be
                  offered at no cost to veterans. The platform applies ACG&apos;s operational
                  intelligence methodology to one of the most complex bureaucratic systems
                  American servicemembers face after service.
                </p>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/15">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-amber-400 text-sm font-semibold">Coming Soon</p>
                    <p className="text-[#64748b] text-xs mt-0.5">
                      Currently in development. Free for all veterans upon launch.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Features */}
              <div className="space-y-4">
                <p className="text-xs text-[#64748b] uppercase tracking-[0.15em] font-semibold mb-5">
                  Platform Capabilities
                </p>
                {[
                  {
                    icon: Brain,
                    title: "AI Claim Builder",
                    description: "Automatically structures VA disability claims from medical records, exposure history, and service documentation using AI-guided evidence mapping.",
                  },
                  {
                    icon: FileText,
                    title: "Exposure & Symptom Tracking",
                    description: "Logs service-connected exposures and symptoms over time, building a longitudinal record that supports nexus letters and claim narratives.",
                  },
                  {
                    icon: Shield,
                    title: "VA Process Navigation",
                    description: "Guides veterans step-by-step through the VA claims system — explaining rating criteria, required forms, and how to respond to C&P exams.",
                  },
                  {
                    icon: Users,
                    title: "Built for Veterans, Free Always",
                    description: "Valor Claims OS is ACG's commitment to the veteran community. The full platform will be available at no cost — no subscription, no hidden fees.",
                  },
                ].map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                      }}
                      className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#38bdf8]/20 transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#38bdf8]/15 transition-colors">
                        <Icon className="w-4 h-4 text-[#38bdf8]" />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-semibold mb-1">{feature.title}</h4>
                        <p className="text-[#64748b] text-xs leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}

                <div className="pt-3">
                  <p className="text-xs text-[#475569] leading-relaxed">
                    <span className="text-[#38bdf8] font-semibold">No cost to veterans.</span>{" "}
                    ACG&apos;s contribution to those who served. Contact us to be notified at launch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#38bdf8]/15 to-transparent" />
        </motion.div>

        {/* "More products coming" teaser */}
        <div className="text-center mt-10">
          <p className="text-sm text-[#475569]">
            More ACG-built products in development.{" "}
            <Link href="/contact" className="text-[#0ea5e9] hover:text-[#38bdf8] transition-colors">
              Contact us to learn more.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
