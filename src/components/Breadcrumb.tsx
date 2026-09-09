import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items, tone = "auto" }: { items: { label: string; to?: string }[]; tone?: "auto" | "light" }) {
  const light = tone === "light";
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] sm:text-sm">
      <ol className={`flex flex-wrap items-center gap-1.5 ${light ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>
        <li className="flex items-center gap-1.5">
          <Link to="/" className={`inline-flex items-center gap-1 font-medium ${light ? "text-slate-300 hover:text-white" : "hover:text-royal-600 dark:hover:text-cyan-300"}`}>
            <Home className="w-3.5 h-3.5" aria-hidden="true" /> Home
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5 min-w-0">
            <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" aria-hidden="true" />
            {it.to ? (
              <Link to={it.to} className={`font-medium truncate ${light ? "text-slate-300 hover:text-white" : "hover:text-royal-600 dark:hover:text-cyan-300"}`}>
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className={`font-semibold truncate ${light ? "text-white" : "text-slate-800 dark:text-slate-200"}`}>
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
