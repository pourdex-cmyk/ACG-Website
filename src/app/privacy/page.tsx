import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Augmentation Consulting Group",
  description: "Privacy Policy for Augmentation Consulting Group. Learn how we collect, use, and protect your personal information.",
};

const lastUpdated = "January 1, 2025";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `Augmentation Consulting Group, LLC ("ACG," "we," "us," or "our") is committed to protecting the privacy of individuals who visit our website (augmentationcg.com), engage with our services, or otherwise interact with us. This Privacy Policy describes how we collect, use, disclose, and protect your personal information.

By accessing or using our website or services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with the practices described herein, please do not use our website or services.`,
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    content: `We collect information in the following ways:

**Information You Provide Directly**

When you submit a contact form, request a consultation, subscribe to our newsletter, or otherwise communicate with us, we may collect:
- Full name and job title
- Company name and industry
- Business email address and phone number
- Company size and operational context information
- Any other information you choose to provide in your message or inquiry

**Information Collected Automatically**

When you visit our website, we automatically collect certain technical information, including:
- IP address and approximate geographic location
- Browser type and version
- Operating system
- Pages visited and time spent on each page
- Referring URL and exit pages
- Date and time of visit
- Device type (desktop, mobile, tablet)

**Cookies and Tracking Technologies**

We use cookies and similar tracking technologies to analyze website traffic, understand user behavior, and improve the functionality of our website. You may control cookie preferences through your browser settings, though disabling certain cookies may affect website functionality.`,
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: `We use the information we collect for the following purposes:

**Service Delivery**
- To respond to your inquiries and consultation requests
- To communicate with you about our services and engagements
- To provide consulting services you have engaged us to perform
- To fulfill contractual obligations

**Business Operations**
- To improve our website and service offerings
- To analyze usage patterns and optimize our marketing
- To send you relevant information about our services (with your consent where required)
- To comply with legal obligations

**Marketing Communications**
- If you opt in, we may send you newsletters, industry insights, and information about ACG services. You may unsubscribe from marketing communications at any time by clicking the unsubscribe link in any email or contacting us directly.

**Legal Basis for Processing (EEA/UK Visitors)**
For individuals in the European Economic Area or United Kingdom, our legal bases for processing personal data include: your consent, performance of a contract, our legitimate business interests, and compliance with legal obligations.`,
  },
  {
    id: "information-sharing",
    title: "4. Information Sharing and Disclosure",
    content: `We do not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your information in the following limited circumstances:

**Service Providers**
We work with third-party service providers who assist us in operating our website and conducting our business, including:
- Cloud hosting and infrastructure providers
- Customer relationship management (CRM) software
- Email service providers
- Analytics platforms

These providers are contractually obligated to use your information only for the purposes of providing services to us and are prohibited from using it for their own purposes.

**Legal Requirements**
We may disclose your information if required to do so by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.

**Business Transfers**
In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you before your information becomes subject to a different privacy policy.`,
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: `We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include:

- Encryption of data in transit using TLS/SSL protocols
- Access controls limiting personal data access to authorized personnel
- Regular security assessments of our systems and processes
- Secure data handling procedures for consulting engagement data

However, no method of transmission over the internet or method of electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee absolute security.

**Consulting Engagement Data**
Data shared with us in connection with consulting engagements (including operational data, business records, and other client materials) is handled in accordance with the data processing terms included in our client agreements. Such data is treated as highly confidential and is subject to more restrictive handling standards than general website interaction data.`,
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: `We retain personal information for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required by law.

- **Website inquiry data**: Retained for 24 months from the date of last contact
- **Client engagement data**: Retained for 7 years following engagement completion, in accordance with professional services record-keeping requirements
- **Marketing contact data**: Retained until you unsubscribe or request deletion
- **Website analytics data**: Typically retained for 26 months in aggregate form

When we no longer need your personal information, we securely delete or anonymize it.`,
  },
  {
    id: "your-rights",
    title: "7. Your Privacy Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information:

**All Users**
- The right to request information about what personal data we hold about you
- The right to correct inaccurate information
- The right to opt out of marketing communications

**EEA/UK Residents (GDPR/UK GDPR Rights)**
- Right of access to your personal data
- Right to rectification of inaccurate data
- Right to erasure ("right to be forgotten")
- Right to restriction of processing
- Right to data portability
- Right to object to processing

**California Residents (CCPA Rights)**
- Right to know what personal information we collect, use, disclose, or sell
- Right to delete personal information
- Right to opt out of sale of personal information (we do not sell personal information)
- Right to non-discrimination for exercising your privacy rights

To exercise any of these rights, please contact us at privacy@augmentationcg.com. We will respond to verifiable requests within 30 days.`,
  },
  {
    id: "third-party-services",
    title: "8. Third-Party Services and Links",
    content: `Our website may contain links to third-party websites and services. This Privacy Policy does not apply to those third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.

We use the following categories of third-party services on our website:
- **Analytics**: We use web analytics services to understand how visitors interact with our website. Analytics data is collected in aggregate form.
- **Communication Tools**: We use third-party email and communication platforms to manage correspondence.
- **Forms**: Contact and consultation forms may be processed through third-party form services.

We select third-party service providers based on their data protection practices and contractually require appropriate data security standards.`,
  },
  {
    id: "cookies",
    title: "9. Cookies",
    content: `We use the following types of cookies:

**Strictly Necessary Cookies**: Required for the website to function properly. These cannot be disabled.

**Analytics Cookies**: Help us understand how visitors interact with our website. We use this information to improve our website and content. These cookies are set only with your consent where legally required.

**Functional Cookies**: Enable enhanced functionality and personalization on our website.

You can manage cookie preferences through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or receive alerts before a cookie is stored. Note that blocking certain cookies may impact website functionality.

For users in jurisdictions where cookie consent is required by law, we will seek your consent before setting non-essential cookies.`,
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    content: `Our website and services are directed to business professionals and are not intended for children under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will promptly delete it.`,
  },
  {
    id: "changes",
    title: "11. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. We will indicate the date of the most recent update at the top of this page. For material changes, we will provide notice through our website or direct communication where feasible.

We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.`,
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: `If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:

Augmentation Consulting Group, LLC
123 Innovation Drive, Suite 400
Chicago, IL 60601

Email: privacy@augmentationcg.com
Phone: +1 (800) 555-0192

For EEA/UK data protection inquiries, you may also contact your local data protection authority.`,
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Legal</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-[#64748b] text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-12 lg:py-16 bg-[#050e1d] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* TOC */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="acg-card rounded-2xl p-5 sticky top-24">
                <p className="text-xs text-[#0ea5e9] uppercase tracking-wider font-semibold mb-4">Contents</p>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block px-3 py-2 rounded-lg text-xs text-[#64748b] hover:text-white hover:bg-white/[0.04] transition-all"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0 space-y-10">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-white font-bold text-xl mb-4">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.split("\n\n").map((para, i) => {
                      if (para.startsWith("**") && para.endsWith("**")) {
                        return (
                          <h3 key={i} className="text-white font-semibold text-base mt-6 mb-2">
                            {para.replace(/\*\*/g, "")}
                          </h3>
                        );
                      }
                      const parts = para.split(/\*\*(.*?)\*\*/g);
                      return (
                        <p key={i} className="text-[#94a3b8] text-sm leading-relaxed">
                          {parts.map((part, j) =>
                            j % 2 === 1 ? (
                              <strong key={j} className="text-white font-semibold">{part}</strong>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-4">
                  <Link href="/terms" className="text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium">
                    Terms of Service
                  </Link>
                  <Link href="/contact" className="text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
