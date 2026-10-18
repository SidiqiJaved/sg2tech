import { PERIOD, total, netOf } from '@/content/fiDemoData'

const usd = (value: number) => `$${value.toLocaleString('en-US')}`

/** A readable overview using the same invented dataset as the detailed product views. */
export function FinancialSummary() {
  return (
    <div className="space-y-4 text-ink">
      <p className="t-label text-ink-mute">{PERIOD.label} · All locations</p>
      <dl className="grid gap-3 sm:grid-cols-3">
        {[
          ['Gross sales', total.gross],
          ['Platform fees', total.fees],
          ['Net payout', netOf(total)],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between gap-4 border-b border-line pb-3 sm:block"
          >
            <dt className="text-sm text-ink-soft">{label}</dt>
            <dd className="font-display text-2xl tabular-nums sm:mt-2">{usd(Number(value))}</dd>
          </div>
        ))}
      </dl>
      <p className="t-caption">
        Net payout is after discounts, refunds, adjustments and platform fees. It is not profit or a
        verified bank deposit. All figures are invented.
      </p>
    </div>
  )
}
