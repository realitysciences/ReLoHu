import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'ReLoHu Contact <onboarding@resend.dev>',
      to: 'respectlovehumility@gmail.com',
      replyTo: email,
      subject: `ReLoHu Contact: ${subject || 'New message'} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <div style="background: #0f766e; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px; font-weight: 500;">New message via ReLoHu</h2>
          </div>
          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 80px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0f766e;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Subject</td>
                <td style="padding: 8px 0;">${subject || '(none)'}</td>
              </tr>
            </table>
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
              <p style="margin: 0; color: #374151; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #94a3b8;">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
