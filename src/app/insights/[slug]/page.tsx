import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArrowRight, Clock, ArrowLeft } from "lucide-react";

const articles: Record<string, {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  content: string[];
  related: string[];
}> = {
  "future-of-ai-driven-operations": {
    slug: "future-of-ai-driven-operations",
    category: "AI Strategy",
    title: "The Future of AI-Driven Operations: What Enterprise Leaders Need to Know",
    excerpt: "As AI systems mature from experimental tools to operational infrastructure, enterprise leaders face a new set of strategic decisions.",
    readTime: "8 min read",
    date: "March 2025",
    content: [
      "The first wave of enterprise AI adoption was characterized by experimentation. Proof-of-concept projects, innovation labs, and pilot programs proliferated across virtually every sector between 2019 and 2023. Most produced interesting results. Few produced operational transformation.",
      "The second wave — now underway — is categorically different. AI is no longer being evaluated as a standalone technology investment. It is being embedded into the operational infrastructure of organizations that want to compete differently. The strategic question has shifted from 'Should we try AI?' to 'How do we make AI a core operational capability?'",
      "This shift has significant implications for how enterprise leaders approach technology investment, organizational design, and operational strategy. Three dynamics are defining the competitive landscape in this second wave.",
      "**The Operational Data Advantage**",
      "Organizations that treated data as a strategic asset during the first wave are entering the second with a significant competitive advantage. Their data quality, governance infrastructure, and institutional knowledge about which data drives which outcomes positions them to deploy AI systems that actually work — not proofs of concept that require clean data environments that don't exist in production.",
      "For organizations that are behind on data maturity, the good news is that the remediation path is shorter than it appears. Most operational AI systems require a specific, bounded data set — not a perfect enterprise-wide data warehouse. Focused data quality investment in the domain relevant to your first AI use case yields returns that compound quickly.",
      "The practical implication: do not wait for a comprehensive data transformation program to begin deploying operational AI. Start with the data you have, build the capability in a focused domain, and use the success to drive broader data investment.",
      "**From Point Solutions to AI-Native Operations**",
      "The most sophisticated early adopters are no longer thinking about AI as a collection of point solutions — a churn prediction model here, a route optimization engine there. They are redesigning operational processes with AI as a core component from the ground up.",
      "An AI-native operation looks different from a traditional operation that has AI bolted on. Decisions are structured around data signals, not opinion. Exception handling is designed into the process from the start. Performance monitoring includes model performance, not just operational KPIs. The humans in the system are operating at higher cognitive value — judgment, relationship, and exception management — while AI handles the structured, rules-based, and pattern-dependent work.",
      "Getting from today's state to AI-native operations is a multi-year journey for most organizations. But the directional investment decisions can begin now, and the organizations making them are compounding advantage over those still in pilot mode.",
      "**The Organizational Capability Question**",
      "Technology is rarely the limiting factor in enterprise AI adoption. Organizational capability — the human skills, decision-making processes, and cultural norms required to operate AI-augmented workflows effectively — is where most programs stall.",
      "Building AI organizational capability requires investment in three areas: technical literacy at the leadership level (not depth, but enough to ask good questions), change management capability that can navigate the workflow disruptions AI implementation creates, and feedback loop design that allows the organization to continuously improve its AI systems based on operational experience.",
      "The organizations that will win the second wave of AI adoption are not necessarily those with the most advanced technology. They are the ones that combine credible AI capability with the organizational maturity to deploy it at scale.",
      "**What Enterprise Leaders Should Be Doing Now**",
      "For operations leaders navigating this environment, four priorities stand out. First, establish an operational baseline — you cannot manage what you cannot measure, and you cannot improve what you haven't mapped. Second, identify one high-impact, data-rich use case where AI can deliver measurable value within 90 days and pursue it with discipline. Third, build the data governance foundation that enables AI deployment in adjacent use cases once the first is proven. Fourth, invest in the change management capability that will determine whether AI implementations actually stick.",
      "The window for establishing competitive advantage through operational AI is not closing — but it is narrowing. The organizations that move from experimentation to operational embedding in the next 12–18 months will be materially ahead of those that remain in pilot mode.",
    ],
    related: ["process-mining-enterprise-guide", "ai-implementation-failure-modes", "intercompany-ai-organizations"],
  },
  "process-mining-enterprise-guide": {
    slug: "process-mining-enterprise-guide",
    category: "Process Mining",
    title: "Process Mining in Enterprise Organizations: A Practical Guide",
    excerpt: "Process mining transforms raw event log data into visual operational intelligence. Here's how enterprise operations teams are using it to discover hidden inefficiencies.",
    readTime: "6 min read",
    date: "February 2025",
    content: [
      "Ask the average operations leader how their key processes actually work and you'll get a confident answer. Ask them to show you the data behind that answer — the actual sequence of steps, the real cycle times, the true frequency of exceptions — and the confidence usually dissolves into approximation.",
      "This gap between perceived process reality and actual process execution is where operational efficiency is destroyed. It is also where process mining creates its most significant value.",
      "**What Process Mining Actually Is**",
      "Process mining is a family of techniques that extract, reconstruct, and analyze process information from event logs — the timestamped records that operational systems generate as work moves through them. Every time an order changes status in your ERP, a ticket transitions in your ITSM, or a patient moves through your EMR, an event record is created. Process mining algorithms read these records and reconstruct the actual flow of work as a directed graph — every path taken, every variant, every deviation.",
      "The result is not a process map created by someone who thinks they know how the process works. It is a map derived directly from system data — representing what actually happened, at scale, over time.",
      "**Three Levels of Process Mining Value**",
      "Process mining delivers value at three progressive levels of sophistication. Discovery is the first level: understanding how processes actually execute compared to how they were designed. Most organizations find significant divergence — conformance rates of 60–70% are common in complex operational environments. Knowing the true as-is state is the prerequisite for meaningful improvement.",
      "Conformance checking is the second level: measuring ongoing adherence to designed process standards and identifying which process steps, roles, or time periods generate the highest deviation rates. This is where compliance and quality assurance functions find the most direct value.",
      "Enhancement is the third level: using the discovered process data to drive active improvement — identifying bottlenecks, quantifying their cost impact, and prioritizing remediation efforts based on data rather than intuition.",
      "**What You Need to Get Started**",
      "The technical prerequisites for process mining are more accessible than most organizations expect. You need event log data — records of when events occurred, what type of event it was, and what case it belongs to. Most enterprise systems generate this data automatically. ERP systems, CRM platforms, ITSM tools, EMR systems, and BPM platforms all contain the raw material for process mining.",
      "You also need read-only access to that data — process mining requires no changes to production systems and no production risk. The extraction layer is entirely passive.",
      "What you do not need is perfect data, a complete data warehouse, or a mature analytics infrastructure. The first process mining engagement typically starts with a focused extract from one or two core systems — enough to map the process domain of interest.",
      "**Common Process Mining Findings**",
      "Across enterprise process mining engagements, certain findings appear with striking consistency. Rework loops — processes that cycle back through completed steps due to errors or exceptions — account for 15–25% of total cycle time in most complex operational processes. Waiting time, particularly at handoff points between systems or teams, frequently consumes more time than the active processing steps. Process variants — the multiple ways a process actually executes in practice — often number in the dozens for processes that were designed as a single linear flow.",
      "Each of these findings carries a quantifiable cost impact. Process mining translates operational inefficiency from a subjective description into a measurable number — the type of number that enables investment justification and change management.",
      "**Starting Your First Process Mining Engagement**",
      "The most common mistake in first-time process mining engagements is trying to mine everything at once. Start with a bounded process domain where you have a clear performance problem, reliable event log data, and stakeholders who are genuinely motivated to act on findings. Deliver insights from that domain, establish the credibility of the methodology, and expand from there.",
      "The second mistake is treating process mining as a one-time diagnostic. The ongoing monitoring capability — continuous process performance tracking with automated anomaly detection — is where the long-term operational value accumulates.",
    ],
    related: ["future-of-ai-driven-operations", "healthcare-process-intelligence", "intercompany-ai-organizations"],
  },
  "intercompany-ai-organizations": {
    slug: "intercompany-ai-organizations",
    category: "Predictive Analytics",
    title: "Building Intercompany AI-Driven Organizations: From Data to Decision",
    excerpt: "Organizations that successfully integrate AI into their decision-making processes share a common pattern: they treat operational data as a strategic asset.",
    readTime: "7 min read",
    date: "January 2025",
    content: [
      "The difference between organizations that successfully integrate AI into their operations and those that don't is rarely about the technology. The technology is, by now, accessible to virtually every enterprise. The difference lies in the organizational and data infrastructure that determines whether AI can actually function at scale.",
      "After working with organizations across multiple industries on operational AI deployments, a consistent pattern emerges in the ones that succeed: they treat their operational data as a strategic asset rather than a compliance requirement or a reporting byproduct. This orientation shapes every subsequent decision about data governance, tooling investment, and organizational design.",
      "**The Data Strategy Prerequisite**",
      "Most enterprise data strategies are oriented around reporting and compliance — making sure the right people have access to the right historical information to answer the questions they already know to ask. This orientation is necessary but insufficient for AI-driven operations.",
      "AI-driven operations require data that is current, complete, and connected. Current means data pipelines that surface information in near-real-time — not yesterday's batch job. Complete means that the features your models need are actually present and populated, not sparse across your key dimensions. Connected means that data from different systems can be joined at the level of individual cases, customers, or transactions.",
      "Building these three properties into your data infrastructure is not a small investment. But the organizations that make it systematically — rather than reactively — find that it unlocks AI use case after AI use case, creating compounding returns on the foundational investment.",
      "**The Decision Architecture**",
      "AI-driven organizations don't just deploy models — they redesign the decision processes that those models support. This is a distinction that is easy to miss. A model that produces predictions but isn't connected to a decision workflow that acts on those predictions creates no operational value.",
      "Designing AI-driven decisions requires clarity about three things: what the decision is and who currently makes it, what information the AI system will provide to support or augment that decision, and how the workflow changes when the AI input is incorporated. The third element is where most AI integrations fall short — the model is deployed, but the decision process isn't redesigned to take advantage of it.",
      "The organizations that get this right treat model deployment and workflow redesign as a single project, not two separate ones. The AI system and the human decision process are co-designed, not bolted together after the fact.",
      "**Cross-Functional Data Ownership**",
      "In organizations with complex operational structures — multi-division enterprises, organizations that have grown through acquisition, businesses with distributed operations — a persistent challenge is data ownership fragmentation. Different business units own different data assets, and those assets often exist in incompatible formats, governed by inconsistent standards, and accessible only through negotiated data sharing arrangements.",
      "This fragmentation doesn't prevent AI adoption in individual functions. But it does prevent the cross-functional AI intelligence that creates the most significant operational advantage — the ability to correlate sales patterns with operational performance, or connect customer behavior signals with supply chain planning.",
      "Building AI-driven organizations at scale requires explicit investment in data governance architectures that enable cross-functional data sharing without creating security, privacy, or regulatory risk. Data mesh and data fabric architectures have emerged as practical approaches for enterprises where central data warehousing has proven too slow and too fragile.",
      "**Organizational Capability and Culture**",
      "The hardest part of building an AI-driven organization is not the technology. It is the organizational change required to make AI a genuine part of how decisions are made. This requires leaders who understand enough about how AI systems work to ask good questions — not to build them, but to evaluate their outputs critically. It requires middle managers who are willing to change how their teams work when AI can do the structured, repetitive work better. And it requires a culture that treats model errors as learning opportunities rather than institutional failures.",
      "None of these cultural changes happen on their own. They require deliberate investment in training, change management, and the patient, sometimes frustrating work of evolving organizational norms.",
      "The organizations that make this investment consistently — not as a one-time initiative but as an ongoing organizational capability — are the ones that will find themselves in a materially differentiated competitive position over the next decade.",
    ],
    related: ["future-of-ai-driven-operations", "predictive-analytics-data-readiness", "process-mining-enterprise-guide"],
  },
  "ai-implementation-failure-modes": {
    slug: "ai-implementation-failure-modes",
    category: "AI Implementation",
    title: "Why Enterprise AI Implementations Fail: The Seven Patterns We See Repeatedly",
    excerpt: "73% of enterprise AI initiatives fail to reach production scale. After working through dozens of implementations, we've identified the seven failure modes that account for the vast majority of unsuccessful programs.",
    readTime: "9 min read",
    date: "December 2024",
    content: [
      "The statistics on enterprise AI implementation failure are not encouraging. Industry research consistently places the failure rate for AI initiatives at 70–80% — measured as failure to reach production deployment or failure to deliver projected business value. This is a remarkable rate of failure for a technology category that has attracted hundreds of billions in enterprise investment.",
      "Having worked through dozens of AI implementations across industries, we have developed a clear picture of the failure modes that account for the vast majority of unsuccessful programs. They are not random — they are predictable, recurring patterns that organizations can actively guard against.",
      "**Pattern 1: Skipping the Readiness Assessment**",
      "The most common failure pattern is beginning implementation before establishing organizational readiness. Data quality gaps, technology infrastructure limitations, and organizational capability deficits are all manageable when identified early. When discovered mid-implementation, they become program-ending crises.",
      "A structured AI readiness assessment — evaluating data maturity, technology architecture, organizational capability, process stability, and governance readiness — adds a few weeks to the front of a program and saves months on the back end. Organizations that skip it consistently pay the price.",
      "**Pattern 2: Technology Leading Strategy**",
      "The second most common failure pattern is selecting the AI platform before fully defining the business problem. Vendor demonstrations are compelling. Procurement processes create momentum toward commitment. And organizations end up deploying platforms whose capabilities don't match their actual operational problems.",
      "Platform selection should follow problem definition, not precede it. The business case should be built around outcomes, and technology should be selected based on its ability to deliver those outcomes — not the other way around.",
      "**Pattern 3: Underestimating Change Management**",
      "Enterprise AI implementations consistently underestimate the change management requirements of deployment. Technology that isn't adopted creates no value. And technology that changes how people work — which AI reliably does — faces adoption resistance that must be actively managed.",
      "The organizations that achieve high adoption rates invest in change management from project inception, not as an afterthought once the technology is built. They identify organizational champions early. They design user experience with adoption in mind. And they build feedback loops that surface and respond to resistance signals in real time.",
      "**Pattern 4: Big-Bang Deployment**",
      "Attempting to deploy AI across an entire organization simultaneously creates implementation risk that most programs cannot absorb. When the deployment surfaces unexpected integration issues, data quality problems, or user experience gaps — and it always does — there is no safe rollback path.",
      "Phased deployment — starting with a pilot, validating performance, and expanding iteratively — is more effective for three reasons. It reduces risk by limiting the scope of early deployments. It generates calibration data that improves subsequent deployments. And it builds organizational confidence in the system through visible early wins.",
      "**Pattern 5: Model Without Monitoring**",
      "AI models deployed into production without monitoring infrastructure degrade silently. Data patterns change. Business conditions evolve. And models that were accurate at deployment gradually become inaccurate — generating predictions that are confidently wrong and decisions that are invisibly degraded.",
      "Production AI deployment requires drift detection, performance monitoring, and retraining triggers as part of the standard deployment package. These are not optional enhancements — they are the infrastructure that keeps AI systems valuable over time.",
      "**Pattern 6: Misaligned Success Metrics**",
      "AI programs that define success in technical terms — model accuracy, feature coverage, deployment velocity — frequently fail to deliver business value even when the technical metrics are achieved. A model with 94% accuracy that isn't connected to a decision workflow that acts on its outputs creates zero operational value.",
      "Success metrics for AI implementations should be defined in business outcome terms from the beginning: cost reduced, throughput improved, revenue recovered, risk avoided. Technical metrics serve as leading indicators, not end goals.",
      "**Pattern 7: Treating Implementation as a Project, Not a Capability**",
      "The final failure pattern is organizational: treating AI implementation as a project with a completion date rather than a capability that requires ongoing investment and evolution. The organizations that sustain AI value over time maintain the data pipelines, continue the model monitoring, respond to drift signals, and expand the AI layer into adjacent use cases as the baseline capability matures.",
      "Organizations that declare victory at go-live and move the team onto the next project find that their AI systems slowly degrade and their initial gains erode. AI is not a one-time technology deployment. It is an operational capability that requires ongoing stewardship.",
    ],
    related: ["future-of-ai-driven-operations", "intercompany-ai-organizations", "predictive-analytics-data-readiness"],
  },
  "healthcare-process-intelligence": {
    slug: "healthcare-process-intelligence",
    category: "Process Mining",
    title: "Process Intelligence in Healthcare: Moving Beyond EMR Reporting",
    excerpt: "Electronic medical records generate enormous amounts of data — but most healthcare organizations are only scratching the surface of what that data can reveal about operational performance.",
    readTime: "6 min read",
    date: "November 2024",
    content: [
      "Healthcare organizations have invested billions in electronic medical record systems over the past fifteen years. Epic, Cerner, Meditech, and their peers now sit at the center of clinical operations — capturing every patient interaction, every clinical decision, every administrative step in the care journey.",
      "And yet most healthcare organizations are using that data for a fraction of its operational intelligence potential. Standard EMR reporting answers questions about what happened: how many patients were admitted, what was the average length of stay, what were the discharge diagnoses. Process intelligence asks a different question: how did it happen — and what does that reveal about where the system is failing?",
      "**The EMR as an Event Log**",
      "Every interaction with an EMR system generates a timestamped event record. The patient registration creates an event. The triage assessment creates an event. The physician order creates an event. The medication administration creates an event. Discharge creates an event.",
      "When you extract these events and apply process mining algorithms, you don't get a summary report. You get a complete reconstruction of the patient journey — every actual path taken through the care process, every deviation from standard protocols, every waiting period and handoff delay, in millisecond resolution.",
      "This is categorically different from what EMR reporting provides. Reporting tells you averages. Process intelligence tells you distributions — and it reveals that the average often obscures the most important operational information.",
      "**What Process Intelligence Reveals in Healthcare**",
      "In our healthcare process mining engagements, several patterns appear consistently across different organizations and facility types.",
      "The first is conformance divergence. Healthcare organizations typically have well-defined clinical protocols — triage guidelines, treatment pathways, discharge criteria. Process mining reveals how closely actual clinical workflow adheres to those protocols. In our experience, conformance rates of 60–75% are typical in complex acute care environments. The non-conformant cases are not necessarily clinical failures — many represent appropriate clinical judgment. But identifying and categorizing non-conformance is essential for distinguishing appropriate deviation from process failure.",
      "The second is handoff concentration. The majority of waiting time in patient care processes accumulates at handoff points — transitions between departments, shifts, or care teams. These transitions are often invisible in standard EMR reporting because the wait is in the gap between system events, not in the events themselves. Process mining makes those gaps visible and measurable.",
      "The third is capacity-demand misalignment. Patient volume and acuity patterns have temporal structure — predictable peaks and troughs that, when surfaced clearly, enable proactive capacity management rather than reactive staffing adjustments. Process intelligence transforms what would otherwise be reactive crisis management into predictive operations.",
      "**Implementing Healthcare Process Intelligence**",
      "Healthcare process mining requires sensitivity to the clinical and regulatory context that general process mining engagements do not. HIPAA compliance in data handling is non-negotiable. Clinical workflow validation with nursing and physician leadership is essential — not just to understand the context of findings, but to ensure that improvement recommendations are clinically sound. And change management in clinical environments requires approaches that work within the culture and professional norms of healthcare.",
      "The technical approach, however, is straightforward. Most EMR systems provide structured event log access through standard reporting APIs. Epic's Chronicle database and Cerner's CCL reporting layer both contain the data required for process mining. The extraction is read-only — no production system changes are required.",
      "For healthcare operations leaders looking to move beyond EMR reporting, process intelligence represents one of the highest-ROI investments available. The data already exists. The infrastructure to extract value from it is proven. The gap is simply the decision to pursue it.",
    ],
    related: ["process-mining-enterprise-guide", "future-of-ai-driven-operations", "predictive-analytics-data-readiness"],
  },
  "predictive-analytics-data-readiness": {
    slug: "predictive-analytics-data-readiness",
    category: "Predictive Analytics",
    title: "Data Readiness for Predictive Analytics: What You Actually Need to Get Started",
    excerpt: "The most common reason organizations delay predictive analytics initiatives is a belief that their data isn't ready. In most cases, they're wrong.",
    readTime: "5 min read",
    date: "October 2024",
    content: [
      "In conversations with operations and analytics leaders across industries, a recurring pattern emerges: organizations that want to deploy predictive analytics but believe their data isn't ready. They're waiting for a data warehouse project to complete, a data quality initiative to produce results, or an enterprise data governance program to establish the standards they think they need.",
      "In most cases, they are waiting for conditions that are either unnecessary or that will never fully arrive. The myth of data readiness — the belief that you need perfect, comprehensive, well-governed data before predictive analytics can begin — is one of the most common and expensive delays in enterprise AI adoption.",
      "**What Predictive Analytics Actually Requires**",
      "Predictive analytics requires four things: a clearly defined prediction target (what outcome are you trying to predict?), historical data on that outcome (what happened in the past?), feature data that might predict that outcome (what information was available before the outcome occurred?), and sufficient volume of historical examples to build a reliable model.",
      "Notice what is not on that list: perfect data quality across your entire organization, a comprehensive data warehouse, enterprise-wide data governance standards, or a mature analytics infrastructure.",
      "**The Volume Question**",
      "The question operations leaders ask most often about data readiness is 'how much data do I need?' The honest answer is that it depends on the prediction problem — but for most enterprise operational prediction problems, the volume threshold is lower than people expect.",
      "For a customer churn prediction model, 500–1,000 labeled examples (customers who churned and customers who didn't) are typically sufficient to build a model with useful predictive power. For a demand forecasting model, 12–18 months of daily observations is usually adequate for the primary seasonal cycles to be captured. For an equipment failure prediction model, the requirement is typically 50+ examples of each failure type — which most organizations with mature operations have in their maintenance history.",
      "The organizations that are data-volume constrained for predictive analytics are genuine exceptions — early-stage companies, recently launched product lines, or use cases involving rare events. Most established enterprises have sufficient historical data for their highest-priority prediction problems.",
      "**Data Quality Is Domain-Specific**",
      "The other common data readiness concern is data quality. And data quality absolutely matters — models trained on systematically incorrect or incomplete data will produce systematically incorrect predictions. But the relevant question is not whether your data is perfect. It is whether the data required for your specific prediction target meets the quality threshold for reliable model training.",
      "This is a domain-specific question, not an enterprise-wide one. You might have poor data quality in your customer master records while having excellent data quality in your transaction logs. The former matters a great deal for a customer segmentation model. It matters not at all for a transaction anomaly detection model.",
      "Start with a data quality assessment focused on the specific features your prediction problem requires — not a comprehensive enterprise data quality review. You'll almost always find that the data required for a focused, high-value prediction problem is more ready than the enterprise picture suggests.",
      "**The Right Starting Point**",
      "If you're waiting for an enterprise data program to complete before beginning predictive analytics, the advice is simple: don't. Identify your highest-priority prediction problem, define the specific data requirements for that problem, assess the readiness of that specific data, and build the model. The enterprise data program will never be finished — enterprise data is a continuously evolving asset. The organizations that succeed with predictive analytics begin building capability before conditions are perfect, and improve both the data and the models iteratively.",
      "The prediction value you will generate in the next 12 months by starting now almost certainly exceeds the incremental accuracy improvement you would achieve by waiting for perfect conditions.",
    ],
    related: ["intercompany-ai-organizations", "process-mining-enterprise-guide", "ai-implementation-failure-modes"],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | ACG Insights`,
    description: article.excerpt,
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const relatedArticles = article.related
    .map((s) => articles[s])
    .filter(Boolean);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 acg-hero-gradient" />
        <div className="absolute inset-0 acg-grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1565c0]/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/insights" className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors flex items-center gap-1.5">
                <ArrowLeft className="w-3 h-3" />
                AI Insights
              </Link>
              <span className="text-[#475569]">/</span>
              <span className="text-xs text-[#0ea5e9]">{article.category}</span>
            </div>
            <span className="inline-block px-3 py-1.5 rounded-lg bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-semibold uppercase tracking-wide mb-5">
              {article.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5">
              <span className="text-[#64748b] text-sm">Augmentation Consulting Group</span>
              <span className="text-[#475569] text-sm">{article.date}</span>
              <div className="flex items-center gap-1.5 text-[#475569] text-sm">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content + Sidebar */}
      <section className="relative py-16 lg:py-24 bg-[#050e1d] overflow-hidden">
        <div className="absolute inset-0 acg-dot-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Article Body */}
            <article className="flex-1 min-w-0">
              <div className="prose prose-invert max-w-none">
                {article.content.map((paragraph, i) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <h2 key={i} className="text-white font-bold text-xl mt-10 mb-4">
                        {paragraph.replace(/\*\*/g, "")}
                      </h2>
                    );
                  }
                  // Handle inline bold
                  const parts = paragraph.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p key={i} className="text-[#94a3b8] text-base leading-relaxed mb-5">
                      {parts.map((part, j) =>
                        j % 2 === 1 ? (
                          <strong key={j} className="text-white font-semibold">
                            {part}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                })}
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-white/[0.06]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-1">Published by</p>
                    <p className="text-white text-sm font-medium">Augmentation Consulting Group</p>
                  </div>
                  <Link
                    href="/book-consultation"
                    className="inline-flex items-center gap-2 acg-btn-primary text-white font-semibold px-6 py-2.5 rounded-xl text-sm"
                  >
                    <span className="relative z-10">Discuss This With Our Team</span>
                    <ArrowRight className="w-4 h-4 relative z-10" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0 space-y-6">
              {/* Related Articles */}
              <div className="acg-card rounded-2xl p-6 sticky top-24">
                <p className="text-xs text-[#0ea5e9] uppercase tracking-wider font-semibold mb-5">Related Articles</p>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link key={related.slug} href={`/insights/${related.slug}`} className="block group">
                      <div className="p-3 rounded-xl hover:bg-white/[0.04] transition-colors">
                        <span className="inline-block px-2 py-0.5 rounded-md bg-[#0ea5e9]/10 border border-[#0ea5e9]/15 text-[#0ea5e9] text-[10px] font-semibold uppercase tracking-wide mb-2">
                          {related.category}
                        </span>
                        <p className="text-white text-xs font-semibold leading-snug mb-1 group-hover:text-[#90caf9] transition-colors">
                          {related.title}
                        </p>
                        <div className="flex items-center gap-1 text-[#475569] text-xs">
                          <Clock className="w-2.5 h-2.5" />
                          {related.readTime}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/[0.05]">
                  <Link
                    href="/insights"
                    className="inline-flex items-center gap-1.5 text-xs text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium"
                  >
                    View All Insights
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* CTA Card */}
              <div className="acg-card acg-border-glow rounded-2xl p-6">
                <p className="text-white font-bold text-base mb-3">Ready to Apply These Ideas?</p>
                <p className="text-[#64748b] text-xs leading-relaxed mb-4">
                  Our team works with enterprise organizations to implement the operational AI
                  strategies discussed in this article.
                </p>
                <Link href="/book-consultation" className="block">
                  <div className="acg-btn-primary rounded-xl py-2.5 text-center text-sm font-semibold text-white relative">
                    <span className="relative z-10">Book a Strategy Call</span>
                  </div>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
}
