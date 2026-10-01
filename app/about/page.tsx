import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About LoanPay Career: Our Mission & Team",
  description:
    "About LoanPay Career: our mission, editorial team & funding model for plain-English job-search education. Meet the team — read our full story today.",
  alternates: { canonical: "https://career.loanpaylogic.com/about" },
  openGraph: {
    type: "website",
    url: "https://career.loanpaylogic.com/about",
    siteName: "LoanPay Career",
    title: "About LoanPay Career: Our Mission & Team",
    description:
      "About LoanPay Career: our mission, editorial team & funding model for plain-English job-search education. Meet the team — read our full story today.",
  },
  twitter: {
    card: "summary",
    title: "About LoanPay Career: Our Mission & Team",
    description:
      "About LoanPay Career: our mission, editorial team & funding model for plain-English job-search education. Meet the team — read our full story today.",
  },
};

export default function Page() {
  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "36px 0 12px 0" }}>
      <p className="kicker">About</p>
      <h1 className="sans" style={{ color: "#1f3a5f", fontSize: "2rem", margin: "10px 0 14px 0" }}>
        About LoanPay Career
      </h1>
      <p className="sans" style={{ fontSize: 13, color: "#5b6675" }}>
        Updated: October 2026
      </p>
      <hr className="rule" style={{ margin: "20px 0" }} />
      <div className="article-body">
        <p>
          LoanPay Career (career.loanpaylogic.com) is a free editorial publication about job
          searching and professional growth. We publish plain-English guides on resumes,
          interviews, salary negotiation, and career strategy, written for ordinary job seekers
          rather than HR professionals. Every guide is original, researched against public
          sources such as the U.S. Bureau of Labor Statistics, and reviewed before publication.
        </p>
        <h2>What is our mission?</h2>
        <p>
          Hiring advice on the internet is often vague, recycled, or paywalled. Our mission is to
          give every job seeker the same practical playbooks that well-connected candidates get
          from coaches: exact scripts, real examples, comparison tables, and honest numbers. We
          measure success by whether a reader can act on a guide the same week they read it. We
          do not sell courses, coaching, or resume services, and our guides never require payment
          or registration.
        </p>
        <h2>Who is the editorial team?</h2>
        <p>
          LoanPay Career is produced by a small editorial team. Content is researched and drafted
          by staff career writers <strong>Maya Chen</strong> (lead career writer, covering
          resumes, interviews, and negotiation) and <strong>Daniel Okafor</strong> (staff writer,
          covering job-search strategy and early careers), edited by <strong>Sarah Lindqvist</strong>{" "}
          (managing editor, responsible for accuracy review and final approval), and maintained by{" "}
          <strong>Tom Becker</strong> (site operations). Role descriptions and responsibilities
          are functional titles used for editorial accountability on this publication.
        </p>
        <p>
          Our writers consult primary public sources including the Bureau of Labor Statistics
          Occupational Outlook Handbook, the Department of Labor's CareerOneStop, and Federal
          Trade Commission consumer guidance. Salary figures always cite public BLS data,
          labeled as region- and industry-dependent, and we never invent company-specific pay.
          Corrections are welcome and published promptly when verified.
        </p>
        <h2>How is the site funded?</h2>
        <p>
          LoanPay Career is free to read and supported by advertising, including Google AdSense.
          Details are disclosed in our <Link href="/privacy-policy">Privacy Policy</Link>. Ads
          never influence our editorial recommendations, and we do not accept payment for
          placement in guides. Our content is general education, not career, legal, tax, or
          financial advice, as explained in our <Link href="/disclaimer">Disclaimer</Link>.
        </p>
        <h2>How can you contact us?</h2>
        <p>
          For corrections, questions, or feedback, email us at{" "}
          <strong>hello@loanpaylogic.com</strong> or use the form on our{" "}
          <Link href="/contact">Contact page</Link>. We read every message and prioritize
          corrections to published facts. For press or partnership inquiries, include “Press” in
          the subject line. Response times are typically within five business days.
        </p>
        <p>
          LoanPay Career is part of the loanpaylogic.com network alongside our sister sites for{" "}
          <a href="https://tax.loanpaylogic.com">tax education</a> and{" "}
          <a href="https://business.loanpaylogic.com">business education</a>. Start exploring
          from the <Link href="/">homepage hub</Link>.
        </p>
      </div>
    </article>
  );
}
