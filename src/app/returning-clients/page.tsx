import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'
import { Calendar, FileText, Mic, RefreshCw } from 'lucide-react'

export const metadata = {
  title: 'Returning Clients | ReLoHu',
  description: 'Because Dr. David already knows your terrain, returning sessions move faster and go further than the first one.',
}

export default function ReturningClientsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <SiteNav />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">ReLoHu · Returning Clients</p>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            Because Dr. David already knows<br />your terrain.
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            We can move faster and go further. The existing map means you don't start from scratch. You start from a foundation. Three paths exist for returning clients, depending on what you're ready for next.
          </p>
        </div>
      </section>

      {/* ── Three tiers ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto space-y-6">

          {/* Lens Report */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <div className="bg-slate-50 px-7 py-5 flex items-center justify-between border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-teal-600" />
                </div>
                <h2 className="font-medium text-slate-800">Lens Report</h2>
              </div>
              <p className="text-xl font-medium text-teal-600">$197</p>
            </div>
            <div className="px-7 py-6">
              <p className="text-slate-600 leading-relaxed text-sm mb-5">
                No new session required. Your existing transcript is run through a different framework and a new report is produced. The result adds a new dimension to your existing Terrain Map.
              </p>
              <div className="space-y-2">
                {[
                  'No intake session required',
                  'New framework applied to your existing session',
                  'Delivered as a file you keep',
                  '30–45 minutes of Dr. David\'s analysis and review time',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-slate-500">
                    <span className="text-teal-400 mt-0.5 shrink-0">·</span>
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-5 leading-relaxed italic">
                Best for: clients who received their Terrain Map and want to go deeper into a specific dimension, such as character psychology, archetypal patterns, or a particular framework, without scheduling a new intake.
              </p>
            </div>
          </div>

          {/* Depth Session */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <div className="bg-slate-50 px-7 py-5 flex items-center justify-between border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                  <Mic className="w-4 h-4 text-teal-600" />
                </div>
                <h2 className="font-medium text-slate-800">Depth Session</h2>
              </div>
              <p className="text-xl font-medium text-teal-600">$347</p>
            </div>
            <div className="px-7 py-6">
              <p className="text-slate-600 leading-relaxed text-sm mb-5">
                A new intake that goes directly into something your first Terrain Map surfaced. Picks up where the map left off, no orientation, no overview, no starting from scratch. The conversation is focused, the report is more targeted, and the work goes further because the foundation already exists.
              </p>
              <div className="space-y-2">
                {[
                  'New intake session, shorter than the original, fully focused',
                  'Verbal readback during the session',
                  'Targeted report delivered as a file',
                  'No orientation overhead, you already know the terrain',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-slate-500">
                    <span className="text-teal-400 mt-0.5 shrink-0">·</span>
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-5 leading-relaxed italic">
                Best for: clients who received their Terrain Map and found something they want to go deeper on, such as a specific pattern, wound, or relational dynamic that the first map named but didn't fully explore.
              </p>
            </div>
          </div>

          {/* Fresh Session */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <div className="bg-slate-50 px-7 py-5 flex items-center justify-between border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 text-teal-600" />
                </div>
                <h2 className="font-medium text-slate-800">Fresh Session</h2>
              </div>
              <p className="text-xl font-medium text-teal-600">$397</p>
            </div>
            <div className="px-7 py-6">
              <p className="text-slate-600 leading-relaxed text-sm mb-5">
                A new intake on a different area of life: relationships, work, a specific recurring pattern. Similar in scope to the original session, but without the orientation that a first conversation requires. Because the relationship already exists, you go deeper sooner. The map you receive covers new territory entirely.
              </p>
              <div className="space-y-2">
                {[
                  'Full intake session on a new focus area',
                  'Verbal readback during the session',
                  'Complete report on the new territory: relationships, work, or a specific pattern',
                  'Moves faster than a first session, no orientation overhead',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-slate-500">
                    <span className="text-teal-400 mt-0.5 shrink-0">·</span>
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-5 leading-relaxed italic">
                Best for: clients who want to apply the same depth of mapping to a different domain, such as a relationship they're navigating, a career decision, or a pattern that keeps showing up in a specific context.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Framing note ── */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-light leading-[1.75] text-slate-700 italic mb-6">
            "The first session maps the terrain. Everything after builds from that map, which means it can start from a deeper place, move faster, and reach further than anything that came before."
          </blockquote>
          <p className="text-sm text-slate-400 font-medium">Dr. David</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-medium text-slate-800 mb-3">Ready to go further?</h2>
          <p className="text-slate-500 leading-relaxed mb-8 text-sm">
            If you've completed a Terrain Map and want to explore what's next, reach out directly. Dr. David will suggest which session type fits where you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-4 text-sm transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book a Return Session
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 border border-slate-300 text-slate-600 hover:border-teal-400 hover:text-teal-600 font-medium rounded-full px-8 py-4 text-sm transition-all"
            >
              Ask a Question First
            </Link>
          </div>
          <p className="text-slate-400 text-xs mt-5">Available to clients who have completed a Terrain Map session.</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
