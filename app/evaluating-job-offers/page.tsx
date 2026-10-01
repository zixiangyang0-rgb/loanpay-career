import type { Metadata } from "next";
import { ArticleShell, type Faq } from "../components/article";
import { ESCAPED_LT, faqJsonLd } from "../lib/site";

const faqs: Faq[] = [
  {
    q: "How do I compare job offers beyond salary?",
    a: "Convert every offer to first-year total compensation: base salary plus expected bonus times historical payout rate, plus equity value vesting in year one, plus sign-on, plus the dollar value of benefits differences. Then score non-monetary factors separately: manager quality, scope growth, commute or remote policy, team stability, and promotion velocity. A 5 percent salary gap often reverses when one employer offers a 6 percent 401(k) match and the other offers 3 percent. Our guide's worksheet walks through the full calculation line by line.",
  },
  {
    q: "How do I value stock options versus RSUs in an offer?",
    a: "RSUs have straightforward value: share count times current price, discounted for vesting risk and taxes. Stock options only pay if the share price exceeds your strike price, so value them with the company's stage, 409A valuation trend, strike price, vesting schedule, and exit prospects in mind. Ask for the fully diluted share count to compute your ownership percentage, plus exercise windows after departure. Early-stage options can be life-changing or wallpaper; never let an employer imply they equal cash without showing the math.",
  },
  {
    q: "What red flags should I look for in a job offer?",
    a: "Watch for vague bonus criteria with no historical payout data, verbal promises missing from the written letter, non-competes broader than your role requires, unlimited PTO with low actual usage, high team turnover, and pressure to decide in 24 hours. Ask why the role is open and how long the last person stayed; evasive answers are themselves an answer. Check the manager's tenure and team reviews, since your direct boss predicts daily happiness better than any perk. Any employer threatened by your careful review is telling you something.",
  },
  {
    q: "How long can I take to decide on a job offer?",
    a: "Two to five business days is standard for professional roles; ask for the deadline explicitly and negotiate it once if competing processes need a few more days. Employers with exploding offers under 48 hours are pressuring you, and it is reasonable to say you make careful decisions and need until a specific date. Use the window for diligence: reference conversations with future peers, benefits paperwork review, and total-comp math. Never accept on the call even for a dream offer; sleep on every decision of this magnitude.",
  },
  {
    q: "Should I accept a counteroffer from my current employer?",
    a: "Usually not: counteroffers address pay while the reasons you interviewed, such as scope, manager, or growth, remain unchanged, and many counteroffer acceptors leave within a year anyway. If you stay, get the new terms in writing immediately with effective dates, since verbal retention promises frequently evaporate. Consider why it took resigning to earn fair treatment and whether trust is repairable. Our quitting gracefully guide covers exit timing if you decline, and our references guide protects relationships either way.",
  },
];

export const metadata: Metadata = {
  title: "Evaluating Job Offers: Compare Pay & Pick Right",
  description:
    "Evaluating job offers? Total-comp math, startup equity valuation, red flags & final-decision scripts. Choose confidently with real market data — read now.",
  alternates: { canonical: "https://career.loanpaylogic.com/evaluating-job-offers" },
  openGraph: {
    type: "article",
    url: "https://career.loanpaylogic.com/evaluating-job-offers",
    title: "Evaluating Job Offers: Compare Pay & Pick Right",
    description:
      "Evaluating job offers? Total-comp math, startup equity valuation, red flags & final-decision scripts. Choose confidently with real market data — read now.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evaluating Job Offers: Compare Pay & Pick Right",
    description:
      "Evaluating job offers? Total-comp math, startup equity valuation, red flags & final-decision scripts. Choose confidently with real market data — read now.",
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
        title="Evaluating Job Offers: Compare Pay & Pick Right"
        intro="Evaluating job offers correctly means pricing total compensation, vetting the team, and deciding without pressure. Base salary is often less than 80 percent of the real difference between offers once bonuses, equity, retirement matches, and health costs are counted. Work through the math and checklists below with our salary negotiation and benefits guides at your side."
        updated="Updated: October 2026"
        sources="Sources: U.S. Bureau of Labor Statistics OEWS (May 2025); U.S. Department of Labor employee-benefits guidance."
        faqs={faqs}
        related={[
          { href: "/salary-negotiation-guide", label: "Salary Negotiation Guide: Scripts & Ranges" },
          { href: "/negotiating-benefits-guide", label: "Negotiating Benefits Beyond Salary" },
          { href: "/how-to-quit-job-gracefully", label: "How to Quit Your Job Gracefully" },
        ]}
      >
        <p>
          Offer euphoria is the enemy of good decisions. After weeks of interviews, the instinct is
          to accept instantly and celebrate, but the fine print you skim today governs your money,
          time, and mobility for years. Evaluating job offers is a repeatable skill with three
          parts: convert every offer to comparable dollars, investigate the humans and the
          business, and run a decision process that resists pressure. This guide covers all three,
          drawing on your <a href="/salary-negotiation-guide">negotiation research</a> and the{" "}
          <a href="/negotiating-benefits-guide">benefits breakdown</a>.
        </p>
        <h2>How do you compute first-year total compensation?</h2>
        <p>
          Build a line-by-line worksheet for each offer with identical rows so comparisons stay
          honest. Start with base salary, then add the target bonus multiplied by the company's
          actual historical payout rate, which you must ask for since targets without history are
          wishes. Add equity vesting in year one only, sign-on bonuses (noting clawback clauses
          that demand repayment if you leave within a year or two), and the employer's retirement
          contribution at your contribution level. Subtract the employee share of health premiums
          and expected out-of-pocket costs using the plan documents, not the brochure.
        </p>
        <p>
          Small percentages compound into life-changing gaps: a 6 percent 401(k) match versus 3
          percent on a $90,000 salary is $2,700 per year before growth, worth tens of thousands
          over a decade. Value paid leave at your daily rate, and price commutes in both dollars
          and hours; an extra forty-five minutes each way costs nearly 400 hours a year. Sanity
          check every base figure against Bureau of Labor Statistics occupation medians
          (<a href="https://www.bls.gov/ooh">bls.gov/ooh</a>), remembering figures are region- and industry-dependent. The offer with
          the biggest base frequently loses once the full worksheet is totaled.
        </p>
        <table>
          <thead>
            <tr>
              <th>Line item</th>
              <th>Offer A</th>
              <th>Offer B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Base salary</td>
              <td>$92,000</td>
              <td>$88,000</td>
            </tr>
            <tr>
              <td>Bonus × history</td>
              <td>10% target × 90% paid = $8,280</td>
              <td>15% target × 60% paid = $7,920</td>
            </tr>
            <tr>
              <td>Year-one equity</td>
              <td>$4,000 RSUs vested</td>
              <td>$0 (options, pre-IPO)</td>
            </tr>
            <tr>
              <td>Retirement match</td>
              <td>6% = $5,520</td>
              <td>3% = $2,640</td>
            </tr>
            <tr>
              <td>Health employee cost</td>
              <td>−$2,400 premiums</td>
              <td>−$4,800 premiums</td>
            </tr>
            <tr>
              <td>Illustrative year-one total</td>
              <td>$107,400</td>
              <td>$93,760</td>
            </tr>
          </tbody>
        </table>
        <h2>How do you value equity and bonuses honestly?</h2>
        <p>
          Treat variable pay with disciplined skepticism. For public-company RSUs, multiply shares
          vesting in year one by the current price, then discount for taxes and the golden-handcuff
          effect of unvested tranches. For private-company options, demand the strike price, total
          shares outstanding, latest 409A valuation and its trend, vesting schedule with cliff,
          and post-termination exercise window; without these, the grant is unpriceable. Ask what
          percentage of the company your grant represents and how the last two funding rounds
          moved the valuation.
        </p>
        <p>
          Bonuses need the same interrogation: target percentage, formula versus discretionary mix,
          company and individual weighting, payout history for three years, and pro-rating for
          mid-year starts. A 20 percent target that paid 50 percent twice running is really a 10
          percent bonus with extra steps. Commission plans require the OTE split, quota
          attainability percentages, accelerators, and clawback terms in writing. If an employer
          will not share payout history, assume the worst case in your worksheet and say so
          plainly when negotiating.
        </p>
        <h2>What due diligence should you run on the team?</h2>
        <p>
          Your manager determines your daily life more than any corporate perk, so diligence them
          like an investment. Ask how long they have managed this team, how many direct reports
          were promoted in two years, and what happened to the last person in your role. Request
          brief chats with two future peers and ask what surprised them, what the manager does
          under pressure, and what they would change. Peer candor in unscripted conversation
          reveals more than any culture deck.
        </p>
        <blockquote>
          <p>
            <strong>Ask before accepting:</strong> “Why is this role open? How is success measured
            in the first 90 days? What's the team's biggest challenge this quarter? How often do
            you meet 1:1 with reports? What's the promotion path from this level?”
          </p>
        </blockquote>
        <p>
          Zoom out to business health: funding runway or profitability, headcount trend on the team
          (growing, stable, or backfilling exits), and Glassdoor-style review patterns rather than
          single anecdotes. For startups, ask about runway in months and the plan if targets slip;
          for large firms, ask about reorg frequency and the team's budget trajectory. Consult
          your <a href="/professional-networking-guide">network</a> for back-channel reads on the
          manager, since one honest conversation can save you from a miserable year.
        </p>
        <h2>Which contract terms hide the biggest traps?</h2>
        <p>
          Read the offer letter and every attachment as carefully as the salary lines. Non-compete
          clauses can bar you from your industry for a year across a whole state, so check scope,
          duration, geography, and whether your state even enforces them. Non-solicitation,
          confidentiality, invention-assignment, and mandatory arbitration clauses each carry
          future-career consequences worth an hour of a employment lawyer's time for senior roles.
          At-will language is standard in most U.S. states, but note any probation or
          performance-review tripwires tied to bonuses.
        </p>
        <p>
          Verify start date, title, reporting line, work location and remote terms in writing,
          since verbal flexibility on remote work famously evaporates. Confirm which promises made
          verbally appear in the letter; anything missing was never promised. For immigration,
          clearance, or licensing contingencies, get the timeline and who pays in writing before
          resigning. This paperwork caution pairs with the verification habits in our{" "}
          <a href="/background-check-guide">background check guide</a>, and none of it is legal
          advice, so consult counsel for binding questions per our <a href="/disclaimer">disclaimer</a>.
        </p>
        <h2>How do you decide between two good offers?</h2>
        <p>
          Score both offers on a weighted matrix rather than gut feel: assign weights to
          compensation, manager quality, scope growth, learning, commute or flexibility, stability,
          and mission fit, then score each honestly. Run the regret-minimization test by imagining
          it is eighteen months later and asking which choice you would defend to a friend.
          Consider trajectory over snapshot: the role with steeper skill growth and a proven
          promoter-manager usually beats a slightly higher starting number within two years.
        </p>
        <p>
          Use competing offers as polite leverage only with genuine intent to accept either, since
          bluffing destroys credibility if discovered. Give your preferred employer a specific,
          truthful window: “I have a decision deadline Friday; you are my first choice if we can
          close the gap on base.” Decline the loser graciously in writing, naming one genuine
          positive, because hiring managers remember grace and re-open doors. Keep networking
          notes from both processes in your system for future moves.
        </p>
        <h2>How do you accept, decline, or stall professionally?</h2>
        <p>
          Accept in writing after verifying every number, restating the agreed terms in your reply
          so misunderstandings surface before signatures. Decline with gratitude within one
          business day of deciding; short, warm, and specific beats long and vague. To stall
          legitimately, cite the decision process rather than the competing offer: “I make major
          decisions carefully and will confirm by Thursday,” which most employers respect. Never
          ghost any employer at this stage, since industries are small and memories are long.
        </p>
        <p>
          Do not resign your current job until the new offer is signed and contingencies like{" "}
          <a href="/background-check-guide">background checks</a> clear, following the timing in
          our <a href="/how-to-quit-job-gracefully">quitting gracefully guide</a>. Brief your{" "}
          <a href="/references-guide">references</a> on the outcome so they hear it from you. And
          archive your total-comp worksheets; when the next cycle comes, today's numbers become
          the baseline for your next negotiation.
        </p>
        <h2>How do you evaluate startups versus established employers?</h2>
        <p>
          Startup offers trade cash certainty for equity lottery tickets plus accelerated
          learning, so diligence the business like an investor: months of runway, revenue trend,
          burn multiple, founder track record, and the specific plan if targets slip. Discount
          option grants ruthlessly without <a href="/salary-negotiation-guide">negotiated</a>{" "}
          strike prices, vesting terms, and valuation trends in writing. Established employers
          trade upside for predictability, training infrastructure, and brand signaling; diligence
          shifts to team health, reorg frequency, and internal mobility rates. Neither dominates
          universally: early-career builders often gain more from startup scope, while caregivers
          and visa holders rationally prefer stability. Match the choice to your life stage,
          risk capacity, and learning goals rather than prestige narratives.
        </p>
      </ArticleShell>
    </>
  );
}
