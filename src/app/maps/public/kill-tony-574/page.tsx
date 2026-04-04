import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Kill Tony #574: Episode Map | ReLoHu',
  description: 'A ReLoHu Episode Map of Kill Tony #574 (Rogan, Gillis, Normand, Shaffir). mapping the psychological terrain revealed through live comedy, cruelty, and disclosure.',
}

const sections = [
  {
    label: 'What an episode map is',
    body: `A live comedy show is a terrain event. People get on stage with one minute and a microphone, and what they say. and what they avoid saying. reveals architecture. The host's responses reveal his. The audience's laughter maps the room's collective boundaries.\n\nKill Tony #574 is an unusually dense terrain artifact. The panel. Joe Rogan, Shane Gillis, Mark Normand, and Ari Shaffir. creates a room with four distinct psychological registers operating simultaneously. Tony Hinchcliffe runs it. Twelve comedians walk through. What follows is not a comedy review. It is a map of what the room surfaced.`,
  },
  {
    label: 'How Tony runs the room',
    body: `Tony's first move with every comedian is physical. Within seconds of someone reaching the stage, he reduces them to their body. their appearance, their clothes, their weight, their face. This is not cruelty for its own sake. It is a control mechanism. By establishing that he sees you as a body before you can establish yourself as a mind, he takes the dominant position. You are now performing inside his frame.\n\nHis second move is the interview, and this is where the terrain gets interesting. Tony is searching for narrative. He needs the comedian to have a wound, a story, a hook. the porn career, the cerebral palsy, the crypto losses, the divorce. Comedians who give him material to work with get longer, warmer segments. Comedians who are simply mediocre with no hook get his most dismissive cruelty. Tony can work with spectacular damage. He cannot work with ordinary failure.\n\nThis reveals the architecture of the show itself: Kill Tony is not a comedy competition. It is a disclosure machine. The minute of standup is the entry fee. The interview is the actual event. And Tony's skill. which is genuine and considerable. is extracting the specific detail that makes a person's interior life visible to a room full of strangers.`,
  },
  {
    label: 'The father wound in the room: Molly Vivant',
    body: `Molly Vivant performs a minute of porn-office comparison jokes. spreadsheets/spread cheeks, PTO/PTSD, HR/herpes response. The material is dense, fast, built on a structure that keeps the audience safe inside wordplay while the content is graphic.\n\nThen Tony asks: "Does your father hate you or just dislike you?"\n\nMolly says "100%." Her father "was bad." He is probably into her porn. And then she says the line that contains the entire map: "That would mean he was somewhat paying attention to me."\n\nShe reframed the worst possible scenario. her father watching her porn. as preferable to the actual reality, which is complete paternal absence. The exhibitionism, the graphic self-exposure, the willingness to be degraded publicly. it all reorganizes around this single sentence. She is performing visibility for a world that contains a father who would not look at her. The audience laughed. The room moved on. The line sat there like a grenade no one picked up.`,
  },
  {
    label: 'The disability mirror: John Horner',
    body: `John Horner has cerebral palsy and performs comedy about it. The panel immediately makes CP jokes. Ari asks if he has ever thought of killing himself. John says "not until this very moment."\n\nIn the interview, he reveals something more specific than self-deprecation. He says he does not like disabled comedians. "and I am one." He cannot watch shows like Love on the Spectrum because "it hits too close to home." He does not like "things that remind you of you."\n\nThis is a precise terrain marker. His comedy is built on making fun of his condition before others can. the classic preemptive defense. But in the interview he reveals that the defense does not work. He is performing acceptance of something he privately cannot tolerate seeing reflected back. The comedy is a mask shaped exactly like the wound.\n\nShane Gillis broke the room's dynamic entirely by saying, flatly and without comedy: "I disagree with these two. I think you're doing pretty good. I think you're funny." It was the only moment of unperformative sincerity on the panel all night. Tony booked John on Thursday's show.`,
  },
  {
    label: 'The car that cannot be rejected: William Montgomery',
    body: `William Montgomery is Kill Tony's closing regular. His persona is controlled chaos. herpes confessions, claims of triple homicide, sexual encounters with the producer's mother, all delivered at a pitch designed to make it impossible to tell what is real.\n\nIn the interview, it emerged that he has had herpes for two years (from Redban's mother. confirmed on air by both parties). He described the flare-ups without flinching. He described killing three people in San Antonio without breaking character. He absorbed every attack the panel threw.\n\nThen someone mentioned Herbie the Love Bug 2, and William nearly cried.\n\nThe displacement is almost structurally perfect. A man who performs grotesque chaos as his entire identity, who can describe genital sores and murder without blinking, found the only safe container for his actual emotional needs in a 1970s children's movie about a Volkswagen Beetle that loves a woman unconditionally. The car cannot be rejected. The car's love is simple and absolute. The car does not need to perform anything to earn it.\n\nWilliam can process herpes, violence, and public humiliation without a tremor. He cannot process a machine that loves someone without being asked to. That is terrain.`,
  },
  {
    label: 'The passivity map: Alex Baldam',
    body: `Alex Baldam drove from Charleston, South Carolina. He started comedy because Ari Shaffir told him to. He moved to Austin on settlement money from being hit by a police car. He lost thirty thousand dollars in cryptocurrency. His girlfriend left him. When Tony asked if the breakup was mutual, Alex said yes, then admitted she dumped him. He never asked her to move with him.\n\nThe picture is of a man whose life is shaped entirely by passivity. Things happen to him. the cop hit him, Ari told him to try comedy, the girlfriend left. and he narrates each one as though it were a choice he made. His comedy was correspondingly shapeless, built on borrowed structures rather than a genuine point of view.\n\nTony's response was the harshest of the night: "You are not good at this." "This is going to be a quiet ride back to South Carolina." The panel imagined his Netflix special sarcastically, suggested he buy a handgun. When Alex revealed the settlement money and crypto loss, Tony said: "The hot girlfriend that left you was right."\n\nTony is most vicious toward people who do not know their own story. He can work with damage. He cannot work with drift.`,
  },
  {
    label: 'What Tony rewards and what he cannot hold',
    body: `The pattern across twelve comedians is consistent. Tony rewards speed, density, confidence, and willingness to be destroyed. David Lucas thrives because he fires back. Molly survives because she leans into degradation. Hans Kim earns warmth by producing a new minute every week without complaint.\n\nWhat Tony punishes is not failure but formlessness. The comedian who has no angle, no wound, no story. that person gets dismissed. The comedian who has a wound but offers it cleanly gets the longest, most productive interview. Tony needs his comedians to be broken in specific, narratively interesting ways. Ordinary failure bores him. Spectacular damage fascinates him.\n\nThe deepest structural pattern: the show cannot hold unprocessed emotion. When William Montgomery started to genuinely cry, Tony immediately redirected. When Molly revealed the father wound, Tony instantly made another joke. Pain must be converted to material or expelled from the room. The architecture of Kill Tony is a machine for surfacing interior life and then immediately metabolizing it into content. What it surfaces is real. What it does with what it surfaces is the question a Terrain Map would keep asking.`,
  },
  {
    label: 'The room as a single organism',
    body: `The four panelists operate in distinct registers. Tony controls. Ari provokes. his questions are the sharpest and most dangerous (asking John Horner about suicide, probing Molly about her industry's practices). Mark Normand plays the pressure release, inserting one-liners that let the room breathe after Tony tightens the screws. Shane Gillis was the only person who broke the frame entirely. his defense of John Horner was the single moment where someone on the panel said something true without trying to make it funny.\n\nRogan arrived an hour in, visibly drunk from a six-hour podcast, and immediately reorganized the room's gravity. Will Williams, who was mid-set when Rogan walked on, was functionally erased. Tony said Rogan "watched Will Williams' set and sobered up completely." The room does not hold two centers of gravity. When Rogan enters, everyone else. including Tony. adjusts.\n\nThe audience is the final layer. Their laughter maps the room's collective comfort zone. They laughed hardest at David Lucas's roast exchanges (safe aggression between equals) and went quietest during Molly's father line (unsafe disclosure from someone who meant it). The audience, like Tony, can process cruelty. It has more difficulty processing what is actually true.`,
  },
]

export default function KillTony574MapPage() {
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
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Episode Map · Kill Tony</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-2">Kill Tony #574</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-3">Vulcan Gas Company · Austin, Texas</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Joe Rogan', 'Shane Gillis', 'Mark Normand', 'Ari Shaffir'].map((name) => (
              <span key={name} className="text-[10px] font-mono tracking-wide text-teal-300 bg-teal-900/40 border border-teal-700/50 px-2.5 py-1 rounded-full">
                {name}
              </span>
            ))}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: the full episode transcript of Kill Tony #574. This map reads the psychological terrain surfaced by the show. through the comedians' minutes, Tony's interviews, and the panel's responses. It is not a comedy review. It takes no position on anyone's talent. It is a cartographic reading of what the room revealed about the people in it.
          </p>
        </div>
      </section>

      {/* ==================== EPISODE EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/Fa1xlmkS-lc"
              title="Kill Tony #574"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ==================== WHY THIS EPISODE ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            A live comedy show is one of the only environments where people voluntarily disclose their interior lives to a room full of strangers under conditions designed to maximize vulnerability. Kill Tony #574. with a four-person panel operating at different psychological registers and twelve comedians moving through the room. produced an unusually dense terrain sample. What follows is a map of what surfaced.
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
            This map was built from a single episode transcript. A session produces the same quality of attention applied to you, with full information rather than reconstructed signal.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-lg">
            None of the individuals featured in this map are ReLoHu clients or affiliated with ReLoHu in any way.
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
