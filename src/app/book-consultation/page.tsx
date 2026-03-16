"use client";

import { useState } from "react";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { CheckCircle2, Calendar, ArrowRight, Clock, Users, Target, Send } from "lucide-react";

const industries = ["Healthcare", "Technology", "Financial Services", "Logistics", "Enterprise SaaS", "Other"];
const companySizes = ["50–200 employees", "200–500 employees", "500–1,000 employees", "1,000–5,000 employees", "5,000+ employees"];
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

const consultationSteps = [
  {
    icon: <Calendar className="w-6 h-6" />,
    step: "01",
    title: "30-Minute Strategy Call",
    description: "A focused conversation with an ACG consultant to understand your operational context, current pain points, and what you're hoping to achieve with AI and process intelligence.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    step: "02",
    title: "Opportunity Assessment",
    description: "Based on the strategy call, we prepare a preliminary opportunity assessment identifying the highest-value use cases for AI and process intelligence in your specific context.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    step: "03",
    title: "Tailored Proposal",
    description: "We present a detailed proposal with a phased engagement approach, specific deliverables, timeline, and investment — aligned to your organizational priorities and risk tolerance.",
  },
];

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    title: "",
    industry: "",
    companySize: "",
    challenge: "",
    email: "",
    phone: "",
    goals: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/consultation", {
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
      setError("Unable to submit. Please try again.");
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
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Book Consultation</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Schedule Your
            <br />
            <span className="acg-gradient-text">Strategy Call</span>
          </h1>
          <p className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Start with a no-commitment conversation. We&apos;ll explore your operational challenges
            and identify the highest-value opportunities for AI and process intelligence.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative py-14 bg-[#020912] border-y border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {consultationSteps.map((step) => (
              <div key={step.step} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1565c0]/20 to-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <p className="text-[#0ea5e9] text-xs font-bold uppercase tracking-wider mb-1">Step {step.step}</p>
                  <p className="text-white font-semibold text-sm mb-2">{step.title}</p>
                  <p className="text-[#64748b] text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-16 lg:py-24 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Trust signals */}
            <div>
              <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-6">What to Expect</p>
              <div className="space-y-4 mb-10">
                {[
                  { title: "No Commitment Required", description: "The strategy call is a genuine conversation — not a sales pitch with a closing agenda." },
                  { title: "Relevant to Your Situation", description: "We do prep work before the call so we can speak specifically to your industry and operational context." },
                  { title: "Immediate Value", description: "Most clients leave the strategy call with at least one concrete insight about their operation — even if they don't proceed to engagement." },
                  { title: "60 Days to First Result", description: "If we do proceed, our methodology is designed to deliver measurable results within 60 days of engagement start." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-0.5">{item.title}</p>
                      <p className="text-[#64748b] text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="acg-card rounded-2xl p-6">
                <Clock className="w-6 h-6 text-[#0ea5e9] mb-3" />
                <p className="text-white font-semibold text-sm mb-2">30-minute call</p>
                <p className="text-[#64748b] text-xs leading-relaxed mb-3">
                  Conducted via video or phone at a time convenient for you. Available Monday–Friday, 8am–6pm CT.
                </p>
                <p className="text-[#475569] text-xs">Response within 1 business day</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="acg-card rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0ea5e9]/15 border border-[#0ea5e9]/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#0ea5e9]" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-4">Consultation Request Received</h3>
                  <p className="text-[#94a3b8] text-base leading-relaxed max-w-md mx-auto mb-6">
                    We&apos;ve received your consultation request and will be in touch within one
                    business day to schedule your strategy call.
                  </p>
                  <Link href="/" className="inline-flex items-center gap-2 text-[#0ea5e9] hover:text-[#38bdf8] font-medium text-sm transition-colors">
                    Return to Home <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="acg-card rounded-2xl p-8">
                  <p className="text-white font-bold text-xl mb-2">Book Your Strategy Call</p>
                  <p className="text-[#64748b] text-sm mb-7">The more context you provide, the more value we can deliver in the call.</p>

                  {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        Full Name <span className="text-[#0ea5e9]">*</span>
                      </label>
                      <input
                        type="text" name="name" required value={formData.name} onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        Job Title
                      </label>
                      <input
                        type="text" name="title" value={formData.title} onChange={handleChange}
                        placeholder="VP of Operations"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        Company <span className="text-[#0ea5e9]">*</span>
                      </label>
                      <input
                        type="text" name="company" required value={formData.company} onChange={handleChange}
                        placeholder="Acme Corporation"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">Industry</label>
                      <select name="industry" value={formData.industry} onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                        style={{ color: formData.industry ? "#fff" : "#475569" }}>
                        <option value="" disabled>Select industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind} style={{ background: "#0a1628", color: "#fff" }}>{ind}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">Company Size</label>
                      <select name="companySize" value={formData.companySize} onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                        style={{ color: formData.companySize ? "#fff" : "#475569" }}>
                        <option value="" disabled>Select size</option>
                        {companySizes.map((s) => (
                          <option key={s} value={s} style={{ background: "#0a1628", color: "#fff" }}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">Primary Challenge</label>
                      <select name="challenge" value={formData.challenge} onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                        style={{ color: formData.challenge ? "#fff" : "#475569" }}>
                        <option value="" disabled>Select challenge</option>
                        {challenges.map((ch) => (
                          <option key={ch} value={ch} style={{ background: "#0a1628", color: "#fff" }}>{ch}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        Work Email <span className="text-[#0ea5e9]">*</span>
                      </label>
                      <input
                        type="email" name="email" required value={formData.email} onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#0ea5e9]/50 transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">
                        What are you hoping to achieve? <span className="text-[#0ea5e9]">*</span>
                      </label>
                      <textarea
                        name="goals" required rows={3} value={formData.goals} onChange={handleChange}
                        placeholder="Describe the operational outcomes you're looking to achieve — e.g., reduce processing cycle time, build churn prediction capability, improve on-time delivery..."
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#0ea5e9]/50 transition-colors resize-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs text-[#475569] uppercase tracking-wider font-semibold mb-2">Additional Context</label>
                      <textarea
                        name="message" rows={3} value={formData.message} onChange={handleChange}
                        placeholder="Anything else that would help us prepare for the call..."
                        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#0ea5e9]/50 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-[#475569] text-xs">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy" className="text-[#0ea5e9] hover:text-[#38bdf8] transition-colors">Privacy Policy</Link>
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-8 py-3 rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
                        ) : (
                          <><Send className="w-4 h-4" /> Request Strategy Call</>
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
