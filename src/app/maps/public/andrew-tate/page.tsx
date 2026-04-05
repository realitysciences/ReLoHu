import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Andrew Tate: A ReLoHu Terrain Map | ReLoHu',
  description: 'A psychological mapping of Andrew Tate: the absent exceptional father, the body as proof, and what the masculinity framework is actually doing on the interior.',
  openGraph: {
    title: 'Andrew Tate: A ReLoHu Terrain Map',
    description: 'What the Tate architecture is actually built on: the idealized absent father, the wound that required a world in which he is always dominant, and the terrain beneath the persona.',
  },
}

const sections = [
  {
    label: 'The origin architecture',
    body: `Emory Tate was a chess master who left his family and largely disappeared from his children's lives. What he left behind was an idealized image of a brilliant, exceptional man, and two sons who would spend their adult lives in various forms of chasing and refusing that image. Andrew Tate has spoken about his father with something that functions as reverence, crediting him with the philosophical framework that underlies the Tate persona. The absent father who is retroactively granted authority is a specific terrain feature. It produces a particular kind of wound: not the wound of being abandoned by someone ordinary, but the wound of being abandoned by someone exceptional, which means the abandonment has to be metabolized as a choice the child was not worth staying for, or as proof that exceptional people operate by different rules.

Tate chose the second interpretation. This is not a conscious decision. It is a terrain response. If exceptional people do not have to stay, then becoming exceptional is the only position from which the abandonment is survivable. The entire structure follows from that.

The family moved from Washington D.C. to Luton, England, after the parents separated. Luton in the 1990s for a mixed-race American kid was a specific kind of social exposure. Not warmth. He has described being bullied, being socially marginal, having to learn to fight to survive the environment. The combination of an idealized absent father and a hostile social environment produced someone who would spend his adult life building a system in which he is inarguably dominant.`,
  },
  {
    label: 'The body as proof',
    body: `Kickboxing solved a specific problem. The body is something no one can take from you, and dominance established physically is harder to argue with than dominance established socially or intellectually. He won multiple world kickboxing championships. The record is real. Whatever else is constructed about the Tate persona, the athletic achievement is not.

What is worth noting from a terrain perspective is the function the body serves in his architecture. He is not simply athletic. He is specifically invested in being physically superior to other men. The distinction matters. General athletic achievement is about mastery. The investment in being superior to other men is about a specific relational dynamic: the one in which he is the dominant figure in any room.

The body as proof of worth is a common terrain feature in men whose early environments were threatening. What is specific to his case is the degree to which the proof has to be continuously renewed. One championship is not enough. The training continues. The challenge to other men continues. This is not ambition. This is maintenance of a structure that is doing real psychological work.`,
  },
  {
    label: 'The control vector',
    body: `The webcam business, Hustlers University, the move to Romania, the social media architecture: these are all expressions of a single terrain feature, which is the drive to construct an environment in which he controls all the variables.

Romania is worth noting specifically. He has been open about choosing it partly because of its legal environment and partly because of his ability to operate with fewer constraints. This is not unusual as a preference. What is terrain-relevant is what it reveals about his relationship to institutional authority. He does not negotiate with systems. He relocates until he finds a system he can operate around. This is a structural response to an early life in which the systems around him were not reliably safe or fair.

The financial architecture he built, the coaching content, the membership models, are all variations on the same structure: a world in which Andrew Tate is the authority, the source of truth, and the one from whom others seek permission and approval. He built the father position for himself, which is exactly what someone does when they spend their childhood in the position of the child waiting for the father to return.`,
  },
  {
    label: 'The masculinity framework as wound response',
    body: `The specific content of what he teaches is less interesting as philosophy and more interesting as terrain. The framework he promotes, which positions emotional expression as weakness, vulnerability as liability, and dominance as the only stable position, is a map of exactly what his early wound required him to build.

A child who is abandoned by an exceptional father, raised in a hostile social environment, and whose primary mode of safety-building was physical dominance, will construct a worldview in which those adaptive responses are elevated to universal principles. This is not cynical. It is how terrain works. The wound produces the adaptive strategy. The adaptive strategy, repeated and refined, becomes a philosophy. The philosophy gets taught to others who have similar wounds and find it speaks to something real in their experience.

The degree to which his framework has found purchase, particularly among young men, is not evidence that the framework is correct. It is evidence that a significant number of young men have wound structures similar enough to his that his adaptive response resonates as truth. That is a different thing. And it is, from a terrain perspective, the most interesting thing about him: not whether his ideas are right, but what kind of interior landscape produces this particular map and calls it universal.`,
  },
  {
    label: 'The arrest and what it revealed',
    body: `When Romanian authorities detained him in December 2022, the circumstances included a detail that became widely reported: that a pizza box visible in a social media video may have helped confirm his location. He had posted the video in response to a public exchange with Greta Thunberg.

The pattern is terrain-revealing in a specific way. The compulsion to make himself visible in order to prove his invulnerability, to do so at moments of maximum provocation, and to be caught in the exposure: this is not stupidity. This is a wound pattern running on its own logic. He cannot stop demonstrating that he cannot be touched, because the belief that he cannot be touched is doing structural work. The moment he stops performing invulnerability, something underneath becomes visible. The Luton kid. The son the chess master left.

A Terrain Map would want to know what the period of detention and legal proceedings produced on the interior. Public record shows continued performance of dominance. What is almost certainly also present, and invisible in the public record, is the specific texture of someone whose entire structure is built around the belief that he is untouchable, confronting a situation in which he is very tangibly touchable. That is the part of the map that has not been made.`,
  },
]

export default function AndrewTateMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Andrew Tate</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Kickboxer, media personality, founder of Hustlers University</p>

          <div className="bg-teal-900/30 border border-teal-700/40 rounded-xl px-5 py-4 mb-8">
            <p className="text-teal-300 text-sm leading-relaxed">
              This is a public example map created from publicly available information only. Andrew Tate has not participated in a ReLoHu session. This is a psychological cartography exercise, not a clinical assessment, diagnosis, or legal commentary of any kind.
            </p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: published interviews, podcast appearances, his own social media content, and biographical reporting available in the public record. All inferences are based on material he has made publicly available.
          </p>
        </div>
      </section>

      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/VGWGcESPltM"
              title="Andrew Tate"
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
            He is one of the clearest cases of a wound architecture that got mistaken for a philosophy. The absent exceptional father, the hostile social environment, the body as proof: these are legible as terrain. What makes him worth mapping is not the controversy but the specificity. The structure is not difficult to read. What is interesting is how completely it drives everything.
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
