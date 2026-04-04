import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Kanye West: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Kanye West, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'Origin architecture',
    body: `Kanye West was born in Atlanta and raised in Chicago by his mother Donda after his parents divorced when he was three. His father was largely absent. Donda West was an English professor educated, culturally engaged, deeply invested in her son. She was the primary witness of his early life and, by his own account, the person who most consistently believed in him before the world did.\n\nHis early career is a record of systematic rejection. He was a producer trying to become a rapper at a moment when the rap industry did not take him seriously in that role. He made beats for everyone, was told he didn't have the credibility to be on the mic, and kept going anyway. The College Dropout (2004) was built in and around that wound the experience of being underestimated, of the system telling you who you are allowed to be.`,
  },
  {
    label: 'The loss of the primary witness',
    body: `Donda West died in November 2007 following complications from cosmetic surgery. She was 58. Kanye was 30.\n\nThis is the central event of his terrain. Not because it broke him people lose parents and continue but because of what she represented. She was the person who held the fullest picture of who he was before any of it: the Chicago kid, the aspiring producer who couldn't get a deal, the boy who needed someone to see him clearly. When she died, that witnessing function went dark.\n\nEverything after 2007 has the texture of someone who lost their primary mirror and has been looking for a replacement at enormous scale ever since. The grandiosity accelerated. The public pronouncements became more totalizing. The need to be seen by audiences, by other artists, by history itself became structurally louder.`,
  },
  {
    label: 'Grandiosity as wound-covering',
    body: `The declarations "I am a god," "the greatest artist of all time," "I am the greatest human being" are worth taking seriously as terrain data rather than dismissing as ego. When someone describes themselves as the greatest of all time with that frequency and intensity, the right question is: what does the alternative to that belief feel like?\n\nThe self that is not the greatest has a particular texture. Given the origin architecture the boy whose father left, whose talent was consistently dismissed, who had to fight for every seat at the table that alternative self is probably not merely ordinary. It is probably unbearable. The grandiosity is not confidence. It is a specific architecture that keeps certain feelings at a distance.\n\nThis is a common structure. What is uncommon is the scale at which it operates and the degree to which the public has been made to witness it.`,
  },
  {
    label: 'The collapsed boundary between art and self',
    body: `Most artists maintain some separation between the work and the person. Criticism of the work can be received without it being an attack on the core self. In Kanye's case, that boundary is thin or absent. The art and the self are the same thing. An attack on the music is an attack on the man. A Grammy loss is not a disappointment it is evidence of institutional conspiracy against him specifically.\n\nThis makes both the art and the person fragile in specific ways. The art is extraordinary this is not in dispute. But its connection to the self means it cannot be held lightly. It has to be defended absolutely, because the alternative is a self that is not worth defending.`,
  },
  {
    label: 'The public unraveling',
    body: `The hospitalization in 2016, the political statements and presidential campaign, the antisemitic remarks, the Twitter and social media spirals these are not separate events requiring separate explanations. They are the same terrain becoming visible under pressure, in public, in real time.\n\nWhat is notable is not that these things happened but how legibly they map onto the foundational architecture. The loss of a primary witness. The grandiosity as covering. The collapsed boundary. The need for scale. Each public episode fits the map.\n\nThis is not analysis in place of compassion it is a recognition that the pattern is consistent and that consistent patterns usually have specific origins. The map does not explain away the harm caused. It explains the structure that produced it.`,
  },
  {
    label: 'What ReLoHu would reach',
    body: `A ReLoHu session would want to stay with the three-year-old whose father left and the thirty-year-old who lost his mother not as tragedies to process but as living structures. What does it feel like to be seen, really seen, by someone whose seeing you trust? Has that happened since 2007? What is the relationship between the need for enormous audiences and the specific quality of witnessing that only one person ever provided?\n\nThe art is extraordinary. The terrain underneath it is also mappable. Those are not competing observations. The map would not make the art smaller it would make the person more visible. That is, by his own account, what he has been trying to achieve since the beginning.\n\nThis map is built from public record only: albums, interviews, documentary films, and his own public statements across two decades. No private sessions, personal contact, or clinical assessment of any kind.`,
  },
]

export default function KanyeWestMapPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />
      <section className="pt-32 pb-16 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <Link href="/maps/public" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors">
            ← Example Maps
          </Link>
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Terrain Map · Public Figure</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Kanye West</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Rapper, producer, designer</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: albums including The College Dropout (2004) through Donda (2021), documentary films including Jeen-Yuhs (2022), and published interviews across two decades. No private sessions, personal contact, or non-public information of any kind. This is a cartographic exercise, not a clinical assessment or diagnosis.
          </p>
        </div>
      </section>
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            Grandiosity as wound-covering. The collapsed boundary between artistic vision and self. Probably the most documented real-time psychological unraveling in public life and one of the most legible terrain maps available.
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
              ← Back to Example Maps
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
