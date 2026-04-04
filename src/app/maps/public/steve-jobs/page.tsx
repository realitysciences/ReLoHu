import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Steve Jobs: Terrain Map | ReLoHu',
  description: 'A demonstration of the ReLoHu Terrain Map methodology applied to Steve Jobs, based entirely on publicly available material. Cartographic exercise, not clinical assessment.',
}

const sections = [
  {
    label: 'The abandonment that formed everything',
    body: `Jobs was born to unmarried graduate students who arranged an adoption. He was adopted by Paul and Clara Jobs, who raised him in Silicon Valley. He learned of the adoption as a young child. He has described learning this as a profound shock: he was chosen, yes, but first he was given away. Both facts were true simultaneously.\n\nHis biological parents eventually married and had another child: his biological sister Mona Simpson, a novelist, whom he met and maintained a relationship with as an adult. His biological father, Abdulfattah Jandali, became a restaurant owner. Jobs found him, learned who he was, and chose not to meet him. He described this as deliberate. The man who controlled enormous things chose not to control this one thing, or perhaps chose a particular form of control: refusal.`,
  },
  {
    label: 'Control as wound response',
    body: `The management style documented by Walter Isaacson, by colleagues, and by his own account was characterized by extreme control, perfectionism, a reality distortion field that bent others to his vision, and the capacity for cruelty toward people who did not meet his standards. The products he made were beautiful. The process of making them was often not.\n\nThis combination is the hallmark of someone who experienced early powerlessness and converted it into its opposite. He could not control being given away. He could not control being adopted rather than born into. He could control every pixel of every screen, every detail of every product, every aspect of every presentation. The domain of control expanded as far as the institution would allow.`,
  },
  {
    label: 'The relational cost',
    body: `He denied paternity of his first child Lisa for years, despite evidence to the contrary, and the relationship with her was damaged by this for much of her childhood. He had a complicated relationship with his biological family. His treatment of colleagues and employees was inconsistent and sometimes genuinely harmful.\n\nThe pattern in the relational register is consistent with the origin architecture. A person organized around abandonment will find intimacy difficult in specific ways. Not because they don't want connection but because the vulnerability required for genuine connection activates the original wound. Control is a defense against the vulnerability that closeness requires.`,
  },
  {
    label: 'The biography impulse',
    body: `In the last year of his life, Jobs authorized Walter Isaacson to write his biography. He cooperated extensively, knowing he would not have editorial control over the result, knowing it would be published after his death. He said explicitly that he wanted his children to know who he really was.\n\nThis is a significant terrain signal. The man who controlled everything chose, at the end, to release control of his own narrative in service of being known. Not to the world, specifically: to his children. He wanted the people closest to him to have access to the full picture, including the parts that were not flattering. That impulse, in the context of the abandonment architecture, is the most revealing single act in the public record.`,
  },
  {
    label: 'What ReLoHu would reach',
    body: `A ReLoHu session would want to sit with the child who was told he had been given away. Not the adult's relationship to that fact but the child's. What was learned in that moment about what love requires? About whether being chosen is the same as being wanted? About what has to be true about you for someone to keep you?\n\nThe career answers these questions in the register of objects: he made things that were inarguably, undeniably worth keeping. The map would be interested in whether that answer ever actually landed. Whether the products ever resolved the question the adoption opened.\n\nBuilt from publicly available material only: Walter Isaacson biography Steve Jobs (2011), published interviews, and Lisa Brennan-Jobs memoir Small Fry (2018). No private sessions or personal contact of any kind. Cartographic exercise, not clinical assessment.`,
  },
]

export default function SteveJobsMapPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />
      <section className="pt-32 pb-16 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <Link href="/maps/public" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors">
            &larr; Example Maps
          </Link>
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Terrain Map · Public Figure</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Steve Jobs</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Co-founder of Apple, NeXT, and Pixar (1955-2011)</p>
          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: Walter Isaacson biography Steve Jobs (2011), Lisa Brennan-Jobs memoir Small Fry (2018), and published interviews. No private sessions, personal contact, or non-public information of any kind. Cartographic exercise, not clinical assessment or diagnosis.
          </p>
        </div>
      </section>
      {/* ==================== VIDEO EMBED ==================== */}
      <section className="px-6 bg-slate-900 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/5fI3zz2cp3k"
              title="Steve Jobs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            Abandonment as engine. The man who controlled everything except the thing that formed him first.
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
              &larr; Back to Example Maps
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
