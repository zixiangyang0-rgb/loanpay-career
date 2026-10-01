# LoanPay Career — career.loanpaylogic.com

Free editorial publication of plain-English career guides: resumes, interviews,
salary negotiation, and professional growth. One of the lifestyle subdomains of
the loanpaylogic.com network. Built for Google AdSense review and search traffic.

## Stack

Next.js 15 + React 19 + Tailwind CSS 4, TypeScript strict. Zero added
dependencies beyond the shared template versions. No external fonts or images;
the only third-party request is the Google AdSense library script.

## Structure

- `app/page.tsx` — homepage hub grouping all 25 guides
- `app/*/page.tsx` — 25 long-form guides, each a server component with
  `metadata` (title ≤ 60 chars, 150–160 char description, canonical, OG/Twitter),
  a single H1, question-style H2s, a comparison/data table, 4–6 FAQs with
  matching `FAQPage` JSON-LD, outbound links to authoritative sources, and
  contextual in-site links plus a homepage link
- `app/about|contact|privacy-policy|terms-of-service|disclaimer` — legal pages
- `app/sitemap.ts` — 31 URLs (home + 25 guides + 5 legal)
- `public/ads.txt`, `public/robots.txt`

## Develop

```bash
npm install --no-audit --no-fund
npm run dev
npx tsc --noEmit
npm run build
```

## Design

Business minimal, light only: pure white background, navy (#1f3a5f) + gray
accents, thin 1px dividers, single column, script templates in blockquote
styling. No gradients, glassmorphism, or decorative shadows. Written from
scratch for this site; shares no visual patterns with sibling sites.

## Notes

- Editorial contacts: hello@loanpaylogic.com
- Salary figures cite public BLS data, labeled region/industry-dependent.
- Content is general education, not career or legal advice.
- Leave the working tree uncommitted per project workflow.
