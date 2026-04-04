import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Prince Harry: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Prince Harry, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'The second son structure',
    body: `In institutional terms, the second son exists as backup. The role is defined primarily by what he is not: not the heir, not the primary. The identity is built around a negative definition. That structure either gets filled from the outside (the party prince, the playboy, the wild one) or from the inside, which is harder and takes longer.\n\nHarry grew up inside one of the most scrutinized institutions in the world with a role that had no specific function except continuity insurance. His brother William had a job. Harry had proximity to the job. The difference is more significant than it sounds.`,
  },
  {
    label: 'The grief that was not allowed to be grief',
    body: `His mother Diana died in a car crash in Paris in August 1997. Harry was twelve. The grief was both private and global simultaneously: a twelve-year-old lost his mother, and the entire world was watching him do it.\n\nHe has described, in subsequent interviews and in his memoir, being required to walk behind the coffin in public without visible distress. The institution had rules about emotional expression that did not accommodate a child's loss. The grief was suppressed at the moment it most needed expression, and he has spent decades since managing what that suppression produced.\n\nHe has said publicly that he did not fully grieve his mother's death until his early thirties, when he went to therapy. That twenty-year gap is significant terrain data.`,
  },
  {
    label: 'The attempt at self-authorship',
    body: `His memoir Spare (2023) is one of the most explicit attempts at public self-authorship by a member of a royal family in modern history. He named things that institutions rely on staying unnamed. He described experiences he was expected to absorb silently. He attributed specific actions to specific people.\n\nWhat is notable about the book, from a terrain map perspective, is how legible the wound is and also how undigested some of it still is. The grief, the institutional suppression, the sense of having been used and abandoned by the same system that formed him: all of it is present. The analysis of it is still in progress. The book is both the map and the wound. He has not fully separated them yet. That is not a criticism. That is what in-progress self-authorship looks like.`,
  },
  {
    label: 'Inherited trauma and its reorganization',
    body: `He has spoken at length about the mental health cost of royal life, about the ways the institution suppresses vulnerability, and about the inherited patterns he recognized in himself. He is doing something unusual: a person with significant public resources using those resources to name, publicly, the psychological cost of an institution most people cannot access or critique.\n\nThe inherited trauma question is also present. Diana herself was in an institution that did not know what to do with her particular texture. Harry watched that dynamic from childhood. The pattern he inherited is not only grief. It is the specific experience of being a person inside a system that cannot hold you.`,
  },
  {
    label: 'What ReLoHu would reach',
    body: `A ReLoHu session would want to sit with the twelve-year-old walking behind the coffin. Not as a trauma to process but as a foundational structure. What was learned about grief in that moment? What was learned about institutions, about the relationship between feelings and their expression, about what is allowed?\n\nThe self-authorship project is real and valuable. The map would be interested in what precedes the narrative. Before the explanation of what happened, there is the experience of it. That territory, the felt texture of being Harry before he had language for it, is where the most useful information lives.\n\nBuilt from publicly available material only: Spare (2023), the ITV interview with Tom Bradby (2023), the Oprah interview (2021), and related public statements. No private sessions or personal contact of any kind. Cartographic exercise, not clinical assessment.`,
  },
]

export default function PrinceHarryMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Prince Harry</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Duke of Sussex, author, mental health advocate</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: Spare (2023), the ITV interview with Tom Bradby (2023), the CBS interview with Oprah Winfrey (2021), and published interviews. No private sessions, personal contact, or non-public information of any kind. Cartographic exercise, not clinical assessment or diagnosis.
          </p>
        </div>
      </section>
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto md:ml-[3.5rem] md:pl-6">
          <p className="text-slate-600 leading-relaxed italic">
            Identity rupture in public. The second son navigating institutional belonging, inherited trauma, and a very loud attempt at self-authorship.
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
