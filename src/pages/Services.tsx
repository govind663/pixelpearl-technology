import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MessageCircle, Globe, Code2, Cloud, Bot, ShieldCheck, Megaphone, Newspaper, BookOpen } from "lucide-react";
import Seo, { breadcrumbJsonLd } from "../components/Seo";
import Reveal from "../components/Reveal";
import { SectionHead, PageHero, CtaBand } from "../components/Shared";
import { whatsappLink } from "../lib/site";
import { SERVICES } from "../data/content";

const ICONS: Record<string, typeof Globe> = {
  "web-development": Globe,
  "software-development": Code2,
  "ai-automation": Bot,
  "cloud-hosting": Cloud,
  cybersecurity: ShieldCheck,
  "digital-marketing": Megaphone,
  "media-pr": Newspaper,
  publishing: BookOpen,
};

export default function Services() {
  return (
    <main id="main">
      <Seo
        title="Our Services | Web, Software, AI, Cloud, Security, Media & Publishing — Pixelpearl"
        description="Explore Pixelpearl Technologies' services: web development, custom software, AI & automation, cloud & hosting, cybersecurity, digital marketing, media & PR and publishing in Navi Mumbai."
        path="/services"
        jsonLd={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])}
      />
      <PageHero
        breadcrumb={[{ label: "Services" }]}
        h1="Services Designed Around Business Needs"
        intro="Eight connected capabilities across technology, digital, media and publishing. Start with the most pressing need — expand as value is proven."
      >
        <Link to="/contact" className="btn-primary min-h-[52px]">Discuss Your Requirement <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
        <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
      </PageHero>
      <section aria-label="All services" className="py-14 sm:py-20 bg-mist-50 dark:bg-[#060f22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="What we do" title="Practical services, clearly scoped" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.slug] ?? Globe;
              return (
                <Reveal key={s.slug} delay={Math.min(i * 60, 240)}>
                  <article className="card-hover h-full rounded-3xl border hairline bg-white dark:bg-[#0b1c38] p-7 sm:p-8 hover:shadow-[0_24px_50px_-20px_rgba(29,78,216,0.4)] hover:border-royal-600/40 flex flex-col">
                    <span className="w-13 h-13 w-[52px] h-[52px] grid place-items-center rounded-2xl text-white" style={{ background: i % 2 ? "linear-gradient(135deg,#0eaba9,#2563eb)" : "linear-gradient(135deg,#1d4ed8,#06b6d4)" }}><Icon className="w-6 h-6" aria-hidden="true" /></span>
                    <h2 className="font-display mt-4 text-[20px] sm:text-[22px] font-extrabold tracking-tight text-slate-900 dark:text-white">{s.short}</h2>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600 dark:text-slate-300 flex-1">{s.description}</p>
                    <span className="mt-6 flex flex-col sm:flex-row gap-2.5">
                      <Link to={`/services/${s.slug}`} className="btn-navy flex-1 min-h-[50px] !text-[14px]">Learn More <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
                      <a href={whatsappLink(`Hello Pixelpearl Technologies, I would like to discuss a business requirement. Service: ${s.short}.`)} target="_blank" rel="noopener" className="btn-whatsapp flex-1 min-h-[50px] !text-[14px]"><MessageCircle className="w-4 h-4" aria-hidden="true" /> Enquire</a>
                    </span>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <div className="pb-14 sm:pb-20 bg-mist-50 dark:bg-[#060f22]"><CtaBand /></div>
    </main>
  );
}
