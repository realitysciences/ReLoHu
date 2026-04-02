import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gift a Session',
  description: 'Give someone a ReLoHu session. The most meaningful thing you can offer someone is being truly known. This is that gift.',
  openGraph: {
    title: 'Gift a Session | ReLoHu',
    description: 'Give someone a ReLoHu session. The most meaningful thing you can offer someone is being truly known. This is that gift.',
  },
}

export default function GiftLayout({ children }: { children: React.ReactNode }) {
  return children
}
