import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'
import { Calendar, FileText, Phone, CheckCircle, Users, BookOpen, Sparkles } from 'lucide-react'
import PayButton from '@/components/PayButton'

export const metadata = {
  title: 'Sessions | ReLoHu',
  description: 'Two ways to begin a ReLoHu session. A private, one-on-one conversation with David that produces a focused, honest portrait of your psychological terrain.',
}

export default function SessionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <SiteNav />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">ReLoHu · Sessions</p>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            One conversation.<br />A complete picture of who you are.
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            Most people go their entire lives without ever being fully known. Not by a therapist, not by a partner, not by anyone. ReLoHu is a private, one-on-one conversation with David that produces a focused, honest portrait of your psychological terrain. Two sessions are available, depending on where you want to start.
          </p>
        </div>
      </section>

      {/* ── Free orientation call — most prominent CTA ── */}
      <section className="py-14 px-6 bg-teal-50 border-b border-teal-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-4">Not sure where to start</p>
          <h2 className="text-xl font-medium text-slate-800 mb-2">
            Start with a free 15-minute call.
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-lg">
            A short conversation with David to see whether ReLoHu is right for you right now. No commitment. You will know quickly whether it fits.
          </p>
          <a
            href="https://calendly.com/relohu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-4 text-base transition-all hover:shadow-lg hover:shadow-teal-100"
          >
            <Calendar className="w-4 h-4" />
            Book a Free Orientation Call
          </a>
          <p className="text-slate-400 text-xs mt-3">15 min · No commitment · Just a conversation</p>
        </div>
      </section>

      {/* ── Full Session $497 ── */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">Full Session</p>

          <div className="space-y-8 mb-14">

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-1">90-minute intake session</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  A conversation, not a questionnaire. David listens carefully to what you say and how you say it. The 90 minutes allows more ground to be covered and produces a richer set of reports.
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
                  Before the call ends, David shares initial findings directly with you. The first time you hear certain things about yourself described precisely is part of the process.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-2">Five detailed reports, delivered as files you keep</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Terrain Map', desc: 'Your psychological patterns, relational architecture, and the upstream drivers behind how you behave. The foundation everything else builds on.' },
                    { name: 'Archetype Report', desc: 'The deeper structural patterns that run through your personality. Not a category, but a map of the forces that shape how you move through the world.' },
                    { name: 'People You Are Similar To', desc: 'Real people and fictional characters, from history, literature, film, television, comics, whose psychology resembles yours in specific, documented ways. Not flattery. Precision.' },
                    { name: 'Your Strengths and Weaknesses', desc: 'An honest assessment of where your particular configuration gives you an edge and where it creates friction. Both sides, clearly named.' },
                    { name: 'Unique Things You Probably Never Knew About Yourself', desc: "The observations that don't fit neatly into a category. The things most people never get told. Often the part people remember longest." },
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
                  A dedicated call to go through the Terrain Map together. David walks through what it says and what it means for you specifically. The other four reports are delivered directly as documents you keep.
                </p>
              </div>
            </div>

          </div>

          <div className="p-8 bg-white border border-slate-200 rounded-2xl">
            <div className="flex items-baseline justify-between mb-1">
              <p className="text-3xl font-medium text-slate-800">$497</p>
              <p className="text-sm text-slate-400 font-mono">Full Session</p>
            </div>
            <p className="text-slate-500 text-sm mb-6">90-minute intake, 5 reports, and a 30-minute report reading session. One price. No upsells. No ongoing commitment.</p>
            <PayButton
              label="Full Session · $497"
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
              Already booked? <a href="/intake" className="text-teal-500 hover:underline">Fill out your pre-session intake form</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Terrain Session $250 ── */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-8">Terrain Session</p>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-4 leading-snug">
            Start with your map.
          </h2>
          <p className="text-slate-500 leading-relaxed mb-4 max-w-xl">
            A 60-minute conversation that produces a focused map of your psychological terrain. David listens carefully to what you say and how you say it. Before the session ends, he shares what he sees directly with you. A written summary follows.
          </p>
          <p className="text-slate-500 leading-relaxed mb-10 max-w-xl">
            Most people start here. If you want to go further, everything builds from this foundation.
          </p>

          <div className="space-y-6 mb-10">

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <h3 className="font-medium text-slate-700 mb-1">60-minute intake conversation</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  The same kind of conversation. David listens to what you say and how you say it. No script, no questionnaire. The session determines the map.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <h3 className="font-medium text-slate-700 mb-1">Core pattern summary</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  A focused written document covering your primary psychological patterns, relational architecture, and the upstream drivers behind how you behave. Precise. Yours to keep.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <h3 className="font-medium text-slate-700 mb-1">Verbal readback before the call ends</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Before the session closes, David shares what he is finding, directly. Spoken, not written. Most people describe this as the part that lands hardest: hearing certain things about yourself named precisely, for the first time, by someone who was actually listening.
                </p>
              </div>
            </div>

          </div>

          <div className="p-8 bg-white border border-slate-200 rounded-2xl">
            <div className="flex items-baseline justify-between mb-1">
              <p className="text-3xl font-medium text-slate-800">$250</p>
              <p className="text-sm text-slate-400 font-mono">Terrain Session</p>
            </div>
            <p className="text-slate-500 text-sm mb-6">60-minute intake, core pattern summary, verbal readback. One session, no ongoing commitment. If you want to go further after this, returning sessions pick up exactly where this leaves off.</p>
            <a
              href="https://buy.stripe.com/7sYbIU4pX6CM50F0j8aMU02"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full px-8 py-4 text-base transition-all"
            >
              Terrain Session · $250
            </a>
            <p className="text-center text-slate-400 text-xs mt-3">Secure checkout via Stripe · No commitment beyond payment</p>
          </div>
        </div>
      </section>

      {/* ── What the conversation is actually like — UNCHANGED ── */}
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
                q: "When you say you're full of love for someone -- what do you actually mean by that?",
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

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">Questions</p>

          <div className="space-y-10">

            <div>
              <h3 className="font-medium text-slate-800 mb-2">What actually happens in the intake?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                A conversation, not a questionnaire, not a structured interview with a script. David asks questions and listens carefully to what you say and how you say it. After the session, what you shared is analyzed using ReLoHu's proprietary methodology to produce your reports.
              </p>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div>
              <h3 className="font-medium text-slate-800 mb-2">What is the difference between the Terrain Session and the Full Session?</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                The Terrain Session is a 60-minute intake that produces a focused core summary of your psychological terrain: the primary patterns, relational architecture, and upstream drivers. The Full Session is 90 minutes and produces five detailed reports covering additional dimensions: archetypes, character comparisons, strengths and weaknesses, and observations that don't fit standard categories, plus a dedicated 30-minute session to walk through the Terrain Map together. Most people start with the Terrain Session. Some come in already knowing they want the full picture.
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

          </div>
        </div>
      </section>

      {/* ── After Your Terrain Map — UNCHANGED ── */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-6">After Your Terrain Map</p>
          <h2 className="text-xl font-medium text-slate-700 mb-3">What comes next, for those who want to go further.</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Because David already knows your terrain, returning sessions move faster and go further than the first one. Three paths exist for returning clients. None are required, all are available.
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
            These sessions are available to anyone who has completed a Terrain Map session. <a href="/returning-clients" className="text-teal-500 hover:underline">Learn more</a>
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-6 bg-teal-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-200 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">Start here</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 leading-snug">
            Not sure which session is right for you?
          </h2>
          <p className="text-teal-100 leading-relaxed mb-10 max-w-lg mx-auto">
            Start with a free 15-minute orientation call with David. No commitment, just a conversation to see if ReLoHu is right for you right now.
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
            <PayButton
              label="Full Session · $497"
              className="inline-flex items-center justify-center gap-2 border border-teal-400 hover:bg-teal-600 disabled:opacity-60 text-white font-medium rounded-full px-8 py-4 text-base transition-all"
            />
          </div>
          <p className="text-teal-300 text-xs mt-4">Free 15-min call · or pay $497 and book directly</p>
          <p className="text-teal-300/70 text-xs mt-2">
            Already booked? <a href="/intake" className="text-teal-200 hover:underline">Fill out your pre-session intake form</a>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
