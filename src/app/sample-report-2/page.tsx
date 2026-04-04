'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Calendar, EyeOff } from 'lucide-react'

// ─── Redaction bar ─────────────────────────────────────────────────────────
function R({ w = 'md' }: { w?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' }) {
  const widths: Record<string, string> = {
    xs: '1.8rem', sm: '3rem', md: '4.5rem', lg: '6.5rem', xl: '9rem', '2xl': '12rem',
  }
  return (
    <span
      className="inline-block bg-slate-900 rounded-[2px] align-middle relative select-none"
      style={{ width: widths[w], height: '0.85em', top: '-1px' }}
      aria-label="[redacted]"
    />
  )
}

// ─── Section header ────────────────────────────────────────────────────────
function SH({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[10px] font-mono text-teal-500 tracking-widest shrink-0">{num}</span>
      <span className="text-[10px] font-mono tracking-[0.25em] text-teal-700 uppercase shrink-0">{title}</span>
      <span className="flex-1 h-px bg-slate-100" />
    </div>
  )
}

// ─── Pull quote ────────────────────────────────────────────────────────────
function PQ({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-teal-400 bg-teal-50/50 pl-6 pr-4 py-4 my-6 text-[1rem] italic leading-relaxed text-slate-600">
      {children}
    </blockquote>
  )
}

// ─── Prose paragraph ───────────────────────────────────────────────────────
function P({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`leading-[1.85] text-[0.95rem] text-slate-700 mb-4 last:mb-0 ${className}`}>
      {children}
    </p>
  )
}

// ─── Timeline item ─────────────────────────────────────────────────────────
function TL({ label, bright = false, children }: { label: string; bright?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 mb-6 last:mb-0">
      <div className="flex flex-col items-center shrink-0 pt-1">
        <div className={`w-3 h-3 rounded-full border shrink-0 ${bright ? 'bg-teal-500 border-teal-400' : 'bg-white border-slate-300'}`} />
        <div className="w-px flex-1 bg-slate-100 mt-2" />
      </div>
      <div className="pb-6">
        <p className="text-[9px] font-mono tracking-[0.2em] text-teal-600 uppercase mb-1.5">{label}</p>
        <P className="!mb-0">{children}</P>
      </div>
    </div>
  )
}

// ─── Relational card ───────────────────────────────────────────────────────
function RC({ label, accent = 'teal', children }: { label: string; accent?: 'teal' | 'red' | 'purple' | 'slate'; children: React.ReactNode }) {
  const styles: Record<string, string> = {
    teal: 'border-l-teal-400',
    red: 'border-l-rose-400',
    purple: 'border-l-violet-400',
    slate: 'border-l-slate-400',
  }
  const labelStyles: Record<string, string> = {
    teal: 'text-teal-600',
    red: 'text-rose-500',
    purple: 'text-violet-500',
    slate: 'text-slate-500',
  }
  return (
    <div className={`bg-slate-50 border-l-[3px] ${styles[accent]} p-5 rounded-r-lg`}>
      <p className={`text-[9px] font-mono tracking-[0.2em] uppercase mb-2 ${labelStyles[accent]}`}>{label}</p>
      <p className="text-[0.88rem] leading-[1.65] text-slate-700">{children}</p>
    </div>
  )
}

// ─── Future insight item ───────────────────────────────────────────────────
function FI({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-7 last:mb-0">
      <p className="text-[9px] font-mono tracking-[0.2em] text-teal-600 uppercase mb-2">{title}</p>
      <P className="!mb-0">{children}</P>
    </div>
  )
}

export default function SampleReportNickPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-10 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-5 px-5 py-2 border-teal-200 text-teal-700 text-sm font-medium tracking-wide bg-teal-50/50">
            SAMPLE TERRAIN MAP
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-5 tracking-tight text-slate-800">
            What a real Terrain Map<br />
            <span className="text-teal-600">actually looks like.</span>
          </h1>
          <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto mb-6">
            The following is a complete, unedited Terrain Map from a real ReLoHu session. The client reviewed this document and gave explicit permission to share it as an anonymized example.
          </p>
          <div className="inline-flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 text-sm text-amber-800 text-left max-w-xl">
            <EyeOff className="w-4 h-4 shrink-0 mt-0.5" />
            <span>Name, age, and specific location have been removed (shown as <span className="inline-block bg-slate-800 rounded-[2px] w-10 h-3 align-middle mx-0.5 relative top-[-1px]" />). All psychological content is exactly as delivered. Shared with the explicit permission of the client. All ReLoHu Terrain Maps are strictly confidential.</span>
          </div>
        </div>
      </section>

      {/* ==================== DOCUMENT ==================== */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-slate-500 text-sm mb-6 leading-relaxed max-w-2xl mx-auto">
            Every Terrain Map is built from a unique intake conversation and looks different. These are examples of the depth and precision the process produces.
          </p>
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">

            {/* ── Cover ── */}
            <div className="bg-slate-50 border-b border-slate-200 px-8 md:px-14 py-12">
              <div className="flex items-start justify-between mb-10">
                <img src="/relohu-logo.png" alt="ReLoHu" className="h-7 w-auto object-contain opacity-90" />
                <div className="text-right">
                  <p className="text-slate-400 text-[10px] tracking-widest uppercase font-mono">Terrain Map</p>
                  <p className="text-slate-700 text-sm font-medium">Full Session</p>
                </div>
              </div>

              <div className="text-center mb-10">
                <p className="text-[10px] tracking-[0.35em] text-teal-600 uppercase mb-4 font-mono">ReLoHu Terrain Map · Subject Portrait</p>
                <div className="flex items-center justify-center mb-6"><R w="xl" /></div>
                <div className="w-16 h-px bg-teal-200 mx-auto mb-4" />
                <p className="text-slate-500 italic text-sm tracking-wide">
                  <R w="xs" />&nbsp; · &nbsp;<R w="xl" />
                </p>
              </div>

              <div className="flex items-end justify-between pt-8 border-t border-slate-200">
                <div className="text-slate-500 text-[10px] font-mono tracking-wide leading-loose uppercase">
                  Produced by ReLoHu<br />
                  Structured Intake &amp; Psychological Mapping<br />
                  Confidential
                </div>
                <div className="text-slate-500 text-[10px] font-mono tracking-wide leading-loose text-right uppercase">
                  Respect · Love · Humility<br />
                  relohu.com
                </div>
              </div>
            </div>

            {/* ── Body ── */}
            <div className="px-8 md:px-14 py-12 space-y-12">

              {/* 01 — The Signal in the Noise */}
              <div>
                <SH num="01" title="The Signal in the Noise" />
                <P>From the very beginning of this conversation, before a single formal question was asked, something was already visible: <R w="md" /> named the condition of the world before he named himself. That is not accident. It is the orientation of someone who has spent a long time watching, from the outside, as others moved through life inside a fog they couldn't see.</P>
                <P><R w="md" /> grew up in a loud house. A stepfather and mother who argued. A father who wasn't there. A neighborhood where everything around him was, in his own words, <em>noise on noise</em>. He learned early to be quiet, stoic, observant, not because he had nothing to say, but because saying it required a world that could hear it. That world wasn't immediately available to him.</P>
                <P>So <R w="md" /> became a signal-hunter. A boy who sat still and watched and, crucially, <em>kept his knowing separate from everything he was told.</em></P>
                <PQ>"I always had my Observer. I always had my Independence and sovereignty. I fought for it. From the first memory I had: <em>I am.</em> Outside is outside. And me is me."</PQ>
                <P>This is not a small thing. Most people spend their whole lives not being able to say that. <R w="md" /> could say it from before he had words for it. That thread, the "I am" that was never handed over, runs through everything that follows.</P>
              </div>

              <Separator className="bg-slate-100" />

              {/* 02 — Formative Architecture */}
              <div>
                <SH num="02" title="Formative Architecture" />
                <div>
                  <TL label="Earliest Memory">A diaper change. Someone looking at him with care. He remembers thinking: <em>this person loves me.</em> His first conscious experience was not fear or hunger. It was connection. That is the original signal he has been tracking ever since.</TL>
                  <TL label="Childhood">Stoic. Playful. Shy. Observant. Responsible enough that adults liked him. A child who felt the difference between outside and inside, between the noise around him and the quiet in him. He never confused the two.</TL>
                  <TL label="The Hockey Stick" bright>A girlfriend of his father's gave him a hockey stick. No one in his neighborhood played hockey; it was considered a "white person's sport." <R w="md" /> picked it up anyway. The feeling was, in his own word: <em>magic.</em> He recruited his whole neighborhood. Then he started a team at a Fortune 500 company, where he was suddenly drinking beers and playing hockey with executives he would later call friends. One object. One willingness to be different. A chain of open doors that followed.</TL>
                  <TL label="Father's Absence / Early Separation">Parents separated when <R w="md" /> was months old. He barely spoke about his father, and the little he said had the quality of a closed door: distance accepted, not dramatized. His father now lives in <R w="md" />. They haven't spoken in years. The wound here is not rage. It's a quiet exile from something that should have been present.</TL>
                  <TL label="Pentecostal Church">Structure. Hope. Stories that made sense to him. <R w="md" /> didn't cling to the dogma. He decoded the deeper architecture. The Bible, to him, is a transformation manual, a physiological and psychological text encoding ancient human truths. His relationship to religion is not devotion; it is <em>translation.</em></TL>
                  <TL label="Egypt & The Return" bright><R w="md" /> traveled to Egypt, his dream, during a revolution. He went to the pyramids, Mount Sinai, Saint Catherine. The first night he returned to <R w="md" />, he walked into church and saw a half-Egyptian woman he had never seen before. He messaged his father before he even spoke to her: <em>this is the woman I will marry.</em> He was right. The world keeps confirming something for him when he trusts the signal.</TL>
                  <TL label="The Crossing Over" bright>What <R w="md" /> calls his "crossing over." A Kundalini awakening, catalyzed at a gathering in Colombia. He saw what he describes as archetypal forces made manifest: the angel, the devil, the bridge. He didn't fight the darkness he encountered. He protected himself and understood: <em>the worst enemy of humanity is the one who most needs help.</em> This event reorganized everything.</TL>
                </div>
              </div>

              <Separator className="bg-slate-100" />

              {/* 03 — Core Vectors */}
              <div>
                <SH num="03" title="Core Vectors" />
                <div className="divide-y divide-slate-100">
                  {[
                    { label: 'Sovereignty as birthright.', text: <><R w="md" /> has never surrendered his inner knowing to external authority, not to his family's noise, not to church hierarchy, not to corporate structure, not to social convention. He identifies this as his first and most essential trait. He was born with it and has spent his life guarding it.</> },
                    { label: 'The magic collector.', text: <><R w="md" />'s life is organized around moments he calls "magic": encounters, objects, synchronicities that crack a door open to a bigger world. The hockey stick. Egypt. His wife on the night he returned. The Kundalini gathering. He doesn't just notice magic. He moves <em>toward</em> it as a navigational practice. This is not mystical naivety. It is a refined sensitivity to signal.</> },
                    { label: 'The bridge archetype.', text: <><R w="md" /> identifies himself explicitly as the bridge between worlds: between the sleeping and the awake, between yesterday and tomorrow, between ordinary life and the deeper architecture beneath it. This is not ego. It is a role he didn't choose but has been prepared for by everything that happened to him.</> },
                    { label: 'Scale over depth: a productive tension.', text: <><R w="md" /> has a recurring impulse to impact at scale rather than sit in front-line depth. He's drawn to outreach, transmission, broadcast. Yet he is simultaneously one of the most attentive relational presences imaginable. The tension between scale and intimacy is not resolved, and that unresolved tension is precisely where his most important work lives.</> },
                    { label: 'Pattern recognition over patience with process.', text: <><R w="md" /> sees systems quickly: economic, spiritual, relational. He understands macros before most people see the micro. But this speed can become a source of friction: he moves faster than the frameworks others operate within, and institutions respond to that with layoffs, skepticism, or dismissal.</> },
                  ].map(({ label, text }) => (
                    <div key={label} className="py-4 flex gap-3 items-start">
                      <span className="text-teal-400 shrink-0 mt-1 text-sm">·</span>
                      <P className="!mb-0"><strong className="font-semibold text-slate-800">{label}</strong>{' '}{text}</P>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="bg-slate-100" />

              {/* 04 — Relational Landscape */}
              <div>
                <SH num="04" title="Relational Landscape" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <RC label="Mother" accent="teal">Present but not fully available. Provider, protector, incubator: a woman who held the environment stable. She could not metabolize <R w="md" />'s depth, but she never abandoned him. A warm container that was nonetheless too small.</RC>
                  <RC label="Father" accent="red">Gone from months old. No current contact. No drama in how <R w="md" /> speaks of it, which is itself revealing. The quiet around this subject is the terrain. He built his sovereignty partly in response to that vacancy.</RC>
                  <RC label="Wife" accent="purple">Exotic. Pure. Uniquely herself. Met the night he returned from Egypt. She wanted to travel the world; he trusted her vision and they left everything. Years younger, but with a maturity shaped by a different world. She pulled him into motion when he might have stayed still.</RC>
                  <RC label="Sister" accent="slate">No contact. Four years younger. Lives in <R w="sm" />. The estrangement is not discussed in detail, but the pattern of disconnection from family of origin (father gone, sister silent) shapes the weight he places on chosen community and mission.</RC>
                </div>
                <P>What emerges across <R w="md" />'s relational map is not a lack of love in his history. It is a consistent experience of love arriving in forms that couldn't quite hold his full frequency. His mother provided safety but not witnessing. His father provided nothing at all. The relationships that have mattered most have been those where someone handed him an unexpected door: the girlfriend with the hockey stick, the church friend who introduced him to his wife, the Instagram connection who wanted to collaborate immediately.</P>
                <P><R w="md" /> responds to people who treat him as a peer in the adventure of life rather than as someone to be managed, guided, or corrected.</P>
              </div>

              <Separator className="bg-slate-100" />

              {/* 05 — The Tension He Carries */}
              <div>
                <SH num="05" title="The Tension He Carries" />
                <P>There is a recurring friction in <R w="md" />'s story between his inner certainty and the world's failure to match it. He sees clearly. He moves confidently. He says truth in environments not ready for it, and pays the institutional price. He was laid off from a company because he "said things that most people wouldn't, but for me it was truth." He's been in multiple periods of reinvention that followed moments where his signal outpaced the system he was inside.</P>
                <PQ>"Everyone doubts everything new. Are you sure? Are you sure? That's when reality hits. How many energies affect your mental."</PQ>
                <P><R w="md" /> has processed doubt. He doesn't pretend it wasn't there during his marriage decision, or his awakening, or his decision to leave everything and travel the world. But he knows the feeling of waiting for his knowing to be confirmed, and it always has been, eventually. His challenge is not doubt. It's the loneliness of being far ahead.</P>
                <P>There is also a specific pattern worth naming: <R w="md" /> tends to answer questions about the personal with the philosophical. When asked about his mother's strengths and weaknesses, he pivoted immediately into a framework about sovereignty and systemic noise. When asked about his father, the door closed quietly. This is not avoidance. It's a well-developed adaptation. Zoom out far enough, and the pain becomes part of a pattern, and the pattern becomes bearable, even beautiful. <R w="md" /> is very good at this. It has served him. And at some level, he knows when it happens.</P>
              </div>
            </div>

            {/* ── Core Seeing ── */}
            <div className="mx-8 md:mx-14 mb-12">
              <div className="relative border border-teal-200 bg-teal-50/30 rounded-xl px-8 py-8 text-center">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 text-[9px] font-mono tracking-[0.3em] text-teal-600 uppercase">Core Seeing</span>
                <p className="text-lg md:text-xl font-light italic leading-[1.75] text-slate-700">
                  <R w="md" /> is a man who has never confused himself with his circumstances. From the first moment of consciousness he can recall, there was a clear line between <em>what is out there</em> and <em>who I am in here.</em> He did not learn this. He was born with it, tested by it, and has spent his life building a path that honors it. What the world calls his unconventional choices (the layoffs, the pivots, the leap, the awakening) <R w="md" /> experiences as a straight line. The line goes toward more signal, more truth, more life. That is not confusion. That is the most coherent orientation a human being can have.
                </p>
              </div>
            </div>

            <div className="px-8 md:px-14 pb-12 space-y-12">

              {/* 06 — What He Is Building */}
              <div>
                <SH num="06" title="What He Is Building" />
                <P><R w="md" /> is not lost. He is between worlds by design, which is exactly the role he has always named for himself. The bridge stands between both shores and is fully part of neither. He has completed what he calls the rite of passage. He has lived the template. Now the question that presses on him is: <em>how do you get the ones who don't yet know they're asleep to walk toward the light?</em></P>
                <P>His instinct is outreach, broadcast, scale, and that is real. His gift, however, is the moment of encounter. The stranger on Instagram who couldn't stop. The Freemason hall, the hockey rink with executives, the church where synchronicity walked through the door. <R w="md" /> creates conditions for magic by being fully himself in whatever room he enters.</P>
                <P>His most honest path may not be the one he can currently see. It is the one that allows him to be <em>present</em> at scale. Not just broadcasting truth, but embodying it for another human being long enough that they feel it land.</P>
              </div>

              <Separator className="bg-slate-100" />

              {/* 07 — Insights for the Path Ahead */}
              <div>
                <SH num="07" title="Insights for the Path Ahead" />
                <FI title='Your "magic collector" is your methodology'>The hockey stick. Egypt and the return. The Kundalini moment. Every major transformation in your life has come through an encounter you allowed that others would have deflected. The skill you have, of recognizing and moving toward signal, is exactly what you're teaching. You don't just know about magic. You've been practicing it your whole life without calling it that.</FI>
                <FI title="The framework and the feeling must coexist">You have an extraordinary ability to build frameworks: cosmic, systemic, spiritual. That is one of your superpowers. And it can also become a way of living at a slight remove from the raw feeling of things. The people you will reach most deeply are the ones who sense both: the mind that sees patterns AND the person who has bled inside them. Let both be visible.</FI>
                <FI title="The layoffs are a data point, not a verdict">You have been let go from more than one system. Each time, the reason is the same: you were moving faster than the institution could manage. This is not a character flaw. It is evidence that you do not belong inside structures built to maintain the status quo. Every layoff was an expulsion back toward your actual trajectory. The pattern says: you are not an employee. You are a founder of worlds.</FI>
                <FI title="The place you landed is not a detour. It is the temple">You came here and crossed through. Egypt prepared the marriage. Colombia prepared the awakening. You are not hiding or wandering. You are in the exact location your formation required. The question is not when you go back. It's what you build from here that only this particular threshold could produce.</FI>
                <FI title="The father-shaped space is not something to solve">There is a quiet in you where a father's voice should be. You have built your sovereignty in that silence. It is not a wound that is waiting to explode. It is already integrated into who you are. But it is worth knowing: part of what draws people to you, and part of what you are offering the world, is something paternal. You are capable of being the steady, initiated, truth-telling elder that you were not given. That is not a deficit you are compensating for. It is a gift your formation prepared you to offer.</FI>
              </div>
            </div>

            {/* Document footer */}
            <div className="px-8 md:px-14 py-5 bg-teal-700 flex items-center justify-between gap-4 flex-wrap">
              <span className="text-teal-100 text-[10px] font-mono tracking-widest uppercase">
                ReLoHu Terrain Map · <R w="sm" /> · Pt. 1
              </span>
              <span className="text-teal-200 text-[10px] font-mono tracking-widest uppercase">Confidential · relohu.com</span>
            </div>

          </div>

          <p className="text-center text-slate-500 text-sm mt-6 italic">
            Every Terrain Map is unique to the person it maps. No two are alike in structure, depth, or insight.
          </p>
        </div>
      </section>

      {/* ==================== SEE ANOTHER ==================== */}
      <section className="py-10 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-slate-500 text-sm mb-5">This is one of two sample reports available.</p>
          <Link
            href="/sample-report"
            className="flex items-center justify-between gap-4 border border-slate-200 rounded-2xl p-6 hover:border-teal-200 hover:bg-teal-50/30 transition-all group"
          >
            <div>
              <p className="text-[10px] font-mono tracking-widest text-teal-600 uppercase mb-1">Also available</p>
              <p className="font-medium text-slate-800">Sample Report #1: A different person, a different map</p>
              <p className="text-sm text-slate-500 mt-0.5">Trauma survival, identity excavation, radical self-construction</p>
            </div>
            <span className="text-teal-600 text-xl group-hover:translate-x-1 transition-transform shrink-0">→</span>
          </Link>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-4">
            Ready to see what your map looks like?
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            A 15–20 minute orientation call with Dr. David. No commitment. Just a conversation to explore if ReLoHu is right for you.
          </p>
          <a
            href="https://calendly.com/relohu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-10 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-100"
          >
            <Calendar className="w-5 h-5" />
            Book Your Orientation Call
          </a>
          <p className="text-slate-400 text-sm mt-4">No commitment · Confidential · 15–20 minutes</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
