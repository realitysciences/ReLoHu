'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'
import { Calendar, ArrowRight, MapPin, Compass, RefreshCw, Clock, CheckCircle, Globe, Leaf, Waves } from 'lucide-react'
import { useState } from 'react'

type Lang = 'en' | 'es'
type Mode = 'plant' | 'wellness'

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1 bg-teal-50 border-2 border-teal-300 rounded-full p-1 shadow-sm">
      <button
        onClick={() => setLang('en')}
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${lang === 'en' ? 'bg-teal-600 text-white shadow' : 'text-teal-600 hover:bg-teal-100'}`}
      >English</button>
      <button
        onClick={() => setLang('es')}
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${lang === 'es' ? 'bg-teal-600 text-white shadow' : 'text-teal-600 hover:bg-teal-100'}`}
      >Español</button>
    </div>
  )
}

function ModeToggle({ mode, setMode, lang }: { mode: Mode; setMode: (m: Mode) => void; lang: Lang }) {
  return (
    <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full p-1">
      <button
        onClick={() => setMode('plant')}
        className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${mode === 'plant' ? 'bg-emerald-700 text-white shadow' : 'text-slate-500 hover:text-slate-800'}`}
      >
        <Leaf className="w-3.5 h-3.5" />
        {lang === 'en' ? 'Plant Medicine' : 'Medicina de Plantas'}
      </button>
      <button
        onClick={() => setMode('wellness')}
        className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${mode === 'wellness' ? 'bg-teal-600 text-white shadow' : 'text-slate-500 hover:text-slate-800'}`}
      >
        <Waves className="w-3.5 h-3.5" />
        {lang === 'en' ? 'Wellness Retreats' : 'Retiros de Bienestar'}
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────
// PLANT MEDICINE CONTENT
// ─────────────────────────────────────────────
const plant = {
  h1a:        { en: 'The ceremony opens something.', es: 'La ceremonia abre algo.' },
  h1b:        { en: 'ReLoHu maps it.', es: 'ReLoHu lo mapea.' },
  hero:       { en: 'Ayahuasca, psilocybin, San Pedro, ibogaine: whatever medicine you work with, the question that follows is always the same: how do you make it last? Most people don\'t. Not because they weren\'t transformed. Because they had no map of where they went.', es: 'Ayahuasca, psilocibina, San Pedro, ibogaína: cualquier medicina con la que trabajes, la pregunta que sigue siempre es la misma: ¿cómo haces que dure? La mayoría de las personas no lo logra. No porque no se hayan transformado. Porque no tenían un mapa de adonde fueron.' },
  substrate_badge: { en: 'What you bring in is what the medicine has to work with', es: 'Lo que llevas contigo es lo que la medicina tiene para trabajar' },
  substrate_h: { en: 'Going in cold and going in mapped are not the same experience.', es: 'Entrar en frío y entrar con un mapa no son la misma experiencia.' },
  substrate_1: { en: 'This is something most people who work with plant medicine learn the hard way: the state you enter with is not neutral. Your patterns, your unresolved terrain, your unexamined assumptions about yourself — all of it goes into the ceremony with you. The medicine amplifies what is there. If what is there is unnamed, the experience can still be powerful, but it works without a map. It pulls at whatever it finds.', es: 'Esto es algo que la mayoría de las personas que trabaja con medicina de plantas aprende de la manera difícil: el estado con el que entras no es neutral. Tus patrones, tu terreno no resuelto, tus suposiciones no examinadas sobre ti mismo, todo eso va a la ceremonia contigo. La medicina amplifica lo que hay. Si lo que hay no tiene nombre, la experiencia aún puede ser poderosa, pero trabaja sin un mapa. Jala de lo que encuentra.' },
  substrate_2: { en: 'A ReLoHu session before a ceremony names what you are carrying in. Not to manage it or soften it, but to make it visible. You arrive knowing your terrain. The patterns that will surface, the unresolved material the medicine is likely to find, the intentions that are actually yours rather than ones you think you should have. The medicine has something specific to meet. That changes the quality of everything that follows.', es: 'Una sesión de ReLoHu antes de una ceremonia nombra lo que llevas contigo. No para manejarlo o suavizarlo, sino para hacerlo visible. Llegas conociendo tu terreno. Los patrones que van a surgir, el material no resuelto que la medicina probablemente encontrará, las intenciones que son realmente tuyas. La medicina tiene algo específico con qué encontrarse. Eso cambia la calidad de todo lo que sigue.' },
  substrate_3: { en: 'Most people go into their first ceremony, and many of their subsequent ones, completely cold. They have not named what they are bringing. They hope the medicine will find what matters. Sometimes it does. More often, it finds the loudest thing, not necessarily the most important one. Arriving with a map gives the medicine a different kind of substrate to work from.', es: 'La mayoría de las personas entra a su primera ceremonia, y a muchas de las siguientes, completamente en frío. No han nombrado lo que llevan. Esperan que la medicina encuentre lo que importa. A veces lo hace. Más a menudo, encuentra lo más ruidoso, no necesariamente lo más importante. Llegar con un mapa le da a la medicina un sustrato diferente desde el cual trabajar.' },
  prob_badge: { en: 'The problem nobody names', es: 'El problema que nadie nombra' },
  prob_h:     { en: 'Most people who work with plant medicine find that, in the end, it changes very little. Not because the experience wasn\'t real. Because integration is harder than anyone tells you.', es: 'La mayoría de las personas que trabaja con medicina de plantas descubre que, al final, cambia muy poco. No porque la experiencia no fuera real. Porque la integración es más difícil de lo que nadie te dice.' },
  prob_1:     { en: 'You leave the retreat cleaned out. Opened. Certain that something has shifted for good. And then you go back. Back to where you live, back to who you\'re around, back to the same environment that produced the same patterns that sent you to the ceremony in the first place.', es: 'Sales del retiro limpio. Abierto. Seguro de que algo cambió para siempre. Y luego regresas. Al mismo lugar, a las mismas personas, al mismo entorno que produjo los mismos patrones que te llevaron a la ceremonia.' },
  prob_2:     { en: 'The same things that caused the problems before you left are the same things that erode the benefit after you return. The trash builds back up. Most retreat centers know this and still don\'t have a real answer for it.', es: 'Las mismas cosas que causaron los problemas antes de irte son las mismas que erosionan el beneficio después de regresar. La basura se acumula de nuevo. La mayoría de los centros de retiro lo saben y aún no tienen una respuesta real.' },
  prob_3:     { en: 'Integration support at most centers is thin. When it exists, it\'s expensive. And it almost never goes deep enough to work with the specific interior landscape the medicine revealed.', es: 'El apoyo para la integración en la mayoría de los centros es escaso. Cuando existe, es caro. Y casi nunca va lo suficientemente profundo como para trabajar con el paisaje interior específico que la medicina reveló.' },
  phases_badge: { en: 'Where ReLoHu fits', es: 'Dónde encaja ReLoHu' },
  phases_h:   { en: 'Before. Between ceremonies. After. And as far after as you need.', es: 'Antes. Entre ceremonias. Después. Y tan después como lo necesites.' },
  p1h: { en: 'Before: give the medicine something to meet', es: 'Antes: dale a la medicina algo con qué encontrarse' },
  p1b: { en: 'A ReLoHu session before the retreat maps your current interior landscape: your patterns, your unresolved terrain, your intentions. The medicine has more to work with when you arrive knowing where you are. Instead of hoping the ceremony finds something, you show it where to go.', es: 'Una sesión de ReLoHu antes del retiro mapea tu paisaje interior actual. La medicina tiene más con qué trabajar cuando llegas sabiendo dónde estás. En lugar de esperar que la ceremonia encuentre algo, le muestras hacia dónde ir.' },
  p2h: { en: 'Between ceremonies: substrate for the next one', es: 'Entre ceremonias: sustrato para la siguiente' },
  p2b: { en: 'Without something to orient you between ceremonies, you can go session after session without a substrate for the medicine to work on. A ReLoHu session in between tells you where you are now, what was opened, and where to direct your intention for what comes next.', es: 'Sin algo que te oriente entre ceremonias, puedes ir de sesión en sesión sin un sustrato para que la medicina trabaje. Una sesión de ReLoHu en el medio te dice dónde estás ahora, qué se abrió y hacia dónde dirigir tu intención.' },
  p3h: { en: 'After: integration that actually holds', es: 'Después: integración que realmente se sostiene' },
  p3b: { en: 'Integration is where almost everyone fails. Not for lack of trying. Because they try to integrate without knowing specifically what they\'re integrating into. A post-ceremony ReLoHu session maps what the experience revealed and gives you something concrete to orient around as you return to ordinary life.', es: 'La integración es donde casi todos fallan. No por falta de esfuerzo. Porque intentan integrar sin saber específicamente en qué están integrando. Una sesión de ReLoHu después mapea lo que la experiencia reveló y te da algo concreto alrededor de lo cual orientarte.' },
  p4h: { en: 'Months later, when the trash builds back up', es: 'Meses después, cuando la basura vuelve a acumularse' },
  p4b: { en: 'Your map doesn\'t expire. But your terrain keeps changing. Returning clients book depth sessions that pick up exactly where the first map left off, tracking what has evolved and what still needs to be worked.', es: 'Tu mapa no caduca. Pero tu terreno sigue cambiando. Los clientes que regresan reservan sesiones de profundidad que retoman exactamente donde quedó el primer mapa.' },
  quote: { en: '"I went through ceremony after ceremony without knowing what to do next. I had no substrate for the medicine to work on. If ReLoHu had existed then, each ceremony would have had something specific to meet."', es: '"Pasé de ceremonia en ceremonia sin saber qué hacer a continuación. No tenía un sustrato para que la medicina trabajara. Si ReLoHu hubiera existido entonces, cada ceremonia habría tenido algo específico con qué encontrarse."' },
}

// ─────────────────────────────────────────────
// WELLNESS RETREAT CONTENT
// ─────────────────────────────────────────────
const wellness = {
  h1a:        { en: 'You come home different.', es: 'Regresas diferente.' },
  h1b:        { en: 'Then life happens.', es: 'Entonces llega la vida.' },
  hero:       { en: 'Yoga retreats, silent retreats, breathwork intensives, Vipassana, somatic immersions. The retreat state is real. The problem is re-entry. Most people lose what they found within weeks. Not because it wasn\'t genuine. Because they never mapped what it touched.', es: 'Retiros de yoga, retiros de silencio, intensivos de respiración, Vipassana, inmersiones somáticas. El estado del retiro es real. El problema es el regreso. La mayoría de las personas pierde lo que encontró en semanas. No porque no fuera genuino. Porque nunca mapearon lo que tocó.' },
  prob_badge: { en: 'Why the benefit fades', es: 'Por qué el beneficio se desvanece' },
  prob_h:     { en: 'The retreat works. The return home undoes it. That\'s not a failure of the retreat. It\'s a failure of what comes after.', es: 'El retiro funciona. El regreso a casa lo deshace. Eso no es un fracaso del retiro. Es un fracaso de lo que viene después.' },
  prob_1:     { en: 'You spend a week in structured stillness, guided movement, intentional community. Something genuinely shifts. Your nervous system settles. You feel like yourself in a way you haven\'t in months. And then you get on a plane, go back to your inbox, your relationships, your environment. And it evaporates.', es: 'Pasas una semana en quietud estructurada, movimiento guiado, comunidad intencional. Algo genuinamente cambia. Tu sistema nervioso se asienta. Te sientes como tú mismo de una manera que no habías sentido en meses. Y luego te subes a un avión, regresas a tu bandeja de entrada, tus relaciones, tu entorno. Y se evapora.' },
  prob_2:     { en: 'The environment you returned to is the same one that made the retreat necessary. The retreat cleared some space. It didn\'t change the terrain underneath. Without a map of that terrain, you\'re working without any way to hold what you found.', es: 'El entorno al que regresaste es el mismo que hizo necesario el retiro. El retiro despejó algo de espacio. No cambió el terreno subyacente. Sin un mapa de ese terreno, estás trabajando sin ninguna manera de sostener lo que encontraste.' },
  prob_3:     { en: 'Most retreat centers offer some integration support. Almost none of it is personalized to your specific interior landscape: the particular patterns and drivers the retreat was working against in you, specifically.', es: 'La mayoría de los centros de retiro ofrecen algún apoyo para la integración. Casi ninguno está personalizado para tu paisaje interior específico: los patrones y conductores particulares contra los que el retiro estaba trabajando en ti, específicamente.' },
  phases_badge: { en: 'Where ReLoHu fits', es: 'Dónde encaja ReLoHu' },
  phases_h:   { en: 'Before. During. After. Anytime the map needs updating.', es: 'Antes. Durante. Después. Cada vez que el mapa necesite actualizarse.' },
  p1h: { en: 'Before: arrive knowing what you\'re bringing in', es: 'Antes: llega sabiendo lo que traes contigo' },
  p1b: { en: 'A ReLoHu session before the retreat maps where you are right now: the patterns, tensions, and terrain you\'re carrying in. When you know what you\'re bringing, the retreat can work on something specific rather than a general hope of feeling better. You get more from a week when you arrive with a map.', es: 'Una sesión de ReLoHu antes del retiro mapea dónde estás ahora mismo: los patrones, tensiones y terreno que llevas contigo. Cuando sabes lo que traes, el retiro puede trabajar en algo específico en lugar de una esperanza general de sentirte mejor. Obtienes más de una semana cuando llegas con un mapa.' },
  p2h: { en: 'During: for multi-day or multi-stage retreats', es: 'Durante: para retiros de varios días o etapas' },
  p2b: { en: 'Longer retreats often have natural inflection points: between phases, after a particularly deep session, before the final day. A brief ReLoHu check-in at those moments helps you name what\'s been opened and direct what comes next with intention rather than just continuing to move through the schedule.', es: 'Los retiros más largos a menudo tienen puntos de inflexión naturales: entre fases, después de una sesión particularmente profunda, antes del último día. Un check-in breve de ReLoHu en esos momentos te ayuda a nombrar lo que se ha abierto y dirigir lo que viene con intención.' },
  p3h: { en: 'After: understand what the retreat was actually touching', es: 'Después: comprende lo que el retiro estaba tocando en realidad' },
  p3b: { en: 'A post-retreat ReLoHu session maps what shifted: which patterns softened, what the stillness or the movement or the practice was working on in you specifically, and what to carry forward. Not vague intentions to "keep up the practice." A map of why this particular practice matters for this particular person.', es: 'Una sesión de ReLoHu posterior al retiro mapea lo que cambió: qué patrones se suavizaron, en qué estaba trabajando la quietud o el movimiento o la práctica específicamente en ti, y qué llevar adelante. No intenciones vagas de "mantener la práctica." Un mapa de por qué esta práctica particular importa para esta persona particular.' },
  p4h: { en: 'Ongoing: as your terrain evolves', es: 'Continuo: a medida que tu terreno evoluciona' },
  p4b: { en: 'The work of a retreat doesn\'t end when you get home. It enters a different phase. Returning clients book depth sessions that track what has evolved since the first map: what the retreat set in motion, what has actually changed, and where to direct attention now.', es: 'El trabajo de un retiro no termina cuando llegas a casa. Entra en una fase diferente. Los clientes que regresan reservan sesiones de profundidad que rastrean lo que ha evolucionado desde el primer mapa.' },
  quote: { en: '"The retreat gives you the experience. What almost no retreat gives you is a map of what that experience revealed about your specific interior terrain. That\'s the gap ReLoHu fills."', es: '"El retiro te da la experiencia. Lo que casi ningún retiro te da es un mapa de lo que esa experiencia reveló sobre tu terreno interior específico. Esa es la brecha que llena ReLoHu."' },
}

// ─────────────────────────────────────────────
// SHARED CONTENT
// ─────────────────────────────────────────────
const shared = {
  missing_badge: { en: 'What\'s been missing', es: 'Lo que ha faltado' },
  missing_h:     { en: 'We can map stars. We can map terrain. We can map galaxies. Why don\'t we map ourselves?', es: 'Podemos mapear estrellas. Podemos mapear terrenos. Podemos mapear galaxias. ¿Por qué no nos mapeamos a nosotros mismos?' },
  missing_1:     { en: 'Every human being is a universe. The interior world is genuinely complex, genuinely structured, and genuinely chartable, if someone is actually willing to do the work of charting it.', es: 'Cada ser humano es un universo. El mundo interior es genuinamente complejo, genuinamente estructurado y genuinamente cartografiable, si alguien está dispuesto a hacer el trabajo de cartografiarlo.' },
  missing_2:     { en: 'The retreat gives you an experience. What it rarely gives you is a map of what that experience revealed. Where you are, how your terrain is configured, what was being worked on, and where to direct your intention next.', es: 'El retiro te da una experiencia. Lo que rara vez te da es un mapa de lo que esa experiencia reveló. Dónde estás, cómo está configurado tu terreno, qué se estaba trabajando y hacia dónde dirigir tu intención.' },
  missing_3:     { en: 'That is what ReLoHu does. Not therapy. Not a framework thrown over you. A map. Yours specifically, built from a real conversation, delivered as a document you keep.', es: 'Eso es lo que hace ReLoHu. No es terapia. No es un marco impuesto sobre ti. Es un mapa. El tuyo específicamente, construido desde una conversación real, entregado como un documento que conservas.' },
  ai_badge: { en: 'Why AI matters here', es: 'Por qué la IA importa aquí' },
  ai_h:     { en: 'You can\'t have a human with you at every moment of integration. You can have your map.', es: 'No puedes tener a un humano contigo en cada momento de integración. Puedes tener tu mapa.' },
  ai_1:     { en: 'Integration happens in ordinary moments: in the middle of a difficult conversation, at 2am when something surfaces, during a walk when a pattern becomes suddenly visible. A therapist can\'t be there. A retreat center can\'t be there. Your map can.', es: 'La integración sucede en momentos ordinarios: en medio de una conversación difícil, a las 2am cuando algo emerge, durante un paseo cuando un patrón se vuelve de repente visible. Un terapeuta no puede estar ahí. Tu mapa sí puede.' },
  ai_2:     { en: 'The AI behind ReLoHu holds the information from your session and runs on Dr. David\'s proprietary methodology. When you have your map, you have something to return to that knows your specific terrain, not a generic wellness resource built for no one in particular.', es: 'La IA detrás de ReLoHu conserva la información de tu sesión. Cuando tienes tu mapa, tienes algo a lo que regresar que conoce tu terreno específico, no un recurso de bienestar genérico.' },
  ai_3:     { en: 'Dr. David spent a lifetime wishing he had access to something that doesn\'t quite exist yet: not just a therapist or a coach, but a real witness. Someone who could be with him all day, hearing his thoughts as they happened, seeing his experiences as they unfolded, not just receiving a summary of them an hour later in an office. Hearing something after the fact is not the same as being present for it. That gap is what ReLoHu is working toward. Right now it produces reports. What it is becoming is something you can return to in the exact moment you need it, during the experience itself, not only afterward. ReLoHu is a futuristic, human-centered service that could only exist now, with the help of AI. It is always improving and adapting to what people actually need.', es: 'Dr. David pasó una vida deseando tener acceso a algo que aún no existe del todo: no solo un terapeuta o un coach, sino un testigo real. Alguien que pudiera estar con él todo el día, escuchando sus pensamientos mientras ocurrían, viendo sus experiencias mientras se desarrollaban, no solo recibiendo un resumen de ellas una hora después en una oficina. Escuchar algo después del hecho no es lo mismo que estar presente para ello. Esa brecha es hacia lo que ReLoHu está trabajando. Ahora mismo produce reportes. Lo que se está convirtiendo es algo a lo que puedes regresar en el momento exacto en que lo necesitas, durante la experiencia misma, no solo después. ReLoHu es un servicio futurista y centrado en el ser humano que solo podría existir ahora, con la ayuda de la IA. Siempre está mejorando y adaptándose a lo que las personas realmente necesitan.' },
  delivers_badge: { en: 'What a session produces', es: 'Qué produce una sesión' },
  delivers: {
    en: [
      'A Terrain Map: your psychological patterns, relational architecture, and behavioral drivers',
      'An Archetype Report: the deeper structural forces shaping how you move through the world',
      'People You Are Similar To: real people and fictional characters whose psychology maps onto yours',
      'Your Strengths and Weaknesses: both sides, honestly named',
      'Unique Things You Probably Never Knew About Yourself',
    ],
    es: [
      'Un Mapa de Terreno: tus patrones psicológicos, arquitectura relacional y conductores de comportamiento',
      'Un Reporte de Arquetipo: las fuerzas estructurales más profundas que moldean cómo te mueves por el mundo',
      'Personas a las que te Pareces: personas reales y personajes ficticios cuya psicología se mapea sobre la tuya',
      'Tus Fortalezas y Debilidades: ambos lados, nombrados con honestidad',
      'Cosas Únicas que Probablemente Nunca Supiste de Ti Mismo',
    ],
  },
  delivers_note: { en: 'Each report is delivered as a document you keep. They don\'t expire. They are yours.', es: 'Cada reporte se entrega como un documento que conservas. No caducan. Son tuyos.' },
  cta_badge: { en: 'Start before you go in, or after you return', es: 'Comienza antes de entrar, o después de regresar' },
  cta_h1:   { en: 'The retreat gives you the experience.', es: 'El retiro te da la experiencia.' },
  cta_h2:   { en: 'ReLoHu gives you the map.', es: 'ReLoHu te da el mapa.' },
  cta_body: { en: 'A 15-minute orientation call with Dr. David is free and requires nothing. If ReLoHu is right for where you are in your process, you\'ll know quickly.', es: 'Una llamada de orientación de 15 minutos con Dr. David es gratuita y sin compromiso. Si ReLoHu es adecuado para donde estás, lo sabrás rápidamente.' },
  cta_book: { en: 'Book a Free Orientation Call', es: 'Reservar una Llamada de Orientación' },
  cta_offer: { en: 'View Sessions', es: 'Ver Sesiones' },
  cta_note: { en: 'Full Session $497 · Terrain Session $250 · Five reports, 90-minute intake.', es: 'Sesión Completa $497 · Terrain Session $250 · Cinco reportes, 90 minutos de intake.' },
}

function s(obj: Record<Lang, string>, lang: Lang) { return obj[lang] }

export default function RetreatsPage() {
  const [lang, setLang] = useState<Lang>('en')
  const [mode, setMode] = useState<Mode>('plant')

  const c = mode === 'plant' ? plant : wellness

  const phases = [
    { icon: MapPin,    hKey: 'p1h' as const, bKey: 'p1b' as const },
    { icon: Compass,   hKey: 'p2h' as const, bKey: 'p2b' as const },
    { icon: RefreshCw, hKey: 'p3h' as const, bKey: 'p3b' as const },
    { icon: Clock,     hKey: 'p4h' as const, bKey: 'p4b' as const },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          {/* Top bar: badge + lang toggle */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase">
              {lang === 'en' ? 'ReLoHu · Retreats' : 'ReLoHu · Retiros'}
            </p>
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-teal-500 shrink-0" />
              <LangToggle lang={lang} setLang={setLang} />
            </div>
          </div>

          {/* Mode toggle — prominent */}
          <div className="mb-10">
            <p className="text-xs text-slate-400 mb-3 font-medium">
              {lang === 'en' ? 'Select your retreat type:' : 'Selecciona tu tipo de retiro:'}
            </p>
            <ModeToggle mode={mode} setMode={setMode} lang={lang} />
          </div>

          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            {s(c.h1a, lang)}<br />{s(c.h1b, lang)}
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            {s(c.hero, lang)}
          </p>
        </div>
      </section>

      {/* ==================== THE PROBLEM ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">{s(c.prob_badge, lang)}</p>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p className="text-xl font-medium text-slate-800">{s(c.prob_h, lang)}</p>
            <p>{s(c.prob_1, lang)}</p>
            <p>{s(c.prob_2, lang)}</p>
            <p className="text-slate-800 font-medium">{s(c.prob_3, lang)}</p>
          </div>
        </div>
      </section>

      {/* ==================== SUBSTRATE (plant only) ==================== */}
      {mode === 'plant' && (
        <section className="py-20 px-6 bg-emerald-950">
          <div className="max-w-2xl mx-auto">
            <p className="text-[10px] font-mono tracking-[0.35em] text-emerald-400 uppercase mb-8">{s(plant.substrate_badge, lang)}</p>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-8 leading-snug">{s(plant.substrate_h, lang)}</h2>
            <div className="space-y-5 text-emerald-100/80 leading-relaxed">
              <p>{s(plant.substrate_1, lang)}</p>
              <p>{s(plant.substrate_2, lang)}</p>
              <p className="text-white font-medium">{s(plant.substrate_3, lang)}</p>
            </div>
          </div>
        </section>
      )}

      {/* ==================== MISSING PIECE (shared) ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-8">{s(shared.missing_badge, lang)}</p>
          <p className="text-xl font-medium text-slate-800 mb-6 leading-snug">{s(shared.missing_h, lang)}</p>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>{s(shared.missing_1, lang)}</p>
            <p>{s(shared.missing_2, lang)}</p>
            <p>{s(shared.missing_3, lang)}</p>
          </div>
        </div>
      </section>

      {/* ==================== PHASES ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">{s(c.phases_badge, lang)}</p>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-12 leading-snug">{s(c.phases_h, lang)}</h2>
          <div className="space-y-10">
            {phases.map(({ icon: Icon, hKey, bKey }, i) => (
              <div key={i}>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">{s(c[hKey], lang)}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{s(c[bKey], lang)}</p>
                  </div>
                </div>
                {i < 3 && <div className="w-full h-px bg-slate-100 mt-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AI (shared) ==================== */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-8">{s(shared.ai_badge, lang)}</p>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-snug">{s(shared.ai_h, lang)}</h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>{s(shared.ai_1, lang)}</p>
            <p className="text-slate-300">{s(shared.ai_2, lang)}</p>
            <p>{s(shared.ai_3, lang)}</p>
          </div>
        </div>
      </section>

      {/* ==================== QUOTE ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic">
            {s(c.quote, lang)}
          </p>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-8 h-px bg-teal-300" />
            <p className="text-sm text-slate-400 font-medium tracking-wide">Dr. David, Founder of ReLoHu</p>
            <div className="w-8 h-px bg-teal-300" />
          </div>
        </div>
      </section>

      {/* ==================== DELIVERABLES (shared) ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-10">{s(shared.delivers_badge, lang)}</p>
          <div className="space-y-4">
            {(shared.delivers[lang] as string[]).map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-1" />
                <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm mt-8 leading-relaxed">{s(shared.delivers_note, lang)}</p>
        </div>
      </section>

      {/* ==================== INTEGRATION MAP ==================== */}
      {mode === 'plant' && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto">
            <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase mb-6">
              {lang === 'en' ? 'A dedicated map type' : 'Un tipo de mapa dedicado'}
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6 leading-snug">
              {lang === 'en' ? 'The Integration Map' : 'El Mapa de Integración'}
            </h2>
            <div className="space-y-5 text-slate-500 leading-relaxed text-sm">
              {lang === 'en' ? (
                <>
                  <p>Post-ceremony integration now has a dedicated map type. The Integration Map is a structured ReLoHu session focused specifically on what the experience revealed — where it landed in your existing terrain, what it moved, what it opened, what remains unresolved.</p>
                  <p>Unlike a general Terrain Map, the Integration Map is designed to be done in sequence: Terrain Map first, so there is a landscape to map the experience onto. Integration Map after, so the experience has somewhere specific to go.</p>
                  <p className="text-slate-700 font-medium">This is what has been missing from integration support everywhere else. Not a conversation. Not a circle. A document. Something you can return to as the experience continues to unfold over weeks and months.</p>
                </>
              ) : (
                <>
                  <p>La integración post-ceremonia ahora tiene un tipo de mapa dedicado. El Mapa de Integración es una sesión de ReLoHu enfocada específicamente en lo que la experiencia reveló — dónde aterrizó en tu terreno existente, qué movió, qué abrió, qué queda sin resolver.</p>
                  <p>A diferencia de un Mapa de Terreno general, el Mapa de Integración está diseñado para hacerse en secuencia: primero el Mapa de Terreno, para que haya un paisaje sobre el cual mapear la experiencia. Mapa de Integración después, para que la experiencia tenga un lugar específico al que ir.</p>
                  <p className="text-slate-700 font-medium">Esto es lo que ha faltado en el apoyo de integración en todos los demás lugares. No una conversación. No un círculo. Un documento. Algo a lo que puedes volver mientras la experiencia continúa desplegándose durante semanas y meses.</p>
                </>
              )}
            </div>
            <div className="mt-8">
              <Link
                href="/maps"
                className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-medium"
              >
                {lang === 'en' ? 'Learn more about the Integration Map →' : 'Aprende más sobre el Mapa de Integración →'}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-teal-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-200 text-[10px] font-mono tracking-[0.35em] uppercase mb-6">{s(shared.cta_badge, lang)}</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 leading-snug">
            {s(shared.cta_h1, lang)}<br />{s(shared.cta_h2, lang)}
          </h2>
          <p className="text-teal-100 leading-relaxed mb-10 max-w-lg mx-auto">{s(shared.cta_body, lang)}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-teal-50 text-teal-700 font-medium rounded-full px-10 py-4 text-base transition-all"
            >
              <Calendar className="w-4 h-4" />
              {s(shared.cta_book, lang)}
            </a>
            <Link
              href="/sessions"
              className="inline-flex items-center gap-2 border border-teal-400 hover:bg-teal-600 text-white font-medium rounded-full px-8 py-4 text-base transition-all"
            >
              {s(shared.cta_offer, lang)}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-teal-300 text-xs mt-6">{s(shared.cta_note, lang)}</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
