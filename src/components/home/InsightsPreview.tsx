"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    category: "AI Strategy",
    title: "The Future of AI-Driven Operations: What Enterprise Leaders Need to Know",
    excerpt:
      "As AI systems mature from experimental tools to operational infrastructure, enterprise leaders face a new set of strategic decisions. We explore what the next phase of AI adoption means for operations.",
    readTime: "8 min read",
    href: "/insights/future-of-ai-driven-operations",
    date: "March 2025",
    photoSeed: 683,
  },
  {
    category: "Process Mining",
    title: "Process Mining in Enterprise Organizations: A Practical Guide",
    excerpt:
      "Process mining transforms raw event log data into visual operational intelligence. Here's how enterprise operations teams are using it to discover hidden inefficiencies.",
    readTime: "6 min read",
    href: "/insights/process-mining-enterprise-guide",
    date: "February 2025",
    photoSeed: 180,
  },
  {
    category: "Predictive Analytics",
    title: "Building Intercompany AI-Driven Organizations: From Data to Decision",
    excerpt:
      "Organizations that successfully integrate AI into their decision-making processes share a common pattern: they treat operational data as a strategic asset, not a byproduct.",
    readTime: "7 min read",
    href: "/insights/intercompany-ai-organizations",
    date: "January 2025",
    photoSeed: 430,
  },
];

export function InsightsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 lg:py-28 acg-section-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-3">
              AI Insights
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Intelligence for
              <br />
              <span className="acg-gradient-text">Operations Leaders</span>
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0ea5e9] hover:text-[#38bdf8] transition-colors flex-shrink-0"
          >
            View All Insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <Link
                href={article.href}
                className="acg-card acg-card-hover rounded-2xl overflow-hidden flex flex-col h-full group"
              >
                {/* Article photo */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/${article.photoSeed}/800/400`}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#050e1d]/70 backdrop-blur-sm border border-[#0ea5e9]/30 text-[#0ea5e9] text-[10px] font-semibold uppercase tracking-wide">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-[#90caf9] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#64748b] text-xs leading-relaxed flex-1">{article.excerpt}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
                    <span className="text-[#475569] text-xs">{article.date}</span>
                    <div className="flex items-center gap-1 text-[#475569] text-xs">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#64748b] group-hover:text-[#0ea5e9] transition-colors">
                    Read More
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
