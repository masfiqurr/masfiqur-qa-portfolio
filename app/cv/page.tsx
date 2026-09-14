import Image from "next/image";
import Link from "next/link";
import PrintButton from "./PrintButton";

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 22s8-5.5 8-12a8 8 0 1 0-16 0c0 6.5 8 12 8 12z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 21a8 8 0 1 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function IconGrad() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </svg>
  );
}

function IconPuzzle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <rect x="6" y="6" width="12" height="12" rx="2" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function IconAward() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5" />
    </svg>
  );
}

function IconStack() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 12 10 5 10-5M2 17l10 5 10-5" />
    </svg>
  );
}

function IconIndustry() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

const achievements = [
  "14+ Years Experience",
  "Upwork Top Rated Plus",
  "100% Job Success on Upwork",
  "Master’s in Computer Science",
  "Claude & AI Fluency Certified",
  "50+ Production Releases",
  "200+ Applications Tested",
  "Web, Mobile, API & AI Testing",
];

const coreSkills = [
  "Manual QA & Exploratory Testing",
  "Functional & Regression Testing",
  "Smoke & Sanity Testing",
  "Playwright Automation",
  "REST API Testing & Postman",
  "SQL Validation",
  "Mobile App QA (iOS & Android)",
  "Cross-browser & Cross-device Testing",
  "Accessibility & Performance Testing",
  "Stripe Payment & NFC Testing",
  "AI QA & Prompt Validation",
  "Release Readiness & UAT",
  "Agile Scrum & CI/CD",
  "Local Branch QA (Git & Docker)",
];

const qaExpertise = [
  "Manual QA (Web / Mobile / Desktop)",
  "Functional · Regression · Smoke · E2E",
  "API Testing (Postman)",
  "Stripe & NFC Payments",
  "Local Branch QA (Git / Docker)",
  "TestFlight · APK · Xcode",
  "Analytics QA (Firebase / GA)",
  "AI & Prompt Validation",
  "Exploratory & Edge Cases",
  "UI / UX Testing",
  "UAT & Release Validation",
  "Accessibility (WCAG)",
  "Cross-browser / Cross-device",
  "SQL Validation",
  "Performance Testing",
];

const stack = [
  "Playwright",
  "Postman",
  "Jira",
  "Git",
  "GitHub",
  "Bitbucket",
  "SQL",
  "Docker",
  "BrowserStack",
  "Firebase",
  "Google Analytics",
  "Android Studio",
  "Xcode",
  "TestFlight",
  "Charles Proxy",
  "Figma",
  "Slack",
  "Loom",
];

export default function CvPage() {
  return (
    <div className="cv-screen">
      <div className="cv-toolbar">
        <p>One-page CV — print or save as PDF (A4).</p>
        <div style={{ display: "flex", gap: 10 }}>
          <Link href="/">Back to portfolio</Link>
          <a href="/cv/MD-Masfiqur-Rahman-CV.pdf" download>
            Download PDF
          </a>
          <PrintButton />
        </div>
      </div>

      <article className="cv-page" aria-label="Curriculum Vitae — MD Masfiqur Rahman">
        <aside className="cv-sidebar">
          <div className="cv-photo-wrap">
            <Image
              src="/cv-photo.png"
              alt="MD Masfiqur Rahman — Senior Software Quality Assurance Engineer"
              width={220}
              height={220}
              className="cv-photo"
              priority
              unoptimized
            />
          </div>

          <section className="cv-side-section">
            <h2 className="cv-side-heading">
              <span className="icon" aria-hidden="true">
                <IconMail />
              </span>
              Contact
            </h2>
            <ul className="cv-contact-list">
              <li>
                <IconMail />
                <a href="mailto:ameit001@gmail.com">ameit001@gmail.com</a>
              </li>
              <li>
                <IconGlobe />
                <a href="https://www.masfiqur.com" target="_blank" rel="noreferrer">
                  Portfolio: www.masfiqur.com
                </a>
              </li>
              <li>
                <IconGlobe />
                <a href="https://www.linkedin.com/in/masfique/" target="_blank" rel="noreferrer">
                  linkedin.com/in/masfique
                </a>
              </li>
              <li>
                <IconPin />
                <span>Dhaka, Bangladesh · Remote Worldwide</span>
              </li>
            </ul>
          </section>

          <section className="cv-side-section">
            <h2 className="cv-side-heading">
              <span className="icon" aria-hidden="true">
                <IconGrad />
              </span>
              Education
            </h2>
            <div className="cv-edu-list">
              <div className="cv-edu-item">
                <strong>Master’s in Computer Science and Engineering</strong>
                <span>Advanced software and systems foundation</span>
              </div>
              <div className="cv-edu-item">
                <strong>Bachelor’s in Computer Science and Engineering</strong>
                <span>Software engineering and computing fundamentals</span>
              </div>
            </div>
          </section>

          <section className="cv-side-section">
            <h2 className="cv-side-heading">
              <span className="icon" aria-hidden="true">
                <IconPuzzle />
              </span>
              Core Skills
            </h2>
            <ul className="cv-skill-list">
              {coreSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="cv-side-section">
            <h2 className="cv-side-heading">
              <span className="icon" aria-hidden="true">
                <IconIndustry />
              </span>
              Industries
            </h2>
            <p className="cv-industries">
              SaaS • AI • eCommerce • FinTech • Healthcare • Education • Sports Tech
            </p>
          </section>

          <section className="cv-side-section">
            <h2 className="cv-side-heading">
              <span className="icon" aria-hidden="true">
                <IconBook />
              </span>
              Languages
            </h2>
            <ul className="cv-lang-list">
              <li>English — Professional</li>
              <li>Bangla — Native</li>
            </ul>
          </section>
        </aside>

        <div className="cv-main">
          <header className="cv-header">
            <h1 className="cv-name">MD Masfiqur Rahman</h1>
            <p className="cv-role">Senior Software Quality Assurance Engineer</p>
            <p className="cv-subtitle">
              Manual QA • Playwright Automation • Mobile • API • AI Testing
            </p>
          </header>

          <section className="cv-main-section">
            <h2 className="cv-main-heading">
              <span className="icon" aria-hidden="true">
                <IconUser />
              </span>
              About Me
            </h2>
            <p className="cv-about">
              Senior Software Quality Assurance Engineer with 14+ years owning quality across web,
              mobile, SaaS, AI, and enterprise products. Combine Manual QA, Playwright automation,
              REST API, and AI testing to catch risk early and ship production-ready releases for
              distributed Agile teams. Hold Bachelor’s and Master’s degrees in Computer Science and
              Engineering; certified in Claude and AI Fluency (Anthropic) — 50+ production releases
              and 200+ applications tested.
            </p>
          </section>

          <section className="cv-main-section">
            <h2 className="cv-main-heading">
              <span className="icon" aria-hidden="true">
                <IconAward />
              </span>
              Key Achievements
            </h2>
            <ul className="cv-achievements">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="cv-main-section">
            <h2 className="cv-main-heading">
              <span className="icon" aria-hidden="true">
                <IconBriefcase />
              </span>
              Experience
            </h2>
            <ul className="cv-timeline">
              <li>
                <div className="cv-job-top">
                  <h3>Full Stack QA Engineer</h3>
                  <time dateTime="2017-06">Jun 2017 — Present</time>
                </div>
                <p className="cv-company">
                  The SilverLogic · Full-time · Boca Raton, FL, United States (Remote)
                </p>
                <ul className="cv-bullets">
                  <li>
                    Remote Senior QA Engineer collaborating with developers, designers, and product
                    managers across USA-based and global remote teams.
                  </li>
                  <li>
                    Delivered QA across 50+ production releases for enterprise SaaS platforms with
                    Playwright automation and structured smoke/sanity suites.
                  </li>
                  <li>
                    Performed web, mobile, REST API, Analytics, and Stripe payment / NFC testing with
                    SQL validation; verified TestFlight, APK, Expo, and Xcode builds.
                  </li>
                </ul>
              </li>
              <li>
                <div className="cv-job-top">
                  <h3>Quality Assurance Engineer (Freelance)</h3>
                  <time dateTime="2024-03">Mar 2024 — Aug 2026</time>
                </div>
                <p className="cv-company">
                  World Sport Action · Freelance · Mona Vale, NSW, Australia (Remote)
                </p>
                <ul className="cv-bullets">
                  <li>
                    Freelance remote QA for Squadi, Basketball, and Netball apps and portals across
                    Dev, QA, and Staging — registrations, livescores, attendance, referee reports,
                    banners, and ticket-fix verification.
                  </li>
                  <li>
                    End-to-end checks from UI behavior into APIs and databases when needed; detailed
                    pass/fail notes and evidence in Jira.
                  </li>
                  <li>
                    Started on Squadi AU, then Basketball and Netball, reusing shared checks across
                    similar sports apps without mixing environments.
                  </li>
                </ul>
              </li>
              <li>
                <div className="cv-job-top">
                  <h3>QA Lead and Scrum Master (Freelance)</h3>
                  <time dateTime="2021-07">Jul 2021 — Oct 2023</time>
                </div>
                <p className="cv-company">
                  Teachally · Freelance · Seattle, WA, United States (Remote)
                </p>
                <ul className="cv-bullets">
                  <li>
                    Freelance QA Lead for an AI-powered edtech product used by teachers for lesson
                    planning and classroom workflows.
                  </li>
                  <li>
                    Reviewed requirements and technical designs to catch quality risks early; drove
                    release readiness and UAT across web and mobile.
                  </li>
                  <li>
                    Facilitated Scrum ceremonies while keeping quality ownership cross-functional.
                  </li>
                </ul>
              </li>
              <li>
                <div className="cv-job-top">
                  <h3>QA Consultant (Contract / Freelance)</h3>
                  <time dateTime="2021-11">Nov 2021 — Feb 2022</time>
                </div>
                <p className="cv-company">
                  Enian · Contract / Freelance · Greater London, England, United Kingdom (Remote)
                </p>
                <ul className="cv-bullets">
                  <li>
                    Contract freelance QA improving software quality inside a cross-functional team
                    of developers, designers, Scrum Masters, and product managers.
                  </li>
                  <li>
                    Strengthened QA process and release confidence for production deployments.
                  </li>
                </ul>
              </li>
              <li>
                <div className="cv-job-top">
                  <h3>Sr. Software QA Engineer &amp; Risk and Compliance Analyst</h3>
                  <time dateTime="2012-07">Jul 2012 — Mar 2018</time>
                </div>
                <p className="cv-company">SEBPO · Full-time · Dhaka, Bangladesh (On-site)</p>
                <ul className="cv-bullets">
                  <li>
                    Created and executed test scripts across multiple environments and browsers for
                    business-critical applications.
                  </li>
                  <li>
                    Supported risk and compliance analysis alongside quality assurance controls and
                    structured validation.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="cv-main-section">
            <h2 className="cv-main-heading">
              <span className="icon" aria-hidden="true">
                <IconStack />
              </span>
              Technical Stack
            </h2>
            <ul className="cv-stack">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="cv-main-section">
            <h2 className="cv-main-heading">
              <span className="icon" aria-hidden="true">
                <IconCheck />
              </span>
              QA Expertise
            </h2>
            <ul className="cv-stack">
              {qaExpertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
