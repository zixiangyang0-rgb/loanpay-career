import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://career.loanpaylogic.com"),
  title: {
    default: "LoanPay Career — Job Search, Resumes & Interview Guides",
    template: "%s | LoanPay Career",
  },
  description:
    "Practical career guides on resumes, interviews, offers, and growth. Plain-English job-search education you can act on this week.",
  alternates: { canonical: "https://career.loanpaylogic.com" },
  openGraph: {
    type: "website",
    url: "https://career.loanpaylogic.com",
    siteName: "LoanPay Career",
    title: "LoanPay Career — Job Search, Resumes & Interview Guides",
    description:
      "Practical career guides on resumes, interviews, offers, and growth. Plain-English job-search education you can act on this week.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Career — Job Search, Resumes & Interview Guides",
    description:
      "Practical career guides on resumes, interviews, offers, and growth. Plain-English job-search education you can act on this week.",
  },
  robots: { index: true, follow: true },
};

const NAV = [
  { href: "/resume-writing-guide", label: "Resumes" },
  { href: "/job-interview-prep-guide", label: "Interviews" },
  { href: "/salary-negotiation-guide", label: "Salary" },
  { href: "/remote-job-search-guide", label: "Remote Work" },
  { href: "/career-change-guide", label: "Career Change" },
  { href: "/about", label: "About" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <header className="sans" style={{ borderBottom: "1px solid #e3e8ef" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 0 14px 0",
              }}
            >
              <Link
                href="/"
                style={{ textDecoration: "none", color: "#1f3a5f", fontWeight: 800, fontSize: 20 }}
              >
                LoanPay <span style={{ fontWeight: 400 }}>Career</span>
              </Link>
              <p style={{ margin: 0, fontSize: 12, color: "#5b6675" }}>
                Job-search education, in plain English
              </p>
            </div>
            <nav
              aria-label="Primary"
              style={{ display: "flex", gap: 20, flexWrap: "wrap", paddingBottom: 14 }}
            >
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  style={{ textDecoration: "none", color: "#1f3a5f", fontSize: 14, fontWeight: 600 }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>{children}</main>
        <footer className="sans" style={{ borderTop: "1px solid #e3e8ef", marginTop: 56 }}>
          <div
            style={{
              maxWidth: 1080,
              margin: "0 auto",
              padding: "28px 20px 40px 20px",
              display: "grid",
              gap: 18,
            }}
          >
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 14 }}>
              <Link href="/about" style={{ color: "#1f3a5f" }}>
                About
              </Link>
              <Link href="/contact" style={{ color: "#1f3a5f" }}>
                Contact
              </Link>
              <Link href="/privacy-policy" style={{ color: "#1f3a5f" }}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" style={{ color: "#1f3a5f" }}>
                Terms
              </Link>
              <Link href="/disclaimer" style={{ color: "#1f3a5f" }}>
                Disclaimer
              </Link>
            </div>
            <p style={{ margin: 0, fontSize: 13, color: "#5b6675", lineHeight: 1.7 }}>
              LoanPay Career is a general-education publication about job searching and professional
              growth. Nothing here is career, legal, tax, or financial advice. Part of the
              loanpaylogic.com network:{" "}
              <a href="https://tax.loanpaylogic.com" style={{ color: "#1f3a5f" }}>
                Tax
              </a>{" "}
              ·{" "}
              <a href="https://business.loanpaylogic.com" style={{ color: "#1f3a5f" }}>
                Business
              </a>
              .
            </p>
            <p style={{ margin: 0, fontSize: 13, color: "#5b6675" }}>
              © 2026 LoanPay Career · career.loanpaylogic.com
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
