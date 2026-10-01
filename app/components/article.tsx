import Link from "next/link";

export type Faq = { q: string; a: string };

export function FaqJsonLd({ faqs }: { faqs: Faq[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleShell({
  kicker,
  title,
  intro,
  updated,
  sources,
  faqs,
  children,
  related,
}: {
  kicker: string;
  title: string;
  intro: string;
  updated: string;
  sources: string;
  faqs: Faq[];
  children: React.ReactNode;
  related: { href: string; label: string }[];
}) {
  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "36px 0 12px 0" }}>
      <p className="kicker">{kicker}</p>
      <h1
        className="sans"
        style={{ color: "#1f3a5f", fontSize: "2rem", lineHeight: 1.25, margin: "10px 0 14px 0" }}
      >
        {title}
      </h1>
      <p style={{ color: "#2b3648", fontSize: "1.06rem" }}>{intro}</p>
      <p className="sans" style={{ fontSize: 13, color: "#5b6675", margin: "6px 0 0 0" }}>
        {updated} · {sources}
      </p>
      <hr className="rule" style={{ margin: "20px 0 8px 0" }} />
      <div className="article-body">{children}</div>
      <section aria-label="Frequently asked questions" style={{ marginTop: 8 }}>
        <h2
          className="sans"
          style={{
            fontSize: "1.45rem",
            color: "#1f3a5f",
            borderTop: "1px solid #e3e8ef",
            paddingTop: 24,
          }}
        >
          Frequently asked questions
        </h2>
        {faqs.map((f) => (
          <div className="faq-item" key={f.q}>
            <h3 className="sans">{f.q}</h3>
            <p style={{ margin: 0, color: "#2b3648" }}>{f.a}</p>
          </div>
        ))}
      </section>
      <hr className="rule" style={{ margin: "28px 0 16px 0" }} />
      <p className="sans" style={{ fontSize: 13, color: "#5b6675", lineHeight: 1.7 }}>
        This guide is general education, not career or legal advice. For situations involving
        contracts, immigration status, or disputes, talk to a qualified professional. See our{" "}
        <Link href="/disclaimer">Disclaimer</Link>.
      </p>
      <nav aria-label="Related guides" className="sans" style={{ marginTop: 16 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#1f3a5f", margin: "0 0 8px 0" }}>
          Keep reading
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6 }}>
          <li>
            <Link href="/">← Back to the LoanPay Career homepage hub</Link>
          </li>
          {related.map((r) => (
            <li key={r.href}>
              <Link href={r.href}>{r.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}
