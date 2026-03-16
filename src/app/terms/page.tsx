import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Augmentation Consulting Group",
  description: "Terms of Service for Augmentation Consulting Group. Review the terms governing your use of our website and consulting services.",
};

const lastUpdated = "January 1, 2025";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using the website located at augmentationcg.com (the "Site") or engaging the consulting services of Augmentation Consulting Group, LLC ("ACG," "Company," "we," "us," or "our"), you ("User," "Client," or "you") agree to be bound by these Terms of Service ("Terms"). If you are accessing the Site or services on behalf of an organization, you represent and warrant that you have authority to bind that organization to these Terms.

If you do not agree to these Terms, please do not use the Site or our services. We reserve the right to modify these Terms at any time. Your continued use of the Site following the posting of changes constitutes acceptance of those changes.`,
  },
  {
    id: "services",
    title: "2. Services Description",
    content: `ACG provides management consulting services specializing in artificial intelligence strategy, process optimization, predictive analytics, and AI implementation. Services may include but are not limited to:

- AI readiness assessments and strategic advisory
- Process mining and workflow intelligence analysis
- Predictive analytics model development and deployment
- AI implementation consulting and vendor selection advisory
- Custom AI software development
- Ongoing operational intelligence monitoring and optimization

The specific scope, deliverables, timeline, and fees for consulting engagements are defined in individual Statement of Work agreements ("SOW") or engagement letters executed between ACG and each Client. These Terms govern the general relationship between users and ACG and are supplementary to, not a replacement for, any executed client agreements.`,
  },
  {
    id: "website-use",
    title: "3. Website Use",
    content: `**Permitted Use**

You may access and use the Site for lawful purposes related to exploring and engaging our consulting services. You agree not to:

- Use the Site in any manner that violates applicable laws or regulations
- Attempt to gain unauthorized access to any portion of the Site or its related systems
- Transmit any harmful, disruptive, or unauthorized content
- Use automated tools to scrape, crawl, or index the Site without our prior written consent
- Impersonate any person or entity or misrepresent your affiliation

**Intellectual Property**

All content on the Site, including text, graphics, logos, images, and software, is the property of ACG or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any Site content without our express written permission.

**User Submissions**

By submitting information through our contact forms, consultation requests, or other channels, you grant ACG the right to use that information to respond to your inquiry and for related business purposes as described in our Privacy Policy.`,
  },
  {
    id: "consulting-terms",
    title: "4. Consulting Engagement Terms",
    content: `**Engagement Formation**

A consulting engagement is established only upon execution of a signed Statement of Work or engagement letter between ACG and the Client. Submission of a contact or consultation request form does not constitute an engagement or create any obligation on the part of ACG to provide services.

**Payment Terms**

Specific payment terms, including fees, invoicing schedules, and payment methods, are set forth in each engagement SOW. Unless otherwise specified, invoices are due net 30 days from invoice date. ACG reserves the right to suspend services for accounts more than 30 days past due.

**Client Responsibilities**

Clients are responsible for providing ACG with timely access to relevant data, systems, and personnel required for engagement delivery. Delays caused by Client's failure to provide required access or information may result in timeline adjustments and additional fees.

**Confidentiality**

Both parties agree to maintain the confidentiality of the other party's confidential information as defined in executed client agreements. The specific terms of confidentiality obligations are governed by non-disclosure or confidentiality provisions in individual engagement agreements.

**Deliverable Ownership**

Unless otherwise specified in an SOW, deliverables created specifically for a Client engagement become the property of the Client upon full payment of fees. ACG retains the right to use general methodologies, frameworks, and knowledge developed in connection with engagements for other purposes, provided Client-specific confidential information is not disclosed.`,
  },
  {
    id: "disclaimers",
    title: "5. Disclaimers and Limitation of Liability",
    content: `**Website Disclaimer**

THE SITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. ACG DISCLAIMS ALL WARRANTIES INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. ACG DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.

**Service Disclaimer**

ACG's consulting services are based on professional judgment and available information at the time of engagement. Consulting recommendations and deliverables reflect ACG's professional opinion and do not constitute guarantees of specific business outcomes. Results described in case studies and marketing materials reflect specific client engagements and are not guarantees of results for other clients.

**Limitation of Liability**

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ACG AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OR SERVICES, EVEN IF ACG HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

ACG's total liability for claims arising from a consulting engagement shall not exceed the fees paid by Client for the relevant engagement in the 12 months preceding the claim.`,
  },
  {
    id: "indemnification",
    title: "6. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless ACG and its officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or related to:

- Your use of the Site or services
- Your violation of these Terms
- Your violation of any applicable law or regulation
- Any information you provide to ACG that is inaccurate, incomplete, or misleading
- Your infringement of any third-party intellectual property or other rights

ACG reserves the right to assume exclusive control of any matter subject to indemnification, in which case you will cooperate with ACG in asserting available defenses.`,
  },
  {
    id: "third-party",
    title: "7. Third-Party Links and Services",
    content: `The Site may contain links to third-party websites, services, or resources. These links are provided for convenience only. ACG does not endorse and is not responsible for the content, practices, or privacy policies of any third-party site. Your interactions with third-party sites are governed by those sites' terms and privacy policies.

ACG may recommend third-party technology vendors or service providers as part of consulting engagements. Such recommendations are based on professional judgment and do not constitute endorsements. ACG has no reseller or referral fee relationships with any AI platform or software vendor that would create a bias in our recommendations.`,
  },
  {
    id: "governing-law",
    title: "8. Governing Law and Dispute Resolution",
    content: `These Terms are governed by and construed in accordance with the laws of the State of Illinois, without regard to conflict of law principles.

**Dispute Resolution**

Before initiating any formal legal proceedings, the parties agree to attempt in good faith to resolve any dispute through direct negotiation between senior representatives of each party.

If negotiation is unsuccessful, disputes shall be submitted to binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. The arbitration shall take place in Chicago, Illinois. The decision of the arbitrator shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.

Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction for claims involving intellectual property or confidential information.

**Class Action Waiver**

You agree that any dispute resolution proceedings will be conducted only on an individual basis and not as a class or representative action.`,
  },
  {
    id: "general",
    title: "9. General Provisions",
    content: `**Entire Agreement**

These Terms, together with our Privacy Policy and any executed engagement agreements, constitute the entire agreement between you and ACG regarding the subject matter herein and supersede all prior agreements and understandings.

**Severability**

If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.

**Waiver**

ACG's failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision.

**Assignment**

You may not assign your rights or obligations under these Terms without ACG's prior written consent. ACG may assign its rights and obligations without restriction.

**Contact**

If you have questions about these Terms, please contact us at legal@augmentationcg.com or:

Augmentation Consulting Group, LLC
123 Innovation Drive, Suite 400
Chicago, IL 60601`,
  },
];

export default function TermsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[#0ea5e9] uppercase tracking-[0.2em] font-semibold mb-4">Legal</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Terms of Service</h1>
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
                      // Check if paragraph is all-caps disclaimer
                      if (para === para.toUpperCase() && para.length > 50) {
                        return (
                          <p key={i} className="text-[#94a3b8] text-sm leading-relaxed font-medium">
                            {para}
                          </p>
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
                  <Link href="/privacy" className="text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium">
                    Privacy Policy
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
