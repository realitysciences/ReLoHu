import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Taylor Swift: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Taylor Swift, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'The primary wound',
    body: `The throughline in Taylor Swift's public record is not heartbreak, though heartbreak is the surface material. It is the experience of having your account of events disbelieved, rewritten, or taken from you. The wound is epistemic: being told that what you perceived did not happen the way you perceived it, that you do not own your own story.\n\nThis surfaces with unusual clarity in the Scooter Braun situation — when the masters she recorded as a teenager were sold to someone she had publicly named as a source of harm, without her knowledge or consent. Her response was not to absorb the loss. She re-recorded every album. Six years of work, not to replace the originals but to make them hers. The act was so specific it becomes a terrain marker: she would rather do six years of labor than accept a version of events she did not authorize.`,
  },
  {
    label: 'The documentation impulse',
    body: `She writes everything down. Before it can be rewritten, before the other person can offer a different account, before memory degrades. Every album is a contemporaneous record. The diary-as-preemptive-proof.\n\nThis is not simply songwriting as therapy. It is something more particular: documentation as the only reliable form of self-defense available to someone who has learned that memory is contested territory. She trusts the record more than she trusts the relationship. The song is the version that cannot be argued with because she wrote it at the time.\n\n"All Too Well" is the extreme case — a ten-minute inventory of specific, unchallengeable details. The scarf. The sister's house. The refrigerator light. The details are not there to be evocative. They are there as evidence. You cannot tell someone they don't remember a scarf.`,
  },
  {
    label: 'The relatability architecture and what it costs',
    body: `She built a persona of total accessibility — the girl next door, writing in her bedroom, giving you the specific detail so you feel like you're inside her life. This is genuine. It is also a very sophisticated form of control.\n\nThe specificity she offers (the scarf, the dancing in the refrigerator light) is precisely the detail she has chosen to release. It creates intimacy and simultaneously forecloses other kinds of access. You feel seen by her precision without ever quite reaching what the precision is protecting. The vulnerability is real; the fortress inside it is also real.\n\nThe cost: a genuine self that is very difficult to locate beneath the layers of metatextual awareness. She has described, obliquely, the experience of losing herself in relationships — searching for a stable self beneath the shapeshifting. The relatability project requires constant calibration, and constant calibration makes it hard to know when you've stopped performing and started being.`,
  },
  {
    label: 'The vindication arc',
    body: `There is a structural pattern that runs across eras with unusual consistency: exile, endurance, return, proof. She is attacked or diminished or told she is wrong — about her music, her relationships, her ambitions, her worth. She absorbs it, continues working, and then produces something that makes the prior dismissal look like ignorance.\n\nThis is not revenge. It is more specific than revenge. It is the compulsion to make the record show, eventually, that she was right. The re-recordings are the clearest case: not just reclaiming ownership but doing the work again, better, in her own name, making the original versions feel like rough drafts she has now improved upon. The arc always ends the same way: I was here. I made this. You cannot have it.\n\nThis pattern is psychologically coherent with the primary wound. If the wound is having your account taken from you, the repair is producing an account that cannot be taken. Which is also why the work never fully resolves: the next threat will arrive, and the arc will start again.`,
  },
  {
    label: 'The metacognitive split',
    body: `One of the most distinctive features of her terrain is that she is always already aware she will turn this into a song. The experience and its documentation happen almost simultaneously. She arrives at the refrigerator light and she is both in it and already writing it.\n\nThis split is her greatest tool and her deepest limitation. The tool: she never fully loses herself. No matter how disorienting the relationship or the public attack, there is a part of her that is watching, taking notes, maintaining a witness position. She does not collapse. The limitation: she cannot fully surrender to an experience because the witness is always present. The song becomes preemptive. She is grieving the relationship in the song before the relationship has fully ended.\n\nThis creates the characteristic texture of her best work: the feeling of intense present-tense pain narrated from an emotional distance that is impossible in real time. "All Too Well" sounds like someone bleeding out and also like someone who has survived long enough to remember the exact color of the light.`,
  },
  {
    label: 'Shadow: the metatextual loop',
    body: `The metatextual layer in her work has become so dense that there are now audiences who engage entirely with the Easter egg game — decoding references, predicting album content, finding her face in the crowd. She built this deliberately. It is also slowly eating the work.\n\nWhen every detail is potentially a clue, the audience stops receiving the detail as a detail and starts processing it as a move in a game. The scarf stops being a scarf. The wound stops being a wound. It becomes content. She has, over time, trained her audience to engage with her at exactly the level that makes it impossible for the work to land the way it was designed to.\n\nThis is a shadow in the precise ReLoHu sense: a strength that has metastasized into a problem. The documentation impulse — the preemptive record — has produced an audience that can no longer receive the record without also decoding it. The fortress she built to protect the territory has made the territory very hard to access, including for her.`,
  },
]

export default function TaylorSwiftMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Taylor Swift</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Singer-songwriter, producer, re-recorder of her own catalog</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: thirteen studio albums, associated short films and visual albums, Miss Americana (2020 documentary), TIME Person of the Year interview (2023), numerous published interviews from 2006–2024, and the public record of the Scooter Braun masters acquisition. No private sessions, personal contact, or non-public information of any kind. This is a cartographic exercise, not a clinical assessment or diagnosis.
          </p>
        </div>
      </section>

      {/* ==================== WHY THIS PERSON ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            Swift is one of the most extensively self-documented artists alive. Across two decades and thirteen albums she has produced a near-continuous record of her interior life — not as confession but as proof. The wound that organized everything is specific and legible. So is the defense structure she built around it.
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
          <h2 className="text-xl font-medium text-white mb-3">All Too Well (10 Minute Version)</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            The most terrain-dense piece in her catalog. A single song that contains almost everything in this map — the documentation impulse, the epistemic wound, the metacognitive split — compressed into ten minutes of specific detail. It also has a context of release that makes the song and the act of releasing it the same statement.
          </p>
          <Link
            href="/maps/public/taylor-swift/all-too-well"
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
