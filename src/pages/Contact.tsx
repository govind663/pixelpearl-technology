import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import Seo, { breadcrumbJsonLd } from "../components/Seo";
import Reveal from "../components/Reveal";
import LeadForm from "../components/LeadForm";
import { PageHero } from "../components/Shared";
import { COMPANY, whatsappLink } from "../lib/site";

export default function Contact() {
  const wa = whatsappLink();
  return (
    <main id="main">
      <Seo
        title="Contact Pixelpearl Technologies | Call, WhatsApp & Enquire — Navi Mumbai"
        description="Contact Pixelpearl Technologies in Ghansoli, Navi Mumbai. Call +91 9820209883, WhatsApp us or send an enquiry about web, software, AI, cloud, security, marketing, media and publishing."
        path="/contact"
        jsonLd={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])}
      />
      <PageHero
        breadcrumb={[{ label: "Contact" }]}
        h1="Let’s Start a Conversation"
        intro="Tell us what you are trying to build, improve or solve. Our team can help you explore the right digital approach."
      >
        <a href={COMPANY.primaryPhoneHref} className="inline-flex items-center justify-center gap-2 min-h-[52px] font-bold text-[15px] px-[26px] rounded-xl bg-white text-[#0A1930] hover:bg-cyan-100 transition-colors"><Phone className="w-[18px] h-[18px]" aria-hidden="true" /> Call Now</a>
        <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> WhatsApp Us</a>
        <a href="#enquiry" className="inline-flex items-center justify-center gap-2 min-h-[52px] font-semibold text-[15px] px-[26px] rounded-xl border-[1.5px] border-white/30 text-white hover:border-cyan-300 hover:bg-white/5 transition-colors"><Mail className="w-[18px] h-[18px]" aria-hidden="true" /> Send Enquiry</a>
      </PageHero>

      <section aria-label="Contact details and enquiry form" className="py-14 sm:py-20 bg-mist-50 dark:bg-[#060f22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="space-y-4">
            <Reveal>
              <div className="rounded-3xl border hairline bg-white dark:bg-[#0b1c38] p-6 sm:p-8">
                <h2 className="font-display text-[20px] font-extrabold text-slate-900 dark:text-white">Reach us directly</h2>
                <ul className="mt-5 space-y-5">
                  <li>
                    <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Phone</p>
                    <a href={COMPANY.primaryPhoneHref} className="mt-1 flex items-center gap-2.5 font-display font-extrabold text-[19px] text-slate-900 dark:text-white hover:text-royal-600 dark:hover:text-cyan-300"><Phone className="w-5 h-5 text-royal-600 dark:text-cyan-300" aria-hidden="true" /> {COMPANY.phones[0].label}</a>
                    <a href={COMPANY.secondaryPhoneHref} className="mt-1 flex items-center gap-2.5 font-bold text-[16px] text-slate-700 dark:text-slate-200 hover:text-royal-600 dark:hover:text-cyan-300"><Phone className="w-4 h-4 text-slate-400" aria-hidden="true" /> {COMPANY.phones[1].label}</a>
                  </li>
                  <li>
                    <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Email</p>
                    <a href={COMPANY.emailHref} className="mt-1 flex items-center gap-2.5 font-bold text-[16px] text-slate-900 dark:text-white hover:text-royal-600 dark:hover:text-cyan-300 break-all"><Mail className="w-5 h-5 text-royal-600 dark:text-cyan-300 shrink-0" aria-hidden="true" /> {COMPANY.email}</a>
                  </li>
                  <li>
                    <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Address</p>
                    <address className="mt-1 flex gap-2.5 text-[14.5px] leading-relaxed text-slate-700 dark:text-slate-200 not-italic">
                      <MapPin className="w-5 h-5 text-royal-600 dark:text-cyan-300 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{COMPANY.fullAddress}</span>
                    </address>
                  </li>
                  <li className="flex gap-2.5 text-[14px] text-slate-600 dark:text-slate-300">
                    <Clock className="w-5 h-5 shrink-0 text-slate-400" aria-hidden="true" />
                    <span>Calls and WhatsApp are attended during business hours. Every genuine business enquiry receives a response.</span>
                  </li>
                </ul>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <a href={COMPANY.primaryPhoneHref} className="btn-navy min-h-[52px] !px-3 !text-[14px]"><Phone className="w-4 h-4" aria-hidden="true" /> Call Now</a>
                  <a href={wa} target="_blank" rel="noopener" className="btn-whatsapp min-h-[52px] !px-3 !text-[14px]"><MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp Us</a>
                  <a href={COMPANY.emailHref} className="btn-outline min-h-[52px] !px-3 !text-[14px]"><Mail className="w-4 h-4" aria-hidden="true" /> Email Us</a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-3xl overflow-hidden border hairline bg-white dark:bg-[#0b1c38]">
                <iframe
                  title="Map — Pixelpearl Technologies, Ghansoli, Navi Mumbai"
                  src="https://www.google.com/maps?q=Ghansoli,+Navi+Mumbai,+Maharashtra+400701&output=embed"
                  className="w-full h-[280px] sm:h-[320px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
                  <p className="text-[13.5px] text-slate-600 dark:text-slate-300">Ghansoli, Navi Mumbai — Maharashtra 400701</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Ghansoli+Navi+Mumbai+400701" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-[14px] font-bold text-royal-600 dark:text-cyan-300">Open in Google Maps <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal variant="right" id="enquiry" className="scroll-mt-28">
            <LeadForm id="contact-enquiry" title="Send Enquiry" subtitle="Share a few details and choose Email or WhatsApp to send your enquiry directly to our team." />
          </Reveal>
        </div>
      </section>

      <section aria-label="Other ways to explore" className="pb-14 sm:pb-20 bg-mist-50 dark:bg-[#060f22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="rounded-2xl border hairline bg-white dark:bg-[#0b1c38] p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="flex-1">
              <strong className="font-display block text-[17px] text-slate-900 dark:text-white">Prefer to explore first?</strong>
              <span className="text-[14px] text-slate-600 dark:text-slate-300">Browse our services, industries and insights — then reach out when ready.</span>
            </span>
            <span className="flex flex-wrap gap-2.5">
              <Link to="/services" className="btn-outline min-h-[48px] !text-[14px] !py-2.5">Services</Link>
              <Link to="/industries" className="btn-outline min-h-[48px] !text-[14px] !py-2.5">Industries</Link>
              <Link to="/insights" className="btn-outline min-h-[48px] !text-[14px] !py-2.5">Insights</Link>
            </span>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
