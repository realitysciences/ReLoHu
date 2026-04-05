import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Elon Musk + Donald Trump: A ReLoHu Relationship Map | ReLoHu',
  description: 'A psychological mapping of what happens when two wound structures that cannot share the center try to occupy the same center. What each brings, what the collision produces, and what the relationship cannot hold.',
  openGraph: {
    title: 'Elon Musk + Donald Trump: A ReLoHu Relationship Map',
    description: 'Two men whose entire architecture is organized around being the most important person in the room, in the same room. A terrain analysis of the collision.',
  },
}

const sections = [
  {
    label: 'Two wound structures entering the room',
    body: `Elon Musk grew up in Pretoria, South Africa, in a household where emotional warmth was not the primary offering. He was severely bullied; there is documented physical violence. He was, by his own account, profoundly lonely. He left South Africa as soon as he could. The move was not incidental. It was a structural escape from an environment in which he had no power. Everything he built afterward, the companies, the platforms, the ambitions at civilizational scale, can be read as the systematic construction of a world in which he is never again the person without power in the room.

Donald Trump grew up in Jamaica, Queens, the son of Fred Trump, a demanding father for whom achievement was expected but approval was metered carefully. The specific texture of growing up under a father who measures worth against performance and withholds full approval is a particular kind of wound. It produces someone who spends the rest of their life seeking the approval that was never fully given, in arenas large enough that the achievement cannot be questioned. The buildings. The brand. The presidency. Each escalation is readable as a response to a father who could not be satisfied.

These are not the same wound. But they share a structural feature: both men built architectures of dominance as responses to early experiences of powerlessness or conditional worth. And both architectures have the same requirement: they need to be the center. The most important person. The one the room is organized around.`,
  },
  {
    label: 'What Musk brings to the dynamic',
    body: `His entire operating mode is organized around being the most important mind in any system he enters. He acquires companies and reorganizes them around his authority. He joins conversations and makes himself the subject. He has enormous difficulty with any position that requires genuine subordination to another person's authority and judgment.

What he was looking for in the political alliance that formed in 2024 was not subordination. It was partnership: a position in which he could operate with significant authority inside a structure that benefited from his resources and reach. The specific appeal of Trump as an ally is that Trump's brand of authority is theatrical and personal rather than institutional, which means it can theoretically coexist with someone who operates through systems and leverage rather than through personal dominance.

The problem is that this reading of Trump requires Trump to be a different kind of person than he is. Musk's wound architecture requires him to be, ultimately, the most important figure in any alliance. Trump's wound architecture makes that impossible to allow.`,
  },
  {
    label: 'What Trump brings to the dynamic',
    body: `There is only one center in his world, and it is him. This is not arrogance in the ordinary sense. It is structural. His entire terrain is organized around being the singular, irreplaceable figure: the only one who can fix it, the only one who really knows, the only one the loyalty is ultimately owed to. The pattern with every close ally in his public record is consistent: proximity, utility, then removal or diminishment when the ally becomes too prominent or too independent.

The wound beneath this pattern is the father who never gave full approval. The adult response is the construction of a world in which no one else can occupy the position he needs to occupy. Sharing the spotlight is not a preference. It is a structural impossibility.

What Trump brings to the relationship with Musk is access, legitimacy, and a platform. What he cannot bring is genuine co-centrality. The alliance works as long as Musk is visibly in service of Trump's agenda. The moment Musk's prominence begins to read as competitive rather than supportive, the alliance is in structural danger.`,
  },
  {
    label: 'The collision point',
    body: `Two people whose entire architecture requires them to be the most important person in the room cannot share a room indefinitely without the architecture producing friction. The question is not whether the friction will emerge but what form it takes.

The specific collision point in this terrain is visibility. Both men have enormous public presence. When Musk's actions or statements draw attention that is not clearly in service of Trump's agenda, the wound architecture on Trump's side registers it as competition. When Trump's authority begins to constrain Musk's ability to operate as the dominant figure in his own domain, the wound architecture on Musk's side registers it as subordination.

Neither man has a strong track record of managing this kind of structural friction through sustained cooperation. Trump's record is a series of alliances that end when the ally becomes too prominent or too independent. Musk's record is a series of departures from structures that could not accommodate his need to be the central figure.`,
  },
  {
    label: 'What the relationship cannot hold',
    body: `It cannot hold equality. One of them will need to be clearly subordinate for the structure to survive, and neither wound architecture can accept the subordinate position without significant cost to the interior.

It also cannot hold indefinitely in its current form because the terrain dynamics produce a specific kind of escalation. The more visible the alliance becomes, the more each man's need to be the central figure gets activated. The more activated those needs become, the more the alliance becomes about dominance rather than shared interest.

A Terrain Map would predict, based solely on the wound structures in play, that the relationship follows the pattern of every other close alliance both men have had: it becomes useful until it becomes threatening, and then it becomes a conflict. The specific timing and texture will depend on what external events activate which wound architecture more strongly. But the structural outcome is not difficult to read from the terrain.`,
  },
]

export default function MuskTrumpMapPage() {
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
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Relationship Map &middot; Two Public Figures</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-6">
            Elon Musk<br />
            <span className="text-teal-400 text-2xl md:text-3xl">+</span><br />
            Donald Trump
          </h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Entrepreneur, CEO &middot; 47th President of the United States</p>

          <div className="bg-teal-900/30 border border-teal-700/40 rounded-xl px-5 py-4 mb-8">
            <p className="text-teal-300 text-sm leading-relaxed">
              This is a public example map created from publicly available information only. Neither Elon Musk nor Donald Trump has participated in a ReLoHu session or endorsed this content. This is a cartographic exercise, not a clinical assessment, diagnosis, or political commentary.
            </p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            A Relationship Map examines what happens when two specific terrain structures meet. The subject is not either person in isolation but the dynamic their wound architectures produce when in contact. Drawn entirely from public record.
          </p>
        </div>
      </section>

      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/bVGWx4k58U0"
              title="Elon Musk and Donald Trump"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ==================== WHY THIS RELATIONSHIP ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            Two men whose entire architecture is organized around being the most important person in the room, trying to occupy the same room. The terrain analysis is not about politics. It is about what happens when two wound structures with identical structural requirements try to coexist, and why the collision is not a question of if but of when.
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

      {/* ==================== CROSS REFERENCES ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-6">See also: individual terrain maps</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/maps/public/elon-musk"
              className="flex-1 border border-slate-200 hover:border-teal-300 rounded-xl px-5 py-4 text-sm text-slate-600 hover:text-teal-600 transition-all"
            >
              <p className="font-medium mb-1">Elon Musk: Terrain Map</p>
              <p className="text-slate-400 text-xs">Control architecture as wound response</p>
            </Link>
            <Link
              href="/maps/public/donald-trump"
              className="flex-1 border border-slate-200 hover:border-teal-300 rounded-xl px-5 py-4 text-sm text-slate-600 hover:text-teal-600 transition-all"
            >
              <p className="font-medium mb-1">Donald Trump: Terrain Map</p>
              <p className="text-slate-400 text-xs">The Fred Trump architecture and the approval wound</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== BRIDGE ==================== */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed mb-6 max-w-lg">
            A Relationship Map applied to you and someone specific in your life goes much further than this. It works from full information, not public record, and reaches the terrain that the relationship actually activates.
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
