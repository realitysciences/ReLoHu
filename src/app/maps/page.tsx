import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'The Maps | ReLoHu',
  description: 'A growing library of psychological maps. Each one is its own document. Together they become something no one has ever had: a comprehensive, accurate portrait of how you actually work.',
}

const maps = [
  {
    number: '01',
    name: 'Terrain Map',
    tag: 'Foundation',
    tagColor: 'bg-teal-50 text-teal-700 border-teal-200',
    description: 'The foundational map. Your psychological landscape: patterns, vectors, access points, resistance zones. Where you are most defended, where you are most open, what drives behavior you cannot fully explain. The entry point for every practice — and the document against which all other maps are read.',
    note: 'Required before any other map. This is what a ReLoHu Full Session produces.',
    link: '/sessions',
    linkText: 'Begin here',
  },
  {
    number: '02',
    name: 'Integration Map',
    tag: 'After significant experience',
    tagColor: 'bg-slate-50 text-slate-600 border-slate-200',
    description: 'What happened, and where it landed. For people processing a significant experience — a plant medicine journey, a retreat, a rupture, a breakthrough, a loss. Maps the experience onto existing terrain. Shows what moved, what opened, what remains unresolved. The rigorous container the integration space has been missing.',
    note: 'Requires a Terrain Map as foundation. The experience needs somewhere specific to go.',
  },
  {
    number: '03',
    name: 'Relationship Map',
    tag: 'Patterns that repeat',
    tagColor: 'bg-slate-50 text-slate-600 border-slate-200',
    description: 'Not about the other person. About you in the presence of that person. What terrain they occupy, what they reliably touch, why this particular person pulls this particular thing out of you. For patterns that repeat across relationships. For dynamics that won\'t resolve no matter how clearly you can see them.',
    note: 'Requires a Terrain Map. The relationship is mapped onto your existing landscape, not assessed in isolation.',
  },
  {
    number: '04',
    name: 'Transition Map',
    tag: 'At threshold moments',
    tagColor: 'bg-slate-50 text-slate-600 border-slate-200',
    description: 'Life reorganizes at threshold moments. A Transition Map documents the before and after — what terrain was lost, what emerged, what is still settling. Also works predictively: knowing your terrain before a transition lets you anticipate where you will be most destabilized, and what to protect.',
    note: 'Can be done before or after a major transition. Both directions produce useful information.',
  },
  {
    number: '05',
    name: 'Developmental Map',
    tag: 'Foundational history',
    tagColor: 'bg-slate-50 text-slate-600 border-slate-200',
    description: 'Not who you are now — who you became and why. The formative terrain. The periods, people, and experiences that built the landscape you currently inhabit. The entry point for people who have done significant work and still feel something foundational is unresolved. The map that explains all the other maps.',
    note: 'For returning clients who want to understand the architecture beneath the current terrain.',
  },
]

export default function MapsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-6">The Map Library</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-8">
            Every person carries a world inside them.<br />
            <span className="text-teal-300">ReLoHu maps it.</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            One session produces a real Terrain Map. But your inner world has been accumulating your entire life — every formative experience, every unresolved pattern, every threshold crossed. A single session reaches a fraction of what is available. ReLoHu produces a growing library of maps. Each one is its own document. Together they become something no one has ever had: a comprehensive, accurate portrait of how you actually work.
          </p>
        </div>
      </section>

      {/* ==================== MAP LIBRARY ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-12">Atlas of Maps</p>

          <div className="space-y-0">
            {maps.map((map, i) => (
              <div key={i} className="group">
                <div className="flex gap-8 py-10 border-t border-slate-100">
                  <div className="text-[11px] font-mono text-slate-300 pt-1 shrink-0 w-6">{map.number}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="text-xl font-medium text-slate-800 group-hover:text-teal-600 transition-colors">
                        {map.name}
                      </h2>
                      <span className={`text-[10px] font-mono tracking-wide uppercase px-2.5 py-1 rounded-full border shrink-0 ${map.tagColor}`}>
                        {map.tag}
                      </span>
                    </div>
                    <p className="text-slate-500 leading-relaxed text-sm mb-4">
                      {map.description}
                    </p>
                    <p className="text-xs text-slate-400 italic leading-relaxed border-l-2 border-slate-100 pl-3">
                      {map.note}
                    </p>
                    {map.link && (
                      <Link
                        href={map.link}
                        className="inline-flex items-center gap-1.5 mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
                      >
                        {map.linkText} →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-slate-100" />
          </div>
        </div>
      </section>

      {/* ==================== FOUNDATION NOTE ==================== */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div>
              <p className="text-slate-700 font-medium mb-2">The Terrain Map is the foundation.</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                All other maps build on it. Each subsequent map is read against your existing terrain — which is why the Terrain Map comes first. Without a landscape to map experiences onto, integration has nowhere to go. A Terrain Map is required before booking any other map type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PUBLIC FIGURES BRIDGE ==================== */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto flex items-start gap-5">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className="text-slate-700 font-medium mb-2">See the methodology in action.</p>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              A growing archive of Terrain Maps applied to public figures whose interior lives are extensively documented -- based entirely on publicly available writing, interviews, and biographical material.
            </p>
            <Link href="/maps/public" className="inline-flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors">
              View example maps →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PRACTICE BRIDGE ==================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-6">What accumulates</p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Maps compound. The Integration Map references specific regions of the Terrain Map. The Developmental Map explains why certain patterns appear in the Relationship Map. Over time, cross-references emerge. What you are building is not a collection of documents — it is a coherent archive of your interior life.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed">
            A document you could hand to a new therapist and skip months of intake. A record you could read at 60 and understand your 30s. Something you could share with someone you love as an act of radical transparency.
          </p>
          <div className="mt-8">
            <Link
              href="/practice"
              className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-medium"
            >
              Learn about the practice →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-teal-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-200 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">Where to begin</p>
          <h2 className="text-3xl font-medium text-white mb-4 leading-snug">
            Begin with the Terrain Map.
          </h2>
          <p className="text-teal-100 leading-relaxed mb-10 max-w-lg mx-auto">
            A free 15-minute orientation call with Dr. David. No commitment. If ReLoHu is right for where you are, you will know quickly.
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
              href="/sessions"
              className="inline-flex items-center justify-center gap-2 border border-teal-400 hover:bg-teal-600 text-white font-medium rounded-full px-8 py-4 text-base transition-all"
            >
              View Sessions
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
