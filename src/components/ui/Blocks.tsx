import type { ReactNode } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Button } from './Button'
import { Reveal } from './Reveal'
import { StatusBadge, type Status } from './StatusBadge'

/** Alternating text + visual row used for product workflows. */
export function FeatureRow({
  index,
  eyebrow,
  title,
  children,
  visual,
  status,
  flip = false,
}: {
  index: string
  eyebrow: string
  title: string
  children: ReactNode
  visual?: ReactNode
  status?: Status
  flip?: boolean
}) {
  return (
    <Reveal className="rule-tick grid gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
      <div className={cn('lg:col-span-5', flip && 'lg:order-2 lg:col-start-8')}>
        <p className="t-label mb-4 flex items-center gap-3 text-copper-deep">
          <span>{index}</span>
          <span aria-hidden className="h-px w-8 bg-copper" />
          <span>{eyebrow}</span>
        </p>
        <h3 className="t-h2">{title}</h3>
        <div className="t-body mt-5 space-y-4">{children}</div>
        {status && <StatusBadge status={status} className="mt-6" />}
      </div>
      {visual && (
        <div
          className={cn(
            'min-w-0 lg:col-span-7 lg:self-center',
            flip && 'lg:order-1 lg:col-start-1',
          )}
        >
          {visual}
        </div>
      )}
    </Reveal>
  )
}

/** Native <details> accordion: accessible and works without JavaScript. */
export function Faq({ items }: { items: Array<{ q: string; a: ReactNode }> }) {
  return (
    <div className="border-t border-ink/80">
      {items.map((it) => (
        <details key={it.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl tracking-tight marker:hidden [&::-webkit-details-marker]:hidden sm:text-2xl">
            {it.q}
            <Plus
              aria-hidden
              size={22}
              className="shrink-0 text-copper-deep transition-transform duration-300 group-open:rotate-45"
            />
          </summary>
          <div className="t-body max-w-3xl space-y-3 pb-8">{it.a}</div>
        </details>
      ))}
    </div>
  )
}

/** Page-closing call to action. */
export function CtaBand({
  title,
  primary,
  secondary,
}: {
  title: ReactNode
  primary: { label: string; to: string }
  secondary?: { label: string; to: string }
}) {
  return (
    <section className="on-dark bg-ink py-12 text-ivory sm:py-20">
      <div className="container-page">
        <Reveal>
          <h2 className="t-h1 max-w-4xl">{title}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to={primary.to} variant="copper">
              {primary.label}
            </Button>
            {secondary && (
              <Button to={secondary.to} variant="ghost-dark">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/** Opening block for interior pages. */
export function PageIntro({
  eyebrow,
  title,
  lead,
  actions,
  aside,
  footer,
}: {
  eyebrow: string
  title: ReactNode
  lead: ReactNode
  actions?: ReactNode
  aside?: ReactNode
  footer?: ReactNode
}) {
  return (
    <section className="pb-10 pt-8 sm:py-16 lg:pb-20">
      <div
        className={cn(
          'container-page grid gap-12',
          !!aside && 'lg:grid-cols-12 lg:items-end lg:gap-16',
        )}
      >
        <div className={cn(!!aside && 'lg:col-span-7')}>
          <p className="t-label mb-5 flex items-center gap-3 text-copper-deep">
            <span aria-hidden className="h-px w-8 bg-copper" />
            {eyebrow}
          </p>
          <h1 className="t-h1">{title}</h1>
          <p className="t-lead mt-5 max-w-2xl">{lead}</p>
          {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {aside && <div className="min-w-0 lg:col-span-5">{aside}</div>}
      </div>
      {footer && <div className="container-page mt-12 lg:mt-16">{footer}</div>}
    </section>
  )
}
