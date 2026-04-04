import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export const metadata = {
  title: 'The Evidence | ReLoHu',
  description: 'The research base behind ReLoHu. Peer-reviewed studies on witnessing, narrative coherence, single-session interventions, and the therapeutic value of being accurately seen.',
}

const sections = [
  {
    id: 'witnessing',
    label: 'Being accurately seen is itself therapeutic',
    intro: 'ReLoHu is built around witnessing: full presence, accurate perception, no agenda. The research on what happens when someone feels genuinely understood is substantial.',
    studies: [
      {
        citation: 'Elliott, R., Bohart, A. C., Watson, J. C., & Greenberg, L. S. (2018). Therapist empathy and client outcome: An updated meta-analysis. Psychotherapy, 55(4), 321-335.',
        finding: 'Meta-analysis of 82 independent samples found that therapist empathy significantly predicts client outcome (r = .31). The client\'s perception of being understood predicted outcomes better than therapist self-report or observer-rated accuracy.',
        relevance: 'The terrain map is a concrete artifact of accurate empathy. It demonstrates, in writing, that someone has deeply perceived your interior world.',
      },
      {
        citation: 'Reis, H. T., & Lemay, E. P. (2017). Toward understanding understanding: The importance of feeling understood in relationships. Social and Personality Psychology Compass, 11(3), e12308.',
        finding: 'Feeling understood is a fundamental psychological need. The perception of being understood matters more to wellbeing than whether you are objectively understood. Feeling understood buffers against negative experiences and promotes positive relational cycles.',
        relevance: 'The terrain map produces the felt sense of being understood. You read it and recognize yourself in it. That recognition is the mechanism.',
      },
    ],
  },
  {
    id: 'narrative',
    label: 'Narrative coherence causes better mental health',
    intro: 'The terrain map gives you a coherent, written narrative of your psychological architecture. The research shows this is not just helpful. It is causal.',
    studies: [
      {
        citation: 'Adler, J. M. (2012). Living into the story: Agency and coherence in a longitudinal study of narrative identity development and mental health over the course of psychotherapy. Journal of Personality and Social Psychology, 102(2), 367-389.',
        finding: 'Longitudinal study of 47 adults found that increases in narrative coherence and agency preceded improvements in mental health, not the reverse. The causal direction runs from coherent self-narrative to better mental health.',
        relevance: 'This is perhaps the strongest single study supporting what ReLoHu does. The terrain map delivers a coherent, agentic narrative about who you are. This research shows that having one causes mental health improvements.',
      },
      {
        citation: 'Main, M., Kaplan, N., & Cassidy, J. (1985). Security in infancy, childhood, and adulthood: A move to the level of representation. Monographs of the Society for Research in Child Development, 50(1-2), 66-104.',
        finding: 'Developed the Adult Attachment Interview and discovered that secure attachment is predicted not by what happened to someone in childhood, but by how coherently they can narrate their childhood experiences. Coherent narratives predicted secure attachment regardless of whether the actual childhood was positive or negative.',
        relevance: 'It is not what happened to you that determines your psychological security. It is whether you have a coherent account of what happened. The terrain map provides exactly this.',
      },
      {
        citation: 'McAdams, D. P., & McLean, K. C. (2013). Narrative identity. Current Directions in Psychological Science, 22(3), 233-238.',
        finding: 'People who construct narratives featuring agency, exploration, and redemptive meaning tend to enjoy higher levels of mental health, wellbeing, and maturity.',
        relevance: 'The terrain map is a narrative identity document. It integrates your past, your patterns, and your trajectory into a unified story with structure and meaning.',
      },
    ],
  },
  {
    id: 'writing',
    label: 'Externalizing inner experience into writing produces measurable benefits',
    intro: 'Over 400 published studies have demonstrated that putting emotional experience into written form improves health outcomes. The terrain map is a structured, witnessed version of this process.',
    studies: [
      {
        citation: 'Pennebaker, J. W., & Beall, S. K. (1986). Confronting a traumatic event: Toward an understanding of inhibition and disease. Journal of Abnormal Psychology, 95(3), 274-281.',
        finding: 'Students who wrote about emotional experiences for 15 minutes a day for 4 days visited the health center at roughly half the rate of control participants over the following 6 months.',
        relevance: 'The foundational study: externalizing inner experience into written form produces measurable health benefits. The terrain map is a far more structured and witnessed version of this process.',
      },
      {
        citation: 'Smyth, J. M. (1998). Written emotional expression: Effect sizes, outcome types, and moderating variables. Journal of Consulting and Clinical Psychology, 66(1), 174-184.',
        finding: 'Meta-analysis of 13 studies found an effect size of d = 0.47 for written emotional expression, with improvements across physical health, psychological wellbeing, physiological functioning, and general functioning.',
        relevance: 'An effect size of 0.47 for simply writing about emotional experience is substantial. The terrain map adds structure, coherence, and the witnessing dimension.',
      },
    ],
  },
  {
    id: 'single-session',
    label: 'A single session can produce lasting change',
    intro: 'ReLoHu is a single-encounter model. The research on single-session interventions supports this approach with robust evidence.',
    studies: [
      {
        citation: 'Talmon, M. (1990). Single session therapy: Maximizing the effect of the first (and often only) therapeutic encounter. San Francisco: Jossey-Bass.',
        finding: 'Planned single-session therapy with 60 adults at Kaiser Permanente. At 3-12 month follow-up, 88% reported significant improvement. 78% did not return because they had gotten what they needed.',
        relevance: '88% improved from a single intentional session. ReLoHu is designed around this principle: one encounter, done with full attention, is often sufficient.',
      },
      {
        citation: 'Schleider, J. L., & Weisz, J. R. (2017). Little treatments, promising effects? Meta-analysis of single-session interventions for youth psychiatric problems. Journal of the American Academy of Child & Adolescent Psychiatry, 56(2), 107-115.',
        finding: 'Meta-analysis of 50 randomized controlled trials (N = 10,508) found a mean effect size of g = 0.32 for single-session interventions.',
        relevance: 'Across 10,000+ participants and 50 rigorous trials, single-session interventions produce real, statistically significant effects.',
      },
    ],
  },
  {
    id: 'assessment',
    label: 'The act of being assessed is itself therapeutic',
    intro: 'The terrain mapping process is fundamentally an assessment delivered as collaborative feedback. Research shows this combination produces clinically meaningful effects.',
    studies: [
      {
        citation: 'Poston, J. M., & Hanson, W. E. (2010). Meta-analysis of psychological assessment as a therapeutic intervention. Psychological Assessment, 22(2), 203-212.',
        finding: 'Meta-analysis of 17 studies (N = 1,496) found a significant overall effect size of d = 0.423 for psychological assessment procedures when combined with personalized, collaborative feedback. Therapy process variables showed the largest effects (d = 1.117).',
        relevance: 'Being deeply assessed and receiving personalized feedback about yourself is not just informative. It is therapeutic. The terrain map is exactly this: deep assessment, returned as a written portrait.',
      },
      {
        citation: 'Finn, S. E. (2007). In our clients\' shoes: Theory and techniques of therapeutic assessment. Mahwah, NJ: Erlbaum.',
        finding: 'Demonstrated that psychological testing conducted collaboratively produces stronger therapeutic alliances, decreased dropout rates, and lasting benefit. The assessment itself functions as brief therapy.',
        relevance: 'Stephen Finn showed that the act of being seen, assessed, and having that assessment reflected back to you is inherently therapeutic. This is the architecture ReLoHu was built on.',
      },
    ],
  },
  {
    id: 'relationship',
    label: 'The relationship heals. The technique barely matters.',
    intro: 'Decades of research have shown that specific therapeutic techniques account for very little of what actually produces outcomes. What matters is the quality of the encounter.',
    studies: [
      {
        citation: 'Wampold, B. E., & Imel, Z. E. (2015). The great psychotherapy debate: Models, methods, and findings (2nd ed.). Routledge.',
        finding: 'Comprehensive review finding that specific therapeutic techniques account for approximately 1% of outcome variance, while the therapeutic alliance accounts for a much larger proportion.',
        relevance: 'If technique barely matters and the relationship is what heals, then ReLoHu\'s focus on witnessing over any particular modality is scientifically grounded. You do not need a specific technique. You need to be seen.',
      },
      {
        citation: 'Norcross, J. C., & Lambert, M. J. (2018). Psychotherapy relationships that work III. Psychotherapy, 55(4), 303-315.',
        finding: 'The APA\'s Third Task Force on Evidence-Based Relationships concluded that the psychotherapy relationship makes substantial and consistent contributions to outcome independent of the type of treatment.',
        relevance: 'The APA itself concluded that the relationship, not the treatment type, produces outcomes. ReLoHu is built around this principle.',
      },
    ],
  },
  {
    id: 'self-knowledge',
    label: 'Self-insight predicts wellbeing. Rumination does not.',
    intro: 'Not all self-reflection is helpful. Research shows a critical distinction between structured insight and unstructured rumination. The terrain map delivers the first, not the second.',
    studies: [
      {
        citation: 'Grant, A. M., Franklin, J., & Langford, P. (2002). The Self-Reflection and Insight Scale: A new measure of private self-consciousness. Social Behavior and Personality, 30(8), 821-836.',
        finding: 'Insight (clarity of self-understanding) is linked to wellbeing. Self-reflection without insight is actually associated with increased anxiety.',
        relevance: 'Ruminating about yourself can make things worse. Organized, clear insight makes things better. The terrain map delivers structured insight, not unstructured navel-gazing.',
      },
      {
        citation: 'Kang, Y., et al. (2024). Emotional self-knowledge profiles and relationships with mental health indicators support value in "knowing thyself." Scientific Reports, 14, 7432.',
        finding: 'Emotional self-knowledge profiles were directly related to mental health indicators, with higher emotional clarity consistently predicting lower psychopathology.',
        relevance: 'The terrain map is a tool for emotional self-knowledge. This research confirms that such clarity is directly protective against mental health difficulties.',
      },
    ],
  },
  {
    id: 'continuity',
    label: 'The re-explaining problem is real and documented',
    intro: 'Every time you see a new therapist, you spend the first several sessions just explaining yourself. The research confirms this is not just inconvenient. It is a genuine barrier to care.',
    studies: [
      {
        citation: 'Hartberg, S., & Heggen, K. (2017). Continuity of care as experienced by mental health service users. BMC Health Services Research, 17, 763.',
        finding: 'Mental health service users reported having "had enough of repeatedly having to tell their personal stories to new therapists." Changes in provider were experienced as setbacks, producing anxiety, frustration, and feelings of rejection.',
        relevance: 'The terrain map solves this. It is a portable psychological record you hand to any new provider. They read it and you arrive already known, already understood, ready to do real work from session one.',
      },
    ],
  },
]

export default function EvidencePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <SiteNav />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-6">The Evidence</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-6">
            ReLoHu was not built on theory.<br />
            <span className="text-teal-300">The research already existed.</span>
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-xl">
            Every core mechanism behind ReLoHu is supported by peer-reviewed research. The value of being accurately seen. The power of narrative coherence. The therapeutic effect of assessment itself. The evidence that a single session can produce lasting change. None of this was invented here. It was assembled.
          </p>
        </div>
      </section>

      {/* ── Section nav ── */}
      <section className="py-8 px-6 bg-slate-50 border-b border-slate-100 sticky top-[73px] z-40">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-[10px] font-mono tracking-wide text-slate-400 hover:text-teal-600 bg-white border border-slate-200 hover:border-teal-200 px-3 py-1.5 rounded-full transition-colors"
              >
                {s.id.replace('-', ' ')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research sections ── */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto space-y-20">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-32">
              <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-4">{section.id.replace('-', ' ')}</p>
              <h2 className="text-xl md:text-2xl font-medium text-slate-800 mb-3 leading-snug">{section.label}</h2>
              <p className="text-slate-500 leading-relaxed mb-10">{section.intro}</p>

              <div className="space-y-8">
                {section.studies.map((study, i) => (
                  <div key={i} className="border-l-2 border-slate-200 pl-6">
                    <p className="text-slate-700 text-sm font-medium leading-relaxed mb-3">{study.citation}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">{study.finding}</p>
                    <p className="text-teal-700 text-sm leading-relaxed bg-teal-50 rounded-lg px-4 py-3 border border-teal-100">
                      {study.relevance}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed mb-6 max-w-lg">
            ReLoHu does not claim to replace therapy, coaching, or clinical treatment. It does something different: it maps who you are, accurately and completely, in a single encounter. The research supports every mechanism in that process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-4 text-sm transition-all hover:shadow-lg hover:shadow-teal-100"
            >
              <Calendar className="w-4 h-4" />
              Book a Free Orientation Call
            </a>
            <Link
              href="/sessions"
              className="inline-flex items-center gap-2 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-medium rounded-full px-8 py-4 text-sm transition-all"
            >
              View Sessions →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
