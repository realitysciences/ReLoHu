import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Trent Reznor: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Trent Reznor, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'The wound',
    body: `Reznor grew up in Mercer, Pennsylvania, raised primarily by his maternal grandparents after his parents divorced when he was five. The abandonment is clean and early. He has described it with characteristic flatness: his mother left, his father was absent, and he was raised by people who were not his parents in a small town he experienced as suffocating.\n\nThe specific texture of the wound is not grief in the conventional sense but a kind of foundational rejection — the experience that the world is hostile to your actual inner life and that the people who should have sheltered it could not or would not. The response he built is one of the most architecturally complete in rock music: a sound-world so total and consuming that it functions as a substitute interior environment. He did not find a way to be received by the world. He built a world.`,
  },
  {
    label: 'The wound-to-method conversion',
    body: `Nine Inch Nails is, from a terrain perspective, not primarily a band or a musical project. It is a coping structure. The earliest work — particularly Pretty Hate Machine and The Downward Spiral — is so direct in its content (self-loathing, rage, the desire to destroy and be destroyed) that it reads less as artistic expression and more as an attempt to make the interior audible. To externalize something so it can be witnessed at a volume that matches how it actually feels.\n\nThe conversion is not clean. Unlike Eckhart Tolle, whose wound and method collapsed into each other completely, Reznor's wound and method remained in tension for most of his career. He was making art about self-destruction while also self-destructing. The work was not processing the wound — it was the wound, amplified and broadcast. The real conversion came later, in sobriety, when he had to figure out who he was without the wound as the organizing center.`,
  },
  {
    label: 'The control architecture',
    body: `Nine Inch Nails has always had only one permanent member. This is not incidental. Reznor's need for total control over the sonic environment — the arrangements, the production, the tonal palette, the release strategy — is structural, not aesthetic preference.\n\nHe has spoken about this. The studio is the one environment where the outcome is determined by his own decisions, from input to output, without the unpredictable variable of another person's will. In relationship, in collaboration, in the world at large, the texture of experience is determined by forces he cannot fully control. In the studio it is not. The studio is the wound's antidote: a domain of total authorship.\n\nThis is also why he has been a difficult collaborator for much of his career — not from narcissism in the simple sense, but because genuine collaboration requires tolerating someone else's influence on the outcome, and that tolerance is very hard to build when your wound is about being shaped by forces that did not care what you needed.`,
  },
  {
    label: 'The sobriety rupture and what it revealed',
    body: `Reznor got sober in 2001. He has described this, carefully, as one of the most disorienting experiences of his life — not the quitting itself but what came after. The wound had been the engine. The rage, the self-loathing, the annihilating quality of The Downward Spiral — it was not dysfunction layered over a functional self. It was the self. Without it, the question became: what is left?\n\nHis output changed in ways that confused longtime listeners. The work became less consuming and more architectural. Year Zero (2007) was almost entirely outward-facing, a political concept album about environmental collapse. The Slip, Ghosts. The interior had shifted. He was no longer making work that sounded like someone drowning. He was making work that sounded like someone trying to figure out what comes after surviving.\n\nThe sobriety rupture is one of the most legible moments of terrain reorganization in his public record. What it revealed: the wound was not his identity, but it had been running the show long enough that its removal left him having to re-author himself from scratch.`,
  },
  {
    label: 'The relational register: what the public record shows',
    body: `Reznor married Mariqueen Maandig in 2009. He has spoken about her in ways that are unusually direct for someone whose public persona is built on opacity: she is the person who made him want to stay. The relational record before that point is largely unavailable, which is itself a marker. Someone who externalizes interior pain at the volume he did for a decade has very little public record of the specific texture of his intimate relationships.\n\nWhat can be inferred: he is someone whose wound made deep relational presence very difficult for a long time. The consuming quality of the Nine Inch Nails project — the total control, the inward focus, the way the work absorbed everything — is not compatible with the kind of availability that sustains long-term intimacy. The sobriety and the marriage arriving in the same decade is not coincidental. The terrain had to change for a different kind of relationship to become possible.`,
  },
  {
    label: 'The late work: terrain in resolution',
    body: `His film scoring work with Atticus Ross — The Social Network, Gone Girl, Soul, Mank, The Killer — is the most revealing body of late work. Not because it is more personally confessional than Nine Inch Nails, but because it is not confessional at all. It is entirely in service of someone else's vision.\n\nThis is the furthest point from the wound. The man who needed total authorship over every decision in order to feel safe is now producing work that exists to serve a director's film. The control architecture is still present — the productions are meticulous, the scores are total environments — but the requirement that they serve his interior has dissolved. He is building worlds for other people to inhabit.\n\nA ReLoHu Terrain Map would read this as the clearest sign of what the terrain looks like in some resolution: not the absence of the control need, but the control capacity redirected toward generosity. The studio is still the place where the outcome is entirely determined by careful decision-making. But the decision-making is now in service of something outside himself.`,
  },
]

export default function TrentReznorMapPage() {
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
            ← Example Maps
          </Link>
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Terrain Map · Public Figure</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Trent Reznor</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Musician, producer, composer · Nine Inch Nails · born 1965</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: Nine Inch Nails discography (1989–2024), published interviews including Rolling Stone, NME, and Vulture, the documentary "Trent Reznor: Nine Inch Nails — How to Destroy Angels" (2010), Reznor's own liner notes and published writings, and his public statements about sobriety, family, and creative process. No private sessions, personal contact, or non-public information of any kind. This is a cartographic exercise, not a clinical assessment or diagnosis.
          </p>
        </div>
      </section>

      {/* ==================== WHY THIS PERSON ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            Reznor is one of the clearest cases of a wound building an entire sonic world as its own shelter. His early work is not art about pain — it is pain made into architecture. And his late work is one of the most legible examples of what terrain in genuine resolution looks like, which makes him unusually useful as a ReLoHu demonstration subject.
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

      {/* ==================== SONG MAP CALLOUT ==================== */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Song Map</p>
          <h2 className="text-xl font-medium text-white mb-3">Closer</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            The most misread song in his catalog. What gets heard as pure provocation is, on closer reading, a map of someone trying to make contact and having no available language for it except violation. The rage is the cover story. The vulnerability is what's underneath.
          </p>
          <Link
            href="/maps/public/trent-reznor/closer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-4 text-sm transition-all hover:shadow-lg hover:shadow-teal-900"
          >
            Read the song map →
          </Link>
        </div>
      </section>

      {/* ==================== BRIDGE ==================== */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-100">
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
              ← Back to Example Maps
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
