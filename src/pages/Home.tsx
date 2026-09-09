import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Phone, MessageCircle, Globe, Code2, Cloud, Bot,
  ShieldCheck, Megaphone, Newspaper, BookOpen, CheckCircle2, Building2, HeartPulse,
  GraduationCap, Factory, ShoppingBag, Sprout, Building, Rocket, Briefcase,
  Compass, Target, Layers, TrendingUp, MessagesSquare, Infinity as InfinityIcon,
  Search, Workflow, BarChart3
} from "lucide-react";
import Seo, { orgJsonLd, breadcrumbJsonLd } from "../components/Seo";
import Reveal from "../components/Reveal";
import LeadForm from "../components/LeadForm";
import FaqList from "../components/Faq";
import { SectionHead, Eyebrow, CtaBand } from "../components/Shared";
import { COMPANY, whatsappLink } from "../lib/site";

const SERVICE_CARDS = [
  { slug: "web-development", icon: Globe, title: "Web Development", text: "Fast, secure, mobile-first websites structured to explain your business and turn visits into enquiries." },
  { slug: "software-development", icon: Code2, title: "Software Development", text: "Custom portals, dashboards and platforms shaped around your workflows, roles and reporting needs." },
  { slug: "cloud-hosting", icon: Cloud, title: "Cloud & Hosting", text: "Right-sized hosting and cloud with performance, backups, monitoring and room to scale." },
  { slug: "ai-automation", icon: Bot, title: "AI & Automation", text: "Practical assistants, workflow automation and document support that remove repetitive work." },
  { slug: "cybersecurity", icon: ShieldCheck, title: "Cybersecurity", text: "Reviews, hardening and everyday safeguards that reduce exposure and strengthen trust." },
  { slug: "digital-marketing", icon: Megaphone, title: "Digital Marketing", text: "SEO, local visibility and content foundations that build steady, trackable enquiry pipelines." },
  { slug: "media-pr", icon: Newspaper, title: "Media & PR", text: "Consistent announcements, profiles and communication that strengthen credibility." },
  { slug: "publishing", icon: BookOpen, title: "Publishing", text: "Editorial workflows and digital publishing for journals, books and corporate titles." },
];

const INDUSTRIES = [
  { slug: "msme", icon: Building2, name: "MSME" },
  { slug: "healthcare", icon: HeartPulse, name: "Healthcare" },
  { slug: "education", icon: GraduationCap, name: "Education" },
  { slug: "manufacturing", icon: Factory, name: "Manufacturing" },
  { slug: "retail", icon: ShoppingBag, name: "Retail" },
  { slug: "agriculture", icon: Sprout, name: "Agriculture" },
  { slug: "real-estate", icon: Building, name: "Real Estate" },
  { slug: "professional-services", icon: Briefcase, name: "Professional Services" },
  { slug: "startups", icon: Rocket, name: "Startups" },
];

function HeroVisual() {
  return (
    <div className="relative" role="img" aria-label="Abstract illustration of connected technology systems supporting business growth">
      <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_40px_80px_-30px_rgba(3,10,26,0.7)]" style={{ background: "linear-gradient(150deg,#0A1930 0%,#12305e 55%,#1d4ed8 130%)" }}>
        <div className="absolute inset-0 bg-blueprint-dark opacity-70" aria-hidden="true" />
        <svg viewBox="0 0 560 480" className="relative w-full h-auto block" aria-hidden="true">
          <defs>
            <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#38bdf8" />
              <stop offset="1" stopColor="#0eaba9" />
            </linearGradient>
            <radialGradient id="hv-glow" cx="0.5" cy="0.42" r="0.55">
              <stop offset="0" stopColor="#2563eb" stopOpacity="0.55" />
              <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="280" cy="200" rx="220" ry="150" fill="url(#hv-glow)" />
          {/* connection mesh */}
          <g stroke="url(#hv-line)" strokeWidth="1.4" opacity="0.75" fill="none">
            <path d="M120 320 L210 230 L300 250 L390 170 L460 210" strokeDasharray="6 6" style={{ animation: "dashMove 3s linear infinite" }} />
            <path d="M110 180 L200 150 L280 200 L360 140 L455 165" opacity="0.5" />
            <path d="M210 230 L200 150 M300 250 L280 200 M390 170 L360 140 M300 250 L310 340 M210 230 L170 340" opacity="0.45" />
          </g>
          {/* nodes */}
          <g>
            {[
              [120, 320], [210, 230], [300, 250], [390, 170], [460, 210], [110, 180], [200, 150], [280, 200], [360, 140], [455, 165], [170, 340], [310, 340],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r={i % 4 === 0 ? 9 : 6} fill="#0A1930" stroke="#38bdf8" strokeWidth="2" />
                <circle cx={x} cy={y} r="2.4" fill="#7dd3fc" />
              </g>
            ))}
            <circle cx="300" cy="250" r="20" fill="#fff" opacity="0.95" />
            <circle cx="300" cy="250" r="20" fill="none" stroke="#0eaba9" strokeWidth="3" />
            <circle cx="294" cy="244" r="5" fill="#0A1930" opacity="0.15" />
          </g>
          {/* pillar bars */}
          <g>
            <rect x="120" y="370" width="90" height="10" rx="5" fill="#38bdf8" opacity="0.9" />
            <rect x="225" y="370" width="110" height="10" rx="5" fill="#0eaba9" opacity="0.9" />
            <rect x="350" y="370" width="90" height="10" rx="5" fill="#93c5fd" opacity="0.8" />
            <text x="120" y="408" fill="#cbd5e1" fontSize="15" fontWeight="700" letterSpacing="3">BUILD • AUTOMATE • GROW</text>
          </g>
        </svg>
        {/* floating glass cards */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 rounded-2xl bg-white/95 dark:bg-white/95 px-4 py-3 shadow-xl animate-float max-w-[210px]" aria-hidden="true">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Enquiry pipeline</p>
          <p className="font-display text-[15px] font-extrabold text-slate-900 mt-0.5">Call • WhatsApp • Forms</p>
          <span className="mt-2 flex items-center gap-1.5 text-[12px] font-bold text-teal-600"><CheckCircle2 className="w-3.5 h-3.5" /> Structured follow-up</span>
        </div>
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 rounded-2xl bg-white/95 px-4 py-3 shadow-xl animate-float max-w-[200px]" style={{ animationDelay: "-3s" }} aria-hidden="true">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Operations</p>
          <p className="font-display text-[15px] font-extrabold text-slate-900 mt-0.5">AI-assisted workflows</p>
          <span className="mt-2 block h-1.5 rounded-full bg-slate-200 overflow-hidden"><span className="block h-full w-3/4 rounded-full" style={{ background: "linear-gradient(90deg,#2563eb,#0eaba9)" }} /></span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const wa = whatsappLink();
  const jsonLd = [
    orgJsonLd(),
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: COMPANY.name,
      url: `${COMPANY.website}/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: COMPANY.name,
      url: `${COMPANY.website}/`,
      email: COMPANY.email,
      telephone: "+91-9820809883",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nav Durga Niwas, Plot No. 473, Sector 4, Ghansoli",
        addressLocality: "Navi Mumbai",
        postalCode: "400701",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    breadcrumbJsonLd([{ name: "Home", path: "/" }]),
  ];
  return (
    <main id="main">
      <Seo
        title="Pixelpearl Technologies | IT, Digital & Technology Solutions in Navi Mumbai"
        description="Pixelpearl Technologies provides web development, software, cloud, AI automation, cybersecurity, digital marketing, media and publishing solutions for businesses in Navi Mumbai and beyond."
        path="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section aria-label="Introduction" className="relative overflow-hidden" style={{ background: "linear-gradient(180deg,#060f22 0%,#0A1930 60%,#10254a 100%)" }}>
        <div className="absolute inset-0 bg-blueprint-dark opacity-60" aria-hidden="true" />
        <div className="absolute -top-32 right-0 w-[560px] h-[560px] rounded-full blur-3xl opacity-25" style={{ background: "radial-gradient(circle,#2563eb,transparent 65%)" }} aria-hidden="true" />
        <div className="absolute -bottom-40 -left-24 w-[480px] h-[480px] rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle,#0eaba9,transparent 65%)" }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-10 sm:pt-20 sm:pb-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 items-center">
          <div>
            <Reveal>
              <p className="eyebrow text-cyan-300">Technology • Digital • AI • Cloud • Security • Media • Publishing</p>
              <h1 className="font-display mt-4 text-[34px] leading-[1.06] sm:text-[54px] font-extrabold tracking-tight text-white text-balance">
                Technology Solutions That Move Your Business Forward
              </h1>
              <p className="mt-5 text-[15.5px] sm:text-[18px] leading-relaxed text-slate-300 max-w-xl">
                From software and web development to cloud, AI, cybersecurity, digital marketing, media and publishing, Pixelpearl Technologies delivers practical digital solutions designed around business needs.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary min-h-[52px]">Discuss Your Requirement <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 min-h-[52px] font-semibold text-[15px] px-[26px] rounded-xl border-[1.5px] border-white/30 text-white hover:border-cyan-300 hover:bg-white/5 transition-colors">Explore Our Services</Link>
              <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
            </Reveal>
            <Reveal delay={200}>
              <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/15 bg-white/10 max-w-xl" aria-label="Our working principles">
                {[
                  ["Business-Focused", "Outcomes first"],
                  ["Scalable", "Grows with you"],
                  ["End-to-End", "Plan to support"],
                  ["Growth-Oriented", "Built to compound"],
                ].map(([t, s]) => (
                  <div key={t} className="bg-[#0A1930]/80 px-4 py-3.5">
                    <dt className="text-white font-display font-bold text-[13.5px] sm:text-[14px]">{t}</dt>
                    <dd className="text-slate-400 text-[12px] mt-0.5">{s}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal variant="scale" delay={100}><HeroVisual /></Reveal>
        </div>
        {/* contact strip */}
        <div className="relative border-t border-white/10 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-slate-300">
            <span className="font-semibold text-slate-200">Ghansoli, Navi Mumbai</span>
            <a href={COMPANY.primaryPhoneHref} className="inline-flex items-center gap-1.5 hover:text-white font-semibold"><Phone className="w-4 h-4 text-cyan-300" aria-hidden="true" /> {COMPANY.phones[0].label}</a>
            <a href={COMPANY.emailHref} className="hover:text-white break-all">{COMPANY.email}</a>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section aria-label="Request a consultation" className="bg-mist-50 dark:bg-[#060f22] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Reveal variant="left">
            <Eyebrow>Start the conversation</Eyebrow>
            <h2 className="font-display mt-3 text-[26px] sm:text-[34px] font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">Tell us what you want to build, improve or solve.</h2>
            <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-slate-600 dark:text-slate-300">
              Share a few details and our team will help you explore the right digital approach — whether that is a website, software, AI-assisted workflow, cloud setup, security review, marketing foundation or publishing support.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "A practical response to every genuine business enquiry",
                "Clear next steps — call, meeting or written outline",
                "No obligation, no jargon, no pressure",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14.5px] font-medium text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-300 shrink-0" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={COMPANY.primaryPhoneHref} className="btn-navy min-h-[52px]"><Phone className="w-[18px] h-[18px]" aria-hidden="true" /> {COMPANY.phones[0].label}</a>
              <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
            </div>
          </Reveal>
          <Reveal variant="right"><LeadForm id="home-enquiry" /></Reveal>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section aria-labelledby="home-about" className="py-14 sm:py-20 bg-white dark:bg-[#081426] border-y hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-10 lg:grid-cols-2 items-center">
          <Reveal variant="left">
            <Eyebrow>Who we are</Eyebrow>
            <h2 id="home-about" className="font-display mt-3 text-[26px] sm:text-[36px] font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">Technology Built Around Your Business</h2>
            <p className="mt-4 text-[15px] sm:text-[16.5px] leading-relaxed text-slate-600 dark:text-slate-300">
              Pixelpearl Technologies is a Navi Mumbai based technology, digital, media and publishing partner. We connect websites, software, AI, cloud, security, marketing, media and publishing into one coherent approach — so each investment supports the others.
            </p>
            <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-slate-600 dark:text-slate-300">
              From Ghansoli to businesses across India, teams work with us because we start from business goals, explain trade-offs plainly and stay involved after launch.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Capabilities">
              {["Technology", "Digital", "AI", "Cloud", "Security", "Media", "Publishing"].map((c) => (
                <span key={c} className="text-[13px] font-bold px-3.5 py-2 rounded-full border hairline bg-mist-100 dark:bg-white/5 text-slate-700 dark:text-slate-200">{c}</span>
              ))}
            </div>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-bold text-royal-600 dark:text-cyan-300 hover:gap-3 transition-all">More about Pixelpearl <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
          </Reveal>
          <Reveal variant="right" className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Target, t: "Business First", d: "Every recommendation ties back to enquiries, operations or growth — never technology for its own sake." },
              { icon: Layers, t: "Integrated Capabilities", d: "Web, software, AI, cloud, security, marketing, media and publishing planned together." },
              { icon: TrendingUp, t: "Long-Term Perspective", d: "Scalable architecture, documented setups and support that respects where you are headed." },
              { icon: MessagesSquare, t: "Clear Communication", d: "Plain explanations, honest timelines and a single team accountable for follow-through." },
            ].map((c) => (
              <article key={c.t} className="card-hover rounded-2xl border hairline bg-mist-50 dark:bg-white/[0.04] p-6 hover:shadow-[0_20px_44px_-20px_rgba(10,25,48,0.35)] hover:border-royal-600/40">
                <span className="w-11 h-11 grid place-items-center rounded-xl text-white" style={{ background: "linear-gradient(135deg,#1d4ed8,#0eaba9)" }}><c.icon className="w-5 h-5" aria-hidden="true" /></span>
                <h3 className="font-display mt-4 font-bold text-[16px] text-slate-900 dark:text-white">{c.t}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{c.d}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section aria-labelledby="home-services" className="py-14 sm:py-20 bg-mist-50 dark:bg-[#060f22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="What we do" title="Practical services across technology, digital, media and publishing" text="Eight connected capabilities. Start with one pressing need — expand as value is proven." align="center" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {SERVICE_CARDS.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={Math.min(i * 60, 300)}>
                <article className="card-hover group h-full flex flex-col rounded-2xl border hairline bg-white dark:bg-[#0b1c38] p-6 hover:shadow-[0_24px_50px_-20px_rgba(29,78,216,0.4)] hover:border-royal-600/40 hover:-translate-y-1">
                  <span className="w-12 h-12 grid place-items-center rounded-2xl text-white" style={{ background: i % 2 ? "linear-gradient(135deg,#0eaba9,#2563eb)" : "linear-gradient(135deg,#1d4ed8,#06b6d4)" }}>
                    <s.icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-4 font-bold text-[17px] text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300 flex-1">{s.text}</p>
                  <span className="mt-5 pt-4 border-t hairline flex items-center justify-between">
                    <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 text-[14px] font-bold text-royal-600 dark:text-cyan-300 hover:gap-2.5 transition-all">Learn More <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
                    <a href={whatsappLink(`Hello Pixelpearl Technologies, I would like to discuss a business requirement. Service: ${s.title}.`)} target="_blank" rel="noopener" aria-label={`Enquire about ${s.title} on WhatsApp`} className="inline-flex items-center gap-1.5 text-[13px] font-bold text-slate-500 dark:text-slate-400 hover:text-[#128c4b] transition-colors"><MessageCircle className="w-4 h-4" aria-hidden="true" /> Enquire</a>
                  </span>
                </article>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-8 text-center">
            <Link to="/services" className="btn-outline min-h-[52px]">View all services <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS: BUILD AUTOMATE GROW */}
      <section id="solutions" aria-labelledby="home-solutions" className="py-14 sm:py-20 text-white scroll-mt-24" style={{ background: "linear-gradient(180deg,#0A1930,#10254a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead tone="light" eyebrow="How we help" title="BUILD • AUTOMATE • GROW" text="Three solution paths that meet your business where it is — and move it forward in the right order." align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { k: "BUILD", icon: Code2, t: "Websites, software, platforms and digital products", d: "Corporate sites, portals, dashboards and platforms — designed around your workflows and built to scale.", to: "/services/web-development", cta: "Build with us" },
              { k: "AUTOMATE", icon: Workflow, t: "AI, workflows, integrations and automation", d: "Assistants, routing, reminders, document support and integrations that remove repetitive work.", to: "/services/ai-automation", cta: "Automate work" },
              { k: "GROW", icon: BarChart3, t: "SEO, marketing, media, publishing and visibility", d: "Search presence, local visibility, content, media and publishing that compound into pipeline.", to: "/services/digital-marketing", cta: "Grow visibility" },
            ].map((s, i) => (
              <Reveal key={s.k} delay={i * 90}>
                <article className="relative h-full rounded-3xl border border-white/15 bg-white/[0.05] p-7 sm:p-8 overflow-hidden hover:border-cyan-300/50 hover:bg-white/[0.07] transition-colors card-hover">
                  <span className="font-display text-[13px] font-extrabold tracking-[0.28em] text-cyan-300">0{i + 1} — {s.k}</span>
                  <s.icon className="mt-4 w-9 h-9 text-cyan-200" aria-hidden="true" />
                  <h3 className="font-display mt-3 text-[19px] sm:text-[21px] font-bold leading-snug">{s.t}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-300">{s.d}</p>
                  <Link to={s.to} className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-bold text-white border-b-2 border-cyan-300/60 pb-1 hover:gap-3 hover:border-cyan-300 transition-all">{s.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI + CLOUD */}
      <section aria-labelledby="home-ai" className="py-14 sm:py-20 bg-white dark:bg-[#081426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-2 lg:gap-14 items-center">
          <Reveal variant="left">
            <Eyebrow tone="teal">Artificial intelligence</Eyebrow>
            <h2 id="home-ai" className="font-display mt-3 text-[26px] sm:text-[34px] font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">Make AI Work for Your Business</h2>
            <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-slate-600 dark:text-slate-300">AI assistants, workflow automation, document processing, data analysis, integrations and business automation — applied to real daily work, with human oversight where it matters.</p>
            <ul className="mt-5 space-y-2.5">
              {["Grounded assistants that answer from your approved content", "Enquiry routing, reminders and handoffs across email & WhatsApp", "Document extraction, summaries and organised records", "Careful pilots with measurable value before expansion"].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14.5px] text-slate-700 dark:text-slate-200 font-medium"><CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-300 shrink-0" aria-hidden="true" /> {t}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/services/ai-automation" className="btn-primary min-h-[52px]">Explore AI & Automation</Link>
              <a href={whatsappLink("Hello Pixelpearl Technologies, I would like to discuss a business requirement. Service: AI & Automation.")} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> Ask on WhatsApp</a>
            </div>
          </Reveal>
          <Reveal variant="right" className="rounded-3xl border hairline bg-mist-50 dark:bg-white/[0.04] p-6 sm:p-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">A practical starting point</p>
            <ol className="mt-4 space-y-4">
              {[
                ["Pick one workflow", "Enquiry FAQs, document summaries or follow-up reminders."],
                ["Ground it in your content", "Approved documents, FAQs and records — not guesswork."],
                ["Keep humans in charge", "Review steps and escalation where judgement matters."],
                ["Measure, then expand", "Prove value on the pilot before wider rollout."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="shrink-0 w-9 h-9 grid place-items-center rounded-full font-display font-extrabold text-[14px] text-white" style={{ background: "#1d4ed8" }} aria-hidden="true">{i + 1}</span>
                  <span><strong className="block font-display text-[15px] text-slate-900 dark:text-white">{t}</strong><span className="text-[14px] text-slate-600 dark:text-slate-300">{d}</span></span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="home-cloud" className="py-14 sm:py-20 bg-mist-50 dark:bg-[#060f22] border-y hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-2 lg:gap-14 items-center">
          <Reveal variant="left" className="rounded-3xl text-white p-6 sm:p-8 order-2 lg:order-1 relative overflow-hidden">
            <span className="absolute inset-0" style={{ background: "linear-gradient(140deg,#0A1930,#1a3560)" }} aria-hidden="true" />
            <span className="absolute inset-0 bg-blueprint-dark opacity-60" aria-hidden="true" />
            <span className="relative">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-cyan-300">Infrastructure checklist</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {["Cloud & servers", "Performance", "Backups", "Monitoring", "Security basics", "Scalability"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[14px] font-semibold"><ShieldCheck className="w-4.5 h-4.5 w-5 h-5 text-teal-300 shrink-0" aria-hidden="true" /> {t}</li>
                ))}
              </ul>
              <p className="mt-5 text-[13.5px] text-slate-300 leading-relaxed">Documented setups, tested restores and monitoring that catches issues before customers do.</p>
            </span>
          </Reveal>
          <Reveal variant="right" className="order-1 lg:order-2">
            <Eyebrow>Cloud & infrastructure</Eyebrow>
            <h2 id="home-cloud" className="font-display mt-3 text-[26px] sm:text-[34px] font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">Reliable Infrastructure for a Digital Business</h2>
            <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-slate-600 dark:text-slate-300">Cloud, hosting, servers, performance, backup, monitoring, security and scalability — planned right-sized and kept healthy, so your website and applications simply work.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/services/cloud-hosting" className="btn-primary min-h-[52px]">Explore Cloud & Hosting</Link>
              <a href={COMPANY.primaryPhoneHref} className="btn-outline min-h-[52px]"><Phone className="w-[18px] h-[18px]" aria-hidden="true" /> {COMPANY.phones[0].label}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section aria-labelledby="home-industries" className="py-14 sm:py-20 bg-white dark:bg-[#081426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="Who we help" title="Built for the realities of your industry" text="From MSMEs and startups to healthcare, education, manufacturing, retail, agriculture, real estate and professional services." align="center" />
          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4" role="list">
            {INDUSTRIES.map((ind, i) => (
              <Reveal as="li" key={ind.slug} delay={Math.min(i * 50, 250)}>
                <Link to={`/industries/${ind.slug}`} className="card-hover group flex items-center gap-3.5 sm:gap-4 rounded-2xl border hairline bg-mist-50 dark:bg-white/[0.04] p-4 sm:p-5 hover:border-royal-600/40 hover:shadow-[0_18px_40px_-18px_rgba(10,25,48,0.35)] min-h-[76px]">
                  <span className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 grid place-items-center rounded-xl bg-navy-900 text-cyan-300 group-hover:bg-royal-600 group-hover:text-white transition-colors" style={{ background: "#0A1930" }}><ind.icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" /></span>
                  <span className="font-display font-bold text-[14px] sm:text-[16px] text-slate-900 dark:text-white leading-tight">{ind.name}</span>
                  <ArrowUpRight className="ml-auto w-4 h-4 text-slate-400 group-hover:text-royal-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY */}
      <section aria-labelledby="home-why" className="py-14 sm:py-20 bg-mist-50 dark:bg-[#060f22] border-y hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="Why Pixelpearl" title="A partner chosen for judgement, not just delivery" align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Compass, t: "Business First", d: "We begin with goals, customers and constraints — then recommend the simplest technology that serves them." },
              { icon: Search, t: "Practical Technology", d: "Proven approaches, honest build-versus-buy advice and no unnecessary complexity." },
              { icon: Layers, t: "Integrated Capabilities", d: "One team across web, software, AI, cloud, security, marketing, media and publishing." },
              { icon: InfinityIcon, t: "Scalable Architecture", d: "Structured data, documented setups and foundations that grow with users and content." },
              { icon: MessagesSquare, t: "Clear Communication", d: "Plain language, defined ownership and responsive follow-through at every stage." },
              { icon: TrendingUp, t: "Long-Term Perspective", d: "We plan for maintenance, improvement and the second year — not just launch day." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={Math.min(i * 60, 300)}>
                <article className="h-full rounded-2xl border hairline bg-white dark:bg-[#0b1c38] p-6 sm:p-7 card-hover hover:shadow-[0_20px_44px_-20px_rgba(10,25,48,0.35)]">
                  <span className="w-11 h-11 grid place-items-center rounded-xl text-white" style={{ background: "linear-gradient(135deg,#1d4ed8,#0eaba9)" }}><c.icon className="w-5 h-5" aria-hidden="true" /></span>
                  <h3 className="font-display mt-4 font-bold text-[16.5px] text-slate-900 dark:text-white">{c.t}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{c.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section aria-labelledby="home-process" className="py-14 sm:py-20 bg-white dark:bg-[#081426]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="How we work" title="A clear process, from first call to ongoing support" text="Seven defined stages. You always know what happens next, who owns it and what good looks like." align="center" />
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-7 lg:gap-0 lg:divide-x divide-slate-200 dark:divide-white/10 rounded-2xl border hairline bg-mist-50 dark:bg-white/[0.03] overflow-hidden" role="list">
            {["Discover", "Plan", "Design", "Develop", "Test", "Launch", "Support"].map((s, i) => (
              <Reveal as="li" key={s} delay={Math.min(i * 60, 300)} className="p-5 lg:p-4 text-center lg:text-left relative group hover:bg-white dark:hover:bg-white/5 transition-colors">
                <span className="font-display text-[26px] font-extrabold tracking-tight" style={{ color: i === 0 ? "#1d4ed8" : "#94a3b8" }} aria-hidden="true">0{i + 1}</span>
                <span className="block font-display font-bold text-[15px] text-slate-900 dark:text-white mt-1">{s}</span>
                <span className="hidden lg:block mt-2 h-[3px] rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden" aria-hidden="true"><span className="block h-full rounded-full" style={{ width: `${((i + 1) / 7) * 100}%`, background: "linear-gradient(90deg,#2563eb,#0eaba9)" }} /></span>
                {i < 6 && <ArrowRight className="hidden lg:block absolute top-6 right-2 w-4 h-4 text-slate-300" aria-hidden="true" />}
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="btn-primary min-h-[52px]">Start with Discovery <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" /></Link>
            <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO + TESTIMONIAL placeholders (honest) */}
      <section aria-labelledby="home-work" className="py-14 sm:py-20 bg-mist-50 dark:bg-[#060f22] border-y hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-3xl border hairline bg-white dark:bg-[#0b1c38] p-7 sm:p-9 text-center flex flex-col items-center justify-center min-h-[280px]">
              <Eyebrow>Selected work</Eyebrow>
              <h2 id="home-work" className="font-display mt-3 text-[22px] sm:text-[26px] font-extrabold text-slate-900 dark:text-white">Our Work</h2>
              <p className="mt-3 text-[15px] text-slate-600 dark:text-slate-300">Selected projects will be showcased here.</p>
              <Link to="/portfolio" className="mt-5 inline-flex items-center gap-2 font-bold text-royal-600 dark:text-cyan-300">Visit portfolio <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className="h-full rounded-3xl border hairline bg-white dark:bg-[#0b1c38] p-7 sm:p-9 text-center flex flex-col items-center justify-center min-h-[280px]">
              <Eyebrow tone="teal">Client voices</Eyebrow>
              <h2 className="font-display mt-3 text-[22px] sm:text-[26px] font-extrabold text-slate-900 dark:text-white">What Clients Say</h2>
              <p className="mt-3 text-[15px] text-slate-600 dark:text-slate-300">Client testimonials will be added here.</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 font-bold text-royal-600 dark:text-cyan-300">Become our next story <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* FAQ teaser */}
      <section aria-labelledby="home-faq" className="py-14 sm:py-20 bg-white dark:bg-[#081426]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHead eyebrow="Common questions" title="Before you reach out" align="center" />
          <div className="mt-8">
            <FaqList idPrefix="home" faqs={[
              { q: "What does Pixelpearl Technologies do?", a: "We provide connected technology, digital, AI, cloud, cybersecurity, media and publishing solutions — including web development, custom software, AI & automation, cloud & hosting, cybersecurity, digital marketing, media & PR and publishing — for businesses in Navi Mumbai and beyond." },
              { q: "How do we start working together?", a: "Start with a conversation: call, WhatsApp or send an enquiry. We explore your requirement in a discovery discussion, then outline a practical plan with scope, timelines and next steps." },
              { q: "Can you handle both technology and visibility?", a: "Yes. Websites, software, AI, cloud and security can be planned alongside SEO, digital marketing, media and publishing — so what we build also gets discovered." },
              { q: "Where are you located?", a: "We are based in Ghansoli, Navi Mumbai — Nav Durga Niwas, Plot No. 473, Sector 4, Ghansoli, Navi Mumbai – 400701, Maharashtra, India — and work with businesses across Navi Mumbai and beyond." },
            ]} />
          </div>
        </div>
      </section>

      <div className="pb-14 sm:pb-20 bg-white dark:bg-[#081426]">
        <CtaBand />
      </div>

      {/* FINAL CTA */}
      <section aria-labelledby="final-cta" className="relative overflow-hidden text-white" style={{ background: "linear-gradient(120deg,#060f22 0%,#0A1930 50%,#1a3560 100%)" }}>
        <div className="absolute inset-0 bg-blueprint-dark opacity-50" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <Reveal variant="scale">
            <Eyebrow tone="light"><span className="mx-auto">Ready when you are</span></Eyebrow>
            <h2 id="final-cta" className="font-display mt-4 text-[28px] sm:text-[42px] font-extrabold tracking-tight text-balance">Ready to Build, Improve or Grow?</h2>
            <p className="mt-3 text-[15.5px] sm:text-[17px] text-slate-300 max-w-2xl mx-auto">Tell us what you are trying to build, improve or solve. Our team can help you explore the right digital approach.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">
              <Link to="/contact" className="btn-primary flex-1 min-h-[54px] !text-[16px]">Discuss Your Requirement <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
              <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp flex-1 min-h-[54px] !text-[16px]"><MessageCircle className="w-5 h-5" aria-hidden="true" /> WhatsApp Us</a>
            </div>
            <p className="mt-5 text-[13.5px] text-slate-400">Prefer email? <a href={COMPANY.emailHref} className="underline font-semibold text-cyan-200">{COMPANY.email}</a> · <a href={COMPANY.primaryPhoneHref} className="underline font-semibold text-cyan-200">{COMPANY.phones[0].label}</a></p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
