import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json({
        error: `Missing env vars: GMAIL_USER=${!!process.env.GMAIL_USER} GMAIL_APP_PASSWORD=${!!process.env.GMAIL_APP_PASSWORD}`
      }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const body = await req.json()
    const { name, email, phone, sessionDate, q1, q2, q3, q4, q5 } = body

    if (!name || !email || !q1 || !q2 || !q3 || !q4) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const questions = [
      { num: 1, tag: 'Orientation', q: 'How did you come to be here — what was the thing that made you say yes to this?', a: q1 },
      { num: 2, tag: 'Self-concept baseline', q: 'How would you describe yourself to someone who had no idea who you are — not your résumé, but how you actually move through life?', a: q2 },
      { num: 3, tag: 'Prior work signal', q: 'What have you already tried to understand about yourself — therapy, books, retreats, conversations — and where has it felt incomplete?', a: q3 },
      { num: 4, tag: 'Present-tense friction', q: 'Is there a pattern in your life right now that you keep returning to — something you can describe but can\'t quite explain?', a: q4 },
      { num: 5, tag: 'Witnessing readiness', q: 'Is there anything you\'d want me to know before we begin — something that would help me understand what kind of presence you\'re bringing into this?', a: q5 || '(not provided)' },
    ]

    const questionsHtml = questions.map(({ num, tag, q, a }) => `
      <div style="margin-bottom: 28px;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
          <span style="font-size: 11px; font-weight: 600; color: #0f766e; background: #f0fdfa; padding: 3px 10px; border-radius: 20px; letter-spacing: 0.02em;">${num}</span>
          <span style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">${tag}</span>
        </div>
        <p style="margin: 0 0 8px; font-size: 14px; font-weight: 500; color: #374151; line-height: 1.6;">${q}</p>
        <div style="background: white; border: 1px solid #e2e8f0; border-left: 3px solid #0f766e; border-radius: 0 8px 8px 0; padding: 14px 16px;">
          <p style="margin: 0; color: #1e293b; line-height: 1.75; white-space: pre-wrap; font-size: 14px;">${a}</p>
        </div>
      </div>
    `).join('')

    // Email to Dr. David
    await transporter.sendMail({
      from: `"ReLoHu Intake" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Intake: ${name} — session ${sessionDate ? `(${sessionDate})` : 'date TBD'}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 640px; margin: 0 auto; color: #1e293b;">
          <div style="background: linear-gradient(135deg, #0f766e 0%, #0d6460 100%); padding: 28px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0 0 4px; font-size: 20px; font-weight: 500;">New Session Intake</h2>
            <p style="color: rgba(255,255,255,0.75); margin: 0; font-size: 14px;">Submitted before their session with you</p>
          </div>

          <div style="background: #f8fafc; padding: 28px 32px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px; background: white; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 16px; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; width: 110px;">Name</td>
                <td style="padding: 12px 16px; font-weight: 600; font-size: 15px;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 16px; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;">Email</td>
                <td style="padding: 12px 16px;"><a href="mailto:${email}" style="color: #0f766e; text-decoration: none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 16px; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;">Phone</td>
                <td style="padding: 12px 16px;">${phone}</td>
              </tr>` : ''}
              ${sessionDate ? `
              <tr>
                <td style="padding: 12px 16px; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;">Session</td>
                <td style="padding: 12px 16px;">${sessionDate}</td>
              </tr>` : ''}
            </table>

            <p style="font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 20px;">Pre-Session Responses</p>

            ${questionsHtml}
          </div>

          <div style="padding: 16px 32px; background: #f1f5f9; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
            <p style="margin: 0; font-size: 12px; color: #94a3b8;">Reply directly to reach ${name} at ${email}.</p>
          </div>
        </div>
      `,
    })

    // Confirmation email to the person
    await transporter.sendMail({
      from: `"Dr. David at ReLoHu" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Your intake form is received, ${name.split(' ')[0]}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 580px; margin: 0 auto; color: #1e293b;">
          <div style="background: linear-gradient(135deg, #0f766e 0%, #0d6460 100%); padding: 28px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0 0 4px; font-size: 20px; font-weight: 500;">Got it, ${name.split(' ')[0]}.</h2>
            <p style="color: rgba(255,255,255,0.75); margin: 0; font-size: 14px;">Your responses are with me.</p>
          </div>
          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 16px; line-height: 1.75; color: #374151;">
              I read every intake carefully before we meet. What you wrote won't be skimmed. It will be used.
            </p>
            <p style="margin: 0 0 24px; line-height: 1.75; color: #374151;">
              If anything shifts for you before the session, or if something important didn't make it into the form, just reply to this email.
            </p>
            <p style="margin: 0; line-height: 1.75; color: #374151;">
              See you soon.
            </p>
            <p style="margin: 16px 0 0; color: #0f766e; font-weight: 500;">Dr. David</p>
            <p style="margin: 2px 0 0; font-size: 12px; color: #94a3b8;">Founder, ReLoHu</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('Intake form error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
