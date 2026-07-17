import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { formatBlogDate, getAllPosts } from "@/lib/blog";

const resourceGuides = [
  {
    topic: "Security QA",
    title: "QA Secure Testing — Scope, Checklist & Best Practices",
    description:
      "HIPAA-aware manual security checklist for React, Node.js, and Django apps — auth, access control, APIs, OWASP risks, and release readiness.",
    href: "https://github.com/masfiqurr/qa-secure-testing",
    tags: ["Security", "HIPAA", "API", "Checklist"],
  },
  {
    topic: "iOS QA",
    title: "iOS App QA Checklist (Pre-Release)",
    description:
      "TestFlight / Ad Hoc pre-release checklist covering install, devices, lifecycle, permissions, performance, App Store compliance, and final sign-off.",
    href: "https://github.com/masfiqurr/ios-app-qa-checklist",
    tags: ["iOS", "TestFlight", "Mobile", "Checklist"],
  },
];

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-20">
      <section className="section !pb-10 !pt-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Link
            href="/"
            className="btn-secondary !px-4 !py-2.5 text-xs sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <span className="badge mt-5">QA Blog</span>
          <h1 className="mt-5 font-display font-semibold heading-section">
            Practical QA writing for real product teams
          </h1>
          <p className="mt-4 text-base leading-7 text-mute md:text-lg md:leading-8">
            Articles by MD Masfiqur Rahman on Playwright, API testing, mobile QA, accessibility, bug
            reporting, and test planning — written from 14+ years of release-focused QA work.
          </p>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-line bg-panel p-6 transition hover:border-brand/50 hover:shadow-glow md:p-7"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brandSoft">
                <span>{post.topic}</span>
                <span className="text-mute">·</span>
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                <span className="text-mute">·</span>
                <span className="text-mute normal-case tracking-normal">
                  {post.readingMinutes} min read
                </span>
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold leading-snug md:text-2xl">
                <Link href={`/blog/${post.slug}`} className="transition hover:text-brandSoft">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-mute">{post.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-mute"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brandSoft transition hover:text-white"
              >
                Read article <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section !pt-4">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="badge">QA Guides</span>
          <h2 className="mt-5 font-display text-2xl font-semibold md:text-3xl">
            Open checklists &amp; playbooks
          </h2>
          <p className="mt-3 text-sm leading-7 text-mute md:text-base">
            Public GitHub guides you can use for security-focused QA and iOS pre-release validation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {resourceGuides.map((guide) => (
            <article
              key={guide.href}
              className="flex flex-col rounded-2xl border border-line bg-panel p-6 transition hover:border-brand/50 hover:shadow-glow md:p-7"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brandSoft">
                <span>{guide.topic}</span>
                <span className="text-mute">·</span>
                <span className="text-mute normal-case tracking-normal">GitHub</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug md:text-2xl">
                <a
                  href={guide.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-brandSoft"
                >
                  {guide.title}
                </a>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-mute">{guide.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {guide.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-mute"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={guide.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brandSoft transition hover:text-white"
              >
                Open on GitHub <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
