import type { Metadata } from "next";
import BlogHeader from "@/components/BlogHeader";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "QA Blog — Playwright, API Testing, Mobile QA & More",
  description:
    "Practical QA articles by MD Masfiqur Rahman on Playwright automation, API testing, mobile QA, accessibility, bug reporting, and test planning.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "QA Blog — MD Masfiqur Rahman",
    description:
      "High-quality articles on Playwright, API testing, mobile QA, accessibility, bug reporting, and test planning.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BlogHeader />
      <main className="bg-ink text-white">{children}</main>
      <ScrollToTopButton />
    </>
  );
}
