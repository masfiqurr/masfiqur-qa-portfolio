import type { Metadata } from "next";
import { headers } from "next/headers";
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
  applicationName: "MD Masfiqur Rahman — QA Portfolio",
  keywords: [
    "Masfiqur Rahman",
    "MD Masfiqur Rahman",
    "Md. Masfiqur Rahman",
    "Md Masfiqur Rahman",
    "Masfiqur Rahman QA",
    "MD Masfiqur Rahman QA Engineer",
    "Masfiqur Rahman portfolio",
    "Hire QA Engineer",
    "QA Engineer for hire",
    "Best QA Engineer for hire",
    "Quality assurance engineer for hire",
    "Best QA for hiring",
    "Hire QA engineer worldwide",
    "Remote QA for global teams",
    "Remote QA engineer",
    "Hire remote QA engineer",
    "Freelance QA engineer",
    "QA for Hire",
    "QA engineer Bangladesh",
    "Remote QA engineer Bangladesh",
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
    "Stripe Payment Testing",
    "NFC App Testing",
    "Docker QA",
    "Git Branch Testing",
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
    "profile:first_name": "Masfiqur",
    "profile:last_name": "Rahman",
    "profile:username": "masfique",
  },
  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    alternateLocale: ["en_GB", "en_AU", "en_CA", "en_IN", "bn_BD"],
    url: siteUrl,
    siteName: "MD Masfiqur Rahman | Masfiqur Rahman — Senior QA Engineer",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "MD Masfiqur Rahman (Masfiqur Rahman) — Top-Rated Senior QA Engineer",
      },
    ],
    firstName: "Masfiqur",
    lastName: "Rahman",
    username: "masfique",
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
    languages: {
      "x-default": siteUrl,
      en: siteUrl,
      "en-US": siteUrl,
      "en-GB": siteUrl,
      "en-AU": siteUrl,
    },
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
      name: "MD Masfiqur Rahman | Masfiqur Rahman — QA Portfolio",
      alternateName: [
        "Masfiqur Rahman",
        "MD Masfiqur Rahman",
        "Masfiqur Rahman QA Portfolio",
      ],
      description: siteConfig.description,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: ["en", "en-US", "en-GB"],
      copyrightHolder: { "@id": `${siteUrl}/#person` },
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
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/cv-photo.png`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteConfig.officialName,
      alternateName: [siteConfig.name, ...siteConfig.alternateNames],
      givenName: "Masfiqur",
      additionalName: "MD",
      familyName: "Rahman",
      url: siteUrl,
      image: [
        `${siteUrl}/cv-photo.png`,
        `${siteUrl}/icons/icon-512.png`,
      ],
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      email: siteConfig.email,
      nationality: {
        "@type": "Country",
        name: "Bangladesh",
      },
      homeLocation: {
        "@type": "Place",
        name: "Dhaka, Bangladesh",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
      },
      workLocation: {
        "@type": "Place",
        name: "Worldwide (Remote)",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Computer Science and Engineering (Bachelor's and Master's)",
      },
      knowsLanguage: ["en", "bn"],
      knowsAbout: [
        "Software Quality Assurance",
        "Manual QA",
        "Automation QA",
        "Playwright Automation",
        "Playwright MCP",
        "API Testing",
        "Stripe Payment Testing",
        "NFC App Testing",
        "Local Branch Verification",
        "Docker",
        "Git",
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
      name: "Hire MD Masfiqur Rahman — Senior QA Engineer Remotely Worldwide",
      url: `${siteUrl}/#hire`,
      image: `${siteUrl}/cv-photo.png`,
      description:
        "Hire MD Masfiqur Rahman (Masfiqur Rahman), a Top-Rated Senior QA Engineer available remotely worldwide for manual QA, Playwright automation, mobile app testing, API testing, and quality assurance engineering.",
      provider: { "@id": `${siteUrl}/#person` },
      areaServed: [
        { "@type": "Place", name: "Worldwide" },
        { "@type": "AdministrativeArea", name: "Global Remote" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "Netherlands" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Singapore" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Brazil" },
        { "@type": "Country", name: "Bangladesh" },
      ],
      availableLanguage: ["English", "Bangla"],
      serviceType: [
        "QA Engineer for hire",
        "Remote QA engineering",
        "Hire QA engineer worldwide",
        "Manual QA",
        "Playwright Automation",
        "Mobile App QA",
        "API Testing",
        "Stripe Payment Testing",
        "NFC App Testing",
        "Local Branch Verification",
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
          name: "MD Masfiqur Rahman",
          item: siteUrl,
        },
      ],
    },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
