'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  ArrowUpCircle, Mic, Map, Brain, Users, Target, BookOpen, Route,
  Bot, CheckCircle, Quote
} from 'lucide-react'
import Link from 'next/link'

export default function UniquenessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-5 py-2 border-teal-200 text-teal-700 text-sm font-medium tracking-wide bg-teal-50/50">
            WHAT MAKES IT DIFFERENT
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            Structured intake.<br />
            <span className="text-teal-600">Psychological mapping.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            ReLoHu is not therapy, coaching, or counseling. It is the work that happens before those things — the careful, witnessed gathering of who a person actually is.
          </p>
        </div>
      </section>

      {/* ==================== UPSTREAM POSITIONING ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-slate-200 text-slate-500 text-xs tracking-widest bg-slate-50">
              THE CORE INSIGHT
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
              Most professional support starts in the middle.
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
              The practitioner spends weeks or months learning who you are before any real work can begin. That's expensive, slow, and often incomplete. ReLoHu starts at the beginning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="bg-slate-50 border-slate-200 shadow-sm">
              <CardContent className="p-8">
                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">Without ReLoHu</p>
                <div className="space-y-3">
                  {[
                    'Weeks of sessions just establishing who you are',
                    'Practitioner works from low-resolution self-knowledge',
                    'You explain yourself repeatedly, from scratch',
                    'Real work begins late — if it begins at all',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-slate-500 text-xs font-bold">—</span>
                      </div>
                      <span className="text-slate-500 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-white border-teal-100 shadow-sm">
              <CardContent className="p-8">
                <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">With ReLoHu</p>
                <div className="space-y-3">
                  {[
                    'One session captures who you are at high resolution',
                    'Practitioner begins with your complete map in hand',
                    'The alliance is built from illuminated ground',
                    'Real work begins immediately',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-teal-600" />
                      </div>
                      <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ==================== THE INTAKE ==================== */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-teal-200 text-teal-700 text-xs tracking-widest bg-teal-50/50">
              THE INTAKE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
              Not an interview. A witnessed conversation.
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              The intake specialist is not a therapist. The role is more analogous to a skilled interviewer or a master diagnostician — someone whose primary craft is listening and asking the next right question.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Mic,
                title: 'Unscripted in its probing',
                body: 'Questions emerge from what the person says — not from a fixed protocol written in advance. The conversation is adaptive. What matters most surfaces from what you actually say.',
              },
              {
                icon: Users,
                title: 'Witnessed, not answered',
                body: 'The experience of speaking to another human being who is genuinely listening is categorically different from answering a form or typing into an AI. That difference changes what you say and how deep you go.',
              },
              {
                icon: ArrowUpCircle,
                title: 'Structurally rigorous',
                body: 'Guided by a methodology that ensures key domains of your inner life are explored — without the rigidity of a checklist. Adaptive structure, not rigid protocol.',
              },
              {
                icon: Map,
                title: 'Data-preserving',
                body: 'The conversation is transcribed and processed to extract high-resolution signal. The richness of what you say becomes the foundation for every report and deliverable that follows.',
              },
            ].map((item, i) => (
              <Card key={i} className="bg-white border-slate-100 shadow-sm hover:border-teal-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center flex-shrink-0 transition-colors">
                      <item.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-sm">{item.body}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== THE TERRAIN MAP ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-slate-200 text-slate-500 text-xs tracking-widest bg-slate-50">
              THE TERRAIN MAP
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
              Not a diagnosis. A mirror.
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              The Terrain Map shows you something true about yourself that you could not have assembled alone — in a form legible to both you and any professional you subsequently engage.
            </p>
          </div>

          <Card className="bg-white border-slate-100 shadow-sm mb-8">
            <CardContent className="p-8 md:p-12">

              {/* Guaranteed */}
              <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-4">What every session delivers</p>
              <div className="flex items-start gap-3 bg-teal-50 rounded-xl p-4 mb-8 border border-teal-100">
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Map className="w-4 h-4 text-teal-600" />
                </div>
                <span className="text-slate-700 leading-relaxed text-sm pt-1.5 font-medium">
                  Your Terrain Map — a structured psychological portrait assembled from your own words, in a form legible to both you and any professional you subsequently engage.
                </span>
              </div>

              {/* Possibilities */}
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-4">What else becomes possible</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {[
                  { icon: Brain, text: 'Pattern identification: recurring emotional and behavioral structures you have never named' },
                  { icon: BookOpen, text: 'Archetypal mapping: the historical, literary, or living figure whose profile most closely matches yours' },
                  { icon: Users, text: 'Relational insight: what kind of person or partnership would genuinely meet you' },
                  { icon: Target, text: 'Central problem identification: the one unsolved question organizing your present life' },
                  { icon: ArrowUpCircle, text: 'Observer state mapped — how open or closed you are to your own process' },
                  { icon: Route, text: 'Priority roadmap for any professional work that follows' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-slate-50 group-hover:bg-teal-50 flex items-center justify-center flex-shrink-0 transition-colors">
                      <item.icon className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
                    </div>
                    <span className="text-slate-500 leading-relaxed text-sm pt-1.5">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 italic leading-relaxed mb-8 pl-12">
                This list is not complete — and it is growing. New deliverables are being developed constantly. What becomes possible from a single session is broader than any list can capture.
              </p>

              <Separator className="my-8 bg-slate-100" />

              <div className="bg-gradient-to-r from-teal-50 to-slate-50 rounded-xl p-5 border border-teal-100">
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-medium text-teal-700">Your reports don't expire.</span> As new deliverables become available — and they are being developed constantly — what you've already explored can generate entirely new layers of insight. One session. Expanding returns.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ==================== WHY NOT AI ==================== */}
      <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-900/30 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-teal-700 text-teal-400 text-xs tracking-widest bg-teal-900/30">
              THE HUMAN LAYER
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Why human presence is not optional.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A person could theoretically answer questions alone and submit them to an AI for analysis. The output might look similar. But the data quality would be categorically different.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Bot,
                question: 'Can\'t I just use an AI?',
                answer: 'Most people don\'t know how to externalize their interior into language, don\'t know what questions to ask once the data is out, and don\'t have the frameworks to run against it. AI output is only as good as its input. ReLoHu creates conditions for the kind of input most people have never produced.',
              },
              {
                icon: Mic,
                question: 'What does a witness change?',
                answer: 'Human beings do not disclose in a vacuum the way they disclose in dialogue. The presence of someone genuinely listening activates a different mode of self-expression. You go deeper, stay longer with difficult material, and arrive at formulations you would not have reached alone.',
              },
              {
                icon: Brain,
                question: 'What is the specialist\'s craft?',
                answer: 'Dr. Gedalia spent a decade learning to excavate and interpret his own interior life. That practice — knowing what to ask, how to hold someone\'s data, which lens to turn it through — is the methodology. It cannot be automated because it was never a script.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-teal-700 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-teal-900/50 group-hover:bg-teal-800/60 flex items-center justify-center mb-4 transition-colors">
                  <item.icon className="w-6 h-6 text-teal-400" />
                </div>
                <p className="text-teal-300 font-medium mb-3 text-sm">{item.question}</p>
                <p className="text-slate-400 leading-relaxed text-sm">{item.answer}</p>
              </div>
            ))}
          </div>

          <Card className="bg-slate-800/40 border-slate-700">
            <CardContent className="p-8 text-center">
              <Quote className="w-8 h-8 text-teal-600 mx-auto mb-4" />
              <p className="text-xl font-light text-slate-200 italic leading-relaxed max-w-3xl mx-auto">
                "The intake specialist's role is to hold that space and to probe it skillfully. This is not automatable. It is the irreplaceable human layer that determines everything that follows."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ==================== AI & THE MODERN AGE ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-teal-200 text-teal-700 text-xs tracking-widest bg-teal-50/50">
              2026
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
              Therapy's format hasn't changed.<br />What's possible now has.
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
              The basic structure of professional psychological support — one person talking, another listening, a picture assembling itself over months — has remained fundamentally unchanged since the mid-twentieth century. The questions have improved. The research has deepened. The format has not.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
            <div>
              <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-4">Then</p>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  A practitioner meets you for fifty minutes a week. Over months, they accumulate a picture — built from what you choose to share, in the order you're ready to share it. The most important material surfaces last, once trust is fully established.
                </p>
                <p>
                  This is not a flaw in the practitioner. It is a structural limitation of the format. The map builds slowly because the format allows for nothing else.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-4">Now</p>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  A single witnessed conversation — structured to create the conditions for genuine depth — produces a transcript. That transcript is processed through Transcengine™, ReLoHu's proprietary AI methodology, capable of identifying patterns across the full arc of what you said: what you returned to, what you avoided, how you constructed meaning, where your language shifted.
                </p>
                <p>
                  The result is a high-resolution psychological portrait assembled in one session. This was not possible to produce from a single conversation a decade ago. It is now.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-slate-900 to-slate-900" />
            <div className="relative">
              <p className="text-xs font-mono tracking-widest text-teal-400 uppercase mb-6">The Principle</p>
              <p className="text-xl md:text-2xl font-light text-white leading-relaxed mb-6">
                ReLoHu is not a technology product. It is a human process — one that uses technology to do something that has never been possible before: produce a complete psychological map from a single session.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                The human witness is irreplaceable. The depth of the conversation cannot be automated. But what that conversation produces — when run through Transcengine™, ReLoHu's proprietary AI analysis system — is something that would have taken a skilled practitioner a year of careful observation to assemble. That is what 2026 makes possible.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Transcengine™ is also the foundation of Meta Aware™ — a platform currently in development for AI-assisted self-awareness analysis and human perception training at scale.
              </p>
              <p className="text-slate-500 leading-relaxed border-t border-slate-700 pt-6 text-sm">
                There will always be companies building AI tools for psychology. Most are built by people who saw an opportunity. This was built by someone who needed it — who spent a decade unable to find what he was trying to build, and finally built it himself. That is not a positioning statement. It is just what happened.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PULL QUOTE ==================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic">
            "I believe AI can make the world less human. I also believe it can make things more human. ReLoHu is proof of that."
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-8 h-px bg-teal-300" />
            <p className="text-sm text-slate-400 font-medium tracking-wide">— Dr. Gedalia, Founder</p>
            <div className="w-8 h-px bg-teal-300" />
          </div>
        </div>
      </section>

      {/* ==================== 4 DIFFERENTIATORS ==================== */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-slate-200 text-slate-500 text-xs tracking-widest bg-white">
              THE SHORT VERSION
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
              What makes it different
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                number: '01',
                title: 'A human witness, not a form.',
                body: 'The presence of another person who is actually listening changes what you say and how deep you go. This is not replicable by a questionnaire or an AI.',
              },
              {
                number: '02',
                title: 'Adaptive probing, not fixed questions.',
                body: 'The questions that matter most emerge from what you say — not from a protocol written in advance. Every session is genuinely different because every person is genuinely different.',
              },
              {
                number: '03',
                title: 'High-resolution data before analysis.',
                body: 'AI output is only as good as its input. ReLoHu collects richly textured, witnessed self-disclosure — and that changes everything the analysis can do.',
              },
              {
                number: '04',
                title: 'Your Terrain Map is just the beginning.',
                body: 'The session produces a Terrain Map — but that\'s just the beginning. New deliverables are constantly being developed. What you receive today may be only the first of many layers of insight from a single session.',
              },
              {
                number: '05',
                title: 'Built to complete, not to continue.',
                body: 'Most support structures — by design or circumstance — create an ongoing relationship of return. ReLoHu is built differently. One session delivers something whole and lasting. There is no open loop that requires you to come back. If you return, it will be because you chose to — because you found it valuable, because being truly known opened something you want to explore further. That\'s not dependency. That\'s genuine interest.',
              },
            ].map((item, i) => (
              <Card key={i} className="bg-white border-slate-100 shadow-sm hover:border-teal-200 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-5">
                    <span className="text-3xl font-bold text-teal-100 group-hover:text-teal-200 transition-colors flex-shrink-0 leading-none mt-1">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-4">
            Experience it yourself.
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            One session. The clearest portrait of yourself you've ever held — and the beginning of something that keeps expanding.
          </p>
          <a
            href="/#cta-section"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-10 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-100"
          >
            Book Your Orientation Call
          </a>
          <p className="text-slate-400 text-sm mt-4">No commitment · Confidential · 15–20 minutes</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
