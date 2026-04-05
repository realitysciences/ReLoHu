import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Sigmund Freud: A ReLoHu Terrain Map | ReLoHu',
  description: 'A psychological mapping of Sigmund Freud: the mother who made him special, the father who could not protect, the Jewish wound in Vienna, and the theory that was also a confession.',
  openGraph: {
    title: 'Sigmund Freud: A ReLoHu Terrain Map',
    description: 'The founder of psychoanalysis as terrain subject: the mother\'s favorite, the father\'s shame, the Rome inhibition, and the theory of the Oedipus complex as the most consequential projection in intellectual history.',
  },
}

const sections = [
  {
    label: "Amalia's golden Sigi: the mother who made him special",
    body: `Amalia Freud called her firstborn son "my golden Sigi." She believed, with the specific conviction of a mother who has been told a prophecy, that he was destined for greatness. A fortune teller had allegedly told her so when he was an infant. She organized her relationship with him around that belief. He was her favorite. The favoritism was not concealed. His siblings lived with it as a fact of the household.

What this produces in the interior of the favored child is a specific and complex wound. Not a wound of deprivation, but a wound of inflation. Being told you are exceptional before you have done anything exceptional establishes a relationship with your own specialness that is both sustaining and precarious. The sustaining part: a baseline confidence, a sense that the world is fundamentally oriented in your direction, that you will be recognized eventually. The precarious part: the recognition has to keep coming, because it was never truly earned, and the gap between what you were told you were and what you can actually demonstrate is always available to feel.

His ambition throughout his life carried the specific texture of someone who needed to be recognized at a scale that matched what he had been told he was from the beginning. The discovery of psychoanalysis, the founding of the movement, the insistence on priority and credit: these are not simply the ordinary behaviors of a scientist protecting his work. They are the behaviors of someone for whom recognition had been promised and had to be delivered.`,
  },
  {
    label: "Jakob's passivity: the father who could not protect",
    body: `Jakob Freud was a wool merchant who moved his family from Freiberg to Vienna when Sigmund was four. The move was driven by economic failure and, almost certainly, by the specific pressures of being Jewish in a Moravian market town where Jewish merchants were increasingly unwelcome. The family arrived in Vienna poor, crowded into a small apartment, Jakob unable to provide adequately.

There is a story Freud tells in The Interpretation of Dreams about his father. When Jakob was young, a Christian man knocked his hat off into the mud and told him to get off the pavement. "And what did you do?" the young Freud asks. "I stepped into the gutter and picked up my cap," Jakob replies. Freud records that this story seemed unheroic to him. He had expected his father to confront the man. Instead his father submitted.

This is a terrain-defining moment. The son who has been told by his mother that he is destined for greatness watches his father submit to humiliation. The two accounts of himself are irreconcilable: the golden child and the son of a man who steps into the gutter. What that irreconcilability produces is a specific drive: to build something so authoritative that the submission is permanently reversed. Not Jakob's submission. The condition that required it.`,
  },
  {
    label: 'The Jewish wound in Vienna: status anxiety as engine',
    body: `Vienna in the second half of the nineteenth century was, for Jews, a specific social environment. There were periods of liberalization when professional advancement was possible, and there were periods of virulent antisemitism when those advances were rolled back. Freud navigated both. He was passed over for academic promotion that his work merited. He was excluded from certain professional circles regardless of his qualifications. He built a private practice and a private movement partly because the official institutions were not fully available to him.

He was explicit, in letters and in his autobiography, about the way this exclusion affected his willingness to stand outside the mainstream and hold unpopular positions. Being excluded from the consensus, he wrote, gave him practice in being excluded from the consensus. The wound of social marginalization became the method of intellectual independence.

This is one of the most important terrain observations about him: the specific wound of being Jewish in late imperial Vienna, of being highly capable and systematically limited, produced someone who was extraordinarily comfortable standing outside the professional establishment with a theory that the establishment found uncomfortable. The exclusion and the theory required each other. A man who was fully inside the Viennese medical establishment might have produced something that the establishment could have absorbed without rupture. He produced something that ruptured everything. This is not incidental to his origins. It follows from them.`,
  },
  {
    label: 'The Oedipus complex: the wound as universal theory',
    body: `His father died in 1896. In the period of mourning and self-analysis that followed, Freud arrived at what he would call his most important discovery: the Oedipus complex. The theory holds that every child passes through a phase of unconscious sexual desire for the opposite-sex parent and hostile rivalry with the same-sex parent. He argued that this was universal.

The timing is the terrain datum. He discovers the universal theory of father-rivalry in the months following his own father's death, during an intense period of self-examination. He explicitly says, in letters to his colleague Wilhelm Fliess, that the self-analysis is producing the discoveries. The question a terrain map holds is not whether the Oedipus complex is clinically accurate. It is what it means that this particular man, with this particular father, discovered this particular theory in this particular period.

The theory universalizes his own wound. The boy who felt the gap between what his mother promised and what his father could provide, who watched his father submit to humiliation, who needed to surpass the father to be the man his mother had told him he was: that specific interior configuration becomes the human interior configuration. That is either one of the greatest insights in intellectual history, or one of the most consequential projections, or both simultaneously. The terrain perspective does not resolve that question. It just makes it visible.`,
  },
  {
    label: 'The Rome problem: what the inhibition revealed',
    body: `For years, Freud could not enter Rome. He planned trips, got close, and turned back. He traveled to Italy repeatedly and stopped short of the city. He analyzed this inhibition himself and connected it to his identification with Hannibal, the Carthaginian general who marched his army to the gates of Rome and then stopped, who never entered the city he had promised himself. Freud, the Jewish outsider who had committed himself to conquering the intellectual establishment, could not cross the threshold into the center of Western civilization.

He finally entered Rome in 1901, after the completion of The Interpretation of Dreams. The book's publication was the threshold event. Once he had produced the work that he believed was the equivalent of conquering, he could enter the city.

This is a terrain sequence of unusual clarity: an inhibition that is structurally connected to an identification that is structurally connected to a wound, resolved not by insight but by achievement. He did not analyze his way into Rome. He published his way in. The wound was not the inability to travel. The wound was the specific relationship between what he needed to accomplish and where he was allowed to stand in the culture. Once the accomplishment was documented, the standing shifted. The gate opened.`,
  },
  {
    label: 'The self-analysis: what it costs to be your own subject',
    body: `He was his own first and most important patient. The Interpretation of Dreams is a self-analysis conducted in public, using his own dreams as the primary data. The Psychopathology of Everyday Life mines his own slips, forgettings, and errors. Throughout his work, he is simultaneously the analyst and the subject, the one who holds the frame and the one inside it.

What this costs is something he did not fully address. The analyst's position requires a particular kind of separateness from the material. The analyst is not inside the wound. The analyst holds the wound from a position that is not consumed by it. Freud's position was different: he was inside the wound and attempting to analyze it simultaneously. The framework he produced carries the marks of that position.

His late work, including Beyond the Pleasure Principle and Civilization and Its Discontents, has a quality that his earlier work does not: a bleakness, an insistence on the death drive, on the inherent destructiveness of civilization, on the impossibility of lasting happiness. The cancer that began in 1923, the years of painful surgeries, the rise of Nazism and his eventual exile from Vienna to London in 1938: the terrain of his final decades produced a framework that looks very different from the framework of the young ambitious Jewish doctor in the apartment on Bergasse 19. The wound changed. The theory followed.`,
  },
]

export default function SigmundFreudMapPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-16 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <Link href="/maps/public" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors">
            &larr; Example Maps
          </Link>
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-4">Terrain Map &middot; Public Figure</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">Sigmund Freud</h1>
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-8">Neurologist, founder of psychoanalysis (1856&ndash;1939)</p>

          <div className="bg-teal-900/30 border border-teal-700/40 rounded-xl px-5 py-4 mb-8">
            <p className="text-teal-300 text-sm leading-relaxed">
              This is a public example map created from publicly available information only. This is a cartographic exercise, not a clinical assessment or diagnosis.
            </p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            Drawn from: The Interpretation of Dreams (1900), The Psychopathology of Everyday Life (1901), Civilization and Its Discontents (1930), An Autobiographical Study (1925), correspondence with Wilhelm Fliess, and biographical accounts including Peter Gay's Freud: A Life for Our Time (1988). All inferences are based on material in the public record.
          </p>
        </div>
      </section>

      {/* ==================== WHY THIS PERSON ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed italic">
            The founder of psychoanalysis is the most obvious possible subject for a terrain map, and one of the most neglected. Everyone knows the theories. Very few people have looked carefully at the wound that produced them: the mother's promise, the father's submission, the Jewish outsider who universalized his own interior as the human interior. That is the map worth making.
          </p>
        </div>
      </section>

      {/* ==================== MAP SECTIONS ==================== */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="ml-0 md:ml-12 space-y-14">
            {sections.map((section, i) => (
              <div key={i}>
                <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-4">{section.label}</p>
                <div className="space-y-4">
                  {section.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-slate-600 leading-relaxed text-[15px]">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CROSS REFERENCES ==================== */}
      <section className="py-12 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-6">See also</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/maps/public/carl-jung"
              className="flex-1 border border-slate-200 hover:border-teal-300 rounded-xl px-5 py-4 text-sm text-slate-600 hover:text-teal-600 transition-all"
            >
              <p className="font-medium mb-1">Carl Jung: Terrain Map</p>
              <p className="text-slate-400 text-xs">The crown prince who refused to inherit</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== BRIDGE ==================== */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed mb-6 max-w-lg">
            This map was built from inference and public record. A session produces the same quality of attention applied to you, with full information rather than reconstructed signal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-4 text-sm transition-all hover:shadow-lg hover:shadow-teal-100"
            >
              Book a Free Orientation Call
            </a>
            <Link
              href="/maps/public"
              className="inline-flex items-center gap-2 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-medium rounded-full px-8 py-4 text-sm transition-all"
            >
              &larr; Back to Example Maps
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
