'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero Section
    'hero.badge': 'PSYCHOLOGICAL MAPPING',
    'hero.mission': "I want to provide what I've never been able to find — to be a witness for other people. Someone to see them exactly how they want to be seen.",
    'hero.headline1': "You've tried therapy.",
    'hero.headline2': "You've done the work.",
    'hero.headline3': 'So why do you still feel',
    'hero.headline4': 'unseen?',
    'hero.tagline': "Most people have never been this clearly seen.",
    'hero.subheadline': "ReLoHu sits upstream of therapy, coaching, and consulting — gathering who you actually are before any professional work begins. One session. No ongoing commitment. You leave with something real.",
    'hero.cta': 'Book Your Orientation Call',
    'hero.secondary': 'Learn the Method',

    // Pain Section (Problem)
    'pain.title': 'THE PROBLEM',
    'pain.headline': "You're not \"difficult.\"",
    'pain.subtitle': "You haven't lacked good practitioners. You've lacked a clear map of who you are — and without it, even the most skilled professional is starting in the dark.",
    'pain.card1.title': 'You see through everything',
    'pain.card1.text': "You can predict what a therapist will say before they say it. Your observer mind stays active, watching the session from outside instead of being present in it.",
    'pain.card2.title': 'Surface-level compassion',
    'pain.card2.text': "You've experienced people offering attunement that feels well-intentioned but hollow. You can sense the gap between what they offer and what you actually need.",
    'pain.card3.title': 'You leave without anything to hold',
    'pain.card3.text': "After a good session, you might feel seen in the room. But you walk out empty-handed. No record of what surfaced. No portrait to return to. What you felt in the hour rarely survives the week.",
    'pain.card4.title': 'Too sophisticated for your own good',
    'pain.card4.text': 'You need someone operating at or above your psychological sophistication. Not to impress you—because anything less keeps your defenses fully armed.',

    // Agitation Section
    'agitation.title': 'THE REALITY',
    'agitation.headline': 'Your armor protects you.',
    'agitation.subtitle': 'But it also keeps you alone.',
    'agitation.text1': "You built it for survival. When your authentic self was rejected—when you were told the problem was inside you, not around you—you learned to hide the real you.",
    'agitation.text2': "Now you're successful on the outside. Functional. Maybe even impressive. But inside, there's a world no one has fully entered. Not because you won't let them—but because they can't find the door.",
    'agitation.quote': '"I need someone who won\'t try to fix me. I need someone who can see the whole map of who I am—and stay."',

    // Solution Section
    'solution.title': 'THE SOLUTION',
    'solution.headline': 'ReLoHu Framework',
    'solution.subtitle': 'Not therapy. Not coaching. The structured work that happens before those things — the careful, witnessed gathering of who you actually are.',
    'solution.what_is': 'What every session delivers:',
    'solution.item1': 'Your Terrain Map — a structured psychological portrait assembled from your own words, in a form legible to both you and any professional you subsequently engage.',
    'solution.possibilities_title': 'What else becomes possible:',
    'solution.item2': 'Pattern identification: recurring emotional and behavioral structures you have never named',
    'solution.item3': 'Archetypal mapping: the historical, literary, or living figure whose profile most closely matches yours',
    'solution.item4': 'Relational insight: what kind of person or partnership would genuinely meet you',
    'solution.item5': 'Central problem identification: the one unsolved question organizing your present life',
    'solution.item6': 'Observer state mapped — how open or closed you are to your own process',
    'solution.item7': 'Priority roadmap for any professional work that follows',
    'solution.possibilities_note': 'This list is not complete — and it is growing. New deliverables are being developed constantly. What becomes possible from a single session is broader than any list can capture.',
    'solution.result': 'Your reports don\'t expire. As new deliverables become available — and they are being developed constantly — what you\'ve already explored can generate entirely new layers of insight. One session. Expanding returns. And if you come back, it will be because you want to — not because you have to.',
    'solution.badge': 'Upstream of therapy. Before the work begins.',

    // Creator Section
    'creator.title': 'THE CREATOR',
    'creator.headline': 'Built from lived experience.',
    'creator.subtitle': 'Not from textbooks.',
    'creator.text1': "Dr. Gedalia holds a Doctorate in Dental Surgery from the University of Maryland School of Dentistry, an Advanced Education in General Dentistry Residency from NYU Langone Health, and a Certificate in Lifestyle and Wellness Coaching from Harvard Medical School. He didn't create ReLoHu from academic theory — he built it because he kept looking for something that didn't exist yet — a way of being truly known — and eventually built it himself.",
    'creator.text2': "After years of rigorous personal exploration — spanning multiple therapeutic modalities, neuroimaging, and work with indigenous plant medicine traditions in South America — he developed something different: a methodology built from the inside out.",
    'creator.text3': 'He understands what it means to be called "difficult" when you\'re simply honest. To have your body refuse to pretend everything was fine. To search decades for someone who could truly know you—not fix you, not advise you—know you.',
    'creator.quote': '"Every human being deserves to be known. Not fixed. Not advised. Known."',

    // Process Section
    'process.title': 'HOW IT WORKS',
    'process.headline': 'From first contact to illuminated terrain',
    'process.step1.title': 'Orientation Call',
    'process.step1.duration': '15-20 min',
    'process.step1.text': 'A conversation to understand where you are and explain the process. No commitment. No pressure.',
    'process.step2.title': 'Intake Session',
    'process.step2.duration': 'Up to 2 hours',
    'process.step2.text': 'An unscripted conversation — questions emerge from what you say, not a fixed protocol. No judgment. No advice. No homework. Just you being heard, completely. Sessions are scheduled with up to two hours of space. Some conversations find their natural end at 90 minutes. Others need the full time. Either way, nothing is cut short. The presence of a genuine witness activates a different mode of self-expression. Most people leave feeling more settled than they expected.',
    'process.step3.title': 'Terrain Map Delivery',
    'process.step3.duration': '30 min',
    'process.step3.text': 'A structured document with your complete emotional landscape: patterns, access points, resistance zones, and priority areas.',
    'process.step4.title': 'What Comes Next',
    'process.step4.text': 'The Terrain Map stands on its own as a powerful act of self-knowledge. It also solves a problem most people have never named: every time you see a new therapist or practitioner, you spend the first several sessions just explaining yourself. The Terrain Map ends that. Hand it to any professional and you skip the intake entirely — arriving already known, already understood, ready to do real work from session one.',

    // For Who Section
    'forwho.title': 'IS THIS FOR YOU?',
    'forwho.headline': 'ReLoHu is for you if:',
    'forwho.item1': "Support has never quite had a complete picture of you",
    'forwho.item2': 'You have an internal observer that sees and protects everything',
    'forwho.item3': "You're considered \"psychologically sophisticated\"",
    'forwho.item4': 'You sense there is more depth in you than anyone has fully reached',
    'forwho.item5': 'You want to be truly known—not just understood',

    // Social Proof Section
    'proof.title': 'TRUSTED BY THE SOPHISTICATED',
    'proof.subtitle': 'People who needed to be truly known before anything else could fully land',
    'proof.stat1.number': '190+',
    'proof.stat1.label': 'Principles Developed',
    'proof.stat2.number': '25+',
    'proof.stat2.label': 'Documented Explorations',
    'proof.stat3.number': '10+',
    'proof.stat3.label': 'Years of Development',

    // Testimonials
    'testimonials.title': 'WHAT CLIENTS SAY',
    'testimonials.quote1': 'For the first time, I felt like someone actually saw the whole picture. Not just my symptoms, not just my patterns—me. The map changed everything.',
    'testimonials.author1': 'M. Chen',
    'testimonials.role1': 'Software Engineer, SF',
    'testimonials.quote2': 'I\'d spent years in therapy going in circles. After the Terrain Map, my therapist knew exactly where to start. We skipped months of guesswork.',
    'testimonials.author2': 'A. Morrison',
    'testimonials.role2': 'Creative Director, NYC',
    'testimonials.quote3': 'I was skeptical. I\'d seen many practitioners. But this was different—built by someone who actually understands what it\'s like to be "too sophisticated" for help.',
    'testimonials.author3': 'R. Patel',
    'testimonials.role3': 'Startup Founder, Austin',

    // AI Differentiation Section
    'ai.title': 'WHY NOT JUST USE AI?',
    'ai.headline': 'The output is only as good as the input.',
    'ai.subtitle': 'Most people give AI shallow input. ReLoHu creates the conditions for deep input — and that requires another human being.',
    'ai.q1': 'Can\'t I just answer questions in an app?',
    'ai.a1': 'You could type your answers into a box alone. The output might look similar. But the experience — and the data quality — would be categorically different. Human beings do not disclose in a vacuum the way they disclose in dialogue.',
    'ai.q2': 'What does a human witness actually change?',
    'ai.a2': 'The presence of someone who is genuinely listening activates a different mode of self-expression. You go deeper, stay longer with difficult material, and arrive at formulations you would not have reached alone. This is not automatable.',
    'ai.q3': 'So what is Dr. Gedalia\'s actual role?',
    'ai.a3': 'Not a prompt engineer. Not a therapist. A skilled interviewer — someone whose primary craft is listening and asking the next right question. The quality of that listening determines everything the analysis can do.',

    // CTA Section
    'cta.headline': 'Ready to be known?',
    'cta.text': 'Schedule a 15-20 minute orientation call with Dr. Gedalia. No commitment. Just a conversation to explore if ReLoHu is right for you.',
    'cta.button': 'Book Your Orientation Call',
    'cta.note': 'No commitment • Confidential conversation • 15-20 minutes',

    // Footer
    'footer.tagline': "You don't need to be fixed. You need to be known.",
    'footer.creator': 'Created by Dr. Gedalia',

    // Navigation
    'nav.method': 'The Method',
    'nav.creator': 'Creator',
    'nav.process': 'Process',
    'nav.book': 'Book Call',
  },
  es: {
    // Hero Section
    'hero.badge': 'MAPEO PSICOLÓGICO',
    'hero.mission': 'Quiero proporcionar lo que nunca he podido encontrar — ser un testigo para otras personas. Alguien que las vea exactamente como quieren ser vistas.',
    'hero.headline1': 'Has probado terapia.',
    'hero.headline2': 'Has hecho el trabajo.',
    'hero.headline3': '¿Por qué sigues sintiéndote',
    'hero.headline4': 'invisible?',
    'hero.tagline': 'La mayoría de las personas nunca han sido vistas con tanta claridad.',
    'hero.subheadline': 'ReLoHu está antes de la terapia, el coaching y la consultoría — reuniendo quién eres realmente antes de que comience cualquier trabajo profesional. Una sesión. Sin compromiso continuo. Te vas con algo real.',
    'hero.cta': 'Agenda tu Llamada de Orientación',
    'hero.secondary': 'Conoce el Método',

    // Pain Section (Problem)
    'pain.title': 'EL PROBLEMA',
    'pain.headline': 'No eres "difícil".',
    'pain.subtitle': 'No te han faltado buenos profesionales. Lo que te ha faltado es un mapa claro de quién eres — y sin él, incluso el profesional más hábil comienza en la oscuridad.',
    'pain.card1.title': 'Ves a través de todo',
    'pain.card1.text': 'Puedes predecir lo que dirá un terapeuta antes de que lo diga. Tu mente observadora permanece activa, viendo la sesión desde fuera en lugar de estar presente en ella.',
    'pain.card2.title': 'Compasión superficial',
    'pain.card2.text': 'Has experimentado personas ofreciendo sintonía que se siente bienintencionada pero vacía. Puedes percibir la distancia entre lo que ofrecen y lo que realmente necesitas.',
    'pain.card3.title': 'Sales sin nada que retener',
    'pain.card3.text': 'Después de una buena sesión, puede que te hayas sentido visto en la sala. Pero sales con las manos vacías. Sin registro de lo que surgió. Sin un retrato al que volver. Lo que sentiste en esa hora rara vez sobrevive a la semana.',
    'pain.card4.title': 'Demasiado sofisticado para tu propio bien',
    'pain.card4.text': 'Necesitas alguien operando a tu nivel de sofisticación psicológica. No para impresionarte—porque cualquier cosa menos mantiene tus defensas completamente armadas.',

    // Agitation Section
    'agitation.title': 'LA REALIDAD',
    'agitation.headline': 'Tu armadura te protege.',
    'agitation.subtitle': 'Pero también te mantiene solo.',
    'agitation.text1': 'La construiste para sobrevivir. Cuando tu yo auténtico fue rechazado—cuando te dijeron que el problema estaba dentro de ti, no alrededor—aprendiste a esconder el verdadero tú.',
    'agitation.text2': 'Ahora eres exitoso por fuera. Funcional. Tal vez incluso impresionante. Pero por dentro, hay un mundo que nadie ha entrado completamente. No porque no los dejes—sino porque no pueden encontrar la puerta.',
    'agitation.quote': '"Necesito alguien que no intente arreglarme. Necesito alguien que pueda ver el mapa completo de quien soy—y quedarse."',

    // Solution Section
    'solution.title': 'LA SOLUCIÓN',
    'solution.headline': 'ReLoHu Framework',
    'solution.subtitle': 'No es terapia. No es coaching. El trabajo estructurado que ocurre antes de esas cosas — la recopilación cuidadosa y atestiguada de quién eres realmente.',
    'solution.what_is': 'Lo que cada sesión entrega:',
    'solution.item1': 'Tu Terrain Map — un retrato psicológico estructurado ensamblado desde tus propias palabras, en una forma legible tanto para ti como para cualquier profesional que contrates después.',
    'solution.possibilities_title': 'Qué más se vuelve posible:',
    'solution.item2': 'Identificación de patrones: estructuras emocionales y conductuales recurrentes que nunca has nombrado',
    'solution.item3': 'Mapeo arquetípico: la figura histórica, literaria o viva cuyo perfil más se asemeja al tuyo',
    'solution.item4': 'Perspectiva relacional: qué tipo de persona o relación genuinamente te encontraría',
    'solution.item5': 'Identificación del problema central: la pregunta no resuelta que organiza tu vida presente',
    'solution.item6': 'Estado de observador mapeado — qué tan abierto o cerrado estás a tu propio proceso',
    'solution.item7': 'Hoja de ruta prioritaria para cualquier trabajo profesional que siga',
    'solution.possibilities_note': 'Esta lista no está completa — y está creciendo. Constantemente se están desarrollando nuevos entregables. Lo que se vuelve posible desde una sola sesión es más amplio de lo que cualquier lista puede capturar.',
    'solution.result': 'Tus reportes no caducan. A medida que nuevos entregables estén disponibles — y se están desarrollando constantemente — lo que ya exploraste puede generar capas completamente nuevas de conocimiento. Una sesión. Retornos que se expanden. Y si regresas, será porque tú quieres — no porque tengas que hacerlo.',
    'solution.badge': 'Antes de la terapia. Antes de que empiece el trabajo.',

    // Creator Section
    'creator.title': 'EL CREADOR',
    'creator.headline': 'Construido desde la experiencia vivida.',
    'creator.subtitle': 'No desde libros de texto.',
    'creator.text1': 'El Dr. Gedalia tiene un Doctorado en Cirugía Dental de la Universidad de Maryland, una Residencia Avanzada en Odontología General de NYU Langone Health, y un Certificado en Estilo de Vida y Bienestar de la Escuela de Medicina de Harvard. No creó ReLoHu desde la teoría académica — lo construyó porque los enfoques convencionales no podían alcanzar su profundidad.',
    'creator.text2': 'Después de años de exploración personal rigurosa — que abarcó múltiples modalidades terapéuticas, neuroimagen, y trabajo con tradiciones indígenas de medicina vegetal en América del Sur — desarrolló algo diferente: una metodología construida desde adentro hacia afuera.',
    'creator.text3': 'Entiende qué significa ser llamado "difícil" cuando simplemente eres honesto. Que tu cuerpo se niegue a fingir que todo estaba bien. Buscar por décadas a alguien que pudiera verdaderamente conocerte—no arreglarte, no aconsejarte—conocerte.',
    'creator.quote': '"Todo ser humano merece ser conocido. No arreglado. No aconsejado. Conocido."',

    // Process Section
    'process.title': 'CÓMO FUNCIONA',
    'process.headline': 'Del primer contacto al terreno iluminado',
    'process.step1.title': 'Llamada de Orientación',
    'process.step1.duration': '15-20 min',
    'process.step1.text': 'Una conversación para entender dónde estás y explicar el proceso. Sin compromiso. Sin presión.',
    'process.step2.title': 'Sesión de Intake',
    'process.step2.duration': 'Hasta 2 horas',
    'process.step2.text': 'Una conversación sin guión — las preguntas emergen de lo que dices, no de un protocolo fijo. Sin juicio. Sin consejos. Las sesiones se programan con hasta dos horas de espacio. Algunas conversaciones terminan naturalmente a los 90 minutos. Otras necesitan el tiempo completo. De cualquier manera, nada se interrumpe.',
    'process.step3.title': 'Entrega del Terrain Map',
    'process.step3.duration': '30 min',
    'process.step3.text': 'Un documento estructurado con tu paisaje emocional completo: patrones, puntos de acceso, zonas de resistencia y áreas prioritarias.',
    'process.step4.title': 'Lo Que Sigue',
    'process.step4.text': 'El Terrain Map tiene valor por sí solo como un poderoso acto de autoconocimiento. También resuelve un problema que la mayoría nunca ha nombrado: cada vez que ves a un nuevo terapeuta, pasas las primeras sesiones simplemente explicándote. El Terrain Map termina con eso. Entrégalo a cualquier profesional y te saltas el intake por completo — llegando ya conocido, ya comprendido, listo para hacer trabajo real desde la primera sesión.',

    // For Who Section
    'forwho.title': '¿ES PARA TI?',
    'forwho.headline': 'ReLoHu es para ti si:',
    'forwho.item1': 'El apoyo nunca ha tenido una imagen completa de ti',
    'forwho.item2': 'Tienes un observador interno que ve y protege todo',
    'forwho.item3': 'Te consideran "psicológicamente sofisticado"',
    'forwho.item4': 'Sientes que hay más profundidad en ti de la que alguien ha alcanzado plenamente',
    'forwho.item5': 'Quieres ser verdaderamente conocido—no solo comprendido',

    // Social Proof Section
    'proof.title': 'CONFIADO POR LOS SOFISTICADOS',
    'proof.subtitle': 'Personas que necesitaban ser verdaderamente conocidas antes de que cualquier otra cosa pudiera aterrizar completamente',
    'proof.stat1.number': '190+',
    'proof.stat1.label': 'Principios Desarrollados',
    'proof.stat2.number': '25+',
    'proof.stat2.label': 'Exploraciones Documentadas',
    'proof.stat3.number': '10+',
    'proof.stat3.label': 'Años de Desarrollo',

    // Testimonials
    'testimonials.title': 'LO QUE DICEN LOS CLIENTES',
    'testimonials.quote1': 'Por primera vez, sentí que alguien realmente vio el panorama completo. No solo mis síntomas, no solo mis patrones—yo. El mapa lo cambió todo.',
    'testimonials.author1': 'M. Chen',
    'testimonials.role1': 'Ingeniero de Software, SF',
    'testimonials.quote2': 'Había pasado años en terapia dando vueltas. Después del Terrain Map, mi terapeuta supo exactamente dónde empezar. Saltamos meses de adivinar.',
    'testimonials.author2': 'A. Morrison',
    'testimonials.role2': 'Director Creativo, NYC',
    'testimonials.quote3': 'Era escéptico. Había visto muchos profesionales. Pero esto era diferente—construido por alguien que realmente entiende qué se siente ser "demasiado sofisticado" para recibir ayuda.',
    'testimonials.author3': 'R. Patel',
    'testimonials.role3': 'Fundador de Startup, Austin',

    // AI Differentiation Section
    'ai.title': '¿POR QUÉ NO USAR IA?',
    'ai.headline': 'El resultado es tan bueno como la entrada.',
    'ai.subtitle': 'La mayoría de las personas le dan a la IA entradas superficiales. ReLoHu crea las condiciones para entradas profundas — y eso requiere otro ser humano.',
    'ai.q1': '¿No puedo responder preguntas en una app?',
    'ai.a1': 'Podrías escribir tus respuestas solo en una caja. El resultado podría parecer similar. Pero la experiencia — y la calidad de los datos — sería categorialmente diferente. Los seres humanos no se revelan en el vacío como lo hacen en el diálogo.',
    'ai.q2': '¿Qué cambia realmente un testigo humano?',
    'ai.a2': 'La presencia de alguien que escucha genuinamente activa un modo diferente de autoexpresión. Vas más profundo, permaneces más tiempo con material difícil, y llegas a formulaciones que no habrías alcanzado solo. Esto no es automatizable.',
    'ai.q3': '¿Cuál es el rol real del Dr. Gedalia?',
    'ai.a3': 'No es un ingeniero de prompts. No es un terapeuta. Es un entrevistador habilidoso — alguien cuyo oficio principal es escuchar y hacer la siguiente pregunta correcta. La calidad de esa escucha determina todo lo que el análisis puede hacer.',

    // CTA Section
    'cta.headline': '¿Listo para ser conocido?',
    'cta.text': 'Agenda una llamada de orientación de 15-20 minutos con el Dr. Gedalia. Sin compromiso. Solo una conversación para explorar si ReLoHu es para ti.',
    'cta.button': 'Agenda tu Llamada de Orientación',
    'cta.note': 'Sin compromiso • Conversación confidencial • 15-20 minutos',

    // Footer
    'footer.tagline': 'No necesitas ser arreglado. Necesitas ser conocido.',
    'footer.creator': 'Creado por el Dr. Gedalia',

    // Navigation
    'nav.method': 'El Método',
    'nav.creator': 'Creador',
    'nav.process': 'Proceso',
    'nav.book': 'Agendar',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[lang][key] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
