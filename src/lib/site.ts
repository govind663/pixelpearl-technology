export const COMPANY = {
  name: "Pixelpearl Technologies",
  shortName: "Pixelpearl",
  tagline: "BUILD • AUTOMATE • GROW",
  capabilities: "Technology • Digital • AI • Cloud • Security • Media • Publishing",
  website: "https://pixelpearltechnologies.com",
  phones: [
    { label: "+91 9820809883", href: "tel:+919820809883" },
    { label: "+91 9833944458", href: "tel:+919833944458" },
  ],
  primaryPhoneHref: "tel:+919820809883",
  secondaryPhoneHref: "tel:+919833944458",
  email: "info@pixelpearltechnologies.com",
  emailHref: "mailto:info@pixelpearltechnologies.com",
  addressLines: [
    "Nav Durga Niwas, Plot No. 473, Sector 4,",
    "Ghansoli, Navi Mumbai – 400701,",
    "Maharashtra, India",
  ],
  fullAddress:
    "Nav Durga Niwas, Plot No. 473, Sector 4, Ghansoli, Navi Mumbai – 400701, Maharashtra, India",
  locality: "Ghansoli, Navi Mumbai",
  whatsappNumber: "919820809883",
  whatsappMessage:
    "Hello Pixelpearl Technologies, I would like to discuss a business requirement.",
  // Centralized social configuration — never invent URLs; empty = hidden
  socials: {
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: "",
    x: "",
  } as Record<string, string>,
  themeKey: "pixelpearl_theme",
  formEndpoint: "", // no backend — forms use mailto/WhatsApp handoff, never fake submission
};

export function whatsappLink(message?: string) {
  const msg = message ?? COMPANY.whatsappMessage;
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export function enquiryWhatsAppLink(service: string, name?: string) {
  const base = `Hello Pixelpearl Technologies, I would like to discuss a business requirement.`;
  const extra = service ? ` Service: ${service}.` : "";
  const who = name ? ` Name: ${name}.` : "";
  return whatsappLink(`${base}${extra}${who}`);
}

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/#solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Media & Publishing", to: "/media-publishing" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export const SERVICE_OPTIONS = [
  "Web Development",
  "Software Development",
  "Cloud & Hosting",
  "AI & Automation",
  "Cybersecurity",
  "Digital Marketing",
  "Media & PR",
  "Publishing",
  "Other / Not sure yet",
];
