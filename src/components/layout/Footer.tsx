import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Twitter, ArrowUpRight, ExternalLink } from "lucide-react";

const footerLinks = {
  services: [
    { label: "AI Process Optimization", href: "/services/ai-process-optimization" },
    { label: "Predictive Analytics", href: "/services/predictive-analytics" },
    { label: "AI Implementation", href: "/services/ai-implementation" },
    { label: "Process Mining", href: "/services/process-mining" },
    { label: "AI Software Development", href: "/services/ai-software-development" },
  ],
  company: [
    { label: "About ACG", href: "/about" },
    { label: "Our Methodology", href: "/methodology" },
    { label: "AI Insights", href: "/insights" },
    { label: "Industries", href: "/industries" },
    { label: "Products", href: "/products" },
  ],
  contact: [
    { label: "Contact Us", href: "/contact" },
    { label: "Book Consultation", href: "/book-consultation" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#020912] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-9 h-9 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1565c0] to-[#0ea5e9] rounded-sm opacity-90" />
                <div className="absolute inset-[2px] bg-[#020912] rounded-[2px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#0ea5e9] font-bold text-base leading-none">A</span>
                </div>
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight tracking-wide">
                  AUGMENTATION
                </p>
                <p className="text-[#64748b] text-[10px] tracking-[0.2em] uppercase font-medium leading-tight">
                  Consulting Group
                </p>
              </div>
            </Link>

            <p className="text-[#64748b] text-sm leading-relaxed max-w-sm">
              We help organizations identify inefficiencies, implement AI systems, and unlock
              predictive decision-making through operational intelligence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=2389+Main+St+STE+100+Glastonbury+CT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-[#64748b] hover:text-white transition-colors group/link"
              >
                <MapPin className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                <span>
                  2389 Main St. STE 100<br />
                  Glastonbury, CT 06033
                </span>
              </a>
              <a
                href="tel:+18603211121"
                className="flex items-center gap-2.5 text-sm text-[#64748b] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
                <span>(860) 321-1121</span>
              </a>
              <a
                href="mailto:partners@augmentationcg.onmicrosoft.com"
                className="flex items-center gap-2.5 text-sm text-[#64748b] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
                <span>partners@augmentationcg.onmicrosoft.com</span>
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#64748b] hover:text-white hover:border-[#0ea5e9]/40 hover:bg-[#0ea5e9]/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#64748b] hover:text-white hover:border-[#0ea5e9]/40 hover:bg-[#0ea5e9]/10 transition-all duration-200"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs text-[#94a3b8] font-semibold tracking-[0.15em] uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748b] hover:text-white transition-colors duration-150 flex items-center gap-1 group/link"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity -mt-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs text-[#94a3b8] font-semibold tracking-[0.15em] uppercase">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748b] hover:text-white transition-colors duration-150 flex items-center gap-1 group/link"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity -mt-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Legal */}
          <div className="space-y-4">
            <h4 className="text-xs text-[#94a3b8] font-semibold tracking-[0.15em] uppercase">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748b] hover:text-white transition-colors duration-150 flex items-center gap-1 group/link"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity -mt-0.5" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Products */}
            <div className="pt-4 border-t border-white/[0.05]">
              <p className="text-xs text-[#94a3b8] font-semibold tracking-[0.15em] uppercase mb-3">
                Our Products
              </p>
              <a
                href="https://www.pourdex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium group/prd"
              >
                Pourdex
                <ExternalLink className="w-3 h-3 opacity-60 group-hover/prd:opacity-100 transition-opacity" />
              </a>
              <p className="text-[#475569] text-xs mt-1">Bar Intelligence Platform</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="acg-divider" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#475569]">
            © {new Date().getFullYear()} Augmentation Consulting Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-[#475569] hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-[#475569] hover:text-white transition-colors">
              Terms
            </Link>
            <span className="text-xs text-[#475569]">
              Glastonbury, CT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
