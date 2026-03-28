'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Quote, Star, BookOpen, Microscope, Heart, GraduationCap, Award, MapPin, Stethoscope } from 'lucide-react'
import Link from 'next/link'

export default function OriginsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-5 py-2 border-teal-200 text-teal-700 text-sm font-medium tracking-wide bg-teal-50/50">
            ORIGINS
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            Built from a life,<br />
            <span className="text-teal-600">not a framework.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            ReLoHu is not a product that emerged from market research. It emerged from a wound — and a decade of serious work to understand it.
          </p>
        </div>
      </section>

      {/* ==================== PHOTO + OPENING ==================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-10">
            <img
              src="/david-photo.png"
              alt="Dr. Gedalia — Founder of ReLoHu"
              className="w-48 md:w-56 object-cover object-top rounded-2xl shadow-lg mb-6"
              style={{ aspectRatio: '4/5' }}
            />
            <Badge variant="outline" className="mb-3 px-4 py-1 border-slate-200 text-slate-500 text-xs tracking-widest bg-slate-50">
              THE FOUNDER
            </Badge>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-800 text-center">Dr. Gedalia</h2>
            <p className="text-teal-600 text-lg font-medium mt-2 text-center">Who He Is and Where This Came From</p>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Dr. Gedalia spent the better part of a lifetime searching for something specific: a genuine witness. Someone who could see him clearly — not who they needed him to be, not a version filtered through their own agenda or limitation — but actually, undistortedly him.
            </p>
            <p>
              He looked for this in friendships, in family, in years of therapy across multiple modalities. He found it only in rare, fleeting moments.
            </p>
            <p>
              There is a particular kind of loneliness in sitting across from someone whose entire purpose is to understand you — and feeling that they don't. Not because they aren't trying. Something more structural: the frameworks they're working from were built for someone else. You begin to translate yourself. You learn which version of you lands and which one doesn't. And slowly, without a decision being made, the real thing stops making it into the room.
            </p>
            <p>
              His grandfather survived Auschwitz — as did his grandfather's brother. The rest of their family perished. He carries the inherited weight of what it means to have one's reality unseen, denied, or erased — and how profoundly that wound travels across generations.
            </p>
            <p>
              His grandfather's given name was Gedalia. When he came to America, he quietly set it aside — going by Daniel for the rest of his life, as many survivors did, shedding the old world along with the old name. Dr. Gedalia has taken that name back. He bears it now, in his grandfather's memory, as part of this work — a small act of return against a larger erasure.
            </p>
            <p>
              His grandmother was also a Holocaust survivor — and a poet. After her death, her poems were collected and published by her daughter. He first encountered the power of what would become ReLoHu's methodology not in a session room, but reading those poems — trying to know his grandmother across time and silence. What he found there was a complete interior world: a person fully present on the page, waiting to be witnessed. That experience — of meeting someone through their own words, assembled into something whole — became the seed of everything that followed.
            </p>
            <p className="font-medium text-slate-700">
              That search — and that inheritance — is the origin of ReLoHu.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PHILOSOPHY QUOTE ==================== */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">In His Own Words</p>
          <blockquote className="text-xl md:text-2xl font-light leading-[1.75] text-slate-700 italic">
            "I believe every person is carrying something entirely their own — a particular texture, a particular way of being in the world. And I believe that if you go deep enough into any one of those worlds, you stop feeling alone. The most specific truths turn out to be the most shared ones."
          </blockquote>
          <p className="mt-6 text-sm text-slate-400 font-medium not-italic">— Dr. Gedalia, Founder of ReLoHu</p>
        </div>
      </section>

      {/* ==================== THE ORIGINAL DREAM ==================== */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">Before ReLoHu</p>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-8 leading-snug">
            The dream was always the same.<br />The application changed.
          </h2>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              Before dentistry, before the decade of self-inquiry, there was a different dream. Dr. Gedalia studied Computer Information Systems at Arizona State University's W.P. Carey School of Business because he believed computers could do something for human beings that human beings couldn't do for themselves. At the time, he imagined it as a massive database — a system capable of analyzing patterns and helping to understand a disease like HIV that had resisted every conventional approach.
            </p>
            <p>
              The specific application changed. The underlying conviction never did.
            </p>
            <p>
              What he always wanted was to use computational power in direct service of human beings — to take something complex and interior and make it legible. ReLoHu is what that conviction looks like when it finally found the right problem: not a virus, but a person. Not a cure, but a map.
            </p>
            <p className="text-slate-500">
              The AI methodology at the center of ReLoHu is not a feature added to a psychological practice. It is the original dream, finally realized — decades later, on different terrain, with tools that have finally caught up to the vision.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== THE DECADE ==================== */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-slate-200 text-slate-500 text-xs tracking-widest bg-white">
              THE DECADE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800">
              A decade of structured self-inquiry
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Formal rigor',
                body: 'A Doctor of Dental Surgery from the University of Maryland School of Dentistry — the world\'s first dental school — followed by an AEGD Residency at NYU Langone Health, and a Certificate in Lifestyle and Wellness Coaching from Harvard Medical School. That same capacity for rigorous long-form study was applied, in the second chapter of his life, to an entirely different subject.',
              },
              {
                icon: Microscope,
                title: 'Reality Scientist™',
                body: 'He describes himself as a Reality Scientist™ — someone who applies genuine rigor and curiosity to the inner world the way a scientist applies it to the external one. More importantly, he has tried to live it: as a practitioner, as a patient, and as a persistent student of what it means to be human.',
              },
              {
                icon: Heart,
                title: 'Direct experience',
                body: 'His personal exploration has been methodical and wide-ranging: EMDR, transcranial magnetic stimulation (TMS), neuroimaging through Amen Clinic SPECT scans, sustained journaling, and time spent in plant medicine ceremonies with indigenous communities in Venezuela and Peru. He didn\'t observe these modalities from the outside. He underwent them.',
              },
            ].map((item, i) => (
              <Card key={i} className="bg-white border-slate-100 shadow-sm hover:border-teal-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center mb-4 transition-colors">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CREDENTIALS ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-teal-200 text-teal-700 text-xs tracking-widest bg-teal-50/50">
              CREDENTIALS &amp; TRAINING
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800">
              The formation behind the practice.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: GraduationCap,
                institution: 'University of Maryland School of Dentistry',
                note: 'The first dental school in the world',
                credential: 'Doctor of Dental Surgery (DDS)',
                year: '2013',
              },
              {
                icon: Stethoscope,
                institution: 'NYU Langone Health',
                note: 'San Jose, CA',
                credential: 'Advanced Education in General Dentistry (AEGD) Residency',
                year: '2016',
              },
              {
                icon: Award,
                institution: 'Harvard Medical School',
                note: 'Continuing Education',
                credential: 'Certificate in Lifestyle and Wellness Coaching',
                year: '2025',
              },
              {
                icon: BookOpen,
                institution: 'Arizona State University',
                note: 'W.P. Carey School of Business · Barrett Honors College · The foundation of ReLoHu\'s AI methodology',
                credential: 'Bachelor of Science, Computer Information Systems',
                year: '2007',
              },
              {
                icon: MapPin,
                institution: 'Chulalongkorn University · Bangkok, Thailand',
                note: 'The most prestigious university in Thailand',
                credential: 'International Dental Clinical Externship',
                year: '2012',
              },
              {
                icon: Star,
                institution: 'Licensed to Practice Dentistry',
                note: 'Active & inactive state licenses',
                credential: 'New York · Arizona · Colorado · California',
                year: '4 States',
              },
            ].map((item, i) => (
              <Card key={i} className="bg-white border-slate-100 shadow-sm hover:border-teal-200 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-6 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center flex-shrink-0 transition-colors">
                    <item.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <p className="text-sm font-semibold text-slate-800 leading-snug">{item.institution}</p>
                      <span className="text-xs text-teal-600 font-medium bg-teal-50 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">{item.year}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 mb-2">{item.note}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.credential}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm mt-8 italic">
            Dr. Gedalia has worked directly with patients since 2011 — over a decade of listening, educating, and building trust in clinical settings.
          </p>
        </div>
      </section>

      {/* ==================== THE NAME ==================== */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal-50 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-teal-200 text-teal-700 text-xs tracking-widest bg-teal-50/50">
              THE NAME
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
              ReLoHu is not a coined word.
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              It encodes three values David identified as most absent in every space he sought genuine support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                letters: 'R·E·L',
                value: 'Respect',
                description: 'Respect for who the person actually is — not who would be most convenient for the practitioner to treat.',
                color: 'from-teal-500 to-teal-600',
              },
              {
                letters: 'O',
                value: 'Love',
                description: 'Love as the orientation beneath the listening. Not sentimentality — the genuine care required to hold another person\'s inner world with attention.',
                color: 'from-teal-600 to-teal-700',
              },
              {
                letters: 'H·U',
                value: 'Humility',
                description: 'Humility in the face of how complex a human being is, and how little any of us fully understand about ourselves or each other.',
                color: 'from-teal-700 to-slate-700',
              },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow`}>
                  <span className="text-white font-bold text-sm tracking-widest">{item.letters}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.value}</h3>
                <p className="text-slate-500 leading-relaxed text-sm max-w-xs mx-auto">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed italic">
              These are not marketing language. They reflect a personal ethic built from direct experience of what it means to be helped — and not helped — by another person.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== THE OFFERING ==================== */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-slate-200 text-slate-500 text-xs tracking-widest bg-white">
              THE OFFERING
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
              He decided to become what he couldn't find.
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Not as an act of charity — but as a genuine expression of what he values and what he can offer.
            </p>
          </div>

          <Card className="bg-white border-slate-100 shadow-sm mb-8">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  He is not a therapist. He is not a coach. He is a witness — one with an unusually deep map of the inner territory, assembled over years of genuine exploration.
                </p>
                <p>
                  What he offers is rare: a space where someone can be heard clearly, reflected accurately, and handed back a portrait of themselves that they can actually use.
                </p>
              </div>

              <Separator className="my-8 bg-slate-100" />

              <div className="space-y-3">
                <p className="text-sm font-medium text-teal-600 uppercase tracking-widest mb-4">What he brings to every session</p>
                {[
                  'Formal training across dentistry, medicine, and Harvard-certified wellness coaching',
                  'A decade of documented self-inquiry spanning EMDR, TMS, neuroimaging, and plant medicine',
                  'Pattern-recognition that comes from going deep enough to see structure clearly',
                  'Genuine curiosity about who people actually are beneath their adaptations',
                  'The values encoded in the name he chose: Respect, Love, and Humility',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="w-3 h-3 text-teal-600" />
                    </div>
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-teal-50 to-slate-50 border-teal-100 shadow-sm">
            <CardContent className="p-8 text-center">
              <Quote className="w-8 h-8 text-teal-400 mx-auto mb-4" />
              <p className="text-xl md:text-2xl font-light text-slate-700 italic leading-relaxed max-w-2xl mx-auto">
                "I want to offer an undistorted mirror. That's the whole thing. I want to be the witness I always needed — because it comes directly from my wound, and my wound is also my greatest gift."
              </p>
              <p className="mt-6 text-sm text-teal-600 font-medium">— Dr. Gedalia, Founder</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ==================== REALITY SCIENCE ==================== */}
      <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-900/30 via-slate-900 to-slate-900" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-6">Where ReLoHu Comes From</p>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-snug">
            ReLoHu is not a standalone product.<br />
            It emerges from a broader body of work.
          </h2>
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>
              Dr. Gedalia operates under a framework he calls <span className="text-teal-400 font-medium">Reality Science™</span> — a set of theories and frameworks for understanding the structure of reality itself, including human beings. It is not a philosophy in the abstract sense. It is a rigorous attempt to map how things actually work: systems, patterns, emergence, and the inner architecture of conscious experience.
            </p>
            <p>
              Within that larger framework, ReLoHu is the application to the inner life — a method for mapping how a specific person is configured. The same impulse that drove Dr. Gedalia to understand reality at large drove him to understand the most immediate reality he could access: other human beings, in their full specificity.
            </p>
            <p>
              This is why he calls himself a Reality Scientist™. And it is why ReLoHu carries a rigor that most psychological mapping approaches do not — it was built as part of something larger, not as a product in isolation.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== ORIGIN STATEMENT ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic">
            "A man who spent a decade learning to witness himself, who built a methodology out of that practice, who now offers other people what he had to build for himself from scratch."
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-8 h-px bg-teal-300" />
            <p className="text-sm text-slate-400 font-medium tracking-wide">The origin of ReLoHu</p>
            <div className="w-8 h-px bg-teal-300" />
          </div>
        </div>
      </section>

      {/* ==================== I SEE YOU ==================== */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-5xl md:text-7xl font-light text-slate-800 tracking-wide mb-8">
            "I see you."
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            Two words. Rarely meant. Almost never fully delivered.<br />
            That is what ReLoHu exists to offer.
          </p>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-4">
            Ready to experience it?
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            A 15–20 minute orientation call with Dr. Gedalia. No commitment. Just a conversation to explore if ReLoHu is right for you.
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
