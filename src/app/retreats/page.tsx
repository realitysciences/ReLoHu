import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'
import { Calendar, ArrowRight, MapPin, Compass, RefreshCw, Clock, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Retreats | ReLoHu',
  description: 'The retreat opens something. ReLoHu maps it. Psychological mapping before, between, and after your retreat — so what opens stays open.',
}

export default function RetreatsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">ReLoHu · Retreats</p>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            The retreat opens something.<br />ReLoHu maps it.
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            Psychedelic retreats, wellness retreats, silent retreats. Whatever opens you up, the question that follows is always the same: how do you make it last? Most people don't. Not because they weren't transformed. Because they had no map of where they went.
          </p>
        </div>
      </section>

      {/* ==================== THE REAL PROBLEM ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">The problem nobody names</p>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p className="text-xl font-medium text-slate-800">
              Most people who go to retreats find that, in the end, it changes very little. Not because the experience wasn't real. Because integration is harder than anyone tells you.
            </p>
            <p>
              You leave the retreat cleaned out. Opened. Certain that something has shifted for good. And then you go back. Back to where you live, back to who you're around, back to the same environment that produced the same patterns that sent you to the retreat in the first place.
            </p>
            <p>
              The same things that caused the problems before you left are the same things that erode the benefit after you return. The world has too much coming at us constantly. The trash builds back up. Most retreat centers know this and still don't have a real answer for it.
            </p>
            <p className="text-slate-800 font-medium">
              Integration support at most centers is thin. When it exists at all, it's expensive. And it almost never goes deep enough to work with the specific interior landscape the medicine revealed.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== THE MISSING PIECE ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">What's been missing</p>
          <p className="text-xl font-medium text-slate-800 mb-6 leading-snug">
            We can map stars. We can map terrain. We can map galaxies. Why don't we map ourselves?
          </p>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              Every human being is a universe. That's not a metaphor. It's an acknowledgment that the interior world is genuinely complex, genuinely structured, and genuinely chartable, if someone is actually willing to do the work of charting it.
            </p>
            <p>
              The retreat gives you an experience. What it rarely gives you is a map of what that experience revealed. Where you are, how your terrain is configured, what the medicine was working on, what to carry forward and where to direct your intention next.
            </p>
            <p>
              That is what ReLoHu does. Not therapy. Not a framework thrown over you. A map. Yours specifically, built from a real conversation, delivered as a document you keep.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== THREE PHASES ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">Where ReLoHu fits</p>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-12 leading-snug">
            Before. Between. After. And as far after as you need.
          </h2>

          <div className="space-y-10">

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-2">Before the retreat</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Before you go in, know where you are. A ReLoHu session maps your current interior landscape: your patterns, your intentions, your unresolved terrain. The medicine has more to work with when you arrive with a map rather than a vague hope of transformation. You give it something specific to meet.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                <Compass className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-2">Between ceremonies</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  If you are doing multiple ceremonies, what happens between them matters more than most people realize. Without something to orient you, you can go ceremony after ceremony without a substrate for the medicine to work on. A session in between tells you where you are, what was opened, and where to direct your intention next.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                <RefreshCw className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-2">After: integration that actually holds</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Integration is where almost everyone fails. Not for lack of trying. Because they try to integrate without knowing specifically what they're integrating into. A post-retreat ReLoHu session maps what the experience revealed, names what changed and what didn't, and gives you something concrete to orient around as you return to ordinary life.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100" />

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-2">Months later, when the trash builds back up</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  The map from your first session doesn't expire. But your terrain keeps changing. Returning clients can book a depth session that picks up exactly where the first map left off, tracking what has evolved and what still needs to be worked. Your map stays current because you do.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== AI FILLS THE GAP ==================== */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-8">Why AI matters here</p>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-snug">
            You can't have a human with you at every moment of integration. You can have your map.
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              Integration happens in ordinary moments. In the middle of a difficult conversation. At 2am when something surfaces. During a walk when a pattern becomes suddenly visible. A therapist can't be there. A retreat center can't be there. Your map can.
            </p>
            <p>
              The AI behind ReLoHu runs on Dr. Gedalia's proprietary methodology and holds the information from your session. When you have your map, you have something to return to that knows your specific terrain, not a generic wellness resource built for no one in particular.
            </p>
            <p className="text-slate-300">
              In the end, when we have the information we need, we can integrate on our own. It's the information that's crucial. ReLoHu makes sure you have it.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PERSONAL NOTE ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic">
            "I went through ceremony after ceremony without knowing what to do next. I had no substrate for the medicine to work on. If ReLoHu had existed then, each ceremony would have had something specific to meet."
          </p>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-8 h-px bg-teal-300" />
            <p className="text-sm text-slate-400 font-medium tracking-wide">Dr. Gedalia, Founder of ReLoHu</p>
            <div className="w-8 h-px bg-teal-300" />
          </div>
        </div>
      </section>

      {/* ==================== WHAT YOU GET ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">What a session produces</p>
          <div className="space-y-4">
            {[
              'A Terrain Map: your psychological patterns, relational architecture, and behavioral drivers — what the medicine has to work with',
              'An Archetype Report: the deeper structural forces shaping how you move through the world',
              'People You Are Similar To: real people and fictional characters whose psychology maps onto yours in specific ways',
              'Your Strengths and Weaknesses: both sides, honestly named',
              'Unique Things You Probably Never Knew About Yourself: the observations most people never get told',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-1" />
                <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm mt-8 leading-relaxed">
            Each report is delivered as a document you keep. They don't expire. You can share them with a therapist, an integration coach, or no one. They are yours.
          </p>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-teal-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-200 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">Start before you go in, or after you return</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 leading-snug">
            The retreat gives you the experience.<br />ReLoHu gives you the map.
          </h2>
          <p className="text-teal-100 leading-relaxed mb-10 max-w-lg mx-auto">
            A 15-minute orientation call with Dr. Gedalia is free and requires nothing. If ReLoHu is right for where you are in your process, you'll know quickly.
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
              href="/founding-cohort"
              className="inline-flex items-center gap-2 border border-teal-400 hover:bg-teal-600 text-white font-medium rounded-full px-8 py-4 text-base transition-all"
            >
              View the Offer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-teal-300 text-xs mt-6">
            Founding cohort: $497 through April. Five reports, 90-minute intake, Terrain Map reading session.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
