import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Insights | Augmentation Consulting Group",
  description:
    "Intelligence for operations leaders. In-depth analysis on AI strategy, process mining, predictive analytics, and AI implementation from the ACG consulting team.",
};

const articles = [
  {
    slug: "future-of-ai-driven-operations",
    category: "AI Strategy",
    title: "The Future of AI-Driven Operations: What Enterprise Leaders Need to Know",
    excerpt:
      "As AI systems mature from experimental tools to operational infrastructure, enterprise leaders face a new set of strategic decisions. We explore what the next phase of AI adoption means for operations teams, finance leadership, and boards navigating technology investment.",
    readTime: "8 min read",
    date: "March 2025",
    featured: true,
  },
  {
    slug: "process-mining-enterprise-guide",
    category: "Process Mining",
    title: "Process Mining in Enterprise Organizations: A Practical Guide",
    excerpt:
      "Process mining transforms raw event log data into visual operational intelligence. Here's how enterprise operations teams are using it to discover hidden inefficiencies, measure conformance, and identify improvement opportunities with data-driven precision.",
    readTime: "6 min read",
    date: "February 2025",
    featured: false,
  },
  {
    slug: "intercompany-ai-organizations",
    category: "Predictive Analytics",
    title: "Building Intercompany AI-Driven Organizations: From Data to Decision",
    excerpt:
      "Organizations that successfully integrate AI into their decision-making processes share a common pattern: they treat operational data as a strategic asset, not a byproduct. Here's how to build the data and AI culture that makes predictive intelligence possible.",
    readTime: "7 min read",
    date: "January 2025",
    featured: false,
  },
  {
    slug: "ai-implementation-failure-modes",
    category: "AI Implementation",
    title: "Why Enterprise AI Implementations Fail: The Seven Patterns We See Repeatedly",
    excerpt:
      "73% of enterprise AI initiatives fail to reach production scale. After working through dozens of implementations, we've identified the seven failure modes that account for the vast majority of unsuccessful programs — and what to do about each one.",
    readTime: "9 min read",
    date: "December 2024",
    featured: false,
  },
  {
    slug: "healthcare-process-intelligence",
    category: "Process Mining",
    title: "Process Intelligence in Healthcare: Moving Beyond EMR Reporting",
    excerpt:
      "Electronic medical records generate enormous amounts of data — but most healthcare organizations are only scratching the surface of what that data can reveal about operational performance. Process mining changes the picture entirely.",
    readTime: "6 min read",
    date: "November 2024",
    featured: false,
  },
  {
    slug: "predictive-analytics-data-readiness",
    category: "Predictive Analytics",
    title: "Data Readiness for Predictive Analytics: What You Actually Need to Get Started",
    excerpt:
      "The most common reason organizations delay predictive analytics initiatives is a belief that their data isn't ready. In most cases, they're wrong. Here's an honest assessment of what data readiness actually requires — and what it doesn't.",
    readTime: "5 min read",
    date: "October 2024",
    featured: false,
  },
];

const categories = ["All", "AI Strategy", "Process Mining", "Predictive Analytics", "AI Implementation"];

export default function InsightsPage() {
  const featuredArticle = articles.find((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1565c0]/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">AI Insights</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Intelligence for
            <br />
            <span className="acg-gradient-text">Operations Leaders</span>
          </h1>
          <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            In-depth analysis and practical guidance on operational AI, process intelligence,
            and predictive analytics — written for leaders making real implementation decisions.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="relative py-8 bg-[#020912] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                  cat === "All"
                    ? "bg-[#0ea5e9]/15 border border-[#0ea5e9]/30 text-[#0ea5e9]"
                    : "bg-white/[0.04] border border-white/[0.08] text-[#64748b] hover:text-[#94a3b8]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="relative py-16 bg-[#050e1d] overflow-hidden">
          <div className="absolute inset-0 acg-dot-pattern opacity-15" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/insights/${featuredArticle.slug}`} className="block group">
              <div className="acg-card acg-card-hover rounded-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div
                    className="lg:w-2/5 h-56 lg:h-auto relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #0a1628 0%, #1565c0 50%, #0ea5e9 100%)",
                      minHeight: "240px",
                    }}
                  >
                    <div className="absolute inset-0 acg-grid-pattern opacity-40" />
                    <div className="absolute inset-0 flex items-end p-8">
                      <span className="px-3 py-1.5 rounded-lg bg-[#0ea5e9]/20 border border-[#0ea5e9]/30 text-[#0ea5e9] text-xs font-semibold uppercase tracking-wide">
                        {featuredArticle.category}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                    <h2 className="text-white font-bold text-2xl lg:text-3xl leading-snug mb-4 group-hover:text-[#90caf9] transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{featuredArticle.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-[#475569] text-xs">{featuredArticle.date}</span>
                        <div className="flex items-center gap-1 text-[#475569] text-xs">
                          <Clock className="w-3 h-3" />
                          {featuredArticle.readTime}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-[#64748b] group-hover:text-[#0ea5e9] transition-colors">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="relative py-16 lg:py-24 bg-[#020912] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}`} className="block group">
                <div className="acg-card acg-card-hover rounded-2xl overflow-hidden h-full flex flex-col">
                  <div
                    className="h-40 relative overflow-hidden flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #0a1628 0%, #1565c0 50%, #0ea5e9 100%)",
                      opacity: 0.8,
                    }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(135deg, #0a1628 0%, #1565c0 50%, #0ea5e9 100%)" }}
                    />
                    <div className="absolute inset-0 acg-grid-pattern opacity-40" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2.5 py-1 rounded-md bg-[#0ea5e9]/20 border border-[#0ea5e9]/30 text-[#0ea5e9] text-[10px] font-semibold uppercase tracking-wide">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-[#90caf9] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[#64748b] text-xs leading-relaxed flex-1">{article.excerpt}</p>
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
