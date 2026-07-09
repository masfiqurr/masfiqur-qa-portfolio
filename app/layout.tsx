import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://masfiqur.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Masfiqur Rahman | Senior QA Engineer, Software Tester & QA Manager",
    template: "%s | Masfiqur Rahman",
  },
  description:
    "Hire Masfiqur Rahman — Top-Rated Senior QA Engineer, software tester, and QA lead with 14+ years experience in manual QA, Playwright automation, API testing, mobile QA, AI testing, and release readiness.",
  keywords: [
    "QA engineer",
    "software QA",
    "software tester",
    "QA tester",
    "QA manager",
    "senior QA engineer",
    "manual QA",
    "Playwright automation",
    "API testing",
    "mobile QA",
    "AI testing",
    "end to end testing",
    "quality assurance engineer",
    "freelance QA engineer",
    "Upwork QA engineer",
    "Masfiqur Rahman",
  ],
  authors: [{ name: "Masfiqur Rahman", url: siteUrl }],
  creator: "Masfiqur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Masfiqur Rahman — Senior QA Engineer",
    title: "Masfiqur Rahman | Senior QA Engineer, Software Tester & QA Manager",
    description:
      "Top-Rated Senior QA Engineer with 14+ years experience. Manual QA, Playwright, API, mobile, AI testing, and release readiness for startups and enterprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masfiqur Rahman | Senior QA Engineer & Software Tester",
    description:
      "14+ years in software QA. Hire a Top-Rated QA engineer for web, mobile, API, AI, and automation testing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Masfiqur Rahman",
  url: siteUrl,
  jobTitle: "Senior QA Engineer",
  description:
    "Top-Rated Senior QA Engineer, software tester, and QA lead specializing in manual QA, Playwright automation, API testing, mobile QA, and AI product testing.",
  knowsAbout: [
    "Software QA",
    "QA Engineering",
    "Manual Testing",
    "Playwright",
    "API Testing",
    "Mobile QA",
    "AI Testing",
    "QA Management",
  ],
  sameAs: [
    "https://www.upwork.com/freelancers/masfique",
    "https://www.linkedin.com/in/masfique/",
    "https://github.com/masfiqurr",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
