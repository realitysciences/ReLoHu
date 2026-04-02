import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'
import { Calendar, ArrowRight, CheckCircle, FileText, RefreshCw, Users, Compass, Shield, Heart } from 'lucide-react'

export const metadata = {
  title: 'For Drug Rehabs & Recovery Centers | ReLoHu',
  description: 'Most people who leave rehab know what they are recovering from. Very few know who they are recovering into. ReLoHu maps the interior terrain underneath addiction so the work of recovery has something solid to build on.',
}

export default function RehabPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">ReLoHu · Recovery & Rehab</p>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            They know what they're<br />recovering from.<br />Do they know who they're<br />recovering into?
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            Sobriety is not the finish line. It is the beginning of a life that has to be rebuilt from the inside out. Most people leaving rehab have never had a clear picture of their own interior terrain. ReLoHu gives them one.
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

      {/* ==================== THE REAL PROBLEM ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">Why relapse happens to people who tried</p>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p className="text-xl font-medium text-slate-800">
              Addiction is almost never the primary problem. It is what someone built on top of something they could not name, could not face, or could not find another way to hold.
            </p>
            <p>
              The substance managed something: pain, disconnection, a self that felt unacceptable, a pattern of relating that had no other outlet. Removing the substance without mapping what it was managing leaves the underlying terrain untouched. The person gets sober and walks back into the same interior world that drove them to use in the first place.
            </p>
            <p>
              Rehab addresses the addiction. Very few programs address the person underneath it with enough specificity to actually change what comes next. Group therapy, the 12 steps, cognitive behavioral work: all of these are valuable. None of them produce a complete picture of the specific individual sitting in front of you.
            </p>
            <p className="text-slate-800 font-medium">
              That is the gap. And it is where relapse lives.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== WHAT MAPPING ADDS ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">What a map adds to recovery</p>
          <div className="space-y-8">
            {[
              {
                icon: Compass,
                title: 'A picture of who they are underneath the addiction',
                body: 'The person who walked into active addiction had a psychology before any of it started. Patterns, strengths, relational architecture, ways of seeing themselves and others. The addiction layered over that, obscured it, and in some cases accelerated it. ReLoHu maps what is actually there: not the addict, but the person.',
              },
              {
                icon: Shield,
                title: 'The upstream drivers, named honestly',
                body: 'Every addiction has upstream causes: the emotional needs it served, the pain it managed, the parts of the self it silenced or amplified. Naming those drivers precisely gives the person in recovery something specific to work with rather than a general directive to "build better coping skills."',
              },
              {
                icon: Heart,
                title: 'Something to recover into',
                body: 'Recovery requires a self-concept that is worth sustaining sober. For many people in recovery, that self-concept is fragile or absent. The map gives them a clear, honest picture of who they actually are: their strengths, what makes them distinct, the people from history and fiction who share their psychological structure. Something to orient around that isn\'t just the absence of the substance.',
              },
              {
                icon: RefreshCw,
                title: 'A foundation for ongoing work',
                body: 'Counselors, sponsors, and therapists who know a client\'s terrain can work faster and go further. The Terrain Map becomes a shared document: something the treatment team can reference, something the client can return to when the patterns pull, something that doesn\'t require rebuilding from scratch at every new stage of recovery.',
              },
              {
                icon: Users,
                title: 'Relational patterns that drove the isolation',
                body: 'Addiction almost always involves relational collapse: disconnection from family, erosion of trust, isolation that feeds itself. The map shows the relational architecture that was in place before the collapse: how the person builds trust, where they create distance, what they need from others and what tends to push people away. Recovery of relationships requires knowing this.',
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

      {/* ==================== WHERE IT FITS IN THE PROCESS ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">Where ReLoHu fits in the recovery process</p>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-12 leading-snug">
            Before. During. After. And whenever the terrain shifts.
          </h2>
          <div className="space-y-10">
            {[
              {
                step: '1',
                title: 'Early in treatment: know who you are working with',
                body: 'A ReLoHu session early in treatment gives the clinical team a complete picture of the individual before the therapeutic relationship is fully established. Not a diagnostic label. A map of the actual person: their patterns, their strengths, the upstream landscape the addiction was built on.',
              },
              {
                step: '2',
                title: 'Mid-treatment: when the work gets stuck',
                body: 'There are moments in recovery when progress stalls, when a client can\'t see what is blocking them, when the same pattern keeps showing up without a name. A mapping session at that point can surface what the treatment relationship hasn\'t reached yet: the structure beneath the behavior.',
              },
              {
                step: '3',
                title: 'Pre-discharge: building what they are walking into',
                body: 'Leaving treatment is one of the highest-risk moments in recovery. A mapping session before discharge gives the client a clear picture of who they are, what they are walking back into, and what their terrain requires to stay stable. Something to hold onto that is theirs.',
              },
              {
                step: '4',
                title: 'Aftercare: when the real world tests everything',
                body: 'The first months after discharge are where the work of treatment either holds or collapses. A ReLoHu session in aftercare tracks what has shifted, what the early recovery period revealed about the person, and where the terrain needs more attention. The map evolves as they do.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-5 items-start">
                <div className="w-8 h-8 rounded-full bg-teal-600 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">{step}</div>
                <div>
                  <h3 className="font-medium text-slate-800 mb-1">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== NOT A REPLACEMENT ==================== */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-8">What ReLoHu is not</p>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-snug">
            Not a replacement for treatment. A tool that makes treatment go further.
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              ReLoHu is not clinical treatment. Dr. David is not a licensed addiction counselor or psychiatrist. ReLoHu does not diagnose, prescribe, or provide medical or psychiatric care. It is a psychological mapping methodology: a structured conversation that produces a set of written reports describing the interior landscape of the person who sat for it.
            </p>
            <p>
              What it adds to a clinical setting is specificity. Standard treatment protocols work with populations. ReLoHu works with individuals. The Terrain Map gives the treatment team something no intake form or structured assessment produces: a complete, honest portrait of the specific person, in their own words, analyzed through a proprietary methodology built for that purpose.
            </p>
            <p className="text-slate-300">
              Used alongside clinical treatment, not instead of it, ReLoHu gives recovery work a foundation it often doesn't have: a clear picture of who is doing the recovering.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== QUOTE ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic">
            "Addiction removes the person from themselves by degrees. Recovery is not just stopping the substance. It is finding out who was there before it started, and building something worth staying sober for."
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
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">What a session produces</p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Five written reports, delivered as documents the client keeps and can share with their treatment team.
          </p>
          <div className="space-y-4">
            {[
              { name: 'Terrain Map', desc: 'The full picture: psychological patterns, relational architecture, behavioral drivers, and the upstream landscape the addiction was built on. The foundation the rest of recovery can build from.' },
              { name: 'Archetype Report', desc: 'The deeper structural forces shaping how this person moves through the world. Not a diagnostic category: the specific configuration of pressures and tendencies that make them who they are.' },
              { name: 'People They Are Similar To', desc: 'Real people and fictional characters whose psychological structure resembles theirs in specific, documented ways. Often the most immediately humanizing part of the map for someone who has lost their sense of self.' },
              { name: 'Strengths and Weaknesses', desc: 'Both sides, with equal honesty. Where this person\'s configuration gives them advantage, and where it creates friction. Recovery requires knowing both.' },
              { name: 'Unique Things They Probably Never Knew About Themselves', desc: 'The observations that don\'t fit standard categories. Often what shifts a person\'s relationship to themselves most directly.' },
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
              View a full sample report
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-teal-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-200 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">For treatment centers, counselors, and individuals in recovery</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 leading-snug">
            Give recovery something to build on.
          </h2>
          <p className="text-teal-100 leading-relaxed mb-10 max-w-lg mx-auto">
            A 15-minute orientation call with Dr. David is free. Whether you are a treatment center exploring how ReLoHu fits into your program, a counselor considering it for a specific client, or an individual in recovery: the call costs nothing and requires nothing.
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
