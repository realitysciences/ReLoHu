import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'
import { Calendar, ArrowRight, CheckCircle, FileText, Clock, Users, Zap, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'For Therapists & Mental Health Professionals | ReLoHu',
  description: 'Your client arrives already mapped. ReLoHu gives therapists and mental health professionals a complete psychological portrait of their client before session one, so the work can begin immediately.',
}

export default function TherapistsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">ReLoHu · For Therapists</p>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            Your client arrives.<br />You already know them.
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            The first several sessions of therapy are often spent getting oriented. Who is this person? What are the patterns? Where does the real work begin? ReLoHu hands you that picture before your client walks in the door.
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

      {/* ==================== THE ORIENTATION PROBLEM ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">The orientation problem</p>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p className="text-xl font-medium text-slate-800">
              The first 6 to 12 sessions of a new therapeutic relationship are largely orientation. You are learning who this person is. They are learning to trust you. The actual work (the work that required your training) hasn't fully started yet.
            </p>
            <p>
              This is not a failure of therapy. It's the nature of it. Trust takes time. Disclosure takes time. But that time has a cost: for the client in money and patience, and for you in the effort of building a picture from scratch every time a new person sits across from you.
            </p>
            <p>
              Most clients arrive carrying a lifetime of patterns with no map of them. They describe symptoms, events, relationships. They hand you pieces. You work to find the structure underneath. That process is valuable, but it's slow.
            </p>
            <p className="text-slate-800 font-medium">
              ReLoHu is not a shortcut past that process. It's a way to start it already knowing the terrain.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== WHAT RELOHU GIVES YOU ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">What the map gives you</p>
          <div className="space-y-8">
            {[
              {
                icon: Zap,
                title: 'Depth from session one',
                body: 'When a client arrives with a Terrain Map, you are not starting from the surface. You already know the broad architecture of how they operate: their relational patterns, their behavioral drivers, the upstream causes of what they present with. You can ask the question underneath the first question.',
              },
              {
                icon: Users,
                title: 'A shared language',
                body: 'The Terrain Map gives you and your client a shared document to orient around. The client has already read it, reflected on it, and begun to locate themselves in it. That document becomes a reference point: something to return to, build on, or push back against.',
              },
              {
                icon: Clock,
                title: 'Faster therapeutic alliance',
                body: 'Clients who arrive already mapped often feel more known from the first session. The experience of being accurately described, not diagnosed, not categorized, but genuinely seen, is itself therapeutic. It accelerates the trust that makes the deeper work possible.',
              },
              {
                icon: BookOpen,
                title: 'A portrait, not a category',
                body: 'ReLoHu does not diagnose. It maps. The Terrain Map describes how a specific person\'s interior world is configured: where their patterns come from, how their strengths and weaknesses are related, what people from history and fiction share their psychological structure. It is a portrait, not a label.',
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

      {/* ==================== WHAT THE REPORTS CONTAIN ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">What you receive</p>
          <p className="text-slate-600 leading-relaxed mb-8">
            A ReLoHu session produces five written reports, delivered to the client as documents they keep, and can share with you directly if they choose.
          </p>
          <div className="space-y-4">
            {[
              { name: 'Terrain Map', desc: 'Psychological patterns, relational architecture, upstream behavioral drivers, and the structural forces beneath the presenting issue.' },
              { name: 'Archetype Report', desc: 'The deeper forces shaping how the client moves through the world: not a type, but a configuration of pressures and tendencies.' },
              { name: 'People They Are Similar To', desc: 'Real historical figures and fictional characters whose psychological structure resembles the client\'s in documented, specific ways. Often the most immediately resonant part of the map.' },
              { name: 'Strengths and Weaknesses', desc: 'An honest assessment of where the client\'s configuration gives them advantage and where it creates friction, without pathologizing either side.' },
              { name: 'Unique Things They Probably Never Knew About Themselves', desc: 'The observations that fall outside standard categories. Often what the client refers back to most.' },
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
              View a full sample report →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== NOT COMPETING ==================== */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-8">What ReLoHu is not</p>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-snug">
            ReLoHu is not therapy. It does not compete with what you do.
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              ReLoHu is a single mapping session conducted by Dr. Gedalia, a doctoral-level practitioner and founder of the methodology. It produces a set of reports. It is not an ongoing treatment relationship. It does not diagnose, prescribe, or treat.
            </p>
            <p>
              The client's relationship with their therapist remains the primary treatment relationship. ReLoHu is upstream of that: it maps the terrain the therapist will be working on, giving both the client and the clinician a clearer picture of what they are dealing with before the clinical work begins.
            </p>
            <p className="text-slate-300">
              Many therapists find that clients who arrive mapped are more engaged, more reflective, and more able to locate themselves in their own patterns. The map doesn't do the work of therapy. It makes the work of therapy go further.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== QUOTE ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic">
            "Therapy works at the narrator level: the story a person tells about themselves. ReLoHu works upstream from that: mapping the drivers that produce the story in the first place. They are not the same project. They are complementary."
          </p>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-8 h-px bg-teal-300" />
            <p className="text-sm text-slate-400 font-medium tracking-wide">Dr. Gedalia, Founder of ReLoHu</p>
            <div className="w-8 h-px bg-teal-300" />
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS FOR YOUR CLIENTS ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">How to refer a client</p>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Client books an orientation call', body: 'A free 15-minute call with Dr. Gedalia. No commitment. The client decides whether ReLoHu feels right for them before any session is booked.' },
              { step: '2', title: '90-minute intake session', body: 'A deep conversation with Dr. Gedalia. Not a questionnaire. Dr. Gedalia listens carefully to what the client says and how they say it, then analyzes the session using the ReLoHu methodology.' },
              { step: '3', title: 'Five reports delivered', body: 'The client receives all five reports as written documents they keep. They can share any or all of them with you directly.' },
              { step: '4', title: '30-minute Terrain Map reading', body: 'Dr. Gedalia walks the client through the Terrain Map on a dedicated call, so they arrive at your office having already processed the initial picture.' },
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

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-teal-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-200 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">Start with a conversation</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 leading-snug">
            See what a mapped client looks like.
          </h2>
          <p className="text-teal-100 leading-relaxed mb-10 max-w-lg mx-auto">
            A 15-minute orientation call with Dr. Gedalia costs nothing. View a sample report first, or book a call directly to discuss whether ReLoHu is the right fit for your practice.
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
              href="/sample-report"
              className="inline-flex items-center gap-2 border border-teal-400 hover:bg-teal-600 text-white font-medium rounded-full px-8 py-4 text-base transition-all"
            >
              View Sample Report
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-teal-300 text-xs mt-6">
            Founding cohort price: $497 through April. Five reports, 90-minute intake, Terrain Map reading session.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
