import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Origins',
  description: 'Why Dr. David built ReLoHu: a decade of searching for a genuine witness, unable to find one, and eventually building the thing that should have existed.',
  openGraph: {
    title: 'Origins | ReLoHu',
    description: 'Why Dr. David built ReLoHu: a decade of searching for a genuine witness, unable to find one, and eventually building the thing that should have existed.',
  },
}

export default function OriginsLayout({ children }: { children: React.ReactNode }) {
  return children
}
