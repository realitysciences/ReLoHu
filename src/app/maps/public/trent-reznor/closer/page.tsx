import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Closer: Song Map | ReLoHu',
  description: 'A ReLoHu Song Map of Nine Inch Nails\' "Closer" . mapping the psychological terrain encoded in the song\'s structure, imagery, and what lies beneath the provocation.',
}

const sections = [
  {
    label: 'What the song is actually about',
    body: `"Closer" is the most misread song in the Nine Inch Nails catalog, and possibly in 1990s rock. The chorus is so deliberately transgressive that it has functioned as a screen, absorbing all the attention while the actual content of the song goes unheard.\n\nThe verses are where the terrain lives. They describe a person who is experiencing himself as damaged, contaminated, broken at a level that precedes the sexual content entirely. The sexual language is not the subject of the song. It is the only register available to the speaker for making contact with another person. That distinction is the whole map.`,
  },
  {
    label: 'The contamination register',
    body: `The speaker describes himself as having something fundamentally wrong . not a specific failing but a constitutional deficiency. He describes his own interior as a hostile environment. This is not performed self-pity. It is the genuine texture of someone who has internalized the message that their interior life is unwelcome, dangerous, too much.\n\nThis maps directly onto Reznor's broader terrain. The early abandonment, the experience of being raised by people who were not his parents in an environment he experienced as suffocating . these produced a specific relationship to the self: the self as something to be escaped, overwritten, or destroyed. The Downward Spiral, the album that contains "Closer," is organized entirely around this premise. The self is the problem. What do you do with the problem?`,
  },
  {
    label: 'The contact attempt beneath the violence',
    body: `The chorus, stripped of its shock value, is a statement about the conditions under which this particular person can feel real. He is not describing desire in the conventional sense. He is describing the only available pathway to a feeling of presence, of existing, of making contact with another person that is intense enough to temporarily override the contamination signal.\n\nThis is a terrain marker of extraordinary specificity. He is saying: I am so disconnected from my own sense of being alive that only an experience at this intensity can cut through. The transgressive language is not the point. The desperation underneath it is. He is trying to feel something that the baseline self-relationship does not allow him to feel.\n\nThe fact that millions of people responded to this song . played it at parties, adopted it as a provocative anthem, stripped it for its shock content . is itself a terrain observation. The song was about the experience of not being accurately received, and then it was not accurately received.`,
  },
  {
    label: 'The bridge: the moment the mask slips',
    body: `The bridge drops the sexual register entirely. What replaces it is something closer to prayer: a direct statement of need, unmediated by provocation or irony. He wants to feel something that the machinery of self-loathing will not let him feel on its own.\n\nThis is the moment the song breaks its own contract. The entire architecture up to this point has been designed to keep the listener at a comfortable distance . you can hear it as transgression, as satire, as nihilism, and never have to engage with the vulnerability underneath. The bridge makes that impossible. For a few bars the mask comes off and the speaker is simply someone who cannot reach another person through normal means and is in genuine pain about it.\n\nReznor has never, in any interview, fully explained this section. Which is itself a terrain marker. The provocation he will discuss. The vulnerability he will not.`,
  },
  {
    label: 'The production as its own map',
    body: `The song's sonic architecture tells a parallel story. The rhythm track is mechanical, industrial, inhuman . a machine pattern that does not breathe. The vocal sits inside this machine texture, sometimes swallowed by it, sometimes surfacing above it. The arrangement keeps pushing the human voice into competition with the machine.\n\nThis is not an aesthetic choice. It is a structural representation of the song's actual content: a human interior trapped inside a mechanism that does not respond to it. The machine does not care what the voice is saying. The voice keeps saying it anyway. The gap between the two . between what is being expressed and the environment's total indifference to it . is the terrain of the whole song.\n\nIn ReLoHu terms: the production is the wound, the vocal is the person inside the wound, and the distance between them is the thing no one has named.`,
  },
  {
    label: 'What the song is as a terrain artifact',
    body: `"Closer" is a map of what it feels like to need contact and have no available language for it except extremity. The transgressive content is real . it is not a metaphor for something polite. But the transgressive content is also a surface, and what lies beneath it is a portrait of disconnection so complete that the only available path to feeling real runs through the most intense register the speaker can access.\n\nThis is one of the most common terrain patterns ReLoHu encounters, stripped of the rock-star context: people whose interior experience is so intense, or so defended, or so consistently unmet, that they can only make contact through escalation. The language of the escalation varies. The structure is the same.\n\nReznor built an entire career on this structure. "Closer" is the piece where the structure is most visible, precisely because everyone is looking at the surface and almost no one is looking at the architecture underneath it.`,
  },
]

export default function CloserMapPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-16 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <Link href="/maps/public/trent-reznor" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors">
            ← Trent Reznor: Terrain Map
          </Link>
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Song Map · Nine Inch Nails</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-2">Closer</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">The Downward Spiral · 1994</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: the song itself, The Downward Spiral (1994) in full album context, the Mark Romanek-directed music video (1994), and published interviews with Reznor discussing the album's creation, his state of mind during the period, and the song's reception. This is a cartographic reading of the terrain encoded in the song, not a clinical assessment of any person.
          </p>
        </div>
      </section>

      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/PTFwQP86BRs"
              title="Nine Inch Nails - Closer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ==================== WHY THIS SONG ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            The most famous song from one of the most psychologically explicit albums ever made . and almost universally misread. What gets heard as provocation is, on terrain reading, a map of someone trying to make contact with another person and having no available language for it except violation. The provocation is the defense. What it is defending is the part no one talks about.
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
              href="/maps/public/trent-reznor"
              className="inline-flex items-center gap-2 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-medium rounded-full px-8 py-4 text-sm transition-all"
            >
              ← Trent Reznor: Terrain Map
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
