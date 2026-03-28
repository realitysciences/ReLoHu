'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext"
import {
  Eye,
  Heart,
  XCircle,
  Shield,
  Map,
  Compass,
  FileText,
  Route,
  Phone,
  Calendar,
  Clock,
  User,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  MessageCircle,
  Quote,
  Users,
  Lightbulb,
  Timer,
  BookOpen,
  Target,
  Bot,
  Mic,
  HelpCircle
} from "lucide-react"
import { useState } from "react"

function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-slate-100 rounded-full p-1 border border-slate-200">
      <button
        onClick={() => setLang('en')}
        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${lang === 'en'
          ? 'bg-teal-600 text-white shadow-sm'
          : 'text-slate-500 hover:text-slate-700'
          }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('es')}
        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${lang === 'es'
          ? 'bg-teal-600 text-white shadow-sm'
          : 'text-slate-500 hover:text-slate-700'
          }`}
      >
        ES
      </button>
    </div>
  )
}

// Booking Modal Component
function BookingModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { lang, t } = useLanguage()
  const [step, setStep] = useState(1)

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ]

  const dates = lang === 'en'
    ? ["Mon, Mar 17", "Tue, Mar 18", "Wed, Mar 19", "Thu, Mar 20", "Fri, Mar 21"]
    : ["Lun, Mar 17", "Mar, Mar 18", "Mié, Mar 19", "Jue, Mar 20", "Vie, Mar 21"]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white border-slate-200 rounded-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <DialogTitle className="text-xl text-slate-800">
                {lang === 'en' ? 'Book Your Orientation Call' : 'Agenda tu Llamada de Orientación'}
              </DialogTitle>
              <DialogDescription className="text-slate-500">
                {lang === 'en' ? '15-20 min • No commitment • Confidential' : '15-20 min • Sin compromiso • Confidencial'}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-4">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${s <= step ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-12 h-0.5 ${s < step ? 'bg-teal-600' : 'bg-slate-200'}`} />}
              </div>
            ))}
          </div>

          {/* Step 1: Select Date */}
          {step === 1 && (
            <div>
              <h4 className="text-sm font-medium text-slate-600 mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {lang === 'en' ? 'Select a date' : 'Selecciona una fecha'}
              </h4>
              <div className="grid grid-cols-5 gap-2">
                {dates.map((date, i) => (
                  <button
                    key={i}
                    className={`p-3 rounded-xl text-sm font-medium transition-all ${i === 0
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-50 text-slate-600 hover:bg-teal-50 hover:text-teal-600 border border-slate-200'
                      }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Time */}
          {step === 2 && (
            <div>
              <h4 className="text-sm font-medium text-slate-600 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {lang === 'en' ? 'Select a time' : 'Selecciona una hora'}
              </h4>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time, i) => (
                  <button
                    key={i}
                    className={`p-3 rounded-xl text-sm font-medium transition-all ${i === 2
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-50 text-slate-600 hover:bg-teal-50 hover:text-teal-600 border border-slate-200'
                      }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Your Info */}
          {step === 3 && (
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-slate-600 mb-3 flex items-center gap-2">
                <User className="w-4 h-4" />
                {lang === 'en' ? 'Your information' : 'Tu información'}
              </h4>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">
                  {lang === 'en' ? 'Name' : 'Nombre'}
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                  placeholder={lang === 'en' ? 'Your name' : 'Tu nombre'}
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                  placeholder={lang === 'en' ? 'your@email.com' : 'tu@email.com'}
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">
                  {lang === 'en' ? 'What brings you here?' : '¿Qué te trae aquí?'}
                </label>
                <textarea
                  className="w-full p-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all resize-none"
                  rows={3}
                  placeholder={lang === 'en' ? 'Briefly share what you\'re looking for...' : 'Comparte brevemente qué buscas...'}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 pt-4 border-t border-slate-100">
            <Button
              variant="ghost"
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="text-slate-500"
            >
              {lang === 'en' ? 'Back' : 'Atrás'}
            </Button>

            {step < 3 ? (
              <Button
                onClick={() => setStep(step + 1)}
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6"
              >
                {lang === 'en' ? 'Continue' : 'Continuar'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {lang === 'en' ? 'Confirm Booking' : 'Confirmar Cita'}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function LandingContent() {
  const { t, lang } = useLanguage()
  const CALENDLY = 'https://calendly.com/relohu'

  const painIcons = [Eye, Heart, XCircle, Shield]
  const solutionIcons = [Map, Brain, BookOpen, Users, Target, Compass, Route]
  const processIcons = [Phone, Brain, FileText, ArrowRight]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <SiteNav extra={<LanguageToggle />} hideBookButton />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
          <Badge variant="outline" className="mb-8 px-5 py-2 border-teal-200 text-teal-700 text-sm font-medium tracking-wide bg-teal-50/50">
            <Sparkles className="w-4 h-4 mr-2" />
            {t('hero.badge')}
          </Badge>

          {/* Tagline */}
          <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-6">
            {t('hero.tagline')}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 tracking-tight text-slate-700">
            <span className="block">{t('hero.headline1')}</span>
            <span className="block mt-2">{t('hero.headline2')}</span>
            <span className="block mt-4 text-slate-600">{t('hero.headline3')}</span>
            <span className="block mt-2 text-teal-600 font-semibold">{t('hero.headline4')}</span>
          </h1>

          <p className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-4">
            reh · loh · hoo
          </p>

          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('hero.subheadline')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-10 py-7 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-100"
              onClick={() => window.open(CALENDLY, '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              {t('hero.cta')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-600 hover:border-teal-400 hover:text-teal-600 font-medium px-10 py-7 text-lg rounded-full transition-all duration-300"
              onClick={() => window.location.href = '/founding-cohort'}
            >
              {lang === 'en' ? 'View the Offer' : 'Ver la Oferta'}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ==================== LISTENING HOOK ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-5 leading-tight">
            When was the last time someone truly listened to you?
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Not waiting for their turn. Not forming a response. Not reaching for advice. Just — listening.
          </p>
        </div>
      </section>

      {/* ==================== PROBLEM SECTION (PAS - Problem) ==================== */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-slate-200 text-slate-500 text-xs tracking-widest bg-white">
              {t('pain.title')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-slate-800">
              {t('pain.headline')}
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              {t('pain.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => {
              const Icon = painIcons[num - 1]
              return (
                <Card key={num} className="bg-white border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-teal-50 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon className="w-6 h-6 text-slate-400 group-hover:text-teal-600 transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">
                          {t(`pain.card${num}.title`)}
                        </h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                          {t(`pain.card${num}.text`)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== AGITATION SECTION (PAS - Agitation) ==================== */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-teal-50 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-slate-200 text-slate-500 text-xs tracking-widest bg-slate-50">
              {t('agitation.title')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-slate-800">
              {t('agitation.headline')}
            </h2>
            <p className="text-teal-600 text-xl font-medium">
              {t('agitation.subtitle')}
            </p>
          </div>

          <div className="space-y-8 text-center">
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {t('agitation.text1')}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {t('agitation.text2')}
            </p>

            <div className="py-12">
              <Card className="bg-gradient-to-br from-teal-50 to-slate-50 border-teal-100 max-w-2xl mx-auto shadow-sm">
                <CardContent className="p-8">
                  <MessageCircle className="w-8 h-8 text-teal-600 mx-auto mb-4" />
                  <p className="text-xl md:text-2xl font-light text-slate-700 italic leading-relaxed">
                    {t('agitation.quote')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOR EVERYONE SECTION ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="border border-teal-100 rounded-2xl p-10 bg-teal-50/30 text-center">
            <p className="text-[10px] font-mono tracking-widest text-teal-600 uppercase mb-5">This is for everyone</p>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-5 leading-snug">
              You don't have to be struggling<br className="hidden md:block" /> to deserve to be known.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 max-w-xl mx-auto">
              Some people come to ReLoHu because something isn't working. Others come simply because they're curious — about their patterns, their depth, what makes them who they are. Both are equally welcome.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4 max-w-xl mx-auto">
              The session is the same. The map is the same. The experience of being genuinely seen is the same.
            </p>
            <p className="text-slate-700 font-medium max-w-xl mx-auto">
              Self-knowledge is not a remedy. It's a gift. You don't need a reason beyond wanting it.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SOLUTION SECTION (PAS - Solution) ==================== */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-teal-200 text-teal-700 text-xs tracking-widest bg-teal-50/50">
              {t('solution.title')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-slate-800">
              {t('solution.headline')}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto font-medium">
              {t('solution.subtitle')}
            </p>
          </div>

          {/* Key Benefit Banner */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-3 rounded-full shadow-lg">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">{t('solution.badge')}</span>
            </div>
          </div>

          <Card className="bg-white border-slate-100 shadow-sm mb-12">
            <CardContent className="p-8 md:p-12">

              {/* Guaranteed deliverable */}
              <h3 className="text-lg font-medium text-teal-600 mb-4">{t('solution.what_is')}</h3>
              <div className="flex items-start gap-4 group bg-teal-50 rounded-xl p-4 mb-8 border border-teal-100">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                  <Map className="w-5 h-5 text-teal-600" />
                </div>
                <span className="text-slate-700 leading-relaxed pt-2 font-medium">
                  {t('solution.item1')}
                </span>
              </div>

              {/* Possibilities */}
              <h3 className="text-lg font-medium text-slate-500 mb-4">{t('solution.possibilities_title')}</h3>
              <ul className="space-y-4 mb-6">
                {[2, 3, 4, 5, 6, 7].map((num) => {
                  const Icon = solutionIcons[num - 1]
                  return (
                    <li key={num} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-50 transition-colors">
                        <Icon className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                      </div>
                      <span className="text-slate-500 leading-relaxed pt-2">
                        {t(`solution.item${num}`)}
                      </span>
                    </li>
                  )
                })}
              </ul>

              <p className="text-sm text-slate-400 italic leading-relaxed mb-8 pl-14">
                {t('solution.possibilities_note')}
              </p>

              <Separator className="my-8 bg-slate-100" />

              <div className="flex items-start gap-4 bg-gradient-to-r from-teal-50 to-slate-50 rounded-xl p-5 border border-teal-100">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                </div>
                <p className="text-slate-700 leading-relaxed pt-2">
                  {t('solution.result')}
                </p>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="/sample-report"
                  className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-medium underline underline-offset-4 decoration-teal-200 hover:decoration-teal-400 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  See what a real Terrain Map looks like →
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-slate-200 text-slate-500 text-xs tracking-widest bg-white">
              {t('process.title')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800">
              {t('process.headline')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => {
              const Icon = processIcons[num - 1]
              return (
                <Card key={num} className="bg-white border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                            Step {num}
                          </span>
                          {(() => { const d = t(`process.step${num}.duration`); return d !== `process.step${num}.duration` && <span className="text-xs text-slate-400">{d}</span> })()}
                        </div>
                        <h3 className="text-lg font-medium text-slate-800 group-hover:text-teal-600 transition-colors mb-2">
                          {t(`process.step${num}.title`)}
                        </h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                          {t(`process.step${num}.text`)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== FOR WHO SECTION ==================== */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-teal-200 text-teal-700 text-xs tracking-widest bg-teal-50/50">
              {t('forwho.title')}
            </Badge>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-800">
              {t('forwho.headline')}
            </h2>
          </div>

          <Card className="bg-gradient-to-br from-slate-50 to-white border-slate-100 shadow-sm">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <li key={num} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-teal-200 transition-colors">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-slate-600 text-lg leading-relaxed">
                      {t(`forwho.item${num}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ==================== AI DIFFERENTIATION SECTION ==================== */}
      <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-900/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-teal-700 text-teal-400 text-xs tracking-widest bg-teal-900/30">
              {t('ai.title')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white">
              {t('ai.headline')}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t('ai.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: t('ai.q1'), a: t('ai.a1'), icon: Bot },
              { q: t('ai.q2'), a: t('ai.a2'), icon: Mic },
              { q: t('ai.q3'), a: t('ai.a3'), icon: HelpCircle },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-teal-700 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-teal-900/50 group-hover:bg-teal-800/60 flex items-center justify-center mb-4 transition-colors">
                  <item.icon className="w-6 h-6 text-teal-400" />
                </div>
                <p className="text-teal-300 font-medium mb-3 text-sm">{item.q}</p>
                <p className="text-slate-400 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== METHODOLOGY ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-teal-200 text-teal-700 text-xs tracking-widest bg-teal-50/50">
              THE METHODOLOGY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
              Built on decades of <span className="text-teal-600">psychological science</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              ReLoHu is not intuition dressed up as insight. It draws from established frameworks — applied through a human conversation that no assessment form can replicate.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: 'Depth Psychology',
                body: 'Rooted in the tradition of Jungian and psychodynamic thought — shadow integration, archetypal identity, and the unconscious structures organizing behavior.',
              },
              {
                label: 'Attachment Theory',
                body: 'Your relational patterns are mapped against the foundational research of Bowlby, Ainsworth, and the decades of study that followed — making invisible dynamics visible.',
              },
              {
                label: 'Narrative Psychology',
                body: 'The story you tell about your own life reveals as much as its facts. ReLoHu attends to both — the events and the meaning-making that surrounds them.',
              },
              {
                label: 'Somatic Awareness',
                body: 'Where the body holds what the mind has not yet processed. Session work attends to what the nervous system carries, not only what the mind can articulate.',
              },
              {
                label: 'Phenomenological Inquiry',
                body: 'Questions emerge from what you say — not a fixed protocol. The structure follows the person, not the other way around.',
              },
              {
                label: 'Integrative Mapping',
                body: 'No single framework owns the full picture. ReLoHu synthesizes across traditions to produce a portrait that is specific to you — not a category you fall into.',
              },
            ].map(({ label, body }) => (
              <div key={label} className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="w-1 h-6 bg-teal-400 rounded-full mb-4" />
                <p className="font-medium text-slate-800 mb-2">{label}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SOCIAL PROOF - STATS ==================== */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-teal-200 text-teal-700 text-xs tracking-widest bg-teal-50/50">
              {t('proof.title')}
            </Badge>
            <p className="text-slate-500 text-lg">
              {t('proof.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              { number: t('proof.stat1.number'), label: t('proof.stat1.label'), icon: Lightbulb },
              { number: t('proof.stat2.number'), label: t('proof.stat2.label'), icon: Brain },
              { number: t('proof.stat3.number'), label: t('proof.stat3.label'), icon: Timer }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-100 transition-colors">
                  <stat.icon className="w-7 h-7 text-teal-600" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WAYS TO WORK WITH DR. GEDALIA ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-4">
              {lang === 'en' ? 'Ways to Work with Dr. Gedalia' : 'Formas de Trabajar con el Dr. Gedalia'}
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-800">
              {lang === 'en' ? 'One offering. Built to fit where you are.' : 'Una oferta. Construida para donde estás.'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 — Founding Cohort */}
            <div className="bg-teal-600 rounded-2xl p-7 text-white flex flex-col">
              <div className="text-[9px] font-mono tracking-[0.3em] uppercase text-teal-200 mb-3">Now Open · First Public Clients</div>
              <h3 className="text-lg font-medium mb-3">
                {lang === 'en' ? 'First Public Group' : 'Primer Grupo Público'}
              </h3>
              <p className="text-teal-100 text-sm leading-relaxed flex-1">
                {lang === 'en'
                  ? 'After two years of development, ReLoHu is opening to its first public clients. Ten spots, with a 30-day follow-up call that won\'t be part of the offer once this group closes.'
                  : 'Después de dos años de desarrollo, ReLoHu abre a sus primeros clientes públicos. Diez cupos, con una llamada de seguimiento a los 30 días.'}
              </p>
              <div className="mt-6 pt-5 border-t border-teal-500 flex items-center justify-between">
                <span className="text-white font-medium">$997 · 10 spots</span>
                <a href="/founding-cohort" className="text-teal-200 text-sm hover:text-white transition-colors underline underline-offset-2">
                  {lang === 'en' ? 'Learn more →' : 'Más info →'}
                </a>
              </div>
            </div>

            {/* Card 2 — Terrain Map */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 flex flex-col">
              <div className="text-[9px] font-mono tracking-[0.3em] uppercase text-slate-400 mb-3">
                {lang === 'en' ? 'After Cohort Closes' : 'Después del Cohorte'}
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-3">
                {lang === 'en' ? 'Terrain Map Session' : 'Sesión Terrain Map'}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                {lang === 'en'
                  ? 'The intake conversation, verbal readback, and your complete Terrain Map delivered as a file. The full picture — without the follow-up call.'
                  : 'La conversación de intake, lectura verbal y tu Terrain Map completo como archivo. La imagen completa — sin la llamada de seguimiento.'}
              </p>
              <div className="mt-6 pt-5 border-t border-slate-200">
                <span className="text-slate-400 text-sm">
                  {lang === 'en' ? 'Available after the first public group closes.' : 'Disponible después de que cierre el primer grupo público.'}
                </span>
              </div>
            </div>

            {/* Card 3 — Gift */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 flex flex-col">
              <div className="text-[9px] font-mono tracking-[0.3em] uppercase text-slate-400 mb-3">
                {lang === 'en' ? 'For Someone You Know' : 'Para Alguien que Conoces'}
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-3">
                {lang === 'en' ? 'Gift a Session' : 'Regala una Sesión'}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                {lang === 'en'
                  ? 'Give someone the experience of being genuinely mapped. A Terrain Map makes a meaningful gift for someone you know is ready to be seen.'
                  : 'Dale a alguien la experiencia de ser genuinamente mapeado. Un Terrain Map es un regalo significativo para alguien listo para ser visto.'}
              </p>
              <div className="mt-6 pt-5 border-t border-slate-200">
                <a href="/gift" className="text-teal-600 text-sm hover:text-teal-700 transition-colors underline underline-offset-2">
                  {lang === 'en' ? 'Learn more →' : 'Más info →'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-slate-200 text-slate-500 text-xs tracking-widest bg-white">
              {t('testimonials.title')}
            </Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: t('testimonials.quote1'), author: t('testimonials.author1'), role: t('testimonials.role1') },
              { quote: t('testimonials.quote2'), author: t('testimonials.author2'), role: t('testimonials.role2') },
              { quote: t('testimonials.quote3'), author: t('testimonials.author3'), role: t('testimonials.role3') }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6 italic text-sm">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-400 italic">— {testimonial.author}</p>
                    <span className="text-[10px] font-mono tracking-wide text-slate-400 uppercase">Verified Client</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mt-8">
            {lang === 'en'
              ? <>Had a session? <a href="https://g.page/r/relohu/review" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">Leave a Google Review →</a></>
              : <>¿Tuviste una sesión? <a href="https://g.page/r/relohu/review" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">Deja una Reseña en Google →</a></>
            }
          </p>
        </div>
      </section>

      {/* ==================== FOUNDER QUOTE ==================== */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic mb-8">
            "I believe every person is carrying something entirely their own — a particular texture, a particular way of being in the world. And I believe that if you go deep enough into any one of those worlds, you stop feeling alone. The most specific truths turn out to be the most shared ones."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-teal-300" />
            <p className="text-sm text-slate-500 font-medium tracking-wide">Dr. Gedalia, Founder of ReLoHu</p>
            <div className="w-8 h-px bg-teal-300" />
          </div>
        </div>
      </section>

      {/* ==================== CREATOR SECTION ==================== */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/david-photo.png"
                alt="Dr. Gedalia - Creator of ReLoHu"
                className="w-64 md:w-72 object-cover object-top rounded-2xl"
                style={{ aspectRatio: '4/5' }}
              />
            </div>

            {/* Text */}
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-1 border-teal-200 text-teal-700 text-xs tracking-widest bg-teal-50/50">
                {t('creator.title')}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-medium mb-2 text-slate-800">
                {t('creator.headline')}
              </h2>
              <p className="text-teal-600 text-lg mb-6 font-medium">
                {t('creator.subtitle')}
              </p>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>{t('creator.text1')}</p>
                <p>{t('creator.text2')}</p>
                <p>{t('creator.text3')}</p>
              </div>

              <Separator className="my-6 bg-slate-100" />

              <blockquote className="text-lg text-slate-600 italic">
                {t('creator.quote')}
              </blockquote>

              <p className="text-3xl font-light text-teal-600 mt-8 tracking-wide">
                "I see you."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section id="cta-section" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-teal-50 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-slate-800">
              {t('cta.headline')}
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              {t('cta.text')}
            </p>
          </div>

          {/* Booking Card Preview */}
          <Card className="max-w-md mx-auto bg-white border-slate-200 shadow-xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-4 text-white text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <p className="font-medium">
                {lang === 'en' ? 'Orientation Call with Dr. Gedalia' : 'Llamada de Orientación con el Dr. Gedalia'}
              </p>
              <p className="text-teal-100 text-sm">15-20 min • Zoom</p>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/david-photo.png"
                  alt="Dr. Gedalia"
                  className="w-12 h-12 rounded-full object-cover object-top"
                />
                <div>
                  <p className="font-medium text-slate-800">Dr. Gedalia</p>
                  <p className="text-sm text-slate-500">ReLoHu Creator</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>{lang === 'en' ? '15-20 minutes' : '15-20 minutos'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  <span>{lang === 'en' ? 'No commitment required' : 'Sin compromiso'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Shield className="w-4 h-4 text-teal-600" />
                  <span>{lang === 'en' ? '100% confidential' : '100% confidencial'}</span>
                </div>
              </div>

              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full py-6"
                onClick={() => window.open(CALENDLY, '_blank')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t('cta.button')}
              </Button>
            </CardContent>
          </Card>

          <p className="text-slate-400 text-sm mt-6 text-center">
            {t('cta.note')}
          </p>

          <p className="text-slate-400 text-xs mt-3 text-center">
            {lang === 'en'
              ? <>First public clients · $997 · 10 spots · Follow-up call included · <a href="/founding-cohort" className="text-teal-500 hover:underline">View full offer →</a></>
              : <>Primeros clientes públicos · $997 · 10 cupos · Llamada de seguimiento incluida · <a href="/founding-cohort" className="text-teal-500 hover:underline">Ver oferta completa →</a></>
            }
          </p>
        </div>
      </section>

      <SiteFooter />

      {/* Booking Modal */}
    </main>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <LandingContent />
    </LanguageProvider>
  )
}
