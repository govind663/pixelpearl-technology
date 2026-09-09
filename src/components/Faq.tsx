import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import type { Faq } from "../data/content";

export default function FaqList({ faqs, idPrefix = "faq" }: { faqs: Faq[]; idPrefix?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-200 dark:divide-white/10 rounded-2xl border hairline bg-white dark:bg-[#0b1c38] overflow-hidden">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-panel-${i}`}
                id={`${idPrefix}-btn-${i}`}
                className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 min-h-[60px] hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <span className="font-display font-bold text-[15px] sm:text-[16px] text-slate-900 dark:text-white">{f.q}</span>
                <span className={`shrink-0 w-8 h-8 grid place-items-center rounded-full border transition-transform duration-300 ${isOpen ? "rotate-45 bg-royal-600 border-royal-600 text-white" : "border-slate-300 dark:border-white/20 text-slate-500"}`} style={isOpen ? { background: "#1d4ed8" } : undefined} aria-hidden="true">
                  <Plus className="w-4 h-4" />
                </span>
              </button>
            </h3>
            <div id={`${idPrefix}-panel-${i}`} role="region" aria-labelledby={`${idPrefix}-btn-${i}`} hidden={!isOpen} className="px-5 sm:px-6 pb-5 text-[14.5px] leading-relaxed text-slate-600 dark:text-slate-300">
              {f.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function RevealWrap({ children }: { children: React.ReactNode }) {
  return <Reveal>{children}</Reveal>;
}
