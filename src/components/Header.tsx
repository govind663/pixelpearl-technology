import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, MessageCircle, Menu, X, Sun, Moon, Monitor, ChevronDown, MapPin, Mail } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, NAV, whatsappLink } from "../lib/site";
import { useTheme } from "../lib/theme";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setThemeOpen(false);
  }, [loc.pathname, loc.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setThemeOpen(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const wa = whatsappLink();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden md:block bg-navy-900 text-slate-200 text-[13px]" style={{ background: "#0A1930" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-9">
          <p className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-300" aria-hidden="true" />
            <span>Ghansoli, Navi Mumbai</span>
            <span className="hidden lg:inline text-slate-500" aria-hidden="true">|</span>
            <span className="hidden lg:inline text-slate-400">Technology • Digital • AI • Cloud • Security • Media • Publishing</span>
          </p>
          <div className="flex items-center gap-5">
            <a href={COMPANY.primaryPhoneHref} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" aria-hidden="true" /> {COMPANY.phones[0].label}
            </a>
            <a href={COMPANY.emailHref} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" aria-hidden="true" /> {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={`bg-white/95 dark:bg-[#060f22]/95 backdrop-blur border-b transition-shadow ${scrolled ? "shadow-[0_8px_30px_-12px_rgba(10,25,48,0.25)] border-slate-200 dark:border-white/10" : "border-slate-200/70 dark:border-white/10"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[68px] gap-3">
            <Logo />
            {/* Desktop nav */}
            <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 xl:gap-7">
              {NAV.map((n) =>
                n.label === "Solutions" ? (
                  <a key={n.label} href="/#solutions" className="nav-link text-[14px] font-semibold text-slate-700 dark:text-slate-200 hover:text-royal-600 dark:hover:text-cyan-300 py-2">
                    Solutions
                  </a>
                ) : (
                  <NavLink
                    key={n.label}
                    to={n.to}
                    end={n.to === "/"}
                    className={({ isActive }) => `nav-link text-[14px] font-semibold py-2 ${isActive ? "active" : "text-slate-700 dark:text-slate-200 hover:text-royal-600 dark:hover:text-cyan-300"}`}
                  >
                    {n.label}
                  </NavLink>
                )
              )}
            </nav>
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Theme */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setThemeOpen((v) => !v)}
                  aria-expanded={themeOpen}
                  aria-haspopup="listbox"
                  aria-label="Colour theme"
                  title="Theme: Light / Dark / System"
                  className="w-10 h-10 grid place-items-center rounded-xl border border-slate-200 dark:border-white/15 text-slate-600 dark:text-slate-300 hover:border-royal-600 hover:text-royal-600 dark:hover:text-cyan-300 transition-colors"
                >
                  {theme === "dark" ? <Moon className="w-[18px] h-[18px]" /> : theme === "light" ? <Sun className="w-[18px] h-[18px]" /> : <Monitor className="w-[18px] h-[18px]" />}
                </button>
                {themeOpen && (
                  <div role="listbox" aria-label="Choose theme" className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1c38] shadow-xl p-1.5 text-sm">
                    {(["light", "dark", "system"] as const).map((t) => (
                      <button
                        key={t}
                        role="option"
                        aria-selected={theme === t}
                        onClick={() => { setTheme(t); setThemeOpen(false); }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg capitalize font-medium ${theme === t ? "bg-royal-600/10 text-royal-700 dark:text-cyan-300" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"}`}
                      >
                        {t === "light" ? <Sun className="w-4 h-4" /> : t === "dark" ? <Moon className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                        {t}
                        {theme === t && <span className="ml-auto text-xs">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <a
                href={wa}
                target="_blank"
                rel="noopener"
                aria-label="Chat on WhatsApp"
                title="WhatsApp Us"
                className="w-10 h-10 grid place-items-center rounded-xl bg-[#128c4b] text-white hover:bg-[#0e7440] transition-colors"
              >
                <MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" />
              </a>
              <Link to="/contact" className="btn-primary !py-3 !px-5 !text-[14px]">
                Discuss Your Requirement
              </Link>
            </div>

            {/* Mobile actions: Logo | Call | WhatsApp | Menu */}
            <div className="flex lg:hidden items-center gap-2">
              <a href={COMPANY.primaryPhoneHref} aria-label={`Call ${COMPANY.phones[0].label}`} className="w-11 h-11 grid place-items-center rounded-xl bg-royal-600 text-white hover:bg-royal-700 transition-colors" style={{ background: "#1d4ed8" }}>
                <Phone className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href={wa} target="_blank" rel="noopener" aria-label="WhatsApp Us" className="w-11 h-11 grid place-items-center rounded-xl bg-[#128c4b] text-white hover:bg-[#0e7440] transition-colors">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="w-11 h-11 grid place-items-center rounded-xl border-[1.5px] border-slate-300 dark:border-white/20 text-slate-800 dark:text-white"
              >
                {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div id="mobile-menu" className={`lg:hidden fixed inset-0 top-[68px] z-40 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-navy-950/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
        <div className={`absolute right-0 top-0 bottom-0 w-[86%] max-w-[360px] bg-white dark:bg-[#081426] shadow-2xl flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`} role="dialog" aria-label="Site menu" aria-modal="true">
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {NAV.map((n) => (
                <li key={n.label}>
                  {n.label === "Solutions" ? (
                    <a href="/#solutions" onClick={() => setOpen(false)} className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[16px] font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/5 min-h-[52px]">
                      Solutions <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" aria-hidden="true" />
                    </a>
                  ) : (
                    <NavLink
                      to={n.to}
                      end={n.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) => `flex items-center justify-between px-4 py-3.5 rounded-xl text-[16px] font-semibold min-h-[52px] ${isActive ? "bg-royal-600/10 text-royal-700 dark:text-cyan-300" : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/5"}`}
                    >
                      {n.label} <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" aria-hidden="true" />
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 p-4 rounded-2xl bg-mist-100 dark:bg-white/5 border hairline">
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">Talk to our team</p>
              <a href={COMPANY.primaryPhoneHref} className="mt-2 flex items-center gap-2 font-bold text-slate-900 dark:text-white text-[16px]"><Phone className="w-4 h-4 text-royal-600" aria-hidden="true" /> {COMPANY.phones[0].label}</a>
              <a href={COMPANY.emailHref} className="mt-1.5 flex items-center gap-2 text-[14px] text-slate-600 dark:text-slate-300 break-all"><Mail className="w-4 h-4 shrink-0" aria-hidden="true" /> {COMPANY.email}</a>
              {/* Theme inline */}
              <div className="mt-3 flex items-center gap-2" role="group" aria-label="Colour theme">
                {(["light", "dark", "system"] as const).map((t) => (
                  <button key={t} onClick={() => setTheme(t)} aria-pressed={theme === t} className={`flex-1 py-2.5 rounded-lg text-[13px] font-bold capitalize border ${theme === t ? "bg-navy-900 text-white border-navy-900 dark:bg-cyan-400 dark:text-navy-950 dark:border-cyan-400" : "border-slate-300 dark:border-white/15 text-slate-600 dark:text-slate-300"}`} style={theme === t ? { background: "#0A1930" } : undefined}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </nav>
          <div className="p-4 border-t hairline grid grid-cols-2 gap-2.5 bg-white dark:bg-[#081426]">
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary !px-3 !py-3.5 !text-[14px] w-full">Discuss Requirement</Link>
            <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp !px-3 !py-3.5 !text-[14px] w-full">WhatsApp Us</a>
          </div>
        </div>
      </div>
    </header>
  );
}
