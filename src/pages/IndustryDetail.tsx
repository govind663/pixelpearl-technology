import { Link, useParams } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone, CheckCircle2, ListChecks } from "lucide-react";
import Seo, { breadcrumbJsonLd } from "../components/Seo";
import Reveal from "../components/Reveal";
import LeadForm from "../components/LeadForm";
import FaqList from "../components/Faq";
import Breadcrumb from "../components/Breadcrumb";
import { Eyebrow } from "../components/Shared";
import { INDUSTRIES, PROFESSIONAL_SERVICES } from "../data/content";
import { COMPANY, whatsappLink } from "../lib/site";
import NotFound from "./NotFound";

export default function IndustryDetail() {
  const { slug } = useParams();
  const all = [...INDUSTRIES, PROFESSIONAL_SERVICES];
  const ind = all.find((x) => x.slug === slug);
  if (!ind) return <NotFound />;
  const wa = whatsappLink(`Hello Pixelpearl Technologies, I would like to discuss a business requirement. Industry: ${ind.name}.`);
  const others = all.filter((x) => x.slug !== ind.slug).slice(0, 4);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ind.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <main id="main">
      <Seo title={ind.title} description={ind.description} path={`/industries/${ind.slug}`} jsonLd={[faqLd, breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }, { name: ind.name, path: `/industries/${ind.slug}` }])]} />
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(180deg,#0A1930 0%,#10254a 70%,#14305e 100%)" }}>
        <div className="absolute inset-0 bg-blueprint-dark opacity-70" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
          <Breadcrumb tone="light" items={[{ label: "Industries", to: "/industries" }, { label: ind.name }]} />
          <p className="eyebrow text-cyan-300 mt-6">Industries — {ind.name}</p>
          <h1 className="font-display mt-4 max-w-3xl text-[30px] sm:text-[44px] leading-[1.08] font-extrabold tracking-tight text-white text-balance">Technology Solutions for {ind.name}</h1>
          <p className="mt-4 max-w-2xl text-[15.5px] sm:text-[17px] leading-relaxed text-slate-300">{ind.description}</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary min-h-[52px]">Discuss Your Requirement <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
            <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
            <a href={COMPANY.primaryPhoneHref} className="inline-flex items-center justify-center gap-2 min-h-[52px] font-semibold text-[15px] px-[26px] rounded-xl border-[1.5px] border-white/30 text-white hover:border-cyan-300 hover:bg-white/5 transition-colors"><Phone className="w-[18px] h-[18px]" aria-hidden="true" /> {COMPANY.phones[0].label}</a>
          </div>
        </div>
        <div className="relative h-[3px] flex" aria-hidden="true"><span className="flex-1" style={{ background: "#2563eb" }} /><span className="flex-1" style={{ background: "#06b6d4" }} /><span className="flex-1" style={{ background: "#0eaba9" }} /></div>
      </div>

      <section aria-label="Overview" className="py-12 sm:py-16 bg-white dark:bg-[#081426]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <div className="mt-4 space-y-4 text-[15px] sm:text-[16.5px] leading-relaxed text-slate-600 dark:text-slate-300">
              {ind.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby={`${ind.slug}-ch`} className="py-12 sm:py-16 bg-mist-50 dark:bg-[#060f22] border-y hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow>Challenges</Eyebrow>
            <h2 id={`${ind.slug}-ch`} className="font-display mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 dark:text-white">What {ind.name.toLowerCase()} businesses struggle with</h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {ind.challenges.map((c, i) => (
              <Reveal key={c.title} delay={Math.min(i * 70, 210)}>
                <article className="h-full rounded-2xl border hairline bg-white dark:bg-[#0b1c38] p-6">
                  <h3 className="font-display font-bold text-[16px] text-slate-900 dark:text-white">{c.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{c.text}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby={`${ind.slug}-focus`} className="py-12 sm:py-16 bg-white dark:bg-[#081426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow tone="teal">Where we focus</Eyebrow>
            <h2 id={`${ind.slug}-focus`} className="font-display mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 dark:text-white">How we help {ind.name.toLowerCase()} businesses</h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {ind.focus.map((f, i) => (
              <Reveal key={f.title} delay={Math.min(i * 60, 180)}>
                <article className="h-full rounded-2xl border hairline bg-mist-50 dark:bg-white/[0.04] p-6 flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 dark:text-teal-300 shrink-0" aria-hidden="true" />
                  <span><h3 className="font-display font-bold text-[16px] text-slate-900 dark:text-white">{f.title}</h3><p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{f.text}</p></span>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby={`${ind.slug}-faq`} className="py-12 sm:py-16 bg-mist-50 dark:bg-[#060f22] border-y hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal><Eyebrow>FAQ</Eyebrow>
            <h2 id={`${ind.slug}-faq`} className="font-display mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 dark:text-white">Questions from {ind.name.toLowerCase()} businesses</h2>
          </Reveal>
          <div className="mt-8"><FaqList idPrefix={ind.slug} faqs={ind.faqs} /></div>
        </div>
      </section>

      <section aria-label="Other industries" className="py-12 sm:py-16 bg-white dark:bg-[#081426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <span>
              <Eyebrow>Keep exploring</Eyebrow>
              <span className="font-display block mt-3 text-[22px] sm:text-[28px] font-extrabold tracking-tight text-slate-900 dark:text-white">Other industries</span>
            </span>
            <Link to="/industries" className="inline-flex items-center gap-2 font-bold text-[14.5px] text-royal-600 dark:text-cyan-300">All industries <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
          </Reveal>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Reveal key={o.slug}>
                <Link to={`/industries/${o.slug}`} className="card-hover flex items-center justify-between gap-3 rounded-2xl border hairline bg-mist-50 dark:bg-white/[0.04] p-5 font-display font-bold text-[15px] text-slate-900 dark:text-white hover:border-royal-600/40 min-h-[68px]">{o.name} <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" /></Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Enquire" className="py-12 sm:py-16 bg-mist-50 dark:bg-[#060f22] border-t hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Reveal variant="left">
            <Eyebrow>Get started</Eyebrow>
            <h2 className="font-display mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">Talk to us about your {ind.name.toLowerCase()} requirement</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">Tell us what you are trying to build, improve or solve. Our team can help you explore the right digital approach.</p>
            <ul className="mt-5 space-y-2.5">
              {[`Direct line: ${COMPANY.phones[0].label}`, `Email: ${COMPANY.email}`].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14.5px] font-medium text-slate-700 dark:text-slate-200"><ListChecks className="w-5 h-5 text-royal-600 dark:text-cyan-300 shrink-0" aria-hidden="true" /> {t}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={COMPANY.primaryPhoneHref} className="btn-navy min-h-[52px]"><Phone className="w-[18px] h-[18px]" aria-hidden="true" /> Call Now</a>
              <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
            </div>
          </Reveal>
          <Reveal variant="right"><LeadForm id={`${ind.slug}-enquiry`} title="Let’s Discuss Your Requirement" /></Reveal>
        </div>
      </section>
    </main>
  );
}
