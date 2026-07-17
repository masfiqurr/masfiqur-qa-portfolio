import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import BlogContent from "@/components/BlogContent";
import {
  formatBlogDate,
  getAllPosts,
  getAllSlugs,
  getPostBySlug,
} from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.officialName],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="pt-24 pb-20">
      <div className="section !pb-8 !pt-8">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-mute transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <span className="hidden text-mute sm:inline">·</span>
          <Link
            href="/"
            className="hidden items-center gap-2 text-sm font-semibold text-brandSoft transition hover:text-white sm:inline-flex"
          >
            Portfolio homepage
          </Link>
        </div>

        <header className="mx-auto mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brandSoft">
            <span>{post.topic}</span>
            <span className="text-mute">·</span>
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span className="text-mute">·</span>
            <span className="text-mute normal-case tracking-normal">
              {post.readingMinutes} min read
            </span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl md:leading-[1.2]">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-mute md:text-lg md:leading-8">
            {post.description}
          </p>
          <p className="mt-5 text-sm text-mute">
            By{" "}
            <Link href="/" className="font-semibold text-white transition hover:text-brandSoft">
              {siteConfig.officialName}
            </Link>
          </p>
        </header>
      </div>

      <div className="section !pt-0">
        <div className="mx-auto max-w-3xl">
          <BlogContent blocks={post.content} />

          <div className="mt-12 rounded-2xl border border-brand/40 bg-gradient-to-br from-brand/30 to-[#2A0F6B]/40 p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold">Need release-ready QA support?</h2>
            <p className="mt-3 text-sm leading-7 text-white/80">
              Hire MD Masfiqur Rahman for Playwright automation, API testing, mobile QA, accessibility
              checks, and production readiness — remotely worldwide.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={siteConfig.links.upwork}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Hire on Upwork <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link href="/#contact" className="btn-secondary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section !pt-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-semibold">More articles</h2>
            <ul className="mt-6 space-y-4">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group block rounded-2xl border border-line bg-panel p-5 transition hover:border-brand/50"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brandSoft">
                      {item.topic}
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold transition group-hover:text-brandSoft">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
