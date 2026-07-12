import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import { siteConfig } from "@/lib/site";
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

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Masfiqur Rahman",
  },
  description: siteConfig.description,
  applicationName: "Masfiqur Rahman QA Portfolio",
  keywords: [
    "Masfiqur Rahman",
    "MD Masfiqur Rahman",
    "Md. Masfiqur Rahman",
    "Md Masfiqur Rahman",
    "Hire QA Engineer",
    "QA Engineer for hire",
    "Best QA Engineer for hire",
    "Quality assurance engineer for hire",
    "Best QA for hiring",
    "Best QA engineer Bangladesh",
    "QA engineer Bangladesh",
    "Remote QA engineer",
    "Hire remote QA engineer",
    "Freelance QA engineer",
    "QA for Hire",
    "Senior QA Engineer",
    "Software QA",
    "SQA Engineer",
    "Software Tester",
    "Manual QA",
    "Automation QA",
    "Playwright QA",
    "Playwright Automation Engineer",
    "API Testing",
    "Mobile App QA",
    "Upwork QA",
    "Top-Rated QA",
    "AI QA",
    "SaaS QA",
    "eCommerce QA",
    "Web Application Testing",
    "QA Portfolio",
  ],
  authors: [
    { name: "Masfiqur Rahman", url: siteUrl },
    { name: "MD Masfiqur Rahman", url: siteUrl },
  ],
  creator: "MD Masfiqur Rahman",
  publisher: "Masfiqur Rahman",
  category: "technology",
  other: {
    "geo.region": "BD",
    "geo.placename": "Dhaka",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: "Masfiqur Rahman — Senior QA Engineer Portfolio",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Masfiqur Rahman — Top-Rated Senior QA Engineer and Playwright Automation Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Masfiqur Rahman QA Portfolio",
      description: siteConfig.description,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteConfig.name,
      alternateName: [...siteConfig.alternateNames],
      givenName: "Masfiqur",
      additionalName: "MD",
      familyName: "Rahman",
      url: siteUrl,
      image: `${siteUrl}/icons/icon-512.png`,
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      email: siteConfig.email,
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Computer Science (Bachelor's and Master's)",
      },
      knowsAbout: [
        "Software Quality Assurance",
        "Manual QA",
        "Automation QA",
        "Playwright Automation",
        "Playwright MCP",
        "API Testing",
        "Mobile App QA",
        "iOS QA",
        "Android QA",
        "SaaS QA",
        "eCommerce QA",
        "AI QA",
        "Web Application Testing",
        "Regression Testing",
        "End-to-End Testing",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Independent / Upwork",
      },
      sameAs: [
        siteConfig.links.upwork,
        siteConfig.links.linkedin,
        siteConfig.links.github,
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Hire Senior QA Engineer — Masfiqur Rahman",
      url: `${siteUrl}/#hire`,
      image: `${siteUrl}/icons/icon-512.png`,
      description:
        "Hire a Top-Rated Senior QA Engineer based in Bangladesh and available remotely for manual QA, Playwright automation, mobile app testing, API testing, and quality assurance engineering.",
      provider: { "@id": `${siteUrl}/#person` },
      areaServed: [
        {
          "@type": "Country",
          name: "Bangladesh",
        },
        {
          "@type": "Place",
          name: "Worldwide",
        },
      ],
      availableLanguage: ["English", "Bangla"],
      serviceType: [
        "QA Engineer for hire",
        "Remote QA engineering",
        "Manual QA",
        "Playwright Automation",
        "Mobile App QA",
        "API Testing",
        "Quality assurance engineer for hire",
        "SaaS QA",
        "AI QA",
        "eCommerce QA",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
  ],
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
