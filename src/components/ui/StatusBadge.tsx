import { cn } from '@/lib/cn'

/** Capability maturity. Keep honest: only mark `available` for shipped functionality. */
export type Status = 'available' | 'development' | 'planned' | 'illustrative'

const labels: Record<Status, string> = {
  available: 'Available now',
  development: 'In development',
  planned: 'Planned',
  illustrative: 'Illustrative',
}
const styles: Record<Status, string> = {
  available: 'bg-sage text-sage-deep',
  development: 'bg-copper-soft text-copper-ink',
  planned: 'border border-ink-mute/50 text-ink-soft',
  illustrative: 'border border-dashed border-ink-mute/60 text-ink-soft',
}

export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  return (
    <span
      className={cn(
        't-label inline-block rounded-full px-2.5 py-1 text-[0.68rem]',
        styles[status],
        className,
      )}
    >
      {labels[status]}
    </span>
  )
}
