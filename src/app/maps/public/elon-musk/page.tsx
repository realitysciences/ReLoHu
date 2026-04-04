import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Elon Musk: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Elon Musk, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'Origin architecture',
    body: `Musk grew up in Pretoria, South Africa. His account of his childhood, documented in Walter Isaacson's biography and multiple interviews, includes serious bullying, profound isolation, and a father he has described as "a terrible human being." He was small, bookish, and by his own account physically attacked on multiple occasions severe enough to require hospitalization. He describes his father Errol Musk as a source of significant psychological harm.\n\nHe was also, from an early age, organized around intellectual escape. Books, computers, and later programming became the territory where he was competent and safe. The move from South Africa to Canada to the United States was in part a flight from an environment he could not control. The pattern of exit as a response to intolerable conditions begins early.`,
  },
  {
    label: 'Control architecture as wound response',
    body: `The pattern across Tesla, SpaceX, X, Neuralink, and The Boring Company is consistent: these are systems in which Musk is the center of decision-making, the irreplaceable variable, the person without whom nothing functions. That is not an accident of corporate structure. It is a specific psychological architecture.\n\nA boy who experienced total powerlessness in environments he could not exit or change becomes a man who builds environments of total influence. The companies are not just businesses. They are the opposite of childhood. Every domain he enters, he restructures around himself as the essential person. This is not megalomania as randomness. It is megalomania as precision instrument.`,
  },
  {
    label: 'The relationship to public opinion',
    body: `He is simultaneously the most visible person on the internet and someone who appears genuinely wounded by criticism. That combination is the hallmark of a person who has not fully metabolized the early material. The need for approval and the need to dominate are both present, pulling in different directions.\n\nHis public behavior on social media follows a recognizable pattern: provocation, reaction, engagement with critics in ways that suggest the criticism landed, escalation. For someone with the resources to ignore public opinion completely, he appears unable to. The wound is still responsive.`,
  },
  {
    label: 'The relational register',
    body: `Musk's relational history is extensively documented and consistently characterized by rupture. Multiple marriages, estrangement from children, public conflicts with business partners and employees. He has described himself as someone who finds social situations difficult and who is more comfortable with work than with people.\n\nWhat the terrain map would be interested in: not the number of relationships but the pattern within them. The early powerlessness that produced the control architecture does not disappear inside a relationship. It reorganizes. Someone whose primary wound is loss of control will find relationships, which are inherently uncontrollable, particularly difficult terrain.`,
  },
  {
    label: 'What ReLoHu would reach',
    body: `A ReLoHu session would want to sit with the boy in Pretoria who was physically attacked and could not make it stop. Not as a wound to fix but as a living structure. What does control actually feel like from the inside? When everything is working, when he is at the center of multiple systems of global influence, is there a version of safety that arrives? Or does the threshold keep moving?\n\nThe ambition is real and the achievements are real. So is the cost. A map would be interested in both, and in the relationship between them.\n\nBuilt from publicly available material only: Walter Isaacson's biography Elon Musk (2023), Ashlee Vance's biography (2015), and published interviews. No private sessions or personal contact of any kind. Cartographic exercise, not clinical assessment.`,
  },
]

export default function ElonMuskMapPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />
      <section className="pt-32 pb-16 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <Link href="/maps/public" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors">
            &larr; Example Maps
          </Link>
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Terrain Map · Public Figure</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Elon Musk</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Entrepreneur, CEO of Tesla, SpaceX, X</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: Walter Isaacson biography Elon Musk (2023), Ashlee Vance biography (2015), and multiple published interviews. No private sessions, personal contact, or non-public information of any kind. Cartographic exercise, not clinical assessment or diagnosis.
          </p>
        </div>
      </section>
      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/Rni7Fz7208c"
              title="Elon Musk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            Control architecture as a response to early powerlessness. The man who builds systems of total influence while describing a childhood of total isolation.
          </p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="md:ml-12 space-y-14">
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
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed mb-6 max-w-lg">
            This map was built from inference and public record. A session produces the same quality of attention applied to you, with full information rather than reconstructed signal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/relohu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-4 text-sm transition-all hover:shadow-lg hover:shadow-teal-100">
              Book a Free Orientation Call
            </a>
            <Link href="/maps/public" className="inline-flex items-center gap-2 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-medium rounded-full px-8 py-4 text-sm transition-all">
              &larr; Back to Example Maps
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
