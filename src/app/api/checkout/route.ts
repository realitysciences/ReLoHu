import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
})

export async function POST(req: Request) {
  try {
    const origin = req.headers.get('origin') || 'https://relohu.com'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'ReLoHu Terrain Map Session',
              description: 'Intake session + Terrain Map report + 30-day follow-up call. April founding cohort pricing.',
            },
            unit_amount: 49700, // $497.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/founding-cohort`,
      billing_address_collection: 'auto',
      customer_creation: 'always',
      metadata: {
        product: 'terrain_map_founding_cohort',
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
