import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/** `soft` is the restrained supporting surface; `ink` is reserved for product stages and key statements. */
type Tone = 'paper' | 'soft' | 'ink'
const tones: Record<Tone, string> = {
  paper: 'bg-paper',
  soft: 'bg-ivory',
  ink: 'bg-ink text-ivory on-dark',
}

export function Section({
  tone = 'paper',
  divider = false,
  id,
  labelledBy,
  className,
  children,
}: {
  tone?: Tone
  /** Hairline on top. Use when the previous section has the same background. */
  divider?: boolean
  id?: string
  labelledBy?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        'section-y relative',
        tones[tone],
        divider && 'border-t border-line',
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  )
}
