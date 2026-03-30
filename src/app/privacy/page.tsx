import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy & Confidentiality | ReLoHu',
  description: 'How ReLoHu handles your personal information and session material.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      <article className="pt-24 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          <div className="mb-12">
            <p className="text-[10px] font-mono tracking-widest text-teal-600 uppercase mb-4">Privacy & Confidentiality</p>
            <h1 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4 leading-tight">
              How your information is handled
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              ReLoHu asks you to share things most people have never said out loud. That requires trust. This page covers the essentials. Full details, including data handling and confidentiality terms, are covered in the client agreement you sign before any session begins.
            </p>
            <p className="text-slate-400 text-sm mt-4">Last updated: March 2026</p>
          </div>

          <div className="space-y-10 text-[0.97rem] leading-[1.85] text-slate-700">

            <section>
              <h2 className="text-lg font-medium text-slate-800 mb-3">Your information is never shared or sold</h2>
              <p>
                Everything shared within a ReLoHu session is held in strict confidence. Session material is never shared, sold, licensed, or disclosed to any third party. Ever. The only exception would be if required by law, and you would be notified to the extent permitted.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-slate-800 mb-3">Data security</h2>
              <p>
                All session material is stored in encrypted, access-controlled systems. Only Dr. Gedalia has access. No session content is stored on shared or publicly accessible platforms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-slate-800 mb-3">What belongs to you, and what stays with ReLoHu</h2>
              <p className="mb-5 text-slate-600">
                There is a clean distinction between two categories of material produced from a session:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-teal-50 border border-teal-100 rounded-xl p-5">
                  <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-3">Yours</p>
                  <p className="text-slate-700 text-sm leading-relaxed">Your Terrain Map and all deliverables produced from the session. These are your portrait, assembled from your words, synthesized for you. They are delivered to you and belong to you entirely.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-3">ReLoHu's</p>
                  <p className="text-slate-600 text-sm leading-relaxed">The raw substrate that powered the analysis, retained under full confidentiality and used only to produce your deliverables or inform any future reports from your session.</p>
                </div>
              </div>
              <div className="border-l-2 border-teal-300 pl-5 py-1 my-6">
                <p className="text-slate-600 italic">"You own your map. We hold the ground it was drawn from."</p>
              </div>
              <p className="mb-3 text-slate-700">You have the right to:</p>
              <ul className="space-y-2 list-none pl-0 mb-5">
                {[
                  'Receive all deliverables from your session: your Terrain Map and any additional reports are yours entirely',
                  'Request deletion of your personal contact information from ReLoHu\'s records at any time',
                  'Know what deliverables have been produced from your session',
                  'Withdraw consent at any time prior to the session',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal-500 font-mono text-sm mt-0.5">·</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-slate-800 mb-3">Website data</h2>
              <p>
                This website does not use tracking cookies or third-party analytics platforms that collect personally identifiable information. Basic, anonymized traffic data may be collected by the hosting provider.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-slate-800 mb-3">The client agreement</h2>
              <p>
                Before any session begins, you will sign a client agreement that covers data handling, confidentiality terms, and your rights in full detail. This page is a plain-language overview. The client agreement is the binding document.
              </p>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <h2 className="text-lg font-medium text-slate-800 mb-3">Questions</h2>
              <p>
                If you have any questions about how your information is handled, contact Dr. Gedalia directly. Every message is read personally.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-7 py-3 text-sm transition-all"
                >
                  Contact Dr. Gedalia →
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  )
}
