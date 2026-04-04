import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Example Terrain Maps: Public Figures | ReLoHu',
  description: 'Demonstrations of the ReLoHu Terrain Map methodology applied to public figures whose interior lives are extensively documented. Not clinical assessments -- cartographic exercises.',
}

const figures = [
  {
    number: '02',
    name: 'Joe Rogan',
    field: 'Comedian, podcast host, UFC commentator',
    why: 'Rogan has produced thousands of hours of self-disclosure on tape -- more than almost any public figure alive. The JRE is, among other things, an accidental autobiography: thousands of hours of him processing his thinking in real time, with the full range of his curiosity and his blind spots on display. His terrain is unusually mappable precisely because he has never stopped talking.',
    sources: 'Drawn from: The Joe Rogan Experience (selected episodes, 2009-present), stand-up specials Triggered (2016), Strange Times (2018), and Burn the Boats (2023), and multiple long-form interviews in which Rogan was the subject rather than the host. All inferences are based on material Rogan has made publicly available. No private sessions, personal contact, or non-public information of any kind.',
    sections: [
      {
        label: 'Origin architecture',
        body: `Rogan's parents divorced when he was five. His father left and was largely absent. He grew up with his mother, moving between New Jersey and Florida before settling in the Boston area. He has described feeling small, physically threatened, and without a male model of how to be in the world. He found martial arts -- specifically taekwondo -- as a teenager, and it changed everything. Not as a hobby. As an organizing principle.\n\nThis is the foundational structure: a boy who felt unprotected and inadequate in his body, who built himself into a physically formidable person, and who has spent the rest of his life in relationship to competence. The question of who is capable and who is not -- who has actually done the thing versus who only talks about it -- runs through everything he makes.`,
      },
      {
        label: 'Wound-to-method conversion',
        body: `The fatherless boy who felt small developed an obsessive relationship with physical mastery and masculine competence. That is the wound. The method -- the entire architecture of the JRE -- is: bring in people who have genuinely figured something out, sit with them, find out what they actually know.\n\nHe has never stopped being the kid who wanted to learn from men who had mastered something. The curiosity is real. But it is also organized. It is not random -- it is specifically oriented toward competence, capability, and the question of what it actually takes. Every domain he has gone deep on (BJJ, hunting, psychedelics, comedy, MMA) shares that structure: things where there is no faking it, where the gap between posture and mastery is immediately legible.`,
      },
      {
        label: 'Core vectors',
        body: `Anti-credential, pro-competence: he has a deep and consistent suspicion of title-based authority. What he trusts is demonstrated mastery. A black belt over a PhD. Someone who has actually hunted over someone who has read about it. This is not anti-intellectualism -- it is a specific epistemology organized around doing.\n\nCuriosity as primary drive: the podcast is him following genuine interest in real time. This is structural, not performative. He has interviewed thousands of people across wildly different domains and the curiosity appears consistent.\n\nThe body as anchor: BJJ, hunting, elk processing, float tanks, psychedelics -- all of these are practices that relocate him from the verbal-intellectual register into direct physical or altered-state experience. When language becomes untrustworthy, he returns to the body.\n\nTribe loyalty: a consistent inner circle (Ari Shaffir, Joey Diaz, Bert Kreischer and others) whose loyalty is near-unconditional. This is not a character flaw -- it is a relational structure that makes sense given the origin architecture. The boy who lost his father built a substitute fraternity and holds it close.`,
      },
      {
        label: 'Shadow: the limits of just asking questions',
        body: `Rogan's signature epistemic posture is "I'm just asking questions" -- a genuine curiosity that also functions as cover for not committing. It allows him to explore fringe ideas without being accountable for them, to platform positions without endorsing them, and to maintain relationships with people whose views are incompatible. For much of his career this served him. During COVID and the subsequent culture wars, it became visible as a position in itself.\n\nThe deeper shadow is that his anti-credentialism has a directional pull he does not always acknowledge. He is not equally skeptical of all authorities -- he is specifically skeptical of institutions, expertise-by-credential, and what he reads as cultural gatekeeping. That skepticism is organized by something upstream of reason. A map would want to know what.\n\nThe tribe loyalty is also both strength and shadow. He is consistent and warm to people he has claimed. He is also difficult to genuinely challenge from the outside. The podcast format -- where he is always the host, always the one asking -- is itself a structure that prevents real confrontation. His curiosity has rarely been turned on himself by someone with standing to push back.`,
      },
      {
        label: 'The relational register',
        body: `Despite thousands of hours of tape, Rogan's intimate relational life is largely absent from his public record. He has talked about his daughters in broad, warm terms. His marriage is largely off the record. What we can infer from the structural patterns: a man organized around competence and fraternal loyalty who may find the specifically feminine register -- dependency, vulnerability, relational complexity without resolution -- harder to inhabit.\n\nHis most revealing relational moments on tape are with guests he genuinely admires. The warmth is real. What is less visible is how he operates when he is the less capable one in the room, when he is wrong, or when someone he loves is in pain that physical mastery cannot address.`,
      },
      {
        label: 'What ReLoHu would reach',
        body: `A ReLoHu session with Rogan would want to stay with the five-year-old whose father left. Not as a wound to process -- he has clearly made enormous meaning from that architecture -- but as a living structure. What does the obsession with competence still organize against? When he is in a float tank at three in the morning, what is he trying to get to? And what is the relationship between the physical anchoring practices and whatever he does not trust language to hold?\n\nThe body-based practices (BJJ, hunting) and the altered-state practices (DMT, psilocybin) both point toward the same thing: a man who has a sophisticated interior life and a consistent drive to access it through non-verbal means. That is exactly the territory a Terrain Map is designed for. Not to explain him -- he is not under-explained. But to give him a portrait of the whole landscape at once, including the parts that the "just asking questions" frame keeps at arm's length.`,
      },
    ],
  },
  {
    number: '01',
    name: 'Eckhart Tolle',
    field: 'Spiritual teacher, author of The Power of Now',
    why: 'Tolle is one of the most documented cases of a wound becoming a method. His interior life -- before and after his 1977 awakening -- is the subject of everything he has ever published. He is also the clearest example of what a highly developed map of the observer\'s interior looks like, and where that map runs out.',
    sources: 'Drawn from: The Power of Now (1997), A New Earth (2005), Stillness Speaks (2003), and multiple published interviews including Oprah\'s Soul Series (2008) and Sounds True (2012). No private sessions, personal contact, or non-public information of any kind. All inferences are based on material Tolle has made publicly available.',
    sections: [
      {
        label: 'The wound',
        body: `Tolle describes his pre-awakening life as one of near-continuous psychological suffering -- dominated by anxiety, depression, and an identification with a self that was fundamentally at war with itself. He was, by his own account, profoundly alone in that suffering and unable to explain it to anyone who might have helped. The specific texture was not grief, not trauma in the conventional sense, but a kind of unbearable weight of selfhood. Being unable to inhabit the present because the mind was always pulling him somewhere else.\n\nAt 29, in the middle of the night, something collapsed. He woke with an almost suicidal intensity ("I cannot live with myself any longer") and then noticed something: who is the I that cannot live with myself? The question opened a gap. By morning the suffering had dissolved. What replaced it was not joy but stillness -- a profound ease with the present moment he had never experienced.`,
      },
      {
        label: 'The wound-to-method conversion',
        body: `This is where his terrain becomes extraordinary as a ReLoHu subject: the wound and the method are the same territory. The unbearable quality of being identified with a suffering self became, after the break, the very thing he spent his life mapping. He did not escape his wound. He fell through it into the territory on the other side, and then spent thirty years finding language for what he found there.\n\nThe conversion is nearly complete. Most people who do significant interior work carry both the wound and the tool separately -- the wound in one hand, the method for addressing it in the other. In Tolle's case they collapsed into each other. The wound became the portal. The portal became the teaching.`,
      },
      {
        label: 'Core vectors',
        body: `Observer-present orientation: his entire mode of being is organized around the capacity to witness experience without being captured by it. This is not a practice for him -- it is his baseline.\n\nLow attachment to personal narrative: he has very little investment in the story of Eckhart Tolle as a self with history, preferences, ambitions. He describes his pre-awakening life almost clinically, as if reporting on someone else.\n\nUniversalizing drive: a deep pull toward the principle that applies to everyone, away from the particular that applies only to one person. This is both his most powerful teaching tool and his most significant blind spot.\n\nStillness as primary register: he operates from an inner quiet that most people encounter only in rare moments. The terrain is so organized around this baseline that disruption -- real relational disruption, the kind that pulls a person out of presence -- is largely absent from his public record.`,
      },
      {
        label: 'Shadow: the universalizing vector',
        body: `By reducing every experience to present versus non-present, Tolle makes the map legible to millions. That is a genuine achievement. But the particular texture of what makes someone's wound theirs gets treated as noise. In his framework, the specific content of what you are suffering is almost irrelevant -- only the degree of identification matters.\n\nThis is powerful for people who are suffocating under the weight of self-story. It is a weak map for people whose wound is not over-identification with self but something more textured: a specific relational history, a particular way of being failed, a grief that has a face and a name. For those people, the instruction to be present can feel like being asked to abandon the very thing that most needs witnessing.\n\nReLoHu's whole bet is the opposite: the particular is the payload, not the problem. What makes your wound yours is not noise to be transcended -- it is the precise information the map needs.`,
      },
      {
        label: 'The relational register: where the map runs thin',
        body: `The Power of Now is an extraordinary map of one person's relationship to his own interior. It has very little to say about the particular texture of being in relationship with another specific person -- their history, their wound patterns, the place where two terrain maps collide and misalign.\n\nHis framework reaches stillness. It does not reach encounter. The deepest relational experiences -- the ones that simultaneously reveal us to ourselves and make us most unable to be present -- are at the edges of his map. When the present moment is complicated by a shared history that two people read differently, "be present" is not an answer. It is a destination, not a path.\n\nThis is where a Relationship Map does something his framework doesn't reach. The question is not whether you can be present. The question is what terrain gets activated when this particular person is in the room, and why.`,
      },
      {
        label: 'What ReLoHu would reach',
        body: `A ReLoHu Terrain Map of Tolle would be interested in the texture of his wound before the break, not just after it. What specifically was unbearable? What was the relational architecture of his early life? What happened in the room when his suffering met another person? The answers are mostly absent from his public record -- which is itself interesting. The territory before 29 is largely undocumented. The man who became famous for being fully present in the now has very little to say about the particular life that preceded it.\n\nA Relationship Map version would be the next entry worth doing -- just based on what we can infer about how someone with this terrain structure shows up with others. That is a different kind of map. It would start where The Power of Now ends.`,
      },
    ],
  },
]

export default function PublicMapsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-6">Example Maps: Public Figures</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-8">
            What the methodology<br />
            <span className="text-teal-300">looks like in practice.</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            The best way to understand what a Terrain Map does is to see one. These are demonstrations of the ReLoHu methodology applied to public figures whose interior lives are extensively documented -- through their own writing, interviews, and biographical record.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            These are cartographic exercises, not clinical assessments or diagnoses. All content is drawn from publicly available material. The goal is to show how the methodology works -- what it looks for, what it names, and where it goes that conventional frameworks don't reach.
          </p>
        </div>
      </section>

      {/* ==================== FIGURES ==================== */}
      {figures.map((figure, fi) => (
        <section key={fi} className="py-20 px-6 border-t border-slate-100">
          <div className="max-w-2xl mx-auto">

            {/* Figure header */}
            <div className="flex items-start gap-6 mb-14">
              <div className="text-[11px] font-mono text-slate-300 pt-1 shrink-0 w-6">{figure.number}</div>
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-2">{figure.name}</h2>
                <p className="text-[10px] font-mono tracking-[0.3em] text-teal-600 uppercase">{figure.field}</p>
                <p className="text-slate-500 leading-relaxed text-sm mt-4 border-l-2 border-teal-100 pl-4 italic">
                  {figure.why}
                </p>
                {figure.sources && (
                  <div className="mt-5 flex items-start gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-slate-300 uppercase shrink-0 pt-0.5">Sources</span>
                    <p className="text-xs text-slate-400 leading-relaxed">{figure.sources}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Map sections */}
            <div className="ml-12 space-y-12">
              {figure.sections.map((section, si) => (
                <div key={si}>
                  <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-4">{section.label}</p>
                  <div className="space-y-4">
                    {section.body.split('\n\n').map((para, pi) => (
                      <p key={pi} className="text-slate-600 leading-relaxed text-[15px]">{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      ))}

      {/* ==================== MORE COMING ==================== */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto ml-0 md:ml-[3.5rem] md:pl-6">
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-4">This archive is growing</p>
          <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
            New figures are added as the methodology warrants it. The selection criterion is not fame but documentation -- public figures whose interior lives are rich enough to map with specificity. Suggestions welcome.
          </p>
        </div>
      </section>

      {/* ==================== BRIDGE TO MAPS ==================== */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed mb-6">
            These maps demonstrate the methodology. A session produces the same quality of attention -- applied to you, not a public figure, and drawing on everything you actually share rather than what is in the public record.
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
              href="/maps"
              className="inline-flex items-center gap-2 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-medium rounded-full px-8 py-4 text-sm transition-all"
            >
              View the Map Library →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
