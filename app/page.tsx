import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LoanPay Career: Resumes, Interviews & Salary Guides",
  description:
    "25 plain-English career guides covering resumes, interviews, salary negotiation, and growth. Start with the most popular guides today — free forever.",
  alternates: { canonical: "https://career.loanpaylogic.com" },
  openGraph: {
    type: "website",
    url: "https://career.loanpaylogic.com",
    siteName: "LoanPay Career",
    title: "LoanPay Career: Resumes, Interviews & Salary Guides",
    description:
      "25 plain-English career guides covering resumes, interviews, salary negotiation, and growth. Start with the most popular guides today — free forever.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Career: Resumes, Interviews & Salary Guides",
    description:
      "25 plain-English career guides covering resumes, interviews, salary negotiation, and growth. Start with the most popular guides today — free forever.",
  },
};

type Card = { href: string; title: string; blurb: string };
type Group = { name: string; intro: string; cards: Card[] };

const GROUPS: Group[] = [
  {
    name: "Resume & Applications",
    intro: "Get shortlisted: documents and profiles that survive software screens and six-second scans.",
    cards: [
      {
        href: "/resume-writing-guide",
        title: "Resume Writing Guide",
        blurb: "Formats, bullet formulas, and tailoring that earn interviews.",
      },
      {
        href: "/cover-letter-guide",
        title: "Cover Letter Guide",
        blurb: "Structure, hooks, and full examples for every situation.",
      },
      {
        href: "/linkedin-profile-guide",
        title: "LinkedIn Profile Guide",
        blurb: "Headlines and keywords that get recruiters to message you.",
      },
      {
        href: "/ats-resume-tips",
        title: "ATS Resume Tips",
        blurb: "Formatting and keywords that pass the software screen.",
      },
      {
        href: "/thank-you-email-after-interview",
        title: "Thank-You Email After Interview",
        blurb: "Timing, structure, and scripts that close the loop.",
      },
    ],
  },
  {
    name: "Interviews",
    intro: "Convert conversations into offers with research, stories, and practice.",
    cards: [
      {
        href: "/job-interview-prep-guide",
        title: "Job Interview Prep Guide",
        blurb: "A two-week plan covering research, stories, and logistics.",
      },
      {
        href: "/common-interview-questions",
        title: "Common Interview Questions",
        blurb: "The most-asked questions with approaches and examples.",
      },
      {
        href: "/star-method-guide",
        title: "STAR Method Guide",
        blurb: "Two-minute behavioral answers that score full marks.",
      },
    ],
  },
  {
    name: "Offers & Negotiation",
    intro: "Price the whole package and negotiate with data instead of nerves.",
    cards: [
      {
        href: "/salary-negotiation-guide",
        title: "Salary Negotiation Guide",
        blurb: "Research methods, ranges, and exact counter scripts.",
      },
      {
        href: "/evaluating-job-offers",
        title: "Evaluating Job Offers",
        blurb: "Total-comp math, equity, red flags, and decisions.",
      },
      {
        href: "/negotiating-benefits-guide",
        title: "Negotiating Benefits Guide",
        blurb: "Health, 401(k), PTO, and flexibility priced in dollars.",
      },
    ],
  },
  {
    name: "Growth",
    intro: "Navigate searches, pivots, promotions, and exits across a whole career.",
    cards: [
      {
        href: "/remote-job-search-guide",
        title: "Remote Job Search Guide",
        blurb: "Legit boards, scam shields, and geo-pay tactics.",
      },
      {
        href: "/career-change-guide",
        title: "Career Change Guide",
        blurb: "Pivot without starting over: proof, funding, timing.",
      },
      {
        href: "/professional-networking-guide",
        title: "Professional Networking Guide",
        blurb: "Scripts and systems that turn contacts into referrals.",
      },
      {
        href: "/informational-interviews-guide",
        title: "Informational Interviews Guide",
        blurb: "Outreach, questions, and follow-up that convert.",
      },
      {
        href: "/freelance-vs-full-time-guide",
        title: "Freelance vs Full-Time Guide",
        blurb: "Pay math, taxes, and risk compared with data.",
      },
      {
        href: "/entry-level-jobs-guide",
        title: "Entry-Level Jobs Guide",
        blurb: "Turn thin history into your first hired role.",
      },
      {
        href: "/internship-guide",
        title: "Internship Guide",
        blurb: "Land the role and convert it to full-time.",
      },
      {
        href: "/how-to-quit-job-gracefully",
        title: "How to Quit Your Job Gracefully",
        blurb: "Notice, scripts, counteroffers, and clean exits.",
      },
      {
        href: "/promotion-ask-guide",
        title: "Promotion Ask Guide",
        blurb: "Business cases, timing, and scripts that win.",
      },
      {
        href: "/performance-review-prep",
        title: "Performance Review Prep",
        blurb: "Wins logs and meeting strategy for raises.",
      },
      {
        href: "/side-hustle-ideas-guide",
        title: "Side Hustle Ideas Guide",
        blurb: "Profitable picks, pricing, and ten-hour weeks.",
      },
      {
        href: "/personal-branding-basics",
        title: "Personal Branding Basics",
        blurb: "Positioning and proof that get you noticed.",
      },
      {
        href: "/references-guide",
        title: "References Guide",
        blurb: "Choose and brief advocates who close offers.",
      },
      {
        href: "/background-check-guide",
        title: "Background Check Guide",
        blurb: "Verifications, rights, and clean clearance.",
      },
    ],
  },
];

export default function Home() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "44px 0 12px 0" }}>
      <p className="kicker">LoanPay Career · Job-Search Education</p>
      <h1
        className="sans"
        style={{ color: "#1f3a5f", fontSize: "2.2rem", lineHeight: 1.25, margin: "10px 0 14px 0" }}
      >
        Career guides that turn applications into offers
      </h1>
      <p style={{ color: "#2b3648", fontSize: "1.06rem" }}>
        Twenty-five plain-English guides covering resumes, interviews, salary negotiation, and
        long-term growth. Every guide includes real examples, comparison tables, and answers to
        the questions job seekers actually search. Start with resumes, prepare for interviews,
        then negotiate the full package.
      </p>
      <p className="sans" style={{ fontSize: 13, color: "#5b6675" }}>
        Updated: October 2026 · General education, not career or legal advice. See our{" "}
        <Link href="/disclaimer">Disclaimer</Link>.
      </p>
      <hr className="rule" style={{ margin: "24px 0" }} />
      {GROUPS.map((g) => (
        <section key={g.name} style={{ marginBottom: 36 }} aria-label={g.name}>
          <h2
            className="sans"
            style={{ color: "#1f3a5f", fontSize: "1.4rem", margin: "0 0 6px 0" }}
          >
            {g.name}
          </h2>
          <p className="sans" style={{ color: "#5b6675", fontSize: 14, margin: "0 0 16px 0" }}>
            {g.intro}
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            {g.cards.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                style={{
                  textDecoration: "none",
                  border: "1px solid #e3e8ef",
                  borderRadius: 6,
                  padding: "14px 16px",
                  display: "block",
                }}
              >
                <span
                  className="sans"
                  style={{ color: "#1f3a5f", fontWeight: 700, fontSize: 16 }}
                >
                  {c.title}
                </span>
                <span
                  className="sans"
                  style={{ display: "block", color: "#5b6675", fontSize: 14, marginTop: 4 }}
                >
                  {c.blurb}
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <hr className="rule" style={{ margin: "8px 0 20px 0" }} />
      <section aria-label="About this site">
        <h2 className="sans" style={{ color: "#1f3a5f", fontSize: "1.4rem" }}>
          Why trust these guides?
        </h2>
        <p style={{ color: "#2b3648" }}>
          LoanPay Career is an editorial publication staffed by career writers and editors (see
          our <Link href="/about">About page</Link>). Pay figures cite public{" "}
          <a href="https://www.bls.gov/ooh">Bureau of Labor Statistics</a> data and are labeled
          region- and industry-dependent; we never invent
          company salaries. Browsing is free, and our <Link href="/privacy-policy">Privacy
          Policy</Link> discloses how advertising supports the site.
        </p>
      </section>
    </div>
  );
}
