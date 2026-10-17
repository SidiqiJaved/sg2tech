import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { StatusBadge, type Status } from '@/components/ui/StatusBadge'
import { ProductFrame } from './ProductFrame'

export interface FeatureTab {
  id: string
  label: string
  heading: string
  body: string
  status?: Status
  frameTitle: string
  visual: ReactNode
}

/** Accessible tabs (roving tabindex, arrow/Home/End keys) pairing a capability with its product view. */
export function FeatureTabs({ tabs, dark = false }: { tabs: FeatureTab[]; dark?: boolean }) {
  const [active, setActive] = useState(0)
  const baseId = useId()
  const refs = useRef<Array<HTMLButtonElement | null>>([])

  const move = (i: number) => {
    const next = (i + tabs.length) % tabs.length
    setActive(next)
    refs.current[next]?.focus()
  }
  const onKey = (e: KeyboardEvent, i: number) => {
    const target =
      e.key === 'ArrowDown' || e.key === 'ArrowRight'
        ? i + 1
        : e.key === 'ArrowUp' || e.key === 'ArrowLeft'
          ? i - 1
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? tabs.length - 1
              : null
    if (target === null) return
    e.preventDefault()
    move(target)
  }

  const current = tabs[active]
  if (!current) return null

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-14">
      <div>
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Product capabilities"
          className="flex flex-col"
        >
          {tabs.map((t, i) => {
            const selected = i === active
            return (
              <button
                key={t.id}
                ref={(el) => {
                  refs.current[i] = el
                }}
                role="tab"
                type="button"
                id={`${baseId}-tab-${t.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={cn(
                  'border-t py-5 text-left transition-colors first:border-t-0 lg:first:border-t',
                  dark ? 'border-line-dark' : 'border-line',
                  selected
                    ? dark
                      ? 'text-ivory'
                      : 'text-ink'
                    : dark
                      ? 'text-ivory/55 hover:text-ivory'
                      : 'text-ink-mute hover:text-ink',
                )}
              >
                <span className="flex items-baseline gap-4">
                  <span className="t-label text-[0.75rem] text-copper">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-xl tracking-tight sm:text-2xl">{t.label}</span>
                </span>
              </button>
            )
          })}
        </div>
        <div className={cn('border-t pt-6', dark ? 'border-line-dark' : 'border-line')}>
          <div aria-live="polite">
            <h3 className="t-h3 mb-3">{current.heading}</h3>
            <p className="t-body">{current.body}</p>
            {current.status && <StatusBadge status={current.status} className="mt-4" />}
          </div>
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${current.id}`}
        tabIndex={0}
        className="min-w-0 self-start"
      >
        <ProductFrame title={current.frameTitle}>{current.visual}</ProductFrame>
      </div>
    </div>
  )
}
