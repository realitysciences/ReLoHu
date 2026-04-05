import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Sam Altman: A ReLoHu Terrain Map | ReLoHu',
  description: 'A psychological mapping of Sam Altman: the orientation toward power, the containment, the November 2023 firing, and what the terrain beneath the OpenAI story actually looks like.',
  openGraph: {
    title: 'Sam Altman: A ReLoHu Terrain Map',
    description: 'What the OpenAI story reveals about Sam Altman\'s interior: the power orientation, the texture of containment, and what a weekend of being fired says about someone\'s terrain.',
  },
}

const sections = [
  {
    label: 'The orientation toward power',
    body: `He became president of Y Combinator at 28. He took over OpenAI when it was a nonprofit research organization and navigated it, over several years, into one of the most consequential companies in the world. He has been interested in how power works, how institutions work, and how to position himself at the center of consequential systems, since he was very young.

This is not ordinary ambition. Ordinary ambition wants outcomes: money, status, recognition. What Altman's public record suggests is a more structural interest: the mechanisms of power themselves, how decisions get made, who has leverage, how to be the person in the room that things flow through. This is a terrain feature, not a character trait. It is something organized around a specific interior relationship to control and centrality.

He is from St. Louis, Missouri. He came out as gay at a time when that was less culturally normalized in the Midwest. He attended Stanford briefly and left. The combination of outsider status in his origins and unusually early access to institutional power produces a specific kind of person: someone for whom the mechanisms of belonging and exclusion are always visible, who builds toward the inside from a position that started outside.`,
  },
  {
    label: 'The texture of containment',
    body: `He is present on social media in a way that feels open and is actually quite contained. He posts about AI, about ideas, occasionally about personal things. The texture of his public self is: thoughtful, accessible, genuinely interested in big questions, forward-facing. What is largely absent is the particular. The family history. The wound. The thing the interior is organized around.

This is itself a terrain feature. Not everyone who is private is hiding something significant. But when someone operates at the scale of public exposure that Altman does and the interior remains this consistently unavailable, it usually means one of two things: either the person has genuinely integrated their wound structure to a degree that it does not leak into public behavior, or the containment is itself structural and doing specific work.

His public positions on AI safety, on the importance of beneficial development, on the stakes of what he is building: these are genuine, in the sense that the record suggests he actually believes them. But they also function as a frame that keeps the conversation about ideas rather than about the person having the ideas. A Terrain Map would be very interested in what is beneath the frame.`,
  },
  {
    label: 'November 2023: the firing',
    body: `The OpenAI board fired him on a Friday afternoon in November 2023. The stated reason was a lack of candor with the board. Within 72 hours, the vast majority of OpenAI's employees had signed a letter threatening to resign if he was not reinstated. Within five days, he was back as CEO. The board members who fired him were largely gone.

From a terrain perspective, this event is more interesting than any interview he has ever given. What it revealed: his relationship with the people who work with him is strong enough that they were willing to make a very high-stakes bet on his behalf. That is not manufactured. It cannot be manufactured. It requires something real in the relational register that goes beyond competence or authority.

What the event also revealed: he was fired, and he came back. The specific texture of how someone moves through that experience, the days between the firing and the return, is a window into terrain that is otherwise closed. He has spoken about it in subsequent interviews. What he has not spoken about, or not fully, is what it activated on the interior. What it felt like to be removed from the thing he built. What it meant that it happened the way it did. The record of that weekend is largely blank, and the blank is interesting.`,
  },
  {
    label: 'The return',
    body: `He came back with more formal authority than he had before. The board was restructured. His position was more secure. The episode that was meant to end his tenure instead consolidated it. This is a particular kind of outcome: not just surviving a rupture, but emerging from it structurally stronger.

There are two ways to read this. One is that the institutional dynamics simply played out in his favor: he had more allies than the board, and institutional power backed the person with more allies. That reading is probably partly true. The other reading, from a terrain perspective, is that the speed and decisiveness with which he moved through the firing, the absence of visible fracture, the rapid reorientation toward what came next, suggests someone whose interior relationship to setback is unusually well-organized.

This is worth mapping precisely because it is unusual. Most people who are removed from positions of high authority carry it. The narcissistic wound, the need to revisit the injustice, the reorganization of identity around the loss: these are normal responses. His public record in the aftermath shows very little of this. Either the integration is genuine, or the containment is so strong that the wound is simply invisible. A ReLoHu session would know the difference.`,
  },
  {
    label: 'What the terrain would reach',
    body: `The most interesting question a Terrain Map would bring to Sam Altman is not about AI or about OpenAI or about any of the things his public presence is organized around. It is about the interior relationship to what he is building.

He is building something that, by his own account, may be the most consequential technology in human history. He holds this with what reads publicly as genuine equanimity. The question a Terrain Map would ask is: what does it cost to hold that? Not intellectually. On the interior. What is the texture of being the person in that position, with that belief about what you are doing, every day?

The wound structure beneath the power orientation, the specific relationship to belonging and exclusion that began in St. Louis, the thing the containment is protecting: these are the entries into a map that the public record cannot reach. That is exactly the territory a session would cover.`,
  },
]

export default function SamAltmanMapPage() {
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
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Sam Altman</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">CEO of OpenAI, former president of Y Combinator</p>

          <div className="bg-teal-900/30 border border-teal-700/40 rounded-xl px-5 py-4 mb-8">
            <p className="text-teal-300 text-sm leading-relaxed">
              This is a public example map created from publicly available information only. Sam Altman has not participated in a ReLoHu session and has not reviewed or endorsed this content. This is a cartographic exercise, not a clinical assessment or diagnosis.
            </p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: published interviews, podcast appearances including Lex Fridman (2023, 2024), his public writing, and coverage of the November 2023 OpenAI board events. All inferences are based on material he has made publicly available.
          </p>
        </div>
      </section>

      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/mJSnn0GZmls"
              title="Sam Altman"
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
            The November 2023 firing and return is one of the most revealing terrain events in recent public life. A weekend of being removed from the thing you built, then reinstated with more authority than you had before, tells you something about a person's interior that years of interviews cannot reach. The map starts there.
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
