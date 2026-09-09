import { Link, useLocation } from "react-router-dom";
import { Home, MessageCircle, Phone, SearchX } from "lucide-react";
import Seo from "../components/Seo";
import { COMPANY, whatsappLink } from "../lib/site";

export default function NotFound() {
  const loc = useLocation();
  const is404Route = loc.pathname === "/404";
  return (
    <main id="main">
      <Seo title="Page Not Found | Pixelpearl Technologies" description="The page you requested could not be found. Explore Pixelpearl Technologies' services, industries and contact options." path={is404Route ? "/404" : loc.pathname} />
      <section aria-label="Page not found" className="relative overflow-hidden text-white" style={{ background: "linear-gradient(180deg,#060f22,#10254a)" }}>
        <div className="absolute inset-0 bg-blueprint-dark opacity-60" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <span className="mx-auto w-16 h-16 grid place-items-center rounded-2xl bg-white/10 border border-white/15"><SearchX className="w-8 h-8 text-cyan-300" aria-hidden="true" /></span>
          <p className="mt-6 text-[13px] font-extrabold tracking-[0.28em] text-cyan-300">404 — PAGE NOT FOUND</p>
          <h1 className="font-display mt-3 text-[32px] sm:text-[46px] font-extrabold tracking-tight">This page isn’t available.</h1>
          <p className="mt-3 text-[15.5px] text-slate-300">The link may be outdated, or the page may have moved. Here are useful places to continue:</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto text-[14px] font-bold">
            <Link to="/" className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white text-[#0A1930] py-3.5 hover:bg-cyan-100 transition-colors"><Home className="w-4 h-4" aria-hidden="true" /> Home</Link>
            <Link to="/services" className="inline-flex items-center justify-center rounded-xl border border-white/25 py-3.5 hover:border-cyan-300 transition-colors">Services</Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-xl border border-white/25 py-3.5 hover:border-cyan-300 transition-colors">Contact</Link>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#128c4b] py-3.5 hover:bg-[#0e7440] transition-colors"><MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp</a>
          </div>
          <p className="mt-6 text-[13.5px] text-slate-400">Need help? Call <a className="underline font-semibold text-cyan-200" href={COMPANY.primaryPhoneHref}>{COMPANY.phones[0].label}</a> or email <a className="underline font-semibold text-cyan-200" href={COMPANY.emailHref}>{COMPANY.email}</a>.</p>
          <p className="mt-2 text-[13.5px]"><Link to="/sitemap" className="underline text-slate-300">View the sitemap</Link> · <a href={`tel:+919833944458`} className="underline text-slate-300 inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5" aria-hidden="true" /> +91 9833944458</a></p>
        </div>
      </section>
    </main>
  );
}
