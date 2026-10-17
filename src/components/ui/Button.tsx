import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'copper' | 'ghost-dark'

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[0.95rem] font-medium leading-none transition-[background,color,box-shadow,transform] duration-300 active:translate-y-px'

const variants: Record<Variant, string> = {
  primary: 'bg-copper text-ink hover:bg-ink hover:text-white',
  copper: 'bg-copper text-ink hover:bg-white hover:text-ink',
  secondary: 'border border-ink/70 text-ink hover:bg-ink hover:text-ivory',
  'ghost-dark': 'border border-ivory/50 text-ivory hover:bg-ivory hover:text-ink',
}

interface Props {
  to: string
  children: ReactNode
  variant?: Variant
  arrow?: boolean
  className?: string
}

export function Button({ to, children, variant = 'primary', arrow = true, className }: Props) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      )}
    </Link>
  )
}

export function TextLink({
  to,
  children,
  className,
}: {
  to: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex items-center gap-2 font-medium text-copper-deep underline decoration-copper/40 underline-offset-[6px] hover:decoration-copper-deep',
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  )
}
