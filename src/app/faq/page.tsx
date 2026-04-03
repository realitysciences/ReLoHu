'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

const faqGroups = [
  {
    label: 'What ReLoHu Is',
    items: [
      {
        q: 'How do you pronounce ReLoHu?',
        a: 'reh·loh·hoo, three syllables, each one even. Re (like "red" without the d), Lo (like "low"), Hu (like "who"). The name is an acronym encoding the three values Dr. David found most absent in every space he sought genuine support: Respect, Love, and Humility.',
      },
      {
        q: 'Is this therapy?',
        a: 'No, and that\'s actually the point. Therapy is about healing. ReLoHu is about knowing. It sits upstream of therapy, coaching, and consulting: it\'s the work you do before those things, or alongside them. It does not diagnose, treat, or provide ongoing clinical care. What it does is give you, and any professional you work with, a clear, high-resolution map of who you are, before the real work begins.',
      },
      {
        q: 'How is this different from coaching?',
        a: 'Coaching is goal-oriented and forward-facing. ReLoHu is a mapping exercise. It doesn\'t advise, direct, or push toward outcomes. The Intake Specialist\'s role is to witness and capture, not to guide. The output is a portrait of who you are, not a plan for who you should become.',
      },
      {
        q: 'Is ReLoHu a one-time thing, or ongoing?',
        a: 'The intake session is a single, complete event, designed to produce something whole and lasting, not to require you to return. Dr. David approaches this the way a good dentist approaches their work: the goal is to fix something properly so it holds. A dentist doesn\'t want you returning every week for the same tooth. They want the work to last. The same ethos is built into ReLoHu. There is no business model here that depends on your ongoing need. Your Terrain Map and any additional deliverables don\'t expire, and they don\'t lose their value the moment you stop coming back. As new reports and artifacts are developed, what you\'ve already explored becomes the foundation for entirely new layers of insight, without requiring another full intake. If you come back, it won\'t be because you have to. It will be because you found the process genuinely fascinating, because being truly seen opened something you want to explore further, or because you\'re ready to go deeper. That\'s a different kind of return entirely.',
      },
      {
        q: 'Who created this, and why?',
        a: 'ReLoHu was created by Dr. David, a licensed dentist who spent more than a decade in serious self-inquiry after finding that conventional support never quite reached him. He built ReLoHu because he couldn\'t find it anywhere else. The name encodes the three values he found most absent in every space he sought genuine support: Respect, Love, and Humility. You can read the full story on the Origins page.',
      },
    ],
  },
  {
    label: 'The Session',
    items: [
      {
        q: 'Does Dr. David personally conduct the intake conversation?',
        a: 'Yes, every time. The intake conversation is conducted by Dr. David personally — not an AI, not a questionnaire, not an assistant. You are talking to a human being for the full duration of the session. The AI does not interact with you at any point during the intake. It enters only afterward, when it analyzes what emerged from the conversation to produce your reports. Dr. David designed both the questions he asks and the frameworks the AI uses to interpret what you shared.',
      },
      {
        q: 'What actually happens in a session?',
        a: 'A session is a one-to-one conversation, 90 minutes, with Dr. David. It is unscripted: the questions that matter most emerge from what you say, not from a fixed protocol. There\'s no advice, no therapeutic intervention, no goal-setting. Just careful, adaptive listening designed to surface who you are at depth. The conversation is carefully processed to produce your Terrain Map and any additional deliverables.',
      },
      {
        q: 'What do I need to prepare?',
        a: 'Nothing. You don\'t need to prepare a summary of yourself, answer questions in advance, or know what you want to get out of it. The session works precisely because it doesn\'t ask you to come in pre-packaged. Just show up.',
      },
      {
        q: 'Do I have to share everything?',
        a: 'No. You share what feels right. The session has no agenda beyond listening to you. There are no right answers, no wrong topics, and no pressure to go anywhere you don\'t want to go. The map is built from what you bring. If something feels too private or too raw, you don\'t have to go there. Many people find that what they were hesitant to share ends up coming naturally, but that\'s always your call.',
      },
      {
        q: 'How long does it take to receive my Terrain Map after the session?',
        a: 'Terrain Map delivery is typically within 30 minutes of the session ending, in a dedicated delivery conversation.',
      },
      {
        q: 'Is the session confidential?',
        a: 'Yes, completely. Your session content is never shared with, sold to, or disclosed to any third party. Your Terrain Map and all deliverables belong to you. Full details are covered in the consent agreement you sign before the session begins.',
      },
    ],
  },
  {
    label: 'The Terrain Map & Deliverables',
    items: [
      {
        q: 'What is the Terrain Map, exactly?',
        a: 'The Terrain Map is a structured psychological portrait assembled from your own words. It\'s not a diagnosis and not a personality type. It\'s a mirror: something that shows you a true picture of yourself that you couldn\'t have assembled alone, in a form that\'s organized, named, and legible. It\'s designed to be useful both to you directly and to any professional you choose to work with.',
      },
      {
        q: 'What other deliverables are available beyond the Terrain Map?',
        a: 'A range of additional reports can be generated from your session, including: pattern identification (recurring structures beneath your choices), archetypal mapping (the historical or literary figure you most resemble), relational insight (what kind of person would genuinely meet you), and central problem identification (the one unsolved question organizing your present life). This list is not exhaustive. New deliverables are being developed constantly.',
      },
      {
        q: 'Can I use my Terrain Map with my therapist or coach?',
        a: 'Yes, and this is one of the most powerful uses. A practitioner who receives your Terrain Map before your first session begins with full context. No weeks of discovery, no months of figuring out who you are. The alliance is built from illuminated ground, and real work can begin immediately.',
      },
      {
        q: 'Will more deliverables become available over time?',
        a: 'Yes. New artifacts and reports are being developed constantly. Your reports don\'t expire. As new deliverables become available, what you\'ve already explored can generate entirely new layers of insight. One session. Expanding returns.',
      },
    ],
  },
  {
    label: 'Why Not Just Use AI?',
    items: [
      {
        q: 'Can\'t I just type my answers into an AI and get the same result?',
        a: 'The output might look superficially similar. But the data quality would be categorically different. Human beings do not disclose in a vacuum the way they disclose in dialogue. The presence of someone who is genuinely listening activates a different mode of self-expression. You go deeper, stay longer with difficult material, and arrive at formulations you would not have reached alone. AI output is only as good as its input. ReLoHu creates the conditions for deep input.',
      },
      {
        q: 'What does a human witness actually change?',
        a: 'Everything before the analysis. The Intake Specialist\'s role is not to interpret. It\'s to listen and ask the next right question. That craft determines the richness and depth of what gets captured. The analysis can only work with what\'s there. Shallow input produces shallow output, regardless of how sophisticated the analysis is.',
      },
      {
        q: 'Is Dr. David acting as a therapist or AI prompt engineer during the session?',
        a: 'Neither. The role is closer to a master diagnostician or skilled interviewer, someone whose primary craft is listening and asking the next right question. No therapeutic interpretation. No scripted prompts. Just adaptive, disciplined attention.',
      },
    ],
  },
  {
    label: 'For Professionals',
    items: [
      {
        q: 'I\'m a therapist or psychologist. Is ReLoHu competing with my practice?',
        a: 'No. ReLoHu is not therapy, does not diagnose, and does not provide clinical care. What it does is create a high-resolution map of who a person actually is, assembled before they ever walk into your office. Think of it as the intake you never had time to conduct properly. A client who arrives with a Terrain Map is a fundamentally different starting point: you\'re not spending weeks in discovery, you\'re not building basic rapport in the dark. You already know the terrain. Real work can begin on day one.',
      },
      {
        q: 'I\'m a coach. How does this fit with what I do?',
        a: 'Coaching is goal-oriented and forward-facing. ReLoHu is a mapping exercise. It captures who someone is before any goal-setting begins. Many coaches find that clients who have been genuinely witnessed and mapped show up with unusual clarity: less resistance, cleaner self-awareness, and a more accurate sense of what they actually want. The Terrain Map is designed to be shared and used. Handing it to a coach is one of its best uses.',
      },
      {
        q: 'Could I refer my clients to ReLoHu before we begin working together?',
        a: 'Yes, and that\'s exactly the kind of use this was designed to support. When a client arrives having already been witnessed and mapped, the professional relationship starts at a level that normally takes months to reach. The Terrain Map is legible to any trained professional: it\'s not a raw transcript, it\'s a structured portrait. If you\'re curious about how it would look in practice, an orientation call with Dr. David is the best place to start.',
      },
      {
        q: 'Does ReLoHu make claims about replacing therapeutic care?',
        a: 'Never. The explicit positioning is upstream: ReLoHu happens before professional support, or alongside it, as a tool that makes that support more effective. It has no therapeutic agenda. It does not treat, advise, prescribe, or diagnose. Its only goal is accurate witnessing: producing a portrait of who someone actually is, in a form that is useful to them and to any professional who works with them.',
      },
    ],
  },
  {
    label: 'Pricing',
    items: [
      {
        q: 'How much does a session cost?',
        a: 'Two sessions are available. The Terrain Session is $250: a 60-minute intake, a core pattern summary, and a verbal readback before the call ends. The Full Session is $497: a 90-minute intake, five detailed reports, and a 30-minute Terrain Map reading session. Both are one-time, no ongoing commitment.',
      },
      {
        q: 'Are there options for returning clients?',
        a: 'Yes. Three paths exist for people who have completed a Terrain Map and want to go further. A Lens Report ($197): your existing transcript run through a different framework, no new session required. A Depth Session ($347): a new intake that picks up where your Terrain Map left off, producing a more targeted report. A Fresh Session ($397): a new intake exploring a different area of life. Because Dr. David already knows your terrain, returning sessions move faster and go further than the first one.',
      },
      {
        q: 'Is there a payment plan?',
        a: 'Not at this time. If cost is a genuine barrier, reach out directly via the contact page. Dr. David reads every message personally.',
      },
    ],
  },
  {
    label: 'Why Dr. David',
    items: [
      {
        q: 'Why is a dentist doing this? Shouldn\'t this come from a psychologist or therapist?',
        a: 'That question contains an assumption worth examining. The best people for a given kind of work are not always the ones who followed the most obvious path to it. The most transformative leaders in any field often came from somewhere adjacent, or somewhere entirely different, precisely because they weren\'t shaped by the field\'s existing assumptions. A psychologist or therapist is trained to treat, diagnose, and intervene. Dr. David is not trying to do any of those things. He is trying to witness and map. That is a fundamentally different craft, and it turns out his background equips him for it unusually well.',
      },
      {
        q: 'What does dentistry have to do with psychological mapping?',
        a: 'More than it might seem. A dentist spends thousands of hours learning to see what others miss, to notice structural patterns beneath the surface, to earn the trust of someone who is anxious and vulnerable, and to communicate findings with precision and care. Dr. David spent over a decade doing exactly that in clinical settings, across four states, with thousands of patients. The craft of careful observation, the discipline of listening before concluding, the respect for the person in front of you, none of that is unique to psychology. He brought all of it with him.',
      },
      {
        q: 'What actually makes him qualified for this work?',
        a: 'Three things, taken together. First, genuine credentials: formal training in medicine and wellness at Harvard, a doctorate from the world\'s first dental school, undergraduate study in Computer Information Systems, and years of clinical practice across four states. Second, a decade of serious personal inquiry that went well beyond the clinical: EMDR, TMS, neuroimaging, psychoanalytic frameworks, narrative psychology, plant medicine ceremonies with indigenous communities in Venezuela, Peru, Brazil, and Colombia, time in Buddhist temples in Thailand and Japan, and a formative period living on a Native American reservation in North Dakota. He did not study these traditions. He lived inside them. Third, and most importantly: he built this methodology because he needed it and could not find it anywhere else. He has been where the client is. He knows what it feels like to sit across from someone whose job it is to understand you and feel that they don\'t.',
      },
      {
        q: 'Isn\'t it a liability that he isn\'t a licensed therapist or psychologist?',
        a: 'ReLoHu is not therapy, and it does not require a therapy license. What it requires is the ability to witness clearly, listen deeply, and map what is actually there. Those are skills Dr. David has developed over a lifetime, through formal training, sustained self-inquiry, and clinical practice. The absence of a psychology license is not a gap. It is part of why the work looks different from therapy. He is not trained to see pathology or to treat it. He is trained to see the person, whole, and reflect them accurately. That is a narrower and more specific task than therapy, and it is the one he has built his entire methodology around.',
      },
      {
        q: 'You mentioned he came to this because he needed it. Doesn\'t that make him biased?',
        a: 'It makes him specific, which is different. He is not neutral about whether being seen matters. He knows it does, because the absence of it shaped him in ways he spent years trying to understand. But that is not bias in the distorting sense. It is conviction that comes from direct experience. The best people for any job that requires genuine empathy are not those who have never felt the need. They are those who have felt it most clearly and done the most rigorous work to understand it. Dr. David built ReLoHu from that place. His personal wound is not incidental to the methodology. It is the methodology\'s origin.',
      },
    ],
  },
  {
    label: 'Is This Right for Me?',
    items: [
      {
        q: 'Who is ReLoHu designed for?',
        a: 'ReLoHu is for any person who wants to know themselves more clearly. You do not need to have problems, be in crisis, or have tried therapy. Some people come because something isn\'t working. Others come out of pure curiosity. They want to understand their patterns, their depth, what makes them who they are. Both are equally welcome. The session is the same. The map is the same. The experience of being genuinely seen is the same.',
      },
      {
        q: 'Do I need to have problems or be struggling to benefit from ReLoHu?',
        a: 'Not at all. ReLoHu is not a service for broken people. It\'s a service for any human being who wants to be known. Many people who come are doing well by every external measure. They\'re curious, self-directed, and simply want a clearer picture of who they are. Self-knowledge is not a remedy. It\'s a gift. You don\'t need a reason beyond wanting it.',
      },
      {
        q: 'Do I need to have tried therapy first?',
        a: 'No. ReLoHu is not a response to therapy failing. It\'s upstream of it. It can be your first step into serious self-knowledge, or it can be the map you bring into a therapeutic relationship you haven\'t found yet. It works either way.',
      },
      {
        q: 'I\'m already in therapy. Is this still useful?',
        a: 'Often, yes. Many people have been in therapy for years and still feel their practitioner doesn\'t fully see them. A Terrain Map can be shared with your current therapist as a way of accelerating depth. You know yourself well. This gives that self-knowledge a form someone else can actually work with.',
      },
      {
        q: 'What if I\'m not sure I\'m ready?',
        a: 'That\'s exactly what the orientation call is for. It\'s 15–20 minutes with Dr. David, no commitment, no pressure. Just a conversation to understand where you are and whether ReLoHu makes sense for you right now.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-5 py-2 border-teal-200 text-teal-700 text-sm font-medium tracking-wide bg-teal-50/50">
            FAQ
          </Badge>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            Frequently asked questions
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Everything you need to know before your first conversation with Dr. David.
          </p>
        </div>
      </section>

      {/* ==================== FAQ GROUPS ==================== */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqGroups.map((group, gi) => (
            <div key={gi}>
              <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
                {group.label}
              </p>
              <Accordion type="single" collapsible className="space-y-2">
                {group.items.map((item, ii) => (
                  <AccordionItem
                    key={ii}
                    value={`${gi}-${ii}`}
                    className="bg-white border border-slate-100 rounded-xl px-6 shadow-sm data-[state=open]:border-teal-200 data-[state=open]:shadow-md transition-all"
                  >
                    <AccordionTrigger className="text-left text-slate-800 font-medium text-base py-5 hover:text-teal-600 hover:no-underline [&>svg]:text-teal-500">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-4">
            Still have questions?
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            The orientation call is the best place to get them answered. 15–20 minutes with Dr. David, no commitment, just a conversation.
          </p>
          <a
            href="/#cta-section"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-10 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-100"
          >
            Book Your Orientation Call
          </a>
          <p className="text-slate-400 text-sm mt-4">No commitment · Confidential · 15–20 minutes</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
