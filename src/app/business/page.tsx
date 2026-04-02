import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'
import { Calendar, ArrowRight, CheckCircle, FileText, Target, AlertTriangle, TrendingUp, Users, Compass, Zap } from 'lucide-react'

export const metadata = {
  title: 'For Business Professionals & Entrepreneurs | ReLoHu',
  description: 'The highest-leverage investment a business leader can make is in understanding how they actually operate. ReLoHu maps the interior patterns driving your decisions, leadership style, and blind spots.',
}

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">ReLoHu · Business & Entrepreneurs</p>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            Every business problem<br />has an author.
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            The decisions you make, the conflicts that keep recurring, the partnerships that fail the same way twice. These are not random. They follow patterns. And those patterns come from you. Most leaders never map them. ReLoHu does.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-4 text-base transition-all hover:shadow-lg hover:shadow-teal-100"
            >
              <Calendar className="w-4 h-4" />
              Book a Free Orientation Call
            </a>
            <Link
              href="/sample-report"
              className="inline-flex items-center gap-2.5 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-medium rounded-full px-8 py-4 text-base transition-all"
            >
              <FileText className="w-4 h-4" />
              View a Sample Report
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== THE REAL VARIABLE ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">The variable most leaders ignore</p>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p className="text-xl font-medium text-slate-800">
              Entrepreneurs and executives invest heavily in understanding markets, competitors, and teams. Almost none of them invest the same rigor in understanding themselves.
            </p>
            <p>
              That is the gap where the most expensive mistakes happen. A hiring pattern that keeps producing the wrong people. A negotiating style that wins in the short term and loses the relationship. A tolerance for chaos that drives results in year one and burns people out in year three. A need to be the smartest person in the room that prevents the company from scaling.
            </p>
            <p>
              These are not strategic failures. They are pattern failures. And patterns don't change until they're named.
            </p>
            <p className="text-slate-800 font-medium">
              The highest-leverage investment a leader can make is in understanding how they actually operate: not how they think they operate, and not how they present in a 360 review. How they actually operate, upstream of behavior, where the patterns live.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== WHAT MAPPING REVEALS ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">What a map reveals</p>
          <div className="space-y-8">
            {[
              {
                icon: AlertTriangle,
                title: 'Your blind spots, named honestly',
                body: 'Not a 360 review filtered through what colleagues are willing to say. Not a personality quiz that tells you what you want to hear. A direct, honest account of where your particular configuration creates friction: in leadership, in relationships, in decisions under pressure.',
              },
              {
                icon: TrendingUp,
                title: 'Where your strengths actually come from',
                body: 'Most leaders have a vague sense of what they\'re good at. Very few understand why they\'re good at it: what upstream configuration produces that capability, and what it costs on the other side. Understanding the source makes the strength more reliable and the cost more manageable.',
              },
              {
                icon: Users,
                title: 'How you operate in relationships',
                body: 'Partnerships fail. Key hires don\'t work out. Investors and founders clash. Clients disengage. Beneath the specific circumstances of each, there is almost always a relational pattern. The map shows you yours: how you build trust, where you create distance, what pulls you toward certain people and what makes collaboration eventually impossible.',
              },
              {
                icon: Target,
                title: 'The pattern beneath the recurring problem',
                body: 'If the same kind of conflict keeps happening, with co-founders, with employees, with clients, in board rooms, the common variable is you. The map doesn\'t assign blame. It shows you the structure of the pattern so you can actually do something about it instead of attributing it to circumstances.',
              },
              {
                icon: Compass,
                title: 'How you make decisions when stakes are high',
                body: 'Your decision-making patterns show up most clearly under pressure. The map traces the interior drivers behind how you act when something genuinely matters: what you move toward, what you avoid, what you override, and at what cost.',
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 mb-2">{title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== NOT THERAPY ==================== */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-8">This is not therapy</p>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-snug">
            One experience. A complete picture. No ongoing commitment.
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              ReLoHu is a single 90-minute conversation with Dr. David, followed by five written reports delivered as documents you keep. There is no ongoing therapeutic relationship. No weekly sessions. No process of slowly building disclosure over months.
            </p>
            <p>
              You come in, you talk, and you leave with a complete map of your interior terrain. Executives and entrepreneurs who have spent years in therapy often find that ReLoHu surfaces things the therapeutic relationship hasn't reached, precisely because it approaches from a different angle: not treatment, but cartography.
            </p>
            <p className="text-slate-300">
              You don't need to be struggling. You need to be curious about what is driving the results you keep getting, and willing to look at it honestly.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== QUOTE ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic">
            "Most leaders are running sophisticated operations with no map of the person running them. That is not a personal failing. It's a gap in the tools that have been available. ReLoHu was built to close it."
          </p>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-8 h-px bg-teal-300" />
            <p className="text-sm text-slate-400 font-medium tracking-wide">Dr. David, Founder of ReLoHu</p>
            <div className="w-8 h-px bg-teal-300" />
          </div>
        </div>
      </section>

      {/* ==================== THE REPORTS ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">What the session produces</p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Five written reports, delivered as documents you keep. You can use them privately, share them with a coach or advisor, or reference them whenever the pattern shows up again.
          </p>
          <div className="space-y-4">
            {[
              { name: 'Terrain Map', desc: 'The full picture: your psychological patterns, relational architecture, behavioral drivers, and the upstream causes of how you show up as a leader and decision-maker.' },
              { name: 'Archetype Report', desc: 'The deeper structural forces shaping how you operate: not a personality type, but the specific configuration of pressures and tendencies that produce your behavior.' },
              { name: 'People You Are Similar To', desc: 'Historical figures, executives, and fictional characters whose psychological profile resembles yours in specific, documented ways. Often the most immediately useful reference point.' },
              { name: 'Strengths and Weaknesses', desc: 'Both sides, with equal honesty. Where your configuration gives you an edge, and where it creates friction, named clearly enough to actually be useful.' },
              { name: 'Unique Things You Probably Never Knew About Yourself', desc: 'The observations that don\'t fit standard categories. Often what changes how you see a recurring problem.' },
            ].map(({ name, desc }) => (
              <div key={name} className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 hover:border-teal-200 transition-colors">
                <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-800">{name}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/sample-report"
              className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-medium"
            >
              <FileText className="w-4 h-4" />
              View a full sample report →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-teal-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-200 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">One session. Five reports. A complete picture.</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 leading-snug">
            Know the person running the operation.
          </h2>
          <p className="text-teal-100 leading-relaxed mb-10 max-w-lg mx-auto">
            A 15-minute orientation call with Dr. David is free and requires nothing. If ReLoHu is the right tool for where you are, you'll know quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-teal-50 text-teal-700 font-medium rounded-full px-10 py-4 text-base transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book a Free Orientation Call
            </a>
            <Link
              href="/sessions"
              className="inline-flex items-center gap-2 border border-teal-400 hover:bg-teal-600 text-white font-medium rounded-full px-8 py-4 text-base transition-all"
            >
              View Sessions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-teal-300 text-xs mt-6">
            Full Session $497 · Terrain Session $250 · Five reports, 90-minute intake.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
