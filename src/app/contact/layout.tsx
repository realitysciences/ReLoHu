import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach out to Dr. David directly, or book a free 15-minute orientation call to see if ReLoHu is right for you.',
  openGraph: {
    title: 'Contact | ReLoHu',
    description: 'Reach out to Dr. David directly, or book a free 15-minute orientation call to see if ReLoHu is right for you.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
