import type { Metadata } from "next";
import { ArticleShell, type Faq } from "../components/article";
import { ESCAPED_LT, faqJsonLd } from "../lib/site";

const faqs: Faq[] = [
  {
    q: "How should I prepare for a job interview in two weeks?",
    a: "Split preparation into research, stories, practice, and logistics across the fortnight. Week one covers company research, drafting six to eight STAR stories, and preparing answers to the ten most common questions. Week two is daily out-loud practice, two mock interviews, question lists for each interviewer, and logistics like outfit, route, and technology checks. Record yourself at least twice, since playback reveals filler words and rambling that silent rehearsal hides. Finish the night before with a one-page cheat sheet of stories, numbers, and questions rather than cramming new material.",
  },
  {
    q: "What should I research about a company before an interview?",
    a: "Study their products, customers, revenue model, recent news, competitors, and the specific team's work, plus your interviewers' backgrounds on LinkedIn. Read the last two press releases, one earnings summary or funding announcement, and three employee reviews to understand culture pain points. Prepare one observation per interviewer that shows genuine homework without flattery. This research feeds directly into your why-this-company answer and your questions for them, which interviewers consistently rank among the most memorable parts of a loop.",
  },
  {
    q: "How do I calm my nerves before a job interview?",
    a: "Channel adrenaline with preparation and physiology: rehearse out loud until answers feel conversational, exercise the morning of the interview, and use slow breathing with longer exhales to lower your heart rate. Arrive or log in ten minutes early so technology and navigation stress cannot compound performance anxiety. Reframe the interview as a mutual evaluation rather than an interrogation, which research on reappraisal shows improves performance. Keep a glass of water nearby, pause before answering hard questions, and remember that interviewers expect some nervousness and discount for it.",
  },
  {
    q: "What should I bring to an in-person interview?",
    a: "Bring three printed resume copies, a notepad with prepared questions, a pen, photo ID, breath mints, and a phone charger, all in a simple bag or portfolio. Verify the address, parking, check-in procedure, and interviewer names the day before, and plan to arrive fifteen minutes early. Dress one level above the company's daily norm, erring formal when unsure. For virtual interviews, test camera, microphone, lighting, and backup internet the night before, and keep your phone hotspot ready as a fallback.",
  },
  {
    q: "How do I follow up after preparing but hearing nothing?",
    a: "Send a thank-you email within 24 hours of each interview round, then one polite check-in if the stated decision timeline passes by three or more business days. Keep follow-ups to two total before moving on mentally while continuing your search. Each message should add mild value, such as referencing a topic discussed or attaching a work sample you mentioned. Our thank-you email guide provides exact templates, and silence after final rounds deserves one gracious closing note that keeps the door open for future roles.",
  },
];

export const metadata: Metadata = {
  title: "Job Interview Prep Guide: Two-Week Plan That Works",
  description:
    "Job interview prep guide: deep company research, STAR story bank, mock drills & day-of checklists. Walk in confident and convert offers — start now.",
  alternates: { canonical: "https://career.loanpaylogic.com/job-interview-prep-guide" },
  openGraph: {
    type: "article",
    url: "https://career.loanpaylogic.com/job-interview-prep-guide",
    title: "Job Interview Prep Guide: Two-Week Plan That Works",
    description:
      "Job interview prep guide: deep company research, STAR story bank, mock drills & day-of checklists. Walk in confident and convert offers — start now.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Interview Prep Guide: Two-Week Plan That Works",
    description:
      "Job interview prep guide: deep company research, STAR story bank, mock drills & day-of checklists. Walk in confident and convert offers — start now.",
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
        kicker="Interviews"
        title="Job Interview Prep Guide: Two-Week Plan That Works"
        intro="This job interview prep guide turns two weeks into a confident performance through research, story banking, deliberate practice, and logistics. Interviews reward the prepared far more than the naturally gifted, because most questions are predictable and most evaluation criteria are published in the job posting. Follow the day-by-day plan below alongside our common interview questions guide."
        updated="Updated: October 2026"
        sources="Sources: U.S. Department of Labor CareerOneStop interview guidance; U.S. Bureau of Labor Statistics Occupational Outlook Handbook."
        faqs={faqs}
        related={[
          { href: "/common-interview-questions", label: "Common Interview Questions & Answers" },
          { href: "/star-method-guide", label: "STAR Method Guide: Answer Behavioral Questions" },
          { href: "/thank-you-email-after-interview", label: "Thank-You Email After Interview Scripts" },
        ]}
      >
        <p>
          Interview success is mostly manufactured before you enter the room. Hiring managers
          consistently report that the strongest candidates share three traits: they researched the
          business, they answered behavior questions with specific stories, and they asked sharp
          questions. None of those require talent; all of them require a plan. This job interview
          prep guide gives you that plan across fourteen days, and it connects directly to your{" "}
          <a href="/common-interview-questions">question bank</a>, your{" "}
          <a href="/star-method-guide">STAR stories</a>, and your{" "}
          <a href="/thank-you-email-after-interview">follow-up emails</a>.
        </p>
        <h2>How do you decode the job posting first?</h2>
        <p>
          Before researching anything else, dissect the posting into a requirements map. Highlight
          every must-have skill, preferred qualification, and responsibility, then score yourself
          honestly against each one. Your preparation time should flow toward the gaps: if they
          demand stakeholder presentations and yours are rusty, that topic gets extra rehearsal.
          Note the exact vocabulary the posting uses, because mirroring their terms in answers
          signals fit to both HR screeners and hiring managers. Save the posting as a PDF on day
          one, since listings often vanish after you apply.
        </p>
        <p>
          Translate the posting into likely questions by asking what problem each requirement
          solves. A line about “scaling support processes” predicts “tell me about a time you
          improved a broken process,” while “partner with engineering” predicts conflict and
          collaboration questions. Write ten predicted questions in a document and draft bullet
          answers for each before week two. This single exercise eliminates most interview
          surprises, because interviewers who wrote the posting usually interview straight from it.
        </p>
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Days</th>
              <th>Main outputs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Decode + research</td>
              <td>1–4</td>
              <td>Requirements map, company dossier, interviewer notes</td>
            </tr>
            <tr>
              <td>Stories + answers</td>
              <td>5–8</td>
              <td>6–8 STAR stories, 10 Q&amp;A drafts, questions for them</td>
            </tr>
            <tr>
              <td>Practice + mocks</td>
              <td>9–12</td>
              <td>Recordings, 2 mock interviews, refined open and close</td>
            </tr>
            <tr>
              <td>Logistics + rest</td>
              <td>13–14</td>
              <td>Outfit, route/tech check, one-page cheat sheet, sleep</td>
            </tr>
          </tbody>
        </table>
        <h2>What company research actually impresses interviewers?</h2>
        <p>
          Go four layers deep: business model, customers, momentum, and people. Learn how the
          company makes money, who buys, what its flagship products do, and who competes with it.
          Read the latest press releases, funding news, or earnings highlights, plus the careers
          page language about values, which interviewers often quote back as evaluation criteria.
          Skim employee reviews for recurring themes like pace, management quality, or growth
          paths, treating individual rants skeptically while trusting repeated patterns.
        </p>
        <p>
          Research each interviewer on LinkedIn for shared ground: same university, previous
          employer, published posts, or team projects you can reference naturally. Prepare one
          genuine observation per person, such as a question about the migration their team
          announced last quarter. This homework powers two high-impact moments: your “why this
          company” answer and your closing questions. Candidates who cite specific company facts
          are consistently rated as more motivated than those speaking in generalities.
        </p>
        <h2>How do you build a story bank that covers everything?</h2>
        <p>
          Draft six to eight STAR stories spanning the universal themes: a big win, a failure and
          lesson, a conflict resolved, leading without authority, working under a deadline, dealing
          with ambiguity, learning something fast, and helping a colleague or customer. Each story
          needs a one-line headline, a two-minute version with numbers, and a thirty-second version
          for rapid-fire rounds. Write them out fully once, then convert to bullet triggers so you
          speak naturally instead of reciting paragraphs.
        </p>
        <blockquote>
          <p>
            <strong>Template:</strong> “Headline: Cut refund backlog 60%. Situation: 400 unprocessed
            refunds after a system migration. Task: Clear them in 2 weeks without new hires.
            Action: Built a triage queue, paired agents, ran daily 15-min reviews. Result: Cleared
            in 9 days, CSAT held at 94%, process adopted permanently.”
          </p>
        </blockquote>
        <p>
          Map each story to multiple questions so eight stories cover thirty prompts; your failure
          story also answers weakness, feedback, and growth questions. Quantify every result with
          the same discipline as your <a href="/resume-writing-guide">resume bullets</a>, and keep
          all numbers consistent with what you already submitted. Rehearse transitions that bridge
          from any question to your best story without sounding evasive. Our dedicated{" "}
          <a href="/star-method-guide">STAR method guide</a> expands this system with annotated
          examples.
        </p>
        <h2>How should you practice out loud?</h2>
        <p>
          Silent rehearsal creates false confidence because interviews are spoken performances.
          Starting day nine, answer every predicted question out loud, standing or sitting as you
          will in the real meeting, with a timer visible. Record at least two full sessions on
          your phone and review them for filler words, answer length, and energy; most candidates
          discover they ramble past the two-minute mark and understate results. Practice the first
          ninety seconds hardest, since “tell me about yourself” sets the tone for everything
          after.
        </p>
        <p>
          Arrange two mock interviews with a friend, mentor, or career center, giving them your
          question list and asking for blunt scoring on clarity, specificity, and warmth.
          CareerOneStop (<a href="https://www.careeronestop.org">careeronestop.org</a>) and many public libraries offer free mock-interview
          resources worth using. Between mocks, drill weak answers three times in a row using
          slightly different words each time so the story stays flexible. End each practice day by
          updating your one-page cheat sheet of story headlines, key numbers, and questions for
          them rather than scripting full sentences you would sound robotic delivering.
        </p>
        <h2>What questions should you ask the interviewer?</h2>
        <p>
          Prepare eight to ten questions and rank them, since you will typically get to ask two or
          three per interviewer. The strongest questions reveal the job's reality: what success
          looks like in ninety days, the hardest part of the role, how the team handles
          disagreement, why the position is open, and how performance gets measured. Role-specific
          questions referencing your research (“your team just migrated to a new WMS; how did that
          change daily priorities?”) signal genuine interest that generic questions cannot match.
        </p>
        <p>
          Avoid questions about salary, benefits, hours, or time off in early rounds; those belong
          in the offer stage covered by our <a href="/evaluating-job-offers">evaluating job
          offers</a> and <a href="/negotiating-benefits-guide">negotiating benefits</a> guides.
          Never ask anything the website answers in one click, and never say you have no questions,
          which interviewers read as disinterest. Close with a momentum question like “What are the
          next steps, and is there anything about my background I can clarify?” That final line
          surfaces hidden concerns while you can still address them.
        </p>
        <h2>How do you handle interview day logistics?</h2>
        <p>
          Logistics failures are the most preventable reason good candidates underperform. For
          in-person interviews, verify the address, parking, building check-in, and interviewer
          names the day before, lay out your outfit, print three resumes, and plan arrival fifteen
          minutes early with a buffer for traffic. Dress one level above the company's daily norm;
          when uncertain, lean formal, since nobody ever lost an offer for being slightly
          overdressed. Eat a real meal, hydrate, and bring mints, ID, notepad, and a charger.
        </p>
        <p>
          For virtual interviews, test camera, microphone, lighting, and internet the night before
          on the actual platform the employer uses, and keep a phone hotspot ready as backup. Frame
          yourself chest-up against a neutral background with light facing you, close competing
          applications, and silence notifications. Keep your cheat sheet, resume, and the job
          posting open off-camera for quick glances, plus water nearby. Log in ten minutes early,
          smile when the video connects, and confirm you are audible before launching into
          introductions.
        </p>
        <h2>How do you close strong and follow up?</h2>
        <p>
          End every interview by restating fit in two sentences tied to something you learned in
          the conversation: “Hearing that the team is rebuilding onboarding confirms this is the
          right match; that is exactly the work I did at Meridian, where I cut ramp time by half.”
          Ask about timeline and next steps explicitly so your follow-up has a deadline to
          reference. Within twenty-four hours, send personalized thank-you emails to each
          interviewer using the templates in our{" "}
          <a href="/thank-you-email-after-interview">thank-you email guide</a>, referencing one
          specific discussion point per person.
        </p>
        <p>
          After following up, debrief yourself in writing while memory is fresh: which answers
          landed, which stumbled, what surprised you, and how you feel about the role. This
          journal compounds across interviews and steadily raises your close rate. If the stated
          timeline passes, send one polite check-in, then continue your pipeline without pausing;
          the best negotiating position in our <a href="/salary-negotiation-guide">salary
          negotiation guide</a> comes from multiple live options. And verify any offer's duties and
          pay against the Bureau of Labor Statistics Handbook (<a href="https://www.bls.gov/ooh">bls.gov/ooh</a>) so your expectations
          stay anchored to published occupation data.
        </p>
      </ArticleShell>
    </>
  );
}
