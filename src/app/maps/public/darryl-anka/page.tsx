import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Darryl Anka: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Darryl Anka, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'The terrain before the voice',
    body: `Darryl Anka was working as a special effects artist in Hollywood in the early 1980s when he began channeling. Before that point, his public record is thin . a VFX career, an interest in science fiction and contact narratives, a UFO sighting he describes as the catalytic event. The thinness of the pre-channeling record is itself a terrain marker. The man who became Darryl-who-channels-Bashar has very little documented interior life from before the channeling began.\n\nWhat can be inferred from the available material: he was someone whose interior life was rich enough to produce a fully articulated alternate voice, and whose external life . a technical career in a collaborative industry . did not provide sufficient structure for that interior richness to be expressed. The channeling did not arrive in a vacuum. It arrived in a gap.`,
  },
  {
    label: 'The wound question',
    body: `ReLoHu does not require the subject to identify a wound, but wounds organize terrain, and the question is worth asking: what does the channeling solve for Darryl Anka that nothing else in his life was solving?\n\nThe most legible answer from the public record is permission. Bashar says things Darryl Anka does not say. Bashar speaks with absolute certainty about the nature of reality, the structure of consciousness, the mechanics of excitement as a compass. Bashar does not hedge, does not qualify, does not perform humility. Darryl Anka, in interviews conducted as himself, is notably quieter, more careful, more deferential.\n\nThe channeling creates a structure in which a specific kind of authority becomes available . an authority that would be socially untenable if claimed in one's own voice. You cannot stand in front of an audience and say "I know the structure of reality and I will now tell it to you." You can stand in front of an audience and say "this entity is speaking through me." The channel is the permission structure. The voice is the voice Darryl cannot use as Darryl.`,
  },
  {
    label: 'The split and what it protects',
    body: `The Darryl/Bashar split is the most architecturally interesting feature of the terrain. It is not a simple on/off . Darryl enters a state, Bashar speaks, Darryl returns. The relationship between them, as described by Anka himself, is more textured than that: he describes awareness during the channeling, a sense of stepping aside rather than disappearing, a collaborative quality.\n\nFrom a terrain perspective, this split accomplishes something very specific: it separates the person from the claim. If the teachings are wrong or harmful, it is Bashar who said them. If someone is disappointed or hurt, they were interacting with the entity, not the man. The split creates a buffer zone between Darryl Anka's actual self and the consequences of what the voice says.\n\nThis is not an accusation of deception. It is a structural observation. Many people build equivalent buffer zones . through professional personas, through institutional roles, through the carefully maintained distance between who they are and what they do. Anka's version is simply more visible because it has a different name.`,
  },
  {
    label: 'The certainty register',
    body: `Bashar operates in a register of absolute certainty that is almost unique in the public record. There is no "I think," no "in my experience," no "one way to look at this." The frameworks are presented as facts about reality, delivered with the confidence of someone describing the weather.\n\nThis certainty is part of what makes the channeling compelling to audiences. Most people live in doubt. They are uncertain about their choices, their direction, their worth. Bashar offers the experience of being in the presence of someone who is not uncertain about anything. The relief of that experience . of being told "follow your excitement" by a voice that has no doubt . is real and should not be dismissed.\n\nBut certainty at this level is also a terrain marker. In ReLoHu terms, absolute certainty is almost always a defense structure. It forecloses the vulnerability of not knowing, which is the vulnerability that makes genuine contact possible. Bashar can tell you the structure of reality. Bashar cannot sit with you in the experience of not knowing who you are. The certainty that makes the teaching powerful is the same certainty that makes the teaching unreachable as a relational act.`,
  },
  {
    label: 'The audience and what they are actually receiving',
    body: `Bashar's audience is, from a terrain perspective, not primarily interested in the content of the teachings. The content is a framework . follow your excitement, reality is a reflection of beliefs, you are all one consciousness . and the framework is not original. Versions of it appear in Abraham-Hicks, in A Course in Miracles, in various New Thought traditions.\n\nWhat the audience is receiving that they cannot get elsewhere is the experience of being addressed with total attention and absolute confidence by a voice that appears to know them. The Q&A format . which is the core of most Bashar events . creates a moment of direct address. You ask a question. The voice answers. For a few minutes, the most certain being in the room is focused entirely on you.\n\nThis is, structurally, a witnessing experience. It is also the experience that Darryl Anka himself may have needed most . the experience of being fully received . delivered through a structure that makes it available to others while the channel himself stands slightly to the side of it.`,
  },
  {
    label: 'What ReLoHu would reach',
    body: `A ReLoHu Terrain Map of Darryl Anka would not take a position on whether channeling is real. That question is irrelevant to the map. What the map would reach is: what was the interior architecture before the voice arrived? What specific need did the channeling address that was not being addressed by anything else? What is the relationship between Darryl's actual self and the voice he produces . not metaphysically, but psychologically? What does it cost him to sustain the split? What would happen if the voice stopped?\n\nThe last question is the one the public record does not answer and the one a Terrain Map would be most interested in. The voice has been present for over forty years. It has organized his career, his relationships, his public identity, his income. The question of who Darryl Anka is without Bashar is not a challenge to the channeling. It is the terrain question that matters most.`,
  },
]

export default function DarrylAnkaMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Darryl Anka</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Actor, filmmaker, channel for Bashar</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: published Bashar channeling sessions (1983–present), interviews with Anka conducted as himself (including Gaia, New Realities, and podcast appearances), his public statements about the channeling process, and biographical material from his film and VFX career. No private sessions, personal contact, or non-public information of any kind. This map takes no position on the nature or validity of channeling. This is a cartographic exercise, not a clinical assessment or diagnosis.
          </p>
        </div>
      </section>

      {/* ==================== WHY THIS PERSON ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            Anka is worth mapping precisely because the usual question . is the channeling real? . obscures the more interesting one: what does the channeling do for the person who channels? The map works regardless of the answer. The terrain is the man, not the metaphysical claim.
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

      {/* ==================== BASHAR MAP CALLOUT ==================== */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Voice Map</p>
          <h2 className="text-xl font-medium text-white mb-3">Bashar</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Mapping the channeled voice as its own terrain . not to validate or dismiss the channeling but to read the architecture of what the voice produces. What it reaches, what it avoids, and where it stops.
          </p>
          <Link
            href="/maps/public/darryl-anka/bashar"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-4 text-sm transition-all hover:shadow-lg hover:shadow-teal-900"
          >
            Read the voice map →
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
