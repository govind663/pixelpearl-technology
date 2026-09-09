import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
  id?: string;
  as?: "div" | "section" | "li" | "article" | "span";
}

export default function Reveal({ children, variant = "up", delay = 0, className = "", id, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            window.setTimeout(() => el.classList.add("is-visible"), delay);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  const cls =
    variant === "left" ? "reveal-left" : variant === "right" ? "reveal-right" : variant === "scale" ? "reveal-scale" : "reveal";
  const Tag = as as "div";
  return (
    <Tag ref={ref} id={id} className={`${cls} ${className}`}>
      {children}
    </Tag>
  );
}
