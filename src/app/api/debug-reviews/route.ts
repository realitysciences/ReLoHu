export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return Response.json({ error: 'Missing env vars', apiKey: !!apiKey, placeId: !!placeId })
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'id,displayName,reviews,rating',
        },
        cache: 'no-store',
      }
    )
    const data = await res.json()
    return Response.json({ status: res.status, data })
  } catch (e) {
    return Response.json({ error: String(e) })
  }
}
