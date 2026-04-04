import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Joe Rogan: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Joe Rogan, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'Origin architecture',
    body: `Rogan's parents divorced when he was five. His father left and was largely absent. He grew up with his mother, moving between New Jersey and Florida before settling in the Boston area. He has described feeling small, physically threatened, and without a male model of how to be in the world. He found martial arts specifically taekwondo as a teenager, and it changed everything. Not as a hobby. As an organizing principle.\n\nThis is the foundational structure: a boy who felt unprotected and inadequate in his body, who built himself into a physically formidable person, and who has spent the rest of his life in relationship to competence. The question of who is capable and who is not who has actually done the thing versus who only talks about it runs through everything he makes.`,
  },
  {
    label: 'Wound-to-method conversion',
    body: `The fatherless boy who felt small developed an obsessive relationship with physical mastery and masculine competence. That is the wound. The method the entire architecture of the JRE is: bring in people who have genuinely figured something out, sit with them, find out what they actually know.\n\nHe has never stopped being the kid who wanted to learn from men who had mastered something. The curiosity is real. But it is also organized. It is not random it is specifically oriented toward competence, capability, and the question of what it actually takes. Every domain he has gone deep on (BJJ, hunting, psychedelics, comedy, MMA) shares that structure: things where there is no faking it, where the gap between posture and mastery is immediately legible.`,
  },
  {
    label: 'Core vectors',
    body: `Anti-credential, pro-competence: he has a deep and consistent suspicion of title-based authority. What he trusts is demonstrated mastery. A black belt over a PhD. Someone who has actually hunted over someone who has read about it. This is not anti-intellectualism it is a specific epistemology organized around doing.\n\nCuriosity as primary drive: the podcast is him following genuine interest in real time. This is structural, not performative. He has interviewed thousands of people across wildly different domains and the curiosity appears consistent.\n\nThe body as anchor: BJJ, hunting, elk processing, float tanks, psychedelics all of these are practices that relocate him from the verbal-intellectual register into direct physical or altered-state experience. When language becomes untrustworthy, he returns to the body.\n\nTribe loyalty: a consistent inner circle (Ari Shaffir, Joey Diaz, Bert Kreischer and others) whose loyalty is near-unconditional. This is not a character flaw it is a relational structure that makes sense given the origin architecture. The boy who lost his father built a substitute fraternity and holds it close.`,
  },
  {
    label: 'Shadow: the limits of just asking questions',
    body: `Rogan's signature epistemic posture is "I'm just asking questions" a genuine curiosity that also functions as cover for not committing. It allows him to explore fringe ideas without being accountable for them, to platform positions without endorsing them, and to maintain relationships with people whose views are incompatible. For much of his career this served him. During COVID and the subsequent culture wars, it became visible as a position in itself.\n\nThe deeper shadow is that his anti-credentialism has a directional pull he does not always acknowledge. He is not equally skeptical of all authorities he is specifically skeptical of institutions, expertise-by-credential, and what he reads as cultural gatekeeping. That skepticism is organized by something upstream of reason. A map would want to know what.\n\nThe tribe loyalty is also both strength and shadow. He is consistent and warm to people he has claimed. He is also difficult to genuinely challenge from the outside. The podcast format where he is always the host, always the one asking is itself a structure that prevents real confrontation. His curiosity has rarely been turned on himself by someone with standing to push back.`,
  },
  {
    label: 'The relational register',
    body: `Despite thousands of hours of tape, Rogan's intimate relational life is largely absent from his public record. He has talked about his daughters in broad, warm terms. His marriage is largely off the record. What we can infer from the structural patterns: a man organized around competence and fraternal loyalty who may find the specifically feminine register dependency, vulnerability, relational complexity without resolution harder to inhabit.\n\nHis most revealing relational moments on tape are with guests he genuinely admires. The warmth is real. What is less visible is how he operates when he is the less capable one in the room, when he is wrong, or when someone he loves is in pain that physical mastery cannot address.`,
  },
  {
    label: 'What ReLoHu would reach',
    body: `A ReLoHu session with Rogan would want to stay with the five-year-old whose father left. Not as a wound to process he has clearly made enormous meaning from that architecture but as a living structure. What does the obsession with competence still organize against? When he is in a float tank at three in the morning, what is he trying to get to? And what is the relationship between the physical anchoring practices and whatever he does not trust language to hold?\n\nThe body-based practices (BJJ, hunting) and the altered-state practices (DMT, psilocybin) both point toward the same thing: a man who has a sophisticated interior life and a consistent drive to access it through non-verbal means. That is exactly the territory a Terrain Map is designed for. Not to explain him he is not under-explained. But to give him a portrait of the whole landscape at once, including the parts that the "just asking questions" frame keeps at arm's length.`,
  },
]

export default function JoeRoganMapPage() {
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
            ← Example Maps
          </Link>
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Terrain Map · Public Figure</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Joe Rogan</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Comedian, podcast host, UFC commentator</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: The Joe Rogan Experience (selected episodes, 2009-present), stand-up specials Triggered (2016), Strange Times (2018), and Burn the Boats (2023), and multiple long-form interviews in which Rogan was the subject rather than the host. No private sessions, personal contact, or non-public information of any kind. All inferences are based on material Rogan has made publicly available. This is a cartographic exercise, not a clinical assessment or diagnosis.
          </p>
        </div>
      </section>

      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/Lb_1d68vx-g"
              title="Joe Rogan"
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
            Rogan has produced thousands of hours of self-disclosure on tape more than almost any public figure alive. The JRE is, among other things, an accidental autobiography: thousands of hours of him processing his thinking in real time, with the full range of his curiosity and his blind spots on display. His terrain is unusually mappable precisely because he has never stopped talking.
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
              ← Back to Example Maps
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
