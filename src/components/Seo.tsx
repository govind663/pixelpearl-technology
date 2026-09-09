import { useEffect } from "react";
import { COMPANY } from "../lib/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: object | object[];
}

export default function Seo({ title, description, path, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;
    const setMeta = (selector: string, attr: string, value: string, createTag = "meta") => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement(createTag) as HTMLMetaElement;
        const m = selector.match(/\[(name|property)="([^"]+)"\]/);
        if (m) el.setAttribute(m[1], m[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", `${COMPANY.website}${path}`);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", `${COMPANY.website}${path}`);
    // JSON-LD
    const existing = document.head.querySelector("script[data-seo-jsonld]");
    if (existing) existing.remove();
    if (jsonLd) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo-jsonld", "true");
      s.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(s);
    }
    return () => {
      const e = document.head.querySelector("script[data-seo-jsonld]");
      if (e) e.remove();
    };
  }, [title, description, path, jsonLd]);
  return null;
}

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: COMPANY.website + "/",
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
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${COMPANY.website}${it.path}`,
    })),
  };
}
