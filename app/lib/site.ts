export type FaqItem = { q: string; a: string };

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Runtime-built backslash + "u003c" replacement string, so a literal `<`
// in JSON can never terminate the ld+json script block.
export const ESCAPED_LT = String.fromCharCode(92) + "u003c";
