import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Brene Brown: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Brene Brown, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'The researcher\'s position',
    body: `Brown built her career on the proposition that vulnerability is strength. The proposition is true, and she has done genuine, rigorous work to demonstrate it. But the researcher's position is itself interesting terrain: she observes vulnerability, theorizes it, teaches it to others, and makes it legible to millions. The question of her own vulnerability her specific wound, her particular texture remains productively open, in the way that a practitioner's always does.\n\nThis is not a criticism. It is a structural observation. The person who names the thing for everyone else occupies a particular position in relation to the thing. The cartographer is not the map.`,
  },
  {
    label: 'The breakdown and what it disclosed',
    body: `Brown has talked publicly about a period of personal crisis that followed her early research a moment when the data became too personal, when her findings about vulnerability confronted her own defenses directly. She describes it as a breakdown. She went to therapy. She calls the therapist "the Texan."\n\nWhat is notable is how much that period features in her origin story and how relatively thin the public account of it is, for someone whose work is about the value of disclosure. The breakdown became the origin story. What the breakdown was actually like what specifically cracked, what she found underneath is mostly off the record. That gap is not incidental. It is probably structural.`,
  },
  {
    label: 'Meta-layer richness',
    body: `The most interesting thing about Brown as a ReLoHu subject is the meta-layer. She is doing something adjacent to what ReLoHu does: naming patterns of shame and vulnerability, making the invisible visible, giving people language for something they already knew but couldn't articulate. Her work has reached tens of millions of people.\n\nWhat she doesn't do by design, probably is map the particular texture of Brene Brown's own wound with the specificity her methodology would bring to a client. She uses her own experiences as illustrations, selectively. The researcher's relationship to her own material is different from the subject's. She gets to choose what goes in.\n\nA session turns that around. You don't get to choose what goes in. You share and someone maps what they hear. The result is a portrait you didn't author. That is different from anything she has produced about herself.`,
  },
  {
    label: 'Vulnerability as vocation and as structure',
    body: `There is a version of a person for whom vulnerability becomes a professional identity something to be demonstrated, taught, and modeled in a way that subtly replaces the experience of it. The performance of openness can become its own defense.\n\nThis is a hypothesis, not a finding. Brown has produced real disclosure in her work. She has also produced a lot of it, for very large audiences, over many years. The production of vulnerability at scale is a different thing from the experience of it with one other person who is paying full attention.\n\nWhat the methodology would be interested in: not the content of what she discloses, but the register in which she inhabits it. Is there a version of her wound that hasn't been usefully metabolized yet? That is where the map would want to go.`,
  },
  {
    label: 'What ReLoHu would reach',
    body: `A ReLoHu session with Brown would be interested in what stays off the map. Not the vulnerability she teaches she is fluent in that register. But the specific texture of her wound before it became useful. The thing that cracked in the breakdown. The particular shape of the shame that the research was originally in response to.\n\nThe irony of being one of the world's foremost experts on vulnerability is that the expertise itself becomes a kind of armor. You know the concepts. You can name what's happening. The question is whether naming it is the same as being in it.\n\nThis map is built from publicly available material only: her books, TED talks, podcast, and interviews. No private sessions, personal contact, or non-public information of any kind. This is a cartographic exercise, not a clinical assessment or diagnosis.`,
  },
]

export default function BreneBrownMapPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />
      <section className="pt-32 pb-16 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <Link href="/maps/public" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors">
            <- Example Maps
          </Link>
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Terrain Map · Public Figure</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Brene Brown</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Research professor, author, speaker</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: The Gifts of Imperfection (2010), Daring Greatly (2012), Rising Strong (2015), Dare to Lead (2018), Atlas of the Heart (2021), TED talks, and Unlocking Us podcast episodes. No private sessions, personal contact, or non-public information of any kind. This is a cartographic exercise, not a clinical assessment or diagnosis.
          </p>
        </div>
      </section>
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto md:ml-[3.5rem] md:pl-6">
          <p className="text-slate-600 leading-relaxed italic">
            The researcher who built a career on vulnerability while the question of her own remains productively open. The meta-layer is where it gets interesting.
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
              <- Back to Example Maps
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
