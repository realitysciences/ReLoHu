const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/dRm9AMaOl1is64J8PEaMU03'

interface PayButtonProps {
  className?: string
  label?: string
}

export default function PayButton({ className, label = 'Pay $497 — Secure Your Spot' }: PayButtonProps) {
  return (
    <a
      href={STRIPE_PAYMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
    </a>
  )
}
