'use client'

import { useState } from 'react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Badge } from '@/components/ui/badge'

const questions = [
  {
    num: 1,
    tag: 'Orientation',
    label: 'How did you come to be here?',
    sub: 'What was the thing that made you say yes to this? No right answer. Could be a recommendation, a conversation, a moment of frustration, a feeling you\'ve been carrying.',
    key: 'q1',
    required: true,
    placeholder: 'Take your time with this one...',
  },
  {
    num: 2,
    tag: 'Self-concept baseline',
    label: 'How would you describe yourself to someone who had no idea who you are?',
    sub: 'Not your résumé, but how you actually move through life. This becomes a reference point. The session often surfaces things that don\'t appear in how we narrate ourselves.',
    key: 'q2',
    required: true,
    placeholder: '',
  },
  {
    num: 3,
    tag: 'Prior work signal',
    label: 'What have you already tried to understand about yourself?',
    sub: 'Therapy, books, retreats, conversations, anything. And where has it felt incomplete? This helps me understand where your own map has edges.',
    key: 'q3',
    required: true,
    placeholder: '',
  },
  {
    num: 4,
    tag: 'Present-tense friction',
    label: 'Is there a pattern in your life right now that you keep returning to?',
    sub: 'Something you can describe but can\'t quite explain. A recurring dynamic, a feeling that keeps showing up, a decision you can\'t seem to make differently. You don\'t need to have language for it yet.',
    key: 'q4',
    required: true,
    placeholder: '',
  },
  {
    num: 5,
    tag: 'Witnessing readiness',
    label: 'Is there anything you\'d want me to know before we begin?',
    sub: 'Something that would help me understand what kind of presence you\'re bringing into this. Optional. Some people have something specific. Some people don\'t. Either is fine.',
    key: 'q5',
    required: false,
    placeholder: 'Optional',
  },
]

export default function IntakePage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', sessionDate: '',
    q1: '', q2: '', q3: '', q4: '', q5: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(key: string, value: string) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('done')
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'done') {
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
              RECEIVED
            </Badge>
            <h1 className="text-3xl md:text-4xl font-medium text-slate-800 mb-5">
              Got it, {form.name.split(' ')[0]}.
            </h1>
            <p className="text-slate-500 leading-relaxed mb-4">
              Your responses are with Dr. David. He reads every intake carefully before the session. What you wrote won't be skimmed. It will be used.
            </p>
            <p className="text-slate-500 leading-relaxed">
              A confirmation has been sent to <span className="font-medium text-slate-700">{form.email}</span>. If anything shifts before the session, or something important didn't make it into the form, just reply to that email.
            </p>
          </div>
        </section>
        <SiteFooter />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <SiteNav />

      {/* Header */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white" />
        <div className="relative max-w-2xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-5 py-2 border-teal-200 text-teal-700 text-sm font-medium tracking-wide bg-teal-50/50">
            PRE-SESSION INTAKE
          </Badge>
          <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-5 tracking-tight text-slate-800">
            Before we meet.
          </h1>
          <p className="text-slate-500 leading-relaxed max-w-lg mx-auto">
            These questions aren't a screening. They're a way to arrive. Take as much space as you need. There are no right answers.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 px-6">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">

          {/* ── Contact info ── */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 md:p-8 space-y-5">
            <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-2">Your Info</p>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full name <span className="text-teal-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email <span className="text-teal-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone <span className="text-slate-400 font-normal text-xs">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Session date/time <span className="text-slate-400 font-normal text-xs">(optional)</span>
                </label>
                <input
                  type="text"
                  value={form.sessionDate}
                  onChange={e => handleChange('sessionDate', e.target.value)}
                  placeholder="e.g. April 14, 2pm EST"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition"
                />
              </div>
            </div>
          </div>

          {/* ── Questions ── */}
          <div className="space-y-5">
            <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase px-1">Pre-Session Questions</p>

            {questions.map(({ num, tag, label, sub, key, required, placeholder }) => (
              <div key={key} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">{num}</span>
                  <span className="text-xs text-slate-400 uppercase tracking-widest">{tag}</span>
                  {!required && (
                    <span className="text-xs text-slate-300 ml-auto">optional</span>
                  )}
                </div>
                <p className="text-base font-medium text-slate-800 leading-snug mb-2">
                  {label} {required && <span className="text-teal-600">*</span>}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{sub}</p>
                <textarea
                  required={required}
                  value={(form as Record<string, string>)[key]}
                  onChange={e => handleChange(key, e.target.value)}
                  placeholder={placeholder}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm leading-relaxed resize-y focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition"
                />
              </div>
            ))}
          </div>

          {/* ── Submit ── */}
          {status === 'error' && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl px-5 py-4">
              {errorMsg}
            </div>
          )}

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-full px-10 py-4 text-base transition-all duration-300 hover:shadow-lg hover:shadow-teal-100"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : 'Submit Intake Form'}
            </button>
            <p className="text-slate-400 text-xs mt-3">Responses go directly to Dr. David. You'll receive a confirmation email.</p>
          </div>

        </form>
      </section>

      <SiteFooter />
    </main>
  )
}
