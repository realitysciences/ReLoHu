import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Makes ReLoHu Different',
  description: 'ReLoHu is not a quiz, a questionnaire, or a therapy intake. It is a private one-on-one conversation with Dr. David, analyzed by proprietary AI, that produces a portrait no other process can.',
  openGraph: {
    title: 'What Makes ReLoHu Different | ReLoHu',
    description: 'ReLoHu is not a quiz, a questionnaire, or a therapy intake. It is a private one-on-one conversation with Dr. David, analyzed by proprietary AI, that produces a portrait no other process can.',
  },
}

export default function UniquenessLayout({ children }: { children: React.ReactNode }) {
  return children
}
