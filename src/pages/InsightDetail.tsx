import { Link, useParams } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import Seo, { breadcrumbJsonLd } from "../components/Seo";
import Reveal from "../components/Reveal";
import LeadForm from "../components/LeadForm";
import Breadcrumb from "../components/Breadcrumb";
import { Eyebrow } from "../components/Shared";
import { INSIGHT_ARTICLES, InsightArticleBody } from "./Insights";
import { COMPANY, whatsappLink } from "../lib/site";
import NotFound from "./NotFound";

export default function InsightDetail() {
  const { slug } = useParams();
  const a = INSIGHT_ARTICLES.find((x) => x.slug === slug);
  if (!a) return <NotFound />;
  const wa = whatsappLink(`Hello Pixelpearl Technologies, I would like to discuss a business requirement. I read your article: ${a.title}.`);
  const others = INSIGHT_ARTICLES.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <main id="main">
      <Seo title={`${a.title} | Pixelpearl Technologies Insights`} description={a.excerpt} path={`/insights/${a.slug}`} jsonLd={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: a.title, path: `/insights/${a.slug}` }])} />
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(180deg,#0A1930 0%,#10254a 70%,#14305e 100%)" }}>
        <div className="absolute inset-0 bg-blueprint-dark opacity-70" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
          <Breadcrumb tone="light" items={[{ label: "Insights", to: "/insights" }, { label: a.tag }]} />
          <p className="eyebrow text-cyan-300 mt-6">{a.tag}</p>
          <h1 className="font-display mt-4 text-[28px] sm:text-[40px] leading-[1.12] font-extrabold tracking-tight text-white text-balance">{a.title}</h1>
          <p className="mt-4 text-[15px] sm:text-[16.5px] leading-relaxed text-slate-300">{a.excerpt}</p>
        </div>
        <div className="relative h-[3px] flex" aria-hidden="true"><span className="flex-1" style={{ background: "#2563eb" }} /><span className="flex-1" style={{ background: "#06b6d4" }} /><span className="flex-1" style={{ background: "#0eaba9" }} /></div>
      </div>
      <section aria-label="Article" className="py-12 sm:py-16 bg-white dark:bg-[#081426]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal><InsightArticleBody slug={a.slug} /></Reveal>
          <Reveal className="mt-10 rounded-2xl border hairline bg-mist-50 dark:bg-white/[0.04] p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="flex-1">
              <strong className="font-display block text-[17px] text-slate-900 dark:text-white">Apply this to your business</strong>
              <span className="text-[14px] text-slate-600 dark:text-slate-300">Share your situation and we will help you explore a practical next step.</span>
            </span>
            <span className="flex gap-2.5 w-full sm:w-auto">
              <Link to="/contact" className="btn-primary flex-1 sm:flex-none min-h-[50px] !text-[14px]">Discuss Requirement</Link>
              <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp !px-4 min-h-[50px]"><MessageCircle className="w-4 h-4" aria-hidden="true" /></a>
            </span>
          </Reveal>
          <div className="mt-8"><LeadForm id={`insight-${a.slug}`} title="Let’s Discuss Your Requirement" /></div>
          {others.length > 0 && (
            <nav aria-label="More insights" className="mt-10">
              <Eyebrow>Keep reading</Eyebrow>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link to={`/insights/${o.slug}`} className="card-hover block h-full rounded-2xl border hairline bg-mist-50 dark:bg-white/[0.04] p-5 hover:border-royal-600/40">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-royal-600 dark:text-cyan-300">{o.tag}</span>
                      <span className="font-display block mt-1.5 font-bold text-[14.5px] leading-snug text-slate-900 dark:text-white">{o.title}</span>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-royal-600 dark:text-cyan-300">Read <ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <p className="mt-8 text-[13.5px] text-slate-500 dark:text-slate-400">Prefer to talk? <a className="underline font-semibold" href={COMPANY.primaryPhoneHref}>{COMPANY.phones[0].label}</a> · <a className="underline font-semibold" href={COMPANY.emailHref}>{COMPANY.email}</a></p>
        </div>
      </section>
    </main>
  );
}
