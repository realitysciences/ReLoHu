'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'
import { useState } from 'react'
import React from 'react'

export default function SiteNav({ onBookClick, extra, hideBookButton }: { onBookClick?: () => void, extra?: React.ReactNode, hideBookButton?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToBooking = () => {
    if (onBookClick) {
      onBookClick()
    } else {
      window.open('https://calendly.com/relohu', '_blank')
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start">
          <img src="/relohu-logo.png" alt="ReLoHu" className="h-10 w-auto object-contain" style={{filter: 'brightness(0) saturate(100%) invert(18%) sepia(60%) saturate(600%) hue-rotate(200deg) brightness(90%)'}} />
          <span className="text-[9px] tracking-[0.3em] font-mono uppercase mt-0.5 pl-0.5" style={{color: '#1e3a6e'}}>Psychological Mapping</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/origins" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
            Origins
          </Link>
          <Link href="/uniqueness" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
            What Makes It Different
          </Link>
          <Link href="/testimonials" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
            Testimonials
          </Link>
          <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
            Blog
          </Link>
          <Link href="/founding-cohort" className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors font-semibold">
            Founding Cohort
          </Link>
          <Link href="/faq" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
            Contact
          </Link>
          {extra}
          {!hideBookButton && (
            <Button
              onClick={scrollToBooking}
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-6 shadow-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Call
            </Button>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-600 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-600 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-600 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-4">
          <Link href="/origins" className="text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
            Origins
          </Link>
          <Link href="/uniqueness" className="text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
            What Makes It Different
          </Link>
          <Link href="/testimonials" className="text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
            Testimonials
          </Link>
          <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/founding-cohort" className="text-sm font-semibold text-teal-600 hover:text-teal-700" onClick={() => setMenuOpen(false)}>
            Founding Cohort
          </Link>
          <Link href="/faq" className="text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Button onClick={() => { scrollToBooking(); setMenuOpen(false) }} className="bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full">
            <Calendar className="w-4 h-4 mr-2" />
            Book Call
          </Button>
        </div>
      )}
    </nav>
  )
}
