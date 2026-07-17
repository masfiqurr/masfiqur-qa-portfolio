"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  Award,
  X,
  ExternalLink,
  Menu,
  CreditCard,
  Container,
  AppWindow,
  Download,
} from "lucide-react";
import TestimonialsSection from "@/components/Testimonials";
import { testimonials } from "@/data/testimonials";

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
  "Bachelor’s and Master’s degrees in Computer Science",
  "Clients across USA, UK, Australia, Netherlands & Brazil",
  "11+ years of remote client delivery",
  "200+ web & mobile applications tested",
  "Top Rated Plus · 100% Job Success on Upwork",
  "Strong English communication & clear bug reports",
  "SaaS, eCommerce, Healthcare, FinTech & AI products",
];

const services = [
  {
    icon: TestTube2,
    title: "Manual QA & Exploratory Testing",
    desc: "Hands-on manual QA for web and mobile apps — functional, regression, smoke, sanity, UAT, and edge-case discovery.",
  },
  {
    icon: Code2,
    title: "Playwright Automation",
    desc: "Playwright QA and automation engineering with stable UI suites, smoke coverage, and CI-friendly regression using Playwright MCP.",
  },
  {
    icon: Database,
    title: "API Testing & SQL Validation",
    desc: "API testing with Postman plus SQL checks for data integrity, duplicates, nulls, and migration validation.",
  },
  {
    icon: Smartphone,
    title: "Mobile App QA (iOS & Android)",
    desc: "iOS and Android QA on real devices — TestFlight, APK, Expo, Xcode, iPad, BrowserStack, and cross-device screen coverage.",
  },
  {
    icon: Bot,
    title: "AI QA & Prompt Validation",
    desc: "AI product testing, prompt validation, and quality checks for AI-powered SaaS and application flows.",
  },
  {
    icon: ShieldCheck,
    title: "Release Readiness & eCommerce QA",
    desc: "Cross-browser testing, accessibility (WCAG), production verification, and eCommerce checkout confidence.",
  },
  {
    icon: CreditCard,
    title: "Stripe Payment Testing",
    desc: "Stripe checkout, subscriptions, refunds, and edge cases — including NFC-enabled mobile apps verified with Stripe test cards.",
  },
  {
    icon: Container,
    title: "Local Branch Verification",
    desc: "Local QA on feature branches using Git, Docker, and related setup — verify builds, env configs, and flows before merge or release.",
  },
  {
    icon: AppWindow,
    title: "Analytics QA",
    desc: "Firebase and Google Analytics event triggering and tracking verification — confirm tags, funnels, and key product events fire correctly.",
  },
];

const expertise = [
  "Manual Testing (Web, Mobile & Desktop)",
  "Functional, Regression, Smoke & E2E",
  "API Testing with Postman",
  "Stripe Payment Testing",
  "NFC App Testing with Stripe Test Cards",
  "Local Branch Verification (Git & Docker)",
  "TestFlight, APK, Expo & Xcode App Testing",
  "Firebase & Google Analytics Event Verification",
  "Analytics QA",
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
  "Git / GitHub / Bitbucket",
  "Docker",
  "CI/CD Workflows",
];

const tools = [
  "Jira",
  "Trello",
  "Asana",
  "Monday",
  "Slack",
  "Loom",
  "GitHub",
  "Bitbucket",
  "Docker",
  "Stripe Test Cards",
  "TestFlight",
  "Expo",
  "Firebase Analytics",
  "Google Analytics",
  "BrowserStack",
  "Android Studio",
  "Xcode",
  "Postman",
  "Chrome DevTools",
  "Cursor",
  "Claude",
  "Network Link Conditioner",
  "Charles Proxy",
];

const industries = [
  "SaaS Platforms",
  "AI Platforms",
  "eCommerce (Shopify, WooCommerce, Magento)",
  "Booking & Travel Sites",
  "Healthcare & Telehealth",
  "FinTech & Banking",
  "Blockchain & Web3",
  "Logistics & Transportation",
  "Sports & Gaming",
  "Education Platforms",
  "Insurance",
  "Enterprise Business Apps",
  "Lumentender — lighting scheduling & control",
  "Planet Price — AI environmental impact",
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
    type: "Web + Mobile App QA",
    summary:
      "Manual QA and real-device testing for live scoring, match management, team sheets, offline behavior, permissions, and tablet layouts across iOS, Android, and web.",
    impact: "Found release-blocking workflow, sync, and UI issues before production.",
  },
  {
    title: "EdTech Application",
    type: "Mobile + Ad Hoc QA",
    summary:
      "Ad hoc software testing for a complicated, multifaceted edtech product under pressure — covering critical learner and admin flows.",
    impact: "Became an essential QA partner for a high-stakes release cycle.",
  },
  {
    title: "SaaS Dashboard / Data Platform",
    type: "Web QA + API & SQL Validation",
    summary:
      "Designed SaaS QA coverage for tables, filters, sorting, ETL-style workflows, exports, role access, and audit logs with API testing and SQL validation.",
    impact: "Reduced data quality risk through UI, API, and SQL validation.",
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

const feedback: {
  source: "Upwork" | "LinkedIn";
  title: string;
  role: string;
  company?: string;
  date: string;
  client: string;
  quote: string;
}[] = [
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
    role: "Co-Founder",
    company: "Power Moves Development LLC",
    date: "Sep 21, 2022",
    client: "Kevin Moturi",
    quote:
      "Masfiqur was very professional with great communication. His skills are excellent. He always went above and beyond the task, always motivating and pushing the team to work hard and make sure features worked correctly.",
  },
  {
    source: "Upwork",
    title: "Ad hoc testing for an edtech application",
    role: "Founder",
    company: "Teachally",
    date: "Oct 21, 2023",
    client: "Daniel Bernstein",
    quote:
      "Masfiqur was a critical member of our team and absolutely essential for testing a complicated and multifaceted edtech application. He functioned well under pressure and was extremely proactive.",
  },
  {
    source: "LinkedIn",
    title: "Product Owner and Head of Marketing & Sales",
    role: "Managed directly · ~10 years",
    company: "The SilverLogic",
    date: "Jul 10, 2025",
    client: "Brian Wood",
    quote:
      "In over nearly a decade of working with Masfiqur, I've found he has a keen eye for detail, is always seeking to expand his skill set, and works well on a team.",
  },
  {
    source: "LinkedIn",
    title: "CEO | Founder | Speaker",
    role: "Managed directly",
    company: "The SilverLogic",
    date: "Jun 9, 2021",
    client: "David Hartmann",
    quote:
      "Great team member, always a pleasure to work with, and very reliable. Masfiqur has often taken initiative to learn new skills and level up.",
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
  ["14+", "Years of Experience"],
  ["$200K+", "Upwork Earnings"],
  ["200+", "Applications Tested"],
  ["11K+", "Hours Delivered on Upwork"],
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
  cv: "/cv/MD-Masfiqur-Rahman-CV.pdf",
};

export default function Home() {
  const [activeCert, setActiveCert] = useState<(typeof certificates)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "#certificates", label: "Certificates" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#feedback", label: "Feedback" },
    { href: "#case-studies", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="site-header fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-ink/90 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4"
          aria-label="Primary"
        >
          <a href="#" className="group flex min-w-0 items-baseline gap-1.5 overflow-hidden">
            <span className="font-display truncate text-base font-semibold tracking-tight text-white transition group-hover:text-brandSoft sm:text-lg md:text-xl">
              Masfiqur
            </span>
            <span className="font-display truncate text-base font-medium tracking-tight text-brandSoft sm:text-lg md:text-xl">
              Rahman
            </span>
          </a>

          <div className="hidden items-center gap-5 text-sm font-medium text-mute xl:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="whitespace-nowrap transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={links.upwork}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !px-3 !py-2 text-xs sm:!px-5 sm:!py-3 sm:text-sm"
            >
              Hire Me <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-brand/50 hover:bg-brand/20 xl:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            id="mobile-nav"
            className="border-t border-white/10 bg-ink/95 px-4 py-4 xl:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-mute transition hover:bg-white/5 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={links.cv}
                download="MD-Masfiqur-Rahman-CV.pdf"
                className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-brandSoft transition hover:bg-white/5"
                onClick={() => setMenuOpen(false)}
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="bg-ink text-white">
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
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Top Rated Plus · 100% Job Success
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/15 px-3.5 py-1.5 text-xs font-semibold text-brandSoft md:text-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                14+ Years Experience
              </span>
            </motion.div>

            <motion.h1
              variants={fade}
              transition={{ duration: 0.55 }}
              className="font-display font-semibold heading-hero"
            >
              Masfiqur Rahman
            </motion.h1>

            <motion.p
              variants={fade}
              transition={{ duration: 0.55 }}
              className="mt-3 font-display text-2xl font-semibold leading-snug tracking-tight text-brandSoft sm:text-3xl md:mt-4 md:text-4xl"
            >
              Top-Rated Senior QA Engineer
            </motion.p>

            <motion.p
              variants={fade}
              transition={{ duration: 0.55 }}
              className="mt-2 text-base font-medium leading-7 text-white/90 sm:text-lg md:text-xl"
            >
              Helping teams ship high-quality web, mobile &amp; AI products
            </motion.p>

            <motion.p
              variants={fade}
              transition={{ duration: 0.55 }}
              className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-mute md:mt-5 md:text-base md:leading-8"
            >
              I&apos;m MD Masfiqur Rahman (Masfiqur Rahman) — helping startups and enterprises ship
              reliable products with manual QA, Playwright automation, API testing, mobile app QA
              (iOS &amp; Android), AI QA, SaaS and eCommerce testing, documentation, and release
              readiness for clients across the USA, UK, Australia, Netherlands, Brazil, and worldwide.
            </motion.p>

            <motion.div
              variants={fade}
              transition={{ duration: 0.55 }}
              className="mt-6 flex flex-col items-center gap-3 md:mt-8"
            >
              <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3">
                <a
                  href={links.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary shrink-0 !px-3 !py-2.5 text-xs sm:!px-5 sm:!py-3 sm:text-sm"
                >
                  Hire Me on Upwork <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
                <a
                  href="#feedback"
                  className="btn-secondary shrink-0 !px-3 !py-2.5 text-xs sm:!px-5 sm:!py-3 sm:text-sm"
                >
                  Client Feedback
                </a>
              </div>
              <a
                href={links.cv}
                download="MD-Masfiqur-Rahman-CV.pdf"
                className="btn-secondary !hidden !px-4 !py-2.5 text-xs sm:!px-5 sm:!py-3 sm:text-sm md:!inline-flex"
              >
                <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mt-8 grid w-full max-w-4xl grid-cols-2 gap-2.5 md:mt-10 md:grid-cols-4 md:gap-3"
          >
            {stats.map(([value, label], index) => (
              <motion.div
                key={label}
                variants={cardFade}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-2xl border px-4 py-4 text-left md:px-5 md:py-5 ${
                  index === 0
                    ? "border-brand/50 bg-brand/15 shadow-glow"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <div
                  className={`font-display text-2xl font-semibold leading-none md:text-3xl ${
                    index === 0 ? "text-brandSoft" : "text-white"
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
              <span className="text-brandSoft">14+ years</span>
              {" "}
              <span>as a software QA engineer, tester &amp; QA lead</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-mute md:text-lg">
              I am MD Masfiqur Rahman, a Top-Rated Senior Software Quality Assurance Engineer with 14+
              years of experience helping startups, SaaS companies, and enterprise organizations
              deliver reliable products. With Bachelor’s and Master’s degrees in Computer Science, I
              bring a hands-on QA engineer, software tester, and QA manager mindset to release
              planning — improving usability, user experience, and overall product quality before
              release.
            </p>
            <p className="mt-4 text-base leading-8 text-mute md:text-lg">
              I have contributed to projects for global brands including Tesco, Harrods, Marks &amp;
              Spencer, Xoom, FedEx, Dell, Visa, Hilton, and many others — working with clients across
              the USA, UK, Australia, Netherlands, and Brazil.
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
                <li key={item} className="check-row text-sm leading-7 text-mute">
                  <span className="check-row__icon" aria-hidden="true">
                    <CheckCircle2 />
                  </span>
                  <span className="min-w-0 flex-1">{item}</span>
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
            Quality assurance engineer services for hire
          </h2>
          <p className="mt-4 text-base leading-7 text-mute">
            Hire a senior QA engineer for manual QA, Playwright automation, mobile app QA, API
            testing, Stripe payment testing, Analytics QA (Firebase &amp; Google Analytics), local
            branch verification (Git &amp; Docker), SaaS QA, AI QA, and eCommerce quality assurance —
            remotely for worldwide clients and global product teams.
          </p>
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
              Manual QA depth plus Playwright &amp; API coverage
            </h2>
            <p className="mt-4 text-base leading-7 text-mute">
              Core software testing skills Masfiqur Rahman uses across web application testing, mobile
              app QA, and automation QA engagements.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {expertise.map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-ink p-5">
                <div className="check-row">
                  <span className="check-row__icon" aria-hidden="true">
                    <CheckCircle2 />
                  </span>
                  <p className="min-w-0 flex-1 text-sm leading-7 text-mute">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hire" className="border-y border-line bg-panel/60">
        <div className="section">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fade}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="badge">Hire QA</span>
            <h2 className="mt-5 font-display font-semibold heading-section">
              QA engineer for hire — remote quality assurance worldwide
            </h2>
            <p className="mt-4 text-base leading-7 text-mute">
              Searching for a quality assurance engineer for hire or a remote QA engineer for your
              global team? MD Masfiqur Rahman is a Top-Rated Senior QA Engineer serving worldwide
              clients across the USA, UK, Australia, Netherlands, Brazil, and more — with 14+ years of
              software testing experience.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              {
                title: "Built for worldwide clients",
                body: "Trusted by startups and enterprises internationally. 11+ years of remote delivery with clear communication and reliable collaboration across time zones.",
              },
              {
                title: "Remote-first senior QA",
                body: "A Top-Rated Senior QA Engineer available remotely for product teams that need thorough manual testing, automation, and release confidence.",
              },
              {
                title: "Full-stack quality coverage",
                body: "Manual testing, Playwright automation, API testing, Stripe payment & NFC test-card flows, local branch verification with Git & Docker, iOS & Android mobile QA, AI QA, SaaS and eCommerce testing, regression, UAT, and release readiness.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-ink p-7 text-left">
                <h3 className="font-display text-xl font-semibold leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-mute">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={links.upwork} target="_blank" rel="noreferrer" className="btn-primary">
              Hire on Upwork <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#testimonials" className="btn-secondary">
              View testimonials
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
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
                  <Image
                    src={cert.preview}
                    alt={`Masfiqur Rahman — ${cert.title} certificate from ${cert.issuer}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-md bg-brand/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                    <Award className="h-3.5 w-3.5" aria-hidden="true" />
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

      <TestimonialsSection
        items={testimonials}
        upworkUrl={links.upwork}
        linkedinUrl={links.linkedin}
      />

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
              {item.company ? (
                <p className="mt-1 text-sm leading-6 text-mute">
                  {item.role}
                  <span className="mt-0.5 block text-mute/90">{item.company}</span>
                </p>
              ) : (
                <p className="mt-1 text-sm leading-6 text-mute">{item.role}</p>
              )}
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-brandSoft">
                {item.title}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-mute">
                <span className="inline-flex items-center gap-2.5">
                  <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
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
              Accurate cross-browser and real-device validation across OS versions, screen sizes, and
              real-world scenarios — including iPhone 17 Pro Max, iPhones, iPads, Apple Watch, Android
              devices, Windows, MacBooks, and Linux.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-mute">
              {[
                "iPhone 17 Pro Max, iPhones & multi-iOS coverage",
                "iPad and Apple Watch testing",
                "Android devices via BrowserStack & local",
                "Cross-browser testing across major browsers",
                "Windows, MacBook & Linux environments",
              ].map((item) => (
                <li key={item} className="check-row text-sm leading-7 text-mute">
                  <span className="check-row__icon" aria-hidden="true">
                    <CheckCircle2 />
                  </span>
                  <span className="min-w-0 flex-1">{item}</span>
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
            Hire a quality assurance engineer for your global team
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Remote senior QA for worldwide clients — manual QA, Playwright automation, mobile app QA,
            API testing, Stripe payment testing, local branch verification, SaaS, AI, and eCommerce
            quality assurance.
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

      <footer className="border-t border-line px-6 py-8 text-center text-sm leading-6 text-mute sm:px-8">
        <p className="mx-auto max-w-3xl">
          © 2026 MD Masfiqur Rahman · Senior QA Engineer for Hire · Remote Worldwide · 14+ Years
        </p>
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
              <div className="relative mx-auto h-[min(75vh,900px)] w-full max-w-3xl">
                <Image
                  src={activeCert.preview}
                  alt={`Masfiqur Rahman — ${activeCert.title} certificate issued by ${activeCert.issuer}`}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="rounded-lg object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
    </>
  );
}
