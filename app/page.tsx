"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bug,
  Code2,
  Database,
  Smartphone,
  ShieldCheck,
  TestTube2,
  CheckCircle2,
  Mail,
  GitBranch,
  Link2,
  Briefcase,
  ArrowUpRight,
  Star,
  Sparkles,
  Globe2,
  Bot,
  Calendar,
  User,
  Award,
  X,
  ExternalLink,
} from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const highlights = [
  "14+ years of professional QA experience",
  "11+ years of remote client delivery",
  "200+ web & mobile applications tested",
  "Top Rated Plus · 100% Job Success on Upwork",
  "Strong English communication & clear bug reports",
  "SaaS, eCommerce, Healthcare, FinTech & AI products",
];

const services = [
  { icon: TestTube2, title: "Manual & Exploratory QA", desc: "Functional, regression, smoke, sanity, UAT, and edge-case discovery across web, mobile, and desktop." },
  { icon: Code2, title: "Playwright Automation", desc: "Stable UI automation, smoke suites, and CI-friendly regression coverage with Playwright MCP." },
  { icon: Database, title: "API & SQL Validation", desc: "Postman API checks plus database integrity, duplicates, nulls, and migration validation." },
  { icon: Smartphone, title: "Real Device Mobile QA", desc: "iOS, Android, iPad, TestFlight, BrowserStack, and real-device coverage across screen sizes." },
  { icon: Bot, title: "AI Product Testing", desc: "AI app testing, prompt validation, and quality checks for AI-powered product flows." },
  { icon: ShieldCheck, title: "Release Readiness", desc: "Cross-browser, accessibility (WCAG), production verification, and go / no-go confidence." },
];

const expertise = [
  "Manual Testing (Web, Mobile & Desktop)",
  "Functional, Regression, Smoke & E2E",
  "API Testing with Postman",
  "AI Application & Prompt Validation",
  "Exploratory & Edge Case Discovery",
  "UI/UX Testing & Product Feedback",
  "Integration & Compatibility Testing",
  "User Acceptance Testing (UAT)",
  "Release & Production Validation",
  "Accessibility Testing (WCAG)",
  "Cross-Browser & Cross-Device Testing",
  "SQL Database Validation",
];

const automation = [
  "Playwright MCP",
  "Cypress",
  "Selenium IDE",
  "JMeter",
  "Postman",
  "SQL Validation",
  "GitHub / Bitbucket",
  "CI/CD Workflows",
];

const tools = [
  "Jira",
  "Trello",
  "Asana",
  "Monday",
  "GitHub",
  "Bitbucket",
  "BrowserStack",
  "TestFlight",
  "Android Studio",
  "Xcode",
  "Postman",
  "Chrome DevTools",
];

const industries = [
  "SaaS Platforms",
  "eCommerce (Shopify, WooCommerce, Magento)",
  "Healthcare & Telehealth",
  "FinTech & Banking",
  "Logistics & Transportation",
  "Sports & Gaming",
  "Education Platforms",
  "Insurance",
  "Enterprise Business Apps",
];

const brands = [
  "Tesco",
  "Harrods",
  "Marks & Spencer",
  "Xoom",
  "FedEx",
  "Dell",
  "Visa",
  "Hilton",
];

const caseStudies = [
  {
    title: "Sports Management Platform",
    type: "Web + Mobile QA",
    summary:
      "Validated live scoring, match management, team sheets, offline behavior, permissions and tablet layouts across iOS, Android and web.",
    impact: "Found release-blocking workflow, sync and UI issues before production.",
  },
  {
    title: "EdTech Application",
    type: "Mobile + Ad Hoc QA",
    summary:
      "Ad hoc testing for a complicated, multifaceted edtech product under pressure — covering critical learner and admin flows.",
    impact: "Became an essential QA partner for a high-stakes release cycle.",
  },
  {
    title: "SaaS Dashboard / Data Platform",
    type: "Web QA + Data Validation",
    summary:
      "Designed coverage for tables, filters, sorting, ETL-style workflows, exports, role access and audit logs.",
    impact: "Reduced data quality risk through UI, API and SQL validation.",
  },
];

const bugs = [
  {
    sev: "Critical",
    title: "Previously logged-in wallet remained accessible after logout/new signup",
    detail:
      "After logging out and creating a new account, the previously connected wallet session was still available during export flow.",
    impact: "Security/privacy risk. A new user could access or trigger actions from a previous user session.",
  },
  {
    sev: "Critical",
    title: "Match substitution removed from team sheet but missing from action log",
    detail:
      "A player substitution/removal was applied in the team sheet, but the change did not appear in the match action log.",
    impact: "Audit/history mismatch. Match records could become unreliable.",
  },
  {
    sev: "High",
    title: "Widget item not displaying on iPhone home screen widget",
    detail:
      "After adding a toy/item to the widget from the app, the iOS home screen widget remained empty even after selecting the item again.",
    impact: "Core widget feature fails, reducing user trust and engagement.",
  },
  {
    sev: "High",
    title: "App crashes/freezes when editing substitution time from Action Log",
    detail:
      "When editing a substitution event time from the Action Log during a paused match, the app froze/crashed on iPad.",
    impact: "Live match officials may lose progress during critical match operations.",
  },
  {
    sev: "High",
    title: "Payment flow fails with connection token retrieval error",
    detail:
      "Tap-to-Pay checkout failed with an execution error while retrieving the payment connection token.",
    impact: "Users cannot complete purchases; direct revenue loss.",
  },
  {
    sev: "High",
    title: "Offline mode resets balance to zero without warning",
    detail:
      "When the app lost internet connection, the user’s balance appeared as zero without any offline-state warning.",
    impact: "Users may think their balance was lost, causing trust and support issues.",
  },
];

const feedback = [
  {
    source: "Upwork",
    title: "QA Website Tester",
    role: "Client",
    date: "May 15, 2025",
    client: "Serish K.",
    quote:
      "Masfiqur was extremely knowledgeable in his field and dove right into our project with little to no guidance. He consistently met all deadlines and delivered high-quality work.",
  },
  {
    source: "LinkedIn",
    title: "Staff Software Engineer · Indeed | Ex-Amazon",
    role: "Managed directly",
    date: "Feb 7, 2022",
    client: "Stephen Wentling",
    quote:
      "Masfiqur had an outsized impact on the quality of the application. His bug reports were highly detailed, easy to reproduce and included potential UX improvements. Definitely would rehire him.",
  },
  {
    source: "Upwork",
    title: "QA Engineer for Ethereum Decentralized App Testing",
    role: "Client",
    date: "Sep 21, 2022",
    client: "Kevin Moturi",
    quote:
      "Masfiqur was very professional with great communication. His skills are excellent. He always went above and beyond the task, always motivating and pushing the team to work hard and make sure features worked correctly.",
  },
  {
    source: "Upwork",
    title: "Ad hoc testing for an edtech application",
    role: "Client",
    date: "Oct 21, 2023",
    client: "Daniel B.",
    quote:
      "Masfiqur was a critical member of our team and absolutely essential for testing a complicated and multifaceted edtech application. He functioned well under pressure and was extremely proactive.",
  },
  {
    source: "LinkedIn",
    title: "Product Owner and Head of Marketing & Sales",
    role: "Managed directly · ~10 years",
    date: "Jul 10, 2025",
    client: "Brian Wood",
    quote:
      "In over nearly a decade of working with Masfiqur, I've found he has a keen eye for detail, is always seeking to expand his skill set, and works well on a team.",
  },
  {
    source: "LinkedIn",
    title: "CEO | Founder | Speaker",
    role: "Managed directly",
    date: "Jun 9, 2021",
    client: "David Hartmann",
    quote:
      "Great team member, always pleasure to work with, and very reliable. Masfiq has often taken initiative frequently to learn new skills and level up.",
  },
];

const whyHire = [
  "Strong analytical and problem-solving skills",
  "Exceptional bug reporting with screenshots and video",
  "Ability to think like an end user",
  "Fast turnaround and proactive communication",
  "Reliable regression and release testing",
  "Deep understanding of business and technical needs",
];

const stats = [
  ["14+", "Years experience"],
  ["$200K+", "Upwork earnings"],
  ["30", "Total jobs"],
  ["11K+", "Hours delivered"],
];

const certificates = [
  {
    title: "Claude 101",
    issuer: "Anthropic",
    issued: "May 6, 2026",
    file: "/certificates/claude-101.pdf",
    preview: "/certificates/previews/claude-101.png",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    issued: "Certificate of Completion",
    file: "/certificates/ai-fluency.pdf",
    preview: "/certificates/previews/ai-fluency.png",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    issued: "Certificate of Completion",
    file: "/certificates/claude-code-101.pdf",
    preview: "/certificates/previews/claude-code-101.png",
  },
];

const links = {
  upwork: "https://www.upwork.com/freelancers/masfique",
  linkedin: "https://www.linkedin.com/in/masfique/",
  github: "https://github.com/masfiqurr",
  email: "mailto:ameit001@gmail.com",
};

export default function Home() {
  const [activeCert, setActiveCert] = useState<(typeof certificates)[number] | null>(null);

  useEffect(() => {
    if (!activeCert) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveCert(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeCert]);

  return (
    <main className="overflow-x-hidden bg-ink text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="group flex items-baseline gap-1.5">
            <span className="font-display text-lg font-semibold tracking-tight text-white transition group-hover:text-brandSoft md:text-xl">
              Masfiqur
            </span>
            <span className="font-display text-lg font-medium tracking-tight text-brandSoft md:text-xl">
              Rahman
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-mute md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#certificates" className="transition hover:text-white">
              Certificates
            </a>
            <a href="#feedback" className="transition hover:text-white">
              Feedback
            </a>
            <a href="#case-studies" className="transition hover:text-white">
              Work
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <a href={links.upwork} target="_blank" rel="noreferrer" className="btn-primary">
            Hire Me <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-[100svh] flex-col overflow-x-clip pt-20">
        <div className="pointer-events-none absolute inset-0 hero-grid" />
        <div className="pointer-events-none absolute left-1/2 top-16 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-brand/25 blur-[110px] hero-glow md:h-[380px] md:w-[380px]" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-8 text-center md:py-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div
              variants={fade}
              transition={{ duration: 0.5 }}
              className="mb-4 flex flex-wrap items-center justify-center gap-2.5 md:mb-5"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent md:text-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Top Rated Plus · 100% Job Success
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/15 px-3.5 py-1.5 text-xs font-semibold text-brandSoft md:text-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                14+ Years Experience
              </span>
            </motion.div>

            <motion.h1
              variants={fade}
              transition={{ duration: 0.55 }}
              className="font-display font-semibold heading-hero"
            >
              Top-Rated Senior QA Engineer
              <span className="mt-1.5 block text-brandSoft md:mt-2">
                Helping Teams Ship High-Quality Web, Mobile &amp; AI Products
              </span>
            </motion.h1>

            <motion.p
              variants={fade}
              transition={{ duration: 0.55 }}
              className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-mute md:mt-5 md:text-base md:leading-8"
            >
              Senior software QA engineer, tester, and QA lead helping startups and enterprises ship
              reliable products with manual QA, Playwright automation, API testing, AI validation,
              documentation, end-to-end testing, and release readiness.
            </motion.p>

            <motion.div
              variants={fade}
              transition={{ duration: 0.55 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8"
            >
              <a href={links.upwork} target="_blank" rel="noreferrer" className="btn-primary">
                Hire on Upwork <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#feedback" className="btn-secondary">
                Client Feedback
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mt-8 grid w-full max-w-4xl grid-cols-2 gap-2.5 md:mt-10 md:grid-cols-4 md:gap-3"
          >
            {stats.map(([value, label]) => (
              <motion.div
                key={label}
                variants={cardFade}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-2xl border px-4 py-4 text-left md:px-5 md:py-5 ${
                  label === "Years experience"
                    ? "border-brand/50 bg-brand/15 shadow-glow"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <div
                  className={`font-display text-2xl font-semibold leading-none md:text-3xl ${
                    label === "Years experience" ? "text-brandSoft" : "text-white"
                  }`}
                >
                  {value}
                </div>
                <div className="mt-2 text-xs leading-snug text-mute md:text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="border-y border-line bg-panel/60">
        <div className="section grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fade}
            transition={{ duration: 0.55 }}
          >
            <span className="badge">About</span>
            <h2 className="mt-5 font-display font-semibold heading-section">
              <span className="text-brandSoft">14+ years</span> as a software QA engineer, tester &amp; QA lead
            </h2>
            <p className="mt-6 text-base leading-8 text-mute md:text-lg">
              I am a Senior Software Quality Assurance Engineer with 14+ years of experience helping
              startups, SaaS companies, and enterprise organizations deliver reliable products. Whether
              you need a hands-on QA engineer, software tester, or QA manager mindset for release
              planning, my focus is not only finding bugs — but improving usability, user experience,
              and overall product quality before release.
            </p>
            <p className="mt-4 text-base leading-8 text-mute md:text-lg">
              I have contributed to projects for global brands including Tesco, Harrods, Marks & Spencer,
              Xoom, FedEx, Dell, Visa, Hilton, and many others.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-lg border border-line bg-ink px-3 py-1.5 text-sm text-mute"
                >
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={cardFade}
            className="rounded-2xl border border-line bg-ink p-7"
          >
            <h3 className="font-display text-xl font-semibold">Key highlights</h3>
            <ul className="mt-5 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-mute">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="services" className="section">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fade}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="badge">Services</span>
          <h2 className="mt-5 font-display font-semibold heading-section">
            End-to-end QA across web, mobile, API & AI
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={cardFade}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-line bg-panel p-7 transition hover:border-brand/50 hover:shadow-glow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 text-brandSoft">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-mute">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-line bg-panel/60">
        <div className="section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">QA Expertise</span>
            <h2 className="mt-5 font-display font-semibold heading-section">
              Manual depth plus technical coverage
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {expertise.map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-ink p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm leading-7 text-mute">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="border-y border-line bg-panel/60">
        <div className="section">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fade}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="badge">Certificates</span>
            <h2 className="mt-5 font-display font-semibold heading-section">
              Verified credentials in AI &amp; Claude
            </h2>
            <p className="mt-4 text-base leading-7 text-mute">
              Click any certificate to open a full preview.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mt-14 grid gap-4 md:grid-cols-3"
          >
            {certificates.map((cert) => (
              <motion.button
                key={cert.file}
                type="button"
                variants={cardFade}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setActiveCert(cert)}
                className="group overflow-hidden rounded-2xl border border-line bg-ink text-left transition hover:border-brand/50 hover:shadow-glow"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                  <img
                    src={cert.preview}
                    alt={`${cert.title} certificate preview`}
                    className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-md bg-brand/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                    <Award className="h-3.5 w-3.5" />
                    Preview
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brandSoft">
                    {cert.issuer}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{cert.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mute">{cert.issued}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="feedback" className="section">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fade}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="badge">Recommendations</span>
          <h2 className="mt-5 font-display font-semibold heading-section">
            Trusted by clients, CEOs, and engineering leaders
          </h2>
          <p className="mt-4 text-base leading-7 text-mute">
            Selected feedback from Upwork clients and LinkedIn recommendations.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {feedback.map((item) => (
            <motion.div
              key={`${item.source}-${item.client}`}
              variants={cardFade}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col rounded-2xl border border-line bg-panel p-7"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                    item.source === "Upwork"
                      ? "bg-accent/15 text-accent"
                      : "bg-brand/20 text-brandSoft"
                  }`}
                >
                  {item.source}
                </span>
                {item.source === "Upwork" && (
                  <span className="inline-flex items-center gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                    <span className="ml-1 text-xs font-semibold text-white">5.0</span>
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{item.client}</h3>
              <p className="mt-1 text-sm leading-6 text-mute">{item.title}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-mute">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" />
                  {item.role}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </span>
              </div>
              <p className="mt-5 flex-1 text-sm leading-7 text-mute">&ldquo;{item.quote}&rdquo;</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <a
            href={links.upwork}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brandSoft transition hover:text-white"
          >
            Upwork profile <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brandSoft transition hover:text-white"
          >
            LinkedIn recommendations <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="case-studies" className="border-y border-line bg-panel/60">
        <div className="section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">Case Studies</span>
            <h2 className="mt-5 font-display font-semibold heading-section">
              Anonymized examples from real QA work
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {caseStudies.map((item) => (
              <div key={item.title} className="flex flex-col rounded-2xl border border-line bg-ink p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brandSoft">
                  {item.type}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-snug">{item.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-mute">{item.summary}</p>
                <p className="mt-6 rounded-xl border border-brand/30 bg-brand/10 p-4 text-sm font-medium leading-6 text-brandSoft">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bugs" className="section">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge">Critical / High Impact Bugs</span>
          <h2 className="mt-5 font-display font-semibold heading-section">
            Clear bug reports developers can act on
          </h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {bugs.map((bug) => (
            <div key={bug.title} className="rounded-2xl border border-line bg-panel p-6">
              <span
                className={`rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${
                  bug.sev === "Critical"
                    ? "bg-red-500/20 text-red-300"
                    : bug.sev === "High"
                      ? "bg-orange-500/20 text-orange-300"
                      : "bg-yellow-500/20 text-yellow-200"
                }`}
              >
                {bug.sev}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug">{bug.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mute">{bug.detail}</p>
              <p className="mt-5 text-sm font-semibold leading-6 text-white">Impact: {bug.impact}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel/60">
        <div className="section grid gap-10 md:grid-cols-2">
          <div>
            <span className="badge">Automation & Technical</span>
            <h2 className="mt-5 font-display font-semibold heading-section">
              Tools that catch real risk
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {automation.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-line bg-ink px-4 py-2 text-sm font-medium text-mute"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="badge">Platforms</span>
            <h2 className="mt-5 font-display font-semibold heading-section">
              Everyday delivery stack
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-line bg-ink px-4 py-2 text-sm font-medium text-mute"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-panel p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 text-brandSoft">
              <Globe2 className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-snug">Industry experience</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {industries.map((item) => (
                <span key={item} className="rounded-lg border border-line bg-ink px-3 py-1.5 text-sm text-mute">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-panel p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 text-brandSoft">
              <Smartphone className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-snug">Real device testing</h3>
            <p className="mt-4 text-sm leading-7 text-mute">
              Accurate validation across browsers, OS versions, screen sizes, and real-world scenarios —
              including iPhone 17 Pro Max, iPhones & iPads, Android devices, Windows, MacBooks, and Linux.
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-7 text-mute">
              {[
                "iPhone 17 Pro Max & multi-iOS coverage",
                "Android devices via BrowserStack & local",
                "Windows, MacBook & Linux environments",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-panel/60">
        <div className="section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">Why Clients Hire Me</span>
            <h2 className="mt-5 font-display font-semibold heading-section">
              Reliable quality partner, not just a bug finder
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {whyHire.map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-ink p-6">
                <Bug className="h-5 w-5 text-brandSoft" />
                <p className="mt-4 text-sm leading-7 text-mute">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mt-0 grid gap-4 md:grid-cols-2">
          <div className="min-w-0 overflow-hidden rounded-2xl border border-line bg-panel p-5 sm:p-7">
            <h3 className="font-display text-2xl font-semibold">Playwright Automation</h3>
            <pre className="code-block mt-5">
{`test("smoke flow", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Email")
    .fill("qa@example.com");
  await page.getByRole("button", {
    name: "Login",
  }).click();
  await expect(
    page.getByText("Dashboard")
  ).toBeVisible();
});`}
            </pre>
          </div>
          <div className="min-w-0 overflow-hidden rounded-2xl border border-line bg-panel p-5 sm:p-7">
            <h3 className="font-display text-2xl font-semibold">SQL Validation</h3>
            <pre className="code-block mt-5">
{`SELECT external_id, COUNT(*)
FROM destination_table
GROUP BY external_id
HAVING COUNT(*) > 1;`}
            </pre>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="relative overflow-x-clip rounded-3xl border border-brand/40 bg-gradient-to-br from-brand to-[#2A0F6B] p-10 md:p-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            Available now for QA projects
          </span>
          <h2 className="mt-6 max-w-3xl font-display font-semibold heading-section md:!text-[3.25rem]">
            Need a senior QA engineer with 14+ years of experience?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Thorough manual testing, API validation, AI testing, Playwright automation, and actionable
            product feedback — ready to help your next release.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={links.email}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-accent"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a href={links.upwork} target="_blank" rel="noreferrer" className="btn-secondary border-white/30">
              <Briefcase className="h-4 w-4" /> Upwork
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn-secondary border-white/30">
              <Link2 className="h-4 w-4" /> LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className="btn-secondary border-white/30">
              <GitBranch className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-8 text-center text-sm text-mute">
        © 2026 Masfiqur Rahman. Top-Rated Senior QA Engineer · 14+ Years.
      </footer>

      {activeCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCert.title} certificate preview`}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-glow"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brandSoft">
                  {activeCert.issuer}
                </p>
                <h3 className="mt-1 truncate font-display text-lg font-semibold leading-snug">
                  {activeCert.title}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={activeCert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-brand/50 hover:bg-brand/20"
                >
                  Open PDF <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-brand/50 hover:bg-brand/20"
                  aria-label="Close certificate preview"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-auto bg-ink p-3 sm:p-5">
              <img
                src={activeCert.preview}
                alt={`${activeCert.title} full certificate`}
                className="mx-auto max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
