import { Link } from "react-router-dom";

export default function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Pixelpearl Technologies — Home">
      <span className="relative grid place-items-center w-10 h-10 rounded-[12px] overflow-hidden shrink-0" style={{ background: "#0A1930" }} aria-hidden="true">
        <svg viewBox="0 0 64 64" className="w-10 h-10" role="presentation">
          <defs>
            <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1E40AF" />
              <stop offset="0.55" stopColor="#2563EB" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
            <radialGradient id="pg1" cx="0.35" cy="0.3" r="0.9">
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="0.45" stopColor="#D9F1FD" />
              <stop offset="1" stopColor="#7DD3FC" />
            </radialGradient>
          </defs>
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#0A1930" />
          <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#lg1)" opacity="0.25" />
          <rect x="13" y="13" width="10" height="10" rx="2.5" fill="#38BDF8" />
          <rect x="25" y="13" width="10" height="10" rx="2.5" fill="#60A5FA" opacity="0.75" />
          <rect x="13" y="25" width="10" height="10" rx="2.5" fill="#2563EB" />
          <circle cx="41" cy="32" r="11" fill="url(#pg1)" />
          <circle cx="37.6" cy="28.6" r="3" fill="#fff" opacity="0.95" />
          <rect x="13" y="37" width="22" height="6" rx="3" fill="#14B8A6" />
          <rect x="13" y="45" width="14" height="4" rx="2" fill="#94A3B8" opacity="0.8" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className={`font-display block font-extrabold tracking-tight text-[17px] sm:text-[18px] ${light ? "text-white" : "text-slate-900 dark:text-white"}`}>
            Pixelpearl
          </span>
          <span className={`block text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase mt-1 ${light ? "text-cyan-300" : "text-royal-600 dark:text-cyan-300"}`} style={{ color: light ? undefined : undefined }}>
            Technologies
          </span>
        </span>
      )}
    </Link>
  );
}
