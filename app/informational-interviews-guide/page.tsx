import type { Metadata } from "next";
import { ArticleShell, type Faq } from "../components/article";
import { ESCAPED_LT, faqJsonLd } from "../lib/site";

const faqs: Faq[] = [
  {
    q: "How do I ask for an informational interview?",
    a: "Send a three-line request: who you are in one phrase, why them specifically in one sentence, and a 15 to 20 minute ask with two proposed times. Reference something real like their career path, project, or post to prove targeted interest. Ask for perspective, never a job, since advice requests get answered while job requests get deleted. Follow up once after a week with added value, then move on gracefully if silence persists.",
  },
  {
    q: "What questions should I ask in an informational interview?",
    a: "Ask about their day-to-day reality, the skills that actually matter, how they entered the field, what they would do differently, and what proof would make them hire someone like you. Avoid anything Google answers in one click, questions about salary in a first chat, and anything that sounds like an interview for an open role. Prepare eight questions for a twenty-minute call, expect to cover five, and let their most interesting answer steer follow-ups. End by asking who else you should speak with.",
  },
  {
    q: "How do informational interviews lead to jobs?",
    a: "They convert through demonstrated seriousness across multiple touches: you ask smart questions, act visibly on the advice, report back results, and only then mention target roles. Advisors who watched you execute become advocates who refer with conviction. Many positions surface in these conversations before posting, and internal advocates can flag your application when they appear. Expect roughly one opportunity per ten genuine advisory relationships over several months of consistent practice.",
  },
  {
    q: "Are informational interviews still worth it in 2026?",
    a: "More than ever, because remote hiring and automated screening made warm introductions the scarcest and most valuable channel. Fifteen focused conversations teach more about a field than weeks of online research and reveal the unwritten requirements postings omit. The practice compounds: each interview sharpens your questions, vocabulary, and story for the next. Combined with tailored applications, informational interviewing remains the highest-ROI activity in most job searches.",
  },
  {
    q: "What mistakes ruin informational interviews?",
    a: "The fatal errors are asking for a job outright, arriving without research, running over time, never following up, and arguing with advice. Treat the meeting as a gift of scarce time: confirm promptly, prepare questions, take notes, end early, and send a thank-you quoting one specific insight within hours. Act on at least one suggestion and report back, since advisors invest further in people who execute. One thoughtless interaction can close a door that took weeks to open.",
  },
];

export const metadata: Metadata = {
  title: "Informational Interviews Guide: Scripts That Work",
  description:
    "Informational interviews guide: warm outreach scripts, smart questions & follow-up systems that work. Turn chats into referrals — learn the full how.",
  alternates: { canonical: "https://career.loanpaylogic.com/informational-interviews-guide" },
  openGraph: {
    type: "article",
    url: "https://career.loanpaylogic.com/informational-interviews-guide",
    title: "Informational Interviews Guide: Scripts That Work",
    description:
      "Informational interviews guide: warm outreach scripts, smart questions & follow-up systems that work. Turn chats into referrals — learn the full how.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Informational Interviews Guide: Scripts That Work",
    description:
      "Informational interviews guide: warm outreach scripts, smart questions & follow-up systems that work. Turn chats into referrals — learn the full how.",
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
        kicker="Job Search Strategy"
        title="Informational Interviews Guide: Scripts That Work"
        intro="This informational interviews guide gives you outreach scripts, question lists, and follow-up systems that turn twenty-minute chats into referrals. An informational interview is a low-pressure learning conversation with someone doing work you want, and it is the highest-trust channel in modern job searching. Run the playbook below with our networking and LinkedIn guides."
        updated="Updated: October 2026"
        sources="Sources: U.S. Department of Labor CareerOneStop; LinkedIn Talent Solutions networking research."
        faqs={faqs}
        related={[
          { href: "/professional-networking-guide", label: "Professional Networking Guide That Works" },
          { href: "/linkedin-profile-guide", label: "LinkedIn Profile Guide for Job Seekers" },
          { href: "/career-change-guide", label: "Career Change Guide: Pivot Without Starting Over" },
        ]}
      >
        <p>
          The informational interview works because it reverses the usual power dynamic: instead
          of begging for a job, you are asking a practitioner to talk about their favorite
          subject, their own work. Successful people say yes to focused, respectful requests at
          surprisingly high rates, especially from alumni, students, and career changers with
          genuine curiosity. This informational interviews guide covers targeting, outreach,
          questions, execution, and the multi-touch follow-up that converts advice into advocacy.
          Pair it with your <a href="/professional-networking-guide">networking system</a> and{" "}
          <a href="/linkedin-profile-guide">LinkedIn presence</a>.
        </p>
        <h2>Who should you request informational interviews from?</h2>
        <p>
          Target practitioners two to five years ahead of you on a path you might take: close
          enough to remember the entry steps, senior enough to describe what excellence looks
          like. Prioritize alumni, second-degree connections, and authors of work you genuinely
          admire, since shared context and demonstrated attention raise acceptance rates. Build a
          list of thirty prospects to yield ten conversations, mixing target-company insiders with
          field veterans elsewhere for balanced perspective. Include one or two senior leaders for
          trajectory insight, but weight the list toward people whose current role matches your
          next step.
        </p>
        <p>
          Research each prospect for five minutes before outreach: current role and team, career
          path, recent posts or projects, and one specific thing you want to learn from them
          uniquely. This research both personalizes the request and prevents wasting their time on
          basics. For career changers, split targets between the new field and hybrid veterans
          who crossed over, following the targeting in our <a href="/career-change-guide">career
          change guide</a>. Log every prospect with source, date, and status in the same tracker
          as your broader search.
        </p>
        <table>
          <thead>
            <tr>
              <th>Stage</th>
              <th>Action</th>
              <th>Target metric</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Targeting</td>
              <td>List 30 prospects, research top 10</td>
              <td>10 requests sent per week</td>
            </tr>
            <tr>
              <td>Outreach</td>
              <td>3-line note + one follow-up</td>
              <td>30% conversation rate</td>
            </tr>
            <tr>
              <td>Conversation</td>
              <td>20 minutes, 5 questions, notes</td>
              <td>2 referrals onward per chat</td>
            </tr>
            <tr>
              <td>Follow-up</td>
              <td>Thank-you + action report in 2 weeks</td>
              <td>50% become ongoing contacts</td>
            </tr>
          </tbody>
        </table>
        <h2>How do you write outreach that gets yeses?</h2>
        <p>
          Winning outreach is short, specific, and easy to accept. State who you are in a phrase,
          name exactly why you chose them in a sentence, and request fifteen to twenty minutes
          with two proposed times plus a phone or video option. Mention any shared connection in
          the first line, since warm context doubles response rates. Never attach your resume
          uninvited and never mention open roles at their company; both reframe a learning
          conversation as a transaction and trigger defenses.
        </p>
        <blockquote>
          <p>
            <strong>Template:</strong> “Hi Daniel — I'm a bootcamp grad building data dashboards,
            and your transition from accounting to analytics is exactly the path I'm on. Could I
            ask three quick questions in a 15-minute call next Wed or Fri morning? I'll keep it
            tight and work around your schedule. Thank you, Sam.”
          </p>
        </blockquote>
        <p>
          Time your sends for Tuesday through Thursday mornings in the recipient's zone, and keep
          subject lines plain and honest like “Quick advice request from a fellow State alum.”
          Follow up once after six days adding a relevant article or congratulating a visible win,
          which restarts the thread with generosity rather than pressure. Track response patterns
          to refine targeting: low replies mean broader or warmer prospects, while high replies
          with low depth mean sharper questions are needed.
        </p>
        <h2>What are the best questions to ask?</h2>
        <p>
          Organize questions into four arcs: their story, the work's reality, entry advice, and
          your positioning. Story questions like “What pulled you into this field, and what would
          you do differently?” build rapport and reveal non-obvious paths. Reality questions like
          “What does a genuinely hard week look like?” and “Which skills separate good from great
          here?” expose the truths postings hide. Entry questions like “What proof would make you
          hire someone with my background?” hand you a personalized building plan.
        </p>
        <p>
          Positioning questions come last and stay indirect: “Who else should I speak with to
          understand X?” generates the referral chain that compounds your network, while “May I
          send you my project for a two-minute reaction next week?” creates a natural second
          touch. Prepare eight questions, prioritize five, and abandon the list when a fascinating
          answer deserves excavation; conversational curiosity impresses more than checklist
          completion. Never ask about salary bands, internal politics, or anything implying you
          are secretly interviewing for their team's opening.
        </p>
        <h2>How do you run the conversation itself?</h2>
        <p>
          Confirm the day before with a one-line note restating the time and format, then join
          two minutes early with questions printed and notes ready. Open with genuine thanks and a
          thirty-second self-introduction ending in what you hope to learn, which focuses the
          whole call. Listen more than you talk, take visible notes, and ask one level deeper on
          their most energetic answers rather than rushing through your list. Watch the clock
          yourself and offer to wrap at eighteen minutes; being the guest who returns time is
          memorable.
        </p>
        <p>
          Close with three moves: summarize one takeaway to prove you listened, ask for two more
          people to speak with, and ask permission for one follow-up after you act on their
          advice. Thank them by name for the specific most valuable insight, not generic time.
          Within three hours send a thank-you message quoting that insight and stating one action
          you will take; this note separates you from the majority who never follow up. Log the
          conversation same-day with insights, referrals, and promised actions while memory is
          vivid.
        </p>
        <h2>How does follow-up convert advice into referrals?</h2>
        <p>
          The conversion sequence spans weeks: thank-you within hours, action report within two
          weeks showing what you built from their advice, and only then a soft mention of target
          roles with an easy referral path. Advisors who watched you execute advocate with
          specifics (“she rebuilt her dashboard on my feedback”) that hiring managers trust.
          Share wins generously, credit advisors publicly where appropriate, and keep quarterly
          touch rhythms so relationships survive beyond your search.
        </p>
        <p>
          When a fitting role appears at their company, write with the full referral kit: your
          tailored <a href="/resume-writing-guide">resume</a>, the requisition link, a two-line
          summary of fit, and confirmation you applied officially. Accept “not comfortable”
          gracefully; pushing burns the relationship and the referrer's network hears about it.
          Maintain every advisory relationship with useful touches after hiring, since today's
          advisors become tomorrow's collaborators, clients, or <a href="/references-guide">
          references</a>. CareerOneStop (<a href="https://www.careeronestop.org">careeronestop.org</a>) offers additional mentor-search
          resources worth combining with this system.
        </p>
        <h2>How do you scale from ten chats to a network asset?</h2>
        <p>
          Individual conversations compound into a durable asset only with systems: a tracker
          recording insights, referrals, and promised follow-ups; a quarterly touch rhythm sharing
          useful items with every advisor; and a personal knowledge base of field wisdom that
          sharpens your positioning over time. After ten conversations, patterns emerge about
          which skills, credentials, and proof actually drive hiring; redirect your building
          efforts toward the consensus rather than outlier advice. Publish anonymized learnings
          as content following our <a href="/personal-branding-basics">branding basics</a>, which
          attracts the next twenty advisors inbound. Introduce advisors to each other where
          mutually useful, becoming a connector whose network grows through generosity.
        </p>
        <p>
          Measure the asset honestly: conversations held, advisors actively following your
          progress, referrals generated, and opportunities sourced. When metrics stall, refresh
          targeting toward adjacent roles or warmer introductions rather than grinding colder
          outreach. Maintain the asset after hiring with the same quarterly rhythm, since
          employed generosity funds the next transition years before it is needed. Combine this
          compounding network with tailored applications from your{" "}
          <a href="/resume-writing-guide">resume system</a> and sharp interviewing from the{" "}
          <a href="/job-interview-prep-guide">prep plan</a>, and each career move gets faster,
          warmer, and better compensated than the last.
        </p>
      </ArticleShell>
    </>
  );
}
