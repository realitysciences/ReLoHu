import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Simone Biles: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Simone Biles, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'The body as instrument',
    body: `Biles has spent her life in a sport that treats the body as a precision instrument to be optimized, trained past its limits, and displayed for external judgment. The sport selects for children who are willing and able to subordinate the body's signals to the demands of performance. That is not a flaw of gymnastics; it is the condition of entry.\n\nShe entered the sport as a child and became extraordinary within it. The body she developed is capable of things no other human body has done at competitive level. That is also the body that was harmed by Larry Nassar over the course of years, while the institution responsible for its protection allowed the harm to continue.`,
  },
  {
    label: 'The performance of invincibility',
    body: `For most of her career, Biles performed superhuman competence. The GOAT. The person who makes the impossible routine. The one who smiles at the end. That performance is partly genuine: she is, objectively, the best who has ever done what she does. It is also a structure. The smile at the end of the hardest routine in history is not only an expression of joy. It is a statement about what is possible and required.\n\nThe performance of invincibility is what the sport, the institution, the audience, and the brand all required of her. She delivered it, consistently, for years. What was underneath the delivery is what the map is interested in.`,
  },
  {
    label: 'The 2021 Olympics and the act of stopping',
    body: `At the 2020 Tokyo Olympics, held in 2021, Biles withdrew from the team final and several individual events. She cited the twisties: a dissociation between spatial awareness and body that gymnasts fear, in which the body in the air loses orientation. At the level she operates, the twisties are not a minor inconvenience. They are a genuine physical danger.\n\nShe also named the mental health cost explicitly. She said she had to protect her mind and her body. She said the mental health of athletes matters. The public response was polarized in ways that were themselves revealing about what audiences expect from elite performers.\n\nWhat matters for a terrain map is the structural significance of the act. She stopped. She put her body's signal above the institution's requirements. For someone trained from childhood to override the body's signals, that is a specific kind of threshold crossing. Something changed.`,
  },
  {
    label: 'What changed and what it cost',
    body: `She returned to competition in 2023 and 2024, winning further medals at the Paris Olympics. The narrative became one of comeback and resilience. That narrative is not wrong. It is also not complete.\n\nWhat the map would be interested in is not the return but the texture of the relationship to the body before and after. What does it feel like to be Simone Biles inside a body that has been simultaneously her greatest asset and a site of harm? What changed in the relationship to performance after 2021? Those questions are mostly off the public record, and they are the ones worth having language for.`,
  },
  {
    label: 'What ReLoHu would reach',
    body: `A ReLoHu session would want to sit with the child who learned to override her body's signals in service of performance, and with the adult who, at the highest possible stakes, finally listened to them. Not as a recovery narrative but as a terrain question. What is the relationship between excellence and safety for someone with her history? What does the body actually want, when nobody is watching and nothing is required?\n\nThe achievement is extraordinary and real. The map underneath it is worth having. Those are not competing things.\n\nBuilt from publicly available material only: published interviews, the Netflix documentary Simone Biles Rising (2024), Courage to Soar (2016), and public statements around the 2021 withdrawal. No private sessions or personal contact of any kind. Cartographic exercise, not clinical assessment.`,
  },
]

export default function SimoneBilesMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Simone Biles</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Olympic gymnast, most decorated American gymnast in history</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: Courage to Soar (2016), the Netflix documentary Simone Biles Rising (2024), congressional testimony, and published interviews. No private sessions, personal contact, or non-public information of any kind. Cartographic exercise, not clinical assessment or diagnosis.
          </p>
        </div>
      </section>
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto md:ml-[3.5rem] md:pl-6">
          <p className="text-slate-600 leading-relaxed italic">
            The body as both instrument and limit. What it looks like when someone finally stops performing invincibility, and what made that act possible.
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
