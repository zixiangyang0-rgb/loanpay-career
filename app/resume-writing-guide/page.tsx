import type { Metadata } from "next";
import { ArticleShell, type Faq } from "../components/article";
import { ESCAPED_LT, faqJsonLd } from "../lib/site";

const faqs: Faq[] = [
  {
    q: "How long should my resume be in 2026?",
    a: "One page if you have under 10 years of experience, two pages at most for senior or technical roles with extensive relevant history. Recruiters in multiple industry surveys report spending under 10 seconds on an initial scan, so density matters more than length. Cut anything older than 10 to 15 years unless it is directly relevant, and never shrink fonts below 10.5 points or margins below half an inch just to force a third page. A concise two-page resume that a hiring manager can skim in 30 seconds beats a cramped three-page document every time.",
  },
  {
    q: "Should I include a resume objective or a summary?",
    a: "Use a 3 to 4 line professional summary, not an objective statement. Objectives describe what you want, which the hiring manager already knows since you applied. A summary states your years of experience, one or two specialties, and one quantified achievement plus the value you bring to this specific role. Tailor the summary's keywords to each posting. Entry-level candidates with little experience may use a headline plus a skills-forward summary instead, pointing to projects, internships, or coursework from your internship guide experience.",
  },
  {
    q: "How do I write resume bullet points that get interviews?",
    a: "Start each bullet with a strong action verb, name the scope of the work, and end with a quantified result in the form of numbers, percentages, dollars, or time saved. Compare weak versus strong: weak says responsible for customer accounts, while strong says managed a portfolio of 40 small-business accounts worth 2.1 million dollars, lifting retention 12 percent in one year. Aim for 3 to 5 bullets per role, ordering the most relevant first. If you lack hard numbers, quantify scope instead: team size, ticket volume, tools used, or frequency.",
  },
  {
    q: "What file format should I submit my resume in?",
    a: "Submit PDF unless the posting or application system explicitly asks for Word. PDFs preserve formatting across devices and applicant tracking systems parse modern text-based PDFs reliably. Generate the PDF from a clean source document rather than scanning, because scanned images are unreadable to parsers. Name the file Firstname-Lastname-Resume.pdf, not Resume-Final-v7.pdf. Keep a matching Word version ready since some staffing agencies request editable copies, and check our ATS resume tips guide before submitting through large corporate portals.",
  },
  {
    q: "Do I need to tailor my resume for every job application?",
    a: "Yes, at least the top third: headline, summary, skills section, and the ordering of bullets. Mirror the posting's language for your actual skills, because both software parsers and human skimmers match terminology. You do not need to rewrite your whole history each time; keep a master resume with every bullet you have ever written, then copy the most relevant 60 percent into each targeted version. Track which version you sent where in a simple spreadsheet so your interview stories stay consistent with what each employer read.",
  },
];

export const metadata: Metadata = {
  title: "Resume Writing Guide: Build a Resume That Gets Interviews",
  description:
    "Resume writing guide with formats, bullet formulas, tailoring checklists, real examples & ATS tips. Build interview-winning resumes — start building today.",
  alternates: { canonical: "https://career.loanpaylogic.com/resume-writing-guide" },
  openGraph: {
    type: "article",
    url: "https://career.loanpaylogic.com/resume-writing-guide",
    title: "Resume Writing Guide: Build a Resume That Gets Interviews",
    description:
      "Resume writing guide with formats, bullet formulas, tailoring checklists, real examples & ATS tips. Build interview-winning resumes — start building today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume Writing Guide: Build a Resume That Gets Interviews",
    description:
      "Resume writing guide with formats, bullet formulas, tailoring checklists, real examples & ATS tips. Build interview-winning resumes — start building today.",
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
        title="Resume Writing Guide: Build a Resume That Gets Interviews"
        intro="This resume writing guide walks you through every decision that matters: format, summary, bullet points, skills, ATS formatting, and tailoring. A resume is a marketing document with one job, which is to earn a 20-minute conversation, not to tell your life story. Follow the system below and you will have a sharper, shorter, more persuasive resume by the end of the week."
        updated="Updated: October 2026"
        sources="Sources: U.S. Bureau of Labor Statistics Occupational Outlook Handbook; U.S. Department of Labor CareerOneStop resume guidance."
        faqs={faqs}
        related={[
          { href: "/ats-resume-tips", label: "ATS Resume Tips: Beat the Software Screen" },
          { href: "/cover-letter-guide", label: "Cover Letter Guide: Structure That Works" },
          { href: "/linkedin-profile-guide", label: "LinkedIn Profile Guide for Job Seekers" },
        ]}
      >
        <p>
          Hiring managers do not read resumes the way applicants hope they do. Eye-tracking studies
          of recruiter behavior consistently show an initial scan of roughly six to ten seconds,
          focused on your current title, employer names, dates, education, and the first words of a
          few bullet points. Everything in this resume writing guide is designed around that
          reality: put the most persuasive facts where eyes land first, remove anything that slows
          the scan, and make every bullet prove value. If you also need help with the rest of the
          application package, pair this with our <a href="/cover-letter-guide">cover letter guide</a>{" "}
          and <a href="/linkedin-profile-guide">LinkedIn profile guide</a> so all three tell one
          consistent story.
        </p>
        <h2>Which resume format should you choose?</h2>
        <p>
          There are three standard formats, and the right choice depends on your work history. The
          reverse-chronological format lists jobs newest-first and suits most applicants with a
          steady employment record; it is also the format recruiters and applicant tracking systems
          parse most reliably. The functional format groups experience by skill cluster instead of
          timeline and can help career changers, but many recruiters distrust it because it hides
          dates, so use it sparingly. The combination format opens with a skills summary followed by
          a short work history and works well for mid-career professionals and{" "}
          <a href="/career-change-guide">career changers</a> with transferable skills. When in doubt,
          choose reverse-chronological: familiarity is a feature, because a recruiter who instantly
          knows where to look keeps reading.
        </p>
        <p>
          Structure every resume the same way from top to bottom: contact header, headline or title
          line, professional summary, core skills, experience, education, and then optional extras
          such as certifications, projects, or volunteer work. Keep the header lean with your name,
          city and state, one phone number, one professional email address, and your LinkedIn URL.
          Skip your full street address, a photo, your date of birth, and marital status; none of
          them help in the U.S. hiring process and some create bias risk. Use one readable font
          throughout, standard section headings a parser will recognize, and consistent date
          formatting such as Jun 2022 – Present.
        </p>
        <table>
          <thead>
            <tr>
              <th>Format</th>
              <th>Best for</th>
              <th>Watch out for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reverse-chronological</td>
              <td>Steady work history, most applicants, promotions</td>
              <td>Gaps are visible; address them in the cover letter</td>
            </tr>
            <tr>
              <td>Combination</td>
              <td>Career changers, 8+ years, skill-heavy roles</td>
              <td>Can run long; keep the skills block to 6 lines</td>
            </tr>
            <tr>
              <td>Functional</td>
              <td>Rare cases: freelancers consolidating clients</td>
              <td>Many recruiters dislike hidden dates; avoid if possible</td>
            </tr>
          </tbody>
        </table>
        <h2>How do you write a professional summary that works?</h2>
        <p>
          Your summary is a three-to-four-line elevator pitch sitting directly under your headline.
          The formula is simple: years of experience plus specialty, plus one quantified proof point,
          plus the value you offer this employer. A generic line like hardworking professional
          seeking growth opportunities says nothing a hundred other applicants could not claim.
          Compare that with: customer support lead with 6 years in SaaS, managing a 9-person team
          across chat and phone; cut average handle time 22 percent while holding CSAT at 96
          percent; now seeking a support operations role to scale quality systems. The second
          version gives the reader three reasons to keep going in under thirty words.
        </p>
        <p>
          Write the summary last, after your bullets are finished, because only then do you know
          which achievement deserves the spotlight. Mirror two or three exact keyword phrases from
          the job posting, but only for skills you genuinely hold; keyword-stuffing skills you lack
          collapses at the interview stage. Students and recent graduates should lead with degree,
          relevant projects, and internship outcomes instead of years of experience, and our{" "}
          <a href="/entry-level-jobs-guide">entry-level jobs guide</a> shows how to frame limited
          history persuasively. Revisit the summary every time you tailor the resume, since it is
          the highest-leverage paragraph on the page.
        </p>
        <h2>What is the formula for strong experience bullet points?</h2>
        <p>
          Every bullet should follow the pattern of action verb plus scope plus result. Open with a
          varied, specific verb such as rebuilt, negotiated, automated, or coached rather than
          repeating managed or responsible for. Then state the scope so the reader grasps scale: how
          many people, accounts, tickets, dollars, or systems. Close with the measurable result,
          which is the part most resumes omit and the part hiring managers remember. Numbers do not
          have to be dramatic; small honest figures like resolved 25 tickets daily with a 4.8 out of
          5 satisfaction rating are far more credible than vague claims of excellence.
        </p>
        <blockquote>
          <p>
            <strong>Template you can reuse:</strong> [Action verb] + [what you did and its scale] +
            [measurable result]. Example: “Redesigned onboarding emails for 3 plans (12,000 new
            users/month), lifting trial-to-paid conversion from 8% to 11% in two quarters.”
          </p>
        </blockquote>
        <p>
          Prioritize ruthlessly within each role: three to five bullets for recent positions, one to
          two for older ones, with the most relevant achievement first rather than chronological
          within the job. Delete duties anyone in the role would perform and keep differentiators
          only a strong performer could claim. If your work is confidential, anonymize gracefully
          with ranges such as a mid-size regional bank or 40-plus retail locations rather than
          inventing precision. Sales, support, operations, and project roles all have quantifiable
          output once you look for volume, speed, quality, revenue, or cost metrics.
        </p>
        <h2>How should the skills and education sections look?</h2>
        <p>
          The skills section is a scannable keyword block, not a paragraph. Split it into two or
          three labeled lines such as Tools, Methods, and Languages or Technical and Business
          skills, listing six to twelve items total that match the posting. Include proficiency
          signals where they matter, for example SQL (joins, window functions, 3 years) or Spanish
          (professional working proficiency), and drop anything obsolete or trivially universal.
          Honesty here is non-negotiable because skills get tested in interviews and on the job;
          our <a href="/common-interview-questions">common interview questions guide</a> shows how
          claims get probed.
        </p>
        <p>
          Education belongs near the top for recent graduates and near the bottom once you have
          three or more years of experience. List degree, major, university, and graduation year,
          plus GPA only if it is 3.5 or above and you graduated within the last three years.
          Relevant certifications go in their own section with the issuing body and year, such as
          PMP, Project Management Institute, 2024, or Google Data Analytics Professional
          Certificate, 2025. Finished a portfolio-worthy course project? Link it by name so the
          reader can verify the skill, and keep the same project story ready for your{" "}
          <a href="/job-interview-prep-guide">interview preparation</a>.
        </p>
        <h2>How do you handle employment gaps and short stints?</h2>
        <p>
          Gaps are normal; unexplained gaps invite the worst assumptions, so explain them briefly
          and factually. A single line such as Career break 2023–2024: full-time caregiving, plus
          freelance bookkeeping for two local clients and QuickBooks certification is enough. Group
          short contracts under one consulting heading, use years instead of months when the math
          is honest, and never falsify dates because background checks verify them, as explained in
          our <a href="/background-check-guide">background check guide</a>. Fill gap periods with
          real activity: contract work, volunteering with measurable output, coursework with a
          finished project, or open-source contributions.
        </p>
        <p>
          For layoffs, keep it neutral and forward-looking: a role eliminated in restructuring
          carries no stigma in the current market. Job-hoppers with several sub-year stints should
          emphasize contract versus permanent context and show lengthening tenure over time. The
          cover letter gets one or two sentences of context at most; the resume itself stays
          factual. Interviewers will ask about the gap directly, and a calm thirty-second answer
          beats a defensive monologue, so rehearse it using the{" "}
          <a href="/star-method-guide">STAR method guide</a>.
        </p>
        <h2>How do you tailor a resume without rewriting it every time?</h2>
        <p>
          Maintain a master resume of three to four pages holding every bullet, project, and skill
          you have, then carve each application version from it. For each posting, highlight the
          three must-have requirements and make sure they appear naturally in your summary, skills,
          and at least one bullet. Mirror the employer's vocabulary: if they say client retention
          rather than customer retention, use their term. Reorder bullets so the most relevant
          proof sits first, and quietly drop experience that distracts from the target role rather
          than deleting it from your master file.
        </p>
        <p>
          Before submitting, run the formatting checks in our{" "}
          <a href="/ats-resume-tips">ATS resume tips</a> piece: standard headings, no text boxes or
          tables holding content, no headers or footers with contact details, and keywords spelled
          the way the posting spells them. Save the tailored version with the company name in your
          tracker so interview answers stay consistent. Finally, proofread backwards from the last
          line to the first to catch typos your eyes skip in normal reading order, then have one
          other person read it aloud; awkward phrasing reveals itself instantly when spoken.
        </p>
        <h2>What mistakes instantly weaken a resume?</h2>
        <p>
          The fastest rejections come from avoidable errors: typos in the first third, inconsistent
          date formats, tiny fonts, dense walls of text, and buzzword soup without evidence. Other
          common killers include listing references on the document, which wastes space covered in
          our <a href="/references-guide">references guide</a>, and including salary history, which
          no U.S. applicant should volunteer. Photos, graphics, and multi-column layouts may look
          creative but break parsing and distract from content in conservative industries. Keep
          design quiet so achievements get loud.
        </p>
        <p>
          Verify every number you publish, because exaggeration unravels during{" "}
          <a href="/background-check-guide">background checks</a> and reference calls. Do not copy
          job descriptions verbatim into your bullets; recruiters recognize their own postings.
          Avoid first-person pronouns throughout, drop articles where natural, and keep verb tense
          consistent with present tense for current roles and past tense for previous ones. End
          with a final skim test: hand the resume to a friend for ten seconds and ask what role
          you are targeting. If they cannot answer, your headline and summary need another pass.
          According to the Bureau of Labor Statistics Occupational Outlook Handbook (<a href="https://www.bls.gov/ooh">bls.gov/ooh</a>),
          tailoring application materials to specific occupations remains one of the highest-return
          job-search activities, and CareerOneStop (careeronestop.org) offers free resume review
          checklists worth using before you hit submit.
        </p>
      </ArticleShell>
    </>
  );
}
