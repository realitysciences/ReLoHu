import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Bashar: Voice Map | ReLoHu',
  description: 'A ReLoHu Voice Map of Bashar . mapping the terrain of the channeled voice itself: its architecture, its reach, and the places where the map runs out.',
}

const sections = [
  {
    label: 'What a voice map is',
    body: `This is not a Terrain Map of a person. It is a map of an output . the voice that has spoken through Darryl Anka since 1983, calling itself Bashar. Whether the voice originates from an extraterrestrial consciousness, from Anka's subconscious, or from some third structure is not the question this map asks.\n\nThe question is: what does the voice produce? What terrain does it cover? Where does it reach with unusual precision? And where does it stop . not because it has nothing to say but because its architecture cannot go there?`,
  },
  {
    label: 'The core framework',
    body: `Bashar's teaching is organized around a small number of principles, repeated with variations across thousands of sessions. The central one: follow your excitement to the best of your ability with no insistence on a specific outcome. Everything else . the reality-as-reflection model, the belief-creates-experience claim, the parallel realities framework . is scaffolding around this central instruction.\n\nThe instruction is not trivial. For most people, the question "what excites me right now?" is genuinely difficult to answer. They have spent decades making decisions based on obligation, fear, expectation, or habit. The instruction to follow excitement is, at its core, a permission structure . permission to treat your own desire as a valid compass. For people who have never had that permission, hearing it stated with absolute certainty by a voice that does not waver is a real experience. It lands.`,
  },
  {
    label: 'Where the voice reaches',
    body: `Bashar is unusually good at reframing. Someone asks a question from inside their stuck place . "I don't know what to do with my career," "I can't stop worrying" . and the voice identifies the hidden assumption inside the question and inverts it. The reframe is often genuinely useful. The person leaves the exchange seeing their situation differently.\n\nThis is a real skill, regardless of its source. The capacity to hear someone's stated problem and identify the structural assumption underneath it is the core of most effective therapeutic work. Bashar does it quickly, with confidence, and without the relational complexity that slows the process down in human-to-human exchange. There is no therapeutic alliance to build, no history to navigate, no transference to manage. The voice arrives, reframes, and moves on.\n\nThe efficiency is real. The cost of the efficiency is also real, and it is the subject of the next section.`,
  },
  {
    label: 'Where the voice stops',
    body: `Bashar does not sit with pain. This is the single most important structural observation about the voice.\n\nWhen someone in the audience brings genuine suffering . grief, confusion, the experience of being lost in a way that does not have a clean reframe . the voice responds with a framework. It offers the belief-creates-reality model. It offers the excitement compass. It offers a reframe. What it does not offer is the experience of being with someone in their pain without trying to move them out of it.\n\nThis is the precise boundary of the voice's terrain. Bashar can tell you why you are suffering (you hold a belief that is out of alignment with your true self). Bashar cannot witness the suffering itself without converting it into a problem to be solved. The witnessing register . the one that says "I see this, I am staying with this, I am not trying to change it" . is absent from the voice's architecture.\n\nIn ReLoHu terms, this is not a flaw. It is a map boundary. Every map has edges. The Bashar map reaches reframing, permission, and structural clarity. It does not reach the territory where the person needs to be held in their experience rather than redirected away from it. That territory exists. The voice does not go there.`,
  },
  {
    label: 'The certainty as architecture',
    body: `The absolute certainty with which Bashar speaks is not incidental to the teaching. It is the teaching. The content could be delivered tentatively . "you might consider following your excitement" . and it would not land the same way. The certainty is what creates the permission. It is the voice of someone (or something) that has no doubt, and in the presence of no doubt, the audience's own doubt temporarily relaxes.\n\nThis is powerful. It is also the mechanism by which the voice avoids being questioned. Certainty at this level does not invite dialogue. It invites either acceptance or rejection. You either resonate with Bashar or you do not. There is no middle ground offered, no space for "I partially agree but have a question about this part." The certainty forecloses the conversational register where real complexity lives.\n\nA Terrain Map would note this without judgment: the certainty is both the gift and the limitation. It opens one door (permission, clarity, reframe) and closes another (complexity, ambiguity, the relational mess of not knowing).`,
  },
  {
    label: 'The relationship between the voice and the man',
    body: `The most interesting terrain question about Bashar is not about Bashar. It is about the gap between the voice and the person who produces it.\n\nBashar is certain. Darryl Anka, in interviews as himself, is careful. Bashar speaks with authority about the structure of all reality. Anka describes the channeling process with something closer to wonder . he does not fully claim to understand what happens when the voice arrives. Bashar does not hesitate. Anka hesitates.\n\nThis gap is the terrain that matters most. It suggests that the voice provides something the man does not have access to in his own register: a mode of being in which doubt, uncertainty, and the vulnerability of not knowing are entirely absent. Whether that mode is channeled from elsewhere or constructed from within, its function is the same . it is the part of the self that can speak without the weight of being a self.\n\nReLoHu would not try to collapse this gap. It would map it. The gap between who you are and the voice you produce when the conditions are right . that gap is some of the most important terrain a person has.`,
  },
]

export default function BasharMapPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-16 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <Link href="/maps/public/darryl-anka" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors">
            ← Darryl Anka: Terrain Map
          </Link>
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Voice Map · Darryl Anka</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-2">Bashar</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Channeled voice · 1983–present</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: publicly available channeling session recordings and transcripts (1983–present), published Q&A compilations, and Anka's own descriptions of the channeling process. This map takes no position on whether channeling is real. It reads the voice as a terrain artifact . mapping what it produces, where it reaches, and where it stops. This is a cartographic exercise, not a clinical assessment, endorsement, or dismissal.
          </p>
        </div>
      </section>

      {/* ==================== WHY THIS VOICE ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            This is not a map of a person. It is a map of a voice . treated as its own terrain artifact, the way a song or a body of writing can be mapped for what it reveals about the structure that produced it. The question is not whether Bashar is real. The question is what the voice reaches and where it stops.
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
              href="/maps/public/darryl-anka"
              className="inline-flex items-center gap-2 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-medium rounded-full px-8 py-4 text-sm transition-all"
            >
              ← Darryl Anka: Terrain Map
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
