import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MessageCircle, Lightbulb, Compass, Search, Layers, Newspaper } from "lucide-react";
import Seo, { breadcrumbJsonLd } from "../components/Seo";
import Reveal from "../components/Reveal";
import { SectionHead, PageHero, CtaBand } from "../components/Shared";
import { whatsappLink } from "../lib/site";

const ARTICLES = [
  {
    slug: "choosing-right-technology-partner",
    tag: "Guidance",
    title: "How to Choose the Right Technology Partner for Your Business",
    excerpt: "What to ask, what to watch for and how to compare proposals — so a Navi Mumbai business can select a partner for websites, software or automation with confidence.",
    points: ["Start from business outcomes, not feature lists", "Ask how discovery, reviews and support actually work", "Compare clarity and ownership — not just price"],
  },
  {
    slug: "website-enquiry-foundations",
    tag: "Websites",
    title: "The Five Foundations of a Website That Generates Enquiries",
    excerpt: "Clear positioning, honest service pages, tap-friendly contact paths, local proof and measurement — the basics that turn visits into calls and WhatsApp chats.",
    points: ["One clear message above the fold", "Call, WhatsApp and forms on every key page", "Local relevance for Navi Mumbai searches"],
  },
  {
    slug: "ai-pilot-small-business",
    tag: "AI & Automation",
    title: "Starting with AI: A Practical First Pilot for Small Businesses",
    excerpt: "Pick one repetitive workflow, ground it in approved content, keep humans in charge — and measure before expanding. A calm, low-risk path into AI.",
    points: ["Choose a well-defined, repetitive workflow", "Ground answers in your own documents", "Review results before wider rollout"],
  },
  {
    slug: "cloud-backup-basics",
    tag: "Cloud & Security",
    title: "Backups, Updates and Monitoring: The Quiet Work That Protects Revenue",
    excerpt: "Why tested backups, disciplined updates and basic monitoring matter more than any single tool — and how to confirm yours are in place.",
    points: ["Know what is backed up, and how often", "Test a restore before you need one", "Assign clear ownership for updates"],
  },
  {
    slug: "local-visibility-navimumbai",
    tag: "Visibility",
    title: "Local Visibility in Navi Mumbai: Listings, Reviews and Location Pages",
    excerpt: "Accurate profiles, honest reviews and genuinely useful location content — the compounding foundations of being found by nearby customers.",
    points: ["Keep name, address and hours identical everywhere", "Respond to every review professionally", "Build pages that answer local questions"],
  },
  {
    slug: "publishing-credibility",
    tag: "Media & Publishing",
    title: "Publishing as Proof: Journals, Books and Reports That Build Trust",
    excerpt: "How institutions and expert firms turn knowledge into journals, books and reports — and why editorial discipline is the difference between noise and authority.",
    points: ["Start with one well-edited title", "Design the workflow before the manuscript", "Archive digitally for lasting discovery"],
  },
];

export default function Insights() {
  return (
    <main id="main">
      <Seo
        title="Insights | Practical Guides on Technology, AI, Cloud & Growth — Pixelpearl"
        description="Practical insights from Pixelpearl Technologies on choosing technology partners, enquiry-ready websites, AI pilots, cloud basics, local visibility and publishing in Navi Mumbai."
        path="/insights"
        jsonLd={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])}
      />
      <PageHero
        breadcrumb={[{ label: "Insights" }]}
        h1="Practical Thinking on Technology and Growth"
        intro="Short, honest guides for business owners — on choosing partners, improving websites, piloting AI, protecting infrastructure and building visibility. No hype, no jargon."
      >
        <Link to="/contact" className="btn-primary min-h-[52px]">Discuss Your Requirement <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
        <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
      </PageHero>
      <section aria-label="Articles" className="py-14 sm:py-20 bg-mist-50 dark:bg-[#060f22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="Insights" title="Guides worth your time" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.slug} delay={Math.min(i * 60, 240)}>
                <article className="card-hover h-full rounded-3xl border hairline bg-white dark:bg-[#0b1c38] p-7 flex flex-col hover:shadow-[0_24px_50px_-20px_rgba(29,78,216,0.35)] hover:border-royal-600/40">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-[0.14em] text-royal-600 dark:text-cyan-300">
                    {[Compass, Search, Layers, Lightbulb, Newspaper, Search][i % 6] && <Lightbulb className="w-4 h-4" aria-hidden="true" />} {a.tag}
                  </span>
                  <h2 className="font-display mt-3 text-[18px] font-extrabold leading-snug text-slate-900 dark:text-white">{a.title}</h2>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300 flex-1">{a.excerpt}</p>
                  <ul className="mt-4 space-y-1.5">
                    {a.points.map((p) => <li key={p} className="text-[13.5px] text-slate-600 dark:text-slate-300 flex gap-2"><span aria-hidden="true" className="text-teal-600 font-bold">•</span> {p}</li>)}
                  </ul>
                  <span className="mt-5 pt-4 border-t hairline flex items-center justify-between">
                    <Link to={`/insights/${a.slug}`} className="inline-flex items-center gap-1.5 text-[14px] font-bold text-royal-600 dark:text-cyan-300 hover:gap-2.5 transition-all">Read article <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
                    <a href={whatsappLink(`Hello Pixelpearl Technologies, I would like to discuss a business requirement. I read your article: ${a.title}.`)} target="_blank" rel="noopener" aria-label="Discuss this article on WhatsApp" className="text-slate-400 hover:text-[#128c4b] transition-colors"><MessageCircle className="w-5 h-5" aria-hidden="true" /></a>
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <div className="pb-14 sm:pb-20 bg-mist-50 dark:bg-[#060f22]"><CtaBand title="Want guidance on your situation?" text="Tell us what you are trying to build, improve or solve — we will help you think it through." /></div>
    </main>
  );
}

export function InsightArticleBody({ slug }: { slug: string }) {
  const a = ARTICLES.find((x) => x.slug === slug);
  if (!a) return null;
  return (
    <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-slate-600 dark:text-slate-300">
      <p>{a.excerpt}</p>
      <h2 className="font-display text-[20px] font-extrabold text-slate-900 dark:text-white pt-2">Why this matters</h2>
      <p>Most businesses do not suffer from a lack of options — they suffer from unclear starting points. Whether the topic is a website, an AI pilot, infrastructure or visibility, the businesses that progress fastest are the ones that define one outcome, start small and review honestly.</p>
      <h2 className="font-display text-[20px] font-extrabold text-slate-900 dark:text-white pt-2">What to do next</h2>
      <ul className="space-y-2">
        {a.points.map((p) => <li key={p} className="flex gap-2.5"><span aria-hidden="true" className="text-teal-600 font-bold">✓</span> {p}</li>)}
      </ul>
      <p>If you would like help applying this to your business in Ghansoli, Navi Mumbai or beyond, start with a conversation. Share what you are trying to build, improve or solve, and our team will help you explore a practical next step.</p>
    </div>
  );
}

export const INSIGHT_ARTICLES = ARTICLES;
