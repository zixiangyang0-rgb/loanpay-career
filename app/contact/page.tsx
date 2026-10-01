import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact LoanPay Career: Corrections & Feedback",
  description:
    "Contact LoanPay Career for corrections, questions & reader feedback. We personally read and answer every message — reach out anytime — replies within days.",
  alternates: { canonical: "https://career.loanpaylogic.com/contact" },
  openGraph: {
    type: "website",
    url: "https://career.loanpaylogic.com/contact",
    siteName: "LoanPay Career",
    title: "Contact LoanPay Career: Corrections & Feedback",
    description:
      "Contact LoanPay Career for corrections, questions & reader feedback. We personally read and answer every message — reach out anytime — replies within days.",
  },
  twitter: {
    card: "summary",
    title: "Contact LoanPay Career: Corrections & Feedback",
    description:
      "Contact LoanPay Career for corrections, questions & reader feedback. We personally read and answer every message — reach out anytime — replies within days.",
  },
};

export default function Page() {
  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "36px 0 12px 0" }}>
      <p className="kicker">Contact</p>
      <h1 className="sans" style={{ color: "#1f3a5f", fontSize: "2rem", margin: "10px 0 14px 0" }}>
        Contact LoanPay Career
      </h1>
      <p className="sans" style={{ fontSize: 13, color: "#5b6675" }}>
        Updated: October 2026
      </p>
      <hr className="rule" style={{ margin: "20px 0" }} />
      <div className="article-body">
        <p>
          We welcome corrections, questions, and feedback from readers. The fastest way to reach
          the editorial team is by email at <strong>hello@loanpaylogic.com</strong>. Every
          message is read by a member of the team, and we prioritize corrections to published
          facts above all other mail.
        </p>
        <h2>What should you include in your message?</h2>
        <p>
          For corrections, include the page URL, the exact sentence you believe is wrong, and a
          link to the authoritative source supporting the fix, such as a BLS or government page.
          Verified corrections are typically published within ten business days. For general
          questions about job searching, tell us which guide you read and what situation you are
          facing; while we cannot give personalized career advice, reader questions shape future
          guides and FAQ updates. For self-directed research while you wait, the Department of
          Labor's free <a href="https://www.careeronestop.org">CareerOneStop portal</a> covers
          occupations, training options, and local job data.
        </p>
        <h2>What are our response times?</h2>
        <p>
          We aim to respond within five business days. Correction reports receive priority
          handling, press inquiries with “Press” in the subject line are routed to site
          operations, and partnership proposals are reviewed monthly. If your matter concerns
          privacy or data, mention “Privacy” in the subject line so it reaches the right person
          quickly under our <Link href="/privacy-policy">Privacy Policy</Link> process.
        </p>
        <h2>What can you not use this contact for?</h2>
        <p>
          Please do not send job applications, resumes, or personal documents; we are a
          publication, not an employer or recruiter, and unsolicited attachments are deleted
          unread. Do not send sensitive personal data such as Social Security numbers or account
          credentials. For urgent matters regarding content you believe is unlawful, email with
          “Urgent” in the subject line and include the specific URLs involved.
        </p>
        <p>
          Learn more about who we are on the <Link href="/about">About page</Link>, review how
          we handle data in the <Link href="/privacy-policy">Privacy Policy</Link>, or return to
          the <Link href="/">homepage hub</Link> to keep reading our career guides.
        </p>
      </div>
    </article>
  );
}
