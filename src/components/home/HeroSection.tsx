"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden acg-hero-gradient">
      {/* Background elements */}
      <div className="absolute inset-0 acg-grid-pattern opacity-50" />

      {/* Radial glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#1565c0]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Secondary glow right */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#0ea5e9]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Animated particles — minimal, performance-safe */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-[#0ea5e9] rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              boxShadow: "0 0 6px 2px rgba(14,165,233,0.4)",
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0ea5e9]/25 bg-[#0ea5e9]/8 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
          <span className="text-xs text-[#90caf9] font-medium tracking-wide uppercase">
            AI-Native Consulting Firm
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.07] tracking-tight mb-6"
        >
          <span className="text-white">Operational</span>
          <br />
          <span className="acg-gradient-text">Intelligence</span>
          <br />
          <span className="text-white">for the AI Era</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="max-w-2xl mx-auto text-base sm:text-lg text-[#94a3b8] leading-relaxed mb-10"
        >
          Augmentation Consulting Group helps organizations identify inefficiencies, implement
          AI systems, and unlock predictive decision-making across enterprise operations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/book-consultation">
            <Button
              size="lg"
              className="acg-btn-primary relative text-white font-semibold px-8 py-3 h-auto rounded-xl text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </Link>
          <Link href="/methodology">
            <Button
              size="lg"
              variant="outline"
              className="acg-btn-outline text-white border-white/20 hover:bg-white/5 font-medium px-8 py-3 h-auto rounded-xl text-base"
            >
              Explore Our Methodology
            </Button>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
          className="mt-16 pt-12 border-t border-white/[0.06]"
        >
          <p className="text-xs text-[#475569] uppercase tracking-[0.2em] font-medium mb-8">
            Trusted Across Industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {["Healthcare", "Technology", "Financial Services", "Logistics", "Enterprise SaaS"].map(
              (industry) => (
                <span
                  key={industry}
                  className="text-sm text-[#475569] font-medium tracking-wide hover:text-[#94a3b8] transition-colors"
                >
                  {industry}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#475569]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
