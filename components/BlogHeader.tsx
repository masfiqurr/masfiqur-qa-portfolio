import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function BlogHeader() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4"
        aria-label="Blog"
      >
        <Link href="/" className="group flex min-w-0 items-baseline gap-1.5">
          <span className="font-display text-base font-semibold tracking-tight text-white transition group-hover:text-brandSoft sm:text-lg">
            Masfiqur
          </span>
          <span className="font-display text-base font-medium tracking-tight text-brandSoft sm:text-lg">
            Rahman
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/blog"
            className="hidden rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wide text-mute transition hover:text-white sm:inline-flex sm:text-sm"
          >
            Blog
          </Link>
          <a
            href={siteConfig.links.upwork}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !px-3 !py-2 text-xs sm:!px-5 sm:!py-3 sm:text-sm"
          >
            Hire Me <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
