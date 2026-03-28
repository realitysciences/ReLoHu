'use client'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Calendar, EyeOff } from 'lucide-react'

// ─── Inline redaction bar ──────────────────────────────────────────────────
function R({ w = 'md' }: { w?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' }) {
  const widths: Record<string, string> = {
    xs: '1.8rem', sm: '3rem', md: '4.5rem', lg: '6.5rem', xl: '9rem', '2xl': '12rem',
  }
  return (
    <span
      className="inline-block bg-slate-900 rounded-[2px] align-middle relative select-none"
      style={{ width: widths[w], height: '0.85em', top: '-1px' }}
      aria-label="[redacted]"
    />
  )
}

// ─── Section tag ───────────────────────────────────────────────────────────
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold tracking-[0.25em] text-teal-700 uppercase mb-3 flex items-center gap-3">
      {children}
      <span className="flex-1 h-px bg-teal-100" />
    </p>
  )
}

// ─── Section heading ───────────────────────────────────────────────────────
function H2({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`text-2xl md:text-3xl font-light italic leading-tight mb-5 tracking-tight ${light ? 'text-slate-100' : 'text-slate-800'}`}>
      {children}
    </h2>
  )
}

// ─── Pull quote ────────────────────────────────────────────────────────────
function PQ({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <blockquote className={`border-l-[3px] border-teal-500 pl-5 my-6 text-[1rem] italic leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
      {children}
    </blockquote>
  )
}

// ─── Prose paragraph ───────────────────────────────────────────────────────
function P({ children, className = '', light = false }: { children: React.ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={`leading-[1.85] text-[0.95rem] mb-4 last:mb-0 ${light ? 'text-slate-300' : 'text-slate-700'} ${className}`}>
      {children}
    </p>
  )
}

// ─── Timeline item ─────────────────────────────────────────────────────────
function TL({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[6rem_1fr] gap-4 mb-5 items-start">
      <div className="text-right pr-4 border-r border-teal-100 pt-0.5">
        <p className="text-[0.65rem] font-mono tracking-wide text-teal-600 leading-snug">{label}</p>
      </div>
      <P className="!mb-0">{children}</P>
    </div>
  )
}

// ─── Vector card ───────────────────────────────────────────────────────────
function VC({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-slate-50 p-5 border-t-2 border-teal-400 rounded-b-lg">
      <p className="text-[0.6rem] font-mono tracking-[0.2em] uppercase text-teal-600 mb-2">{title}</p>
      <p className="text-[0.9rem] text-slate-700 leading-[1.65]">{children}</p>
    </div>
  )
}

export default function SampleReportPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-10 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-5 px-5 py-2 border-teal-200 text-teal-700 text-sm font-medium tracking-wide bg-teal-50/50">
            SAMPLE TERRAIN MAP
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-5 tracking-tight text-slate-800">
            What a real Terrain Map<br />
            <span className="text-teal-600">actually looks like.</span>
          </h1>
          <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto mb-6">
            The following is a complete, unedited Terrain Map from a real ReLoHu session. The client reviewed this document and gave explicit permission to share it as an anonymized example.
          </p>
          <div className="inline-flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 text-sm text-amber-800 text-left max-w-xl">
            <EyeOff className="w-4 h-4 shrink-0 mt-0.5" />
            <span>Name, age, and specific location have been removed (shown as <span className="inline-block bg-slate-800 rounded-[2px] w-10 h-3 align-middle mx-0.5 relative top-[-1px]" />). All psychological content is exactly as delivered. Shared with the explicit permission of the client. All ReLoHu Terrain Maps are strictly confidential.</span>
          </div>
        </div>
      </section>

      {/* ==================== DOCUMENT ==================== */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-slate-500 text-sm mb-6 leading-relaxed max-w-2xl mx-auto">
            Every Terrain Map is built from a unique intake conversation and looks different. These are examples of the depth and precision the process produces.
          </p>
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">

            {/* ── Cover ── */}
            <div className="bg-slate-50 border-b border-slate-200 px-8 md:px-14 py-12">
              <div className="flex items-start justify-between mb-10">
                <img src="/relohu-logo.png" alt="ReLoHu" className="h-7 w-auto object-contain opacity-90" />
                <div className="text-right">
                  <p className="text-slate-400 text-[10px] tracking-widest uppercase font-mono">Session Date</p>
                  <p className="text-slate-700 text-sm font-medium">March 26, 2026</p>
                </div>
              </div>

              <div className="text-center mb-10">
                <p className="text-[10px] tracking-[0.35em] text-teal-600 uppercase mb-4 font-mono">Subject Portrait</p>
                <div className="flex items-center justify-center mb-6">
                  <R w="xl" />
                </div>
                <div className="w-16 h-px bg-teal-200 mx-auto mb-4" />
                <p className="text-slate-500 italic text-sm tracking-wide">
                  <R w="xs" />&nbsp; · &nbsp;<R w="lg" />&nbsp; · &nbsp;Haitian-American
                </p>
              </div>

              <div className="flex items-end justify-between pt-8 border-t border-slate-200">
                <div className="text-slate-500 text-[10px] font-mono tracking-wide leading-loose uppercase">
                  Produced by ReLoHu<br />
                  Structured Intake &amp; Psychological Mapping<br />
                  Confidential
                </div>
                <div className="text-slate-500 text-[10px] font-mono tracking-wide leading-loose text-right uppercase">
                  Respect · Love · Humility<br />
                  relohu.com
                </div>
              </div>
            </div>

            {/* ── Body ── */}
            <div className="px-8 md:px-14 py-12 space-y-12">

              {/* Portrait Overview */}
              <div>
                <Tag>Portrait Overview</Tag>
                <H2>The Witness Who Became the Voice</H2>
                <P><R w="md" /> came into this world in Haiti with an early life he describes as genuinely good — a Christmas memory, a provider father, a sense of safety. Then, at <R w="xs" />, everything changed. He was uprooted across an ocean, dropped into a new language, a new culture, new customs, and a fractured family configuration. The ground shifted, and it never quite steadied again. What emerged from that rupture is a man of considerable inner depth, humor, and hard-earned self-knowledge — someone who has been quietly building himself, largely alone, into something worth watching.</P>
                <P><R w="md" /> is pansexual and non-binary in identity. He has survived sexual abuse, estrangement from nearly every blood relative, a lost friendship that lasted 15 years, suicidal ideation, and a quiet but pervasive existential reckoning with a world that stripped him of the two central certainties most people lean on: family and God. And yet, by his own account, he wakes up every morning with a reason to keep going. That is not a small thing. That is a person who has done serious inner work.</P>
              </div>

              <Separator className="bg-slate-100" />

              {/* Central Wound */}
              <div>
                <Tag>Central Wound</Tag>
                <H2>Uprooted, Then Unseen</H2>
                <P><R w="md" />'s wound is not a single event, though a single event looms large. It is cumulative and structural — a series of losses of ground that compounded over time until very little remained of the relational scaffolding that most people take for granted.</P>
                <PQ>"I am a wounded animal. I have a lot of hurt — especially the whole relationship with my mom."</PQ>
                <P>The earliest rupture is the migration. <R w="md" /> left Haiti at <R w="xs" />, separated from his father (the warmer parent), dropped into American culture with no map. He had to learn English, learn customs, start over. The self he was forming in Haiti had to pause, disassemble, and rebuild in a foreign environment. That pause cost him something.</P>
                <P>The sexual abuse — which he places at around age 8 or 9, perpetrated by an older neighborhood figure — predates the migration. He carried it silently for two decades. He did not speak about it publicly until his 30th birthday. The silence was not unusual given his cultural context: Caribbean households, he notes pointedly, do not believe in therapy. They believe in the Bible. Emotional suffering is swept under the rug. This means that <R w="md" />'s most formative wound had no witness, no processing, no mirror offered back to him for twenty-two years.</P>
                <P>The third rupture is his mother's rejection after he came out as bisexual. She called him a slur. He says he cried instantly — and noted, almost with wonder, that he has never been able to cry on demand. That moment pierced something that other losses had not. He had long since stopped hoping for much from his family, but the slur confirmed it. His mother, the one constant parental presence in America, chose a book over her son.</P>
              </div>

              <Separator className="bg-slate-100" />

              {/* Relational Terrain */}
              <div>
                <Tag>Relational Terrain</Tag>
                <H2>A Life Without a Constant</H2>
                <P><R w="md" />'s relational history follows a consistent arc: connection forms, deepens, then dissolves — often abruptly, often inexplicably from his vantage point. The pattern is not one of conflict so much as disappearance. People leave, or stop answering. He keeps moving.</P>

                <div className="my-6 space-y-1">
                  <TL label={"Haiti\nearly life"}>Father present, warm, a provider. A good early childhood. Clear, safe, but the bond was cut by the move. <R w="md" /> has not spoken to his father in years — not estranged by conflict, but by ocean and silence.</TL>
                  <TL label={"→ America\nadolescence"}>Mother becomes the sole parental figure but is described as emotionally unavailable, homophobic, and religion-bound. Older brother commits a crime and is deported back to Haiti. Younger brother sides with the mother. The family constellation dissolves into isolation.</TL>
                  <TL label={"High school\nonward"}>One significant friendship — a girl from freshman year, lasting fifteen years. The only person <R w="md" /> says truly understood him. She nearly dies in a fire. <R w="md" /> checks on her. She stops answering. He never got a reason. This loss has a particular weight.</TL>
                  <TL label={"Romantic\nhistory"}>Longest relationship: four months. Ended because of religious incompatibility. <R w="md" /> describes his relationship history as "pretty much terrible all the time." Not with bitterness, but with a kind of resigned clarity.</TL>
                  <TL label={"Present"}>Primary relationships are online, cultivated through social media. One person in physical life. The internet has become <R w="md" />'s village — which is both a genuine source of belonging and a commentary on how little the biological world offered him.</TL>
                </div>

                <PQ>"Who I consider my family is people I've met. My family wasn't my family — relatives are not your family."</PQ>
                <P>What is striking about <R w="md" />'s relational terrain is not resentment — it is the remarkably clean way he has metabolized rejection. He was thrown away by nearly everyone the world told him should keep him, and he responded not with rage but with a kind of radical self-election: he decided he was his own best thing. His self-love does not read as performance or compensation. It reads as something built slowly, from rubble.</P>
              </div>

              <Separator className="bg-slate-100" />

              {/* Identity & Emergence */}
              <div>
                <Tag>Identity &amp; Emergence</Tag>
                <H2>The Long Work of Becoming</H2>
                <P><R w="md" />'s identity formation is one of the more interesting things in this portrait. He did not simply find himself — he excavated himself, and he did it mostly without help, mostly alone, mostly in silence, over many years.</P>
                <P>He describes a significant identity crisis four or five years ago around his sexuality. He landed on pansexual, then non-binary — not as labels worn lightly, but as conclusions reached through sustained inquiry. He had always felt feminine qualities within himself; the heterosexual world made him feel "less than" for it. The resolution was not to suppress but to name and claim. He came out publicly. Most of his family had already sensed it. The ones who mattered accepted it. The ones who didn't, he has released.</P>
                <PQ>"I'm my own biggest fan now. I love myself."</PQ>
                <P>He also underwent a major religious deconstruction. Raised Pentecostal by a devout grandmother who brooked no skipping of Sunday services, <R w="md" /> arrived eventually at atheism or something adjacent to it — a position that cost him friendships, his grandmother's approval, and his family's sense of him as a safe person. He has replaced Christian cosmology with a belief in reincarnation, energy recycling, past lives. This is not random drift. It is the move of a person who could not live without some framework for meaning but who could no longer accept one built on authority and fear. He needed something he could reason his way into.</P>
                <P>The throughline in all of this is intellectual courage. <R w="md" /> questions things most people don't let themselves question — God, family loyalty, gender, the point of survival itself. He described going through existential crises "twice a day," which might sound alarming, but in context reads as a man who has made peace with the fact that he lives at the deep end.</P>
              </div>

              <Separator className="bg-slate-100" />

              {/* Core Vectors */}
              <div>
                <Tag>Core Vectors</Tag>
                <H2>The Architecture Beneath the Surface</H2>
                <P>These are the structural forces that organize <R w="md" />'s experience, his behavior, and his pain:</P>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  <VC title="Hyper-Awareness"><R w="md" /> thinks constantly, questions everything, second-guesses even hypothetical divine proof. He described this himself as a curse. He is "too aware." His mind lives 98% in the future. This capacity for scrutiny is also his greatest creative asset.</VC>
                  <VC title="The Need to Be Witnessed">He spent decades silent — about the abuse, the sexuality, the doubt. When he finally started speaking, he discovered something: being heard by strangers online healed something that family could not. Speaking publicly became, at its core, a witness stand.</VC>
                  <VC title="Radical Self-Reliance"><R w="md" /> has been essentially alone — no constants, no safety net — for most of his adult life. He has developed a self-sufficiency that borders on the philosophical. He does not need marriage, children, or legacy. He is learning to just be.</VC>
                  <VC title="Brutal Honesty as Protection">He identifies brutal honesty as his most socially costly trait — and also something he cannot and would not give up. The honesty is not aggression. It is the strategy of someone who learned that concealment costs more than it protects.</VC>
                  <VC title="The Humor Defense">His life, by his own framing, is "a horror film disguised as a comedy." Laughing — at himself, at the absurdity of it all — is not avoidance. It is a sophisticated way of bearing the unbearable without being crushed by it.</VC>
                  <VC title="Present-Moment Scarcity">He spends 98% of his mental time in the future. The only place he is truly present is when he is creating. This suggests that creativity is not a hobby or career — it is, for <R w="md" />, a neurological safe harbor. A place the anxiety cannot follow.</VC>
                </div>
              </div>

              <Separator className="bg-slate-100" />

              {/* Entrenchment Patterns */}
              <div>
                <Tag>Entrenchment Patterns</Tag>
                <H2>Where He Gets Stuck</H2>
                <P><R w="md" /> is far more self-aware than most. He has already identified his primary entrenchment: the overthinking, the existential cycling, the awareness that becomes a weight. But there are a few patterns worth naming explicitly, not as criticism but as terrain to know:</P>
                <P><strong className="text-slate-800">The anticipatory loop.</strong> <R w="md" /> lives overwhelmingly in the future — planning, worrying, projecting. This is a common adaptation for people who grew up in environments that were unpredictable or unsafe. Constantly scanning the horizon is a survival strategy. The cost is a kind of low-grade anxiety that never fully resolves, because the future never arrives in a form that stops the scanning.</P>
                <P><strong className="text-slate-800">Completion aversion.</strong> <R w="md" /> has many unfinished trajectories: school programs not completed, aspirations abandoned, relationships that never made it past four months, friendships that dissolved without resolution. This is not laziness — it is the behavior pattern of someone for whom investment and loss have been repeatedly paired. Finishing things means they can end. Some part of him protects against endings by leaving things slightly open.</P>
                <P><strong className="text-slate-800">Intimacy as risk.</strong> His longest romantic relationship was four months. His deepest friendship ended without closure. <R w="md" /> describes himself as a loner, which he says he enjoys — and he likely does. But there is a difference between choosing solitude and having learned that closeness will eventually cost you. The internet community he has built is real, but it is also managed: he controls the distance, the disclosure, the terms. He lets people in through a screen, which is safer than letting them through a door.</P>
                <PQ>"People suck." — Said lightly, but it is a sentence shaped by a long education.</PQ>
                <P>His wellbeing score over the past three months: a four out of ten. Just under neutral. This is someone who has not found the floor, but has not quite found lift either. He has had suicidal ideation but no attempts. He is not in crisis — he is in a slow trudge through an in-between period, sustained by the one thing that fully absorbs him: creation.</P>
              </div>

              <Separator className="bg-slate-100" />

              {/* What's Working */}
              <div>
                <Tag>What Is Working</Tag>
                <H2>The Ground He Has Built</H2>
                <P><R w="md" />'s self-love is real, and it should not be minimized. For a person whose family essentially handed him back, whose God was dismantled, whose longest friendship evaporated without explanation, whose body was violated before he was ten — to arrive at <R w="xs" /> saying "I am my own biggest fan" is not a cliché. It is a serious accomplishment.</P>
                <P>The way he has chosen to show up — honestly, publicly, without apology — has become the first sustained project he has fully committed to. Strangers reach out to thank him for saying things they cannot. The people who say <em>thank you for speaking out for me</em> are doing something for him too — they are providing what his family withheld: recognition. Acknowledgment that his particular frequency, his particular honesty, is not too much. It is exactly right for someone.</P>
                <P>His humor is also a genuine resource. People who can laugh at their own wreckage have a resilience that is hard to manufacture. <R w="md" /> sees his life as a horror-comedy and he means it — not as self-deprecation but as a kind of philosophical acceptance of absurdity. This is a very sophisticated coping orientation.</P>
                <P>He values resilience above all else in other people — the cockroach quality, he calls it, people who keep going after tragedy. This is <R w="md" /> describing himself. He has been getting up, quietly, for a long time.</P>
              </div>
            </div>

            {/* ── Synthesis ── */}
            <div className="bg-slate-50 border-t border-slate-200 px-8 md:px-14 py-12">
              <Tag>Synthesis</Tag>
              <H2>The Larger Shape of a Life</H2>
              <P>What <R w="md" />'s portrait reveals is a man who has been quietly conducting his own archaeology — digging back through layers of silence, shame, religious conditioning, cultural suppression, and relational loss to find the bedrock of who he actually is. He has done this largely without help. No therapy. No stable family container. No long-term partner. Just time, and the internet, and a camera, and the willingness to say true things out loud.</P>
              <P>The central question <R w="md" /> is living inside right now is not about career or income or even relationships. It is a metaphysical one: without God, without family, without a body that hasn't been violated, without a country that isn't in chaos — who am I and why does any of this matter? He has not answered it. But he has decided, for now, to keep creating while he figures it out. And there is something genuinely beautiful about that.</P>
              <P>He is a man who was told, by nearly every system around him, that his authentic self was wrong: too queer, too questioning, too honest, too intense, too much. He disagreed. And he built an audience of people who agree with his disagreement. That is not a small victory. That is a life being lived on one's own terms, after everything.</P>
              <p className="mt-8 italic text-[0.95rem] text-slate-500 leading-relaxed border-t border-slate-200 pt-6">
                <R w="md" /> would benefit most from a therapeutic relationship built on consistency and unconditional positive regard — not problem-solving, but sustained witnessing. He has already done the hard intellectual work of self-understanding. What remains is the slower, embodied work of being known by another person who stays.
              </p>
            </div>

            {/* Document footer */}
            <div className="px-8 md:px-14 py-5 bg-teal-700 flex items-center justify-between gap-4 flex-wrap">
              <span className="text-teal-100 text-[10px] font-mono tracking-widest uppercase">
                ReLoHu Terrain Map — <R w="sm" /> — March 26, 2026
              </span>
              <span className="text-teal-200 text-[10px] font-mono tracking-widest uppercase">Confidential · relohu.com</span>
            </div>

          </div>

          <p className="text-center text-slate-500 text-sm mt-6 italic">
            Every Terrain Map is unique to the person it maps. No two are alike in structure, depth, or insight.
          </p>
        </div>
      </section>

      {/* ==================== SEE ANOTHER ==================== */}
      <section className="py-10 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-slate-500 text-sm mb-5">This is one of two sample reports available.</p>
          <Link
            href="/sample-report-2"
            className="flex items-center justify-between gap-4 border border-slate-200 rounded-2xl p-6 hover:border-teal-200 hover:bg-teal-50/30 transition-all group"
          >
            <div>
              <p className="text-[10px] font-mono tracking-widest text-teal-600 uppercase mb-1">Also available</p>
              <p className="font-medium text-slate-800">Sample Report #2 — A different person, a different map</p>
              <p className="text-sm text-slate-500 mt-0.5">Sovereignty, awakening, the bridge archetype</p>
            </div>
            <span className="text-teal-600 text-xl group-hover:translate-x-1 transition-transform shrink-0">→</span>
          </Link>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-4">
            Ready to see what your map looks like?
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            A 15–20 minute orientation call with Dr. Gedalia. No commitment. Just a conversation to explore if ReLoHu is right for you.
          </p>
          <a
            href="https://calendly.com/relohu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-10 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-100"
          >
            <Calendar className="w-5 h-5" />
            Book Your Orientation Call
          </a>
          <p className="text-slate-400 text-sm mt-4">No commitment · Confidential · 15–20 minutes</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
