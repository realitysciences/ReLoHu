'use client'

import { Calendar } from 'lucide-react'

export default function FloatingCTA() {
  return (
    <a
      href="https://calendly.com/relohu"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-full px-5 py-3 shadow-lg hover:shadow-teal-200 hover:shadow-xl transition-all duration-300 group"
    >
      <Calendar className="w-4 h-4 shrink-0" />
      <span className="whitespace-nowrap">Book a Call</span>
    </a>
  )
}
