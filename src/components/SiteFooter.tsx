import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="py-12 px-6 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
        <Link href="/">
          <img src="/relohu-logo.png" alt="ReLoHu" className="h-10 w-auto object-contain opacity-80" />
        </Link>
        <p className="text-teal-600/80 font-light text-lg italic">
          "You don't need to be fixed. You need to be known."
        </p>
        <p className="text-slate-400 text-sm">Created by David</p>
        <div className="flex items-center gap-6 flex-wrap justify-center text-sm text-slate-400">
          <Link href="/origins" className="hover:text-teal-600 transition-colors">Origins</Link>
          <Link href="/uniqueness" className="hover:text-teal-600 transition-colors">The Difference</Link>
          <Link href="/not-therapy" className="hover:text-teal-600 transition-colors">Not Therapy</Link>
          <Link href="/retreats" className="hover:text-teal-600 transition-colors">For Retreats</Link>
          <Link href="/therapists" className="hover:text-teal-600 transition-colors">For Therapists</Link>
          <Link href="/business" className="hover:text-teal-600 transition-colors">For Business</Link>
          <Link href="/rehab" className="hover:text-teal-600 transition-colors">For Rehabs</Link>
          <Link href="/blog" className="hover:text-teal-600 transition-colors">Blog</Link>
          <Link href="/founding-cohort" className="hover:text-teal-600 transition-colors">Founding Cohort</Link>
          <Link href="/faq" className="hover:text-teal-600 transition-colors">FAQ</Link>
          <Link href="/contact" className="hover:text-teal-600 transition-colors">Contact</Link>
          <Link href="/intake" className="hover:text-teal-600 transition-colors">Session Intake</Link>
          <Link href="/privacy" className="hover:text-teal-600 transition-colors">Privacy</Link>
        </div>
        <p className="text-slate-400 text-sm">
          © 2026 ReLoHu. All Rights Reserved. | Built by{' '}
          <a href="https://svgvisual.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline underline-offset-2">
            SVG
          </a>
        </p>
        <p className="text-slate-500 text-xs">ReLoHu is operated by Spheronaut LLC</p>
        <p className="text-slate-400 text-xs">Your sessions are confidential. Your data is never sold.</p>
      </div>
    </footer>
  )
}
