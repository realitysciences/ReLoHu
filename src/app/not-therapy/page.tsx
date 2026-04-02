import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const metadata = {
  title: 'Not Therapy. Something Else. | ReLoHu',
  description: 'If you have done therapy and still feel unknown, ReLoHu is not more of the same. Here is how it differs, and what it is actually for.',
}

const comparisons = [
  {
    dimension: 'Primary goal',
    therapy: 'Reduce symptoms, process trauma, improve functioning',
    relohu: 'Produce a complete, accurate map of who you actually are',
  },
  {
    dimension: 'What it treats',
    therapy: 'What is wrong or dysregulated',
    relohu: 'The whole person, including what is working but unseen',
  },
  {
    dimension: 'Time horizon',
    therapy: 'Ongoing relationship, often months or years',
    relohu: 'One deep session with a lasting artifact you keep',
  },
  {
    dimension: 'The frame',
    therapy: 'Clinical: diagnosis, treatment, recovery',
    relohu: 'Witnessing: curiosity, mapping, recognition',
  },
  {
    dimension: 'What you leave with',
    therapy: 'Insight over time, skills, a therapeutic relationship',
    relohu: 'A written Terrain Map of your inner world, immediately',
  },
  {
    dimension: 'Who it requires you to be',
    therapy: 'A patient',
    relohu: 'A person, exactly as you are',
  },
]

export default function NotTherapyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-5 py-2 border-teal-200 text-teal-700 text-sm font-medium tracking-wide bg-teal-50/50">
            NOT THERAPY
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            If you've done therapy<br />
            <span className="text-teal-600">and still feel unknown.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            ReLoHu is not therapy. It is not coaching. It is not a better version of something you've already tried. It is a different thing entirely. This page exists to be honest about what that means.
          </p>
        </div>
      </section>

      {/* ==================== NOT A CRITICISM ==================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">First, a clarification</p>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6">
            This is not a criticism of therapy.
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Therapy is genuinely useful. For processing trauma, managing symptoms, building coping tools, and navigating crisis. It works. Many people need it. Many people should be in it.
            </p>
            <p>
              But therapy is designed to do specific things. And "being fully known" is not always one of them. That is not a failure of therapy. It is simply not what most therapeutic frameworks are built for.
            </p>
            <p>
              What a lot of people experience, even after years of good therapy with good therapists, is that they understand themselves better, but still don't feel genuinely met. They can name their patterns. They know their history. And yet something essential about who they are hasn't quite made it into the room.
            </p>
            <p className="font-medium text-slate-700">
              ReLoHu exists for that gap.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== THE FEELING ==================== */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10 text-center">What that gap feels like</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'You\'ve been in therapy and found it helpful, but you still feel like your therapist only knows part of you.',
              'You\'re fluent in your own psychology. You can explain yourself clearly. And yet something stays unrecognized.',
              'You\'ve done the work. You\'ve read the books. You can name your patterns. And yet the feeling of being truly seen remains rare.',
              'You know how to talk about yourself in ways that land, but you\'ve started to wonder if that\'s different from being actually known.',
              'You leave sessions feeling heard in the moment, but the map that gets built over time doesn\'t quite match the territory.',
              'The framework your therapist works from was built for someone else. You\'ve spent years translating yourself into it.',
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0 mt-2" />
                  <p className="text-slate-600 leading-relaxed text-sm">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8 italic">
            If any of these land, this is not about finding a better therapist. It is about a different kind of encounter.
          </p>
        </div>
      </section>

      {/* ==================== COMPARISON TABLE ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-4">How they differ</p>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-800">
              Two different tools for two different needs.
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
            <div className="grid grid-cols-3 bg-slate-800 text-white">
              <div className="px-6 py-4 text-xs font-semibold tracking-widest uppercase text-slate-400"></div>
              <div className="px-6 py-4 text-xs font-semibold tracking-widest uppercase text-slate-300 border-l border-slate-700">Therapy</div>
              <div className="px-6 py-4 text-xs font-semibold tracking-widest uppercase text-teal-400 border-l border-slate-700">ReLoHu</div>
            </div>
            {comparisons.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-t border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
              >
                <div className="px-6 py-5 text-xs font-semibold text-slate-500 uppercase tracking-wide flex items-center">
                  {row.dimension}
                </div>
                <div className="px-6 py-5 text-sm text-slate-500 leading-relaxed border-l border-slate-100 flex items-center">
                  {row.therapy}
                </div>
                <div className="px-6 py-5 text-sm text-slate-700 leading-relaxed border-l border-slate-100 flex items-center font-medium">
                  {row.relohu}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-xs mt-6">
            These are not competing offerings. Many people find ReLoHu useful alongside therapy, not instead of it.
          </p>
        </div>
      </section>

      {/* ==================== WHAT RELOHU ACTUALLY IS ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">What ReLoHu actually is</p>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-8">
            One session. One map. A different kind of encounter.
          </h2>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              ReLoHu is a single deep session with David: a 1-2 hour conversation in which he listens carefully to what you say and how you say it. He is not listening for symptoms. He is not listening for what fits a diagnostic frame. He is listening for <span className="font-medium text-slate-700">you</span>: the specific texture of how you think, feel, move through the world, and make meaning.
            </p>
            <p>
              After the session, what you shared is analyzed using ReLoHu's methodology and produced as a written Terrain Map: a document that reflects your inner world back to you in language that actually fits. Not a summary. Not an interpretation. A portrait.
            </p>
            <p>
              The session is not ongoing. You don't come back weekly. You don't build a therapeutic relationship over years. You do one thing, deeply, and you leave with something permanent: a map of yourself that you can use, return to, and build from.
            </p>
            <p>
              For some people, that map becomes the most useful thing they've ever had, more useful than years of talking, because for the first time, the whole of who they are is in the room.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== QUOTE ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic">
            "I am not trying to fix you. I am trying to see you. Those are different projects, and almost no one is running the second one."
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-8 h-px bg-teal-300" />
            <p className="text-sm text-slate-400 font-medium tracking-wide">David, Founder of ReLoHu</p>
            <div className="w-8 h-px bg-teal-300" />
          </div>
          <p className="text-xs text-slate-400 mt-4 leading-relaxed max-w-md mx-auto">
            David holds a doctorate in dental surgery and has spent two decades studying how people understand themselves. ReLoHu is not a clinical practice. It is a methodology he built from scratch, as a Reality Scientist: someone who applies systematic, rigorous inquiry to inner experience.
          </p>
        </div>
      </section>

      {/* ==================== WHO IT IS FOR ==================== */}
      <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-900/30 via-slate-900 to-slate-900" />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-6">Who this is for</p>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-8 leading-snug">
            ReLoHu is not for everyone. It is for a specific kind of person.
          </h2>
          <div className="space-y-3">
            {[
              'You have done significant inner work and want something that meets you at your current level',
              'You are not in crisis. You are in motion, and you want a clearer map of the terrain',
              'You are curious about yourself, not just anxious about yourself',
              'You want to be known, not managed',
              'You are willing to speak honestly about your inner life for one to two hours',
              'You are open to receiving a reflection that may surprise you',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-900 border border-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                </div>
                <p className="text-slate-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-400 text-sm leading-relaxed">
            If you are currently in crisis or managing active mental health symptoms, therapy is the right first step. ReLoHu works best alongside or after that foundation is in place.
          </p>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-4">
            Ready to see what this actually is?
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Start with a free 15-minute orientation call. No commitment. David will tell you honestly whether ReLoHu is right for you right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-10 py-4 text-base transition-all duration-300 hover:shadow-lg hover:shadow-teal-100"
            >
              Book a Free Orientation Call
            </a>
            <Link
              href="/founding-cohort"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium rounded-full px-10 py-4 text-base transition-all"
            >
              View the Offer
            </Link>
          </div>
          <p className="text-slate-400 text-sm mt-4">No commitment · Confidential · 15 minutes</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
