import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone, CheckCircle2, Compass, Layers, MessagesSquare, TrendingUp, Search, Infinity as InfinityIcon } from "lucide-react";
import Seo, { orgJsonLd, breadcrumbJsonLd } from "../components/Seo";
import Reveal from "../components/Reveal";
import { SectionHead, Eyebrow, PageHero, CtaBand } from "../components/Shared";
import { COMPANY, whatsappLink } from "../lib/site";

export default function About() {
  const wa = whatsappLink();
  return (
    <main id="main">
      <Seo
        title="About Pixelpearl Technologies | Technology, Digital & Media Company in Navi Mumbai"
        description="Pixelpearl Technologies is a Navi Mumbai based technology, digital, AI, cloud, cybersecurity, media and publishing partner helping businesses build, automate and grow."
        path="/about"
        jsonLd={[orgJsonLd(), breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]}
      />
      <PageHero
        breadcrumb={[{ label: "About" }]}
        h1="Technology, Digital & Media — Connected Around Your Business"
        intro="Pixelpearl Technologies is a Navi Mumbai based technology, digital, AI, cloud, cybersecurity, media and publishing solutions company. We help businesses make practical decisions about technology — and follow through with dependable delivery."
      >
        <Link to="/contact" className="btn-primary min-h-[52px]">Discuss Your Requirement <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
        <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
      </PageHero>

      <section aria-labelledby="about-overview" className="py-14 sm:py-20 bg-white dark:bg-[#081426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <Reveal variant="left">
            <Eyebrow>Company overview</Eyebrow>
            <h2 id="about-overview" className="font-display mt-3 text-[26px] sm:text-[34px] font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">One partner across technology, digital, media and publishing</h2>
            <div className="mt-4 space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-slate-600 dark:text-slate-300">
              <p>Pixelpearl Technologies works from Ghansoli, Navi Mumbai, supporting MSMEs, healthcare providers, educators, manufacturers, retailers, agri-businesses, real-estate firms, professional services and startups. Our work spans web development, custom software, AI & automation, cloud & hosting, cybersecurity, digital marketing, media & PR and publishing.</p>
              <p>What connects these capabilities is a simple idea: a business website should feed enquiries; enquiries should flow into organised systems; systems should be supported by reliable infrastructure; and all of it should be visible, credible and discoverable. We plan these pieces together, so each investment strengthens the others.</p>
              <p>We describe our positioning plainly — <strong className="text-slate-900 dark:text-white">BUILD • AUTOMATE • GROW</strong>: build the right digital foundations, automate the work that slows teams down, and grow visibility and pipeline steadily.</p>
            </div>
          </Reveal>
          <Reveal variant="right" className="rounded-3xl border hairline bg-mist-50 dark:bg-white/[0.04] p-6 sm:p-8 lg:sticky lg:top-32">
            <h3 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">At a glance</h3>
            <dl className="mt-4 space-y-4 text-[14.5px]">
              <div><dt className="font-bold text-slate-900 dark:text-white">What we are</dt><dd className="mt-0.5 text-slate-600 dark:text-slate-300">Technology, digital, AI, cloud, cybersecurity, media and publishing solutions company.</dd></div>
              <div><dt className="font-bold text-slate-900 dark:text-white">Where we work from</dt><dd className="mt-0.5 text-slate-600 dark:text-slate-300">Ghansoli, Navi Mumbai, Maharashtra — serving businesses locally and beyond.</dd></div>
              <div><dt className="font-bold text-slate-900 dark:text-white">Who we help</dt><dd className="mt-0.5 text-slate-600 dark:text-slate-300">MSMEs, healthcare, education, manufacturing, retail, agriculture, real estate, professional services and startups.</dd></div>
              <div><dt className="font-bold text-slate-900 dark:text-white">How to reach us</dt><dd className="mt-1 flex flex-col gap-2"><a href={COMPANY.primaryPhoneHref} className="inline-flex items-center gap-2 font-bold text-royal-600 dark:text-cyan-300"><Phone className="w-4 h-4" aria-hidden="true" />{COMPANY.phones[0].label}</a><a href={COMPANY.emailHref} className="font-semibold break-all">{COMPANY.email}</a></dd></div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="about-cap" className="py-14 sm:py-20 bg-mist-50 dark:bg-[#060f22] border-y hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="Capabilities" title="Eight capabilities, one coherent plan" text="Start anywhere — a website, a workflow, a security review, a visibility push. We connect it to the rest as value is proven." align="center" />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Web Development", "Corporate and enquiry-ready websites.", "/services/web-development"],
              ["Software Development", "Portals, dashboards and platforms.", "/services/software-development"],
              ["AI & Automation", "Assistants and workflow automation.", "/services/ai-automation"],
              ["Cloud & Hosting", "Performance, backup and monitoring.", "/services/cloud-hosting"],
              ["Cybersecurity", "Reviews, hardening and hygiene.", "/services/cybersecurity"],
              ["Digital Marketing", "SEO and local visibility.", "/services/digital-marketing"],
              ["Media & PR", "Communication and credibility.", "/services/media-pr"],
              ["Publishing", "Journals, books and periodicals.", "/services/publishing"],
            ].map(([t, d, to], i) => (
              <Reveal key={t} delay={Math.min(i * 50, 250)}>
                <Link to={to} className="card-hover block h-full rounded-2xl border hairline bg-white dark:bg-[#0b1c38] p-5 hover:border-royal-600/40 hover:shadow-lg">
                  <span className="font-display font-bold text-[15.5px] text-slate-900 dark:text-white">{t}</span>
                  <span className="block mt-1 text-[13.5px] text-slate-600 dark:text-slate-300">{d}</span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-royal-600 dark:text-cyan-300">Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="about-phil" className="py-14 sm:py-20 bg-white dark:bg-[#081426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="Philosophy & approach" title="Practical technology, explained plainly" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Compass, t: "Business First", d: "Goals before tools. We ask what a better enquiry flow, calmer operations or stronger visibility would change — then recommend the simplest path there." },
              { icon: Search, t: "Practical Technology", d: "Proven, maintainable approaches over novelty. We say plainly when an existing tool, a small fix or a phased plan beats a rebuild." },
              { icon: Layers, t: "Integrated Capabilities", d: "Web, software, AI, cloud, security, marketing, media and publishing are planned together so nothing works in isolation." },
              { icon: InfinityIcon, t: "Scalable Architecture", d: "Structured content and data, documented setups and foundations that accommodate more users, pages and issues." },
              { icon: MessagesSquare, t: "Clear Communication", d: "Defined scope, honest timelines, regular reviews and a single point of accountability from discovery to support." },
              { icon: TrendingUp, t: "Long-Term Perspective", d: "Launch is the midpoint, not the finish. Maintenance, measurement and improvement are part of every serious engagement." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={Math.min(i * 60, 240)}>
                <article className="h-full rounded-2xl border hairline bg-mist-50 dark:bg-white/[0.04] p-6 card-hover hover:shadow-lg">
                  <span className="w-11 h-11 grid place-items-center rounded-xl text-white" style={{ background: "linear-gradient(135deg,#1d4ed8,#0eaba9)" }}><c.icon className="w-5 h-5" aria-hidden="true" /></span>
                  <h3 className="font-display mt-4 font-bold text-[16.5px] text-slate-900 dark:text-white">{c.t}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{c.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="about-media" className="py-14 sm:py-20 text-white" style={{ background: "linear-gradient(180deg,#0A1930,#10254a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-2 items-center">
          <Reveal variant="left">
            <Eyebrow tone="light">Media & publishing</Eyebrow>
            <h2 id="about-media" className="font-display mt-3 text-[26px] sm:text-[34px] font-extrabold tracking-tight text-balance">Technology and editorial under one roof</h2>
            <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-slate-300">Unlike firms that only build or only promote, Pixelpearl connects digital systems with media and publishing — journals, research publications, books, corporate publications, editorial support and periodicals — so credibility compounds alongside capability.</p>
            <Link to="/media-publishing" className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-200 hover:text-white hover:gap-3 transition-all">Explore Media & Publishing <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
          </Reveal>
          <Reveal variant="right">
            <ul className="grid sm:grid-cols-2 gap-3">
              {["Digital media & PR support", "Brand communication", "Journals & research", "Books & corporate titles", "Editorial & author support", "Periodicals & archives"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-[14px] font-semibold"><CheckCircle2 className="w-5 h-5 text-teal-300 shrink-0" aria-hidden="true" /> {t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="about-process" className="py-14 sm:py-20 bg-white dark:bg-[#081426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="Technology approach" title="Discover → Plan → Design → Develop → Test → Launch → Support" text="A defined journey with reviews at each stage. You always know what happens next and what good looks like." align="center" />
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-7 lg:gap-0 lg:divide-x divide-slate-200 dark:divide-white/10 rounded-2xl border hairline bg-mist-50 dark:bg-white/[0.03] overflow-hidden">
            {["Discover", "Plan", "Design", "Develop", "Test", "Launch", "Support"].map((s, i) => (
              <Reveal as="li" key={s} delay={Math.min(i * 60, 300)} className="p-5 text-center">
                <span className="font-display text-[24px] font-extrabold text-slate-300 dark:text-slate-600" aria-hidden="true">0{i + 1}</span>
                <span className="block font-display font-bold text-[15px] text-slate-900 dark:text-white mt-1">{s}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <div className="pb-14 sm:pb-20 bg-white dark:bg-[#081426]"><CtaBand title="Let’s talk about your requirement" text="Tell us what you are trying to build, improve or solve. Our team can help you explore the right digital approach." /></div>
    </main>
  );
}
