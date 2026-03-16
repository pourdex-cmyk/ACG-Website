"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConsultationCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050e1d] via-[#0a1f3c] to-[#050e1d]" />
      <div className="absolute inset-0 acg-grid-pattern opacity-30" />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-[#1565c0]/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transform Your Operations
            <br />
            <span className="acg-gradient-text">With AI</span>
          </h2>
          <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Augmentation Consulting Group helps organizations identify inefficiencies, implement
            AI systems, and unlock predictive decision-making. Let&apos;s explore what&apos;s possible
            for your operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-consultation">
              <Button
                size="lg"
                className="acg-btn-primary relative text-white font-semibold px-8 py-3 h-auto rounded-xl text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule Strategy Call
                </span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="acg-btn-outline text-white border-white/20 font-medium px-8 py-3 h-auto rounded-xl text-base"
              >
                <span className="flex items-center gap-2">
                  Contact Our Team
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Supporting details */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              "No commitment required",
              "60-day time to first insight",
              "Enterprise-ready methodology",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#64748b]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
