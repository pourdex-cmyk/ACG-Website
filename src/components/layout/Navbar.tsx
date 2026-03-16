"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Process Optimization", href: "/services/ai-process-optimization" },
      { label: "Predictive Analytics Systems", href: "/services/predictive-analytics" },
      { label: "AI Implementation Consulting", href: "/services/ai-implementation" },
      { label: "Process Mining & Workflow Intelligence", href: "/services/process-mining" },
      { label: "AI Software Development", href: "/services/ai-software-development" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Technology", href: "/industries/technology" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Enterprise SaaS", href: "/industries/enterprise-saas" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Pourdex — Bar Intelligence Platform", href: "https://www.pourdex.com/", external: true },
    ],
  },
  { label: "AI Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#050e1d]/95 backdrop-blur-md border-b border-white/[0.06] shadow-2xl"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1565c0] to-[#0ea5e9] rounded-sm opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[2px] bg-[#050e1d] rounded-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#0ea5e9] font-bold text-sm leading-none">A</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-semibold text-sm leading-tight tracking-wide">
                AUGMENTATION
              </p>
              <p className="text-[#94a3b8] text-[10px] tracking-[0.2em] uppercase font-medium leading-tight">
                Consulting Group
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "acg-nav-link flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-white active"
                      : "text-[#94a3b8] hover:text-white"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        openDropdown === item.label ? "rotate-180" : ""
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[260px]"
                      >
                        <div className="acg-card rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50">
                          {item.children.map((child) =>
                            (child as { external?: boolean }).external ? (
                              <a
                                key={child.href}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-4 py-3 text-sm text-[#94a3b8] hover:text-white hover:bg-white/[0.05] transition-all duration-150 border-b border-white/[0.04] last:border-0 group/ext"
                              >
                                {child.label}
                                <span className="text-[#0ea5e9] text-[10px] opacity-60 group-hover/ext:opacity-100">
                                  ↗
                                </span>
                              </a>
                            ) : (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-4 py-3 text-sm text-[#94a3b8] hover:text-white hover:bg-white/[0.05] transition-all duration-150 border-b border-white/[0.04] last:border-0"
                              >
                                {child.label}
                              </Link>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/book-consultation" className="hidden lg:block">
              <Button
                className="acg-btn-primary relative text-white text-sm font-medium px-5 py-2 rounded-lg h-auto z-10"
                size="sm"
              >
                <span className="relative z-10">Book Consultation</span>
              </Button>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#94a3b8] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#050e1d]/98 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
                      pathname === item.href
                        ? "text-white bg-white/[0.06]"
                        : "text-[#94a3b8] hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-0.5 border-l border-white/[0.06] pl-3">
                      {item.children.map((child) =>
                        (child as { external?: boolean }).external ? (
                          <a
                            key={child.href}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 text-xs text-[#64748b] hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
                          >
                            {child.label} ↗
                          </a>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-xs text-[#64748b] hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-1">
                <Link href="/book-consultation" className="block">
                  <Button className="acg-btn-primary w-full relative text-white font-medium rounded-lg h-auto py-2.5 z-10">
                    <span className="relative z-10">Book a Consultation</span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
