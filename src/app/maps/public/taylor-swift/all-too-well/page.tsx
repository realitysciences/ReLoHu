import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'All Too Well (10 Minute Version): Song Map | ReLoHu',
  description: 'A ReLoHu Song Map of Taylor Swift\'s All Too Well (10 Minute Version): mapping the psychological terrain encoded in the song\'s structure, imagery, and context of release.',
}

const sections = [
  {
    label: 'The scarf and the method',
    body: `The song opens with a specific domestic object: a scarf, left at someone's sister's house, not returned. This is not an accident of songwriting. It is a declaration of methodology.\n\nThe scarf cannot be argued with. You cannot tell someone they don't remember a scarf. It is the smallest possible anchor against the largest possible threat: being told that what you experienced did not happen the way you experienced it. The specificity is the whole point. Every detail that follows (the refrigerator light, the autumn leaves, the September) is in service of the same claim: this is exactly what happened. I was there. I remember it.`,
  },
  {
    label: 'The age gap as power gradient',
    body: `The 2012 version circles the power differential without naming it. The 10-minute version names it plainly: "a grown man who didn't want me." He was 29. She was 20.\n\nThe line is not primarily about the relationship. It is about the specific texture of being fully earnest with someone who holds your earnestness lightly, who can afford to misplace what you cannot afford to lose. The hurt encoded in the song is not just romantic disappointment. It is the particular injury of overextending toward someone who has no equivalent stake in the exchange. You were all in. They were curious.`,
  },
  {
    label: 'The bridge as the whole thesis',
    body: `The bridge, "I remember it, all too well," is not the emotional climax of this song. It is the argument.\n\nEvery verse has been building toward a single claim: I have an accurate account of what happened and I am not going to pretend otherwise to make you more comfortable. The bridge is where the song stops performing emotional complexity and states its position. It is about memory as contested territory. One person in this relationship has been suggesting, implicitly, that her account is unreliable, colored by youth, by intensity, by the mess of feeling. The bridge refuses that framing. I was there. I remember it. This version is the correct version.\n\nThis is not specific to this relationship. It is Taylor Swift's central psychological project, expressed more clearly here than anywhere else in her catalog.`,
  },
  {
    label: 'Why the 10 minutes were held back',
    body: `The shorter version, released in 2012, cut a crucial verse: the most direct articulation of the power dynamic, the most explicit indictment. She held it for a decade.\n\nThen, in 2021, as part of re-recording her catalog to reclaim ownership from Scooter Braun's acquisition, she released Red (Taylor's Version), including the full ten-minute cut. The timing collapsed the song's content and the act of releasing it into a single statement. The song is about someone refusing to let her account be taken from her. The re-recording project is about someone refusing to let her catalog be taken from her. She released them together.\n\nThis is not coincidence. This is someone who understands, at a very high level, that the work and the context are both part of the record. The song was finally released in full precisely because the act of releasing it in full meant something specific about ownership, reclamation, and refusing to be edited.`,
  },
  {
    label: 'The metacognitive signature',
    body: `There is a line in the song that contains the whole of her interior structure: "You kept me like a secret, but I kept you like an oath." She was more present to this relationship than he was. She was all in while he was hedging. She knows this. She has known it long enough to find the exact compression.\n\nBut the line also reveals the witness position she always holds. Someone who is purely inside an experience does not narrate it this cleanly while it is still happening. She was in the refrigerator light and she was already writing it. This is the split that runs through everything she makes: maximum emotional exposure, maximum observational precision, simultaneously. She never fully surrenders and she never fully holds back. The result is work that sounds like intimacy and reads like testimony.`,
  },
  {
    label: 'What the song is as a terrain artifact',
    body: `"All Too Well (10 Minute Version)" is not her most complex song. It is her most unguarded map of how her wound works.\n\nThe wound is having your account of events taken from you. The defense is documentation: relentless, specific, unchallengeable. The shadow is that the documentation is also preemptive: she is already writing the record before the relationship has ended, which means she never quite inhabits the relationship without the witness present. The song demonstrates all three in ten minutes.\n\nFor ReLoHu purposes, it is the richest single artifact in her catalog. Not because it is her best songwriting, Folklore probably is, but because it is the piece where the terrain is least concealed by the craft.`,
  },
]

export default function AllTooWellMapPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-16 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <Link href="/maps/public/taylor-swift" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors">
            ← Taylor Swift: Terrain Map
          </Link>
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Song Map · Taylor Swift</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-2">All Too Well</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">10 Minute Version · Red (Taylor's Version) · 2021</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: the song itself (both the 2012 version and the 2021 ten-minute version), the accompanying short film directed by Swift, and interviews in which she has discussed the song, the relationship, and the decision to release the extended version as part of Red (Taylor's Version). This is a cartographic reading of the terrain encoded in the song, not a clinical assessment of any person.
          </p>
        </div>
      </section>

      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/tollGa3S0o8"
              title="Taylor Swift - All Too Well (10 Minute Version)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ==================== WHY THIS SONG ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            A song can be a terrain artifact. "All Too Well" is the piece in Swift's catalog where the wound is least concealed by the craft, where the documentation impulse, the epistemic injury, and the metacognitive split are all visible in the same ten minutes. It is also the piece where the context of its release became inseparable from its content.
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
              href="/maps/public/taylor-swift"
              className="inline-flex items-center gap-2 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-medium rounded-full px-8 py-4 text-sm transition-all"
            >
              ← Taylor Swift: Terrain Map
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
