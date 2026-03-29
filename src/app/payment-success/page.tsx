'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <SiteNav />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <Badge variant="outline" className="mb-6 px-4 py-1 border-teal-200 text-teal-700 text-xs tracking-widest bg-teal-50/50">
            PAYMENT CONFIRMED
          </Badge>

          <h1 className="text-3xl md:text-4xl font-medium text-slate-800 mb-5">
            You're in.
          </h1>

          <p className="text-slate-500 leading-relaxed mb-4">
            Your payment is confirmed. A receipt has been sent to your email by Stripe.
          </p>

          <p className="text-slate-500 leading-relaxed mb-10">
            Two next steps: book your session time on Calendly, then fill out the pre-session intake form so Dr. Gedalia can come prepared.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-3.5 text-sm transition-all hover:shadow-lg hover:shadow-teal-100"
            >
              Book Your Session on Calendly
            </a>
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium rounded-full px-8 py-3.5 text-sm transition-all"
            >
              Fill Out Intake Form
            </Link>
          </div>

          <p className="text-slate-400 text-xs mt-8">
            Questions? Email <a href="mailto:respectlovehumility@gmail.com" className="text-teal-500 hover:underline">respectlovehumility@gmail.com</a>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
