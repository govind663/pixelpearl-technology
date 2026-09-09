import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Breadcrumb from "../components/Breadcrumb";
import { COMPANY } from "../lib/site";

function Shell({ title, path, updated, children }: { title: string; path: string; updated: string; children: React.ReactNode }) {
  return (
    <main id="main">
      <Seo title={`${title} | Pixelpearl Technologies`} description={`${title} — ${COMPANY.name}, Ghansoli, Navi Mumbai.`} path={path} />
      <div className="bg-white dark:bg-[#081426] border-b hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumb items={[{ label: title }]} />
          <h1 className="font-display mt-4 text-[28px] sm:text-[38px] font-extrabold tracking-tight text-slate-900 dark:text-white">{title}</h1>
          <p className="mt-2 text-[13.5px] text-slate-500 dark:text-slate-400">Last updated: {updated}</p>
        </div>
      </div>
      <section aria-label={title} className="py-12 bg-mist-50 dark:bg-[#060f22]">
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border hairline bg-white dark:bg-[#0b1c38] p-6 sm:p-10 prose-clean space-y-5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-600 dark:text-slate-300">
            {children}
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export function PrivacyPolicy() {
  return (
    <Shell title="Privacy Policy" path="/privacy-policy" updated="September 2026">
      <p>{COMPANY.name} (“we”, “our”) respects your privacy. This policy explains what information we receive when you contact us and how we use it.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">Information you share with us</h2>
      <p>When you call, email, message us on WhatsApp or complete an enquiry form, you may share your name, company name, phone number, email address and details of your requirement. Our website enquiry forms prepare your message on your own device; nothing is submitted to a server automatically — you choose to send it by email or WhatsApp.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">How we use it</h2>
      <p>We use your details only to understand your requirement, respond to your enquiry and discuss a possible engagement. We do not sell your personal information.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">Communication</h2>
      <p>By sharing your contact details, you agree that we may contact you about your enquiry by phone, email or WhatsApp. You may ask us to stop at any time.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">Data retention</h2>
      <p>Enquiry correspondence is retained only for as long as needed to handle your request and any follow-up business relationship, unless a longer period is required by law.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">Your rights</h2>
      <p>You may request access, correction or deletion of personal information you have shared with us by writing to <a className="underline font-semibold" href={COMPANY.emailHref}>{COMPANY.email}</a>.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">Contact</h2>
      <p>For privacy questions, contact {COMPANY.name}, {COMPANY.fullAddress}. Email: <a className="underline font-semibold" href={COMPANY.emailHref}>{COMPANY.email}</a>. Phone: <a className="underline font-semibold" href={COMPANY.primaryPhoneHref}>{COMPANY.phones[0].label}</a>.</p>
    </Shell>
  );
}

export function TermsAndConditions() {
  return (
    <Shell title="Terms & Conditions" path="/terms-and-conditions" updated="September 2026">
      <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">About this website</h2>
      <p>This website presents the services of {COMPANY.name}, based in Ghansoli, Navi Mumbai. Content is provided for general information about our capabilities and does not constitute professional advice for any specific situation.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">Enquiries</h2>
      <p>Submitting an enquiry — by form handoff, email, phone or WhatsApp — does not create a client relationship or a commitment to timelines, pricing or outcomes. Any engagement is governed by a separate written understanding agreed with you before work begins.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">Intellectual property</h2>
      <p>Text, layouts, graphics and branding on this website belong to {COMPANY.name} unless stated otherwise. You may view and share pages for genuine business evaluation, but may not copy substantial content for republication without permission.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">Acceptable use</h2>
      <p>You agree not to misuse this website, attempt unauthorised access, submit false or misleading enquiries, or interfere with its operation.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">Limitation of liability</h2>
      <p>To the extent permitted by law, {COMPANY.name} is not liable for loss arising from reliance on website content or from interruptions to website availability.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">Contact</h2>
      <p>Questions about these terms: <a className="underline font-semibold" href={COMPANY.emailHref}>{COMPANY.email}</a>, <a className="underline font-semibold" href={COMPANY.primaryPhoneHref}>{COMPANY.phones[0].label}</a>, {COMPANY.fullAddress}.</p>
    </Shell>
  );
}

export function CookiePolicy() {
  return (
    <Shell title="Cookie Policy" path="/cookie-policy" updated="September 2026">
      <p>This page explains how {COMPANY.name} uses cookies and similar storage on this website.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">What we store</h2>
      <p>We store a single preference — your colour-theme choice (light, dark or system) — in your browser's local storage under the key <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-[13px]">{COMPANY.themeKey}</code>. This is used only to remember how you prefer to view the site.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">What we do not do</h2>
      <p>We do not use advertising cookies, cross-site trackers or analytics beacons of our own on this website. Embedded content you choose to interact with — such as the map on our contact page or a WhatsApp chat link — is governed by those providers' own policies.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">Managing your preference</h2>
      <p>You can change your theme at any time from the header control, or clear site data in your browser settings to remove the stored preference.</p>
      <h2 className="font-display font-bold text-[18px] text-slate-900 dark:text-white">Contact</h2>
      <p>Questions: <a className="underline font-semibold" href={COMPANY.emailHref}>{COMPANY.email}</a>.</p>
    </Shell>
  );
}
