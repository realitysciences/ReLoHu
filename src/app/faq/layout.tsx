import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Common questions about ReLoHu: how it works, what you receive, how it differs from therapy, pricing, and whether it is right for you.',
  openGraph: {
    title: 'FAQ | ReLoHu',
    description: 'Common questions about ReLoHu: how it works, what you receive, how it differs from therapy, pricing, and whether it is right for you.',
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
