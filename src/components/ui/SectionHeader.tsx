import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Reveal } from './Reveal'

interface Props {
  eyebrow: string
  index?: string
  title: ReactNode
  lead?: ReactNode
  as?: 'h1' | 'h2'
  className?: string
}

/** Editorial section opener: numbered eyebrow, large heading, optional lead. */
export function SectionHeader({ eyebrow, index, title, lead, as: Tag = 'h2', className }: Props) {
  return (
    <Reveal className={cn('max-w-4xl', className)}>
      <p className="t-label mb-6 flex items-center gap-3 text-copper-deep">
        {index && <span aria-hidden>{index}</span>}
        {index && <span aria-hidden className="h-px w-8 bg-copper" />}
        <span>{eyebrow}</span>
      </p>
      <Tag className={Tag === 'h1' ? 't-h1' : 't-h2'}>{title}</Tag>
      {lead && <p className="t-lead mt-6 max-w-2xl">{lead}</p>}
    </Reveal>
  )
}
