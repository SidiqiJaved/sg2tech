/**
 * Illustrative Financial Intelligence interface patterns.
 * All numbers are invented for illustration and are labeled as such by ProductFrame.
 */
import { cn } from '@/lib/cn'

const usd = (n: number) => `$${n.toLocaleString('en-US')}`

function Kpi({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="min-w-0 rounded border border-line bg-ivory/60 p-3">
      <p className="t-label truncate text-[0.62rem] text-ink-mute">{label}</p>
      <p className="mt-1 font-display text-xl tabular-nums tracking-tight sm:text-2xl">{value}</p>
      {note && <p className="mt-0.5 text-[0.7rem] text-ink-mute">{note}</p>}
    </div>
  )
}

const weeks = [38, 41, 40, 44, 47, 45, 49, 52, 50, 54, 53, 58]
const nets = [27, 29, 29, 31, 33, 32, 35, 37, 35, 38, 38, 41]

function TrendChart() {
  const w = 480
  const h = 150
  const max = 64
  const x = (i: number) => 8 + (i * (w - 16)) / (weeks.length - 1)
  const y = (v: number) => h - 14 - ((v - 20) / (max - 20)) * (h - 28)
  const path = (arr: number[]) =>
    arr.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label="Illustrative 12-week trend of gross sales and net payout"
      className="h-auto w-full"
    >
      {[0, 1, 2, 3].map((g) => (
        <line
          key={g}
          x1="0"
          x2={w}
          y1={14 + g * 36}
          y2={14 + g * 36}
          stroke="#dbd5c6"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
      ))}
      <path d={path(weeks)} fill="none" stroke="#25282c" strokeWidth="2" />
      <path d={path(nets)} fill="none" stroke="#f26a1b" strokeWidth="2.5" />
      <circle cx={x(11)} cy={y(weeks[11] ?? 0)} r="3.5" fill="#25282c" />
      <circle cx={x(11)} cy={y(nets[11] ?? 0)} r="3.5" fill="#f26a1b" />
    </svg>
  )
}

export function RevenueOverviewMock({ compact = false }: { compact?: boolean }) {
  const rows = [
    ['Location 01', 18420, 13310],
    ['Location 02', 15960, 11620],
    ['Location 03', 13820, 10550],
  ] as const
  return (
    <div className="space-y-4 text-ink">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-display text-lg tracking-tight">Revenue overview</p>
        <p className="t-label text-[0.62rem] text-ink-mute">Last 12 weeks · All locations</p>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <Kpi label="Gross sales" value={usd(48200)} />
        <Kpi label="Platform fees" value={usd(8980)} />
        <Kpi label="Net payout" value={usd(35480)} />
      </div>
      <div className="rounded border border-line p-3">
        <div className="mb-2 flex items-center gap-4 text-[0.7rem] text-ink-soft">
          <span className="flex items-center gap-1.5">
            <i className="inline-block h-0.5 w-4 bg-ink" /> Gross sales
          </span>
          <span className="flex items-center gap-1.5">
            <i className="inline-block h-[3px] w-4 bg-copper" /> Net payout
          </span>
        </div>
        <TrendChart />
      </div>
      {!compact && (
        <table className="w-full text-left text-[0.8rem] tabular-nums">
          <caption className="sr-only">Illustrative gross and net by location</caption>
          <thead>
            <tr className="t-label border-b border-line text-[0.62rem] text-ink-mute">
              <th className="py-2 font-medium">Location</th>
              <th className="py-2 text-right font-medium">Gross</th>
              <th className="py-2 text-right font-medium">Net</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, g, n]) => (
              <tr key={name} className="border-b border-line/60">
                <td className="py-2">{name}</td>
                <td className="py-2 text-right">{usd(g)}</td>
                <td className="py-2 text-right">{usd(n)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export function GrossToNetMock() {
  const steps = [
    { label: 'Gross sales', value: 48200, type: 'total' },
    { label: 'Discounts & promotions', value: -3100, type: 'less' },
    { label: 'Refunds & adjustments', value: -640, type: 'less' },
    { label: 'Platform commissions', value: -7830, type: 'less' },
    { label: 'Marketing & other fees', value: -1150, type: 'less' },
    { label: 'Net payout', value: 35480, type: 'total' },
  ] as const
  const max = 48200
  let running = 0
  return (
    <div className="space-y-3 text-ink">
      <p className="font-display text-lg tracking-tight">Gross to net, one platform</p>
      <ul className="space-y-2.5">
        {steps.map((s) => {
          const start = s.type === 'total' ? 0 : running + s.value
          const width = (Math.abs(s.value) / max) * 100
          const left = s.type === 'total' ? 0 : (start / max) * 100
          if (s.type === 'total') running = s.value
          else running += s.value
          return (
            <li
              key={s.label}
              className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1.5 text-[0.8rem] sm:grid-cols-[minmax(0,9.5rem)_1fr_4.75rem]"
            >
              <span className="truncate text-ink-soft">{s.label}</span>
              <span className="relative order-3 col-span-2 h-5 rounded-sm bg-ivory sm:order-none sm:col-span-1">
                <span
                  className={cn(
                    'absolute top-0 h-5 rounded-sm',
                    s.type === 'total' ? 'bg-ink' : 'bg-copper/80',
                  )}
                  style={{ left: `${left}%`, width: `${width}%` }}
                />
              </span>
              <span className="text-right tabular-nums">
                {s.value < 0 ? `−${usd(-s.value)}` : usd(s.value)}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function PayoutVisibilityMock() {
  const rows = [
    { src: 'Delivery platform A', expected: 14210, received: 14210, note: 'Matches' },
    { src: 'Delivery platform B', expected: 9840, received: 9402, note: 'Review' },
    { src: 'Direct online orders', expected: 6320, received: 6320, note: 'Matches' },
    { src: 'Delivery platform C', expected: 5110, received: 4765, note: 'Review' },
  ]
  return (
    <div className="space-y-3 text-ink">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-display text-lg tracking-tight">Payouts: reported vs. platform payout</p>
        <p className="t-label text-[0.62rem] text-ink-mute">Week 12</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[26rem] text-left text-[0.8rem] tabular-nums">
          <caption className="sr-only">
            Illustrative comparison of reported sales and platform payout by source
          </caption>
          <thead>
            <tr className="t-label border-b border-line text-[0.62rem] text-ink-mute">
              <th className="py-2 font-medium">Source</th>
              <th className="py-2 text-right font-medium">Expected</th>
              <th className="py-2 text-right font-medium">Payout</th>
              <th className="py-2 text-right font-medium">Difference</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const diff = r.received - r.expected
              return (
                <tr key={r.src} className="border-b border-line/60">
                  <td className="py-2.5 pr-2">{r.src}</td>
                  <td className="py-2.5 text-right">{usd(r.expected)}</td>
                  <td className="py-2.5 text-right">{usd(r.received)}</td>
                  <td className="py-2.5 text-right">
                    <span
                      className={cn(
                        'inline-block rounded px-1.5 py-0.5 text-[0.72rem]',
                        diff === 0 ? 'bg-sage text-sage-deep' : 'bg-copper-soft text-copper-ink',
                      )}
                    >
                      {diff === 0 ? 'Matches' : `−${usd(-diff)}`}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function LocationComparisonMock() {
  const locs = [
    { n: 'Location 01', v: 92 },
    { n: 'Location 02', v: 81 },
    { n: 'Location 03', v: 70 },
    { n: 'Location 04', v: 58 },
    { n: 'Location 05', v: 49 },
  ]
  return (
    <div className="space-y-3 text-ink">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-display text-lg tracking-tight">Net payout by location</p>
        <p className="t-label text-[0.62rem] text-ink-mute">Indexed to top location</p>
      </div>
      <ul className="space-y-2.5">
        {locs.map((l) => (
          <li
            key={l.n}
            className="grid grid-cols-[5.5rem_1fr_2.25rem] items-center gap-3 text-[0.8rem]"
          >
            <span className="text-ink-soft">{l.n}</span>
            <span className="h-4 rounded-sm bg-ivory">
              <span className="block h-4 rounded-sm bg-sage-deep" style={{ width: `${l.v}%` }} />
            </span>
            <span className="text-right tabular-nums">{l.v}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ChannelMixMock() {
  const channels = [
    { n: 'Dine-in & counter (POS)', v: 41, c: 'bg-ink' },
    { n: 'Delivery platform A', v: 24, c: 'bg-copper' },
    { n: 'Delivery platform B', v: 17, c: 'bg-sage-deep' },
    { n: 'Direct online orders', v: 18, c: 'bg-copper-soft' },
  ]
  return (
    <div className="space-y-4 text-ink">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-display text-lg tracking-tight">Sales by channel</p>
        <p className="t-label text-[0.62rem] text-ink-mute">Share of gross sales</p>
      </div>
      <div
        className="flex h-9 overflow-hidden rounded-sm"
        role="img"
        aria-label="Illustrative share of gross sales by channel"
      >
        {channels.map((c) => (
          <span key={c.n} className={c.c} style={{ width: `${c.v}%` }} />
        ))}
      </div>
      <ul className="space-y-2 text-[0.8rem]">
        {channels.map((c) => (
          <li
            key={c.n}
            className="flex items-center justify-between gap-3 border-b border-line/60 pb-2"
          >
            <span className="flex items-center gap-2">
              <i className={`inline-block h-2.5 w-2.5 rounded-sm ${c.c}`} />
              {c.n}
            </span>
            <span className="tabular-nums text-ink-soft">{c.v}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const shellNav = ['Overview', 'Revenue', 'Statements', 'Payouts', 'Locations']

/** Application shell with sidebar. Generic labels only; all figures are invented. */
function AppShell({ active, children }: { active: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] overflow-hidden rounded border border-line bg-ivory/50 text-ink sm:grid-cols-[9rem_minmax(0,1fr)]">
      <aside className="hidden border-r border-line bg-paper p-3 sm:block">
        <p className="mb-4 flex items-center gap-2 font-display text-[0.95rem] tracking-tight">
          <i className="inline-block h-4 w-4 rounded-sm bg-copper" /> Financial Intelligence
        </p>
        <ul className="space-y-0.5 text-[0.75rem]">
          {shellNav.map((n) => (
            <li
              key={n}
              className={cn(
                'rounded px-2 py-1.5',
                n === active ? 'bg-copper-soft font-medium text-copper-ink' : 'text-ink-soft',
              )}
            >
              {n}
            </li>
          ))}
        </ul>
      </aside>
      <div className="min-w-0 space-y-3 p-3 sm:p-4">{children}</div>
    </div>
  )
}

const series = [
  [14, 17, 19, 22, 24, 23, 27, 30, 29, 33, 34, 38],
  [11, 13, 15, 16, 19, 18, 21, 23, 22, 25, 27, 29],
  [8, 9, 11, 12, 13, 14, 15, 17, 17, 19, 20, 22],
  [5, 6, 7, 7, 9, 9, 10, 11, 12, 12, 13, 15],
]
const seriesColors = ['#f26a1b', '#25282c', '#8a8f96', '#fbb27d']

function LocationLines() {
  const w = 560
  const h = 170
  const x = (i: number) => 10 + (i * (w - 20)) / 11
  const y = (v: number) => h - 16 - (v / 40) * (h - 30)
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label="Illustrative 12-week net revenue trend for four locations"
      className="h-auto w-full"
    >
      {[0, 1, 2, 3].map((g) => (
        <line
          key={g}
          x1="0"
          x2={w}
          y1={14 + g * 42}
          y2={14 + g * 42}
          stroke="#dbd5c6"
          strokeDasharray="2 4"
        />
      ))}
      {series.map((s, k) => (
        <path
          key={k}
          d={s.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')}
          fill="none"
          stroke={seriesColors[k]}
          strokeWidth={k === 0 ? 3 : 2}
          strokeLinejoin="round"
        />
      ))}
    </svg>
  )
}

export function DashboardMock() {
  return (
    <AppShell active="Overview">
      <div className="grid grid-cols-3 gap-2">
        <Kpi label="Gross sales" value={usd(184200)} note="POS + delivery platforms" />
        <Kpi label="Platform fees" value={usd(31480)} note="17.1% of gross" />
        <Kpi label="Net payout" value={usd(139650)} note="+5.4% vs prior period" />
      </div>
      <div className="rounded border border-line bg-paper p-3">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <p className="font-display text-[0.95rem] tracking-tight">Net revenue by location</p>
          <span className="flex flex-wrap gap-x-3 text-[0.65rem] text-ink-soft">
            {seriesColors.map((c, i) => (
              <span key={c} className="flex items-center gap-1">
                <i className="inline-block h-2 w-2 rounded-full" style={{ background: c }} />
                Location 0{i + 1}
              </span>
            ))}
          </span>
        </div>
        <LocationLines />
      </div>
    </AppShell>
  )
}

export function StatementMock() {
  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5']
  const rows: Array<{ n: string; v: number[]; bold?: boolean; neg?: boolean; tick: string }> = [
    { n: 'Total revenue', v: [5905, 6129, 6378, 5654, 5124], bold: true, tick: 'bg-ink' },
    { n: 'Delivery platform A', v: [2163, 2123, 2471, 1664, 1571], tick: 'bg-copper' },
    { n: 'Delivery platform B', v: [1928, 1669, 1987, 2088, 1479], tick: 'bg-ink-mute' },
    { n: 'In-store sales (POS)', v: [1014, 1324, 1232, 1294, 1491], tick: 'bg-copper-soft' },
    { n: 'Platform fees', v: [-620, -613, -611, -598, -478], neg: true, tick: 'bg-line' },
    { n: 'Net revenue', v: [5285, 5516, 5767, 5056, 4646], bold: true, tick: 'bg-ink' },
  ]
  const fmt = (n: number) => (n < 0 ? `−${usd(-n)}` : usd(n))
  return (
    <AppShell active="Statements">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-display text-base tracking-tight">Statement</p>
        <p className="t-label text-[0.6rem] text-ink-mute">All locations · POS + delivery</p>
      </div>
      <div className="overflow-x-auto rounded border border-line bg-paper">
        <table className="w-full min-w-[30rem] text-left text-[0.72rem] tabular-nums">
          <caption className="sr-only">Illustrative statement by day and channel</caption>
          <thead>
            <tr className="t-label border-b border-line text-[0.58rem] text-ink-mute">
              <th className="px-3 py-2 font-medium">Category</th>
              {days.map((d) => (
                <th key={d} className="px-2 py-2 text-right font-medium">
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.n} className="border-b border-line/60 last:border-0">
                <td className={cn('px-3 py-2', r.bold && 'font-medium')}>
                  <i className={cn('mr-2 inline-block h-3 w-0.5 align-middle', r.tick)} />
                  {r.n}
                </td>
                {r.v.map((v, i) => (
                  <td
                    key={i}
                    className={cn(
                      'px-2 py-2 text-right',
                      r.bold && 'font-medium',
                      r.neg && 'text-ink-soft',
                    )}
                  >
                    {fmt(v)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  )
}

/** Illustrative natural-language analysis experience. Invented question, figures and locations. */
export function AskYourDataMock() {
  const drivers = [
    { n: 'Platform fees', v: -412 },
    { n: 'Promotions', v: -188 },
    { n: 'Refunds', v: -96 },
  ]
  const max = 412
  return (
    <div className="space-y-4 text-ink">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-display text-lg tracking-tight">Ask your financial data</p>
        <p className="t-label text-[0.62rem] text-ink-mute">Natural-language analysis</p>
      </div>
      <div className="ml-auto max-w-[88%] rounded-lg rounded-br-sm bg-ink px-4 py-3 text-[0.85rem] text-ivory">
        Why did net payout fall at Location 03 last week?
      </div>
      <div className="max-w-[96%] rounded-lg rounded-bl-sm border border-line bg-ivory/60 p-4 text-[0.85rem]">
        <p>
          Net payout at Location 03 was <strong className="tabular-nums">$9,840</strong>, down{' '}
          <strong className="tabular-nums">8.1%</strong> on the prior week. Most of the change comes
          from higher platform fees and promotions, not from a drop in sales.
        </p>
        <ul className="mt-4 space-y-2">
          {drivers.map((d) => (
            <li
              key={d.n}
              className="grid grid-cols-[6.5rem_1fr_3.25rem] items-center gap-3 text-[0.75rem]"
            >
              <span className="text-ink-soft">{d.n}</span>
              <span className="h-2.5 rounded-sm bg-paper">
                <span
                  className="block h-2.5 rounded-sm bg-copper"
                  style={{ width: `${(-d.v / max) * 100}%` }}
                />
              </span>
              <span className="text-right tabular-nums">−{usd(-d.v)}</span>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex flex-wrap gap-2 text-[0.72rem] text-ink-soft">
        {['Compare with Location 01', 'Show by delivery platform', 'Summarize the month'].map(
          (q) => (
            <li key={q} className="rounded-full border border-line bg-paper px-3 py-1.5">
              {q}
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

const spark = (vals: number[], color: string) => {
  const w = 96
  const h = 28
  const lo = Math.min(...vals)
  const hi = Math.max(...vals)
  const pts = vals
    .map(
      (v, i) =>
        `${((i * w) / (vals.length - 1)).toFixed(1)},${(h - 3 - ((v - lo) / (hi - lo || 1)) * (h - 6)).toFixed(1)}`,
    )
    .join(' ')
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-7 w-24" aria-hidden>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

/** Illustrative anomaly insights. Invented locations and figures; for review, not verdicts. */
export function AnomalyInsightsMock() {
  const items = [
    {
      t: 'Platform fee rate above its usual range',
      d: 'Location 02 · 21.4% of gross this week, against a typical 17–18%.',
      s: [17, 17.5, 18, 17.2, 17.8, 18, 19.5, 21.4],
    },
    {
      t: 'Refunds higher than usual',
      d: 'Delivery platform B · refund volume 2.3× the 8-week average.',
      s: [3, 4, 3, 5, 4, 4, 6, 9],
    },
    {
      t: 'Payout lower than reported sales imply',
      d: 'Delivery platform C · $345 below expected for the week.',
      s: [0, 0, 20, 0, 10, 0, 80, 345],
    },
  ]
  return (
    <div className="space-y-3 text-ink">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-display text-lg tracking-tight">Insights for review</p>
        <p className="t-label text-[0.62rem] text-ink-mute">Anomaly detection · Week 12</p>
      </div>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li
            key={it.t}
            className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 rounded border border-line bg-ivory/60 p-3.5"
          >
            <span>
              <span className="block text-[0.85rem] font-medium">{it.t}</span>
              <span className="t-caption block text-[0.75rem]">{it.d}</span>
            </span>
            {spark(it.s, '#f26a1b')}
            <span className="col-span-2 mt-1 inline-flex w-fit rounded-full bg-copper-soft px-2.5 py-0.5 text-[0.68rem] text-copper-ink">
              For review
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
