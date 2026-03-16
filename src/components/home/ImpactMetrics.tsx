"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { TrendingUp, BarChart3, DollarSign, Clock } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: 37,
    suffix: "%",
    label: "Operational Efficiency Improvements",
    description: "Average efficiency gains delivered across client engagements",
    color: "#0ea5e9",
  },
  {
    icon: BarChart3,
    value: 22,
    suffix: "%",
    label: "Automation ROI",
    description: "Average return on AI automation investment within 12 months",
    color: "#38bdf8",
  },
  {
    icon: DollarSign,
    value: 10,
    prefix: "$",
    suffix: "M+",
    label: "Revenue Leakage Recovered",
    description: "Identified and recovered through process intelligence insights",
    color: "#0ea5e9",
  },
  {
    icon: Clock,
    value: 60,
    suffix: "days",
    label: "Time to First Insight",
    description: "From engagement start to measurable operational intelligence",
    color: "#38bdf8",
  },
];

function AnimatedCounter({
  value,
  duration = 1800,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function ImpactMetrics() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#020912]">
      <div className="absolute inset-0 acg-dot-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-3">
            Proven Results
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Impact
          </h2>
          <p className="mt-4 text-[#64748b] max-w-xl mx-auto text-base">
            Augmentation Consulting Group helps organizations identify inefficiencies and
            improve by measurable margins.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="acg-card acg-card-hover rounded-2xl p-6 flex flex-col gap-4"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${metric.color}20 0%, ${metric.color}10 100%)`,
                    border: `1px solid ${metric.color}25`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: metric.color }} />
                </div>

                {/* Value */}
                <div className="acg-stat-value">
                  <span className="text-4xl lg:text-5xl font-bold text-white leading-none">
                    {metric.prefix && (
                      <span className="acg-gradient-text-blue">{metric.prefix}</span>
                    )}
                    <span className="acg-gradient-text-blue">
                      <AnimatedCounter value={metric.value} />
                    </span>
                    <span className="acg-gradient-text-blue text-2xl lg:text-3xl">
                      {metric.suffix}
                    </span>
                  </span>
                </div>

                {/* Label + Desc */}
                <div>
                  <p className="text-white text-sm font-semibold leading-snug mb-1">
                    {metric.label}
                  </p>
                  <p className="text-[#64748b] text-xs leading-relaxed">{metric.description}</p>
                </div>

                {/* Bottom glow line */}
                <div
                  className="h-px w-full mt-auto opacity-40"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${metric.color}, transparent)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
