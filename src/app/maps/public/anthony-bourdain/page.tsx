import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Anthony Bourdain: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Anthony Bourdain, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'Origin architecture',
    body: `Bourdain grew up in New Jersey and Provincetown, Massachusetts, with summers in France visiting his maternal grandparents. His father died relatively young. He has described a fairly stable middle-class childhood, notable mostly for the absence of obvious deprivation. The wound is not in the early material the way it is for some figures on this list.\n\nWhat is present from early on is restlessness. He describes, in Kitchen Confidential and elsewhere, a hunger for experience that ordinary life could not satisfy. He found kitchens and heroin around the same time in his early twenties, and has described both as answering the same need: the need for intensity, for presence, for something that made him feel actually there.`,
  },
  {
    label: 'Restlessness as organizing vector',
    body: `The entire career is organized around going. Kitchen Confidential (2000) was about the going within kitchens, the midnight world of professional cooking where the adrenaline is constant. A Cook's Tour, No Reservations, Parts Unknown: each show is structured around arrival, immersion, departure. The moving is as important as the arriving. What he was looking for in each new place is the right question.\n\nHe was extraordinarily good at arriving somewhere and finding what was real. He could sit with a fisherman in Vietnam or a grandmother in Puglia and extract the specific texture of their world. He witnessed others with unusual accuracy. The question of what he found when he stopped moving is where the terrain gets complicated.`,
  },
  {
    label: 'The seeker who could not be filled',
    body: `He named this explicitly, in interviews and in his writing. The restlessness was not resolving. He had seen more of the world than almost anyone alive and the need to see more had not diminished. That is not an appetite. An appetite can be satisfied. What he describes is a structure that eating and moving and drinking and seeking could address temporarily but not resolve.\n\nHe also described, particularly in later years, depression. The person who appeared on screen as endlessly curious and vitally present was also managing, privately, a terrain that was darker and less resolved than the public record suggested. His closest collaborator Ottavia Busia and others who knew him have described this gap between the public persona and the private experience.`,
  },
  {
    label: 'Witnessing as vocation and its limits',
    body: `He was one of the great witnesses of his generation. Parts Unknown in particular was built around a specific kind of attention: arriving somewhere without a predetermined narrative, sitting with people, eating what they ate, and coming away with something true about the place and its people. That is not a small thing. It is what ReLoHu is organized around, applied to geography and culture rather than the individual interior.\n\nThe irony is significant. A man who witnessed others with that quality of attention, whose vocation was being present to what was actually there, found himself unable to locate enough ground under his own feet. The witnessing outward was extraordinary. The witnessing inward was harder.`,
  },
  {
    label: 'What ReLoHu would reach',
    body: `A ReLoHu session would want to sit with the quality of the restlessness itself. Not the places it took him but the feeling it was responding to. What is the gap that moving filled? What happened in the quiet moments between departures? What did he actually want that none of it delivered?\n\nHe died by suicide in Strasbourg in June 2018 while filming. This map is written with the awareness that it is a retrospective one, and that the terrain it describes was not resolved in the time available. The map does not explain the death. It describes a structure that was present throughout the life, and that the life's work did not fully address.\n\nBuilt from publicly available material only: Kitchen Confidential (2000), Medium Raw (2010), Parts Unknown (2013-2018), and published interviews. No private sessions or personal contact of any kind. Cartographic exercise, not clinical assessment.`,
  },
]

export default function AnthonyBourdainMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Anthony Bourdain</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Chef, author, television host (1956-2018)</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: Kitchen Confidential (2000), Medium Raw (2010), Parts Unknown (2013-2018), and published interviews. No private sessions, personal contact, or non-public information of any kind. Cartographic exercise, not clinical assessment or diagnosis.
          </p>
        </div>
      </section>
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            The seeker who could not be filled. Restlessness as both gift and fate, and what happens when the moving stops.
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
