import type { Metadata } from "next";
import { ArticleShell, type Faq } from "../components/article";
import { ESCAPED_LT, faqJsonLd } from "../lib/site";

const faqs: Faq[] = [
  {
    q: "How do I negotiate a higher salary without losing the offer?",
    a: "Anchor on market data and enthusiasm, never ultimatums: express excitement, cite a researched range from Bureau of Labor Statistics data and 2 to 3 competing signals, then ask if there is flexibility. Employers expect one to two rounds of negotiation for professional roles and rarely rescind offers over a polite counter. Keep every ask paired with the value you will deliver, and get the final agreement in writing before resigning elsewhere. The only real way to lose an offer is to bluff about competing offers, miss deadlines, or negotiate unprofessionally.",
  },
  {
    q: "What salary range should I ask for?",
    a: "Build your range from three inputs: BLS Occupational Outlook Handbook medians for the occupation, local job postings with disclosed pay bands, and your walk-away number based on real expenses. Open with a range whose bottom sits slightly above your true target so concessions still land well. Quote ranges, never single numbers, and frame them as base salary before discussing total compensation. For career changers, anchor on the target role's market, not your previous lower-paid field, while acknowledging ramp-up honestly.",
  },
  {
    q: "Should I disclose my current salary when asked?",
    a: "No, and in many states employers cannot legally require it; over twenty states and numerous cities now ban salary-history questions. Redirect to expectations: I would rather focus on the market range for this role, which my research puts at X to Y. If pressed on an application form, enter your target range or zero where permitted rather than your actual pay. Disclosing a below-market current salary anchors every subsequent number downward, which is exactly why the bans exist.",
  },
  {
    q: "How do I handle a lowball job offer?",
    a: "Pause, thank them, and respond with data rather than emotion: I am excited about the role, and based on BLS data and comparable postings at X to Y, I was expecting something closer to Z. Ask what flexibility exists on base versus sign-on, equity, title, or review timing. Sometimes a low base hides a strong total package, which our evaluating job offers guide helps you price. If they cannot move at all, negotiate non-salary terms or politely decline while keeping the relationship warm.",
  },
  {
    q: "Can I negotiate an entry-level salary?",
    a: "Yes, politely and modestly: entry-level bands have less flex, but sign-on bonuses, start dates, relocation help, and early review timelines are often movable. Research the band from postings and campus salary data, then make one well-supported ask rather than aggressive haggling. The bigger entry-level lever is competing offers, so keep multiple processes alive. Even a small negotiated gain compounds over a career, and the practice itself pays dividends in every future negotiation.",
  },
];

export const metadata: Metadata = {
  title: "Salary Negotiation Guide: Scripts That Raise Pay",
  description:
    "Salary negotiation guide with market research methods, exact range scripts & counter-offer tactics. Earn exactly what you're worth — negotiate confidently.",
  alternates: { canonical: "https://career.loanpaylogic.com/salary-negotiation-guide" },
  openGraph: {
    type: "article",
    url: "https://career.loanpaylogic.com/salary-negotiation-guide",
    title: "Salary Negotiation Guide: Scripts That Raise Pay",
    description:
      "Salary negotiation guide with market research methods, exact range scripts & counter-offer tactics. Earn exactly what you're worth — negotiate confidently.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Negotiation Guide: Scripts That Raise Pay",
    description:
      "Salary negotiation guide with market research methods, exact range scripts & counter-offer tactics. Earn exactly what you're worth — negotiate confidently.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, ESCAPED_LT),
        }}
      />
      <ArticleShell
        kicker="Offers & Negotiation"
        title="Salary Negotiation Guide: Scripts That Raise Pay"
        intro="This salary negotiation guide gives you research methods, exact scripts, and counter-tactics for every stage from application to signed offer. Most employers build 5 to 15 percent of flex into professional offers and expect you to negotiate, so accepting instantly leaves money on the table. Use this with our evaluating job offers and negotiating benefits guides to price the whole package."
        updated="Updated: October 2026"
        sources="Sources: U.S. Bureau of Labor Statistics Occupational Employment & Wage Statistics (May 2025); Occupational Outlook Handbook."
        faqs={faqs}
        related={[
          { href: "/evaluating-job-offers", label: "Evaluating Job Offers: Total-Package Math" },
          { href: "/negotiating-benefits-guide", label: "Negotiating Benefits Beyond Salary" },
          { href: "/common-interview-questions", label: "Common Interview Questions & Answers" },
        ]}
      >
        <p>
          Salary negotiation is a data conversation wrapped in enthusiasm, not a confrontation.
          The candidates who earn the most follow a repeatable sequence: research the market,
          deflect early screens into ranges, let the employer open, counter once with evidence,
          and trade gracefully to close. Each step below includes the words to use, because having
          the script ready is what separates successful negotiators from anxious accepters. Pair
          this salary negotiation guide with <a href="/evaluating-job-offers">offer
          evaluation</a> and <a href="/negotiating-benefits-guide">benefits negotiation</a> so no
          dollar hides in the fine print.
        </p>
        <h2>How do you research your market value?</h2>
        <p>
          Triangulate three sources before naming any number. First, the Bureau of Labor
          Statistics Occupational Outlook Handbook (<a href="https://www.bls.gov/ooh">bls.gov/ooh</a>) gives national medians by
          occupation, and the Occupational Employment and Wage Statistics survey (May 2025 data:
          all-workers median annual wage $50,980) breaks pay down by metro area and industry.
          Recognize these as base-wage medians that vary sharply: software developers show a
          national median of $133,080 while food-preparation supervisors sit near the high
          $30,000s, and coastal metros routinely pay 20 to 40 percent above national figures for
          the same title. Label every figure you use as region- and industry-dependent when
          discussing it.
        </p>
        <p>
          Second, collect ten recent postings for your exact title in your market, noting disclosed
          bands now required in a growing number of states. Third, gather live signals from
          recruiter conversations and peer networks, which reveal what employers are actually
          offering this quarter rather than last year's averages. Combine them into a target range
          with three numbers: your walk-away floor from real expenses, your fair-market target,
          and your aspirational ask supported by evidence. Write these down before any
          conversation so excitement cannot move your own goalposts.
        </p>
        <table>
          <thead>
            <tr>
              <th>Signal</th>
              <th>Where to get it</th>
              <th>How to use it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BLS occupation median</td>
              <td>bls.gov/ooh occupation profile</td>
              <td>Anchor credibility in every counter</td>
            </tr>
            <tr>
              <td>Metro + industry pay</td>
              <td>BLS OEWS area profiles, 10 local postings</td>
              <td>Adjust national figures to your market</td>
            </tr>
            <tr>
              <td>Live offers</td>
              <td>Recruiters, peers, competing processes</td>
              <td>Set the top of your range honestly</td>
            </tr>
            <tr>
              <td>Your floor</td>
              <td>Budget math: housing, debt, savings</td>
              <td>Never accept below this; keeps you honest</td>
            </tr>
          </tbody>
        </table>
        <h2>What do you say on applications and early screens?</h2>
        <p>
          Early-stage salary questions aim to screen you out cheaply, so answer in ranges and
          redirect to fit. On forms demanding a number, enter your target range or “negotiable”
          where allowed. When a recruiter asks for expectations on a first call, use the deflect
          script: “Based on my research for this scope in this market, I'm looking at the X-to-Y
          range for base, flexible on structure depending on total comp. But I'd love to first
          make sure the role is a great mutual fit — can you share the approved band?” This
          positions you as informed while inviting them to reveal their numbers first.
        </p>
        <blockquote>
          <p>
            <strong>Scripts:</strong> History ban redirect — “I'm not able to share history, but
            for this role my research supports X to Y.” Pressed for one number — “I'd consider
            anything in X to Y depending on the full package.” Recruiter asks current comp — “I'd
            prefer to anchor on this role's market; what band have you approved?”
          </p>
        </blockquote>
        <p>
          Never disclose current salary where law protects you, and treat voluntary disclosure as
          self-sabotage everywhere else since it anchors offers to your past rather than the
          role's value. If a posting's disclosed band sits below your floor, say so kindly and
          early to save both sides weeks of process. Candidates juggling multiple loops should
          keep timelines synchronized, because the strongest leverage in any negotiation is a
          real competing offer with a deadline, as our <a href="/evaluating-job-offers">offer
          comparison guide</a> explains.
        </p>
        <h2>How do you respond when the offer arrives?</h2>
        <p>
          Celebrate briefly, then pause: never accept on the call, no matter how good the number
          sounds. Thank them warmly, express genuine excitement, and ask for the full written
          package plus two to three business days to review. Review everything against your
          three-number sheet and the total-compensation math in our evaluating offers piece: base,
          bonus target and history, equity vesting, benefits value, and start-date flexibility.
          Identify one primary ask (usually base) and two secondary trades before responding.
        </p>
        <p>
          Deliver the counter in one concise call or email combining gratitude, data, and a
          specific ask: “I'm thrilled about the team and the scope. Based on BLS data for this
          occupation in our metro plus comparable postings at X to Y, I was hoping for Z base.
          If there's flexibility to close that gap, I'm ready to sign this week.” Then stop
          talking and let silence work; justifying past the ask weakens it. Expect a day or two
          of internal approval, and have your response ready for a split-the-difference move,
          which you can accept, counter once more modestly, or convert into non-salary wins.
        </p>
        <h2>What can you negotiate besides base salary?</h2>
        <p>
          When base will not move, the package still can: sign-on bonuses, equity grants, early
          performance reviews with defined raise criteria, remote days, title, professional
          development budgets, and start dates all carry real value. Price each concession in
          dollars so trades stay rational; an extra week of vacation equals roughly 2 percent of
          salary, and a six-month early review with a documented raise path can beat a small
          immediate bump. Our <a href="/negotiating-benefits-guide">benefits guide</a> prices
          health plans, retirement matches, and leave in detail.
        </p>
        <p>
          Prioritize two trades maximum so you look reasonable rather than insatiable, and frame
          each as solving a problem: “A six-month review tied to the onboarding metrics we
          discussed lets me prove the higher band quickly.” Get every promise in the written offer
          letter, because verbal commitments evaporate with reorgs and manager changes. If the
          employer truly cannot move on anything, that data itself is valuable signal about budgets
          and culture to weigh in your final decision.
        </p>
        <h2>How do special situations change the playbook?</h2>
        <p>
          Entry-level candidates should make one polite, data-backed ask focused on sign-on or
          review timing rather than aggressive base haggling, since bands are tightest at the
          bottom. Career changers must anchor on the new role's market while proactively
          addressing ramp-up: offer a 90-day plan from our <a href="/career-change-guide">career
          change guide</a> that justifies the band. Remote workers should research the company's
          location policy first, since some firms adjust pay by employee location while others pay
          nationally; our <a href="/remote-job-search-guide">remote search guide</a> covers
          geo-pay tactics.
        </p>
        <p>
          Internal moves trade differently: you know the budgets and they know your performance,
          so anchor on external market data plus your review record rather than your current
          salary. Counteroffers from your existing employer deserve deep skepticism; statistics on
          post-counteroffer departures are grim, and our <a href="/how-to-quit-job-gracefully">
          quitting gracefully guide</a> covers exit timing. Whatever the situation, keep every
          exchange warm and professional, because industries are small and today's hiring manager
          is tomorrow's reference checked in our <a href="/references-guide">references
          guide</a>.
        </p>
        <h2>How do you close and lock the final deal?</h2>
        <p>
          Close with conditional acceptance that confirms mutual commitment: “If you can reach Z
          base with the six-month review in writing, I'll sign and withdraw my other processes
          today.” This gives the employer certainty to take upstairs for approval. Once they
          agree, request the revised written offer and verify every number, date, title, vesting
          term, and bonus condition before signing. Read the non-compete, non-solicit, and
          arbitration clauses as carefully as the pay lines, since they govern your future
          mobility.
        </p>
        <p>
          After signing, notify other active processes promptly and graciously; those hiring
          managers become network contacts in your <a href="/professional-networking-guide">
          professional network</a>. Do not resign your current role until the new offer is signed
          and any <a href="/background-check-guide">background check</a> clears. Finally, record
          the market data and scripts that worked, because compensation compounds: each
          negotiation sets the anchor for the next, and professionals who negotiate consistently
          earn dramatically more over a decade than identical peers who accept first offers.
        </p>
        <h2>How do you negotiate promotions and internal moves?</h2>
        <p>
          Internal negotiations differ because both sides hold cards: you know budgets and
          processes while they know your performance record intimately. Anchor on external market
          data for the new level plus documented wins, never on your current salary, and cite
          competing internal demand where it exists. Time the ask to budget cycles and reorg
          windows when new scope is being assigned, pairing it with the case-building in our{" "}
          <a href="/promotion-ask-guide">promotion guide</a>. If the move adds scope without a
          band change, negotiate title, review timing, and development investment as bridge
          compensation. Internal goodwill matters enormously, so keep every exchange
          collaborative; the HR partner you pressure today staffs your next transfer tomorrow.
        </p>
      </ArticleShell>
    </>
  );
}
