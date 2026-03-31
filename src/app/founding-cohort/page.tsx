import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'
import { Calendar, FileText, Phone, CheckCircle, Users, BookOpen, Sparkles } from 'lucide-react'
import PayButton from '@/components/PayButton'

export const metadata = {
  title: 'First Public Clients | ReLoHu',
  description: 'ReLoHu is opening to its first public clients through April. 90-minute intake, five detailed reports, and a Terrain Map reading session — at the founding cohort price of $497.',
}

export default function FoundingCohortPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <SiteNav />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">ReLoHu · First Public Clients</p>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            April only.<br />Five reports. One complete picture.
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl">
            After two years of development and a private cohort of over a dozen sessions, ReLoHu is opening to its first public clients. The founding cohort offer includes a 90-minute intake, five detailed reports, and a 30-minute report reading session. Standard sessions, once this group closes, are 60 minutes with a single Terrain Map. This bundle does not come back.
          </p>
          <a
            href="https://calendly.com/relohu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-4 text-base transition-all hover:shadow-lg hover:shadow-teal-100"
          >
            <Calendar className="w-4 h-4" />
            Claim Your Spot · $497
          </a>
          <p className="text-slate-400 text-sm mt-4">April only · $997 after April · 5 reports + report reading included</p>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">What's Included</p>

          <div className="space-y-8">

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-1">
                  90-minute intake session
                  <span className="ml-2 text-[10px] font-mono tracking-wider text-slate-400 bg-slate-100 rounded-full px-2 py-0.5 align-middle">Standard: 60 min</span>
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  A conversation, not a questionnaire. Dr. Gedalia listens carefully to what you say and how you say it. The extra 30 minutes over the standard session means more ground covered and a richer set of reports.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-1">Verbal readback during the session</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Before the call ends, Dr. Gedalia shares initial findings directly with you. The first time you hear certain things about yourself described precisely is part of the process.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-2">
                  Five detailed reports, delivered as files you keep
                  <span className="ml-2 text-[10px] font-mono tracking-wider text-slate-400 bg-slate-100 rounded-full px-2 py-0.5 align-middle">Standard: Terrain Map only</span>
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Terrain Map', desc: 'Your psychological patterns, relational architecture, and the upstream drivers behind how you behave. The foundation everything else builds on.' },
                    { name: 'Archetype Report', desc: 'The deeper structural patterns that run through your personality — not a category, but a map of the forces that shape how you move through the world.' },
                    { name: 'People You Are Similar To', desc: 'Real people and fictional characters — from history, literature, film, television, comics — whose psychology resembles yours in specific, documented ways. Not flattery. Precision.' },
                    { name: 'Your Strengths and Weaknesses', desc: 'An honest assessment of where your particular configuration gives you an edge and where it creates friction. Both sides, clearly named.' },
                    { name: 'Unique Things You Probably Never Knew About Yourself', desc: 'The observations that don\'t fit neatly into a category. The things most people never get told. Often the part people remember longest.' },
                  ].map(({ name, desc }) => (
                    <div key={name} className="pl-4 border-l-2 border-teal-100">
                      <p className="text-sm font-medium text-slate-700">{name}</p>
                      <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                <BookOpen className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-1">30-minute Terrain Map reading session</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  A dedicated call to go through the Terrain Map together. Dr. Gedalia walks through what it says and what it means for you specifically. The other four reports are delivered directly as documents you keep. Included in the founding cohort price.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-14 p-8 bg-slate-50 border border-slate-200 rounded-2xl">
            <div className="flex items-baseline justify-between mb-1">
              <div className="flex items-baseline gap-3">
                <p className="text-3xl font-medium text-slate-800">$497</p>
                <p className="text-base text-slate-400 line-through">$997</p>
              </div>
              <p className="text-sm text-teal-600 font-mono">April only</p>
            </div>
            <p className="text-slate-500 text-sm mb-6">90-minute intake, 5 reports, and a 30-minute report reading session. One price. No upsells. Price returns to $997 in May, with a standard 60-minute intake and Terrain Map only.</p>
            <PayButton
              className="w-full inline-flex items-center justify-center gap-2.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white font-medium rounded-full px-8 py-4 text-base transition-all"
            />
            <p className="text-center text-slate-400 text-xs mt-3">Secure checkout via Stripe · No commitment beyond payment</p>
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100" /></div>
              <div className="relative flex justify-center"><span className="px-3 text-xs text-slate-400 bg-white">or start with a free call first</span></div>
            </div>
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium rounded-full px-8 py-3.5 text-sm transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book a Free Orientation Call
            </a>
            <p className="text-center text-slate-400 text-xs mt-3">15 min · No commitment · Just a conversation to see if it's right for you</p>
            <p className="text-center text-slate-400 text-xs mt-2">
              Already booked? <a href="/intake" className="text-teal-500 hover:underline">Fill out your pre-session intake form →</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── The Questions ── */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">What the conversation is actually like</p>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-4 leading-snug">
            Questions most people have never been asked before.
          </h2>
          <p className="text-slate-500 leading-relaxed mb-10">
            Not because they are unusual for the sake of it. Because they are aimed at what is actually there, rather than what is convenient to ask. A few examples from real sessions:
          </p>
          <div className="space-y-5">
            {[
              {
                q: 'When you say you\'re full of love for someone -- what do you actually mean by that?',
                note: 'Most people have never been asked to unpack a word they use constantly.',
              },
              {
                q: 'How do you feel about crying?',
                note: 'Not "do you cry" -- but your relationship to it. Most people have never been asked.',
              },
              {
                q: 'At what point did you cross that bridge -- and what finally made it possible?',
                note: 'Precision about the moment of change, not just the change itself.',
              },
              {
                q: 'Where do you think that comes from? Not the event -- the part of you that responded that way.',
                note: 'The question behind the question.',
              },
              {
                q: 'How does someone end up there without seeing it coming?',
                note: 'Curious, not judgmental. Aimed at understanding, not evaluation.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl p-6 bg-slate-50/50">
                <p className="text-slate-800 font-medium leading-relaxed mb-2">"{item.q}"</p>
                <p className="text-slate-400 text-sm italic">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm mt-8 leading-relaxed">
            The questions change depending on who you are and what you bring. These are examples, not a script. There is no script.
          </p>
        </div>
      </section>

      {/* ── Why founding cohort ── */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">About the Cohort</p>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6 leading-snug">
            This is not a soft launch.<br />It is a considered opening.
          </h2>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              ReLoHu has been in development for two years. In that time, over a dozen sessions were conducted privately, with people who came through word of mouth, who understood what they were part of, and whose experiences shaped what the methodology became.
            </p>
            <p>
              This group is different. These are the first public clients: people who find their way here through the site, who read what ReLoHu is and decide it's for them. Keeping it to April lets Dr. Gedalia stay close to the work: tracking what lands, what the reports produce, and how people use them during this first phase of public availability.
            </p>
            <p>
              The five-report bundle is part of this group's offer because their experience continues to matter to how ReLoHu develops. That's not a marketing reason. It's the actual reason.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <Users className="w-4 h-4 text-teal-500 shrink-0" />
            <p className="text-sm text-slate-500">
              Want to see what the output looks like? <Link href="/sample-report" className="text-teal-600 hover:underline">View Sample Report #1</Link> or <Link href="/sample-report-2" className="text-teal-600 hover:underline">Sample Report #2</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">Questions</p>

          <div className="space-y-10">

            <div>
              <h3 className="font-medium text-slate-800 mb-2">What actually happens in the intake?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                A 1–2 hour conversation, not a questionnaire, not a structured interview with a script. Dr. Gedalia asks questions and listens carefully to what you say and how you say it. After the session, what you shared is analyzed using ReLoHu's proprietary methodology to produce your Terrain Map.
              </p>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div>
              <h3 className="font-medium text-slate-800 mb-2">What is the Terrain Map?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                A structured report organized around your psychological patterns, relational architecture, upstream behavioral drivers, and character comparisons: people from history or fiction whose psychology resembles yours in specific ways. It is not a diagnosis. It is a map. You keep it.
              </p>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div>
              <h3 className="font-medium text-slate-800 mb-2">How is this different from therapy?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Therapy works at the narrator level: the story you tell about yourself and what's happening in your life. ReLoHu works upstream from that, mapping the drivers that produce the story in the first place. It's not treatment. It's cartography.
              </p>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div>
              <h3 className="font-medium text-slate-800 mb-2">How is this different from personality frameworks like Myers-Briggs or Human Design?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Those frameworks categorize. ReLoHu maps. The difference is that a category tells you what type you are; a map shows you how your specific terrain is configured and why you keep arriving at the same places.
              </p>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div>
              <h3 className="font-medium text-slate-800 mb-2">Why is this offer only available in April?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                ReLoHu has been in development for two years. Opening with a founding cohort price lets Dr. Gedalia stay close to the work during the first phase of public availability — tracking what lands, what the reports produce, and how clients use them. In May the price returns to $997 and the bundle changes to a standard 60-minute intake with a single Terrain Map.
              </p>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div>
              <h3 className="font-medium text-slate-800 mb-2">What happens after this group closes?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Standard sessions are available at $997: a 60-minute intake and a single Terrain Map. The founding cohort bundle — 90-minute intake, five reports, and the report reading session — is available through April only and does not come back.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── What comes next ── */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-6">After Your Terrain Map</p>
          <h2 className="text-xl font-medium text-slate-700 mb-3">What comes next, for those who want to go further.</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Because Dr. Gedalia already knows your terrain, returning sessions move faster and go further than the first one. Three paths exist for returning clients. None are required, all are available.
          </p>
          <div className="space-y-4">
            {[
              {
                name: 'Lens Report',
                price: '$347',
                desc: 'No new session. A new analytical pass on your existing transcript through a different framework: archetypes, character comparisons, a specific psychological lens. A meaningful addition to your existing map.',
              },
              {
                name: 'Depth Session',
                price: '$697',
                desc: 'A new intake that goes deeper into something your first map surfaced. Picks up exactly where the Terrain Map left off and produces a more targeted report. Shorter than the original. You are not starting from scratch.',
              },
              {
                name: 'Fresh Session',
                price: '$847',
                desc: 'A new intake on a different area of life: relationships, work, a specific pattern. Similar scope to the original session, but without the orientation overhead. The existing relationship means you go deeper sooner.',
              },
            ].map(({ name, price, desc }) => (
              <div key={name} className="flex gap-5 items-start bg-white border border-slate-200 rounded-xl p-5">
                <div className="shrink-0 text-right min-w-[52px]">
                  <p className="text-sm font-medium text-teal-600">{price}</p>
                </div>
                <div className="w-px self-stretch bg-slate-100 shrink-0" />
                <div>
                  <p className="font-medium text-slate-800 text-sm mb-1">{name}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-xs mt-6 leading-relaxed">
            These sessions are available to anyone who has completed a Terrain Map session. <a href="/returning-clients" className="text-teal-500 hover:underline">Learn more →</a>
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-6 bg-teal-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-200 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">April Only · $497 · 5 Reports + Report Reading · $997 in May</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 leading-snug">
            Ready to see your map?
          </h2>
          <p className="text-teal-100 leading-relaxed mb-10 max-w-lg mx-auto">
            Start with a free 15-minute orientation call with Dr. Gedalia. No commitment, just a conversation to see if ReLoHu is right for you right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PayButton
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-teal-50 disabled:opacity-60 text-teal-700 font-medium rounded-full px-10 py-4 text-base transition-all"
            />
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-teal-400 hover:bg-teal-600 text-white font-medium rounded-full px-8 py-4 text-base transition-all"
            >
              <Calendar className="w-4 h-4" />
              Free Orientation Call
            </a>
          </div>
          <p className="text-teal-300 text-xs mt-4">Secure checkout via Stripe · or start with a free 15-min call</p>
          <p className="text-teal-300/70 text-xs mt-2">
            Already booked? <a href="/intake" className="text-teal-200 hover:underline">Fill out your pre-session intake form →</a>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
