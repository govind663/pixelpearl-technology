import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone, CheckCircle2, Building2, HeartPulse, GraduationCap, Factory, ShoppingBag, Sprout, Building, Rocket, Briefcase } from "lucide-react";
import Seo, { breadcrumbJsonLd } from "../components/Seo";
import Reveal from "../components/Reveal";
import { SectionHead, PageHero, CtaBand } from "../components/Shared";
import { whatsappLink } from "../lib/site";
import { INDUSTRIES, PROFESSIONAL_SERVICES } from "../data/content";

const ICONS: Record<string, typeof Building2> = {
  msme: Building2, healthcare: HeartPulse, education: GraduationCap, manufacturing: Factory,
  retail: ShoppingBag, agriculture: Sprout, "real-estate": Building, startups: Rocket,
  "professional-services": Briefcase,
};
const BLURBS: Record<string, string> = {
  msme: "Enquiry-ready websites, simple tools and local visibility that respect budgets and timelines.",
  healthcare: "Clear patient information, organised enquiries and dependable digital systems.",
  education: "Course clarity, admissions workflows and knowledge publishing for institutes.",
  manufacturing: "Industrial catalogues, RFQ discipline and operations visibility for B2B buyers.",
  retail: "Discovery-ready catalogues, local presence and enquiry loops that drive visits.",
  agriculture: "Phone-first clarity and coordination tools for collectives and agri-businesses.",
  "real-estate": "Credible project pages and site-visit workflows that protect high-intent demand.",
  startups: "Launch websites, focused MVPs and automation that respect runway.",
  "professional-services": "Authority websites, consultation paths and organised delivery for expert firms.",
};

export default function Industries() {
  const all = [...INDUSTRIES, PROFESSIONAL_SERVICES];
  return (
    <main id="main">
      <Seo
        title="Industries We Serve | MSME, Healthcare, Education & More — Pixelpearl"
        description="Pixelpearl Technologies serves MSMEs, healthcare, education, manufacturing, retail, agriculture, real estate, professional services and startups in Navi Mumbai and beyond."
        path="/industries"
        jsonLd={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])}
      />
      <PageHero
        breadcrumb={[{ label: "Industries" }]}
        h1="Technology Shaped Around Your Industry"
        intro="Different businesses buy, decide and operate differently. We shape websites, software, automation and visibility around the realities of your sector."
      >
        <Link to="/contact" className="btn-primary min-h-[52px]">Discuss Your Requirement <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
        <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
      </PageHero>
      <section aria-label="Industries" className="py-14 sm:py-20 bg-mist-50 dark:bg-[#060f22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="Who we help" title="Nine sectors, one practical approach" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {all.map((ind, i) => {
              const Icon = ICONS[ind.slug] ?? Building2;
              return (
                <Reveal key={ind.slug} delay={Math.min(i * 50, 250)}>
                  <article className="card-hover h-full rounded-3xl border hairline bg-white dark:bg-[#0b1c38] p-7 flex flex-col hover:shadow-[0_24px_50px_-20px_rgba(29,78,216,0.35)] hover:border-royal-600/40">
                    <span className="w-[52px] h-[52px] grid place-items-center rounded-2xl text-white" style={{ background: "linear-gradient(135deg,#1d4ed8,#0eaba9)" }}><Icon className="w-6 h-6" aria-hidden="true" /></span>
                    <h2 className="font-display mt-4 text-[19px] font-extrabold text-slate-900 dark:text-white">{ind.name}</h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300 flex-1">{BLURBS[ind.slug]}</p>
                    <span className="mt-5 flex gap-2.5">
                      <Link to={`/industries/${ind.slug}`} className="btn-navy flex-1 min-h-[48px] !text-[13.5px]">Learn More</Link>
                      <a href={whatsappLink(`Hello Pixelpearl Technologies, I would like to discuss a business requirement. Industry: ${ind.name}.`)} target="_blank" rel="noopener" aria-label={`Enquire for ${ind.name} on WhatsApp`} className="btn-whatsapp !px-4 min-h-[48px] !text-[13.5px]"><MessageCircle className="w-4 h-4" aria-hidden="true" /></a>
                    </span>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-10 rounded-2xl border hairline bg-white dark:bg-[#0b1c38] p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Phone className="w-8 h-8 text-royal-600 dark:text-cyan-300 shrink-0" aria-hidden="true" />
            <p className="text-[14.5px] text-slate-600 dark:text-slate-300 flex-1"><strong className="text-slate-900 dark:text-white">Not sure where you fit?</strong> Many businesses span sectors. Tell us what you do and we will shape the right mix of web, software, automation and visibility.</p>
            <span className="flex gap-2.5 shrink-0 w-full sm:w-auto">
              <Link to="/contact" className="btn-primary flex-1 sm:flex-none min-h-[50px] !text-[14px]">Talk to Our Team</Link>
            </span>
          </Reveal>
        </div>
      </section>
      <div className="pb-14 sm:pb-20 bg-mist-50 dark:bg-[#060f22]"><CtaBand /></div>
    </main>
  );
}
