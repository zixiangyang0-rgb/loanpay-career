import type { Metadata } from "next";
import { ArticleShell, type Faq } from "../components/article";
import { ESCAPED_LT, faqJsonLd } from "../lib/site";

const faqs: Faq[] = [
  {
    q: "How do I prepare for my annual performance review?",
    a: "Compile a year-long wins log with quantified outcomes, gather peer and stakeholder quotes, map results to your goals and level criteria, and draft a self-assessment in STAR format. Prepare a one-page brief your manager can reference while writing ratings and calibration notes. List growth areas honestly with systems you built to improve. Rehearse a 5-minute verbal summary plus questions about next-level scope, since the review meeting shapes promotions and raises.",
  },
  {
    q: "What should I say in a performance review meeting?",
    a: "Lead with your three biggest impact stories tied to team goals, acknowledge one genuine growth area with your improvement plan, and ask explicitly about promotion criteria and next-level opportunities. Listen to feedback without defensiveness, taking notes and asking clarifying questions. Discuss compensation only after establishing the performance record, using market data. Close by confirming goals and check-in cadence for the coming period in writing.",
  },
  {
    q: "How do I handle a bad performance review?",
    a: "Stay calm, listen fully, and separate valid signal from noise by asking for specific examples behind every rating. Request a written improvement plan with measurable milestones and support resources rather than vague warnings. Document your perspective factually in the response section without emotional language. Then execute the plan visibly while quietly assessing whether the situation is recoverable or your energy belongs in an external search.",
  },
  {
    q: "How do performance reviews affect raises and promotions?",
    a: "Ratings feed directly into merit-increase budgets and promotion slates through calibration sessions where managers compare reports. Top ratings typically unlock 5 percent plus increases and promotion eligibility, while middle ratings yield standard 2 to 4 percent adjustments. Documented exceeds ratings across two cycles form the standard promotion case at most firms. Understanding this machinery is why review prep deserves the same effort as interview prep.",
  },
  {
    q: "Should I keep track of wins year-round?",
    a: "Absolutely; memory decays within weeks and recency bias otherwise lets December heroics outweigh February excellence or vice versa. Spend ten minutes every Friday logging outcomes, numbers, thanks received, and skills learned. The log powers reviews, promotion cases, resume updates, and interview stories simultaneously. Professionals who track impact quarterly never scramble before reviews and negotiate from evidence rather than adjectives.",
  },
];

export const metadata: Metadata = {
  title: "Performance Review Prep: Prove Impact & Win",
  description:
    "Performance review prep: year-round wins logs, powerful self-reviews & meeting scripts that persuade. Win raises and promotions — prepare like a pro now.",
  alternates: { canonical: "https://career.loanpaylogic.com/performance-review-prep" },
  openGraph: {
    type: "article",
    url: "https://career.loanpaylogic.com/performance-review-prep",
    title: "Performance Review Prep: Prove Impact & Win",
    description:
      "Performance review prep: year-round wins logs, powerful self-reviews & meeting scripts that persuade. Win raises and promotions — prepare like a pro now.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Review Prep: Prove Impact & Win",
    description:
      "Performance review prep: year-round wins logs, powerful self-reviews & meeting scripts that persuade. Win raises and promotions — prepare like a pro now.",
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
        kicker="Growth & Exit"
        title="Performance Review Prep: Prove Impact & Win"
        intro="This performance review prep guide turns annual anxiety into advancement through year-round evidence and meeting strategy. Reviews drive ratings, raises, and promotion slates through calibration sessions where documented impact beats vague diligence. Build your case with the wins system below plus our promotion and salary guides."
        updated="Updated: October 2026"
        sources="Sources: SHRM public resources on performance management; U.S. Bureau of Labor Statistics wage data."
        faqs={faqs}
        related={[
          { href: "/promotion-ask-guide", label: "Promotion Ask Guide: Scripts That Work" },
          { href: "/star-method-guide", label: "STAR Method Guide: Answer Behavioral Questions" },
          { href: "/salary-negotiation-guide", label: "Salary Negotiation Guide: Scripts & Ranges" },
        ]}
      >
        <p>
          Performance reviews feel like judgment day because for compensation they partly are:
          ratings set merit increases and gate promotion discussions in calibration meetings you
          never attend. The professionals who thrive treat reviews as year-long campaigns of
          visible impact plus a well-argued meeting, not a form filled in November. This
          performance review prep guide builds your evidence system, self-assessment, meeting
          playbook, and recovery plan. Connect it to your <a href="/promotion-ask-guide">promotion
          case</a> and <a href="/salary-negotiation-guide">raise math</a>.
        </p>
        <h2>How do you track wins all year?</h2>
        <p>
          Run a Friday ten-minute log capturing outcomes with numbers, stakeholder thanks,
          problems solved, and skills gained; memory of February heroics will not survive until
          December without it. Organize entries by your goals and level criteria so the review
          assembles itself. Save screenshots of praise, metrics dashboards, and launch
          announcements in one folder, since concrete artifacts beat recalled adjectives in
          calibration. Quantify relentlessly using the same action-plus-result discipline as your{" "}
          <a href="/resume-writing-guide">resume bullets</a>.
        </p>
        <p>
          Supplement the log with quarterly self-checks against goals, adjusting scope with your
          manager in writing when priorities shift; agreed goal changes protect ratings when the
          business pivots mid-year. Solicit feedback mid-cycle rather than discovering surprises
          at year-end, asking specifically what would make the second half exceptional. Remote
          workers must log visibly in shared channels, since out-of-sight work gets
          out-of-mind ratings. This system also feeds <a href="/job-interview-prep-guide">
          interview stories</a> whenever you next search.
        </p>
        <table>
          <thead>
            <tr>
              <th>Quarter</th>
              <th>Capture habit</th>
              <th>Campaign move</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>Baseline goals in writing</td>
              <td>Agree success metrics with manager</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>Friday log + praise folder</td>
              <td>Mid-cycle feedback conversation</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>Peer quote collection</td>
              <td>Volunteer for visible stretch work</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>Brief assembly + rehearsal</td>
              <td>Review meeting + written follow-up</td>
            </tr>
          </tbody>
        </table>
        <h2>How do you write a self-assessment that scores?</h2>
        <p>
          Structure self-assessments as impact narratives mapped to each goal and competency,
          leading every section with the headline result. Use STAR compression: context in one
          line, your actions in two, quantified outcome to close. Rate yourself honestly at the
          top end of defensible; excessive modesty gets recorded literally while evidence-backed
          confidence calibrates well. Name one genuine growth area with the system you built to
          improve it, since self-awareness raises rather than lowers senior assessors' trust.
        </p>
        <blockquote>
          <p>
            <strong>Template:</strong> “Goal: cut onboarding ramp time. Result: rebuilt checklist
            and buddy system, cutting median ramp from 21 to 9 days across 4 offices (measured
            Mar–Sep). Growth edge: delegating sooner — now using a 70%-ready rule with Friday
            check-ins, which freed 5 hrs/week for the analytics migration.”
          </p>
        </blockquote>
        <p>
          Attach the one-page evidence brief with three headline wins, metrics table, and peer
          quotes so your manager can lift language directly into their write-up; managers
          juggling ten reports reuse what you provide. Keep the full log as backup for disputed
          ratings. Submit early enough that your manager actually reads it before calibration
          drafts, asking explicitly when their input deadline falls.
        </p>
        <h2>How do you run the review meeting?</h2>
        <p>
          Open by aligning on purpose and inviting candor, then deliver a five-minute impact
          summary tied to team goals rather than reading the whole form aloud. Receive feedback
          with notes and clarifying questions, resisting every urge to rebut in real time;
          defensiveness is the fastest way to downgrade a good review. Probe vague criticism for
          examples and future expectations, converting adjectives into actionable standards.
          Discuss growth and next-level scope explicitly, since this meeting sets the promotion
          conversation for the coming cycle.
        </p>
        <p>
          Address compensation after the performance record is established, anchoring on market
          data from BLS sources and your documented rating using our{" "}
          <a href="/salary-negotiation-guide">negotiation scripts</a>. If ratings disappoint,
          pivot to the improvement contract: specific milestones, resources, and check-in dates
          in writing. Confirm goals, success metrics, and meeting cadence for the next period by
          email within days. Thank your manager for specifics worth acting on; gracious
          receipt of hard feedback is itself a promotable signal.
        </p>
        <h2>How do you recover from a poor review?</h2>
        <p>
          Triage within a week: separate fair signal from noise, request the written improvement
          plan with measurable milestones, and secure the support you need such as training,
          mentorship, or scope adjustment. Execute visibly with weekly written updates proving
          momentum, since documented trajectory changes minds faster than promises. Use the
          response section factually to correct genuine errors without emotional language,
          keeping copies of everything. Simultaneously assess recoverability honestly;
          irreparable trust breaks or misaligned values mean your energy belongs in a search
          run through our <a href="/job-interview-prep-guide">interview system</a>.
        </p>
        <p>
          Protect yourself administratively by understanding PIP mechanics, timelines, and appeal
          options in your handbook before signing anything. Continue performing core duties
          excellently while improving flagged areas, since current output funds your options
          either way. Consult employment counsel for anything touching discrimination,
          retaliation, or disability accommodation per our <a href="/disclaimer">disclaimer</a>.
          Many professionals later rank a tough review among their most useful career events,
          provided they extracted its lessons systematically. Benchmark your role's pay and
          progression norms in the <a href="https://www.bls.gov/ooh">BLS Occupational Outlook
          Handbook</a> so review conversations stay anchored to public occupation data.
        </p>
        <h2>How do calibration sessions really decide ratings?</h2>
        <p>
          Behind closed doors, managers gather to normalize ratings across teams so budgets and
          promotion slates stay consistent, and this is where undocumented good work dies. Your
          manager advocates for you with limited time against peers advocating for their own
          reports, which means crisp, quantified, business-tied narratives win while vague praise
          loses. Ratings often follow forced distributions or guided curves, so being good is not
          enough; you must be memorably, comparatively excellent on dimensions leadership values
          that year. Feed your manager ammunition quarterly: headline metrics, stakeholder quotes,
          and business outcomes phrased in language they can repeat verbatim when challenged by
          skip-levels defending other candidates.
        </p>
        <p>
          Understand the politics without becoming cynical: managers spend capital on reports who
          make them look good consistently, take visible hard problems, and help peers succeed.
          Cross-functional endorsements carry outsized weight because they prove impact beyond
          your manager's biased sample, so collect them deliberately through the collaboration
          habits in our <a href="/professional-networking-guide">networking guide</a>. If your
          manager is new, weak, or distracted, your written brief matters doubly since they will
          read it nearly verbatim in the room. After calibration, ask your manager directly how
          the discussion went and what would strengthen next year's case; that debrief is the
          highest-value feedback of the entire cycle.
        </p>
        <h2>How do you set goals that make next year easy?</h2>
        <p>
          Great review years are designed in January, not discovered in December: negotiate goals
          that are measurable, business-critical, and visibly owned by you. Insist on written
          success metrics with numbers and dates for every major goal, and confirm relative
          weighting so effort flows to what ratings actually reward. Build one stretch goal with
          genuine visibility beyond your team, since cross-functional wins dominate calibration
          narratives. Revisit goals mid-year in writing when priorities shift, getting explicit
          agreement that changed targets replace old ones rather than stacking atop them.
        </p>
        <p>
          Connect personal goals to the company's stated annual priorities using leadership's own
          vocabulary, which makes your achievements legible to executives who never see your daily
          work. Keep a living document linking each goal to evidence as it accumulates, so the
          self-assessment assembles itself from a year of proof. End the year by proposing next
          year's goals before being assigned them, framing expanded scope that justifies the{" "}
          <a href="/promotion-ask-guide">promotion case</a> you are building. Professionals who
          run this annual loop with <a href="/star-method-guide">STAR-documented</a> wins turn
          reviews from anxious lotteries into scheduled advancements.
        </p>
      </ArticleShell>
    </>
  );
}
