"use client";

import { useState } from "react";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const industries = [
  "Healthcare",
  "Technology",
  "Financial Services",
  "Logistics",
  "Enterprise SaaS",
  "Other",
];

const companySizes = [
  "50–200 employees",
  "200–500 employees",
  "500–1,000 employees",
  "1,000–5,000 employees",
  "5,000+ employees",
];

const challenges = [
  "Process inefficiency and bottlenecks",
  "Lack of predictive analytics capability",
  "AI implementation and vendor selection",
  "Revenue leakage or billing accuracy",
  "Customer churn and retention",
  "Supply chain and logistics optimization",
  "Compliance operations",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    industry: "",
    companySize: "",
    challenge: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1565c0]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Contact</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Start a
            <br />
            <span className="acg-gradient-text">Conversation</span>
          </h1>
          <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Tell us about your operational challenges and we&apos;ll respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 lg:py-24 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Contact Info */}
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-6">Get in Touch</p>
              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: "Email",
                    value: "partners@augmentationcg.onmicrosoft.com",
                    href: "mailto:partners@augmentationcg.onmicrosoft.com",
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    label: "Phone",
                    value: "(860) 321-1121",
                    href: "tel:+18603211121",
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    label: "Address",
                    value: "123 Innovation Drive, Suite 400\nChicago, IL 60601",
                    href: null,
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    label: "Response Time",
                    value: "Within 1 business day",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#94a3b8] text-sm hover:text-white transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#94a3b8] text-sm whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="acg-card rounded-2xl p-6">
                <p className="text-white font-semibold text-sm mb-3">Prefer a scheduled call?</p>
                <p className="text-[#64748b] text-xs leading-relaxed mb-4">
                  Book a 30-minute strategy call directly with an ACG consultant to discuss your operational challenges.
                </p>
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 text-sm text-[#0ea5e9] hover:text-[#38bdf8] font-medium transition-colors"
                >
                  Book a Consultation
                  <CheckCircle2 className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="acg-card rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0ea5e9]/15 border border-[#0ea5e9]/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#0ea5e9]" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-4">Message Received</h3>
                  <p className="text-[#94a3b8] text-base leading-relaxed max-w-md mx-auto mb-6">
                    Thank you for reaching out. A member of our team will review your message and
                    respond within one business day.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#0ea5e9] hover:text-[#38bdf8] font-medium text-sm transition-colors"
                  >
                    Return to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="acg-card rounded-2xl p-8">
                  <p className="text-white font-bold text-xl mb-6">Tell Us About Your Organization</p>

                  {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        Full Name <span className="text-[#0ea5e9]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        Company <span className="text-[#0ea5e9]">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corporation"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                      />
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        Industry
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                        style={{ color: formData.industry ? "#fff" : "#475569" }}
                      >
                        <option value="" disabled>Select industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind} style={{ background: "#0a1628", color: "#fff" }}>
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Company Size */}
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        Company Size
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                        style={{ color: formData.companySize ? "#fff" : "#475569" }}
                      >
                        <option value="" disabled>Select size</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size} style={{ background: "#0a1628", color: "#fff" }}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Primary Challenge */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        Primary Challenge
                      </label>
                      <select
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                        style={{ color: formData.challenge ? "#fff" : "#475569" }}
                      >
                        <option value="" disabled>Select your primary challenge</option>
                        {challenges.map((ch) => (
                          <option key={ch} value={ch} style={{ background: "#0a1628", color: "#fff" }}>
                            {ch}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        Work Email <span className="text-[#0ea5e9]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        Message <span className="text-[#0ea5e9]">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your operational challenges and what you're looking to achieve..."
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#0ea5e9]/50 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-[#475569] text-xs">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy" className="text-[#0ea5e9] hover:text-[#38bdf8] transition-colors">
                        Privacy Policy
                      </Link>
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-8 py-3 rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
