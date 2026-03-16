import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ArrowRight, Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] bg-[#1565c0]/15 blur-[130px] rounded-full" />
        </div>

        {/* Large 404 background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="text-[280px] lg:text-[380px] font-black leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(14, 165, 233, 0.07)",
            }}
          >
            404
          </span>
        </div>

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-6">
            Page Not Found
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            This Page Doesn&apos;t
            <br />
            <span className="acg-gradient-text">Exist</span>
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you
            back to where you need to be.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-8 py-3 rounded-xl text-sm"
            >
              <Home className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Return to Home</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 acg-btn-outline text-white font-medium px-8 py-3 rounded-xl text-sm"
            >
              <Mail className="w-4 h-4" />
              Contact Our Team
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Services", href: "/services" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "AI Insights", href: "/insights" },
              { label: "Book Consultation", href: "/book-consultation" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm text-[#64748b] hover:text-[#0ea5e9] transition-colors font-medium"
              >
                {link.label}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
