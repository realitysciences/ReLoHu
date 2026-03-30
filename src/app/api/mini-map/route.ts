import Anthropic from '@anthropic-ai/sdk'
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SUBMISSIONS_FILE = path.join('/tmp', 'minimap-submissions.json')
const IP_FILE = path.join('/tmp', 'minimap-ips.json')
const DAILY_CAP = 20 // max maps generated per calendar day

// ── Email deduplication ──────────────────────────────────────────────────────

function getSubmittedEmails(): Set<string> {
  try {
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      const data = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf8'))
      return new Set(data)
    }
  } catch { /* ignore */ }
  return new Set()
}

function recordEmail(email: string) {
  const emails = getSubmittedEmails()
  emails.add(email.toLowerCase().trim())
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([...emails]))
}

// ── IP rate limiting (1 per IP per 24 hours) ─────────────────────────────────

function getIPLog(): Record<string, number> {
  try {
    if (fs.existsSync(IP_FILE)) {
      return JSON.parse(fs.readFileSync(IP_FILE, 'utf8'))
    }
  } catch { /* ignore */ }
  return {}
}

function isIPAllowed(ip: string): boolean {
  const log = getIPLog()
  const last = log[ip]
  if (!last) return true
  return Date.now() - last > 24 * 60 * 60 * 1000
}

function recordIP(ip: string) {
  const log = getIPLog()
  log[ip] = Date.now()
  fs.writeFileSync(IP_FILE, JSON.stringify(log))
}

// ── Daily global cap ──────────────────────────────────────────────────────────

function getDailyCount(): { date: string; count: number } {
  try {
    const daily = path.join('/tmp', 'minimap-daily.json')
    if (fs.existsSync(daily)) {
      return JSON.parse(fs.readFileSync(daily, 'utf8'))
    }
  } catch { /* ignore */ }
  return { date: '', count: 0 }
}

function incrementDailyCount() {
  const daily = path.join('/tmp', 'minimap-daily.json')
  const today = new Date().toISOString().slice(0, 10)
  const current = getDailyCount()
  const count = current.date === today ? current.count + 1 : 1
  fs.writeFileSync(daily, JSON.stringify({ date: today, count }))
}

function isDailyCapReached(): boolean {
  const today = new Date().toISOString().slice(0, 10)
  const { date, count } = getDailyCount()
  return date === today && count >= DAILY_CAP
}

const FOCUS_LABELS: Record<string, string> = {
  pattern: 'a relationship pattern they keep repeating',
  stuck: 'a place where they feel stuck but do not know why',
  unexplained: 'something about themselves they have never been able to explain to anyone',
  wound: 'a wound that keeps getting activated',
}

const QUESTIONS = [
  'Tell me about it in your own words. Not the polished version. The one that still has texture in it.',
  'When you sit with this, what do you feel? Not the thought about the feeling. The feeling itself, and where it lives.',
  'Is there something you already know about why this keeps showing up, but have not been able to fully believe yet?',
  'Who else is in this? Even if they are not obviously present, whose face or voice comes to mind?',
  'If you could say one true thing about this that you have not let yourself say out loud yet, what would it be?',
]

export async function POST(req: Request) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const { name, email, focusArea, answers } = await req.json()

    if (!name || !email || !focusArea || !answers) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Daily global cap
    if (isDailyCapReached()) {
      return NextResponse.json(
        { error: 'The map fragment tool is unavailable right now. Please try again tomorrow.' },
        { status: 503 }
      )
    }

    // IP rate limit
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      'unknown'

    if (!isIPAllowed(ip)) {
      return NextResponse.json(
        { error: 'You have already requested a map fragment today. Please check your email or try again tomorrow.' },
        { status: 429 }
      )
    }

    // Email deduplication
    const submittedEmails = getSubmittedEmails()
    if (submittedEmails.has(email.toLowerCase().trim())) {
      return NextResponse.json(
        { error: 'A map has already been sent to this email address.' },
        { status: 409 }
      )
    }

    const focusDescription = FOCUS_LABELS[focusArea] ?? 'something they want to understand better'

    const answersText = QUESTIONS.map((q, i) =>
      `Q${i + 1}: ${q}\nA: ${(answers[i] as string) || '(no response)'}`
    ).join('\n\n')

    const systemPrompt = `You are the analytical engine behind ReLoHu, a psychological mapping service created by Dr. Gedalia. Your task is to produce a "Map Fragment": a short, precise psychological portrait based on what someone has shared about a specific area of their life.

Dr. Gedalia's voice is warm but not sentimental, precise without being clinical, willing to name what is actually happening rather than what sounds comforting. He writes with the assumption that the person reading is intelligent and capable of handling real insight.

The person chose to focus on: ${focusDescription}.
Their name is: ${name}.

Produce a Map Fragment with exactly these three sections, using these exact headers on their own lines:

WHAT I HEARD
2 to 3 sentences synthesizing what ${name} shared. This should make them feel seen, not analyzed. Write directly to them in second person. Reflect the texture and specificity of what they said, not a generic summary.

WHAT I NOTICE
Two short paragraphs of genuine insight. Go one level deeper than what they said. Name the pattern beneath the pattern. Draw on attachment theory, narrative psychology, or depth psychology as appropriate, but do not name the framework explicitly, just use it. Be specific to their material, not generic.

A QUESTION TO SIT WITH
One precise, open question that will continue working on them after they stop reading. Not advice. Not a therapeutic intervention. A question that opens something rather than closes it.

After the three sections, add one short paragraph (2 to 3 sentences) that honestly describes this as a fragment of what a full Terrain Map does, which goes much deeper across all areas of a person's life, in a live conversation with Dr. Gedalia.

Rules: No em dashes. No clinical jargon. Do not use phrases like "it seems like you struggle with" or "this suggests you may have" or "you may be experiencing." Write with specificity. The person should feel as though someone genuinely perceptive read what they wrote and responded to the real thing, not to a type they represent.`

    const message = await anthropic.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1200,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: `Here are ${name}'s responses:\n\n${answersText}`,
        },
      ],
    })

    const miniMap =
      message.content[0].type === 'text' ? message.content[0].text : ''

    // Record all guards before sending
    recordEmail(email)
    recordIP(ip)
    incrementDailyCount()

    // Send map to the visitor
    await transporter.sendMail({
      from: `"ReLoHu" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your Map Fragment',
      html: buildVisitorEmail(name, miniMap),
    })

    // Notify Dr. Gedalia
    await transporter.sendMail({
      from: `"ReLoHu" <${process.env.GMAIL_USER}>`,
      to: 'respectlovehumility@gmail.com',
      subject: `New Map Fragment: ${name} (${email})`,
      html: `
        <div style="font-family: sans-serif; max-width: 640px; margin: 0 auto; color: #1e293b;">
          <h2 style="color: #0f766e;">New Map Fragment Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Focus Area:</strong> ${focusArea} (${focusDescription})</p>
          <hr style="border-color: #e2e8f0; margin: 24px 0;" />
          <h3>Their Responses</h3>
          <pre style="white-space: pre-wrap; font-family: sans-serif; font-size: 14px; line-height: 1.7; background: #f8fafc; padding: 16px; border-radius: 8px;">${answersText}</pre>
          <hr style="border-color: #e2e8f0; margin: 24px 0;" />
          <h3>Generated Map Fragment</h3>
          <pre style="white-space: pre-wrap; font-family: Georgia, serif; font-size: 14px; line-height: 1.8; background: #f0fdf4; padding: 16px; border-radius: 8px;">${miniMap}</pre>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Mini-map error:', error)
    return NextResponse.json({ error: 'Failed to generate map' }, { status: 500 })
  }
}

function buildVisitorEmail(name: string, miniMap: string): string {
  const formatted = miniMap
    .replace(
      /^WHAT I HEARD$/m,
      '<h2 style="color:#0f766e;font-size:11px;letter-spacing:0.12em;font-weight:600;text-transform:uppercase;margin:32px 0 10px;">WHAT I HEARD</h2>'
    )
    .replace(
      /^WHAT I NOTICE$/m,
      '<h2 style="color:#0f766e;font-size:11px;letter-spacing:0.12em;font-weight:600;text-transform:uppercase;margin:32px 0 10px;">WHAT I NOTICE</h2>'
    )
    .replace(
      /^A QUESTION TO SIT WITH$/m,
      '<h2 style="color:#0f766e;font-size:11px;letter-spacing:0.12em;font-weight:600;text-transform:uppercase;margin:32px 0 10px;">A QUESTION TO SIT WITH</h2>'
    )

  const paragraphed = formatted
    .split('\n')
    .filter((l) => l.trim())
    .map((l) =>
      l.startsWith('<h2') ? l : `<p style="margin:0 0 14px;line-height:1.8;color:#334155;">${l}</p>`
    )
    .join('\n')

  return `
    <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1e293b;">
      <div style="background:#0f766e;padding:32px;border-radius:12px 12px 0 0;text-align:center;">
        <p style="color:#ccfbf1;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;margin:0 0 8px;font-family:monospace;">ReLoHu</p>
        <h1 style="color:white;margin:0;font-size:22px;font-weight:400;font-style:italic;">Your Map Fragment</h1>
      </div>
      <div style="background:#f8fafc;padding:40px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
        <p style="color:#94a3b8;font-size:13px;margin:0 0 28px;font-family:sans-serif;">For ${name}</p>
        <div style="font-size:15px;">
          ${paragraphed}
        </div>
        <div style="margin-top:40px;padding-top:28px;border-top:1px solid #e2e8f0;text-align:center;">
          <p style="font-size:13px;color:#94a3b8;margin:0 0 16px;font-family:sans-serif;">Ready to see the full picture?</p>
          <a href="https://relohu.com/founding-cohort"
             style="display:inline-block;background:#0f766e;color:white;padding:12px 28px;border-radius:100px;text-decoration:none;font-size:14px;font-family:sans-serif;">
            View the full Terrain Map offer
          </a>
        </div>
      </div>
    </div>
  `
}
