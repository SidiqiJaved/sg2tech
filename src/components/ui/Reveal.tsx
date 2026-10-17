import type { ElementType, ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/cn'

interface Props {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
}

/** Entrance animation that degrades to fully visible content. */
export function Reveal({ children, as: Tag = 'div', delay = 0, className }: Props) {
  const { ref, armed, visible } = useReveal<HTMLElement>()
  return (
    <Tag
      ref={ref}
      className={cn(armed && 'reveal', className)}
      data-visible={armed ? visible : undefined}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
