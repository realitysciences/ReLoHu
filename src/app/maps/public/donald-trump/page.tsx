import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Donald Trump: A ReLoHu Terrain Map | ReLoHu',
  description: 'A psychological mapping of Donald Trump: the Fred Trump architecture, the wound of conditional approval, and how a Jamaica Queens childhood became the operating system of two presidencies.',
  openGraph: {
    title: 'Donald Trump: A ReLoHu Terrain Map',
    description: 'The Fred Trump architecture, the wound of conditional approval, and how a specific Queens childhood became the operating system for everything that followed.',
  },
}

const sections = [
  {
    label: 'Fred Trump: the father who could not be satisfied',
    body: `Fred Trump was a self-made man. He built a real estate empire in Queens and Brooklyn, became wealthy without inheriting wealth, and held specific views about what that required: discipline, toughness, a refusal to show weakness. He was not warm by the accounts of those who knew him. He was demanding. He measured his children against standards he set, and the approval he gave was conditional on meeting those standards.

Donald was not the firstborn. That was Fred Jr., Freddy, who became a commercial airline pilot rather than entering the family business, developed alcoholism, and died at 42. The family narrative around Freddy's trajectory carries weight in Trump's terrain: the eldest son who was supposed to carry the legacy, who chose a different path, who lost the father's approval, and who died young. Donald was the second son who succeeded where his older brother did not. He entered the family business. He did what Fred Sr. wanted.

The specific texture of growing up as the son who won the father's approval, but in a household where that approval was conditional and the stakes were demonstrated by the older brother's fate, is a particular kind of wound. It is not the wound of rejection. It is the wound of conditional acceptance: I am loved, but the condition could be withdrawn. The approval is real and it could always be taken away. What that produces in the interior is a permanent low-grade alarm: the need to keep performing at a level that keeps the approval coming, because the alternative is visible and it is catastrophic.`,
  },
  {
    label: 'Jamaica, Queens: the world that shaped the appetite',
    body: `He grew up in Jamaica Estates, a wealthy enclave in Queens. Not Manhattan. This distinction matters more in New York than it would anywhere else. Queens is outer borough. Manhattan is the center. He grew up in a wealthy family that was not part of the Manhattan elite, in a borough that looked across the water at the city that did not yet take his family seriously.

He has spoken, across decades of interviews, about wanting to be taken seriously by people who did not take him seriously. The shift from Queens to Manhattan, the move from building middle-income housing in the outer boroughs to putting his name on towers in Midtown, is not simply business expansion. It is a terrain response. It is the outer-borough son arriving at the center of the city that his father never quite reached.

The New York City real estate world of the 1970s and 1980s was a specific social environment. Trump moved into it aggressively, at a young age, and encountered both acceptance and resistance. The people who accepted him and the people who looked down on him both became organized around the same interior dynamic: a need to be seen as the most important figure in the room. Not just successful. Dominant. The most. This is not ambition in the ordinary sense. Ambition wants to achieve. What he has always wanted is to be recognized as the singular figure, the greatest, the one who cannot be ignored or dismissed or treated as secondary.`,
  },
  {
    label: 'The approval wound as operating system',
    body: `The wound of conditional approval produces a specific behavioral signature. It is not the same as narcissism in the clinical sense, though those categories overlap. It is a structural feature of someone who learned early that love and recognition are available but must be continuously earned, and that failing to earn them has visible and serious consequences.

The behavioral signature includes: an unusual sensitivity to slights, an inability to let criticism pass without response, a need to reframe every loss as something other than a loss, and an orientation toward recognition at the largest possible scale. These are not personality quirks. They are logical outputs of a specific wound structure. If the approval is always conditional and could always be withdrawn, then every criticism is existential, every loss is catastrophic, and the only safe position is one in which the approval is total and continuous.

The scale escalation follows from this. Buildings with his name on them. The Miss Universe pageant. The casino empire. The television show. Each escalation is a larger arena in which to perform the self-sufficiency and dominance that the wound requires. The presidency is not a category rupture. It is the logical endpoint of an architecture that has been building toward the largest possible stage since he left Queens.`,
  },
  {
    label: 'From Queens to the Oval Office: the same wound, larger stage',
    body: `The behaviors that define his presidency, both of them, are not political behaviors. They are terrain behaviors. The refusal to concede a loss. The obsessive return to crowd sizes. The need to characterize every opponent as weak, corrupt, or stupid. The inability to share credit without diminishing it. The alliances that work until the ally becomes too prominent and then become conflicts. These are not strategies. They are the wound running.

What is specific to the presidency as a terrain event is what the office requires that his wound cannot provide. The presidency requires the capacity to absorb failure, to acknowledge error, to share the frame with others, and to hold your position with some stability when the recognition is not total. These are the specific things that the wound architecture makes most difficult. The job description and the wound description are almost perfectly inverse.

This does not mean the presidency failed him. From a terrain perspective, the presidency activated the wound more completely and more publicly than anything he had done before. The scale of the recognition available was unprecedented. So was the scale of the opposition, the criticism, and the loss. Both hit the same structure. Both produced the same behavioral response, just at a scale that millions of people watched in real time.`,
  },
  {
    label: 'The Mary Trump layer',
    body: `His niece Mary Trump, a clinical psychologist, published Too Much and Never Enough in 2020. The book's account of the Trump family dynamics is the most specific clinical analysis of his terrain available in the public record. Her argument is structural rather than political: that Fred Sr.'s emotional unavailability, combined with the specific fate of Freddy Trump, created a child who learned to perform toughness as the price of belonging and who has never been able to stop.

What her account adds to the public record is specificity about the family system. Fred Sr.'s coldness was not indifference. It was a deliberate philosophy about what made men strong. Mary Trump documents the degree to which the family organized itself around Fred Sr.'s definitions of worth and weakness, and the degree to which Donald internalized those definitions so completely that he could not distinguish them from his own views.

The specific observation that carries most weight from a terrain perspective is this: a child who is praised for toughness and punished for vulnerability, in a family system organized around those categories, does not learn to stop performing toughness when the audience disappears. The performance becomes the interior. There is no backstage. What looks like strategy from the outside has long since collapsed into something indistinguishable from identity.`,
  },
  {
    label: 'What the terrain predicts',
    body: `The terrain does not predict politics. It predicts behavioral patterns, and those patterns are consistent across sixty years of public record.

He will return to any unresolved slight regardless of how much time has passed. He will reframe any loss as something other than a loss, because the wound cannot hold a loss as a loss. He will organize his inner circle around loyalty rather than competence, because loyalty is the closest available substitute for unconditional approval. He will escalate when criticized rather than absorb it, because every criticism activates the conditional-approval alarm. He will characterize every departure from his circle as betrayal, because the wound cannot accommodate the neutral explanation.

None of this is political analysis. It is terrain analysis. The wound that Fred Trump's conditional approval produced in Jamaica Estates in the 1950s is still running. It has been running through every deal, every lawsuit, every television appearance, every campaign rally, and every executive order. The presidency did not change the terrain. The terrain used the presidency.`,
  },
]

export default function DonaldTrumpMapPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-16 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <Link href="/maps/public" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors">
            &larr; Example Maps
          </Link>
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Terrain Map &middot; Public Figure</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Donald Trump</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">45th and 47th President of the United States, real estate developer</p>

          <div className="bg-teal-900/30 border border-teal-700/40 rounded-xl px-5 py-4 mb-8">
            <p className="text-teal-300 text-sm leading-relaxed">
              This is a public example map created from publicly available information only. Donald Trump has not participated in a ReLoHu session and has not reviewed or endorsed this content. This is a psychological cartography exercise, not a clinical assessment, diagnosis, or political commentary of any kind.
            </p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: Too Much and Never Enough by Mary Trump (2020), The Art of the Deal (1987), published biographical reporting including Michael D'Antonio's The Truth About Trump (2016), and the extensive public record of his career and both presidencies. All inferences are based on material in the public record.
          </p>
        </div>
      </section>

      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/7b5yESiFhd0"
              title="Donald Trump"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ==================== WHY THIS PERSON ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            The most politically discussed person alive is one of the least psychologically mapped. The terrain is unusually legible because the wound runs close to the surface and the public record spans sixty years. What makes him worth mapping is not the politics but the consistency: the same wound producing the same behavioral signature, from Queens in the 1970s to the Oval Office in 2025.
          </p>
        </div>
      </section>

      {/* ==================== MAP SECTIONS ==================== */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="ml-0 md:ml-12 space-y-14">
            {sections.map((section, i) => (
              <div key={i}>
                <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-4">{section.label}</p>
                <div className="space-y-4">
                  {section.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-slate-600 leading-relaxed text-[15px]">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CROSS REFERENCES ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-6">See also: related maps</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/maps/public/musk-trump"
              className="flex-1 border border-slate-200 hover:border-teal-300 rounded-xl px-5 py-4 text-sm text-slate-600 hover:text-teal-600 transition-all"
            >
              <p className="font-medium mb-1">Musk + Trump: Relationship Map</p>
              <p className="text-slate-400 text-xs">Two wound structures that cannot share the center</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== BRIDGE ==================== */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed mb-6 max-w-lg">
            This map was built from inference and public record. A session produces the same quality of attention applied to you, with full information rather than reconstructed signal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-4 text-sm transition-all hover:shadow-lg hover:shadow-teal-100"
            >
              Book a Free Orientation Call
            </a>
            <Link
              href="/maps/public"
              className="inline-flex items-center gap-2 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-medium rounded-full px-8 py-4 text-sm transition-all"
            >
              &larr; Back to Example Maps
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
