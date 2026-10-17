/**
 * Illustrative Franchise Management interface patterns.
 * Invented data, shown inside ProductFrame which labels it as illustrative.
 */
import { Camera, Check, CircleAlert, Clock } from 'lucide-react'
import { cn } from '@/lib/cn'

const usd = (n: number) => `$${n.toLocaleString('en-US')}`

export function InspectionChecklistMock() {
  const items = [
    { t: 'Handwashing stations stocked', s: 'pass' },
    { t: 'Walk-in cooler at required temperature', s: 'pass' },
    { t: 'Menu boards match current brand standard', s: 'fail', note: 'Outdated promo panel' },
    { t: 'Prep labels dated and legible', s: 'pass' },
    { t: 'Front-of-house cleanliness', s: 'fail', note: 'Photo attached' },
  ] as const
  return (
    <div className="space-y-3 text-ink">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-display text-lg tracking-tight">Quarterly inspection · Location 07</p>
        <p className="t-label text-[0.62rem] text-ink-mute">3 of 5 passed</p>
      </div>
      <ul className="divide-y divide-line/70 rounded border border-line">
        {items.map((i) => (
          <li key={i.t} className="flex items-start gap-3 p-3 text-[0.82rem]">
            <span
              className={cn(
                'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full',
                i.s === 'pass' ? 'bg-sage text-sage-deep' : 'bg-copper-soft text-copper-ink',
              )}
            >
              {i.s === 'pass' ? (
                <Check aria-hidden size={13} />
              ) : (
                <CircleAlert aria-hidden size={13} />
              )}
              <span className="sr-only">{i.s === 'pass' ? 'Passed' : 'Needs follow-up'}</span>
            </span>
            <span className="min-w-0 flex-1">
              <span className="block">{i.t}</span>
              {'note' in i && (
                <span className="mt-0.5 flex items-center gap-1.5 text-[0.72rem] text-ink-mute">
                  <Camera aria-hidden size={12} /> {i.note}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ComplianceStatusMock() {
  const rows = [
    { n: 'Region North', pct: 94, open: 2 },
    { n: 'Region Central', pct: 88, open: 5 },
    { n: 'Region South', pct: 76, open: 9 },
  ]
  return (
    <div className="space-y-3 text-ink">
      <p className="font-display text-lg tracking-tight">Standards compliance by region</p>
      <ul className="space-y-3">
        {rows.map((r) => (
          <li key={r.n} className="text-[0.82rem]">
            <div className="mb-1 flex justify-between">
              <span>{r.n}</span>
              <span className="tabular-nums text-ink-soft">
                {r.pct}% · {r.open} open actions
              </span>
            </div>
            <div className="h-2.5 rounded-sm bg-ivory">
              <div className="h-2.5 rounded-sm bg-sage-deep" style={{ width: `${r.pct}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function RoyaltyViewMock() {
  const rows = [
    { n: 'Location 01', sales: 61200, rate: 6 },
    { n: 'Location 02', sales: 48750, rate: 6 },
    { n: 'Location 03', sales: 39400, rate: 5 },
  ]
  const total = rows.reduce((a, r) => a + (r.sales * r.rate) / 100, 0)
  return (
    <div className="space-y-3 text-ink">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-display text-lg tracking-tight">Royalty statement · March</p>
        <p className="t-label text-[0.62rem] text-ink-mute">Draft</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[24rem] text-left text-[0.8rem] tabular-nums">
          <caption className="sr-only">Illustrative royalty calculation by location</caption>
          <thead>
            <tr className="t-label border-b border-line text-[0.62rem] text-ink-mute">
              <th className="py-2 font-medium">Location</th>
              <th className="py-2 text-right font-medium">Reported sales</th>
              <th className="py-2 text-right font-medium">Rate</th>
              <th className="py-2 text-right font-medium">Royalty</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.n} className="border-b border-line/60">
                <td className="py-2.5">{r.n}</td>
                <td className="py-2.5 text-right">{usd(r.sales)}</td>
                <td className="py-2.5 text-right">{r.rate}%</td>
                <td className="py-2.5 text-right">{usd((r.sales * r.rate) / 100)}</td>
              </tr>
            ))}
            <tr className="font-medium">
              <td className="pt-3" colSpan={3}>
                Total due
              </td>
              <td className="pt-3 text-right">{usd(total)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function NetworkOverviewMock() {
  const locs = [
    { n: 'Location 01', st: 'On standard' },
    { n: 'Location 02', st: 'On standard' },
    { n: 'Location 03', st: 'Follow-up due' },
    { n: 'Location 04', st: 'On standard' },
    { n: 'Location 05', st: 'Inspection scheduled' },
    { n: 'Location 06', st: 'Follow-up due' },
  ]
  return (
    <div className="space-y-3 text-ink">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-display text-lg tracking-tight">Network overview</p>
        <p className="t-label text-[0.62rem] text-ink-mute">6 locations</p>
      </div>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {locs.map((l) => (
          <li
            key={l.n}
            className="flex items-center justify-between gap-2 rounded border border-line bg-ivory/60 px-3 py-2.5 text-[0.8rem]"
          >
            <span>{l.n}</span>
            <span
              className={cn(
                'flex items-center gap-1 rounded px-1.5 py-0.5 text-[0.7rem]',
                l.st === 'On standard' && 'bg-sage text-sage-deep',
                l.st === 'Follow-up due' && 'bg-copper-soft text-copper-ink',
                l.st === 'Inspection scheduled' && 'border border-line text-ink-soft',
              )}
            >
              {l.st === 'Inspection scheduled' && <Clock aria-hidden size={11} />}
              {l.st}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
