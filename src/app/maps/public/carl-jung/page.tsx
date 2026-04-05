import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Carl Jung: A ReLoHu Terrain Map | ReLoHu',
  description: 'A psychological mapping of Carl Jung: the pastor\'s son who inherited doubt, the two personalities, the Freud rupture, the Red Book, and the tower he built with his own hands.',
  openGraph: {
    title: 'Carl Jung: A ReLoHu Terrain Map',
    description: 'The wound that built analytical psychology: a pastor\'s son who inherited his father\'s crisis of faith and spent his life building a framework large enough to hold it.',
  },
}

const sections = [
  {
    label: 'The father who lost his faith',
    body: `Johann Paul Jung was a Swiss Reformed pastor who, by his son's account, believed less and less as the years went on and could not stop. He preached on Sunday and doubted on every other day, and the doubt was not the productive kind that opens into something larger. It was a corrosive doubt that left him increasingly depressed and eventually broke him. He died when Carl was 21, a man whose vocation had been hollowed out from the inside.

What a child absorbs from a father like this is not the specific theological content of the doubt. It is the structural experience: that the framework you were handed to make sense of your life may be insufficient, that the question beneath the framework is real and unanswered, and that the people who are supposed to have answers may be the people most tormented by the absence of them.

Jung spent his professional life building frameworks. The collective unconscious, the archetypes, the individuation process: these are all attempts to construct something large enough to hold the question his father could not hold. This is not a conscious project. It is terrain in motion. The wound was the insufficient framework. The method was a new framework, built from scratch, large enough that it would not hollow out the way the old one did.`,
  },
  {
    label: 'Personality No. 1 and No. 2',
    body: `He describes in his autobiography, Memories, Dreams, Reflections, the experience of being two people. Personality No. 1 was the schoolboy, the son, the person who existed in the world of other people and their expectations. Personality No. 2 was older, he felt, connected to something vast and historical, present when he was alone or near water or in the middle of the night.

This is not a clinical description of dissociation. It is a terrain description of someone whose interior life was so much richer and stranger than the available frameworks for it that it organized itself into two registers: the one that could be presented publicly and the one that had to be lived privately. The gap between them was not experienced as distress. It was experienced as the most real thing about him.

What this produces in a life is a person who is always partly elsewhere. Present in the conversation, present in the work, and simultaneously inhabiting a different register that the conversation cannot fully reach. His patients, colleagues, and family all encountered this. His ideas carry it: the emphasis on the unconscious as the larger territory, the insistence that what is visible on the surface is always less than what is operating beneath it. He was describing his own structure and calling it a theory.`,
  },
  {
    label: 'The Freud rupture',
    body: `He met Sigmund Freud in 1907. They talked for thirteen hours on the first day. Freud designated him, privately and then publicly, as the crown prince of psychoanalysis, the heir apparent who would carry the movement forward. For six years, the relationship was the most significant professional relationship of either man's life. Then it broke.

The break had multiple causes, but the terrain cause is the most legible: Freud required agreement on the sexual theory. He believed, and stated plainly, that the theory of sexuality as the root of neurosis was not negotiable. It was the fixed point around which everything else organized. Jung could not accept this. His own interior territory, the No. 2 personality, the dreams and visions, the sense of something vast that was not reducible to sexuality, was too real to subordinate.

The break was formally completed in 1913. What followed for Jung was the period he later called his confrontation with the unconscious, which is a clinical name for what was, by any description, a breakdown. He was forty years old, internationally recognized, and in genuine psychological crisis. He resigned his academic positions and went inward. What he came out with, years later, was the material that became the core of analytical psychology. The Freud rupture was the wound event that made everything after it possible.`,
  },
  {
    label: 'The Red Book: descent and return',
    body: `Between 1913 and roughly 1930, Jung filled a series of notebooks with visions, fantasies, and dialogues with figures from his unconscious. He then transcribed this material into a large red leather volume, wrote it in calligraphy, and illustrated it in a medieval style. He called it the Liber Novus. He kept it in a safe. It was not published until 2009, fifty years after his death.

The Red Book is not a private journal in the ordinary sense. It is a record of someone deliberately inducing altered states, encountering figures there, and attempting to find language for what they said. He treated the figures as real interlocutors. He argued with them. He was afraid of some of them. He experienced the process as genuinely dangerous. He later said that everything he did professionally for the rest of his life was an attempt to make sense of what he encountered in that period.

From a terrain perspective, this is the most extraordinary document he produced, and it was hidden for fifty years. The public-facing work, the books, the lectures, the patients, was an attempt to translate something that had happened on the interior into a form that could be communicated. The Red Book is the untranslated version. It is the wound without the methodology wrapped around it, which is exactly why he kept it private.`,
  },
  {
    label: 'Bollingen: the tower built by hand',
    body: `Beginning in 1923, he built a stone tower on the shore of Lake Zurich at Bollingen. He built it literally, with his own hands, over decades, adding rooms as he felt the interior needed them. There was no electricity. He cooked on an open fire. He drew water from a well. He went there to be alone in a way that his professional life, his marriage, his practice, and his institutional presence could not provide.

The choice to build something with your hands when you are the most famous psychologist in the world is a terrain behavior, not a hobby. It is a specific response to a specific interior need: the need for something that is not language, not interpretation, not the framework. Something that resists the framework entirely. Stone resists interpretation. You cannot analyze your way through a wall. You build through it.

He said that the tower was a place where he was most himself. Not the No. 1 self, the professional, the theorist. The No. 2 self. The one that was there before the career and would be there after. He died in 1961 in the tower. That is not incidental. The building he made with his hands was the place he could be most fully the person his framework was always trying to describe.`,
  },
  {
    label: 'The wound and the method: what he built and what it cost',
    body: `The collective unconscious, the archetypes, the shadow, the persona, the anima and animus, the Self: these are all terrain features mapped from the inside. He did not theorize the unconscious from a distance. He entered it. He was afraid in there. He came back and found language for what he encountered, and the language became the most influential framework for understanding the human interior that the twentieth century produced.

What it cost is less documented but inferrable. His marriage to Emma was sustained alongside a decades-long significant relationship with his colleague Toni Wolff, with Emma's knowledge and apparent tolerance. He was by multiple accounts difficult to be in close relationship with: present and then completely absent, organized around his own interior process in ways that left little room for others to make demands on his attention. The No. 2 personality that was his richest interior territory was also the place where other people could not fully follow him.

This is a recurring terrain feature in people whose wound became their method: the wound that produced the gift also produced the specific shape of the cost. What made him capable of going where he went on the interior made sustained ordinary human closeness harder to sustain. ReLoHu's work is interested precisely in that territory: not the framework, not the achievement, but the specific price of the wound that made both possible.`,
  },
]

export default function CarlJungMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Carl Jung</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Psychiatrist, founder of analytical psychology (1875&ndash;1961)</p>

          <div className="bg-teal-900/30 border border-teal-700/40 rounded-xl px-5 py-4 mb-8">
            <p className="text-teal-300 text-sm leading-relaxed">
              This is a public example map created from publicly available information only. This is a cartographic exercise, not a clinical assessment or diagnosis.
            </p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: Memories, Dreams, Reflections (1962), The Red Book / Liber Novus (published 2009), the Collected Works, correspondence with Freud, and biographical accounts including Deirdre Bair's Jung: A Biography (2003). All inferences are based on material in the public record.
          </p>
        </div>
      </section>

      {/* ==================== WHY THIS PERSON ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            He built the most comprehensive map of the human interior the twentieth century produced, and he built it entirely from the inside. The wound was the insufficient framework he inherited from his father. The method was a new framework, large enough that it would not hollow out the way the old one did. That is the arc of a terrain that is almost perfectly legible.
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
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-6">See also</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/maps/public/sigmund-freud"
              className="flex-1 border border-slate-200 hover:border-teal-300 rounded-xl px-5 py-4 text-sm text-slate-600 hover:text-teal-600 transition-all"
            >
              <p className="font-medium mb-1">Sigmund Freud: Terrain Map</p>
              <p className="text-slate-400 text-xs">The wound that became the universal theory</p>
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
