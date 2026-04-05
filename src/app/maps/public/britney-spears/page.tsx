import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Britney Spears: A ReLoHu Terrain Map | ReLoHu',
  description: 'A psychological mapping of Britney Spears: the manufactured architecture, the 2007 rupture, thirteen years of conservatorship, and what the act of naming finally did.',
  openGraph: {
    title: 'Britney Spears: A ReLoHu Terrain Map',
    description: 'What the conservatorship story reveals about Britney Spears\'s interior: the wound of conditional worth, the rupture, what being witnessed by strangers does, and the map that the memoir opened.',
  },
}

const sections = [
  {
    label: 'The manufactured architecture',
    body: `She was performing before she was a teenager and famous before she was an adult. The machinery around her, management, record labels, stylists, choreographers, publicists, was in place before she had any framework for understanding what it was or what it was doing. This is not unusual in the entertainment industry. What is specific to her case is the degree to which the machine was organized around a persona constructed around her sexuality before she had any adult relationship to her own sexuality.

The Britney Spears that became famous in 1998 was a specific cultural artifact: the schoolgirl, the baby voice, the deliberate ambiguity of sexuality and innocence. She did not construct this. It was constructed around her, at sixteen, by adults who understood what would sell. The interior person who had to live inside that artifact, and then continue living inside it as the artifact became the most famous thing in the world, is the subject of the terrain map.

Her family of origin in Kentwood, Louisiana, was not stable. Her father's alcoholism is documented in the public record. The family's financial precarity meant that her career was the family's survival from very early on. The specific weight of being a child whose earning is also her family's survival is a terrain feature that does not resolve when the child grows up. It reorganizes into the belief, held often without examination, that her worth is conditional on her performance.`,
  },
  {
    label: 'The 2007 rupture',
    body: `She shaved her head in a Tarzana hair salon in February 2007. She had just come out of a treatment facility. She was in the middle of a custody battle. She had been photographed without underwear multiple times. The press was relentless and cruel in a way that was normalized at the time and looks, from any distance, like documented harassment of someone who was visibly not well.

What the 2007 period actually was, beneath the tabloid coverage, was a person whose entire structure had collapsed simultaneously. The marriage had ended. The children were in dispute. The career that had organized her identity since childhood was in disarray. The persona she had been living inside was no longer coherent. And the internal resources for navigating that kind of collapse, the ones that get built in stable childhoods by people who have some continuity of self beneath the public self, were not available to her because they had never been built.

The head-shaving reads, from a terrain perspective, as an act of self-reclamation so desperate it became the only visible option. The constructed image was her hair. Destroying it was destroying the artifact. That this was the move available to her at that moment says something specific about the interior resources that were and were not present.`,
  },
  {
    label: 'The conservatorship: thirteen years',
    body: `The conservatorship that began in 2008 and ended in 2021 placed her legal and financial autonomy in the hands of her father, Jamie Spears, and a series of other designated parties. She could not make financial decisions without approval. She continued to perform, record albums, and generate significant income during this period. The income went into the estate managed by the conservatorship.

What thirteen years of legally enforced removal of autonomy does to the interior is not a clinical question. It is a terrain question. The belief, which many people carry from childhood and spend adult life trying to undo, that their judgment cannot be trusted, that they require supervision, that their own sense of what is right for them is insufficient: the conservatorship codified this belief in law and enforced it daily for thirteen years.

She has described, in court testimony that became public during the FreeBritney period, specific incidents of control that went beyond financial management. Her account of those years is the account of someone whose autonomy was not just limited but systematically undermined. What that produces in the interior, the specific texture of being a person whose judgment has been legally overridden for over a decade, is a wound that has a very particular shape.`,
  },
  {
    label: 'Witnessed by strangers',
    body: `The Free Britney movement is an unusual cultural event from a terrain perspective. A large number of people who had no relationship with her, who knew her only as a cultural artifact, became convinced that something real was wrong and organized around demanding her freedom. They were right. The thing that made them right was that the wound was visible in the public record to anyone who looked.

Being witnessed by strangers is not the same as being known. It is not the same as what a ReLoHu session reaches. But it is a specific form of being seen that carries real weight, particularly for someone whose interior had been consistently overridden by the people closest to her. The strangers saw something that the insiders were invested in not seeing.

Her response to the movement, when it became possible for her to respond, suggests something about what being witnessed did on the interior. She knew it was happening. She found ways to communicate with the people paying attention. The specific terrain question is: what does it do to someone whose family and managers failed them, when strangers get it right? What does that reorganize? What does it leave unreorganized?`,
  },
  {
    label: 'The memoir and the act of naming',
    body: `The Woman in Me was published in 2023. It is, by the standards of celebrity memoir, unusually direct about what actually happened. She names the specific behaviors of the people around her. She names what the conservatorship felt like from the inside. The act of naming, in public, in her own words, after decades of having her narrative controlled by others, is a terrain event independent of the book's contents.

The question a Terrain Map would hold is not whether the memoir is accurate or complete, but what the act of writing it did. Whether the naming resolved anything on the interior, or whether naming the wound and being believed is a different thing from the wound resolving. The distinction matters because it is possible to produce an extraordinarily accurate account of your own history without the interior reorganizing around that account.

What the public record since the memoir's publication suggests is someone who is genuinely freer than she was, and also still navigating terrain that thirteen years of conservatorship and a childhood as a manufactured artifact left behind. Both things can be true. The map would want to know which parts of the terrain have actually shifted and which parts are still running the old architecture, just without the legal enforcer.`,
  },
]

export default function BritneySpearMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Britney Spears</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Singer, performer, one of the best-documented cases of autonomy suppression in public life</p>

          <div className="bg-teal-900/30 border border-teal-700/40 rounded-xl px-5 py-4 mb-8">
            <p className="text-teal-300 text-sm leading-relaxed">
              This is a public example map created from publicly available information only. Britney Spears has not participated in a ReLoHu session and has not reviewed or endorsed this content. This is a cartographic exercise, not a clinical assessment or diagnosis.
            </p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: The Woman in Me (2023), court testimony made public during the conservatorship proceedings, published interviews, and the extensive public record of her career from 1998 to the present. All inferences are based on material she has made publicly available.
          </p>
        </div>
      </section>

      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/CduA0TULnow"
              title="Britney Spears"
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
            One of the most documented cases of autonomy suppression and the specific wound it produces: the belief that one's own judgment cannot be trusted. The conservatorship made legal what was already true in her architecture. What makes her terrain worth mapping is not the suffering but the specificity. The shape of what happened to her is unusually legible.
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
              &larr; Back to Example Maps
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
