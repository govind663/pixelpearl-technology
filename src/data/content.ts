export interface Faq { q: string; a: string }
export interface ServiceDetail {
  slug: string;
  short: string;
  h1: string;
  title: string;
  description: string;
  intro: string[];
  problems: { title: string; text: string }[];
  solutions: { title: string; text: string }[];
  benefits: string[];
  useCases: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faqs: Faq[];
  related: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: "web-development",
    short: "Web Development",
    h1: "Web Development for Modern Businesses",
    title: "Web Development Services in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies designs and builds fast, secure, scalable business websites and web platforms for companies in Ghansoli, Navi Mumbai and beyond.",
    intro: [
      "Your website is often the first serious conversation a customer has with your business. Pixelpearl Technologies designs and develops business websites that are clear, fast, secure and easy to manage — from corporate sites and catalogues to enquiry-driven websites and content platforms.",
      "Based in Ghansoli, Navi Mumbai, our team works with MSMEs, healthcare providers, educators, manufacturers, retailers, real-estate firms, professional services and startups to plan, design, build and support websites structured around business goals — not just pages.",
    ],
    problems: [
      { title: "Outdated or unclear website", text: "An old, slow or confusing website makes even a capable business look unreliable and pushes enquiries to competitors." },
      { title: "Poor mobile experience", text: "Most enquiries in Navi Mumbai and across India arrive on phones. Layouts that break on small screens lose calls and WhatsApp chats." },
      { title: "Slow pages and poor visibility", text: "Heavy pages, missing structure and weak on-page basics reduce search visibility and frustrate visitors." },
      { title: "Hard to update", text: "When every small change needs a developer, content goes stale and campaigns stall." },
    ],
    solutions: [
      { title: "Business websites", text: "Corporate sites, service sites and multi-page websites with clear journeys: what you do, who you help, why trust you, how to contact." },
      { title: "Enquiry-focused builds", text: "Click-to-call, WhatsApp, enquiry forms, maps and service structure designed to turn visits into conversations." },
      { title: "Content & publishing-ready", text: "Clean editing workflows, structured pages and SEO foundations so your team can publish without friction." },
      { title: "Performance & security basics", text: "Responsive layouts, image optimisation, SSL, form validation, backups guidance and maintenance options." },
    ],
    benefits: [
      "Clear positioning that explains your business in seconds",
      "Mobile-first layouts that work from 320px to large desktops",
      "Faster pages and SEO foundations for visibility",
      "Enquiry paths — call, WhatsApp, email and forms — on every key page",
      "Structured content your team can keep updated",
      "A website that can scale as services and locations grow",
    ],
    useCases: [
      { title: "Corporate & service websites", text: "For MSMEs, clinics, institutes, manufacturers, builders and consultants who need credibility and enquiries." },
      { title: "Catalogue & lead websites", text: "Product, treatment, course or project catalogues that guide visitors toward a call or visit." },
      { title: "Content & media sites", text: "Structured publishing layouts for articles, journals, updates and resources." },
    ],
    process: [
      { title: "Discover", text: "Understand your business, audiences, services and enquiry goals." },
      { title: "Plan", text: "Sitemap, page goals, enquiry paths and content outline." },
      { title: "Design", text: "Clean, corporate layouts with your brand and readability first." },
      { title: "Develop", text: "Responsive, accessible, performance-conscious build." },
      { title: "Test", text: "Devices, browsers, forms, links, speed and accessibility checks." },
      { title: "Launch", text: "Deployment, redirects, analytics and search setup." },
      { title: "Support", text: "Updates, backups guidance and improvement options." },
    ],
    faqs: [
      { q: "How long does a business website take?", a: "Timelines depend on pages, content readiness and reviews. A focused corporate site typically moves from discovery to launch in a few weeks once content is confirmed. Share your requirement and we will outline a practical timeline." },
      { q: "Will my website work well on mobile phones?", a: "Yes. Every build is mobile-first and tested across small phones to desktops, with tap-friendly call, WhatsApp and form actions." },
      { q: "Can you improve our existing website instead of rebuilding?", a: "In many cases, yes. We review structure, speed, mobile experience and enquiry paths, then recommend targeted improvements or a rebuild — whichever serves the business better." },
      { q: "Will we be able to update content ourselves?", a: "We structure pages and publishing workflows so your team can update text, images and articles without developer help for day-to-day changes." },
      { q: "Do you help with content and launch basics?", a: "Yes — page structure, on-page SEO foundations, analytics, maps and enquiry integrations are part of a complete launch." },
    ],
    related: ["software-development", "digital-marketing", "cloud-hosting", "cybersecurity"],
  },
  {
    slug: "software-development",
    short: "Software Development",
    h1: "Custom Software Built Around Your Business",
    title: "Custom Software Development in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies plans and builds custom software, portals, dashboards and platforms shaped around your workflows — for businesses in Navi Mumbai and beyond.",
    intro: [
      "Off-the-shelf tools force your team to work around someone else's process. Pixelpearl Technologies plans and builds custom software — portals, dashboards, internal tools and web platforms — shaped around how your business actually operates.",
      "We start from the workflow: who does what, what information matters, and where delays happen. Then we design practical, scalable software your team can adopt without disruption.",
    ],
    problems: [
      { title: "Spreadsheets everywhere", text: "Orders, enquiries, patients, students or inventory tracked across files and chats creates errors and lost follow-ups." },
      { title: "Disconnected tools", text: "Data sits in separate apps that do not talk to each other, so reporting takes days instead of minutes." },
      { title: "Generic software misfit", text: "Licensed tools carry features you never use while missing the one workflow that matters most." },
      { title: "No visibility", text: "Owners and managers lack a single, reliable view of work, status and performance." },
    ],
    solutions: [
      { title: "Custom web applications", text: "Portals, dashboards and workflow tools with roles, permissions and clear screens for each user." },
      { title: "Business platforms", text: "Enquiry, order, booking, membership or listing workflows with structured data and reporting." },
      { title: "Integrations", text: "Connect forms, WhatsApp, email, payments, sheets and third-party APIs where they genuinely help." },
      { title: "Maintainable builds", text: "Documented structure, staged releases and support options so the system can evolve." },
    ],
    benefits: [
      "Workflows that match your team instead of forcing change",
      "Single source of truth for enquiries, work and records",
      "Role-based access and clearer accountability",
      "Reports and views that support decisions",
      "Scalable architecture that grows with users and data",
      "Long-term partner for improvements and support",
    ],
    useCases: [
      { title: "Enquiry & CRM workflows", text: "Capture, assign, follow up and review enquiries from website, call and WhatsApp in one place." },
      { title: "Operations dashboards", text: "Track orders, jobs, batches, admissions or cases with status, owners and history." },
      { title: "Customer & member portals", text: "Secure logins, profiles, documents, requests and communication in one window." },
    ],
    process: [
      { title: "Discover", text: "Map workflows, users, data and pain points." },
      { title: "Plan", text: "Scope, modules, roles, integrations and phased roadmap." },
      { title: "Design", text: "Screens and flows validated with real users." },
      { title: "Develop", text: "Iterative builds with regular reviews." },
      { title: "Test", text: "Functional, usability, security and data checks." },
      { title: "Launch", text: "Staged rollout, training and documentation." },
      { title: "Support", text: "Monitoring, fixes, backups and enhancements." },
    ],
    faqs: [
      { q: "Do we need detailed documentation before we talk?", a: "No. A conversation about your workflow, team and goals is enough to start. We help convert that into a clear, phased plan." },
      { q: "Can you start small and expand later?", a: "Yes. Most engagements begin with one core workflow, then expand module by module so investment stays controlled." },
      { q: "Will our team be able to use the software easily?", a: "Usability is part of the design. Screens follow your team's language and roles, with training and documentation at launch." },
      { q: "Can you integrate with tools we already use?", a: "Where an integration genuinely helps — forms, email, WhatsApp, payments or data sources — we plan it as part of the scope." },
      { q: "Who owns the work and documentation?", a: "Engagement terms, access, documentation and handover are discussed openly before development begins." },
    ],
    related: ["web-development", "ai-automation", "cloud-hosting", "cybersecurity"],
  },
  {
    slug: "ai-automation",
    short: "AI & Automation",
    h1: "AI & Automation for Smarter Business Operations",
    title: "AI & Automation Solutions in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies helps businesses in Navi Mumbai apply AI assistants, workflow automation, document processing and integrations to practical daily work.",
    intro: [
      "AI is most valuable when it removes repetitive work and helps your team respond faster. Pixelpearl Technologies helps businesses identify practical starting points — AI assistants, workflow automation, document processing, data summaries and integrations — and implement them carefully.",
      "We focus on business fit, data discipline and human oversight, so automation supports your team rather than complicating it." ,
    ],
    problems: [
      { title: "Repetitive manual work", text: "Copying data, drafting replies, summarising documents and chasing follow-ups consume skilled hours." },
      { title: "Slow responses", text: "Enquiries, tickets and internal requests wait because the right information is hard to find quickly." },
      { title: "Unstructured information", text: "Documents, emails and chats hold answers, but nobody can search or summarise them reliably." },
      { title: "AI uncertainty", text: "Teams hear about AI but lack a safe, practical path to try it on real work." },
    ],
    solutions: [
      { title: "AI assistants", text: "Grounded assistants that answer from your approved content, documents and FAQs — with escalation to humans." },
      { title: "Workflow automation", text: "Enquiry routing, follow-up reminders, status updates and handoffs across forms, email and WhatsApp." },
      { title: "Document processing", text: "Extraction, summarisation and organisation of invoices, forms, reports and records." },
      { title: "Data analysis support", text: "Clean views, summaries and reports that help managers see what needs attention." },
    ],
    benefits: [
      "Less repetitive work for skilled staff",
      "Faster first responses to enquiries and requests",
      "More consistent answers grounded in approved content",
      "Better-organised documents and information",
      "Automation with human review where it matters",
      "A practical roadmap instead of experimental spending",
    ],
    useCases: [
      { title: "Enquiry & support assistance", text: "Draft replies, FAQs and routing so teams respond faster with consistent information." },
      { title: "Document-heavy workflows", text: "Admissions, applications, records and reports summarised and organised for review." },
      { title: "Operations coordination", text: "Reminders, status summaries and handoffs that keep work moving without extra meetings." },
    ],
    process: [
      { title: "Discover", text: "Identify repetitive workflows and information bottlenecks." },
      { title: "Plan", text: "Choose one pilot with clear inputs, outputs and owners." },
      { title: "Design", text: "Define knowledge sources, guardrails and human review." },
      { title: "Develop", text: "Build, connect and configure the pilot carefully." },
      { title: "Test", text: "Validate accuracy, edge cases and escalation paths." },
      { title: "Launch", text: "Roll out to the team with guidance and monitoring." },
      { title: "Support", text: "Review, refine and expand to adjacent workflows." },
    ],
    faqs: [
      { q: "Where should a small business start with AI?", a: "Start with one repetitive, well-defined workflow — such as enquiry FAQs or document summaries — where inputs and good answers are already known. Pilots keep risk low and learning fast." },
      { q: "Will AI replace our team?", a: "Our approach is assistive: AI drafts, organises and summarises while people review and decide. The goal is faster, more consistent work — not unsupervised decisions." },
      { q: "How do you handle accuracy and data privacy?", a: "Assistants are grounded in your approved content, with review steps and access controls. Data handling, retention and permissions are discussed before any build." },
      { q: "Can AI connect with our existing tools?", a: "In many cases, yes — forms, email, sheets, CRMs and messaging can be connected as part of a planned workflow." },
      { q: "What does an AI pilot typically include?", a: "A defined use case, knowledge setup, guardrails, testing, team guidance and a review period — so you can judge value before expanding." },
    ],
    related: ["software-development", "cloud-hosting", "cybersecurity", "digital-marketing"],
  },
  {
    slug: "cloud-hosting",
    short: "Cloud & Hosting",
    h1: "Cloud & Hosting Solutions Built for Reliability",
    title: "Cloud & Hosting Solutions in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies plans and manages cloud, hosting, servers, performance, backup, monitoring and security for dependable digital operations.",
    intro: [
      "Every website, application and automation depends on infrastructure that simply works. Pixelpearl Technologies plans, sets up and supports cloud and hosting environments with attention to performance, backups, monitoring, security and scalability.",
      "Whether you run a corporate website, a customer portal or growing business workloads from Ghansoli, Navi Mumbai, we help you choose right-sized infrastructure — and keep it healthy." ,
    ],
    problems: [
      { title: "Slow or unstable hosting", text: "Shared or misconfigured hosting causes downtime and slow pages at the worst moments — campaigns, admissions, launches." },
      { title: "No backup confidence", text: "Without tested backups, a single incident can mean lost content, orders or records." },
      { title: "Unclear scaling path", text: "Traffic spikes or growing data expose limits nobody planned for." },
      { title: "Nobody watching", text: "Issues surface through customer complaints instead of monitoring and alerts." },
    ],
    solutions: [
      { title: "Right-sized hosting & cloud", text: "Select and configure hosting or cloud resources matched to traffic, data and growth plans." },
      { title: "Performance setup", text: "Caching, image handling, CDN guidance and optimisation for faster loads." },
      { title: "Backup & recovery planning", text: "Scheduled backups, retention and restore procedures your team understands." },
      { title: "Monitoring & maintenance", text: "Uptime checks, updates, SSL, access hygiene and periodic reviews." },
    ],
    benefits: [
      "Dependable websites and applications for customers and staff",
      "Faster page loads and smoother experiences",
      "Documented backups and recovery steps",
      "Monitoring that catches issues early",
      "Security basics handled consistently",
      "Clear path to scale as demand grows",
    ],
    useCases: [
      { title: "Business websites", text: "Managed hosting setup with SSL, backups and performance basics for corporate and catalogue sites." },
      { title: "Web applications & portals", text: "Staged environments, access control and monitoring for customer and internal tools." },
      { title: "Growing workloads", text: "Resource reviews and scaling plans as traffic, users and data increase." },
    ],
    process: [
      { title: "Discover", text: "Review current setup, traffic, applications and risks." },
      { title: "Plan", text: "Recommend right-sized infrastructure and backup approach." },
      { title: "Design", text: "Define environments, access and monitoring." },
      { title: "Develop", text: "Configure, migrate and harden carefully." },
      { title: "Test", text: "Verify performance, backups, restores and alerts." },
      { title: "Launch", text: "Cut over with checks and rollback readiness." },
      { title: "Support", text: "Ongoing monitoring, updates and reviews." },
    ],
    faqs: [
      { q: "Can you review our current hosting?", a: "Yes. We assess performance, SSL, backups, email deliverability basics and scaling headroom, then recommend practical next steps." },
      { q: "Will there be downtime during migration?", a: "Migrations are planned with staging, checks and low-traffic windows to minimise disruption. A rollback plan is part of the approach." },
      { q: "Do you provide ongoing maintenance?", a: "Maintenance and monitoring options are available so updates, backups and checks happen consistently after launch." },
      { q: "Which cloud or hosting should we choose?", a: "It depends on traffic, applications, data, budget and team capacity. We recommend right-sized options and explain the trade-offs plainly." },
      { q: "How are backups handled?", a: "Backup frequency, retention and restore testing are defined upfront and documented, so responsibility is never ambiguous." },
    ],
    related: ["web-development", "software-development", "cybersecurity", "ai-automation"],
  },
  {
    slug: "cybersecurity",
    short: "Cybersecurity",
    h1: "Cybersecurity for Modern Digital Businesses",
    title: "Cybersecurity Services in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies helps Navi Mumbai businesses strengthen website, application and data security with practical reviews, hardening and guidance.",
    intro: [
      "As businesses move enquiries, payments, records and communication online, basic security discipline becomes essential. Pixelpearl Technologies helps businesses review exposures, harden websites and applications, and adopt safer everyday practices.",
      "Our approach is practical and proportionate — prioritised fixes, clear explanations and habits your team can sustain." ,
    ],
    problems: [
      { title: "Exposed websites & forms", text: "Outdated software, weak passwords and unreviewed forms invite spam, defacement or data misuse." },
      { title: "Unclear responsibilities", text: "Nobody is sure who updates what, who has access, or what happens if something goes wrong." },
      { title: "Phishing & account risks", text: "Email, cloud and social accounts are high-value targets without basic protections." },
      { title: "No incident readiness", text: "Without backups and a response outline, small incidents become long disruptions." },
    ],
    solutions: [
      { title: "Security reviews", text: "Structured checks of websites, applications, access, SSL, backups and common misconfigurations." },
      { title: "Hardening", text: "Updates, access cleanup, strong authentication, form protections and secure configurations." },
      { title: "Best-practice guidance", text: "Password, device, email and access habits documented for owners and staff." },
      { title: "Ongoing hygiene", text: "Update, backup and review routines that keep protections current." },
    ],
    benefits: [
      "Clearer picture of exposures and priorities",
      "Harder targets for common attacks and spam",
      "Better access control across tools and sites",
      "Documented backups and response steps",
      "Safer daily habits for teams",
      "Foundation for compliance conversations where relevant",
    ],
    useCases: [
      { title: "Website & portal hardening", text: "Reviews and fixes for corporate sites, portals and enquiry workflows." },
      { title: "Small-team security basics", text: "Account, access and backup discipline for MSMEs, clinics, institutes and firms." },
      { title: "Pre-launch checks", text: "Security review before launches, admissions, campaigns or migrations." },
    ],
    process: [
      { title: "Discover", text: "Inventory sites, apps, accounts, access and data." },
      { title: "Plan", text: "Prioritise risks and agree scope and timelines." },
      { title: "Design", text: "Define target configurations and responsibilities." },
      { title: "Develop", text: "Apply fixes, hardening and documentation." },
      { title: "Test", text: "Verify fixes, access, backups and protections." },
      { title: "Launch", text: "Hand over checklists and guidance to the team." },
      { title: "Support", text: "Periodic reviews, updates and improvements." },
    ],
    faqs: [
      { q: "Is this a one-time audit or ongoing support?", a: "Both are possible. Many businesses start with a review and hardening, then continue with periodic checks and maintenance." },
      { q: "Do you guarantee we will never be breached?", a: "No honest provider can guarantee that. What we provide is reduced exposure, stronger controls, tested backups and a clearer response plan." },
      { q: "Will security work disrupt our team?", a: "Work is scheduled to minimise disruption, with changes explained and access transitions coordinated with your team." },
      { q: "Do you help with staff awareness?", a: "Yes — practical guidance on passwords, phishing caution, safe sharing and device basics is part of the handover." },
      { q: "Can you review a website built by someone else?", a: "Yes. Independent reviews of existing sites and setups are a common starting point." },
    ],
    related: ["cloud-hosting", "web-development", "software-development", "ai-automation"],
  },
  {
    slug: "digital-marketing",
    short: "Digital Marketing",
    h1: "Digital Marketing Solutions That Build Visibility",
    title: "Digital Marketing Services in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies helps businesses in Navi Mumbai build search visibility, local presence and enquiry pipelines with practical SEO and digital marketing.",
    intro: [
      "Visibility compounds when the fundamentals are right: a clear website, accurate local presence, useful content and consistent follow-through. Pixelpearl Technologies helps businesses in Ghansoli, Navi Mumbai and beyond build that foundation — then grow it steadily.",
      "We plan around enquiries, not vanity metrics: calls, WhatsApp chats, form fills and visits that your team can actually handle." ,
    ],
    problems: [
      { title: "Invisible in search", text: "Potential customers search for your services but find competitors with clearer pages and stronger local presence." },
      { title: "Inconsistent presence", text: "Outdated listings, mismatched details and dormant profiles undermine trust before first contact." },
      { title: "Activity without pipeline", text: "Posting without structure produces effort but few trackable enquiries." },
      { title: "No clarity on what works", text: "Without defined goals and basic tracking, marketing spend cannot be judged or improved." },
    ],
    solutions: [
      { title: "SEO foundations", text: "Keyword-mapped pages, on-page structure, local relevance and technical basics for business searches." },
      { title: "Local visibility", text: "Accurate profiles, maps, reviews guidance and location pages for Navi Mumbai audiences." },
      { title: "Content support", text: "Service pages, articles and updates that answer real customer questions." },
      { title: "Enquiry tracking", text: "Call, WhatsApp and form paths with basic analytics so improvement is grounded in data." },
    ],
    benefits: [
      "Clearer positioning in search and maps for business queries",
      "Consistent business information everywhere customers look",
      "Content that answers questions and supports sales conversations",
      "Enquiry paths that are easy to find and use",
      "Basic reporting that shows what is improving",
      "A sustainable routine instead of sporadic campaigns",
    ],
    useCases: [
      { title: "Local service visibility", text: "For clinics, institutes, builders, consultants and services competing in Navi Mumbai searches." },
      { title: "Catalogue & retail discovery", text: "Product, course and project visibility that guides shoppers toward enquiry or visit." },
      { title: "B2B pipeline support", text: "Clear service pages and resources that help manufacturing and professional firms start conversations." },
    ],
    process: [
      { title: "Discover", text: "Understand offerings, audiences, locations and enquiry goals." },
      { title: "Plan", text: "Keyword map, page plan, local actions and measurement." },
      { title: "Design", text: "Messaging, page structure and content outlines." },
      { title: "Develop", text: "Publish and optimise pages, profiles and content." },
      { title: "Test", text: "Check tracking, listings, speed and usability." },
      { title: "Launch", text: "Roll out improvements and content rhythm." },
      { title: "Support", text: "Review, refine and expand what shows traction." },
    ],
    faqs: [
      { q: "How soon will we see results?", a: "Foundations — listings, pages and tracking — improve quickly. Search visibility typically builds over months as content and relevance compound. We set expectations by opportunity, not promises." },
      { q: "Do you run paid ads?", a: "Engagements focus on sustainable visibility — SEO, local presence and content. Paid campaign needs can be discussed as part of an overall enquiry plan." },
      { q: "Will we know where enquiries come from?", a: "Yes. Call, WhatsApp and form paths are structured with basic analytics so your team can see which pages and channels contribute." },
      { q: "Can you work with our existing website?", a: "Yes. We review the current site and recommend page, content and local improvements before suggesting larger changes." },
      { q: "Do you create the content?", a: "Content outlines, pages and editorial support are part of engagements, with your team's expertise shaping accuracy." },
    ],
    related: ["web-development", "media-pr", "publishing", "ai-automation"],
  },
  {
    slug: "media-pr",
    short: "Media & PR",
    h1: "Media & PR Solutions for Stronger Digital Visibility",
    title: "Media & PR Solutions in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies supports digital media, PR, brand communication and media management for stronger, more consistent visibility.",
    intro: [
      "Trust is built through consistent, credible communication. Pixelpearl Technologies supports digital media, PR assistance, brand communication and media management that helps businesses present themselves clearly across channels.",
      "From announcements and profiles to content coordination and publishing support, we help your message stay accurate, timely and discoverable." ,
    ],
    problems: [
      { title: "Inconsistent story", text: "Different profiles, pages and documents describe the business differently, confusing customers and partners." },
      { title: "Announcements that fade", text: "Launches, achievements and updates get one post and disappear without structured follow-through." },
      { title: "No media routine", text: "Without an editorial rhythm, visibility depends on occasional effort instead of steady presence." },
      { title: "Scattered assets", text: "Logos, photos, bios and documents live in different places, slowing every outreach." },
    ],
    solutions: [
      { title: "Digital media support", text: "Structured announcements, profiles and updates planned around business milestones." },
      { title: "PR assistance", text: "Press notes, backgrounders and outreach-ready materials prepared to professional standards." },
      { title: "Brand communication", text: "Consistent messaging, bios and boilerplates used accurately everywhere." },
      { title: "Media management", text: "Calendars, asset organisation and publishing coordination across owned channels." },
    ],
    benefits: [
      "A clear, consistent business narrative",
      "Professional materials ready for media and partners",
      "Steadier visibility around real milestones",
      "Better-organised assets and messaging",
      "Stronger credibility with customers and collaborators",
      "A communication routine your team can sustain",
    ],
    useCases: [
      { title: "Launches & announcements", text: "Openings, new services, facilities and partnerships communicated clearly." },
      { title: "Profile & credibility building", text: "Founder, practice, institute and company profiles with consistent proof points." },
      { title: "Ongoing visibility", text: "Editorial calendars that keep owned channels active without noise." },
    ],
    process: [
      { title: "Discover", text: "Understand positioning, audiences, milestones and assets." },
      { title: "Plan", text: "Messaging framework, calendar and channel priorities." },
      { title: "Design", text: "Draft materials, profiles and communication templates." },
      { title: "Develop", text: "Prepare, review and organise assets and content." },
      { title: "Test", text: "Check accuracy, approvals and publishing readiness." },
      { title: "Launch", text: "Coordinate announcements and distribution." },
      { title: "Support", text: "Maintain rhythm, update materials and review impact." },
    ],
    faqs: [
      { q: "Do you guarantee media coverage?", a: "No. We prepare professional, accurate materials and support structured outreach. Editorial decisions always rest with publications." },
      { q: "Can you help if our messaging is unclear?", a: "Yes. Clarifying positioning, audiences and proof points is often the first step before any outreach." },
      { q: "Do you manage social and owned channels?", a: "Support focuses on planning, content structure and publishing coordination so your channels stay consistent and credible." },
      { q: "What do you need from our team?", a: "Access to facts, milestones, photos and approvals. We structure the rest — drafts, calendars and coordination." },
      { q: "How does this connect with publishing?", a: "Media communication and publishing reinforce each other: announcements gain depth from articles, journals and corporate publications." },
    ],
    related: ["publishing", "digital-marketing", "web-development", "software-development"],
  },
  {
    slug: "publishing",
    short: "Publishing",
    h1: "Professional Publishing Solutions",
    title: "Professional Publishing Services in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies supports journals, research publications, books, corporate publications, editorial workflows and author support.",
    intro: [
      "Institutions, researchers, authors and businesses need publishing workflows that respect accuracy, structure and timelines. Pixelpearl Technologies provides editorial support, production coordination and digital publishing for journals, research publications, books, corporate publications and periodicals.",
      "We combine careful editorial process with dependable digital platforms, so content moves from manuscript to published work without losing quality." ,
    ],
    problems: [
      { title: "Manuscript-to-publish friction", text: "Submissions, reviews, revisions and formatting stall without a clear workflow and ownership." },
      { title: "Inconsistent quality", text: "Without editorial checks, errors and formatting issues reach readers and undermine credibility." },
      { title: "Weak digital presence", text: "Valuable journals, books and reports remain hard to discover, access or cite online." },
      { title: "Author uncertainty", text: "Authors and editors lack guidance on preparation, timelines and what good looks like." },
    ],
    solutions: [
      { title: "Journals & research publications", text: "Editorial workflows, issue organisation and digital presentation for journals and research outputs." },
      { title: "Books & corporate publications", text: "Structure, editorial coordination and production support for books, reports and corporate titles." },
      { title: "Editorial & author support", text: "Guidelines, checks, formatting standards and step-by-step author assistance." },
      { title: "Digital publishing & periodicals", text: "Web-ready publishing, archives and recurring issue management." },
    ],
    benefits: [
      "Clear workflows from submission to publication",
      "Stronger editorial consistency and accuracy",
      "Professional presentation of journals and books",
      "Discoverable digital archives and issues",
      "Confident authors supported at each step",
      "A publishing routine that respects timelines",
    ],
    useCases: [
      { title: "Academic & research journals", text: "Issue workflows, editorial checks and digital archives for institutions and societies." },
      { title: "Books & monographs", text: "Author guidance, editorial coordination and production for individual and institutional titles." },
      { title: "Corporate & institutional publications", text: "Reports, souvenirs, newsletters and periodicals produced to a dependable standard." },
    ],
    process: [
      { title: "Discover", text: "Understand publication goals, content types and timelines." },
      { title: "Plan", text: "Define workflow, roles, guidelines and issue plan." },
      { title: "Design", text: "Set structure, templates and presentation standards." },
      { title: "Develop", text: "Coordinate editorial, review and production stages." },
      { title: "Test", text: "Proof, validate and approve before release." },
      { title: "Launch", text: "Publish digitally with archives and indexing basics." },
      { title: "Support", text: "Manage subsequent issues and continuous improvement." },
    ],
    faqs: [
      { q: "What kinds of publications do you support?", a: "Journals, research publications, books, corporate publications, reports, newsletters and periodicals — with editorial and digital publishing support matched to each format." },
      { q: "Do you provide peer review or academic validation?", a: "Editorial and production support is provided; academic review and approvals remain with the institution, editors and appointed reviewers." },
      { q: "Can you help first-time authors?", a: "Yes. Author guidelines, preparation checklists and step-by-step support help new authors submit clean, complete manuscripts." },
      { q: "Will our journal or book be discoverable online?", a: "Digital publishing includes structured presentation, archives and discoverability basics so readers can find and access issues." },
      { q: "Can you manage recurring issues?", a: "Yes. Periodicals and journals can be supported on an ongoing issue cycle with defined timelines and ownership." },
    ],
    related: ["media-pr", "web-development", "digital-marketing", "software-development"],
  },
];

export interface IndustryDetail {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string[];
  challenges: { title: string; text: string }[];
  focus: { title: string; text: string }[];
  faqs: Faq[];
}

export const INDUSTRIES: IndustryDetail[] = [
  {
    slug: "msme",
    name: "MSME",
    title: "Technology Solutions for MSMEs in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies helps MSMEs in Ghansoli and Navi Mumbai with websites, software, cloud, automation and visibility that respect budgets and timelines.",
    intro: [
      "Micro, small and medium enterprises need technology that pays back quickly: clearer visibility, faster enquiries and simpler operations. Pixelpearl Technologies works with MSMEs in Ghansoli, Navi Mumbai and beyond to prioritise the few improvements that matter most — then deliver them reliably.",
      "Engagements are scoped practically, phased sensibly and explained plainly, so owners stay in control of cost and direction.",
    ],
    challenges: [
      { title: "Limited time and team bandwidth", text: "Owners juggle sales, delivery and admin — technology must reduce load, not add to it." },
      { title: "Enquiry leakage", text: "Calls, WhatsApp chats and forms slip through without structured capture and follow-up." },
      { title: "Budget discipline", text: "Every rupee must show return. Spending needs phasing and honest trade-offs." },
    ],
    focus: [
      { title: "Enquiry-ready websites", text: "Clear service pages with call, WhatsApp and form paths that turn visits into conversations." },
      { title: "Simple operational tools", text: "Lightweight trackers, dashboards and automations for enquiries, orders and follow-ups." },
      { title: "Local visibility", text: "Accurate listings, maps and content foundations for Navi Mumbai searches." },
      { title: "Maintainable setups", text: "Hosting, backups and update routines that do not demand daily attention." },
    ],
    faqs: [
      { q: "We have a small budget. Where should we start?", a: "Usually with the enquiry path: a clear website, accurate local presence and structured follow-up. Share your situation and we will recommend a phased starting point." },
      { q: "Can work be done in phases?", a: "Yes. Phased delivery is the norm — start with the core need, prove value, then expand." },
      { q: "Will we need technical staff to manage things?", a: "No. Setups are documented and explained so your existing team can manage day-to-day work, with support options when needed." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    title: "Technology Solutions for Healthcare in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies supports clinics and healthcare providers with websites, enquiry workflows, automation and dependable digital infrastructure.",
    intro: [
      "Patients choose providers they can understand and reach easily. Pixelpearl Technologies helps clinics, practices and healthcare organisations present services clearly, handle enquiries systematically and keep digital systems dependable.",
      "Work is planned around patient trust: accurate information, easy contact, organised records workflows and careful handling of sensitive communication." ,
    ],
    challenges: [
      { title: "Patient confusion", text: "Treatments, timings, doctors and directions spread across outdated pages create calls that could have been answered online." },
      { title: "Missed enquiries", text: "Appointment and treatment enquiries arrive on call, WhatsApp and forms without unified follow-up." },
      { title: "Operational load", text: "Front-desk teams repeat the same information while managing records and coordination manually." },
    ],
    focus: [
      { title: "Clear patient websites", text: "Services, doctors, timings, FAQs, directions and contact structured for quick answers." },
      { title: "Enquiry & appointment workflows", text: "Structured capture, routing and reminders across call, WhatsApp and forms." },
      { title: "Information assistance", text: "Grounded FAQs and document summaries that help staff respond consistently." },
      { title: "Dependable infrastructure", text: "Hosting, backups, monitoring and security basics for always-on presence." },
    ],
    faqs: [
      { q: "Can you work with our existing practice management setup?", a: "Yes. We review current tools and plan integrations or complementary workflows rather than forcing replacement." },
      { q: "How do you handle patient data sensitivity?", a: "Data handling, access control and retention are discussed upfront, with proportionate safeguards and clear responsibilities." },
      { q: "Do you build appointment booking systems?", a: "Enquiry and appointment workflows — including booking structures, confirmations and reminders — can be planned around your practice's process." },
    ],
  },
  {
    slug: "education",
    name: "Education",
    title: "Technology Solutions for Education in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies helps schools, institutes and training providers with websites, admissions workflows, content and publishing support.",
    intro: [
      "Parents and students compare institutes online long before they visit. Pixelpearl Technologies helps schools, colleges, coaching institutes and training providers present courses clearly, manage admission enquiries and publish knowledge with confidence.",
      "From course catalogues to enquiry follow-up and journals, work is structured around admissions seasons and academic rhythms." ,
    ],
    challenges: [
      { title: "Admission enquiry surges", text: "Seasonal spikes overwhelm teams without structured capture, counselling handoffs and follow-up." },
      { title: "Unclear course information", text: "Fees, eligibility, curriculum and outcomes scattered across pages create doubt." },
      { title: "Content underused", text: "Faculty knowledge, results and resources rarely reach the website in usable form." },
    ],
    focus: [
      { title: "Course & institute websites", text: "Programmes, faculty, results, FAQs and visit paths organised for parent and student decisions." },
      { title: "Admissions workflows", text: "Enquiry capture, counselling assignment, reminders and status views for the admissions team." },
      { title: "Knowledge publishing", text: "Articles, journals and resources presented with editorial care and archives." },
      { title: "Local visibility", text: "Maps, listings and location content for Navi Mumbai catchment searches." },
    ],
    faqs: [
      { q: "Can you help before admissions season?", a: "Yes — ideally engage early so pages, enquiry paths and follow-up workflows are tested before the rush." },
      { q: "Do you support journals and academic publications?", a: "Yes. Editorial workflows, issue management and digital archives are part of our publishing support." },
      { q: "Can counsellors manage enquiries easily?", a: "Workflows are designed around counsellor roles — assign, follow up, note and review — with training at launch." },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    title: "Technology Solutions for Manufacturing | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies supports manufacturers with corporate websites, catalogues, enquiry pipelines, dashboards and practical automation.",
    intro: [
      "Industrial buyers research thoroughly and expect precise information. Pixelpearl Technologies helps manufacturers present capabilities, products and certifications clearly, handle B2B enquiries systematically and gain better visibility into operations.",
      "Engagements respect long sales cycles: structured catalogues, technical content and follow-up discipline that support dealer and buyer conversations." ,
    ],
    challenges: [
      { title: "Thin digital presence", text: "Capable factories look small online with outdated pages and incomplete product information." },
      { title: "Slow RFQ handling", text: "Enquiries and specifications arrive by phone, email and chat without tracking or ownership." },
      { title: "No operational view", text: "Orders, batches and dispatch tracked manually, limiting responsiveness." },
    ],
    focus: [
      { title: "Industrial websites & catalogues", text: "Products, capabilities, infrastructure and quality information organised for B2B evaluation." },
      { title: "Enquiry & RFQ workflows", text: "Structured capture, assignment and follow-up for dealer and buyer enquiries." },
      { title: "Operations visibility", text: "Dashboards and trackers for orders, batches and status that managers can trust." },
      { title: "Technical content", text: "Specification pages, case-style explainers and resources that answer buyer questions." },
    ],
    faqs: [
      { q: "Our products are technical. Can you present them accurately?", a: "Yes. We work from your specifications, drawings and team inputs, structuring information so engineers and buyers both find what they need." },
      { q: "Can you support dealer and distributor enquiries?", a: "Enquiry workflows can distinguish dealer, distributor and direct buyer paths with appropriate routing and follow-up." },
      { q: "Do you work with our existing ERP or sheets?", a: "We review current systems first and plan complementary tools or integrations rather than duplicating them." },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    title: "Technology Solutions for Retail in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies helps retailers with discovery-ready websites, catalogues, local visibility and enquiry workflows that drive visits.",
    intro: [
      "Shoppers discover, compare and direction-search on their phones. Pixelpearl Technologies helps retailers — single stores and growing chains — get discovered, present assortments clearly and convert searches into visits and enquiries.",
      "Focus stays on what moves the counter: accurate listings, compelling catalogues, easy contact and steady local presence." ,
    ],
    challenges: [
      { title: "Discovery gaps", text: "Stores with strong assortments remain invisible in maps and product searches." },
      { title: "Stale catalogues", text: "Outdated photos, prices and availability create mistrust before the visit." },
      { title: "No enquiry loop", text: "WhatsApp and call enquiries about stock, sizes and delivery lack structure." },
    ],
    focus: [
      { title: "Store & catalogue websites", text: "Categories, featured products, offers and visit information organised for phones." },
      { title: "Local discovery", text: "Accurate profiles, maps, hours and review guidance for nearby searches." },
      { title: "Enquiry workflows", text: "Stock, order and delivery questions routed to the right staff quickly." },
      { title: "Campaign support", text: "Festival, launch and offer pages with clear calls to visit, call or chat." },
    ],
    faqs: [
      { q: "Do you build online stores with payments?", a: "Catalogue, enquiry and ordering workflows are planned around your fulfilment model. Payment and logistics needs are scoped honestly during discovery." },
      { q: "Can you handle multiple store locations?", a: "Yes — location pages, maps and listings are structured so each store is accurately represented." },
      { q: "How do we keep catalogues updated?", a: "Publishing workflows are designed so your team can update products, photos and offers without developer help." },
    ],
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    title: "Technology Solutions for Agriculture | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies supports agri-businesses, FPOs and rural enterprises with clear websites, information workflows and practical digital tools.",
    intro: [
      "Farmer collectives, agri-input providers, processors and rural enterprises need communication that works across languages, literacy levels and connectivity. Pixelpearl Technologies helps present offerings clearly and organise information flows practically.",
      "Solutions emphasise clarity, phone-first design and workflows field teams can actually sustain." ,
    ],
    challenges: [
      { title: "Reach and clarity", text: "Offerings, prices, collection points and schedules fail to reach members and buyers in usable form." },
      { title: "Phone-first audiences", text: "Desktop assumptions exclude the very users the system is meant to serve." },
      { title: "Coordination overhead", text: "Collections, orders and advisories managed over scattered calls and messages." },
    ],
    focus: [
      { title: "Clear organisational websites", text: "Offerings, member information, intervention areas and contact in plain, accessible structure." },
      { title: "Information workflows", text: "Advisories, schedules and updates organised for reliable dissemination." },
      { title: "Coordination tools", text: "Simple trackers and dashboards for collections, orders and field activity." },
      { title: "Knowledge publishing", text: "Guides, practices and reports published for lasting reference." },
    ],
    faqs: [
      { q: "Will solutions work on basic phones and slow networks?", a: "Phone-first, lightweight design and clear information hierarchy are priorities for agriculture-facing work." },
      { q: "Can content be multilingual?", a: "Content structure supports multiple languages; translation scope and review responsibilities are planned with your team." },
      { q: "Do you work with FPOs and non-profits?", a: "Yes. Organisational websites, member communication and reporting workflows are scoped around mission and budget realities." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    title: "Technology Solutions for Real Estate in Navi Mumbai | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies helps builders and real-estate firms with project websites, site-visit enquiries, follow-up workflows and local visibility.",
    intro: [
      "Property decisions involve high trust and long consideration. Pixelpearl Technologies helps builders, developers and consultants present projects credibly, capture site-visit enquiries and follow up systematically.",
      "Project pages, location storytelling, inventory clarity and responsive follow-up form the core of effective real-estate digital presence." ,
    ],
    challenges: [
      { title: "Project information gaps", text: "Configuration, carpet areas, possession, approvals and location details scattered or missing." },
      { title: "Lost site-visit intent", text: "High-intent enquiries cool off without rapid, organised response." },
      { title: "Broker and channel complexity", text: "Multiple sources and intermediaries make attribution and follow-up messy." },
    ],
    focus: [
      { title: "Project websites", text: "Configurations, floor plans, amenities, location and approvals presented with clarity." },
      { title: "Site-visit workflows", text: "Enquiry capture, scheduling, reminders and post-visit follow-up." },
      { title: "Channel-ready materials", text: "Consistent project sheets, FAQs and updates for brokers and partners." },
      { title: "Local visibility", text: "Location pages and listings for Navi Mumbai micro-market searches." },
    ],
    faqs: [
      { q: "Can you build a website for a single project?", a: "Yes — single-project sites and multi-project portfolios are both common, with enquiry paths tuned to site visits." },
      { q: "How fast should we respond to enquiries?", a: "Faster is consistently better. Workflows prioritise rapid first response with assignment and reminders so no lead waits." },
      { q: "Do you handle channel partner enquiries?", a: "Source tagging and routing can distinguish direct, broker and portal enquiries for appropriate follow-up." },
    ],
  },
  {
    slug: "startups",
    name: "Startups",
    title: "Technology Solutions for Startups | Pixelpearl Technologies",
    description:
      "Pixelpearl Technologies helps startups in Navi Mumbai and beyond launch faster with websites, MVPs, automation and scalable foundations.",
    intro: [
      "Startups need speed without painting themselves into a corner. Pixelpearl Technologies helps founders launch credible websites and focused MVPs, automate early operations and keep architecture ready to scale.",
      "We favour sharp scope, rapid iteration and honest build-versus-buy guidance — so runway goes toward learning, not rework." ,
    ],
    challenges: [
      { title: "Launch pressure", text: "Investor, hiring and customer conversations all demand something credible — quickly." },
      { title: "Scope creep", text: "Everything feels urgent; without phasing, nothing ships." },
      { title: "Technical debt risk", text: "Shortcuts that speed week one can stall month six without basic discipline." },
    ],
    focus: [
      { title: "Launch websites", text: "Positioning, product story, waitlists and contact structured for early traction." },
      { title: "Focused MVPs", text: "One core workflow built well, instrumented and ready to iterate." },
      { title: "Early automation", text: "Onboarding, follow-ups and internal handoffs automated from day one." },
      { title: "Scalable foundations", text: "Hosting, data structure and access set up to grow without rebuilds." },
    ],
    faqs: [
      { q: "Can you help us decide what to build first?", a: "Yes. Discovery focuses on the riskiest assumption and the smallest build that tests it — then a roadmap beyond." },
      { q: "Do you work with non-technical founders?", a: "Regularly. Progress is explained in business terms with demos and clear decisions, not jargon." },
      { q: "Can you support us after launch?", a: "Yes — iteration, monitoring and enhancement support help you learn and improve continuously." },
    ],
  },
];

export const PROFESSIONAL_SERVICES: IndustryDetail = {
  slug: "professional-services",
  name: "Professional Services",
  title: "Technology Solutions for Professional Services | Pixelpearl Technologies",
  description:
    "Pixelpearl Technologies helps consultants, agencies, legal, finance and professional firms build credibility, pipelines and organised delivery.",
  intro: [
    "Professional firms sell expertise and trust. Pixelpearl Technologies helps consultants, legal, finance, architecture and agency practices present that expertise clearly, capture qualified enquiries and organise delivery.",
    "Work centres on authority: service clarity, proof structures, thought leadership and responsive enquiry handling.",
  ],
  challenges: [
    { title: "Undifferentiated presence", text: "Generic service lists fail to convey depth, method or outcomes." },
    { title: "Referral dependence", text: "Without discoverable expertise, pipelines swing with referrals alone." },
    { title: "Delivery scattered", text: "Matters, engagements and documents tracked inconsistently across partners." },
  ],
  focus: [
    { title: "Authority websites", text: "Practice areas, team credibility, engagement models and consultation paths." },
    { title: "Consultation workflows", text: "Qualified enquiry capture, scheduling and follow-up that respects senior time." },
    { title: "Knowledge publishing", text: "Articles, guides and updates that demonstrate thinking and aid business development." },
    { title: "Engagement organisation", text: "Trackers and portals for matters, documents and client communication." },
  ],
  faqs: [
    { q: "How do we present confidential work?", a: "Expertise can be shown through methods, frameworks and anonymised scenarios without disclosing client confidences." },
    { q: "Can you support thought leadership?", a: "Yes — editorial planning and publishing support help partners share insight consistently." },
    { q: "Do you help with consultation booking?", a: "Consultation paths — qualification, scheduling and reminders — are planned around how partners prefer to engage." },
  ],
};
