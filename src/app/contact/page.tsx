'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Calendar, Clock, Shield, CheckCircle, MessageCircle, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-5 py-2 border-teal-200 text-teal-700 text-sm font-medium tracking-wide bg-teal-50/50">
            CONTACT
          </Badge>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            Get in touch
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Whether you have a question, want to explore if ReLoHu is right for you, or just want to reach out — this is the place.
          </p>
        </div>
      </section>

      {/* ==================== MAIN CONTENT ==================== */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10">

          {/* ---- Contact Form ---- */}
          <div className="md:col-span-3">
            {submitted ? (
              <Card className="bg-white border-teal-100 shadow-sm h-full">
                <CardContent className="p-10 flex flex-col items-center justify-center text-center h-full gap-6">
                  <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium text-slate-800 mb-3">Message received</h2>
                    <p className="text-slate-500 leading-relaxed max-w-sm">
                      Thank you for reaching out. Dr. Gedalia will get back to you personally. In the meantime, feel free to book an orientation call if you'd like to talk sooner.
                    </p>
                  </div>
                  <a
                    href="/#cta-section"
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-3 transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Your Orientation Call
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="text-sm text-slate-400 hover:text-teal-600 transition-colors"
                  >
                    Send another message
                  </button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white border-slate-100 shadow-sm">
                <CardContent className="p-8">
                  <h2 className="text-xl font-medium text-slate-800 mb-6">Send a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1.5">Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all text-slate-800 placeholder:text-slate-300 text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1.5">Email</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all text-slate-800 placeholder:text-slate-300 text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">Subject</label>
                      <select
                        value={form.subject}
                        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all text-slate-800 text-sm bg-white"
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="general">General question</option>
                        <option value="session">I want to book a session</option>
                        <option value="therapist">I'm a therapist or practitioner</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all resize-none text-slate-800 placeholder:text-slate-300 text-sm"
                        placeholder="What's on your mind?"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full py-6 text-base"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* ---- Sidebar ---- */}
          <div className="md:col-span-2 space-y-6">

            {/* Orientation call */}
            <Card className="bg-gradient-to-br from-teal-600 to-teal-700 border-0 shadow-lg text-white">
              <CardContent className="p-7">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-2">Prefer to talk?</h3>
                <p className="text-teal-100 text-sm leading-relaxed mb-5">
                  The fastest way to get your questions answered is a 15–20 minute orientation call with Dr. Gedalia. No commitment. Just a conversation.
                </p>
                <a
                  href="/#cta-section"
                  className="inline-flex items-center gap-2 bg-white text-teal-700 hover:bg-teal-50 font-medium rounded-full px-6 py-2.5 text-sm transition-all"
                >
                  Book an Orientation Call
                </a>
                <div className="mt-5 pt-5 border-t border-teal-500/50 space-y-2">
                  {[
                    { icon: Clock, text: '15–20 minutes' },
                    { icon: Shield, text: '100% confidential' },
                    { icon: CheckCircle, text: 'No commitment required' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-teal-100 text-sm">
                      <item.icon className="w-4 h-4 text-teal-300" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Direct contact */}
            <Card className="bg-white border-slate-100 shadow-sm">
              <CardContent className="p-7">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">Direct email</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Prefer to write directly? Every message goes to Dr. Gedalia personally.
                </p>
                <a
                  href="mailto:hello@relohu.com"
                  className="text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
                >
                  hello@relohu.com
                </a>
              </CardContent>
            </Card>

            {/* Response note */}
            <p className="text-xs text-slate-400 leading-relaxed px-1">
              All messages are read and responded to personally. Response time is typically within one business day.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
