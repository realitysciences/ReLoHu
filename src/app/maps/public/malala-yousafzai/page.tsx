import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Malala Yousafzai: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Malala Yousafzai, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'The wound',
    body: `In October 2012, Malala Yousafzai was shot in the head by a Taliban gunman on her school bus in Pakistan. She was fifteen. She had been publicly advocating for girls' education in the Swat Valley, writing an anonymous blog for the BBC and speaking openly at a time when doing so was dangerous.\n\nShe survived. The recovery was long and difficult. She emerged from it into a different life: medically evacuated to Birmingham, England, reconstructed through surgery, and then returned to the world as a global symbol before she had fully returned to herself as a teenager.`,
  },
  {
    label: 'The wound-to-mission conversion',
    body: `The conversion of the wound into mission happened with unusual speed and completeness. Within two years she had given a speech to the United Nations, published I Am Malala, and become the youngest Nobel Peace Prize laureate in history at seventeen. The world organized her experience into a symbol before she had time to be anything else.\n\nThis is worth noting carefully. The conversion is genuine. The mission is real. She did not perform a recovery she had not undergone. But the speed at which the particular person became the universal symbol is itself a terrain feature. There was not much space between the shooting and the symbol for something slower and less legible to happen.`,
  },
  {
    label: 'What the symbol requires and what it costs',
    body: `Being a symbol requires a specific kind of performance: consistency, legibility, universality. The symbol must be recognizable across cultures and contexts. The particular texture of the person underneath, the things that are hers and not universal, have to be managed carefully to protect the symbol's function.\n\nShe has done this with skill and apparent genuine conviction. She is also, clearly, a specific person with humor, opinions, and an interior life that the symbol register does not fully accommodate. Her memoir shows this: there is warmth and particularity in it that the speeches do not always have room for. The particular person is present. She has just learned to move between registers.`,
  },
  {
    label: 'The integration question',
    body: `The integration appears clean from the outside. That is exactly why it is worth mapping. When integration is this complete, when the wound and the mission have been so thoroughly synthesized, the question is what is underneath the synthesis.\n\nNot because the synthesis is a performance or a lie. But because integration is never total. There is always something underneath the meaning-making: the felt texture of the original experience before it became meaningful, the parts that still don't fit the narrative, the cost of carrying a symbol's weight for a decade while also being a young woman.\n\nThe thing underneath the integration is not accessible from the outside with any certainty. But a map would want to know: when she is alone and not performing conviction, what is present?`,
  },
  {
    label: 'What ReLoHu would reach',
    body: `A ReLoHu session would be interested in the gap between Malala the symbol and the particular person who was on that bus. Not because they are in conflict, but because they are different things and living as both simultaneously is its own kind of experience worth mapping.\n\nWhat does it feel like to be the person that an event made you, when you were fifteen, when you were still becoming someone? What is the relationship between who she was before October 2012 and who she is now? Is there a version of that person who is not yet the Nobel laureate, who is not yet the symbol, who is just the girl who wanted to go to school? Where does she live in the current terrain?\n\nBuilt from publicly available material only: I Am Malala (2013), We Are Displaced (2019), and published speeches and interviews. No private sessions or personal contact of any kind. Cartographic exercise, not clinical assessment.`,
  },
]

export default function MalalaYousafzaiMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Malala Yousafzai</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Education activist, Nobel Peace Prize laureate</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: I Am Malala (2013), We Are Displaced (2019), the Nobel Prize lecture (2014), and published interviews and speeches. No private sessions, personal contact, or non-public information of any kind. Cartographic exercise, not clinical assessment or diagnosis.
          </p>
        </div>
      </section>
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            Wound converted to mission with unusual cleanness. Worth mapping precisely because the integration appears so complete. What is underneath that?
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
