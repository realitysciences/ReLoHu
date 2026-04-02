'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Badge } from '@/components/ui/badge'

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
            ReLoHu is not a product that emerged from market research. It emerged from a wound, and a decade of serious work to understand it.
          </p>
        </div>
      </section>

      {/* ==================== PHOTO + OPENING ==================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="group overflow-hidden rounded-2xl shadow-lg mb-2 w-64 md:w-72">
              <img
                src="/david-colombia.jpg"
                alt="Dr. David, Colombia"
                className="w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
            <p className="text-xs text-slate-400 tracking-wide mb-6">Colombia</p>
            <Badge variant="outline" className="mb-3 px-4 py-1 border-slate-200 text-slate-500 text-xs tracking-widest bg-slate-50">
              THE FOUNDER
            </Badge>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-800 text-center">Dr. David</h2>
            <p className="text-teal-600 text-lg font-medium mt-2 text-center">Who He Is and Where This Came From</p>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Dr. David spent the better part of a lifetime searching for something specific: a genuine witness. Someone who could see him clearly, not who they needed him to be, not a version filtered through their own agenda or limitation, but actually, undistortedly him.
            </p>
            <p>
              He looked for this in friendships, in family, in years of therapy across multiple modalities. He found it only in rare, fleeting moments.
            </p>
            <p>
              There is a particular kind of loneliness in sitting across from someone whose entire purpose is to understand you, and feeling that they don't. Not because they aren't trying. Something more structural: the frameworks they're working from were built for someone else. You begin to translate yourself. You learn which version of you lands and which one doesn't. And slowly, without a decision being made, the real thing stops making it into the room.
            </p>
            <p>
              His grandfather survived Auschwitz, as did his grandfather's brother. The rest of their family perished. He carries the inherited weight of what it means to have one's reality unseen, denied, or erased, and how profoundly that wound travels across generations.
            </p>
            <p>
              His grandfather's given name was Gedalia. When he came to America, he quietly set it aside, going by Daniel for the rest of his life, as many survivors did, shedding the old world along with the old name. Dr. David carries that name privately, as part of the inheritance that shapes this work.
            </p>
            <p>
              His grandmother was also a Holocaust survivor, and a poet. After her death, her poems were collected and published by her daughter. He first encountered the power of what would become ReLoHu's methodology not in a session room, but reading those poems, trying to know his grandmother across time and silence. What he found there was a complete interior world: a person fully present on the page, waiting to be witnessed. That experience of meeting someone through their own words, assembled into something whole, became the seed of everything that followed.
            </p>
            <p>
              That search took him far from where he started. He has lived on a Native American reservation in North Dakota, spent years in Colombia, and still lives there now. He has sat in Buddhist temples in Thailand and Japan and in plant medicine ceremonies with indigenous communities across South America. In 2021, he spent seventeen days alone in a personal hut in the middle of the jungle outside Iquitos, Peru: writing, meditating, playing music, watching the jungle, and sitting with himself in a way that ordinary life rarely permits. Not as a tourist. As someone genuinely trying to understand what human beings know about being human.
            </p>
            <p className="font-medium text-slate-700">
              That search, and that inheritance, is the origin of ReLoHu.
            </p>
            <p className="text-slate-500 italic mt-2">
              "I built a methodology for giving other people the experience of being met because it's the thing I most need and least reliably receive."
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PHILOSOPHY QUOTE ==================== */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">In His Own Words</p>
          <blockquote className="text-xl md:text-2xl font-light leading-[1.75] text-slate-700 italic">
            "I believe every person is carrying something entirely their own, a particular texture, a particular way of being in the world. And I believe that if you go deep enough into any one of those worlds, you stop feeling alone. The most specific truths turn out to be the most shared ones."
          </blockquote>
          <p className="mt-6 text-sm text-slate-400 font-medium not-italic">Dr. David, Founder of ReLoHu</p>
        </div>
      </section>

      {/* ==================== FIELD PHOTOS ==================== */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10 text-center">In the Field</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/piaroa.jpg"
                  alt="Dr. David with a Piaroa elder, Venezuela"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
              <p className="mt-3 text-xs text-slate-400 text-center tracking-wide">With a Piaroa elder, Venezuela</p>
            </div>
            <div className="group">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/shaman.jpg"
                  alt="Dr. David receiving a blessing, Peru"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
              <p className="mt-3 text-xs text-slate-400 text-center tracking-wide">Receiving a blessing, Peru</p>
            </div>
          </div>
          <p className="text-center text-slate-400 text-sm mt-8 max-w-xl mx-auto leading-relaxed">
            He did not study these traditions from the outside. He went.
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
              It encodes three values Dr. David identified as most absent in every space he sought genuine support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                letters: 'RE',
                value: 'Respect',
                description: 'Respect for who the person actually is, not who would be most convenient for the practitioner to treat.',
                color: 'from-teal-500 to-teal-600',
              },
              {
                letters: 'LO',
                value: 'Love',
                description: 'Love as the orientation beneath the listening. Not sentimentality, but the genuine care required to hold another person\'s inner world with attention.',
                color: 'from-teal-600 to-teal-700',
              },
              {
                letters: 'HU',
                value: 'Humility',
                description: 'Humility in the face of how complex a human being is, and how little any of us fully understand about ourselves or each other.',
                color: 'from-teal-700 to-slate-700',
              },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow`}>
                  <span className="text-white font-bold text-xl tracking-widest">{item.letters}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.value}</h3>
                <p className="text-slate-500 leading-relaxed text-sm max-w-xs mx-auto">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed italic">
              These are not marketing language. They reflect a personal ethic built from direct experience of what it means to be helped, and not helped, by another person.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-4">
            Ready to experience it?
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            A 15–20 minute orientation call with Dr. David. No commitment. Just a conversation to explore if ReLoHu is right for you.
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
