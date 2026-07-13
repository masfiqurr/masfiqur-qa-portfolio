import type { Metadata } from "next";
import "./cv.css";

export const metadata: Metadata = {
  title: "CV — MD Masfiqur Rahman | Senior QA Engineer",
  description:
    "One-page CV for MD Masfiqur Rahman — Senior QA Engineer specializing in manual QA, Playwright automation, mobile app testing, Stripe payment testing, and Analytics QA.",
  robots: { index: false, follow: false },
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return <div className="cv-root">{children}</div>;
}
