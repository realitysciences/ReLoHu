import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'William Shatner: A ReLoHu Terrain Map | ReLoHu',
  description: 'A psychological mapping of William Shatner: the Kirk problem, the survival drive, the death of Nerine, and what the Blue Origin flight at age 90 revealed about the interior.',
  openGraph: {
    title: 'William Shatner: A ReLoHu Terrain Map',
    description: 'Still performing at 90. The Kirk problem, four marriages, the death of Nerine, and a moment in a spacecraft where he wept and could not fully explain why. That is the terrain.',
  },
}

const sections = [
  {
    label: 'The Kirk problem',
    body: `He played Captain Kirk from 1966 to 1969, then in films for another twenty years. The character became more famous than the person who played him. This is not unusual in acting. What is specific to his case is the degree to which the character became the primary cultural reference for his entire existence, and the specific quality of that character: the decisive, charming, unflappable commander whose confidence is total and whose authority is never genuinely questioned.

Living inside a character like that for that long, and then being most publicly identified with that character for the rest of your life, creates a specific terrain problem. The character's confidence is absolute. The person's interior is not. The gap between what the public projects onto you and what you actually carry inside is a wound that is difficult to name precisely because the projection is so large and so positive.

He has been open, in interviews accumulated over decades, about the complexity of the Star Trek years and the years after them. The post-Kirk period in the 1970s was professionally difficult. He could not get work that was not in Kirk's shadow. The gap between the character's grandeur and the person's circumstances was significant and documented. What a Terrain Map would want to know is what that gap produced on the interior, and whether the subsequent decades of work, including Denny Crane in Boston Legal, which earned him two Emmy awards, were a resolution of the Kirk problem or a repetition of it with different material.`,
  },
  {
    label: 'The survival drive',
    body: `He published a memoir at 91. He still does convention appearances. He still acts. He is still working with an energy that is not fully explained by professional ambition at this stage of life. Something else is running.

The survival drive, the compulsion to remain relevant, visible, and productive into extreme old age, is a terrain feature that is worth examining on its own terms. In some people it is vanity. In others it is a genuine relationship with the work that sustains them. In others it is the terror, not fully examined, of what happens if they stop: the loss of the structure that has organized their identity since they were young.

His public record suggests a combination of genuine vitality and something that functions as an inability to rest. The constant production of content, books, music, appearances, projects, has a driven quality that goes beyond enthusiasm. A Terrain Map would want to know what the stopping would feel like, and whether that question has ever been fully faced.`,
  },
  {
    label: 'The relational record',
    body: `Four marriages. The first three ended in divorce. The fourth, to Nerine Kidd, ended in 1999 when she drowned in their swimming pool. She had a documented history of alcoholism. He had left the house that evening. He found her when he returned.

He has spoken about this loss in several interviews over the years, with the specific quality of someone who has lived with guilt that cannot be fully resolved, not guilt in the simple sense but the particular weight of the question that cannot be answered: what if I had been there? That question does not have an answer. Its irresolvability is part of what makes it a terrain feature rather than a resolved grief.

The relational record more broadly, four long relationships, multiple public estrangements including from his Star Trek castmates, the complicated dynamics around his cast relationships and the famous George Takei conflict, suggests someone whose interior relationship to sustained closeness is more complex than the public persona of the charming captain implies. The Kirk persona does not carry complexity in relationships. The person behind it clearly does.`,
  },
  {
    label: 'Space at 90: the Blue Origin flight',
    body: `In October 2021, he became the oldest person to fly in space. The Blue Origin flight lasted ten minutes. When he landed and stepped out of the capsule, he was visibly overwhelmed. He wept. He spoke, somewhat disjointedly, about the fragility of the thin blue line of atmosphere, about how everything he had seen in space made him feel the loss of Earth rather than the wonder of space.

He has described the experience in subsequent interviews as unexpectedly devastating rather than exhilarating. He had expected awe. What he encountered was grief. Specifically, grief at the thinness of what protects life, and grief at how little time he felt he had to appreciate it.

This is one of the most psychologically revealing moments in his public record. Not because of the specific content of what he said, but because of its quality: undefended, not Kirk, not performing, not charming. A 90-year-old man who had just done something extraordinary, weeping in front of cameras, because the experience had cracked something open that his lifetime of performance had not cracked. A Terrain Map would start there.`,
  },
  {
    label: 'What the terrain would reach',
    body: `The map that has not been made is the one that sits with the space footage and works backward. What was cracked open in that moment? What had the decades of performance, the Kirk persona, the survival drive, the constant production, been protecting? What is the specific texture of a man who spent 60 years being one of the most recognized human beings on the planet and describes his most honest emotional moment as grief at the fragility of life?

The wound beneath the survival drive is not legible from the public record. Something is running that produces the compulsion to keep going, keep working, keep being visible at 90. It is not simply vitality. It is something the interior needs that only work provides.

His Jewish background, his Canadian origins, his relationship to identity and belonging before Kirk and after Kirk: these are the entries into a terrain that the decades of performance have covered. The space footage is the gap in the cover. That is where the map would go.`,
  },
]

export default function WilliamShatnerMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">William Shatner</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Actor, author, Captain Kirk &middot; went to space at 90</p>

          <div className="bg-teal-900/30 border border-teal-700/40 rounded-xl px-5 py-4 mb-8">
            <p className="text-teal-300 text-sm leading-relaxed">
              This is a public example map created from publicly available information only. William Shatner has not participated in a ReLoHu session and has not reviewed or endorsed this content. This is a cartographic exercise, not a clinical assessment or diagnosis.
            </p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: published memoirs including Boldly Go (2021) and Up Till Now (2008), published interviews across six decades, footage of the Blue Origin flight and post-flight statements, and the extensive public record of his career and personal life. All inferences are based on material he has made publicly available.
          </p>
        </div>
      </section>

      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/OI9MWun4ul0"
              title="William Shatner"
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
            The space footage is one of the most undefended moments in his public record: a 90-year-old man who had just done something extraordinary, weeping because the experience cracked open something his lifetime of performance had not cracked. The map starts there and works backward through six decades of Kirk, four marriages, the death of Nerine, and a survival drive that is still running.
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
