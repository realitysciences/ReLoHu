import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Star, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'What People Say | ReLoHu',
  description: 'Read what ReLoHu clients have shared about their experience.',
}

interface GoogleReview {
  relativePublishTimeDescription: string
  rating: number
  text?: { text: string }
  authorAttribution: {
    displayName: string
    uri?: string
  }
}

async function getGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId || apiKey === 'YOUR_KEY_HERE' || placeId === 'YOUR_PLACE_ID_HERE') {
    return []
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'id,displayName,reviews,rating',
        },
        next: { revalidate: 3600 },
      }
    )
    const data = await res.json()
    return data.reviews ?? []
  } catch {
    return []
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`w-4 h-4 ${n <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`}
        />
      ))}
    </div>
  )
}

export default async function TestimonialsPage() {
  const reviews = await getGoogleReviews()
  const hasReviews = reviews.length > 0
  const placeId = process.env.GOOGLE_PLACE_ID

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <SiteNav />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white" />
        <div className="relative max-w-2xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-5 py-2 border-teal-200 text-teal-700 text-sm font-medium tracking-wide bg-teal-50/50">
            WHAT PEOPLE SAY
          </Badge>
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight text-slate-800">
            {hasReviews ? (
              <>Real people.<br /><span className="text-teal-600">Real words.</span></>
            ) : (
              <>This page is being built<br /><span className="text-teal-600">from real sessions.</span></>
            )}
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
            {hasReviews
              ? 'ReLoHu opened to the public in April 2026. These are verified Google reviews from real clients.'
              : 'ReLoHu has been in private development for two years. It opened to the public in April 2026. Verified responses from clients will appear here as they come in.'}
          </p>
        </div>
      </section>

      {/* ==================== GOOGLE REVIEWS ==================== */}
      {hasReviews && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <p className="text-[10px] font-mono tracking-[0.35em] text-teal-600 uppercase">Verified Google Reviews</p>
              <div className="flex-1 h-px bg-slate-100" />
              <a
                href={`https://www.google.com/maps/place/?q=place_id:${placeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-teal-600 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                View on Google
              </a>
            </div>

            <div className="space-y-8">
              {reviews.map((review, i) => (
                <div key={i} className="border border-slate-100 rounded-2xl p-7 bg-white hover:border-teal-100 hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="font-medium text-slate-800 text-sm">{review.authorAttribution.displayName}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{review.relativePublishTimeDescription}</p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  {review.text?.text && (
                    <p className="text-slate-600 leading-relaxed text-sm">{review.text.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================== SHARE YOUR EXPERIENCE ==================== */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-slate-600 leading-relaxed mb-6">
            If you have had a session and want to share what it was like, David would be grateful. Responses are published only with your permission, and only in the form you approve.
          </p>
          <a
            href="mailto:respectlovehumility@gmail.com?subject=My ReLoHu experience"
            className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-3.5 text-sm transition-all hover:shadow-lg hover:shadow-teal-100"
          >
            Share Your Experience
          </a>
          <p className="text-slate-400 text-xs mt-4">Nothing is published without your explicit approval.</p>
        </div>
      </section>

      {/* ==================== FOOTER NAV ==================== */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            The best way to understand what a session is like is to read what David has written about the work, or to start with a free orientation call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/origins"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium rounded-full px-8 py-3.5 text-sm transition-all"
            >
              Read the Origins
            </Link>
            <a
              href="https://calendly.com/relohu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-8 py-3.5 text-sm transition-all hover:shadow-lg hover:shadow-teal-100"
            >
              Book a Free Orientation Call
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
