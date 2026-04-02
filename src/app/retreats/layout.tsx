import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retreats and Plant Medicine',
  description: 'Before you enter a plant medicine ceremony or retreat, know your terrain. ReLoHu gives you a clear map of your psychological landscape so you go in prepared.',
  openGraph: {
    title: 'Retreats and Plant Medicine | ReLoHu',
    description: 'Before you enter a plant medicine ceremony or retreat, know your terrain. ReLoHu gives you a clear map of your psychological landscape so you go in prepared.',
  },
}

export default function RetreatsLayout({ children }: { children: React.ReactNode }) {
  return children
}
