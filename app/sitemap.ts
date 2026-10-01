import type { MetadataRoute } from "next";

const BASE = "https://career.loanpaylogic.com";

const PATHS = [
  "",
  "/resume-writing-guide",
  "/cover-letter-guide",
  "/linkedin-profile-guide",
  "/job-interview-prep-guide",
  "/common-interview-questions",
  "/star-method-guide",
  "/salary-negotiation-guide",
  "/evaluating-job-offers",
  "/remote-job-search-guide",
  "/career-change-guide",
  "/ats-resume-tips",
  "/professional-networking-guide",
  "/informational-interviews-guide",
  "/freelance-vs-full-time-guide",
  "/entry-level-jobs-guide",
  "/internship-guide",
  "/thank-you-email-after-interview",
  "/negotiating-benefits-guide",
  "/how-to-quit-job-gracefully",
  "/promotion-ask-guide",
  "/performance-review-prep",
  "/side-hustle-ideas-guide",
  "/personal-branding-basics",
  "/references-guide",
  "/background-check-guide",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-10-01");
  return PATHS.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p.startsWith("/privacy") ? 0.3 : 0.8,
  }));
}
