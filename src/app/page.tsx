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
              onClick={() => window.location.href = '/sessions'}
            >
              {lang === 'en' ? 'View Sessions' : 'Ver Sesiones'}
            </Button>
          </div>

          <p className="text-slate-400 text-sm mt-8">
            {lang === 'en'
              ? 'You don\'t need to be struggling. Curiosity about yourself is enough.'
              : 'No necesitas estar en crisis. La curiosidad sobre ti mismo es suficiente.'}
          </p>
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
            Not waiting for their turn. Not forming a response. Not reaching for advice. Just listening.
          </p>
        </div>
      </section>

      {/* ==================== PROBLEM SECTION (PAS - Problem) ==================== */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto mb-10">
              {lang === 'en'
                ? 'Some people arrive here after years of therapy that left them still feeling unknown. Others arrive simply curious, wanting a clearer picture of who they actually are. Either is a valid reason.'
                : 'Algunas personas llegan aqui despues de anos de terapia sintiendose aun desconocidas. Otras llegan simplemente curiosas, queriendo una imagen mas clara de quienes realmente son. Cualquiera es una razon valida.'}
            </p>
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

      {/* ==================== YOU PARAGRAPH ==================== */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">
            {lang === 'en' ? 'Does this sound like you?' : '¿Esto te suena familiar?'}
          </p>
          <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
            {lang === 'en' ? (
              <>
                <p>
                  You've read the books. You've done the therapy. You're fluent in your patterns, you can name your wounds, and you've given more than one skilled practitioner a detailed map of your interior life.
                </p>
                <p>
                  And yet. You're still not fully known. Not by the people closest to you, and not by the professionals who've tried. There's a version of you that shows up in conversation and a version that exists underneath it, and no one has quite reached the second one.
                </p>
                <p className="text-slate-800 font-medium">
                  That's not a failure of your effort. It's a failure of the tools available. ReLoHu was built for the gap.
                </p>
              </>
            ) : (
              <>
                <p>
                  Has leído los libros. Has hecho la terapia. Conoces tus patrones, puedes nombrar tus heridas, y le has dado a más de un profesional habilidoso un mapa detallado de tu vida interior.
                </p>
                <p>
                  Y sin embargo. Todavía no eres completamente conocido. Ni por las personas más cercanas a ti, ni por los profesionales que lo han intentado. Hay una versión de ti que aparece en la conversación y una versión que existe debajo de ella, y nadie ha llegado del todo a la segunda.
                </p>
                <p className="text-slate-800 font-medium">
                  Eso no es un fracaso de tu esfuerzo. Es un fracaso de las herramientas disponibles. ReLoHu fue construido para esa brecha.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ==================== MINI MAP ENTRY POINT ==================== */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-5">
            {lang === 'en' ? 'Try it before you commit' : 'Pruébalo antes de comprometerte'}
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
            {lang === 'en'
              ? 'Get a free map fragment. Five questions, five minutes.'
              : 'Obtén un fragmento de mapa gratis. Cinco preguntas, cinco minutos.'}
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-lg mx-auto">
            {lang === 'en'
              ? 'Answer five questions in Dr. David\'s voice. Submit your email. Receive a short written portrait of what you shared, generated by the same AI methodology behind every full Terrain Map. No commitment, no sales follow-up.'
              : 'Responde cinco preguntas. Recibe un retrato escrito breve de lo que compartiste, generado por la misma metodología de IA detrás de cada Terrain Map completo. Sin compromiso, sin seguimiento de ventas.'}
          </p>
          <a
            href="/mini-map"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-10 py-4 rounded-full font-medium text-lg transition-colors"
          >
            {lang === 'en' ? 'Start your map fragment' : 'Comenzar tu fragmento de mapa'}
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-slate-600 text-xs mt-5">
            {lang === 'en'
              ? 'Free. Delivered to your email. Takes about five minutes.'
              : 'Gratis. Enviado a tu correo. Toma unos cinco minutos.'}
          </p>
        </div>
      </section>

      {/* ==================== INNER WORLD IMAGE ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/inner-world.png"
              alt="Everyone carries a world inside them"
              className="w-full object-cover"
            />
          </div>
          <p className="text-center text-slate-400 text-sm mt-6 max-w-lg mx-auto leading-relaxed italic">
            Everyone is carrying a world inside them. Most people never get to see it clearly.
          </p>
        </div>
      </section>

      {/* ==================== WHAT MAPPING MEANS ==================== */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">
            {lang === 'en' ? 'What mapping actually means' : 'Qué significa el mapeo'}
          </p>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            {lang === 'en' ? (
              <>
                <p className="text-xl font-medium text-slate-800">
                  A diagnosis tells you something is wrong and names it. A personality test puts you in a category. A map does something different: it shows you how your terrain is actually configured.
                </p>
                <p>
                  Not "you are an introvert." Not "you have anxiety." More like: here is the pattern in how you connect with people. Here is what you do when you feel unseen. Here is where your confidence actually comes from, which turns out to be different from what you thought. Here is what you share, psychologically, with specific people from history and fiction who moved through the world the way you do.
                </p>
                <p>
                  A map doesn't ask you to fix anything. It asks you to see clearly. For most people, that's the part that was missing.
                </p>
                <p className="text-slate-800 font-medium">
                  What ReLoHu produces is a document, written in plain language, that describes the specific architecture of who you are. You keep it. You can share it. You can return to it. It doesn't expire.
                </p>
              </>
            ) : (
              <>
                <p className="text-xl font-medium text-slate-800">
                  Un diagnóstico te dice que algo está mal y lo nombra. Un test de personalidad te pone en una categoría. Un mapa hace algo diferente: te muestra cómo está configurado tu terreno interior.
                </p>
                <p>
                  No "eres introvertido." No "tienes ansiedad." Más bien: aquí está el patrón en cómo te conectas con las personas. Aquí está lo que haces cuando te sientes ignorado. Aquí está de dónde viene realmente tu confianza, que resulta ser diferente de lo que pensabas.
                </p>
                <p>
                  Un mapa no te pide que arregles nada. Te pide que veas con claridad. Para la mayoría de las personas, esa es la parte que faltaba.
                </p>
                <p className="text-slate-800 font-medium">
                  Lo que ReLoHu produce es un documento, escrito en lenguaje sencillo, que describe la arquitectura específica de quién eres. Te lo quedas. Puedes compartirlo. Puedes volver a él. No caduca.
                </p>
              </>
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/sample-report" className="inline-flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-700 border border-teal-200 hover:border-teal-300 bg-teal-50/50 hover:bg-teal-50 rounded-full px-4 py-2 transition-all">
              <FileText className="w-3.5 h-3.5" />
              {lang === 'en' ? 'View Sample Report #1' : 'Ver Reporte de Muestra #1'}
            </a>
            <a href="/sample-report-2" className="inline-flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-700 border border-teal-200 hover:border-teal-300 bg-teal-50/50 hover:bg-teal-50 rounded-full px-4 py-2 transition-all">
              <FileText className="w-3.5 h-3.5" />
              {lang === 'en' ? 'View Sample Report #2' : 'Ver Reporte de Muestra #2'}
            </a>
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
              <div className="flex items-start gap-4 group bg-teal-50 rounded-xl p-4 mb-4 border border-teal-100">
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

              <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'en'
                    ? <>This is the beginning of your map library. Over time — through Integration Maps, Relationship Maps, Transition Maps, and more — what you build here becomes something no one has ever had: a comprehensive, living portrait of how you actually work. <a href="/maps" className="text-teal-600 hover:text-teal-700 font-medium">See all maps →</a></>
                    : <>Este es el comienzo de tu biblioteca de mapas. Con el tiempo — a través de Mapas de Integración, Mapas de Relación, Mapas de Transición y más — lo que construyes aquí se convierte en algo que nadie ha tenido: un retrato completo y vivo de cómo realmente funciones. <a href="/maps" className="text-teal-600 hover:text-teal-700 font-medium">Ver todos los mapas →</a></>
                  }
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
          <div className="mt-8 p-5 bg-white rounded-xl border border-slate-200 max-w-2xl mx-auto">
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'en'
                ? <>And if you want to go further: your inner world is larger than any single session can reach. ReLoHu is designed to be returned to. Not because something is unresolved — because there is always more terrain. <a href="/practice" className="text-teal-600 hover:text-teal-700 font-medium">Learn about the practice →</a></>
                : <>Y si quieres ir más lejos: tu mundo interior es más grande de lo que una sola sesión puede alcanzar. ReLoHu está diseñado para ser revisitado. No porque algo esté sin resolver, sino porque siempre hay más terreno. <a href="/practice" className="text-teal-600 hover:text-teal-700 font-medium">Aprende sobre la práctica →</a></>
              }
            </p>
          </div>
        </div>
      </section>

      {/* ==================== OFFER SUMMARY BOX ==================== */}
      <section className="py-16 px-6 bg-teal-700">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-300 uppercase mb-6 text-center">
            {lang === 'en' ? 'The Full Session' : 'La Sesión Completa'}
          </p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* What you get */}
            <div className="px-8 pt-8 pb-6 border-b border-slate-100">
              <p className="text-[10px] font-mono tracking-widest text-teal-600 uppercase mb-5">
                {lang === 'en' ? 'What you get' : 'Lo que recibes'}
              </p>
              <div className="space-y-3">
                {(lang === 'en' ? [
                  { icon: Phone,     text: '15-min orientation call, free, no commitment' },
                  { icon: Clock,     text: '90-minute intake conversation with Dr. David' },
                  { icon: FileText,  text: 'Five detailed reports delivered as documents you keep' },
                  { icon: BookOpen,  text: 'Terrain Map reading session with Dr. David' },
                ] : [
                  { icon: Phone,     text: 'Llamada de orientación de 15 min, gratis, sin compromiso' },
                  { icon: Clock,     text: 'Conversación de intake de 90 minutos con Dr. David' },
                  { icon: FileText,  text: 'Cinco reportes detallados entregados como documentos' },
                  { icon: BookOpen,  text: 'Sesión de lectura del Terrain Map con Dr. David' },
                ]).map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-slate-700 text-sm">{text}</span>
                    <CheckCircle className="w-4 h-4 text-teal-400 ml-auto flex-shrink-0" />
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2">
                <Brain className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === 'en'
                    ? 'The Terrain Map is written by AI running on Dr. David\'s proprietary prompts and clinical frameworks, not a generic tool.'
                    : 'El Terrain Map es escrito por IA que ejecuta los prompts propietarios y marcos clínicos del Dr. David, no una herramienta genérica.'}
                </p>
              </div>
            </div>
            {/* Price + CTA */}
            <div className="px-8 py-6 bg-slate-50 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-slate-800">$497</p>
                </div>
              </div>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-5 rounded-full"
                onClick={() => window.open(CALENDLY, '_blank')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {lang === 'en' ? 'Book your orientation call' : 'Agenda tu llamada de orientación'}
              </Button>
            </div>
            {/* Terrain Session note */}
            <div className="px-8 py-4 border-t border-slate-100 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                {lang === 'en'
                  ? 'Want to start smaller? A shorter, less expensive session is also available.'
                  : '¿Quieres empezar con algo más accesible? También hay una sesión más corta y menos costosa disponible.'}
              </p>
              <a
                href="/sessions"
                className="text-sm text-teal-600 hover:text-teal-700 font-medium whitespace-nowrap ml-4"
              >
                {lang === 'en' ? 'See all sessions →' : 'Ver sesiones →'}
              </a>
            </div>
          </div>
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

          <div className="mt-0 border border-teal-700/50 bg-teal-900/30 rounded-2xl px-7 py-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-800/60 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Brain className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <p className="text-teal-200 font-medium text-sm mb-2">
                {lang === 'en' ? 'Proprietary methodology: present on both ends.' : 'Metodología propia: presente en ambos extremos.'}
              </p>
              <div className="text-slate-400 text-sm leading-relaxed space-y-2">
                {lang === 'en' ? (
                  <>
                    <p><span className="text-slate-300 font-medium">On the input side:</span> The questions asked during the intake session are Dr. David's, designed to surface what matters, reach what is usually avoided, and create the conditions for genuine disclosure. What gets said is shaped by how he asks.</p>
                    <p><span className="text-slate-300 font-medium">On the output side:</span> The frameworks used to interpret that data, the psychological lenses, the pattern recognition, the way depth is distinguished from surface, are also his. Built, tested, and refined over years.</p>
                    <p>The AI applies both. The difference between generic AI output and what ReLoHu produces is the difference between what went into building the system. Slop comes from shallow input. This comes from a decade of high-quality clinical methodology encoded into every layer of the process.</p>
                  </>
                ) : (
                  <>
                    <p><span className="text-slate-300 font-medium">En el lado de entrada:</span> Las preguntas durante la sesión son del Dr. David, diseñadas para revelar lo que importa y crear condiciones para la divulgación genuina.</p>
                    <p><span className="text-slate-300 font-medium">En el lado de salida:</span> Los marcos para interpretar esos datos, las lentes psicológicas, el reconocimiento de patrones, también son suyos. Construidos y refinados durante años.</p>
                    <p>La IA aplica ambos. Una IA genérica produciría algo categorialmente diferente. El sistema es el trabajo.</p>
                  </>
                )}
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
                    <p className="text-xs text-slate-400 italic">{testimonial.author}</p>
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

      {/* ==================== SAMPLE REPORTS / PRE-EDUCATION ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-4">
              {lang === 'en' ? 'See the work' : 'Ve el trabajo'}
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-3">
              {lang === 'en' ? 'Read a real Terrain Map before you decide.' : 'Lee un Terrain Map real antes de decidir.'}
            </h2>
            <p className="text-slate-500 leading-relaxed max-w-xl mx-auto">
              {lang === 'en'
                ? 'Two complete maps, created for two real people, shown in full. Not excerpts. The actual document you would receive.'
                : 'Dos mapas completos, creados para dos personas reales, mostrados en su totalidad. No son extractos. El documento real que recibirías.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                href: '/sample-report',
                num: '01',
                title: lang === 'en' ? 'Trauma survival, identity excavation, radical self-construction' : 'Supervivencia al trauma, excavación de identidad, autoconstrucción radical',
                tags: lang === 'en' ? ['Central wound', 'Relational terrain', 'Core vectors'] : ['Herida central', 'Terreno relacional', 'Vectores centrales'],
              },
              {
                href: '/sample-report-2',
                num: '02',
                title: lang === 'en' ? 'Sovereignty, spiritual awakening, the bridge archetype' : 'Soberanía, despertar espiritual, el arquetipo del puente',
                tags: lang === 'en' ? ['Formative architecture', 'Core seeing', 'Insights for the path ahead'] : ['Arquitectura formativa', 'Visión central', 'Perspectivas para el camino'],
              },
            ].map(({ href, num, title, tags }) => (
              <a
                key={num}
                href={href}
                className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-md transition-all duration-300"
              >
                <p className="text-[9px] font-mono tracking-[0.3em] text-teal-500 uppercase mb-3">
                  {lang === 'en' ? `Sample Report ${num}` : `Reporte de Muestra ${num}`}
                </p>
                <p className="text-slate-700 font-medium leading-snug mb-4 group-hover:text-teal-700 transition-colors">
                  {title}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono tracking-wide text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-teal-600 text-sm font-medium group-hover:text-teal-700 transition-colors">
                  {lang === 'en' ? 'Read this report →' : 'Leer este reporte →'}
                </span>
              </a>
            ))}
          </div>

          <p className="text-center text-slate-400 text-xs mt-8 leading-relaxed">
            {lang === 'en'
              ? 'Names and identifying details are anonymized. The writing, structure, and depth are unchanged.'
              : 'Los nombres y detalles identificativos están anonimizados. La escritura, estructura y profundidad no han sido alteradas.'}
          </p>
        </div>
      </section>

      {/* ==================== FOUNDER QUOTE ==================== */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic mb-8">
            "I believe every person is carrying something entirely their own, a particular texture, a particular way of being in the world. And I believe that if you go deep enough into any one of those worlds, you stop feeling alone. The most specific truths turn out to be the most shared ones."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-teal-300" />
            <p className="text-sm text-slate-500 font-medium tracking-wide">Dr. David, Founder of ReLoHu</p>
            <div className="w-8 h-px bg-teal-300" />
          </div>
        </div>
      </section>

      {/* ==================== THE QUESTIONS ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6 text-center">
            {lang === 'en' ? 'What the conversation is like' : 'Como es la conversacion'}
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-3 text-center leading-snug">
            {lang === 'en' ? 'Questions most people have never been asked.' : 'Preguntas que la mayoria nunca ha recibido.'}
          </h2>
          <p className="text-slate-400 text-sm text-center mb-10 leading-relaxed">
            {lang === 'en'
              ? 'Not unusual for the sake of it. Aimed at what is actually there.'
              : 'No inusuales por serlo. Dirigidas a lo que realmente esta ahi.'}
          </p>
          <div className="space-y-4">
            {lang === 'en' ? [
              'When you say you\'re full of love for someone -- what do you actually mean by that?',
              'How do you feel about crying?',
              'Where does that come from? Not the event -- the part of you that responded that way.',
              'How does someone end up there without seeing it coming?',
            ] : [
              'Cuando dices que estas llena de amor por alguien, que significa eso exactamente para ti?',
              'Como te sientes respecto a llorar?',
              'De donde viene eso? No el evento, sino la parte de ti que respondio de esa manera.',
              'Como llega alguien a ese punto sin verlo venir?',
            ].map((q, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-xl px-6 py-4 shadow-sm">
                <p className="text-slate-700 leading-relaxed">"{q}"</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-xs mt-6 text-center">
            {lang === 'en'
              ? 'There is no script. The questions follow you.'
              : 'No hay guion. Las preguntas te siguen a ti.'}
          </p>
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
                {lang === 'en' ? 'Orientation Call with Dr. David' : 'Llamada de Orientación con Dr. David'}
              </p>
              <p className="text-teal-100 text-sm">15-20 min • Zoom</p>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/david-photo.png"
                  alt="Dr. David"
                  className="w-12 h-12 rounded-full object-cover object-top"
                />
                <div>
                  <p className="font-medium text-slate-800">Dr. David</p>
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
              ? <>Full Session $497 · Terrain Session $250 · <a href="/sessions" className="text-teal-500 hover:underline">View all sessions →</a></>
              : <>Sesión Completa $497 · Terrain Session $250 · <a href="/sessions" className="text-teal-500 hover:underline">Ver todas las sesiones →</a></>
            }
          </p>
          <p className="text-slate-400 text-xs mt-1.5 text-center">
            {lang === 'en'
              ? <>Already booked? <a href="/intake" className="text-teal-500 hover:underline">Fill out your pre-session intake form →</a></>
              : <>Ya reservaste? <a href="/intake" className="text-teal-500 hover:underline">Completa tu formulario de pre-sesion →</a></>
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
