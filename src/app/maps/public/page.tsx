import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'Example Terrain Maps: Public Figures | ReLoHu',
  description: 'Demonstrations of the ReLoHu Terrain Map methodology applied to public figures whose interior lives are extensively documented. Cartographic exercises, not clinical assessments.',
}

const figures = [
  {
    slug: 'joe-rogan',
    name: 'Joe Rogan',
    field: 'Comedian, podcast host, UFC commentator',
    hook: 'Thousands of hours of self-disclosure on tape. An accidental autobiography -- and one of the clearest examples of a wound organizing an entire career without the person fully naming it.',
    tags: ['Origin architecture', 'Wound-to-method', 'Anti-credential epistemology', 'Relational register'],
  },
  {
    slug: 'eckhart-tolle',
    name: 'Eckhart Tolle',
    field: 'Spiritual teacher, author of The Power of Now',
    hook: 'One of the most complete cases of a wound becoming a method. His framework maps the observer\'s interior with extraordinary precision -- and stops exactly where ReLoHu begins.',
    tags: ['Wound-to-method', 'Universalizing shadow', 'Relational gap', 'The particular vs. the universal'],
  },
]

export default function PublicMapsIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-teal-400 uppercase mb-6">Example Maps: Public Figures</p>
          <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-8">
            What the methodology<br />
            <span className="text-teal-300">looks like in practice.</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            The best way to understand what a Terrain Map does is to see one. These are demonstrations of the ReLoHu methodology applied to public figures whose interior lives are extensively documented -- through their own writing, interviews, and biographical record.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
            These are cartographic exercises, not clinical assessments or diagnoses. All content is drawn from publicly available material. No private sessions or personal contact of any kind.
          </p>
        </div>
      </section>

      {/* ==================== FIGURE CARDS ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-12">The archive</p>
          <div className="space-y-0">
            {figures.map((figure, i) => (
              <Link key={i} href={`/maps/public/${figure.slug}`} className="group block">
                <div className="flex gap-8 py-10 border-t border-slate-100 hover:border-teal-100 transition-colors">
                  <div className="text-[11px] font-mono text-slate-300 pt-1 shrink-0 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h2 className="text-xl font-medium text-slate-800 group-hover:text-teal-600 transition-colors">
                        {figure.name}
                      </h2>
                      <span className="text-slate-300 group-hover:text-teal-400 transition-colors text-lg shrink-0">→</span>
                    </div>
                    <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-4">{figure.field}</p>
                    <p className="text-slate-500 leading-relaxed text-sm mb-5">{figure.hook}</p>
                    <div className="flex flex-wrap gap-2">
                      {figure.tags.map((tag, j) => (
                        <span key={j} className="text-[10px] font-mono tracking-wide text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="border-t border-slate-100" />
          </div>

          <div className="mt-12 py-8 border border-dashed border-slate-200 rounded-xl px-6 text-center">
            <p className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase mb-2">This archive is growing</p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto">
              New figures are added as the methodology warrants it. The selection criterion is not fame but documentation -- public figures whose interior lives are rich enough to map with specificity.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== BRIDGE ==================== */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 leading-relaxed mb-6 max-w-lg">
            These maps demonstrate the methodology. A session produces the same quality of attention -- applied to you, not a public figure, and drawing on everything you actually share rather than what is in the public record.
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
              href="/maps"
              className="inline-flex items-center gap-2 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-600 font-medium rounded-full px-8 py-4 text-sm transition-all"
            >
              View the Map Library →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
