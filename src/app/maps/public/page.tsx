import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Example Terrain Maps: Public Figures | ReLoHu',
  description: 'Demonstrations of the ReLoHu Terrain Map methodology applied to public figures whose interior lives are extensively documented. Cartographic exercises, not clinical assessments.',
}

const figures = [
  {
    slug: 'joe-rogan',
    name: 'Joe Rogan',
    field: 'Comedian, podcast host, UFC commentator',
    hook: 'Thousands of hours of self-disclosure on tape. An accidental autobiography and one of the clearest examples of a wound organizing an entire career without the person fully naming it.',
    tags: ['Origin architecture', 'Wound-to-method', 'Anti-credential epistemology', 'Relational register'],
  },
  {
    slug: 'eckhart-tolle',
    name: 'Eckhart Tolle',
    field: 'Spiritual teacher, author of The Power of Now',
    hook: 'One of the most complete cases of a wound becoming a method. His framework maps the observer\'s interior with extraordinary precision and stops exactly where ReLoHu begins.',
    tags: ['Wound-to-method', 'Universalizing shadow', 'Relational gap', 'The particular vs. the universal'],
  },
  {
    slug: 'kanye-west',
    name: 'Kanye West',
    field: 'Rapper, producer, designer',
    hook: 'Grandiosity as wound-covering. The collapsed boundary between artistic vision and self. Probably the most documented real-time psychological unraveling in public life and one of the most legible terrain maps available.',
    tags: ['Grandiosity as defense', 'Loss of primary witness', 'Collapsed self-art boundary', 'Public unraveling'],
  },
  {
    slug: 'brene-brown',
    name: 'Brene Brown',
    field: 'Research professor, author, speaker',
    hook: 'The researcher who built a career on vulnerability while the question of her own remains productively open. The meta-layer is where it gets interesting.',
    tags: ['Researcher\'s position', 'Meta-layer analysis', 'Vulnerability as vocation', 'What stays off the map'],
  },
  {
    slug: 'elon-musk',
    name: 'Elon Musk',
    field: 'Entrepreneur, CEO of Tesla, SpaceX, X',
    hook: 'Control architecture as a response to early powerlessness. The man who builds systems of total influence while describing a childhood of total isolation.',
    tags: ['Control architecture', 'Early powerlessness', 'Systems as wound response', 'Relational register'],
  },
  {
    slug: 'oprah-winfrey',
    name: 'Oprah Winfrey',
    field: 'Media executive, talk show host, philanthropist',
    hook: 'Witnessing as vocation. Someone who metabolized a brutal early life into a decades-long practice of making others feel seen and the complexity of what that costs.',
    tags: ['Witnessing as vocation', 'Wound-to-method', 'The cost of the practice', 'Body as register'],
  },
  {
    slug: 'prince-harry',
    name: 'Prince Harry',
    field: 'Duke of Sussex, author, mental health advocate',
    hook: 'Identity rupture in public. The second son navigating institutional belonging, inherited trauma, and a very loud attempt at self-authorship.',
    tags: ['Second son structure', 'Institutional grief', 'Identity rupture', 'Self-authorship in progress'],
  },
  {
    slug: 'simone-biles',
    name: 'Simone Biles',
    field: 'Olympic gymnast, most decorated American gymnast in history',
    hook: 'The body as both instrument and limit. What it looks like when someone finally stops performing invincibility and what made that act possible.',
    tags: ['Body as instrument', 'Invincibility performance', 'The cost of excellence', 'The act of stopping'],
  },
  {
    slug: 'anthony-bourdain',
    name: 'Anthony Bourdain',
    field: 'Chef, author, television host (1956-2018)',
    hook: 'The seeker who couldn\'t be filled. Restlessness as both gift and fate and what happens when the moving stops.',
    tags: ['Restlessness as vector', 'The seeker structure', 'Witnessing others', 'The unfillable gap'],
  },
  {
    slug: 'malala-yousafzai',
    name: 'Malala Yousafzai',
    field: 'Education activist, Nobel Peace Prize laureate',
    hook: 'Wound converted to mission with unusual cleanness. Worth mapping precisely because the integration appears so complete what is underneath that?',
    tags: ['Wound-to-mission', 'The cost of becoming a symbol', 'Integration question', 'The particular beneath the universal'],
  },
  {
    slug: 'steve-jobs',
    name: 'Steve Jobs',
    field: 'Co-founder of Apple, NeXT, and Pixar (1955-2011)',
    hook: 'Abandonment as engine. The man who controlled everything except the thing that formed him first.',
    tags: ['Abandonment architecture', 'Control as wound response', 'The biography impulse', 'Relational cost'],
  },
  {
    slug: 'taylor-swift',
    name: 'Taylor Swift',
    field: 'Singer-songwriter, producer, re-recorder of her own catalog',
    hook: 'The documentation impulse as wound response. Someone who writes everything down before it can be taken from her, and has built one of the most metatextually aware bodies of work alive.',
    tags: ['Documentation as defense', 'Epistemic wound', 'Vindication arc', 'The metacognitive split'],
  },
  {
    slug: 'trent-reznor',
    name: 'Trent Reznor',
    field: 'Musician, producer, composer · Nine Inch Nails',
    hook: 'The wound that built a world. One of the clearest cases of interior pain becoming total sonic architecture, and one of the most legible examples of what terrain in genuine resolution looks like.',
    tags: ['Wound-as-architecture', 'Control as wound response', 'Sobriety rupture', 'Late-work resolution'],
  },
  {
    slug: 'darryl-anka',
    name: 'Darryl Anka',
    field: 'Actor, filmmaker, channel for Bashar',
    hook: 'The man behind the voice. What does channeling solve for the person who channels? The map works regardless of whether the voice is real; the terrain is the person, not the metaphysical claim.',
    tags: ['Permission structure', 'The Darryl/Bashar split', 'Certainty as architecture', 'Who is he without the voice?'],
  },
  {
    slug: 'kill-tony-574',
    name: 'Kill Tony #574',
    field: 'Episode Map · Tony Hinchcliffe, Joe Rogan, Shane Gillis, Mark Normand, Ari Shaffir',
    hook: 'A live comedy show as terrain event. Twelve comedians, one minute each, and a panel that extracts what the comedy was actually about. What the room surfaced and what it could not hold.',
    tags: ['Episode map', 'Disclosure machine', 'Cruelty as control', 'The wound the room cannot hold'],
  },
  {
    slug: 'naomi-osaka',
    name: 'Naomi Osaka',
    field: 'Professional tennis player, four-time Grand Slam champion',
    hook: 'The cost of excellence performed for others. What happens when a quiet person is handed a very loud platform and finally names the price.',
    tags: ['Quiet person, loud platform', 'The cost of visibility', 'The act of naming', 'Identity and belonging'],
  },
  {
    slug: 'zendaya',
    name: 'Zendaya',
    field: 'Actress, producer, former Disney Channel performer',
    hook: 'One of the best-documented cases of someone who achieved at the highest level from a very young age and came out structurally intact. The question is not how she succeeded but what the architecture beneath the ascent actually looks like.',
    tags: ['The scaffold', 'Controlled ascent', 'The capsule', 'Craft as anchor'],
  },
  {
    slug: 'andrew-tate',
    name: 'Andrew Tate',
    field: 'Kickboxer, media personality, founder of Hustlers University',
    hook: 'One of the clearest cases of a wound architecture that got mistaken for a philosophy. The absent exceptional father, the hostile social environment, the body as proof: the entire structure is legible once you know where to look.',
    tags: ['Absent father idealization', 'Body as proof', 'Control vector', 'Masculinity as wound response'],
  },
  {
    slug: 'sam-altman',
    name: 'Sam Altman',
    field: 'CEO of OpenAI, former president of Y Combinator',
    hook: 'The November 2023 firing and return is one of the most revealing terrain events in recent public life. A weekend of being removed from the thing you built, then reinstated with more authority than before, tells you something interviews cannot reach.',
    tags: ['Power orientation', 'Texture of containment', 'The firing rupture', 'The return'],
  },
  {
    slug: 'britney-spears',
    name: 'Britney Spears',
    field: 'Singer, performer, subject of one of the most documented conservatorships in public life',
    hook: 'The wound of conditional worth, manufactured from adolescence. The conservatorship made legal what was already true in her architecture. One of the most legible cases of autonomy suppression and what thirteen years of it does to the interior.',
    tags: ['Manufactured architecture', 'Conditional worth', 'Autonomy suppression', 'The act of naming'],
  },
  {
    slug: 'william-shatner',
    name: 'William Shatner',
    field: 'Actor, author, went to space at age 90',
    hook: 'Still performing at 90. The Kirk problem, the survival drive, the death of Nerine, and the moment on the Blue Origin capsule when he wept and could not explain why. That is the map.',
    tags: ['The Kirk problem', 'Survival drive', 'The relational record', 'Space at 90'],
  },
  {
    slug: 'musk-trump',
    name: 'Elon Musk + Donald Trump',
    field: 'Relationship Map · Entrepreneur, CEO · 47th President of the United States',
    hook: 'Two men whose entire architecture requires them to be the most important person in the room, trying to share a room. The terrain analysis is not about politics. It is about structural collision and why the outcome is not difficult to predict.',
    tags: ['Relationship map', 'Two wound structures', 'Cannot share the center', 'Terrain prediction'],
  },
  {
    slug: 'swift-braun',
    name: 'Taylor Swift + Scooter Braun',
    field: 'Relationship Map · Singer-songwriter · Music executive',
    hook: 'The most public case in recent memory of a business transaction directly activating a wound structure the other party did not know was there. Taylor\'s Version is not a business decision. It is a terrain response.',
    tags: ['Relationship map', 'Documentation wound', 'Acquisition as wound activation', "Taylor's Version as terrain act"],
  },
]

export default function PublicMapsIndexPage() {
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
            The best way to understand what a Terrain Map does is to see one. These are demonstrations of the ReLoHu methodology applied to public figures whose interior lives are extensively documented through their own writing, interviews, and biographical record.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            These are cartographic exercises, not clinical assessments or diagnoses. All content is drawn from publicly available material. No private sessions or personal contact of any kind.
          </p>
        </div>
      </section>

      {/* ==================== FIGURE CARDS ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-12">The archive</p>
          <div className="space-y-0">
            {figures.map((figure, i) => (
              <Link key={i} href={`/maps/public/${figure.slug}`} className="group block">
                <div className="flex gap-8 py-10 border-t border-slate-100 hover:border-teal-100 transition-colors">
                  <div className="text-[11px] font-mono text-slate-300 pt-1 shrink-0 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h2 className="text-xl font-medium text-slate-800 group-hover:text-teal-600 transition-colors">
                        {figure.name}
                      </h2>
                      <span className="text-slate-300 group-hover:text-teal-400 transition-colors text-lg shrink-0">→</span>
                    </div>
                    <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-4">{figure.field}</p>
                    <p className="text-slate-500 leading-relaxed text-sm mb-5">{figure.hook}</p>
                    <div className="flex flex-wrap gap-2">
                      {figure.tags.map((tag, j) => (
                        <span key={j} className="text-[10px] font-mono tracking-wide text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="border-t border-slate-100" />
          </div>

          <div className="mt-12 py-8 border border-dashed border-slate-200 rounded-xl px-6 text-center">
            <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-2">This archive is growing</p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto">
              New figures are added as the methodology warrants it. The selection criterion is not fame but documentation public figures whose interior lives are rich enough to map with specificity.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== BRIDGE ==================== */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed mb-6 max-w-lg">
            These maps demonstrate the methodology. A session produces the same quality of attention applied to you, not a public figure, and drawing on everything you actually share rather than what is in the public record.
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
