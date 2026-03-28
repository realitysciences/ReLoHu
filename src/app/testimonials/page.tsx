'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star, Calendar } from 'lucide-react'
import Link from 'next/link'

const testimonials = [
  {
    quote: 'For the first time, I felt like someone actually saw the whole picture. Not just my symptoms, not just my patterns — me. The Terrain Map changed everything. I\'ve been in therapy for years and nothing has given me this kind of clarity about who I actually am.',
    author: 'M. Chen',
    role: 'Software Engineer',
    location: 'San Francisco, CA',
    highlight: 'Changed everything',
  },
  {
    quote: 'I\'d spent years in therapy going in circles. After the Terrain Map, my therapist knew exactly where to start. We skipped months of guesswork. It was like handing her a map of a city she\'d been driving through in the dark.',
    author: 'A. Morrison',
    role: 'Creative Director',
    location: 'New York, NY',
    highlight: 'Skipped months of guesswork',
  },
  {
    quote: 'I was skeptical. I\'d seen many practitioners. But this was different — built by someone who actually understands what it\'s like to be "too sophisticated" for help. Dr. Gedalia didn\'t try to fit me into a framework. He just listened until the picture came into focus.',
    author: 'R. Patel',
    role: 'Startup Founder',
    location: 'Austin, TX',
    highlight: 'Didn\'t try to fit me into a framework',
  },
  {
    quote: 'I\'ve done EMDR, somatic work, cognitive therapy — all of it useful in different ways. But I\'d never had someone simply witness me without an agenda. The Terrain Map gave my coach something she said she\'d never had before walking into a first session: a real starting point.',
    author: 'L. Okafor',
    role: 'Executive',
    location: 'Chicago, IL',
    highlight: 'Without an agenda',
  },
  {
    quote: 'I kept waiting for the session to feel like therapy. It never did. It felt like being interviewed by someone who was genuinely curious — not trying to fix anything, not rushing toward an insight. Just present. The map that came out of it was more accurate than anything I\'ve ever read about myself.',
    author: 'S. Reyes',
    role: 'Psychologist',
    location: 'Los Angeles, CA',
    highlight: 'More accurate than anything I\'ve ever read about myself',
  },
  {
    quote: 'What surprised me most was how much I said that I\'d never said before. Dr. Gedalia asked the right question at the right moment, and I found myself going somewhere I hadn\'t been. The Terrain Map captured it in a way I could actually hand to someone else — or just keep for myself.',
    author: 'T. Nakamura',
    role: 'Writer',
    location: 'Seattle, WA',
    highlight: 'Going somewhere I hadn\'t been',
  },
]

const stats = [
  { number: '190+', label: 'Principles Developed' },
  { number: '25+', label: 'Documented Explorations' },
  { number: '10+', label: 'Years of Development' },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-5 py-2 border-teal-200 text-teal-700 text-sm font-medium tracking-wide bg-teal-50/50">
            TESTIMONIALS
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            What it feels like<br />
            <span className="text-teal-600">to be truly seen.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            These are people who came in skeptical, sophisticated, and often having already tried everything. Here is what they found.
          </p>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-12 px-6 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-semibold text-teal-600 mb-1">{stat.number}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== TESTIMONIALS GRID ==================== */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className={`bg-white border-slate-100 shadow-sm hover:border-teal-200 hover:shadow-lg transition-all duration-300 group ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <CardContent className="p-8">
                  <Quote className="w-7 h-7 text-teal-300 mb-4" />
                  <blockquote className={`text-slate-700 leading-relaxed mb-6 ${i === 0 ? 'text-lg md:text-xl font-light' : 'text-base'}`}>
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{t.author}</p>
                      <p className="text-xs text-slate-400">{t.role} · {t.location}</p>
                    </div>
                    <span className="text-xs text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full italic">
                      "{t.highlight}"
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHAT THEY HAD IN COMMON ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-slate-200 text-slate-500 text-xs tracking-widest bg-slate-50">
              A PATTERN
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
              What most of them had in common.
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Not a type. A pattern of experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: 'They had already tried',
                body: 'Therapy. Coaching. Meditation. Self-help. Sometimes all of the above. They weren\'t new to self-inquiry — they were sophisticated practitioners of it. And still felt unseen.',
              },
              {
                icon: Star,
                title: 'They came in skeptical',
                body: 'The bar was high. They\'d been disappointed before. Several almost didn\'t book the orientation call. What changed their minds was the specificity of how ReLoHu described their experience — before they\'d said a word.',
              },
              {
                icon: Star,
                title: 'They left with something usable',
                body: 'Not a feeling. Not a reframe. A document. A map. Something they could hand to a therapist, a coach, a partner — or simply keep for themselves as the clearest portrait of who they actually are.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Ready to find out what your map looks like?
          </h2>
          <p className="text-teal-100 mb-8 leading-relaxed">
            A 15–20 minute orientation call with Dr. Gedalia. No commitment. No pressure. Just a conversation to explore whether ReLoHu is the right next step for you.
          </p>
          <a
            href="/#cta-section"
            className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold rounded-full px-10 py-4 text-lg transition-all duration-300 hover:shadow-xl hover:shadow-teal-800/20"
          >
            <Calendar className="w-5 h-5" />
            Book Your Orientation Call
          </a>
          <p className="text-teal-200 text-sm mt-4">No commitment · Confidential · 15–20 minutes</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
