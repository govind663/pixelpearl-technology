import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone, CheckCircle2, Newspaper, BookOpen, Megaphone, FileText, Users, Library, PenLine, RefreshCcw } from "lucide-react";
import Seo, { breadcrumbJsonLd } from "../components/Seo";
import Reveal from "../components/Reveal";
import LeadForm from "../components/LeadForm";
import FaqList from "../components/Faq";
import { SectionHead, PageHero, CtaBand } from "../components/Shared";
import { COMPANY, whatsappLink } from "../lib/site";

export default function MediaPublishing() {
  const wa = whatsappLink("Hello Pixelpearl Technologies, I would like to discuss a business requirement. Service: Media & Publishing.");
  return (
    <main id="main">
      <Seo
        title="Media & Publishing Solutions in Navi Mumbai | Pixelpearl Technologies"
        description="Pixelpearl Technologies supports digital media, PR, brand communication, journals, research publications, books, corporate publications and editorial workflows in Navi Mumbai."
        path="/media-publishing"
        jsonLd={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Media & Publishing", path: "/media-publishing" }])}
      />
      <PageHero
        breadcrumb={[{ label: "Media & Publishing" }]}
        h1="Media & Publishing That Strengthen Credibility"
        intro="Digital media, PR, brand communication, content support, journals, research publications, books, corporate publications, editorial workflows and periodicals — planned with the same care as our technology work."
      >
        <Link to="/contact" className="btn-primary min-h-[52px]">Discuss Your Requirement <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
        <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
      </PageHero>

      <section aria-labelledby="mp-media" className="py-14 sm:py-20 bg-white dark:bg-[#081426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="Digital media" title="Consistent communication, professionally managed" text="Announcements, profiles and updates that keep your business credible and discoverable — without noise." />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Newspaper, t: "Digital Media", d: "Structured announcements, profiles and updates planned around real business milestones." },
              { icon: Megaphone, t: "PR Support", d: "Press notes, backgrounders and outreach-ready materials prepared to professional standards." },
              { icon: Users, t: "Brand Communication", d: "Consistent messaging, leadership bios and company boilerplates used accurately everywhere." },
              { icon: FileText, t: "Content Support", d: "Service pages, articles and explainers that answer customer questions and support sales." },
              { icon: RefreshCcw, t: "Media Management", d: "Editorial calendars, asset organisation and publishing coordination across owned channels." },
              { icon: MessageCircle, t: "Enquiry Connection", d: "Every communication links back to clear call, WhatsApp and email paths." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={Math.min(i * 60, 240)}>
                <article className="h-full rounded-2xl border hairline bg-mist-50 dark:bg-white/[0.04] p-6 card-hover hover:shadow-lg">
                  <span className="w-11 h-11 grid place-items-center rounded-xl text-white" style={{ background: "linear-gradient(135deg,#1d4ed8,#0eaba9)" }}><c.icon className="w-5 h-5" aria-hidden="true" /></span>
                  <h3 className="font-display mt-4 font-bold text-[16px] text-slate-900 dark:text-white">{c.t}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{c.d}</p>
                </article>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/services/media-pr" className="btn-navy min-h-[52px]">Explore Media & PR <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
            <a href={whatsappLink("Hello Pixelpearl Technologies, I would like to discuss a business requirement. Service: Media & PR.")} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> Enquire on WhatsApp</a>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="mp-pub" className="py-14 sm:py-20 text-white" style={{ background: "linear-gradient(180deg,#0A1930,#10254a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead tone="light" eyebrow="Publishing" title="From manuscript to published work, without losing quality" text="Editorial workflows and digital publishing for journals, research, books and institutional titles." align="center" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Library, t: "Journals & Research", d: "Issue workflows, editorial checks and digital archives for institutions and societies." },
              { icon: BookOpen, t: "Books & Corporate Titles", d: "Structure, editorial coordination and production for books, reports and souvenirs." },
              { icon: PenLine, t: "Editorial & Author Support", d: "Guidelines, formatting standards and step-by-step assistance for authors and editors." },
              { icon: FileText, t: "Corporate Publications", d: "Reports, newsletters and institutional publications produced to a dependable standard." },
              { icon: RefreshCcw, t: "Periodicals", d: "Recurring issues managed on defined cycles with clear ownership and timelines." },
              { icon: CheckCircle2, t: "Digital Archives", d: "Structured, discoverable presentation so readers can find, access and cite issues." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={Math.min(i * 60, 240)}>
                <article className="h-full rounded-2xl border border-white/15 bg-white/[0.05] p-6 hover:border-cyan-300/40 transition-colors card-hover">
                  <c.icon className="w-7 h-7 text-cyan-300" aria-hidden="true" />
                  <h3 className="font-display mt-3 font-bold text-[16px]">{c.t}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-300">{c.d}</p>
                </article>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/services/publishing" className="inline-flex items-center justify-center gap-2 min-h-[52px] font-bold text-[15px] px-[26px] rounded-xl bg-white text-[#0A1930] hover:bg-cyan-100 transition-colors">Explore Publishing <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
            <a href={whatsappLink("Hello Pixelpearl Technologies, I would like to discuss a business requirement. Service: Publishing.")} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> Enquire on WhatsApp</a>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="mp-faq" className="py-14 sm:py-20 bg-white dark:bg-[#081426]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="Common questions" title="Media & publishing, answered plainly" align="center" />
          <div className="mt-8">
            <FaqList idPrefix="mp" faqs={[
              { q: "What media services do you provide?", a: "Digital media planning, PR assistance including press notes and backgrounders, brand communication, content support and media management across owned channels." },
              { q: "What publishing work do you support?", a: "Journals, research publications, books, corporate publications, reports, newsletters and periodicals — with editorial workflows, author support and digital publishing." },
              { q: "Do you guarantee media coverage?", a: "No. We prepare professional, accurate materials and support structured outreach. Editorial decisions always rest with publications." },
              { q: "Can first-time authors work with you?", a: "Yes. Author guidelines, preparation checklists and step-by-step support help new authors submit clean, complete manuscripts." },
              { q: "How do media and technology connect?", a: "Articles, journals and announcements gain lasting value when published on well-structured, discoverable digital platforms — which we also build and maintain." },
            ]} />
          </div>
        </div>
      </section>

      <section aria-label="Enquire" className="pb-14 sm:pb-20 bg-white dark:bg-[#081426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Reveal variant="left">
            <p className="eyebrow text-royal-600 dark:text-cyan-300">Get started</p>
            <h2 className="font-display mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">Discuss your media or publishing requirement</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">Tell us what you are trying to communicate or publish. Our team can help you explore the right approach.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={COMPANY.primaryPhoneHref} className="btn-navy min-h-[52px]"><Phone className="w-[18px] h-[18px]" aria-hidden="true" /> Call Now</a>
              <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
            </div>
          </Reveal>
          <Reveal variant="right"><LeadForm id="mp-enquiry" presetService="Media & PR" /></Reveal>
        </div>
      </section>

      <div className="pb-14 sm:pb-20 bg-white dark:bg-[#081426]"><CtaBand /></div>
    </main>
  );
}
