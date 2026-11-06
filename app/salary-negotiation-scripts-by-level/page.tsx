import type { Metadata } from "next";
import { ArticleShell, type Faq } from "../components/article";
import { ESCAPED_LT, faqJsonLd } from "../lib/site";

const faqs: Faq[] = [
  {
    q: "Should entry-level candidates use the same scripts as senior candidates?",
    a: "No. Entry-level bands are narrow, so your script should make one polite, evidence-backed ask focused on sign-on, relocation, or an early review rather than aggressive base haggling. Senior and staff candidates should negotiate harder on base, equity, and scope because the bands are wide and the business impact is larger. Managers and executives add team scope, bonus targets, and severance terms to the script. Match the aggressiveness of the script to the width of the band and the leverage your track record gives you.",
  },
  {
    q: "What is the strongest salary negotiation script for mid-level professionals?",
    a: "Anchor on competing market proof: I am excited about this role, and based on comparable offers and postings at X to Y for this scope, I was hoping for Z base. Mid-level professionals have the most leverage from live competing processes, so keep two or more loops alive and name the range honestly. Pair the base ask with one secondary trade such as a sign-on bonus or a six-month performance review. Keep the tone collaborative and give a clear path to yes so the hiring manager can take it upstairs for approval.",
  },
  {
    q: "How do managers and directors negotiate differently from individual contributors?",
    a: "Managers negotiate scope and variable pay, not just base: team size, bonus target, equity refresh, and hiring budget all matter as much as salary. Name the leadership outcomes you will deliver in the first two quarters, then tie the ask to that plan. Executives should also negotiate severance, change-of-control terms, and review triggers in writing. Individual contributors should instead weight base salary and equity upside more heavily, since their bonus targets are usually smaller and fixed.",
  },
  {
    q: "How do I negotiate a promotion or internal move to a new level?",
    a: "Anchor on the external market for the new level plus your documented wins, never on your current salary. Bring a one-page case with business results, expanded scope, and peer-level market data, and time the ask to budget cycles when new scope is assigned. If the band cannot move immediately, negotiate title, an early review with written raise criteria, and development investment as bridge compensation. Our promotion guide walks through building that written case step by step.",
  },
  {
    q: "What should I say if my level is ambiguous between two bands?",
    a: "Ask which level they have approved and what separates the two: Could you share what distinguishes the senior versus staff scope here, and which band this offer sits in? If you are doing staff-level work at a senior offer, negotiate the higher title or a written path to it with a timeline and raise attached. Get the level criteria, review date, and compensation change in the offer letter. Ambiguous leveling is common, and clarifying it before signing prevents a year of underpaid scope.",
  },
];

export const metadata: Metadata = {
  title: "Salary Negotiation Scripts by Level: Entry to Executive",
  description:
    "Copy-paste salary negotiation scripts by level: entry, mid, senior, manager & executive lines, counter-offer tactics & leveling tips. Say the right words.",
  alternates: { canonical: "https://career.loanpaylogic.com/salary-negotiation-scripts-by-level" },
  openGraph: {
    type: "article",
    url: "https://career.loanpaylogic.com/salary-negotiation-scripts-by-level",
    title: "Salary Negotiation Scripts by Level: Entry to Executive",
    description:
      "Copy-paste salary negotiation scripts by level: entry, mid, senior, manager & executive lines, counter-offer tactics & leveling tips. Say the right words.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Negotiation Scripts by Level: Entry to Executive",
    description:
      "Copy-paste salary negotiation scripts by level: entry, mid, senior, manager & executive lines, counter-offer tactics & leveling tips. Say the right words.",
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
        title="Salary Negotiation Scripts by Level: Entry to Executive"
        intro="The right salary negotiation script depends on your level: entry-level candidates get one polite ask, senior engineers negotiate equity and scope, and executives negotiate severance and bonus targets. This page gives you copy-paste lines for five levels plus leveling and promotion tactics. Use it with our salary negotiation guide to research your market range first."
        updated="Updated: October 2026"
        sources="Sources: U.S. Bureau of Labor Statistics Occupational Employment & Wage Statistics (May 2025); Occupational Outlook Handbook."
        faqs={faqs}
        related={[
          { href: "/salary-negotiation-guide", label: "Salary Negotiation Guide: Scripts That Raise Pay" },
          { href: "/evaluating-job-offers", label: "Evaluating Job Offers: Total-Package Math" },
          { href: "/negotiating-benefits-guide", label: "Negotiating Benefits Beyond Salary" },
          { href: "/promotion-ask-guide", label: "Promotion Ask Guide: Scripts That Win Raises" },
]}
      >
        <p>
          Generic negotiation advice fails because a new graduate and a director face completely
          different bands, leverage, and risks. Entry-level offers may have only 2 to 5 percent of
          flex on base, while senior and executive offers can swing 20 percent or more once equity,
          bonus, and scope enter the picture. The scripts below match the words to the level so you
          sound informed rather than overreaching or under-asking. Start with the research method in
          our <a href="/salary-negotiation-guide">salary negotiation guide</a> so every line below
          carries a real market number, then pick the section for your level.
        </p>
        <h2>How do you pick the right script for your level?</h2>
        <p>
          Match three variables before choosing lines: band width, leverage type, and risk. Band
          width grows with seniority, so junior scripts stay modest while senior scripts can push
          harder on base and equity. Leverage type also shifts: entry-level candidates rely on
          competing offers and politeness, mid-level candidates on live market proof, and senior
          candidates on scarce expertise and scope. Risk runs the other way, since executives
          negotiate severance and downside protection that juniors never need. Use the table to
          locate yourself, then read only your section plus the closing section.
        </p>
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>What moves most</th>
              <th>Tone of the script</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Entry level (0 to 2 years)</td>
              <td>Sign-on, relocation, review timing</td>
              <td>Grateful, one modest ask</td>
            </tr>
            <tr>
              <td>Mid level (2 to 5 years)</td>
              <td>Base salary, competing offers</td>
              <td>Confident, market-anchored</td>
            </tr>
            <tr>
              <td>Senior / staff IC</td>
              <td>Base, equity, scope and title</td>
              <td>Direct, impact-backed</td>
            </tr>
            <tr>
              <td>Manager / director</td>
              <td>Bonus target, team scope, budget</td>
              <td>Business-case driven</td>
            </tr>
            <tr>
              <td>Executive</td>
              <td>Equity, severance, change of control</td>
              <td>Term-sheet precise, in writing</td>
            </tr>
          </tbody>
        </table>
        <h2>What do entry-level candidates say?</h2>
        <p>
          Your goal is to show professionalism without overplaying a thin hand. Research campus
          salary data and posted bands, then make exactly one supported ask. The highest-value
          entry-level moves are often non-salary: a signing bonus, relocation help, or a six-month
          review with written raise criteria. Keep multiple interview loops alive, because a second
          offer is the strongest lever at this stage, as our{" "}
          <a href="/entry-level-jobs-guide">entry-level jobs guide</a> explains.
        </p>
        <blockquote>
          <p>
            <strong>Scripts:</strong> Opening — “I am really excited about this offer. Based on
            comparable postings at X to Y, would there be flexibility to reach Z base, or
            alternatively a small sign-on to bridge the gap?” Reviewtrade — “If base is fixed, could
            we add a six-month performance review with defined raise criteria in the offer letter?”
            Competing offer — “I have a second offer at X, but I prefer your team; is there any
            room to get closer so I can sign this week?”
          </p>
        </blockquote>
        <p>
          Accept graciously once they move a little or explain the band is truly fixed. Burning
          goodwill over a few hundred dollars at the start of a career is a bad trade. Instead, lock
          the review date in writing and ask what performance would justify the top of the band by
          then. That paper trail becomes your leverage for the first raise cycle.
        </p>
        <h2>What do mid-level professionals say?</h2>
        <p>
          Mid-level bands are wide enough for a real base negotiation, and you likely have live
          market proof from recruiters or competing loops. Lead with enthusiasm, cite two to three
          data points, and name a specific target. One firm counter plus one secondary trade is the
          right cadence; a second round of haggling after they meet you halfway looks unreasonable.
          Price the full package with our <a href="/evaluating-job-offers">offer evaluation
          guide</a> before the call so you know whether base, sign-on, or equity matters most.
        </p>
        <blockquote>
          <p>
            <strong>Scripts:</strong> Counter — “Thank you, I am thrilled about the scope. Based on
            comparable postings at X to Y and a competing process near Z, I was hoping for Z base.
            If you can close that gap, I am ready to sign this week.” Split response — “I appreciate
            you meeting me halfway. Could we settle at Z with the difference in a sign-on, plus the
            six-month review in writing?” Recruiter screen — “For this scope my range is X to Y on
            base depending on total comp; what band have you approved?”
          </p>
        </blockquote>
        <p>
          Mid-level career changers should anchor on the new role's market while proactively
          addressing ramp-up with a 90-day plan borrowed from our{" "}
          <a href="/career-change-guide">career change guide</a>. Offer measurable onboarding
          milestones in exchange for the band you want. Employers pay for de-risked ramp-up, so make
          the plan concrete with dates and deliverables rather than vague promises to learn fast.
        </p>
        <h2>What do senior and staff engineers say?</h2>
        <p>
          At senior and staff levels, you negotiate scope and leveling alongside pay because the
          wrong level costs more than a few thousand dollars of base. Clarify which band the offer
          sits in and what separates it from the next one up. Then anchor the counter on business
          impact: systems owned, revenue influenced, or teams unblocked. Equity matters more here,
          so ask about grant size, vesting schedule, and refresh policy in the same conversation.
        </p>
        <blockquote>
          <p>
            <strong>Scripts:</strong> Leveling — “Could you share what distinguishes senior versus
            staff scope here, and which band this offer sits in? My recent work maps to staff-level
            ownership of X, which is why I am targeting Z.” Equity — “Base at Z works if we can
            increase the equity grant to N shares with a two-year refresh review in writing.”
            Competing offer — “I have a competing staff offer at Z total comp; I prefer your scope,
            and matching base at Z with the staff title lets me sign immediately.”
          </p>
        </blockquote>
        <p>
          If they cannot move on level, negotiate the path: written promotion criteria, a nine- or
          twelve-month level review, and the compensation change attached to it. Get the scope in
          the offer letter, including team, charter, and reporting line. Senior scope without senior
          pay is the most expensive concession in this whole guide, so trade it only for a dated,
          written bridge.
        </p>
        <h2>What do managers and directors say?</h2>
        <p>
          Managers negotiate the job itself: headcount, budget, bonus target, and decision rights.
          A higher base with a shrinking team and no hiring budget is often a worse deal than a flat
          base with real resources. Build a short business case linking your first-two-quarter plan
          to the ask, and negotiate variable pay explicitly since bonus targets move more at these
          levels. Our <a href="/promotion-ask-guide">promotion guide</a> shows how to write the
          one-page impact case that same logic requires.
        </p>
        <blockquote>
          <p>
            <strong>Scripts:</strong> Scope plus pay — “To deliver the Q1 and Q2 outcomes we
            discussed, I need the team at N heads with hiring budget intact; with that scope, Z base
            and a 20 percent bonus target reflect the market for this seat.” Bonus — “If base caps at
            Y, can we set the bonus target at 25 percent with the payout formula in writing?”
            Counter from inside — “External data for this level sits at X to Y plus my documented
            wins this year; aligning base at Z keeps me focused here rather than testing the
            market.”
          </p>
        </blockquote>
        <p>
          Internal manager moves deserve special care: you keep working with everyone in the room,
          so stay collaborative and let market data do the pushing. Time the ask to reorgs and
          budget cycles when scope is being reassigned. If cash is frozen, negotiate title, review
          timing, coaching budget, and conference investment as bridge value, and revisit cash at
          the next cycle with the wins documented.
        </p>
        <h2>What do executives say?</h2>
        <p>
          Executive negotiation is a term sheet, not a phone haggle: base, bonus target and
          guarantee, equity grant plus acceleration, severance multiple, and change-of-control terms
          all belong in writing. Name your walk-away package before talks start, and involve an
          employment attorney before signing anything with non-compete or clawback language. Every
          promise must appear in the signed agreement, because verbal executive assurances
          evaporate with board changes. Value the downside as carefully as the upside.
        </p>
        <blockquote>
          <p>
            <strong>Scripts:</strong> Package — “I am excited to take this on. To accept, I need Z
            base, a 40 percent bonus target with a first-year minimum of N, N shares with
            single-trigger acceleration on X percent, and twelve months of severance in writing.”
            Protection — “Could we add double-trigger acceleration and a definition of good-reason
            resignation covering scope reduction and relocation?” Close — “With those terms in the
            agreement, I will sign and begin the transition plan Monday.”
          </p>
        </blockquote>
        <p>
          Model the equity with scenarios, not hopes: price grants at current 409A or market value,
          apply the vesting schedule, and discount unvested refresh promises to zero until written.
          Confirm bonus history and payout ratios rather than accepting target percentages at face
          value. And clear the background-check and reference stage from our{" "}
          <a href="/background-check-guide">background check guide</a> before resigning anywhere,
          since executive transitions draw the most scrutiny.
        </p>
        <h2>How do you close at any level?</h2>
        <p>
          Every level closes the same way: conditional acceptance that trades certainty for
          movement. State exactly what you will do the moment they meet your terms, then stop
          talking and let them take it upstairs. “If you can reach Z base with the six-month review
          and sign-on in the letter, I will sign today and withdraw my other processes.” That
          sentence works for new graduates and executives alike because it gives the approver a
          guaranteed hire. Get the revised letter, verify every number and date, and check
          non-compete and arbitration clauses as closely as pay lines with help from our{" "}
          <a href="/negotiating-benefits-guide">benefits negotiation guide</a>.
        </p>
      </ArticleShell>
    </>
  );
}
