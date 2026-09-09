import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import Reveal from "./Reveal";
import { COMPANY, whatsappLink } from "../lib/site";

export function Eyebrow({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "teal" | "light" }) {
  const color = tone === "light" ? "text-cyan-300" : tone === "teal" ? "text-teal-600 dark:text-teal-300" : "text-royal-600 dark:text-cyan-300";
  return <p className={`eyebrow ${color}`}>{children}</p>;
}

export function SectionHead({ eyebrow, title, text, align = "left", tone = "blue" }: { eyebrow: string; title: string; text?: string; align?: "left" | "center"; tone?: "blue" | "teal" | "light" }) {
  return (
    <Reveal className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="font-display mt-3 text-[26px] sm:text-[34px] leading-[1.15] font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">{title}</h2>
      {text && <p className="mt-3 text-[15px] sm:text-[16.5px] leading-relaxed text-slate-600 dark:text-slate-300">{text}</p>}
    </Reveal>
  );
}

export function PageHero({ breadcrumb, h1, intro, children }: { breadcrumb: { label: string; to?: string }[]; h1: string; intro?: string; children?: ReactNode }) {
  return (
    <div className="relative overflow-hidden" style={{ background: "linear-gradient(180deg,#0A1930 0%,#10254a 70%,#14305e 100%)" }}>
      <div className="absolute inset-0 bg-blueprint-dark opacity-70" aria-hidden="true" />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-25 blur-3xl" style={{ background: "radial-gradient(circle,#2563eb,transparent 65%)" }} aria-hidden="true" />
      <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle,#0eaba9,transparent 65%)" }} aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
        <Breadcrumb items={breadcrumb} tone="light" />
        <h1 className="font-display mt-4 max-w-3xl text-[30px] sm:text-[44px] leading-[1.08] font-extrabold tracking-tight text-white text-balance">{h1}</h1>
        {intro && <p className="mt-4 max-w-2xl text-[15.5px] sm:text-[17px] leading-relaxed text-slate-300">{intro}</p>}
        {children && <div className="mt-7 flex flex-col sm:flex-row gap-3">{children}</div>}
      </div>
      <div className="relative h-[3px] flex" aria-hidden="true">
        <span className="flex-1" style={{ background: "#2563eb" }} />
        <span className="flex-1" style={{ background: "#06b6d4" }} />
        <span className="flex-1" style={{ background: "#0eaba9" }} />
      </div>
    </div>
  );
}

export function CtaBand({ title = "Have a Business Challenge?", text = "Let’s explore the right technology or digital solution for your requirement.", compact = false }: { title?: string; text?: string; compact?: boolean }) {
  const wa = whatsappLink();
  return (
    <section aria-label="Talk to our team" className="max-w-7xl mx-auto px-4 sm:px-6">
      <Reveal variant="scale" className={`relative overflow-hidden rounded-3xl text-white ${compact ? "p-8 sm:p-10" : "p-8 sm:p-14"}`}>
        <span className="absolute inset-0" style={{ background: "linear-gradient(120deg,#0A1930 0%,#1a3560 55%,#1d4ed8 100%)" }} aria-hidden="true" />
        <span className="absolute inset-0 bg-blueprint-dark opacity-60" aria-hidden="true" />
        <span className="absolute -right-20 -top-20 w-[380px] h-[380px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle,#06b6d4,transparent 65%)" }} aria-hidden="true" />
        <span className="relative flex flex-col lg:flex-row lg:items-center gap-8">
          <span className="flex-1">
            <Eyebrow tone="light">Talk to our team</Eyebrow>
            <span className="font-display block mt-3 text-[24px] sm:text-[32px] font-extrabold tracking-tight text-balance">{title}</span>
            <span className="block mt-2 text-[15px] sm:text-[16px] text-slate-300 leading-relaxed max-w-xl">{text}</span>
          </span>
          <span className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto lg:w-[280px]">
            <a href={COMPANY.primaryPhoneHref} className="inline-flex items-center justify-center gap-2 bg-white text-[#0A1930] font-bold text-[15px] rounded-xl px-6 py-4 hover:bg-cyan-100 transition-colors min-h-[52px]">
              <Phone className="w-[18px] h-[18px]" aria-hidden="true" /> Talk to Our Team
            </a>
            <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp w-full min-h-[52px]">
              <MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-cyan-200 hover:text-white transition-colors py-1">
              Or send an enquiry <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </span>
        </span>
      </Reveal>
    </section>
  );
}
