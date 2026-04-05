import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Taylor Swift + Scooter Braun: A ReLoHu Relationship Map | ReLoHu',
  description: 'A psychological mapping of the Swift-Braun catalog conflict: what the acquisition hit, why the re-recordings are a terrain response, and what the collision reveals about each person.',
  openGraph: {
    title: 'Taylor Swift + Scooter Braun: A ReLoHu Relationship Map',
    description: 'The most public terrain collision in recent music history. What the catalog acquisition actually hit, and why Taylor\'s Version is one of the most psychologically precise responses in recent pop culture.',
  },
}

const sections = [
  {
    label: 'The terrain each person brings',
    body: `Taylor Swift's primary wound structure, visible throughout her catalog and public record, is organized around documentation and ownership. The fear that what she builds will be taken, mischaracterized, or credited to someone else runs through her songwriting, her public statements, and her relationship to her own archive. She writes things down before they can be taken. She names names. She preserves the record. This is not a strategy. It is a terrain feature, a wound response that became a method, and eventually an artistic voice.

Scooter Braun's terrain is less documented but inferrable from the public record of his career. He operates through acquisition, consolidation, and leverage. He identifies assets with long-term value, positions himself to acquire them, and builds power through ownership of things other people made. The specific move he made with Ithaka Holdings and Big Machine Records was, from an industry perspective, ordinary. This is how music industry power has always worked: ownership of masters is leverage.

The collision between these two terrain structures was not a random conflict. It was almost precisely targeted, probably without full awareness on Braun's part, at the wound that Swift's entire architecture is built around.`,
  },
  {
    label: 'The acquisition and why it landed where it did',
    body: `Braun's company acquired Ithaka Holdings, which owned Big Machine Records, which held the masters to Swift's first six albums: recordings that represented fifteen years of work, the foundational documents of her career, the archive she had been building since she was a teenager. She found out through a Tumblr post. She had not been given the opportunity to counter-bid.

For someone whose wound is organized around the fear that what she builds will be taken: the masters to her first six albums were taken. The specific way she found out, not in a conversation, not with advance notice, but through a public post after the transaction was complete, added an epistemic dimension to the wound. She was not part of the decision. The record she had built was sold around her.

The terrain response was immediate and public. She posted a detailed account of what had happened and what she felt about it. This is itself a terrain behavior: she named it before anyone else could frame it. Documentation as defense. The wound activated the adaptive strategy that had always been most available to her.`,
  },
  {
    label: "Taylor's Version: the terrain response",
    body: `She re-recorded all six albums. The project took years. The stated goal was to make the original masters commercially worthless by giving fans a preferred, identical alternative under her ownership. This is a psychologically specific response: she rebuilt everything that was taken, exactly, so that the taking would be undone. Not through legal means. Not through public pressure alone. Through re-creation.

From a terrain perspective, this is one of the most interesting things she has ever done. The documentation impulse at its most complete and most literal: if you cannot own the original, you reproduce it with such precision that the original loses its value. The wound is not healed by this act. But the specific consequence of the wound, the loss of ownership of the archive, is reversed.

What the re-recordings also did, which may or may not have been the primary intention, was make the conflict a permanent feature of her public narrative. Every Taylor's Version release is a re-statement of what happened. Every time a fan streams Fearless (Taylor's Version), the acquisition is referenced. This is not incidental. It is the documentation impulse applied to the wound itself: making sure the record of what happened cannot be erased.`,
  },
  {
    label: 'What the collision reveals about each person',
    body: `About Braun: someone whose model of how power works in the music industry, acquisition, leverage, industry relationships, met someone whose wound made an ordinary business transaction into a direct attack on the interior. He has been substantially less visible in the industry since the conflict became public. The relational cost was real: other artists distanced themselves, industry relationships shifted. This is what happens when a wound structure is activated at scale in someone with a very large platform. The consequences are disproportionate to what the acquiring party understood themselves to be doing.

About Swift: the re-recordings reveal that her investment in the catalog is not simply financial or artistic. It is identity. The albums are her in a specific way that most artists' work is not. The recordings are the documentation. Someone acquiring the recordings acquired something she experienced as herself, as part of her interior architecture. This is why the response was the scale it was. It is also why the re-recordings, rather than legal action or private settlement, were the terrain-congruent move: she re-built the thing, because the thing was her, and she needed the thing back.`,
  },
  {
    label: 'What the map opens',
    body: `The Swift-Braun conflict is the most public example in recent memory of what happens when a wound structure is directly activated by a person who did not know they were activating it. Braun made a business decision. Swift experienced it as an attack on the architecture of her interior life. Both accounts are probably accurate, and neither fully captures the terrain.

What this collision demonstrates is one of the central ReLoHu premises: the specificity of wound structures means that events which are ordinary for one person can be catastrophic for another. The same acquisition, applied to an artist without Swift's particular wound architecture, would have been a negotiation. Applied to her, it became a years-long re-construction project.

The map that would be most worth making at this point is not another account of what happened, but a map of what has shifted in her terrain since the re-recordings concluded. Whether the act of rebuilding the archive did what she needed it to do. Whether the wound is the same shape it was in 2019. That is the map the public record cannot reach.`,
  },
]

export default function SwiftBraunMapPage() {
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
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Relationship Map &middot; Two Public Figures</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-6">
            Taylor Swift<br />
            <span className="text-teal-400 text-2xl md:text-3xl">+</span><br />
            Scooter Braun
          </h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Singer-songwriter, re-recorder &middot; Music industry executive, talent manager</p>

          <div className="bg-teal-900/30 border border-teal-700/40 rounded-xl px-5 py-4 mb-8">
            <p className="text-teal-300 text-sm leading-relaxed">
              This is a public example map created from publicly available information only. Neither Taylor Swift nor Scooter Braun has participated in a ReLoHu session or endorsed this content. This is a cartographic exercise, not a clinical assessment or diagnosis.
            </p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            A Relationship Map examines what happens when two specific terrain structures meet. The subject here is the dynamic the 2019 catalog acquisition produced, and what it reveals about each person's wound architecture. Drawn entirely from public record including Swift's public statements, industry reporting, and the re-recording project.
          </p>
        </div>
      </section>

      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/OGvl1wwt9BM"
              title="Taylor Swift and Scooter Braun"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ==================== WHY THIS RELATIONSHIP ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            The most public case in recent memory of what happens when a business transaction directly activates a wound structure the other party did not know was there. Taylor's Version is not a business decision. It is a terrain response. The map starts with understanding what was actually hit.
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
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-6">See also: individual terrain maps</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/maps/public/taylor-swift"
              className="flex-1 border border-slate-200 hover:border-teal-300 rounded-xl px-5 py-4 text-sm text-slate-600 hover:text-teal-600 transition-all"
            >
              <p className="font-medium mb-1">Taylor Swift: Terrain Map</p>
              <p className="text-slate-400 text-xs">The documentation impulse, the epistemic wound, the metacognitive split</p>
            </Link>
            <Link
              href="/maps/public/taylor-swift/all-too-well"
              className="flex-1 border border-slate-200 hover:border-teal-300 rounded-xl px-5 py-4 text-sm text-slate-600 hover:text-teal-600 transition-all"
            >
              <p className="font-medium mb-1">All Too Well: Song Map</p>
              <p className="text-slate-400 text-xs">The wound as ten-minute document</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== BRIDGE ==================== */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed mb-6 max-w-lg">
            A Relationship Map applied to you and someone specific in your life goes much further than this. It works from full information, not public record, and reaches the terrain that the relationship actually activates.
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
