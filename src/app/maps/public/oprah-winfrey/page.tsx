import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Oprah Winfrey: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Oprah Winfrey, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'Origin architecture',
    body: `Winfrey was born in rural Mississippi to unmarried teenage parents. She was raised by her grandmother in poverty for her early years, then moved to live with her mother in Milwaukee. She experienced sexual abuse at the hands of family members beginning at age nine and has talked about this publicly for decades. She gave birth to a premature baby at fourteen who died. By any measure, a brutal early formation.\n\nShe has been one of the most open public figures about her early life. She has talked about it on her show, in interviews, in her own productions. The openness is genuine. It is also worth noting that talking about the early life is different from being fully seen within it. The question of what witnessing she received as a child is largely answered by the record: very little.`,
  },
  {
    label: 'Witnessing as vocation',
    body: `What she did with that material is one of the most complete wound-to-vocation conversions in public life. The Oprah Winfrey Show ran for twenty-five years and was, at its best, a sustained practice of making people feel seen. She asked questions that went beneath the surface. She made guests cry in ways that felt like relief rather than exposure. She held space for disclosure at a scale no one had attempted before.\n\nThe connection to the origin architecture is not subtle. A child who was not adequately witnessed becomes an adult who makes witnessing her life's work. The vocation grew directly from the wound. That is the pattern. What is unusual is the scale and the duration.`,
  },
  {
    label: 'The cost of the practice',
    body: `Decades of making others feel seen while the question of being fully seen yourself remains open will find expression somewhere. Winfrey has been publicly open about her relationship with food and weight as a lifelong struggle, describing it across multiple decades as something she has fought, managed, lost to, and returned to repeatedly.\n\nReLoHu would note: the body keeps a register. The specific texture of what she experiences in relation to food is her material to name, not ours. What is mappable from the outside is the structure: a person who spent her professional life in the giving register, witnessing others, and whose interior landscape found expression in a domain where the dynamic was different.`,
  },
  {
    label: 'The particular and the universal',
    body: `One of the interesting tensions in her work is the movement between the specific and the universal. At her best she made the specific feel universal: "your story is everyone's story." At times the reverse happened: the particular texture of a specific person's experience got organized into a legible narrative for a mass audience.\n\nThis is not a criticism of what she built. It is an observation about the format. Television requires legibility. What the format could not always hold was what ReLoHu is most interested in: the part of the person's experience that cannot be made legible to anyone else, the particular texture that belongs only to them.`,
  },
  {
    label: 'What ReLoHu would reach',
    body: `A ReLoHu session would want to sit with the nine-year-old who was not protected. Not as a trauma to process but as a living structure. What does being seen by one person, in private, feel like from the inside? Is it different from being witnessed by millions? Which one actually lands?\n\nShe has built something extraordinary. The map underneath it is also worth having. Those are not competing observations. The wound that produced the vocation is not resolved by the vocation's success. It is still there, still shaping things.\n\nBuilt from publicly available material only: published interviews, What I Know For Sure (2014), and decades of publicly available documentary record. No private sessions or personal contact of any kind. Cartographic exercise, not clinical assessment.`,
  },
]

export default function OprahWinfreyMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Oprah Winfrey</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Media executive, talk show host, philanthropist</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: published interviews spanning four decades, What I Know For Sure (2014), and the public documentary record of The Oprah Winfrey Show. No private sessions, personal contact, or non-public information of any kind. Cartographic exercise, not clinical assessment or diagnosis.
          </p>
        </div>
      </section>
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto md:ml-[3.5rem] md:pl-6">
          <p className="text-slate-600 leading-relaxed italic">
            Witnessing as vocation. Someone who metabolized a brutal early life into a decades-long practice of making others feel seen, and the complexity of what that costs.
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
