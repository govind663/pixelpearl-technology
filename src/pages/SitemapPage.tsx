import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Breadcrumb from "../components/Breadcrumb";
import { Eyebrow } from "../components/Shared";
import { SERVICES, INDUSTRIES, PROFESSIONAL_SERVICES } from "../data/content";

export default function SitemapPage() {
  const groups: { title: string; links: { label: string; to: string }[] }[] = [
    { title: "Main pages", links: [{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Services", to: "/services" }, { label: "Industries", to: "/industries" }, { label: "Media & Publishing", to: "/media-publishing" }, { label: "Insights", to: "/insights" }, { label: "Portfolio", to: "/portfolio" }, { label: "Contact", to: "/contact" }] },
    { title: "Services", links: SERVICES.map((s) => ({ label: s.short, to: `/services/${s.slug}` })) },
    { title: "Industries", links: [...INDUSTRIES, PROFESSIONAL_SERVICES].map((i) => ({ label: i.name, to: `/industries/${i.slug}` })) },
    { title: "Legal", links: [{ label: "Privacy Policy", to: "/privacy-policy" }, { label: "Terms & Conditions", to: "/terms-and-conditions" }, { label: "Cookie Policy", to: "/cookie-policy" }, { label: "Sitemap", to: "/sitemap" }] },
  ];
  return (
    <main id="main">
      <Seo title="Sitemap | Pixelpearl Technologies" description="Sitemap for Pixelpearl Technologies — all pages across services, industries, media & publishing, insights and contact." path="/sitemap" />
      <div className="bg-white dark:bg-[#081426] border-b hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumb items={[{ label: "Sitemap" }]} />
          <h1 className="font-display mt-4 text-[30px] sm:text-[40px] font-extrabold tracking-tight text-slate-900 dark:text-white">Sitemap</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Every page on this website, in one place.</p>
        </div>
      </div>
      <section aria-label="Sitemap" className="py-12 sm:py-16 bg-mist-50 dark:bg-[#060f22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <Reveal key={g.title}>
              <nav aria-label={g.title} className="h-full rounded-2xl border hairline bg-white dark:bg-[#0b1c38] p-6">
                <Eyebrow>{g.title}</Eyebrow>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.to + l.label}><Link to={l.to} className="group inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-slate-700 dark:text-slate-200 hover:text-royal-600 dark:hover:text-cyan-300">{l.label} <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" /></Link></li>
                  ))}
                </ul>
              </nav>
            </Reveal>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
          <Reveal className="rounded-2xl border hairline bg-white dark:bg-[#0b1c38] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="flex-1 text-[14.5px] text-slate-600 dark:text-slate-300">Looking for something specific? The fastest route is a conversation.</p>
            <Link to="/contact" className="btn-primary min-h-[50px] !text-[14px]">Contact Us <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
