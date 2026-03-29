'use client'

import { useState } from 'react'

interface PayButtonProps {
  className?: string
  label?: string
}

export default function PayButton({ className, label = 'Pay $497 — Secure Your Spot' }: PayButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handlePay() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Something went wrong. Please try again.')
        setLoading(false)
      }
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <button
        onClick={handlePay}
        disabled={loading}
        className={className}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Redirecting to payment...
          </span>
        ) : label}
      </button>
      {error && <p className="text-red-500 text-xs text-center mt-2">{error}</p>}
    </div>
  )
}
