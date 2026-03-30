import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const metadata = {
  title: 'What People Say | ReLoHu',
  description: 'ReLoHu is newly public. Verified client responses are being gathered now.',
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <SiteNav />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white" />
        <div className="relative max-w-2xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-5 py-2 border-teal-200 text-teal-700 text-sm font-medium tracking-wide bg-teal-50/50">
            WHAT PEOPLE SAY
          </Badge>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            This page is being built<br />
            <span className="text-teal-600">from real sessions.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
            ReLoHu has been in private development for two years. It opened to the public in April 2026. Verified responses from clients will appear here as they come in.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-slate-600 leading-relaxed mb-6">
            If you've had a session and want to share what it was like, Dr. Gedalia would be grateful. Responses are published only with your permission, and only in the form you approve.
          </p>
          <a
            href="mailto:respectlovehumility@gmail.com?subject=My ReLoHu experience"
            className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-3.5 text-sm transition-all hover:shadow-lg hover:shadow-teal-100"
          >
            Share Your Experience
          </a>
          <p className="text-slate-400 text-xs mt-4">Nothing is published without your explicit approval.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            In the meantime, the best way to understand what a session is like is to read what Dr. Gedalia has written about the work, or to start with a free orientation call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/origins"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium rounded-full px-8 py-3.5 text-sm transition-all"
            >
              Read the Origins
            </Link>
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-3.5 text-sm transition-all hover:shadow-lg hover:shadow-teal-100"
            >
              Book a Free Orientation Call
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
