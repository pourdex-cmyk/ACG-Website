import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, CheckCircle2, BarChart2, TrendingUp, AlertTriangle, ShoppingCart, Target, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "ACG-built SaaS platforms that apply operational intelligence methodology directly into purpose-built products. Explore Pourdex and other tools developed by Augmentation Consulting Group.",
};

const pourdexFeatures = [
  {
    icon: BarChart2,
    title: "POS Integration",
    description:
      "Automatically captures all transactions, voids, and modifiers from Toast, Square, or Clover. No manual data entry. No physical weighing.",
  },
  {
    icon: BookOpen,
    title: "Drink Specs Engine",
    description:
      "Maps every recipe to its pour size and cost using 5,000+ pre-loaded recipes. Customize for your specific menu with ease.",
  },
  {
    icon: AlertTriangle,
    title: "Variance Detection",
    description:
      "Identifies over-pouring, comps, and shrinkage in real time. Clients average $1,200/month in identified variance — before it becomes permanent loss.",
  },
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    description:
      "Projects inventory needs by day and hour with 85%+ forecast accuracy. Built on ACG predictive modeling methodology, adapted for hospitality operations.",
  },
  {
    icon: ShoppingCart,
    title: "Smart Ordering",
    description:
      "Generates automated reorder recommendations based on actual consumption patterns. Reduces stockouts by 30% and eliminates excess carrying costs.",
  },
  {
    icon: Target,
    title: "Margin Intelligence",
    description:
      "Ranks menu items by true profitability — factoring pour cost, modifier frequency, and sales mix. Targets 3–5% margin lift through data-guided operations.",
  },
];

const outcomes = [
  "$1,200/mo average variance recovered per venue",
  "85%+ demand forecast accuracy",
  "30% reduction in stockouts",
  "3–5% margin lift through sales mix optimization",
  "Zero manual inventory counts required",
  "14-day free trial, no credit card needed",
];

export default function ProductsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden acg-hero-gradient">
        <div className="absolute inset-0 acg-grid-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1565c0]/20 blur-[120px] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">
            ACG Products
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Operational Intelligence
            <br />
            <span className="acg-gradient-text">Productized</span>
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl mx-auto">
            Beyond client engagements, Augmentation Consulting Group builds and operates
            proprietary SaaS platforms that apply our methodology directly into industry-specific
            tools — making operational intelligence accessible at any scale.
          </p>
        </div>
      </section>

      {/* Pourdex Detail */}
      <section className="py-20 lg:py-28 bg-[#020912]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#0ea5e9]/15 border border-[#0ea5e9]/30 text-[#0ea5e9] text-xs font-bold tracking-widest uppercase">
                  ACG Product
                </span>
                <span className="text-[#475569] text-sm">Hospitality · Bar Operations</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">Pourdex</h2>
              <p className="text-[#0ea5e9] text-xl font-medium">Stop Guessing. Start Knowing.</p>
            </div>
            <a
              href="https://www.pourdex.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white acg-btn-primary relative z-10 flex-shrink-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                Visit Pourdex.com
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* What is Pourdex */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-5 text-[#94a3b8] text-base leading-relaxed">
              <p>
                Pourdex is a sales-based intelligence platform built specifically for bar and
                restaurant operators. It integrates directly with your existing POS system —
                Toast, Square, or Clover — and transforms raw transaction data into operational
                clarity without requiring physical inventory counts or manual tracking.
              </p>
              <p>
                Where traditional inventory management relies on manual pours and weekly counts,
                Pourdex uses ACG&apos;s predictive modeling methodology to reconstruct actual consumption
                from POS data. The platform identifies every over-pour, unexplained comp, and
                shrinkage event as it happens — not days later when the damage is done.
              </p>
              <p>
                The demand forecasting engine learns your venue&apos;s unique consumption patterns
                over time, improving accuracy with each passing week. Smart ordering
                recommendations eliminate both stockouts and over-carrying — optimizing your
                cash position while keeping every bottle your guests want in stock.
              </p>
              <p>
                Margin intelligence surfaces which items on your menu are genuinely profitable
                versus which ones only appear to be — accounting for pour size variation,
                modifier frequency, and ingredient cost. The result is a data-guided path to
                3–5% margin improvement that requires no operational disruption.
              </p>
            </div>

            {/* Outcomes */}
            <div className="space-y-4">
              <p className="text-xs text-[#94a3b8] font-semibold tracking-[0.15em] uppercase mb-5">
                Platform Outcomes
              </p>
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                  <p className="text-[#94a3b8] text-sm">{outcome}</p>
                </div>
              ))}

              {/* Stat block */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/[0.06]">
                {[
                  { value: "$1,200", label: "Avg. variance recovered / month" },
                  { value: "85%+", label: "Forecast accuracy" },
                  { value: "30%", label: "Fewer stockouts" },
                ].map((s) => (
                  <div key={s.label} className="acg-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold acg-gradient-text-blue acg-stat-value">{s.value}</p>
                    <p className="text-[#475569] text-[10px] mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div>
            <p className="text-xs text-[#94a3b8] font-semibold tracking-[0.15em] uppercase mb-8 text-center">
              Platform Capabilities
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pourdexFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="acg-card acg-card-hover rounded-2xl p-6 flex flex-col gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0ea5e9]" />
                    </div>
                    <h3 className="text-white font-semibold text-base">{feature.title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA band */}
          <div className="mt-16 acg-border-glow rounded-2xl p-8 lg:p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Try Pourdex Free for 14 Days
            </h3>
            <p className="text-[#64748b] text-sm mb-6 max-w-lg mx-auto">
              No credit card required. Works with your existing POS. 5,000+ drink recipes
              pre-loaded. Start recovering variance on day one.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.pourdex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white acg-btn-primary relative z-10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial at Pourdex.com
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
              <a
                href="mailto:partners@augmentationcg.onmicrosoft.com"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-medium text-[#94a3b8] hover:text-white border border-white/[0.1] hover:border-white/20 transition-all"
              >
                Contact ACG About Pourdex
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More products */}
      <section className="py-16 acg-section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-3">
            What&apos;s Next
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            More Products in Development
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed mb-8">
            Augmentation Consulting Group is actively developing additional SaaS platforms
            across other operational domains. Each product applies the same ACG methodology —
            combining process intelligence, predictive analytics, and AI systems to solve
            specific industry problems at scale.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0ea5e9] hover:text-[#38bdf8] transition-colors"
          >
            Get in touch to learn about upcoming products
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
