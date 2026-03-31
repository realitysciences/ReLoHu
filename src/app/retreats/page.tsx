'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'
import { Calendar, ArrowRight, MapPin, Compass, RefreshCw, Clock, CheckCircle, Globe } from 'lucide-react'
import { useState } from 'react'

type Lang = 'en' | 'es'

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1 bg-teal-50 border-2 border-teal-300 rounded-full p-1 shadow-sm">
      <button
        onClick={() => setLang('en')}
        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
          lang === 'en' ? 'bg-teal-600 text-white shadow' : 'text-teal-600 hover:bg-teal-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('es')}
        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
          lang === 'es' ? 'bg-teal-600 text-white shadow' : 'text-teal-600 hover:bg-teal-100'
        }`}
      >
        ES
      </button>
    </div>
  )
}

export default function RetreatsPage() {
  const [lang, setLang] = useState<Lang>('en')

  const t = {
    badge: { en: 'ReLoHu · Retreats', es: 'ReLoHu · Retiros' },
    langNote: { en: 'Esta página está disponible en español', es: 'This page is available in English' },
    h1a: { en: 'The retreat opens something.', es: 'El retiro abre algo.' },
    h1b: { en: 'ReLoHu maps it.', es: 'ReLoHu lo mapea.' },
    heroBody: {
      en: 'Psychedelic retreats, wellness retreats, silent retreats. Whatever opens you up, the question that follows is always the same: how do you make it last? Most people don\'t. Not because they weren\'t transformed. Because they had no map of where they went.',
      es: 'Retiros psicodélicos, retiros de bienestar, retiros de silencio. Sea lo que sea que te abre, la pregunta que sigue siempre es la misma: ¿cómo haces que dure? La mayoría de las personas no lo logra. No porque no se hayan transformado. Porque no tenían un mapa de adonde fueron.',
    },

    prob_badge: { en: 'The problem nobody names', es: 'El problema que nadie nombra' },
    prob_h: { en: 'Most people who go to retreats find that, in the end, it changes very little. Not because the experience wasn\'t real. Because integration is harder than anyone tells you.', es: 'La mayoría de las personas que van a retiros descubre que, al final, cambia muy poco. No porque la experiencia no fuera real. Porque la integración es más difícil de lo que nadie te dice.' },
    prob_1: { en: 'You leave the retreat cleaned out. Opened. Certain that something has shifted for good. And then you go back. Back to where you live, back to who you\'re around, back to the same environment that produced the same patterns that sent you to the retreat in the first place.', es: 'Sales del retiro limpio. Abierto. Seguro de que algo cambió para siempre. Y luego regresas. Regresas a donde vives, a quienes te rodean, al mismo entorno que produjo los mismos patrones que te enviaron al retiro en primer lugar.' },
    prob_2: { en: 'The same things that caused the problems before you left are the same things that erode the benefit after you return. The world has too much coming at us constantly. The trash builds back up. Most retreat centers know this and still don\'t have a real answer for it.', es: 'Las mismas cosas que causaron los problemas antes de irte son las mismas que erosionan el beneficio después de regresar. El mundo nos trae demasiado constantemente. La basura se acumula de nuevo. La mayoría de los centros de retiro lo saben y aún no tienen una respuesta real para ello.' },
    prob_3: { en: 'Integration support at most centers is thin. When it exists at all, it\'s expensive. And it almost never goes deep enough to work with the specific interior landscape the medicine revealed.', es: 'El apoyo para la integración en la mayoría de los centros es escaso. Cuando existe, es caro. Y casi nunca va lo suficientemente profundo como para trabajar con el paisaje interior específico que la medicina reveló.' },

    missing_badge: { en: 'What\'s been missing', es: 'Lo que ha faltado' },
    missing_h: { en: 'We can map stars. We can map terrain. We can map galaxies. Why don\'t we map ourselves?', es: 'Podemos mapear estrellas. Podemos mapear terrenos. Podemos mapear galaxias. ¿Por qué no nos mapeamos a nosotros mismos?' },
    missing_1: { en: 'Every human being is a universe. That\'s not a metaphor. It\'s an acknowledgment that the interior world is genuinely complex, genuinely structured, and genuinely chartable — if someone is actually willing to do the work of charting it.', es: 'Cada ser humano es un universo. Eso no es una metáfora. Es el reconocimiento de que el mundo interior es genuinamente complejo, genuinamente estructurado y genuinamente cartografiable — si alguien está dispuesto a hacer el trabajo de cartografiarlo.' },
    missing_2: { en: 'The retreat gives you an experience. What it rarely gives you is a map of what that experience revealed. Where you are, how your terrain is configured, what the medicine was working on, what to carry forward and where to direct your intention next.', es: 'El retiro te da una experiencia. Lo que rara vez te da es un mapa de lo que esa experiencia reveló. Dónde estás, cómo está configurado tu terreno, en qué estaba trabajando la medicina, qué llevar adelante y hacia dónde dirigir tu intención.' },
    missing_3: { en: 'That is what ReLoHu does. Not therapy. Not a framework thrown over you. A map. Yours specifically, built from a real conversation, delivered as a document you keep.', es: 'Eso es lo que hace ReLoHu. No es terapia. No es un marco impuesto sobre ti. Es un mapa. El tuyo específicamente, construido desde una conversación real, entregado como un documento que conservas.' },

    phases_badge: { en: 'Where ReLoHu fits', es: 'Dónde encaja ReLoHu' },
    phases_h: { en: 'Before. Between. After. And as far after as you need.', es: 'Antes. Entre. Después. Y tan después como lo necesites.' },
    phase1_h: { en: 'Before the retreat', es: 'Antes del retiro' },
    phase1_b: { en: 'Before you go in, know where you are. A ReLoHu session maps your current interior landscape: your patterns, your intentions, your unresolved terrain. The medicine has more to work with when you arrive with a map rather than a vague hope of transformation. You give it something specific to meet.', es: 'Antes de entrar, sabe dónde estás. Una sesión de ReLoHu mapea tu paisaje interior actual: tus patrones, tus intenciones, tu terreno sin resolver. La medicina tiene más con qué trabajar cuando llegas con un mapa en lugar de una vaga esperanza de transformación. Le das algo específico con qué encontrarse.' },
    phase2_h: { en: 'Between ceremonies', es: 'Entre ceremonias' },
    phase2_b: { en: 'If you are doing multiple ceremonies, what happens between them matters more than most people realize. Without something to orient you, you can go ceremony after ceremony without a substrate for the medicine to work on. A session in between tells you where you are, what was opened, and where to direct your intention next.', es: 'Si estás haciendo múltiples ceremonias, lo que sucede entre ellas importa más de lo que la mayoría de las personas se da cuenta. Sin algo que te oriente, puedes ir de ceremonia en ceremonia sin un sustrato para que la medicina trabaje. Una sesión intermedia te dice dónde estás, qué se abrió y hacia dónde dirigir tu intención.' },
    phase3_h: { en: 'After: integration that actually holds', es: 'Después: integración que realmente se sostiene' },
    phase3_b: { en: 'Integration is where almost everyone fails. Not for lack of trying. Because they try to integrate without knowing specifically what they\'re integrating into. A post-retreat ReLoHu session maps what the experience revealed, names what changed and what didn\'t, and gives you something concrete to orient around as you return to ordinary life.', es: 'La integración es donde casi todos fallan. No por falta de esfuerzo. Porque intentan integrar sin saber específicamente en qué están integrando. Una sesión de ReLoHu posterior al retiro mapea lo que la experiencia reveló, nombra qué cambió y qué no, y te da algo concreto alrededor de lo cual orientarte al regresar a la vida ordinaria.' },
    phase4_h: { en: 'Months later, when the trash builds back up', es: 'Meses después, cuando la basura vuelve a acumularse' },
    phase4_b: { en: 'The map from your first session doesn\'t expire. But your terrain keeps changing. Returning clients can book a depth session that picks up exactly where the first map left off, tracking what has evolved and what still needs to be worked. Your map stays current because you do.', es: 'El mapa de tu primera sesión no caduca. Pero tu terreno sigue cambiando. Los clientes que regresan pueden reservar una sesión de profundidad que retoma exactamente donde quedó el primer mapa, rastreando qué ha evolucionado y qué todavía necesita trabajarse. Tu mapa se mantiene actualizado porque tú lo haces.' },

    ai_badge: { en: 'Why AI matters here', es: 'Por qué la IA importa aquí' },
    ai_h: { en: 'You can\'t have a human with you at every moment of integration. You can have your map.', es: 'No puedes tener a un humano contigo en cada momento de integración. Puedes tener tu mapa.' },
    ai_1: { en: 'Integration happens in ordinary moments. In the middle of a difficult conversation. At 2am when something surfaces. During a walk when a pattern becomes suddenly visible. A therapist can\'t be there. A retreat center can\'t be there. Your map can.', es: 'La integración sucede en momentos ordinarios. En medio de una conversación difícil. A las 2am cuando algo emerge. Durante un paseo cuando un patrón se vuelve de repente visible. Un terapeuta no puede estar ahí. Un centro de retiro no puede estar ahí. Tu mapa sí puede.' },
    ai_2: { en: 'The AI behind ReLoHu runs on Dr. Gedalia\'s proprietary methodology and holds the information from your session. When you have your map, you have something to return to that knows your specific terrain — not a generic wellness resource built for no one in particular.', es: 'La IA detrás de ReLoHu funciona con la metodología propietaria del Dr. Gedalia y conserva la información de tu sesión. Cuando tienes tu mapa, tienes algo a lo que regresar que conoce tu terreno específico, no un recurso de bienestar genérico construido para nadie en particular.' },
    ai_3: { en: 'In the end, when we have the information we need, we can integrate on our own. It\'s the information that\'s crucial. ReLoHu makes sure you have it.', es: 'Al final, cuando tenemos la información que necesitamos, podemos integrar por nuestra cuenta. Es la información lo que es crucial. ReLoHu se asegura de que la tengas.' },

    quote: { en: '"I went through ceremony after ceremony without knowing what to do next. I had no substrate for the medicine to work on. If ReLoHu had existed then, each ceremony would have had something specific to meet."', es: '"Pasé de ceremonia en ceremonia sin saber qué hacer a continuación. No tenía un sustrato para que la medicina trabajara. Si ReLoHu hubiera existido entonces, cada ceremonia habría tenido algo específico con qué encontrarse."' },

    delivers_badge: { en: 'What a session produces', es: 'Qué produce una sesión' },
    delivers: {
      en: [
        'A Terrain Map: your psychological patterns, relational architecture, and behavioral drivers — what the medicine has to work with',
        'An Archetype Report: the deeper structural forces shaping how you move through the world',
        'People You Are Similar To: real people and fictional characters whose psychology maps onto yours in specific ways',
        'Your Strengths and Weaknesses: both sides, honestly named',
        'Unique Things You Probably Never Knew About Yourself: the observations most people never get told',
      ],
      es: [
        'Un Mapa de Terreno: tus patrones psicológicos, arquitectura relacional y conductores de comportamiento — con qué trabaja la medicina',
        'Un Reporte de Arquetipo: las fuerzas estructurales más profundas que moldean cómo te mueves por el mundo',
        'Personas a las que te Pareces: personas reales y personajes ficticios cuya psicología se mapea sobre la tuya de maneras específicas',
        'Tus Fortalezas y Debilidades: ambos lados, nombrados con honestidad',
        'Cosas Únicas que Probablemente Nunca Supiste de Ti Mismo: las observaciones que la mayoría de las personas nunca recibe',
      ],
    },
    delivers_note: { en: 'Each report is delivered as a document you keep. They don\'t expire. You can share them with a therapist, an integration coach, or no one. They are yours.', es: 'Cada reporte se entrega como un documento que conservas. No caducan. Puedes compartirlos con un terapeuta, un coach de integración, o con nadie. Son tuyos.' },

    cta_badge: { en: 'Start before you go in, or after you return', es: 'Comienza antes de entrar, o después de regresar' },
    cta_h1: { en: 'The retreat gives you the experience.', es: 'El retiro te da la experiencia.' },
    cta_h2: { en: 'ReLoHu gives you the map.', es: 'ReLoHu te da el mapa.' },
    cta_body: { en: 'A 15-minute orientation call with Dr. Gedalia is free and requires nothing. If ReLoHu is right for where you are in your process, you\'ll know quickly.', es: 'Una llamada de orientación de 15 minutos con el Dr. Gedalia es gratuita y no requiere ningún compromiso. Si ReLoHu es adecuado para donde estás en tu proceso, lo sabrás rápidamente.' },
    cta_book: { en: 'Book a Free Orientation Call', es: 'Reservar una Llamada de Orientación' },
    cta_offer: { en: 'View the Offer', es: 'Ver la Oferta' },
    cta_note: { en: 'Founding cohort: $497 through April. Five reports, 90-minute intake, Terrain Map reading session.', es: 'Cohorte fundador: $497 hasta abril. Cinco reportes, 90 minutos de intake, sesión de lectura del Mapa de Terreno.' },
  }

  const s = (key: keyof typeof t) => (t[key] as Record<Lang, string>)[lang]

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase">{s('badge')}</p>
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-teal-500 shrink-0" />
              <LangToggle lang={lang} setLang={setLang} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            {s('h1a')}<br />{s('h1b')}
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            {s('heroBody')}
          </p>
        </div>
      </section>

      {/* ==================== THE REAL PROBLEM ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">{s('prob_badge')}</p>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p className="text-xl font-medium text-slate-800">{s('prob_h')}</p>
            <p>{s('prob_1')}</p>
            <p>{s('prob_2')}</p>
            <p className="text-slate-800 font-medium">{s('prob_3')}</p>
          </div>
        </div>
      </section>

      {/* ==================== THE MISSING PIECE ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">{s('missing_badge')}</p>
          <p className="text-xl font-medium text-slate-800 mb-6 leading-snug">{s('missing_h')}</p>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>{s('missing_1')}</p>
            <p>{s('missing_2')}</p>
            <p>{s('missing_3')}</p>
          </div>
        </div>
      </section>

      {/* ==================== THREE PHASES ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">{s('phases_badge')}</p>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-12 leading-snug">{s('phases_h')}</h2>

          <div className="space-y-10">
            {[
              { icon: MapPin, hKey: 'phase1_h', bKey: 'phase1_b' },
              { icon: Compass, hKey: 'phase2_h', bKey: 'phase2_b' },
              { icon: RefreshCw, hKey: 'phase3_h', bKey: 'phase3_b' },
              { icon: Clock, hKey: 'phase4_h', bKey: 'phase4_b' },
            ].map(({ icon: Icon, hKey, bKey }, i) => (
              <div key={i}>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">{s(hKey as keyof typeof t)}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{s(bKey as keyof typeof t)}</p>
                  </div>
                </div>
                {i < 3 && <div className="w-full h-px bg-slate-100 mt-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AI FILLS THE GAP ==================== */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-8">{s('ai_badge')}</p>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-snug">{s('ai_h')}</h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>{s('ai_1')}</p>
            <p>{s('ai_2')}</p>
            <p className="text-slate-300">{s('ai_3')}</p>
          </div>
        </div>
      </section>

      {/* ==================== PERSONAL NOTE ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic">
            {s('quote')}
          </p>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-8 h-px bg-teal-300" />
            <p className="text-sm text-slate-400 font-medium tracking-wide">Dr. Gedalia, Founder of ReLoHu</p>
            <div className="w-8 h-px bg-teal-300" />
          </div>
        </div>
      </section>

      {/* ==================== WHAT YOU GET ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">{s('delivers_badge')}</p>
          <div className="space-y-4">
            {(t.delivers[lang] as string[]).map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-1" />
                <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm mt-8 leading-relaxed">{s('delivers_note')}</p>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-teal-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-200 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">{s('cta_badge')}</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 leading-snug">
            {s('cta_h1')}<br />{s('cta_h2')}
          </h2>
          <p className="text-teal-100 leading-relaxed mb-10 max-w-lg mx-auto">{s('cta_body')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-teal-50 text-teal-700 font-medium rounded-full px-10 py-4 text-base transition-all"
            >
              <Calendar className="w-4 h-4" />
              {s('cta_book')}
            </a>
            <Link
              href="/founding-cohort"
              className="inline-flex items-center gap-2 border border-teal-400 hover:bg-teal-600 text-white font-medium rounded-full px-8 py-4 text-base transition-all"
            >
              {s('cta_offer')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-teal-300 text-xs mt-6">{s('cta_note')}</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
