import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'The Practice | ReLoHu',
  description: 'ReLoHu is not a one-time event. It is a lifelong cartographic practice of the self. One session is a real beginning. What accumulates over years is something genuinely rare.',
}

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">The Practice</p>
          <h1 className="text-3xl md:text-5xl font-medium text-slate-800 leading-tight mb-8">
            A lifelong cartographic practice<br className="hidden md:block" />
            <span className="text-teal-600"> of the self.</span>
          </h1>
        </div>
      </section>

      {/* ==================== BODY ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">

            <p className="text-lg text-slate-700">
              Most things you can do for yourself have a natural end. A course finishes. A problem resolves. A retreat ends and you return home.
            </p>

            <p>
              ReLoHu doesn't work that way. Not because we want to keep you. Because your inner world doesn't stop being complex.
            </p>

            <p>
              You have been alive long enough to have accumulated a world inside you. Formative experiences that shaped your architecture. Patterns that have run your behavior without your permission. Beliefs so old you've mistaken them for facts. Relationships that activate terrain nothing else touches. Transitions that reorganized who you are. Most of it has never been named. All of it is mappable.
            </p>

            <p>
              One session is a real beginning. It produces a real map. And it shows you how much more is there.
            </p>

            <div className="border-l-2 border-teal-200 pl-6 py-2 my-8">
              <p className="text-slate-700 italic">
                Each return goes deeper, or wider, or both. New territory is explored. Existing maps are updated. Over time, cross-references emerge — the Integration Map touches the Terrain Map in specific places, the Developmental Map explains something in the Relationship Map. The maps compound.
              </p>
            </div>

            <p>
              What accumulates over years is something genuinely rare: a comprehensive, living archive of your interior life. A document you could hand to a new therapist and skip months of intake. A record you could read at 60 and understand your 30s. Something you could share with someone you love as an act of radical transparency.
            </p>

            <p>
              You don't come back because something is wrong. You come back because you are complex. And complexity takes time to know.
            </p>

          </div>
        </div>
      </section>

      {/* ==================== WHAT THE PRACTICE LOOKS LIKE ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">What it looks like over time</p>
          <div className="space-y-8">
            {[
              {
                label: 'Session one',
                content: 'The Terrain Map. A complete portrait of your current psychological landscape — patterns, vectors, access points, resistance zones. The document against which everything else will be read. Most people describe it as the most accurate thing anyone has ever produced about them.',
              },
              {
                label: 'After a significant experience',
                content: 'An Integration Map. Whether a plant medicine journey, a retreat, a loss, a breakthrough, or a relationship shift — the experience needs somewhere specific to go. The Integration Map maps it onto your existing terrain. Shows what moved. What opened. What remains.',
              },
              {
                label: 'When a pattern won\'t resolve',
                content: 'A Relationship Map or Developmental Map. For patterns that keep returning no matter how clearly you can see them. For the feeling that something foundational is still unexamined. These maps go to the architecture beneath the current terrain.',
              },
              {
                label: 'At a threshold',
                content: 'A Transition Map. Life reorganizes at threshold moments. Knowing your terrain before a major transition lets you anticipate where you will be most destabilized. Mapping it after shows what actually changed — and what is still settling.',
              },
              {
                label: 'Years in',
                content: 'A living archive. Cross-references accumulate. The maps begin to speak to each other. What you have built is something no therapist, no partner, no practitioner of any kind has ever produced for a single person: a comprehensive, accurate record of how you actually work.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-8">
                <div className="w-px bg-slate-200 shrink-0 mt-1.5" />
                <div>
                  <p className="text-xs font-mono text-teal-600 uppercase tracking-widest mb-2">{item.label}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-teal-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-200 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">Begin your practice</p>
          <h2 className="text-3xl font-medium text-white mb-4 leading-snug">
            Every practice begins with<br />a single session.
          </h2>
          <p className="text-teal-100 leading-relaxed mb-10 max-w-lg mx-auto">
            A free 15-minute orientation call with Dr. David. No commitment. If ReLoHu is right for where you are right now, you will know quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-teal-50 text-teal-700 font-medium rounded-full px-10 py-4 text-base transition-all"
            >
              Book a Free Orientation Call
            </a>
            <Link
              href="/maps"
              className="inline-flex items-center justify-center gap-2 border border-teal-400 hover:bg-teal-600 text-white font-medium rounded-full px-8 py-4 text-base transition-all"
            >
              See all maps →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
