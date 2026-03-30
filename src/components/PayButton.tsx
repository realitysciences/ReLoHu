const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/00w7sE3lT0eo1OtaXMaMU01'

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
