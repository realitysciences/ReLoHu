import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'The Dentist Who Wanted to Separate the Diagnosis from the Drill | ReLoHu Blog',
  description: 'A dentist who diagnoses and treats has a financial stake in what he finds. I always wanted to change that. That instinct is the foundation of everything I built after.',
}

function Cite({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-teal-600 text-[0.8rem] align-super font-mono">[{children}]</span>
  )
}

export default function TheDiagnosisProblem() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      <article className="pt-24 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          <Link href="/blog" className="inline-flex items-center gap-2 text-teal-600 text-sm mb-10 hover:underline">
            ← All articles
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-mono tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 rounded-full px-3 py-0.5">Human Systems</span>
            <span className="text-slate-400 text-xs">March 2026 · 9 min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4 leading-tight">
            The Dentist Who Wanted to Separate the Diagnosis from the Drill
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed mb-12 border-b border-slate-100 pb-12">
            When the person who evaluates you also profits from what they find, the evaluation is compromised — whether they mean it to be or not. I believed this about dentistry for years. I eventually realized I believed it about nearly everything.
          </p>

          <div className="space-y-6 text-[0.97rem] leading-[1.85] text-slate-700">

            <p>
              There is something I have wanted to say about dentistry for a long time.
            </p>

            <p>
              The standard model — where one dentist examines you, diagnoses you, recommends treatment, and then performs that treatment — has a structural problem that the profession rarely discusses openly. The dentist who tells you that you need a crown is often the same dentist who will bill several thousand dollars to place it. The dentist who recommends a full treatment plan is the same dentist whose revenue depends on that plan being accepted.
            </p>

            <p>
              This is not an accusation. The vast majority of dentists I have known are honest, careful, and genuinely motivated by the wellbeing of their patients. But good intentions do not eliminate structural incentives. Research on clinical decision-making consistently shows that financial context shapes judgment in ways that are largely unconscious — that even when a practitioner believes they are acting purely in the patient's interest, the conditions they operate within are influencing what they see.<Cite>1</Cite>
            </p>

            <p>
              Studies examining diagnostic variability in dentistry have found significant disagreement between practitioners reviewing the same radiographs — the same X-rays, the same patient, wildly different treatment recommendations.<Cite>2</Cite> Some of this is genuine clinical uncertainty. But some of it is the quiet pressure of a system that rewards treatment over watchfulness, intervention over observation.
            </p>

            <h2 className="text-xl font-medium text-slate-800 mt-10 mb-3">What I always wanted to do instead</h2>

            <p>
              I had a different vision for what a dental examination could be. Not a quick scan for billable problems. A genuine inquiry into the person.
            </p>

            <p>
              What is actually going on in this mouth — and why? What are this person's oral hygiene habits, their diet, their stress levels, their relationship to their own health? What is the history here, the pattern, the trajectory? Who is this person, and what does their mouth reveal about how they are living?
            </p>

            <p>
              And then: what do they actually need? Not what can be billed. What is genuinely in their interest?
            </p>

            <p>
              The model I kept returning to was one where I performed only the diagnosis — the full, unhurried, conflict-free evaluation — and then referred the patient to a different provider for any treatment that followed. Not because I couldn't do the treatment. Because if the patient knew I had no financial stake in what I found, they could trust what I told them. The diagnosis would be clean. My incentive and their interest would be perfectly aligned: I wanted to see them clearly, and they needed to be seen clearly. Nothing else in the room.
            </p>

            <p>
              I never found a way to build that model at scale inside conventional dentistry. But I never stopped thinking about it.
            </p>

            <h2 className="text-xl font-medium text-slate-800 mt-10 mb-3">The same problem lives in every helping profession</h2>

            <p>
              The longer I thought about this, the more I recognized the same structural tension in other fields I cared about.
            </p>

            <p>
              A therapist who charges per session has an unconscious incentive for sessions to continue. A coach who sells ongoing programs benefits when clients feel they always need more. A consultant who profits from complexity may not always be motivated to simplify. These are not bad people. They are people operating inside systems that have not been designed around the interests of the person being served.
            </p>

            <p>
              The Institute of Medicine's landmark report on patient-centered care identified the same tension across healthcare broadly: that systems organized around provider convenience, institutional efficiency, or financial throughput tend to drift away from the human at their center — not through malice, but through accumulated structural pressure.<Cite>3</Cite> The human becomes secondary to the system. And the system keeps running, because it works well enough, and because no one has built the alternative yet.
            </p>

            <h2 className="text-xl font-medium text-slate-800 mt-10 mb-3">We have not landed anywhere final</h2>

            <p>
              I want to say something that I think gets lost in most professional discourse: we have not figured this out. Any of it.
            </p>

            <p>
              Dentistry has made extraordinary advances in technique, materials, and clinical outcomes. And the basic structure of how a patient is evaluated, how their interests are represented, and whether the person looking at their mouth has genuinely clean incentives — those questions remain largely unanswered. We improved the drill. We did not meaningfully revisit the relationship.
            </p>

            <p>
              The same is true in psychology and therapy. The therapeutic hour has remained structurally unchanged for over a century. The couch, the fifty-minute session, the ongoing relationship, the slow accumulation of insight over months and years — these are not immutable laws of nature. They are historical conventions that have calcified into assumptions. And the question of whether they are the best possible structure for helping a human being know themselves has rarely been seriously asked.
            </p>

            <p>
              Progress that stops questioning its own assumptions is not progress. It is maintenance.
            </p>

            <h2 className="text-xl font-medium text-slate-800 mt-10 mb-3">Human-centered means something specific</h2>

            <p>
              Every field that works with human beings eventually claims to be human-centered. It is in the mission statements, the training philosophies, the marketing. And then the billing structure, the session format, the incentive model, and the institutional inertia quietly rebuild the system around something else.
            </p>

            <p>
              Human-centered is not a value statement. It is a design question. Who does the structure actually serve? When the interests of the practitioner and the interests of the person diverge — which they sometimes will — whose interests win? What has the system been built to protect?
            </p>

            <p>
              The dental examination I always imagined was human-centered in this specific sense: the person in the chair would know, without any doubt, that the findings were for them. Not for a treatment plan. Not for a revenue target. For them. That kind of clarity changes everything — not just what the practitioner does, but what the patient is able to receive. You hear differently when you trust the source.
            </p>

            <h2 className="text-xl font-medium text-slate-800 mt-10 mb-3">This is where ReLoHu came from</h2>

            <p>
              When I began building ReLoHu, I was not consciously thinking about dentistry. But looking back, the same instinct is at the center of both.
            </p>

            <p>
              ReLoHu does not treat anything. It does not advise, prescribe, or recommend a course of action. It does not have ongoing sessions or recurring fees. It produces one thing: a complete and honest picture of who you are, delivered to you as your own property, with no agenda beyond accuracy.
            </p>

            <p>
              I have no financial interest in what the map shows. I am not your therapist, so I have no stake in what your patterns reveal. I am not your coach, so I do not benefit if you feel like you need more guidance. I am the person who examines you carefully, tells you what I see truthfully, and then hands you the map and steps back.
            </p>

            <p>
              That is the clean diagnostic relationship I always wanted to build. I couldn't build it in dentistry. I built it here instead.
            </p>

            <h2 className="text-xl font-medium text-slate-800 mt-10 mb-3">The obligation to keep pushing</h2>

            <p>
              Every generation inherits a set of assumptions so embedded in daily practice that they become invisible. The assumption that a dentist should both diagnose and treat. The assumption that therapy should be weekly and indefinite. The assumption that knowing yourself requires years of professional guidance. These assumptions are not laws. They are starting points that have been mistaken for destinations.
            </p>

            <p>
              What I have learned — in dentistry, in my own psychological work, and in building ReLoHu — is that the obligation to improve is never discharged. There is no point at which we can say: this is how it is done now, and how it will be done. Every convention deserves the question: is this actually the best we can do for the person this is supposed to serve?
            </p>

            <p>
              That question is uncomfortable. It challenges livelihood, habit, and identity. But it is the only question that leads anywhere worth going. Human beings must always push forward — and always push forward in a way that keeps the human at the center. When we lose that, we have to notice. We have to say something. And then we have to build something better.
            </p>

            <div className="mt-14 p-6 bg-teal-50 border border-teal-100 rounded-2xl">
              <p className="text-teal-800 font-medium mb-2">A diagnosis with no agenda.</p>
              <p className="text-teal-700 text-sm mb-4 leading-relaxed">
                One session. One map. No treatment plan, no ongoing commitment, no conflict of interest. Just an honest picture of who you are — delivered to you and belonging entirely to you.
              </p>
              <a
                href="https://calendly.com/relohu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-6 py-3 text-sm transition-all"
              >
                Book a free orientation call →
              </a>
            </div>

            <div className="mt-14 pt-8 border-t border-slate-100">
              <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-5">References</p>
              <ol className="space-y-3 text-sm text-slate-500 leading-relaxed list-none pl-0">
                <li className="flex gap-3">
                  <span className="text-teal-500 font-mono shrink-0">[1]</span>
                  <span>Lohr, K.N., & Schroeder, S.A. (1990). A strategy for quality assurance in Medicare. <em>New England Journal of Medicine, 322</em>(10), 707–712. See also: Hillman, A.L. (1987). Financial incentives for physicians in HMOs: is there a conflict of interest? <em>New England Journal of Medicine, 317</em>(27), 1743–1748.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-500 font-mono shrink-0">[2]</span>
                  <span>Gordan, V.V., Garvan, C.W., Richman, J.S., Fellows, J., Rindal, D.B., Qvist, V., & Mjör, I.A. (2009). How dentist factors influence the decision to restore occlusal caries. <em>Community Dentistry and Oral Epidemiology, 37</em>(4), 333–341.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-500 font-mono shrink-0">[3]</span>
                  <span>Institute of Medicine. (2001). <em>Crossing the Quality Chasm: A New Health System for the 21st Century.</em> National Academy Press. (Identifies patient-centeredness as one of six core aims of a reformed healthcare system.)</span>
                </li>
              </ol>
            </div>

          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  )
}
