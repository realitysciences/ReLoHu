import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Naomi Osaka: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Naomi Osaka, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'The quiet person',
    body: `Osaka is, by her own repeated description, introverted and quiet. She grew up between Japan and the United States, with a Haitian-American father and a Japanese mother, and has described feeling like she didn't fully belong in either culture. She became famous in a sport where press performance, constant visibility, and the projection of a legible public persona are mandatory professional requirements.\n\nThe mismatch between who she is and what the sport requires is the foundational terrain feature. She did not choose celebrity as a life project. She chose tennis. Celebrity arrived as a consequence, and it arrived before she had developed any relationship to it.`,
  },
  {
    label: 'The platform that arrived before she chose it',
    body: `She won the US Open in 2018 at twenty, defeating Serena Williams in a match that became a spectacle because of Williams' dispute with the chair umpire. Osaka won and cried, and the narrative around the moment was shaped by everything except her actual experience of winning. She was handed an enormous platform at a moment she had not prepared for and in circumstances that made the platform feel complicated before she had even held it.\n\nSubsequent wins added to the platform without simplifying it. She became one of the highest-paid female athletes in the world. She became a voice on racial justice. She lit the Olympic cauldron in Tokyo. Each of these expansions of visibility arrived as an extension of tennis success, not as something she had negotiated or chosen.`,
  },
  {
    label: 'The cost of excellence performed for others',
    body: `In 2021 she withdrew from the French Open rather than participate in mandatory post-match press conferences. She cited the mental health cost: she described the press conference format as putting athletes in situations designed to produce self-doubt and distress, and said she had experienced depression since her 2018 US Open win.\n\nThe public response was polarized. What matters for a terrain map is how precisely she named the cost. She did not say she was tired or burned out. She identified a specific mechanism: the mandatory public exposure, for a person who had not chosen public life as a vocation, was genuinely harmful. The naming was accurate. The precision of the naming is itself a terrain signal.`,
  },
  {
    label: 'Identity and belonging',
    body: `She has spoken about not feeling fully Japanese or fully American, about being received differently in different contexts, about the complexity of representing Japan at the Olympics while being partly Haitian-American. The belonging question runs across multiple registers: national, racial, cultural.\n\nIn tennis specifically she has also described feeling the pressure of representing something larger than herself, of being a symbol before she had fully settled into a person. The parallel with Malala is worth noting: public figures who become symbols before they have finished becoming themselves face a specific kind of terrain complexity.`,
  },
  {
    label: 'What ReLoHu would reach',
    body: `A ReLoHu session would want to sit with the quiet person who got handed a very loud platform. Not the achievements, which are real and extraordinary, but the experience of being inside them. What does it actually feel like to be Naomi Osaka watching Naomi Osaka be Naomi Osaka? Is there a version of herself that exists apart from the ranking and the platform and the brand? Where does she live when none of that is present?\n\nShe named the cost in 2021 with unusual precision. That precision suggests a person with significant interior awareness who has not had many places to bring it. That is exactly what a map is for.\n\nBuilt from publicly available material only: published interviews, the Netflix documentary Naomi Osaka (2021), and public statements. No private sessions or personal contact of any kind. Cartographic exercise, not clinical assessment.`,
  },
]

export default function NaomiOsakaMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Naomi Osaka</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Professional tennis player, four-time Grand Slam champion</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: the Netflix documentary Naomi Osaka (2021), published interviews, and public statements including her 2021 French Open withdrawal statement. No private sessions, personal contact, or non-public information of any kind. Cartographic exercise, not clinical assessment or diagnosis.
          </p>
        </div>
      </section>
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto md:ml-[3.5rem] md:pl-6">
          <p className="text-slate-600 leading-relaxed italic">
            The cost of excellence performed for others. What happens when a quiet person is handed a very loud platform, and finally names the price.
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
