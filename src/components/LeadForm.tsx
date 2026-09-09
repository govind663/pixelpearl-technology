import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Loader2, CheckCircle2, AlertCircle, Mail, MessageCircle, Send } from "lucide-react";
import { COMPANY, SERVICE_OPTIONS, whatsappLink } from "../lib/site";

interface Values { name: string; company: string; phone: string; email: string; service: string; message: string }
interface Errors extends Partial<Record<keyof Values, string>> {}

const initial: Values = { name: "", company: "", phone: "", email: "", service: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim() || v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!v.phone.trim()) e.phone = "Please enter your phone number.";
  else {
    const digits = v.phone.replace(/[^\d]/g, "");
    if (digits.length < 10 || digits.length > 13) e.phone = "Please enter a valid phone number with at least 10 digits.";
  }
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.service) e.service = "Please select a service.";
  if (v.message && v.message.trim().length > 0 && v.message.trim().length < 10) e.message = "Please describe your requirement in a little more detail (min 10 characters), or leave the message blank.";
  return e;
}

export default function LeadForm({ presetService = "", id = "enquiry-form", title = "Let’s Discuss Your Requirement", subtitle = "Share a few details and choose how to send your enquiry — by email or WhatsApp. We respond to every genuine business enquiry." }: { presetService?: string; id?: string; title?: string; subtitle?: string }) {
  const [values, setValues] = useState<Values>({ ...initial, service: presetService });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [sending, setSending] = useState(false);
  const [prepared, setPrepared] = useState(false);
  const [formError, setFormError] = useState("");

  const set = (k: keyof Values, val: string) => {
    const next = { ...values, [k]: val };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
    if (prepared) setPrepared(false);
    if (formError) setFormError("");
  };
  const blur = (k: keyof Values) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const bodyText = () =>
    `Name: ${values.name.trim()}\nCompany: ${values.company.trim() || "—"}\nPhone: ${values.phone.trim()}\nEmail: ${values.email.trim()}\nService Required: ${values.service}\n\nMessage:\n${values.message.trim() || "—"}`;

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setTouched({ name: true, phone: true, email: true, service: true, message: true });
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setFormError("Please review the highlighted fields and try again.");
      const first = document.querySelector(`#${id} .field-error`) as HTMLElement | null;
      first?.focus();
      return;
    }
    setSending(true);
    // No backend — prepare handoff honestly, never fake a submission.
    window.setTimeout(() => {
      setSending(false);
      setPrepared(true);
      setFormError("");
      document.getElementById(`${id}-ready`)?.focus();
    }, 450);
  };

  const waHref = whatsappLink(`Hello Pixelpearl Technologies, I would like to discuss a business requirement.\n\n${bodyText()}`);
  const mailHref = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`Website Enquiry — ${values.service || "General"} — ${values.name.trim()}`)}&body=${encodeURIComponent(bodyText())}`;
  const inputCls = (k: keyof Values) => `field-input ${errors[k] && touched[k] ? "field-error" : ""}`;

  return (
    <div className="bg-white dark:bg-[#0b1c38] rounded-3xl border hairline shadow-[0_24px_60px_-24px_rgba(10,25,48,0.35)] overflow-hidden">
      <div className="p-6 sm:p-8 pb-0">
        <h2 className="font-display text-[22px] sm:text-[26px] font-extrabold tracking-tight text-slate-900 dark:text-white">{title}</h2>
        <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600 dark:text-slate-300">{subtitle}</p>
      </div>
      <form id={id} onSubmit={onSubmit} noValidate aria-label="Request consultation" className="p-6 sm:p-8 pt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="block text-[13.5px] font-bold text-slate-800 dark:text-slate-100 mb-1.5">Full Name <span aria-hidden="true" className="text-red-600">*</span></label>
          <input id={`${id}-name`} name="name" type="text" autoComplete="name" required aria-required="true" aria-invalid={!!(errors.name && touched.name)} aria-describedby={errors.name && touched.name ? `${id}-name-err` : undefined} className={inputCls("name")} placeholder="e.g. Rahul Sharma" value={values.name} onChange={(e) => set("name", e.target.value)} onBlur={() => blur("name")} />
          {errors.name && touched.name && <p id={`${id}-name-err`} role="alert" className="mt-1.5 text-[13px] font-medium text-red-600 dark:text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-company`} className="block text-[13.5px] font-bold text-slate-800 dark:text-slate-100 mb-1.5">Company Name</label>
          <input id={`${id}-company`} name="company" type="text" autoComplete="organization" className="field-input" placeholder="Your organisation (optional)" value={values.company} onChange={(e) => set("company", e.target.value)} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="block text-[13.5px] font-bold text-slate-800 dark:text-slate-100 mb-1.5">Phone <span aria-hidden="true" className="text-red-600">*</span></label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" required aria-required="true" inputMode="tel" aria-invalid={!!(errors.phone && touched.phone)} aria-describedby={errors.phone && touched.phone ? `${id}-phone-err` : undefined} className={inputCls("phone")} placeholder="+91 …" value={values.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => blur("phone")} />
          {errors.phone && touched.phone && <p id={`${id}-phone-err`} role="alert" className="mt-1.5 text-[13px] font-medium text-red-600 dark:text-red-400">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="block text-[13.5px] font-bold text-slate-800 dark:text-slate-100 mb-1.5">Email <span aria-hidden="true" className="text-red-600">*</span></label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" required aria-required="true" aria-invalid={!!(errors.email && touched.email)} aria-describedby={errors.email && touched.email ? `${id}-email-err` : undefined} className={inputCls("email")} placeholder="you@company.com" value={values.email} onChange={(e) => set("email", e.target.value)} onBlur={() => blur("email")} />
          {errors.email && touched.email && <p id={`${id}-email-err`} role="alert" className="mt-1.5 text-[13px] font-medium text-red-600 dark:text-red-400">{errors.email}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-service`} className="block text-[13.5px] font-bold text-slate-800 dark:text-slate-100 mb-1.5">Service Required <span aria-hidden="true" className="text-red-600">*</span></label>
          <select id={`${id}-service`} name="service" required aria-required="true" aria-invalid={!!(errors.service && touched.service)} aria-describedby={errors.service && touched.service ? `${id}-service-err` : undefined} className={inputCls("service")} value={values.service} onChange={(e) => set("service", e.target.value)} onBlur={() => blur("service")}>
            <option value="">Select a service…</option>
            {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && touched.service && <p id={`${id}-service-err`} role="alert" className="mt-1.5 text-[13px] font-medium text-red-600 dark:text-red-400">{errors.service}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className="block text-[13.5px] font-bold text-slate-800 dark:text-slate-100 mb-1.5">Message</label>
          <textarea id={`${id}-message`} name="message" rows={4} aria-describedby={`${id}-message-hint ${errors.message && touched.message ? `${id}-message-err` : ""}`} className={`${inputCls("message")} resize-y min-h-[110px]`} placeholder="What are you trying to build, improve or solve?" value={values.message} onChange={(e) => set("message", e.target.value)} onBlur={() => blur("message")} />
          <p id={`${id}-message-hint`} className="mt-1.5 text-[12.5px] text-slate-500 dark:text-slate-400">A few lines about your goal, timeline or current setup helps us respond usefully.</p>
          {errors.message && touched.message && <p id={`${id}-message-err`} role="alert" className="mt-1.5 text-[13px] font-medium text-red-600 dark:text-red-400">{errors.message}</p>}
        </div>

        {formError && (
          <div role="alert" className="sm:col-span-2 flex items-start gap-2.5 rounded-xl border border-red-300 bg-red-50 dark:bg-red-950/40 dark:border-red-800 px-4 py-3 text-[14px] font-medium text-red-700 dark:text-red-300">
            <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" /> {formError}
          </div>
        )}

        {!prepared ? (
          <div className="sm:col-span-2">
            <button type="submit" disabled={sending} className="btn-primary w-full sm:w-auto min-w-[240px] min-h-[52px] disabled:opacity-70">
              {sending ? <><Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> Preparing…</> : <><Send className="w-[18px] h-[18px]" aria-hidden="true" /> Request Consultation</>}
            </button>
            <p className="mt-3 text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
              This form does not submit to a server automatically. On the next step you choose <strong>Email</strong> or <strong>WhatsApp</strong> to send your enquiry directly to our team. Prefer to talk now? <a className="underline font-semibold text-royal-600 dark:text-cyan-300" href={COMPANY.primaryPhoneHref}>Call {COMPANY.phones[0].label}</a>.
            </p>
          </div>
        ) : (
          <div id={`${id}-ready`} tabIndex={-1} role="status" className="sm:col-span-2 rounded-2xl border border-teal-500/40 bg-teal-50 dark:bg-teal-950/30 p-5">
            <p className="flex items-start gap-2.5 font-bold text-slate-900 dark:text-white text-[15px]">
              <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-300 shrink-0 mt-0.5" aria-hidden="true" />
              Your enquiry is ready — send it in one tap.
            </p>
            <p className="mt-1.5 text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Nothing has been submitted yet. Choose below to open your message in <strong>Email</strong> or <strong>WhatsApp</strong> and press send. Or <Link to="/contact" className="underline font-semibold">visit our contact page</Link> for call options.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
              <a href={mailHref} className="btn-navy flex-1 min-h-[52px]"><Mail className="w-[18px] h-[18px]" aria-hidden="true" /> Send via Email</a>
              <a href={waHref} target="_blank" rel="noopener" className="btn-whatsapp flex-1 min-h-[52px]"><MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" /> Send via WhatsApp</a>
            </div>
            <button type="button" onClick={() => setPrepared(false)} className="mt-3 text-[13.5px] font-semibold underline text-slate-600 dark:text-slate-300">Edit details</button>
          </div>
        )}
      </form>
    </div>
  );
}
