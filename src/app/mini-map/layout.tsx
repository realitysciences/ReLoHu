import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mini Map',
  description: 'A free five-question experience that generates a short written portrait using the same AI methodology behind every full ReLoHu Terrain Map.',
  openGraph: {
    title: 'Mini Map | ReLoHu',
    description: 'A free five-question experience that generates a short written portrait using the same AI methodology behind every full ReLoHu Terrain Map.',
  },
}

export default function MiniMapLayout({ children }: { children: React.ReactNode }) {
  return children
}
