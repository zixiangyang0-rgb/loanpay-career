import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer: Education, Not Professional Advice",
  description:
    "Disclaimer: LoanPay Career offers general education, not career or legal advice. Please understand our guides' limits before acting on them — read this.",
  alternates: { canonical: "https://career.loanpaylogic.com/disclaimer" },
  openGraph: {
    type: "website",
    url: "https://career.loanpaylogic.com/disclaimer",
    siteName: "LoanPay Career",
    title: "Disclaimer: Education, Not Professional Advice",
    description:
      "Disclaimer: LoanPay Career offers general education, not career or legal advice. Please understand our guides' limits before acting on them — read this.",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer: Education, Not Professional Advice",
    description:
      "Disclaimer: LoanPay Career offers general education, not career or legal advice. Please understand our guides' limits before acting on them — read this.",
  },
};

export default function Page() {
  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "36px 0 12px 0" }}>
      <p className="kicker">Legal</p>
      <h1 className="sans" style={{ color: "#1f3a5f", fontSize: "2rem", margin: "10px 0 14px 0" }}>
        Disclaimer
      </h1>
      <p className="sans" style={{ fontSize: 13, color: "#5b6675" }}>
        Updated: October 2026 · Contact: hello@loanpaylogic.com
      </p>
      <hr className="rule" style={{ margin: "20px 0" }} />
      <div className="article-body">
        <p>
          LoanPay Career (career.loanpaylogic.com) publishes general education about job
          searching and professional growth. Everything on this site is informational only and is
          not career, legal, tax, financial, immigration, or medical advice. No article, script,
          template, or example creates a coach-client, attorney-client, or any other
          professional relationship between you and us.
        </p>
        <h2>Why should you not treat guides as advice?</h2>
        <p>
          Employment situations vary enormously by state law, industry practice, employer policy,
          and personal circumstance. A resignation script that works for an at-will employee may
          be wrong for someone under contract; a negotiation tactic suited to tech may misfire in
          education or government hiring. Our guides describe general patterns and options, but
          only a qualified professional who knows your facts can advise you. For binding
          decisions involving contracts, non-competes, discrimination, immigration status,
          benefits, or taxes, consult a licensed attorney, tax professional, or advisor in your
          jurisdiction.
        </p>
        <h2>How accurate is salary and market information?</h2>
        <p>
          Pay figures on this site cite public Bureau of Labor Statistics data and are labeled
          as region- and industry-dependent; they describe national or metro medians, not
          promises about any employer or offer. Labor markets move, postings vary, and
          individual outcomes differ. We never invent company-specific salaries, and you should
          treat anonymous internet pay claims with the same skepticism. Verify current figures
          against primary sources before negotiating or deciding.
        </p>
        <h2>What about external links and advertising?</h2>
        <p>
          We link to authoritative external sources for convenience, but we do not control third-
          party sites and are not responsible for their content, accuracy, or practices. Our
          advertising partners, including Google AdSense, operate under their own policies
          disclosed in our <Link href="/privacy-policy">Privacy Policy</Link>; ads do not
          constitute our endorsement of advertised products or services. Sponsored content, if
          any ever appears, would be clearly labeled, which to date it has not needed to be.
        </p>
        <h2>What are the limits of our liability?</h2>
        <p>
          You use this site at your own risk. To the maximum extent permitted by law, we are not
          liable for actions you take or decisions you make based on site content, nor for any
          loss of employment opportunity, income, or data. If any provision of this disclaimer
          is unenforceable, the remainder continues in effect. Questions belong at
          hello@loanpaylogic.com or via our <Link href="/contact">Contact page</Link>; also see
          our <Link href="/terms-of-service">Terms of Service</Link> and return to the{" "}
          <Link href="/">homepage hub</Link> to continue reading.
        </p>
      </div>
    </article>
  );
}
