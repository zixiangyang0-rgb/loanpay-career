import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service for LoanPay Career Use",
  description:
    "Terms of Service: permitted use, content rights & liability limits for LoanPay Career readers. Fair, plain-English terms — please read the full terms here.",
  alternates: { canonical: "https://career.loanpaylogic.com/terms-of-service" },
  openGraph: {
    type: "website",
    url: "https://career.loanpaylogic.com/terms-of-service",
    siteName: "LoanPay Career",
    title: "Terms of Service for LoanPay Career Use",
    description:
      "Terms of Service: permitted use, content rights & liability limits for LoanPay Career readers. Fair, plain-English terms — please read the full terms here.",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service for LoanPay Career Use",
    description:
      "Terms of Service: permitted use, content rights & liability limits for LoanPay Career readers. Fair, plain-English terms — please read the full terms here.",
  },
};

export default function Page() {
  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "36px 0 12px 0" }}>
      <p className="kicker">Legal</p>
      <h1 className="sans" style={{ color: "#1f3a5f", fontSize: "2rem", margin: "10px 0 14px 0" }}>
        Terms of Service
      </h1>
      <p className="sans" style={{ fontSize: 13, color: "#5b6675" }}>
        Updated: October 2026 · Contact: hello@loanpaylogic.com
      </p>
      <hr className="rule" style={{ margin: "20px 0" }} />
      <div className="article-body">
        <p>
          These Terms of Service govern your use of LoanPay Career
          (career.loanpaylogic.com), a free educational publication about job searching and
          professional growth. By accessing the site you agree to these terms. If you do not
          agree, please do not use the site.
        </p>
        <h2>What is this site, and what is it not?</h2>
        <p>
          LoanPay Career publishes general-education articles, templates, and examples for
          informational purposes. Nothing on this site is career, legal, tax, financial, or
          immigration advice, and no reader relationship creates a professional-client
          relationship of any kind, as detailed in our <Link href="/disclaimer">Disclaimer</Link>.
          Employment outcomes depend on individual circumstances and markets; we make no promise
          that following our guides will produce interviews, offers, or any specific result.
        </p>
        <h2>How may you use our content?</h2>
        <p>
          You may read, link to, and quote brief excerpts of our articles for personal,
          non-commercial purposes with attribution and a link to the original page. You may not
          republish full articles, scrape the site at abusive volumes, misrepresent our content
          as your own, or use it to train models or datasets without written permission.           All
          articles, designs, and branding are protected by applicable intellectual property laws
          (see the <a href="https://www.copyright.gov">U.S. Copyright Office</a> for background).
          To request broader reuse permission, email hello@loanpaylogic.com with the URLs and
          intended use.
        </p>
        <h2>What rules apply to your conduct?</h2>
        <p>
          You agree not to misuse the site: no attempting to breach security, no sending spam or
          malicious code through our contact channels, no submitting unlawful or infringing
          material, and no misrepresenting your identity. We may block abusive access and remove
          or disregard messages that violate these rules. Readers who email corrections grant us
          permission to use the substance of verified corrections in updated articles without
          compensation or attribution beyond our thanks.
        </p>
        <h2>What are our liability limits?</h2>
        <p>
          The site is provided “as is” without warranties of any kind, express or implied,
          including accuracy, completeness, or fitness for a purpose. To the maximum extent
          permitted by law, LoanPay Career and its operators are not liable for decisions you
          make based on site content or for any indirect, incidental, or consequential damages.
          Your sole remedy for dissatisfaction is to stop using the site. Some jurisdictions do
          not allow certain warranty exclusions, so portions of this section may not apply to you.
        </p>
        <h2>How are disputes and changes handled?</h2>
        <p>
          These terms are governed by the laws of the United States and the state where the site
          operator is established, without regard to conflict-of-law rules. Disputes should first
          be raised informally via hello@loanpaylogic.com so we can seek resolution. We may
          update these terms as the site evolves; continued use after changes constitutes
          acceptance, with the current version always posted on this page. Related documents
          include our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/contact">Contact page</Link>, and you can return to the{" "}
          <Link href="/">homepage hub</Link> anytime.
        </p>
      </div>
    </article>
  );
}
