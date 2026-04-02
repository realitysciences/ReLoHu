'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'
import { Gift, Check, Calendar, Heart, Star } from 'lucide-react'

const tiers = [
  {
    name: 'The Map',
    price: null,
    description: 'A complete ReLoHu Terrain Map for someone you believe deserves to be truly seen.',
    features: [
      'Free 15–20 min orientation call',
      '90-minute intake session with Dr. David',
      'Full Terrain Map delivered as a structured document',
      'Strictly confidential',
    ],
    highlight: false,
    cta: 'Gift This Session',
  },
  {
    name: 'The Extended Map',
    price: null,
    description: 'For someone whose inner world runs deep and deserves more time to surface.',
    features: [
      'Free 15–20 min orientation call',
      '2-hour intake session with Dr. David',
      'Expanded Terrain Map with greater resolution',
      'Strictly confidential',
    ],
    highlight: true,
    cta: 'Gift This Session',
  },
  {
    name: 'The Deep Dive',
    price: null,
    description: 'The fullest possible portrait, a gift that could change how someone understands themselves forever.',
    features: [
      'Free 15–20 min orientation call',
      '3-hour intake session with Dr. David',
      'Full Terrain Map with complete depth',
      '30-min personal delivery & walkthrough call',
      'Strictly confidential',
    ],
    highlight: false,
    cta: 'Gift This Session',
  },
]

export default function GiftPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-24 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 text-rose-600 text-xs font-medium tracking-widest uppercase rounded-full px-4 py-1.5 mb-6">
            <Gift className="w-3.5 h-3.5" />
            Give a Terrain Map
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-slate-800 mb-5 leading-tight">
            Give someone the gift of<br />
            <span className="text-teal-600">being truly known.</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
            Most gifts are things. This one is an experience of being fully seen, perhaps for the first time. A ReLoHu Terrain Map is something a person carries with them.
          </p>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-12 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-500 text-sm uppercase tracking-widest font-mono mb-6">This gift is meaningful for</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'A partner who has always felt misunderstood',
              'A friend going through a major life transition',
              'Someone starting therapy and wanting a head start',
              'A person who has "tried everything" and still feels stuck',
              'Someone who thinks deeply but rarely feels truly known',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-600">
                <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-slate-400 text-sm mb-12">Pricing coming soon. Contact Dr. David directly to arrange a gift session.</p>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-7 flex flex-col gap-5 ${
                  tier.highlight
                    ? 'border-teal-300 bg-teal-50/40 shadow-lg shadow-teal-100 relative'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-teal-600 text-white text-[10px] font-medium tracking-widest uppercase rounded-full px-3 py-1">
                      <Star className="w-3 h-3" /> Most Chosen
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-medium text-slate-800 text-lg mb-1">{tier.name}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{tier.description}</p>
                </div>
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/relohu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto flex items-center justify-center gap-2 rounded-full py-3 px-6 text-sm font-medium transition-all ${
                    tier.highlight
                      ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-medium text-slate-800 mb-10">How gifting works</h2>
          <div className="space-y-6 text-left">
            {[
              { step: '1', title: 'Reach out to Dr. David', body: 'Book a quick call or send a message explaining who the gift is for. No need to involve the recipient yet.' },
              { step: '2', title: 'We arrange the details', body: 'Dr. David will send the recipient a personalized note and orientation call invitation, or you can deliver it yourself.' },
              { step: '3', title: 'They experience it on their timeline', body: 'The recipient books their own orientation call when they\'re ready. There\'s no pressure and no expiry.' },
              { step: '4', title: 'They receive their Terrain Map', body: 'A structured, personal document they\'ll carry with them, in therapy, in coaching, or simply as a map of themselves.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-5">
                <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 text-sm font-medium flex items-center justify-center shrink-0 mt-0.5">
                  {step}
                </div>
                <div>
                  <p className="font-medium text-slate-800 mb-1">{title}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
