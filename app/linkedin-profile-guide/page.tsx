import type { Metadata } from "next";
import { ArticleShell, type Faq } from "../components/article";
import { ESCAPED_LT, faqJsonLd } from "../lib/site";

const faqs: Faq[] = [
  {
    q: "How do I optimize my LinkedIn profile to get found by recruiters?",
    a: "Treat your headline and About section as search-optimized ad copy built from the exact job titles and skills recruiters type into LinkedIn Recruiter. Use all 220 headline characters with role plus specialties plus proof, turn on Open to Work visible to recruiters, and list every relevant skill so endorsements accumulate. Profiles with photos receive dramatically more views, and adding your city increases appearance in location-filtered searches. Complete every section because LinkedIn's own data shows complete profiles get far more search appearances than skeletal ones.",
  },
  {
    q: "What should I write in my LinkedIn headline if I am unemployed?",
    a: "State the role you are targeting plus your strongest proof, such as Operations Analyst | SQL + Tableau | Cut reporting time 40% at a 200-person SaaS firm. Never write Unemployed, Seeking Opportunities, or Actively looking as your whole headline, because those phrases waste searchable characters and frame you negatively. Recruiters search by skills and titles, not by availability status. Use the Open to Work frame and settings to signal availability separately while your headline sells capability.",
  },
  {
    q: "How do I use LinkedIn to network without being awkward?",
    a: "Send short, specific connection requests that reference something real: a shared group, their post you genuinely read, or an informational interview ask tied to their role. Aim for 5 to 10 thoughtful outreach messages per week rather than 100 generic blasts. Comment substantively on posts in your target field before requesting, since familiarity raises acceptance rates. Our informational interviews guide gives exact scripts, and our professional networking guide covers the follow-up rhythm that turns connections into referrals.",
  },
  {
    q: "Should I post content on LinkedIn while job hunting?",
    a: "Yes, one thoughtful post per week about something you are learning or building beats silence, because it demonstrates expertise and keeps you visible to your network. Share a project takeaway, a certification milestone, or a genuine question about your field rather than motivational quotes. Recruiters do review activity when vetting candidates, and consistent topical posts reinforce your headline claims. Keep every post professional, proofread, and free of complaints about employers or the job market.",
  },
  {
    q: "Do LinkedIn skill endorsements and recommendations matter?",
    a: "Recommendations matter more than endorsements because they are verifiable social proof with names attached. Request 2 to 3 recommendations from managers or clients that describe specific results, and offer to write one first to trigger reciprocity. Endorsements help marginally with keyword matching, so keep your top three skills aligned with your target role. Featured work samples matter most of all: portfolio links, project write-ups, and certifications let a hiring manager verify your claims in one click.",
  },
];

export const metadata: Metadata = {
  title: "LinkedIn Profile Guide: Get Found by Recruiters",
  description:
    "LinkedIn profile guide: magnetic headlines, About section, proven keywords & recruiter outreach scripts. Get found by more recruiters — optimize today.",
  alternates: { canonical: "https://career.loanpaylogic.com/linkedin-profile-guide" },
  openGraph: {
    type: "article",
    url: "https://career.loanpaylogic.com/linkedin-profile-guide",
    title: "LinkedIn Profile Guide: Get Found by Recruiters",
    description:
      "LinkedIn profile guide: magnetic headlines, About section, proven keywords & recruiter outreach scripts. Get found by more recruiters — optimize today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Profile Guide: Get Found by Recruiters",
    description:
      "LinkedIn profile guide: magnetic headlines, About section, proven keywords & recruiter outreach scripts. Get found by more recruiters — optimize today.",
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
        kicker="Resume & Applications"
        title="LinkedIn Profile Guide: Get Found by Recruiters"
        intro="This LinkedIn profile guide rebuilds your profile section by section so recruiters find you, believe you, and contact you. LinkedIn is the largest professional search engine in the world, and most recruiters source candidates there before posting publicly. Optimize once using the system below, then maintain it in fifteen minutes a week."
        updated="Updated: October 2026"
        sources="Sources: U.S. Department of Labor CareerOneStop; LinkedIn Talent Solutions public guidance."
        faqs={faqs}
        related={[
          { href: "/resume-writing-guide", label: "Resume Writing Guide: Get More Interviews" },
          { href: "/professional-networking-guide", label: "Professional Networking Guide That Works" },
          { href: "/informational-interviews-guide", label: "Informational Interviews: Scripts & Setup" },
        ]}
      >
        <p>
          Recruiters do not browse LinkedIn the way members do. They run filtered searches in
          LinkedIn Recruiter by title, skill, location, and years of experience, then open the top
          results for about ten seconds each. Your LinkedIn profile guide job is therefore twofold:
          contain the exact keywords those searches use, and convert the ten-second scan into a
          message. That means a searchable headline, a proof-heavy About section, complete
          experience entries, and visible evidence of your work. Pair this rebuild with your{" "}
          <a href="/resume-writing-guide">resume</a> so titles, dates, and numbers match exactly
          across both.
        </p>
        <h2>How do you write a LinkedIn headline that ranks?</h2>
        <p>
          Your headline gets 220 characters and appears in every search result, comment, and
          message, so it is the highest-leverage text on LinkedIn. The formula is target title
          plus separator plus two specialties plus one proof point: “Financial Analyst | FP&amp;A +
          Power BI | Built forecasts for a $40M business unit.” Include the exact title recruiters
          search, which is usually the standard industry term rather than your company's internal
          label; if your title was Member Success Ninja, translate it to Customer Success Manager
          in parentheses. Front-load the most important keywords because long headlines truncate on
          mobile.
        </p>
        <p>
          Avoid wasting characters on “Unemployed,” “Open to opportunities,” or strings of
          adjectives like “Passionate results-driven guru.” Recruiters never search those terms,
          and they push real keywords out of the visible window. Use the platform's Open to Work
          settings to broadcast availability instead, choosing visible-to-recruiters-only if you
          are searching discreetly while employed. Test your headline by searching LinkedIn for
          your target title in your city and comparing your line against the top ten results; if
          yours carries fewer concrete skills, rewrite it. Students should use “Aspiring [title] |
          [major], [University] | [project or internship proof].”
        </p>
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Weak version</th>
              <th>Strong version</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Headline</td>
              <td>Seeking new opportunities, hard worker</td>
              <td>Logistics Coordinator | TMS + SAP | Cut late shipments 18%</td>
            </tr>
            <tr>
              <td>Photo</td>
              <td>Missing or cropped group shot</td>
              <td>Head-and-shoulders, plain background, genuine smile</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>United States</td>
              <td>Austin, Texas (signals local + remote availability)</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>Unset or mismatched</td>
              <td>Matches target field for recruiter filters</td>
            </tr>
          </tbody>
        </table>
        <h2>What goes in the About section?</h2>
        <p>
          The About section is 2,600 characters of first-person sales copy with a clear structure:
          who you help, what you do best with proof, your current focus, and a call to action with
          contact details. Open with your positioning sentence rather than your life story: “I help
          mid-size manufacturers cut freight cost through better carrier analytics.” Follow with
          three to five quantified wins as short lines a scanner can absorb, mirroring the bullets
          on your resume. Close with what you are looking for next and how to reach you, since
          some recruiters message from outside LinkedIn.
        </p>
        <blockquote>
          <p>
            <strong>Template:</strong> “I'm a [title] with [X] years in [field]. I specialize in
            [skill 1] and [skill 2] — highlights: [win + number], [win + number]. Currently
            exploring [target roles] in [city/remote]. Reach me at [email]. Open to connecting
            with fellow [field] professionals.”
          </p>
        </blockquote>
        <p>
          Write in first person without excessive “I” repetition, break text into short paragraphs
          with line spacing, and embed keywords naturally rather than dumping a keyword list at the
          end. Refresh the About section quarterly and every time you target a new role type, the
          same tailoring habit our <a href="/ats-resume-tips">ATS tips</a> recommend for resumes.
          End with a simple call to action because profiles that tell the reader what to do next
          convert measurably better than ones that trail off.
        </p>
        <h2>How should experience entries differ from the resume?</h2>
        <p>
          LinkedIn experience entries can run slightly longer than resume bullets because space is
          unlimited, but the scan logic is identical: lead with outcomes. Use three to five bullets
          per recent role with the same action-plus-scope-plus-result formula, and attach media
          such as slide decks, dashboards, or writing samples where confidentiality allows. Always
          link each entry to the correct company page, since the logo boosts credibility and ties
          you into the employer's alumni network for future <a href="/informational-interviews-guide">
          informational interviews</a>. Dates and titles must match your resume exactly; mismatches
          discovered during <a href="/background-check-guide">background checks</a> destroy trust.
        </p>
        <p>
          Fill the often-ignored sections that improve search ranking: add all relevant skills to
          unlock endorsements, list licenses and certifications with credential IDs, and add
          courses, projects, and volunteer experience to cover employment gaps with real activity.
          The Featured section deserves special attention: pin your portfolio, best post, resume
          PDF, or a one-page project case study so visitors see proof without scrolling. Ask former
          managers for recommendations while the working relationship is warm, suggesting one or two
          specific results they could mention to make writing easy.
        </p>
        <h2>How do you get found in recruiter searches?</h2>
        <p>
          Recruiter search is keyword matching plus filters, so your defense is keyword coverage in
          the right fields. Mirror the vocabulary of ten target postings across your headline,
          About, experience, and skills: if postings say “demand planning” rather than “forecasting,”
          use their term. Set your location to the metro you want to work in and list remote
          preferences explicitly, since location filters eliminate most candidates before keywords
          even matter. Keep the “Open to” work-type, location, and role-title settings current, and
          review them monthly as your search evolves.
        </p>
        <p>
          Activity signals amplify ranking: profiles that post, comment, and engage appear fresher
          and get surfaced more often in recruiter feeds. Follow thirty target employers and engage
          with their employees' posts genuinely, which our{" "}
          <a href="/professional-networking-guide">professional networking guide</a> details. Join
          three to five industry groups and answer one question per week to build visible
          expertise. Turn on creator-mode-style features like the profile video or services list
          only if they fit your search; freelancers should absolutely list services, as covered in
          our <a href="/freelance-vs-full-time-guide">freelance versus full-time guide</a>.
        </p>
        <h2>What is the right outreach and networking system?</h2>
        <p>
          Effective LinkedIn outreach is narrow, personal, and low-pressure. Each week, identify ten
          people: alumni at target companies, second-degree connections on teams you want to join,
          and authors of posts you found useful. Send requests with a two-sentence note referencing
          something specific, never the default blank invite for high-value contacts. After
          acceptance, wait a day, then send one short message with a concrete, easy ask such as a
          fifteen-minute call with two proposed times or one specific question about their team.
        </p>
        <p>
          Produce one post per week documenting real work: a chart from a project with the story
          behind it, a certification milestone with what you learned, or a thoughtful question about
          a trend in your field. Posts with specific numbers and genuine lessons outperform generic
          advice threads. Comment on five posts per week with substantive additions rather than
          “Great post!” because comments put your headline in front of the author's whole network.
          Track outreach in a spreadsheet with dates and follow-ups, since consistent polite
          persistence separates successful networkers from one-message quitters.
        </p>
        <h2>How do you handle privacy while job hunting?</h2>
        <p>
          Job seekers employed elsewhere must manage visibility carefully. Disable activity
          broadcasts before mass-updating your profile so your boss does not receive a feed of
          every edit, then re-enable selectively. Use Open to Work visible-to-recruiters-only rather
          than the public photo frame, and avoid posting anything that signals dissatisfaction with
          your current employer. Review your public profile view in a logged-out browser window to
          see exactly what strangers see, and tighten past-post visibility if needed.
        </p>
        <p>
          Vet inbound recruiter messages before responding: check their tenure, company, and
          placement history, and ask for the client name, salary range, and role specifics before
          sharing references or ID documents. Never pay a recruiter a placement fee as a candidate;
          legitimate contingency and retained search is employer-paid. Report phishing and
          too-good-to-be-true offers through LinkedIn's reporting flow. For broader safety habits
          during applications, see CareerOneStop's job-search guidance (<a href="https://www.careeronestop.org">careeronestop.org</a>) and the
          Bureau of Labor Statistics Handbook (<a href="https://www.bls.gov/ooh">bls.gov/ooh</a>) for verifying that an opportunity's
          pay and duties match the occupation's published profile.
        </p>
        <h2>How do you use LinkedIn Jobs and Easy Apply wisely?</h2>
        <p>
          LinkedIn's application flow tempts volume over quality, so use it surgically: Easy
          Apply for roles where you are a strong keyword match with a complete profile, full
          portal applications with tailored materials for priority targets. Enable job alerts
          with tight title-and-location filters plus exclusion terms, reviewing them in one daily
          batch rather than reactive drips. Track every LinkedIn application externally, since
          the platform's history view is unreliable for pipeline management. Remember applicant
          numbers shown on postings signal competition density; high-applicant roles demand
          referral routes from your <a href="/professional-networking-guide">network</a> rather
          than blind clicks. Pair selective applying with the visibility system above, and
          LinkedIn becomes a sourcing engine instead of a slot machine.
        </p>
      </ArticleShell>
    </>
  );
}
