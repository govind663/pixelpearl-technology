import { Link, useParams } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone, CheckCircle2, AlertCircle, Lightbulb, ListChecks, Quote } from "lucide-react";
import Seo, { breadcrumbJsonLd } from "../components/Seo";
import Reveal from "../components/Reveal";
import LeadForm from "../components/LeadForm";
import FaqList from "../components/Faq";
import Breadcrumb from "../components/Breadcrumb";
import { Eyebrow } from "../components/Shared";
import { SERVICES } from "../data/content";
import { COMPANY, whatsappLink } from "../lib/site";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <NotFound />;
  const wa = whatsappLink(`Hello Pixelpearl Technologies, I would like to discuss a business requirement. Service: ${service.short}.`);
  const related = service.related.map((r) => SERVICES.find((s) => s.slug === r)!).filter(Boolean);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({"@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.short,
    provider: { "@type": "Organization", name: COMPANY.name, url: COMPANY.website + "/" },
    areaServed: "Navi Mumbai, Maharashtra, India",
    url: `${COMPANY.website}/services/${service.slug}`,
    description: service.description,
  };
  return (
    <main id="main">
      <Seo title={service.title} description={service.description} path={`/services/${service.slug}`} jsonLd={[serviceLd, faqLd, breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.short, path: `/services/${service.slug}` }])]} />
      {/* Breadcrumb + H1 hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(180deg,#0A1930 0%,#10254a 70%,#14305e 100%)" }}>
        <div className="absolute inset-0 bg-blueprint-dark opacity-70" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
          <Breadcrumb tone="light" items={[{ label: "Services", to: "/services" }, { label: service.short }]} />
          <p className="eyebrow text-cyan-300 mt-6">Services — {service.short}</p>
          <h1 className="font-display mt-4 max-w-3xl text-[30px] sm:text-[44px] leading-[1.08] font-extrabold tracking-tight text-white text-balance">{service.h1}</h1>
          <p className="mt-4 max-w-2xl text-[15.5px] sm:text-[17px] leading-relaxed text-slate-300">{service.description}</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary min-h-[52px]">Discuss Your Requirement <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
            <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
            <a href={COMPANY.primaryPhoneHref} className="inline-flex items-center justify-center gap-2 min-h-[52px] font-semibold text-[15px] px-[26px] rounded-xl border-[1.5px] border-white/30 text-white hover:border-cyan-300 hover:bg-white/5 transition-colors"><Phone className="w-[18px] h-[18px]" aria-hidden="true" /> {COMPANY.phones[0].label}</a>
          </div>
        </div>
        <div className="relative h-[3px] flex" aria-hidden="true"><span className="flex-1" style={{ background: "#2563eb" }} /><span className="flex-1" style={{ background: "#06b6d4" }} /><span className="flex-1" style={{ background: "#0eaba9" }} /></div>
      </div>

      {/* Introduction */}
      <section aria-label="Introduction" className="py-12 sm:py-16 bg-white dark:bg-[#081426]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <Eyebrow>Introduction</Eyebrow>
            <div className="mt-4 space-y-4 text-[15px] sm:text-[16.5px] leading-relaxed text-slate-600 dark:text-slate-300">
              {service.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problems */}
      <section aria-labelledby={`${service.slug}-problems`} className="py-12 sm:py-16 bg-mist-50 dark:bg-[#060f22] border-y hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow>Problems we solve</Eyebrow>
            <h2 id={`${service.slug}-problems`} className="font-display mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 dark:text-white">Common challenges businesses face</h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.problems.map((p, i) => (
              <Reveal key={p.title} delay={Math.min(i * 60, 240)}>
                <article className="h-full rounded-2xl border border-red-200 dark:border-red-900/50 bg-white dark:bg-[#0b1c38] p-6">
                  <AlertCircle className="w-6 h-6 text-red-500" aria-hidden="true" />
                  <h3 className="font-display mt-3 font-bold text-[15.5px] text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions */}
      <section aria-labelledby={`${service.slug}-solutions`} className="py-12 sm:py-16 bg-white dark:bg-[#081426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow tone="teal">Solutions</Eyebrow>
            <h2 id={`${service.slug}-solutions`} className="font-display mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 dark:text-white">What we provide</h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.solutions.map((p, i) => (
              <Reveal key={p.title} delay={Math.min(i * 60, 180)}>
                <article className="h-full rounded-2xl border hairline bg-mist-50 dark:bg-white/[0.04] p-6 sm:p-7 card-hover hover:shadow-lg flex gap-4">
                  <span className="shrink-0 w-11 h-11 grid place-items-center rounded-xl text-white" style={{ background: "linear-gradient(135deg,#1d4ed8,#0eaba9)" }}><Lightbulb className="w-5 h-5" aria-hidden="true" /></span>
                  <span><h3 className="font-display font-bold text-[16px] text-slate-900 dark:text-white">{p.title}</h3><p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{p.text}</p></span>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section aria-labelledby={`${service.slug}-benefits`} className="py-12 sm:py-16 text-white" style={{ background: "linear-gradient(135deg,#0A1930,#1a3560)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Reveal variant="left">
            <Eyebrow tone="light">Benefits</Eyebrow>
            <h2 id={`${service.slug}-benefits`} className="font-display mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight">What changes for your business</h2>
            <p className="mt-3 text-slate-300 text-[15px] leading-relaxed">Practical outcomes you can feel — in enquiries, workload and confidence — not technical promises.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> Discuss on WhatsApp</a>
              <a href={COMPANY.primaryPhoneHref} className="inline-flex items-center justify-center gap-2 min-h-[52px] font-semibold text-[15px] px-[26px] rounded-xl border-[1.5px] border-white/30 text-white hover:border-cyan-300 transition-colors"><Phone className="w-[18px] h-[18px]" aria-hidden="true" /> Call Now</a>
            </div>
          </Reveal>
          <Reveal variant="right">
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-[14px] font-medium leading-relaxed"><CheckCircle2 className="w-5 h-5 text-teal-300 shrink-0" aria-hidden="true" /> {b}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Use cases */}
      <section aria-labelledby={`${service.slug}-usecases`} className="py-12 sm:py-16 bg-white dark:bg-[#081426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow>Use cases</Eyebrow>
            <h2 id={`${service.slug}-usecases`} className="font-display mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 dark:text-white">Where this helps most</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.useCases.map((u, i) => (
              <Reveal key={u.title} delay={Math.min(i * 70, 210)}>
                <article className="h-full rounded-2xl border hairline bg-mist-50 dark:bg-white/[0.04] p-6">
                  <Quote className="w-6 h-6 text-royal-600 dark:text-cyan-300" aria-hidden="true" />
                  <h3 className="font-display mt-3 font-bold text-[15.5px] text-slate-900 dark:text-white">{u.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{u.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby={`${service.slug}-process`} className="py-12 sm:py-16 bg-mist-50 dark:bg-[#060f22] border-y hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow>Process</Eyebrow>
            <h2 id={`${service.slug}-process`} className="font-display mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 dark:text-white">How we deliver</h2>
          </Reveal>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-7 lg:gap-0 lg:divide-x divide-slate-200 dark:divide-white/10 rounded-2xl border hairline bg-white dark:bg-[#0b1c38] overflow-hidden">
            {service.process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={Math.min(i * 50, 250)} className="p-5 text-center lg:text-left">
                <span className="font-display text-[13px] font-extrabold tracking-[0.18em] text-royal-600 dark:text-cyan-300">0{i + 1}</span>
                <span className="block font-display font-bold text-[14.5px] text-slate-900 dark:text-white mt-1">{p.title}</span>
                <span className="block mt-1.5 text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300">{p.text}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby={`${service.slug}-faq`} className="py-12 sm:py-16 bg-white dark:bg-[#081426]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <h2 id={`${service.slug}-faq`} className="font-display mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 dark:text-white">Frequently asked questions</h2>
          </Reveal>
          <div className="mt-8"><FaqList idPrefix={service.slug} faqs={service.faqs} /></div>
        </div>
      </section>

      {/* Related */}
      <section aria-label="Related services" className="py-12 sm:py-16 bg-mist-50 dark:bg-[#060f22] border-t hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <span>
              <Eyebrow>Keep exploring</Eyebrow>
              <span className="font-display block mt-3 text-[22px] sm:text-[28px] font-extrabold tracking-tight text-slate-900 dark:text-white">Related services</span>
            </span>
            <Link to="/services" className="inline-flex items-center gap-2 font-bold text-[14.5px] text-royal-600 dark:text-cyan-300">All services <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
          </Reveal>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Reveal key={r.slug}>
                <Link to={`/services/${r.slug}`} className="card-hover flex items-center justify-between gap-3 rounded-2xl border hairline bg-white dark:bg-[#0b1c38] p-5 font-display font-bold text-[15px] text-slate-900 dark:text-white hover:border-royal-600/40 min-h-[68px]">
                  {r.short} <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Lead CTA */}
      <section aria-label="Enquire about this service" className="py-12 sm:py-16 bg-mist-50 dark:bg-[#060f22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Reveal variant="left">
            <Eyebrow>Get started</Eyebrow>
            <h2 className="font-display mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">Discuss your {service.short.toLowerCase()} requirement</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">Tell us what you are trying to build, improve or solve. Our team can help you explore the right approach — over a call, on WhatsApp or by email.</p>
            <ul className="mt-5 space-y-2.5">
              {[`Direct line: ${COMPANY.phones[0].label}`, `Email: ${COMPANY.email}`, COMPANY.locality].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14.5px] font-medium text-slate-700 dark:text-slate-200"><ListChecks className="w-5 h-5 text-royal-600 dark:text-cyan-300 shrink-0" aria-hidden="true" /> {t}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={COMPANY.primaryPhoneHref} className="btn-navy min-h-[52px]"><Phone className="w-[18px] h-[18px]" aria-hidden="true" /> Call Now</a>
              <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
            </div>
          </Reveal>
          <Reveal variant="right"><LeadForm id={`${service.slug}-enquiry`} presetService={service.short} title="Let’s Discuss Your Requirement" /></Reveal>
        </div>
      </section>
    </main>
  );
}
