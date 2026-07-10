import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const siteUrl = "https://masfiqur.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Masfiqur Rahman | Senior QA Engineer, Software Tester & QA Manager",
    template: "%s | Masfiqur Rahman",
  },
  description:
    "Hire Masfiqur Rahman — Top-Rated Senior QA Engineer with 14+ years experience in manual QA, Playwright automation, API testing, mobile QA, AI testing, cross-browser testing, and release readiness. Clients in the USA, UK, Australia, Netherlands, and Brazil.",
  keywords: [
    "Masfiqur Rahman",
    "QA engineer",
    "software QA",
    "software tester",
    "QA tester",
    "QA manager",
    "senior QA engineer",
    "manual QA",
    "Playwright automation",
    "test automation",
    "API testing",
    "mobile QA",
    "AI testing",
    "cross-browser testing",
    "end to end testing",
    "quality assurance engineer",
    "freelance QA engineer",
    "Upwork QA engineer",
  ],
  authors: [{ name: "Masfiqur Rahman", url: siteUrl }],
  creator: "Masfiqur Rahman",
  publisher: "Masfiqur Rahman",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Masfiqur Rahman — Senior QA Engineer",
    title: "Masfiqur Rahman | Senior QA Engineer, Software Tester & QA Manager",
    description:
      "Top-Rated Senior QA Engineer with 14+ years experience. Manual QA, Playwright, Automation, API, mobile, AI & cross-browser testing. Clients in the USA, UK, Australia, Netherlands, and Brazil.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Masfiqur Rahman — Senior QA Engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masfiqur Rahman | Senior QA Engineer & Software Tester",
    description:
      "14+ years in software QA. Manual QA, Playwright, Automation, API, mobile, AI & cross-browser testing for clients worldwide.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
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
  image: `${siteUrl}/icon.svg`,
  jobTitle: "Senior QA Engineer",
  description:
    "Top-Rated Senior QA Engineer, software tester, and QA lead specializing in manual QA, Playwright automation, API testing, mobile QA, cross-browser testing, and AI product testing.",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Computer Science (Bachelor's and Master's)",
  },
  knowsAbout: [
    "Software QA",
    "QA Engineering",
    "Manual Testing",
    "Test Automation",
    "Playwright",
    "API Testing",
    "Mobile QA",
    "Cross-Browser Testing",
    "AI Testing",
    "QA Management",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Independent / Upwork",
  },
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
  email: "ameit001@gmail.com",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
