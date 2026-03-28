import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

const posts = [
  {
    slug: 'the-vipeholm-study',
    title: 'What Tooth Decay Taught a Dentist About the Human Interior',
    excerpt: 'The Vipeholm study revealed that damage accumulates invisibly, below the surface, long before anyone notices. The human interior works exactly the same way — and most psychological support never looks beneath the surface.',
    tag: 'Psychology',
    date: 'March 2026',
    readTime: '8 min read',
  },
  {
    slug: 'why-therapy-stalls',
    title: 'Why Therapy Stalls — And What Nobody Is Saying About It',
    excerpt: 'Most therapy failures are not failures of technique or commitment. They are failures of information. The practitioner is working with an incomplete picture of who you are.',
    tag: 'Therapy',
    date: 'March 2026',
    readTime: '6 min read',
  },
  {
    slug: 'the-observer-problem',
    title: 'The Observer Problem: When Self-Awareness Becomes Its Own Obstacle',
    excerpt: 'There is a particular kind of person who can narrate their own therapy session from the outside while it is happening. They are usually the hardest to reach — and the most in need of being reached.',
    tag: 'Psychology',
    date: 'March 2026',
    readTime: '7 min read',
  },
  {
    slug: 'what-being-known-actually-means',
    title: 'What "Being Known" Actually Means — and Why It\'s Harder Than Being Loved',
    excerpt: 'People confuse love and knowing all the time. You can be deeply loved by someone who has never once seen you clearly. The two are not the same thing, and the difference matters more than most people realize.',
    tag: 'Relationships',
    date: 'March 2026',
    readTime: '5 min read',
  },
]

export const metadata = {
  title: 'Blog | ReLoHu',
  description: 'Writing on psychology, self-knowledge, and the art of being truly seen.',
}

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      <section className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] text-teal-600 uppercase font-mono mb-4">ReLoHu Journal</p>
          <h1 className="text-4xl md:text-5xl font-medium text-slate-800 mb-4">
            Writing on what it means<br />to be truly seen.
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            Psychology, self-knowledge, and the honest questions most practices are too careful to ask.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto divide-y divide-slate-100">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block py-10 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-mono tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 rounded-full px-3 py-0.5">{post.tag}</span>
                <span className="text-slate-400 text-xs">{post.date}</span>
                <span className="text-slate-300 text-xs">·</span>
                <span className="text-slate-400 text-xs">{post.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-medium text-slate-800 mb-3 group-hover:text-teal-700 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-slate-500 leading-relaxed text-[0.95rem]">{post.excerpt}</p>
              <p className="mt-4 text-teal-600 text-sm font-medium group-hover:underline">Read →</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
