import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for LoanPay Career Readers",
  description:
    "Privacy Policy: what LoanPay Career collects, cookie controls, AdSense disclosures & your privacy rights. Transparent by design — read the policy here.",
  alternates: { canonical: "https://career.loanpaylogic.com/privacy-policy" },
  openGraph: {
    type: "website",
    url: "https://career.loanpaylogic.com/privacy-policy",
    siteName: "LoanPay Career",
    title: "Privacy Policy for LoanPay Career Readers",
    description:
      "Privacy Policy: what LoanPay Career collects, cookie controls, AdSense disclosures & your privacy rights. Transparent by design — read the policy here.",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy for LoanPay Career Readers",
    description:
      "Privacy Policy: what LoanPay Career collects, cookie controls, AdSense disclosures & your privacy rights. Transparent by design — read the policy here.",
  },
};

export default function Page() {
  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "36px 0 12px 0" }}>
      <p className="kicker">Legal</p>
      <h1 className="sans" style={{ color: "#1f3a5f", fontSize: "2rem", margin: "10px 0 14px 0" }}>
        Privacy Policy
      </h1>
      <p className="sans" style={{ fontSize: 13, color: "#5b6675" }}>
        Updated: October 2026 · Contact: hello@loanpaylogic.com
      </p>
      <hr className="rule" style={{ margin: "20px 0" }} />
      <div className="article-body">
        <p>
          LoanPay Career (career.loanpaylogic.com) respects your privacy. This policy explains
          what information we and our service providers collect when you read our free career
          guides, how it is used, and the choices you have. By using this site you agree to the
          practices described here. If you disagree, please do not use the site.
        </p>
        <h2>What information do we collect?</h2>
        <p>
          We operate a read-only publication with no accounts and no required registration, so we
          collect very little directly. When you email us, we receive your address and message
          content to respond. Our hosting and analytics infrastructure automatically processes
          standard technical data such as pages viewed, browser type, approximate location
          derived from IP address, and referral sources to keep the site fast, secure, and
          useful. We do not ask for Social Security numbers, financial credentials, or other
          sensitive identifiers anywhere on this site.
        </p>
        <h2>How do third-party ads and cookies work on this site?</h2>
        <p>
          This site displays advertising served by third parties, including Google AdSense. Google
          uses cookies and similar technologies, including the DoubleClick cookie, to serve ads
          based on your prior visits to this and other websites. These third-party vendors and ad
          networks may collect or receive information about your visits, including pages viewed,
          device identifiers, and approximate location, and use it to show you personalized or
          non-personalized advertising. Google's use of advertising cookies enables it and its
          partners to serve ads based on your visit to our site and other sites on the internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads">Google's Ads Settings page</a> and can
          learn how Google uses data from partner sites at{" "}
          <a href="https://policies.google.com/technologies/partner-sites">
            Google's Partner Sites policy page
          </a>.
          You can also control cookies through your browser settings: most browsers allow you to
          block third-party cookies, clear existing cookies, or browse privately, though blocking
          cookies may affect site features. We do not control third-party advertisers' tracking
          technologies, so consult their policies for details. Our ads.txt file publicly declares
          our authorized sellers for transparency.
        </p>
        <h2>How do we use information?</h2>
        <p>
          We use technical and contact information to operate and secure the site, respond to
          reader messages, fix errors, understand which guides help readers most, and comply with
          legal obligations. We do not sell personal information. We share limited data only with
          infrastructure providers that host, protect, and measure the site under contractual
          confidentiality, and with authorities where required by law. Aggregated, de-identified
          statistics may be used to describe readership without identifying anyone.
        </p>
        <h2>What are your rights and choices?</h2>
        <p>
          Depending on your jurisdiction, you may have rights to access, correct, delete, or
          restrict processing of your personal information, and to opt out of certain
          advertising-related processing. To exercise these rights, email hello@loanpaylogic.com
          with “Privacy” in the subject line; we respond within thirty days. California
          residents may exercise CCPA/CPRA rights including opt-out of sale or sharing as defined
          by that law, and we honor Global Privacy Control signals where applicable. European
          visitors should note our legitimate-interest basis for security logging and consent
          basis for optional cookies.
        </p>
        <h2>How do we handle children and retention?</h2>
        <p>
          This site is a general-audience career publication not directed at children under
          thirteen, and we do not knowingly collect their information; contact us if you believe
          a child has emailed us and we will delete it. We retain emails only as long as needed
          to respond and maintain records, and technical logs on rolling short schedules. If this
          policy changes materially, we will update the date above and, for significant changes,
          post a notice on the <Link href="/">homepage</Link>. Questions belong at
          hello@loanpaylogic.com or via our <Link href="/contact">Contact page</Link>, and our{" "}
          <Link href="/terms-of-service">Terms of Service</Link> and{" "}
          <Link href="/disclaimer">Disclaimer</Link> apply alongside this policy.
        </p>
      </div>
    </article>
  );
}
