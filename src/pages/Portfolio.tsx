import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, FolderOpen, Phone } from "lucide-react";
import Seo, { breadcrumbJsonLd } from "../components/Seo";
import Reveal from "../components/Reveal";
import { PageHero, CtaBand } from "../components/Shared";
import { COMPANY, whatsappLink } from "../lib/site";

export default function Portfolio() {
  const wa = whatsappLink();
  return (
    <main id="main">
      <Seo
        title="Portfolio | Pixelpearl Technologies, Navi Mumbai"
        description="Selected work from Pixelpearl Technologies, a technology, digital, media and publishing solutions company in Ghansoli, Navi Mumbai."
        path="/portfolio"
        jsonLd={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }])}
      />
      <PageHero
        breadcrumb={[{ label: "Portfolio" }]}
        h1="Selected Work"
        intro="A showcase of representative engagements across web, software, AI, cloud, marketing, media and publishing."
      >
        <Link to="/contact" className="btn-primary min-h-[52px]">Discuss Your Requirement <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
        <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
      </PageHero>
      <section aria-label="Portfolio" className="py-16 sm:py-24 bg-mist-50 dark:bg-[#060f22]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Reveal variant="scale" className="rounded-3xl border hairline bg-white dark:bg-[#0b1c38] p-10 sm:p-14">
            <span className="mx-auto w-16 h-16 grid place-items-center rounded-2xl text-white" style={{ background: "linear-gradient(135deg,#1d4ed8,#0eaba9)" }}>
              <FolderOpen className="w-8 h-8" aria-hidden="true" />
            </span>
            <h2 className="font-display mt-6 text-[24px] sm:text-[30px] font-extrabold text-slate-900 dark:text-white">Selected projects will be showcased here.</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl mx-auto">We do not publish invented case studies. If you would like to understand our approach, the best next step is a conversation about your requirement.</p>
            <span className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn-primary min-h-[52px]">Talk to Our Team</Link>
              <a href={COMPANY.primaryPhoneHref} className="btn-outline min-h-[52px]"><Phone className="w-[18px] h-[18px]" aria-hidden="true" /> {COMPANY.phones[0].label}</a>
            </span>
          </Reveal>
        </div>
      </section>
      <div className="pb-14 sm:pb-20 bg-mist-50 dark:bg-[#060f22]"><CtaBand /></div>
    </main>
  );
}
