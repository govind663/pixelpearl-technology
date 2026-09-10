import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Youtube, Twitter, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, whatsappLink } from "../lib/site";

const SOCIAL_ICONS: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  x: Twitter,
};
const SOCIAL_LABELS: Record<string, string> = {
  linkedin: "LinkedIn",
  facebook: "Facebook",
  instagram: "Instagram",
  youtube: "YouTube",
  x: "X (Twitter)",
};

export default function Footer() {
  const year = 2026;
  const socials = Object.entries(COMPANY.socials).filter(([, v]) => v && v.trim().length > 0);
  const wa = whatsappLink();
  return (
    <footer className="text-slate-300" style={{ background: "#0A1930" }} aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr_1fr]">
          <div>
            <Logo compact={false} />
            <p className="mt-5 text-[14.5px] leading-relaxed text-slate-300/90 max-w-[320px]">
              Pixelpearl Technologies is a Navi Mumbai based technology, digital, AI, cloud, cybersecurity, media and publishing solutions company — helping businesses build, automate and grow.
            </p>
            <p className="mt-3 text-[12px] font-bold tracking-[0.2em] text-cyan-300/90">BUILD • AUTOMATE • GROW</p>
            {socials.length > 0 ? (
              <div className="mt-5 flex items-center gap-2.5">
                {socials.map(([k, url]) => {
                  const Icon = SOCIAL_ICONS[k] ?? Linkedin;
                  return (
                    <a key={k} href={url} target="_blank" rel="noopener" aria-label={`${COMPANY.name} on ${SOCIAL_LABELS[k] ?? k}`} className="w-10 h-10 grid place-items-center rounded-xl border border-white/15 text-slate-300 hover:text-white hover:border-cyan-300 hover:bg-white/5 transition-colors">
                      <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>
          <nav aria-label="Quick links">
            <h2 className="font-display text-white font-bold text-[15px] tracking-tight">Quick Links</h2>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              {["About", "Services", "Industries", "Media & Publishing", "Insights", "Portfolio", "Contact"].map((l) => {
                const to = l === "About" ? "/about" : l === "Services" ? "/services" : l === "Industries" ? "/industries" : l === "Media & Publishing" ? "/media-publishing" : l === "Insights" ? "/insights" : l === "Portfolio" ? "/portfolio" : "/contact";
                return <li key={l}><Link to={to} className="hover:text-cyan-300 transition-colors">{l}</Link></li>;
              })}
            </ul>
          </nav>
          <nav aria-label="Services">
            <h2 className="font-display text-white font-bold text-[15px] tracking-tight">Services</h2>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              {[
                ["Web Development", "/services/web-development"],
                ["Software Development", "/services/software-development"],
                ["AI & Automation", "/services/ai-automation"],
                ["Cloud & Hosting", "/services/cloud-hosting"],
                ["Cybersecurity", "/services/cybersecurity"],
                ["Digital Marketing", "/services/digital-marketing"],
              ].map(([l, to]) => <li key={l}><Link to={to} className="hover:text-cyan-300 transition-colors">{l}</Link></li>)}
            </ul>
          </nav>
          <nav aria-label="Media and publishing">
            <h2 className="font-display text-white font-bold text-[15px] tracking-tight">Media & Publishing</h2>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              <li><Link to="/services/media-pr" className="hover:text-cyan-300 transition-colors">Media & PR</Link></li>
              <li><Link to="/services/publishing" className="hover:text-cyan-300 transition-colors">Publishing</Link></li>
              <li><Link to="/media-publishing" className="hover:text-cyan-300 transition-colors">Overview</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-cyan-300 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/insights" className="hover:text-cyan-300 transition-colors">Insights</Link></li>
            </ul>
          </nav>
          <div>
            <h2 className="font-display text-white font-bold text-[15px] tracking-tight">Contact</h2>
            <address className="mt-4 space-y-3 text-[14px] not-italic leading-relaxed">
              <p className="flex gap-2.5"><MapPin className="w-4 h-4 mt-1 shrink-0 text-cyan-300" aria-hidden="true" /><span>{COMPANY.fullAddress}</span></p>
              <p>
                <a href={COMPANY.primaryPhoneHref} className="flex items-center gap-2.5 hover:text-cyan-300 transition-colors"><Phone className="w-4 h-4 shrink-0 text-cyan-300" aria-hidden="true" />{COMPANY.phones[0].label}</a>
                <a href={COMPANY.secondaryPhoneHref} className="flex items-center gap-2.5 mt-1.5 hover:text-cyan-300 transition-colors"><Phone className="w-4 h-4 shrink-0 text-cyan-300" aria-hidden="true" />{COMPANY.phones[1].label}</a>
              </p>
              <p><a href={COMPANY.emailHref} className="flex items-center gap-2.5 hover:text-cyan-300 transition-colors break-all"><Mail className="w-4 h-4 shrink-0 text-cyan-300" aria-hidden="true" />{COMPANY.email}</a></p>
            </address>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a href={COMPANY.primaryPhoneHref} className="inline-flex items-center justify-center gap-1.5 text-[13.5px] font-bold bg-white text-[#0A1930] rounded-lg py-2.5 hover:bg-cyan-100 transition-colors"><Phone className="w-4 h-4" aria-hidden="true" /> Call</a>
              <a href={wa} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-1.5 text-[13.5px] font-bold bg-[#128c4b] text-white rounded-lg py-2.5 hover:bg-[#0e7440] transition-colors"><MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-[13px] text-slate-400">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-cyan-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-cyan-300 transition-colors">Terms & Conditions</Link>
            <Link to="/cookie-policy" className="hover:text-cyan-300 transition-colors">Cookie Policy</Link>
            <Link to="/sitemap" className="hover:text-cyan-300 transition-colors">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
