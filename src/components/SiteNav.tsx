'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import React from 'react'

function DropdownMenu({ label, items }: {
  label: string
  items: { href: string; text: string; sub?: string }[]
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50"
          onMouseLeave={() => setOpen(false)}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 hover:bg-slate-50 transition-colors group"
            >
              <span className="text-sm font-medium text-slate-700 group-hover:text-teal-600 transition-colors block">
                {item.text}
              </span>
              {item.sub && (
                <span className="text-xs text-slate-400 mt-0.5 block">{item.sub}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function SiteNav({ onBookClick, extra, hideBookButton }: { onBookClick?: () => void, extra?: React.ReactNode, hideBookButton?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)

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
          <DropdownMenu
            label="About"
            items={[
              { href: '/origins', text: 'Origins', sub: 'Why Dr. David built this' },
              { href: '/uniqueness', text: 'The Difference', sub: 'What makes ReLoHu distinct' },
              { href: '/not-therapy', text: 'Not Therapy', sub: 'How it differs from treatment' },
              { href: '/evidence', text: 'The Evidence', sub: 'Peer-reviewed research base' },
            ]}
          />
          <Link href="/sessions" className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
            Get Mapped
          </Link>
          <DropdownMenu
            label="The Work"
            items={[
              { href: '/sample-report', text: 'Sample Report', sub: 'A real Terrain Map, anonymized' },
              { href: '/maps', text: 'The Maps', sub: 'The full map library' },
              { href: '/maps/public', text: 'Example Maps', sub: 'Public figures, mapped' },
              { href: '/practice', text: 'The Practice', sub: 'A lifelong cartographic practice' },
            ]}
          />
          <Link href="/testimonials" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
            Testimonials
          </Link>
          <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
            Blog
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
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-1">

          {/* About group */}
          <button
            className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-slate-500 uppercase tracking-widest text-left"
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            About
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
          </button>
          {aboutOpen && (
            <div className="flex flex-col gap-1 pl-3 mb-1">
              <Link href="/origins" className="py-2 text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
                Origins
              </Link>
              <Link href="/uniqueness" className="py-2 text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
                The Difference
              </Link>
              <Link href="/not-therapy" className="py-2 text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
                Not Therapy
              </Link>
              <Link href="/evidence" className="py-2 text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
                The Evidence
              </Link>
            </div>
          )}

          <Link href="/sessions" className="py-2.5 text-sm font-semibold text-teal-600 hover:text-teal-700" onClick={() => setMenuOpen(false)}>
            Get Mapped
          </Link>

          {/* The Work group */}
          <button
            className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-slate-500 uppercase tracking-widest text-left"
            onClick={() => setWorkOpen(!workOpen)}
          >
            The Work
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${workOpen ? 'rotate-180' : ''}`} />
          </button>
          {workOpen && (
            <div className="flex flex-col gap-1 pl-3 mb-1">
              <Link href="/sample-report" className="py-2 text-sm font-semibold text-teal-600 hover:text-teal-700" onClick={() => setMenuOpen(false)}>
                Sample Report
              </Link>
              <Link href="/maps" className="py-2 text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
                The Maps
              </Link>
              <Link href="/maps/public" className="py-2 text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
                Example Maps
              </Link>
              <Link href="/practice" className="py-2 text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
                The Practice
              </Link>
            </div>
          )}

          <div className="w-full h-px bg-slate-100 my-1" />

          <Link href="/testimonials" className="py-2.5 text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
            Testimonials
          </Link>
          <Link href="/blog" className="py-2.5 text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/faq" className="py-2.5 text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
          <Link href="/contact" className="py-2.5 text-sm font-medium text-slate-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <div className="pt-2">
            <Button onClick={() => { scrollToBooking(); setMenuOpen(false) }} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full">
              <Calendar className="w-4 h-4 mr-2" />
              Book Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
