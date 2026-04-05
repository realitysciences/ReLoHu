import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Zendaya: A ReLoHu Terrain Map | ReLoHu',
  description: 'A psychological mapping of the interior landscape of one of the most-watched people alive: the Scaffold, the Controlled Ascent, and what it looks like when the architecture finally meets the recognition.',
  openGraph: {
    title: 'Zendaya: A ReLoHu Terrain Map',
    description: "A psychological mapping of Zendaya's interior landscape: the Scaffold, the Controlled Ascent, and what it looks like when the architecture finally meets the recognition.",
  },
}

const sections = [
  {
    label: 'The scaffold',
    body: `Most child actors who make it out intact have something structural behind them that held while everything else bent. For Zendaya, that structure is unusually visible in the public record: two parents who stayed present, who traveled with her, who did not disappear into the machinery of her career. Her mother was a school teacher. Her father worked custodial jobs at the California Shakespeare Theater and later managed her career personally. Neither parent had a stake in her fame separate from her wellbeing.\n\nThis is rarer than it sounds. The entertainment industry has a well-documented tendency to restructure families around the child's earning potential. What is notable about Zendaya's early record is that the inversion did not happen. The family remained the container; the career fit inside it rather than the other way around.\n\nThe scaffold is not just parents. It is the specific quality of being unconditionally held while being publicly exceptional. Most people who achieve at her level from that young carry a wound from the transaction of it, the implicit cost of the achievement. The record suggests she did not pay that price. The question a Terrain Map would ask is what that kind of unconditional holding produces as a structural feature, not a character trait.`,
  },
  {
    label: 'The controlled ascent',
    body: `She was fourteen when she fired her management. The account, corroborated in multiple interviews, is that she identified a misalignment between what the managers wanted for her and what she wanted for herself, and acted on it. At fourteen. With enough clarity to initiate a separation and enough structural support to survive it.\n\nThis is the first legible data point on what will become a defining terrain feature: control exercised not as anxiety management but as self-authorship. By her mid-twenties she had a production company. She had approval clauses. She had creative involvement in projects that most actors at her career stage accept passively. The ascent from Disney Channel to Euphoria to Dune is not a series of lucky escalations. It is a managed progression by someone who has been making decisions about her own trajectory since early adolescence.\n\nWhat is worth mapping is the relationship between this control and the scaffold beneath it. The capacity to fire your management at fourteen requires a belief that you will survive the decision. That belief has to come from somewhere. It does not come from ambition. Ambition would have kept the managers and maneuvered around them. The belief that you can act on what you know and be okay afterward: that comes from the scaffold.`,
  },
  {
    label: 'The capsule',
    body: `She is one of the most famous people alive. The Spider-Man franchise. Euphoria. Dune. The fashion presence. The cultural ubiquity that reached a kind of saturation point in 2024 that very few people in any era reach. And yet: the private life is largely intact.\n\nThe relationship with Tom Holland was kept quiet for years while both were among the most photographed people on the planet. When it became public, it became public on her terms. The family remains substantially off the record. The interior life, the one a Terrain Map would reach, is not available in the way that it is available for subjects who have written memoirs, done years of podcasts, or metabolized their inner world in public. She is extensively documented and substantially withheld.\n\nThis is a structural feature, not a strategy. Strategies get slips. What she has maintained has held under conditions that break most containment: global fame at a young age, a relationship with another globally famous person, years of press cycles, social media. The capsule is intact because it is architectural. The question a Terrain Map would sit with is what the capsule protects and whether the person inside it knows the answer to that question.`,
  },
  {
    label: 'The craft anchor',
    body: `Rue Bennett in Euphoria required her to inhabit a character in active addiction with a specificity that is not achievable through craft alone. It requires something that meets the material. She has said in interviews that she drew on nothing personal in that performance, that she accessed it through research and imagination. That account may be accurate. It is also consistent with what a well-anchored person with a strong scaffold does: they can go very dark and come back, because the anchor holds.\n\nMalcolm and Marie was shot in twelve days during COVID lockdown, on a skeleton crew, with almost no infrastructure. It is two people in a house having a real fight. The conditions required sustained emotional exposure with nowhere to offload it. She did not fracture. She produced some of the most technically demanding work of her career under conditions that would have broken less anchored people.\n\nThe craft is not just a vocation. In her terrain, it functions as a stabilizing mechanism. When the external noise gets loudest, the work is the place where she knows what she is doing and why. That is worth noting because it is different from ambition. Ambitious people pursue the work. People for whom the work is an anchor return to it.`,
  },
  {
    label: 'The year of Zendaya',
    body: `In 2024 she appeared in two of the year's biggest films, both in the same calendar window. Challengers required her to learn tennis well enough to pass as a competitive player and to carry a structural tension across two hours that never fully releases. Dune: Part Two placed her in a franchise that had already been running for years without her as its center. She became its center anyway. The ESPY athletes of the year award went to her, as an actress, for the physicality of her Challengers performance. An actress winning an athletes' award is a category rupture.\n\nWhat is worth noting about this year from a terrain perspective is not the achievement but what the achievement reveals. The architecture was already there. The scaffold, the controlled ascent, the capsule, the craft anchor: all of it was built and in place before 2024. What 2024 did was produce an external event that matched the internal structure. The recognition finally caught up to the architecture.\n\nA Terrain Map would want to know what that feels like from the inside. Not the success, but the specific texture of being seen at scale when you have been building in relative quiet for fifteen years. Whether the capsule remains intact. Whether the anchor holds differently now. Whether something new is possible from this position that was not possible before. That is the map that has not been made.`,
  },
]

export default function ZendayaMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Zendaya</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Actress, producer, former Disney Channel performer</p>

          <div className="bg-teal-900/30 border border-teal-700/40 rounded-xl px-5 py-4 mb-8">
            <p className="text-teal-300 text-sm leading-relaxed">
              This is a public example map created from publicly available information only. Zendaya has not participated in a ReLoHu session and has not reviewed or endorsed this content. This is a cartographic exercise, not a clinical assessment or diagnosis.
            </p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: published interviews (Vogue, GQ, WSJ Magazine, Variety), press cycles for Euphoria (2019, 2022), Spider-Man: No Way Home (2021), Challengers (2024), and Dune: Part Two (2024). All inferences are based on material she has made publicly available.
          </p>
        </div>
      </section>

      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/tQfQt4HtFW0"
              title="Zendaya"
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
            She is one of the best-documented cases of someone who achieved at the highest level from a very young age and came out structurally intact. The question a Terrain Map wants to answer is not how she succeeded but what made survival possible, and what the architecture beneath the ascent actually looks like.
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
