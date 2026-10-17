import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Tone = 'ivory' | 'deep' | 'ink' | 'sage' | 'paper'
const tones: Record<Tone, string> = {
  ivory: 'bg-ivory',
  deep: 'bg-ivory-deep',
  paper: 'bg-paper',
  sage: 'bg-sage',
  ink: 'bg-ink text-ivory on-dark',
}

export function Section({
  tone = 'ivory',
  id,
  labelledBy,
  className,
  children,
}: {
  tone?: Tone
  id?: string
  labelledBy?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('section-y relative', tones[tone], className)}
    >
      <div className="container-page">{children}</div>
    </section>
  )
}
