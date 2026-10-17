/**
 * Illustrative Financial Intelligence interface patterns.
 *
 * Every figure comes from the shared dataset in `@/content/fiDemoData` (all invented), and every
 * total, rate and difference is derived there, so the panels always agree with one another.
 * ProductFrame labels the content as illustrative.
 */
import { cn } from '@/lib/cn'
import {
  PERIOD,
  askDrivers,
  askLocation,
  byChannel,
  byLocation,
  cell,
  change,
  channels,
  deliveryPlatforms,
  insights,
  locations,
  netOf,
  priorTotal,
  rate,
  reconciliation,
  total,
  weekly,
  type Amounts,
  type LocationId,
  type ReconStatus,
} from '@/content/fiDemoData'

// --- formatting -------------------------------------------------------------------------------

const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`
/** Currency with a true minus sign, for deductions and differences. */
const usdSigned = (n: number) => (n < 0 ? `−${usd(-n)}` : n > 0 ? `+${usd(n)}` : usd(0))
const deduct = (n: number) => (n === 0 ? '—' : `−${usd(n)}`)
const pct = (n: number, digits = 1) => `${(n * 100).toFixed(digits)}%`
const pctSigned = (n: number) => `${n < 0 ? '−' : '+'}${Math.abs(n * 100).toFixed(1)}%`

const netTotal = netOf(total)
const locationName = (id: string) => locations.find((l) => l.id === id)?.name ?? id

// --- shared pieces ----------------------------------------------------------------------------

/** Panel title with the reporting period and scope the figures describe. */
function PanelHead({ title, scope }: { title: string; scope: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
      <p className="font-display text-lg tracking-tight">{title}</p>
      <p className="t-label text-[0.75rem] text-ink-mute">{scope}</p>
    </div>
  )
}

function Kpi({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="min-w-0 rounded border border-line bg-ivory/60 p-3">
      <p className="t-label truncate text-[0.75rem] text-ink-mute">{label}</p>
      <p className="mt-1 font-display text-xl tabular-nums tracking-tight sm:text-2xl">{value}</p>
      {note && <p className="mt-0.5 text-[0.75rem] tabular-nums text-ink-mute">{note}</p>}
    </div>
  )
}

const STATUS: Record<ReconStatus, { label: string; cls: string }> = {
  matched: { label: 'Matched', cls: 'bg-sage text-sage-deep' },
  timing: { label: 'Timing', cls: 'border border-line bg-ivory text-ink-soft' },
  review: { label: 'For review', cls: 'bg-copper-soft text-copper-ink' },
}

function StatusChip({ status }: { status: ReconStatus }) {
  return (
    <span
      className={cn(
        'inline-block whitespace-nowrap rounded px-1.5 py-0.5 text-[0.75rem]',
        STATUS[status].cls,
      )}
    >
      {STATUS[status].label}
    </span>
  )
}

const DEFINITION =
  'Net payout is gross sales less discounts, refunds & adjustments and platform fees, as reported by each source. It is not profit or a verified bank deposit. All figures are invented.'

/** Reminder placed wherever fee percentages appear. Platform labels are deliberately generic. */
const RATES_NOTE =
  'All figures are invented. Fee percentages are hypothetical examples, not the rates of any specific delivery platform or payment provider.'

function Footnote({ children }: { children: React.ReactNode }) {
  return <p className="t-caption text-[0.75rem] leading-snug">{children}</p>
}

// --- trend chart ------------------------------------------------------------------------------

function TrendChart() {
  const w = 400
  const h = 168
  const left = 44
  const right = 8
  const top = 10
  const bottom = 24
  const lo = 50000
  const hi = 80000
  const x = (i: number) => left + (i * (w - left - right)) / (weekly.length - 1)
  const y = (v: number) => top + (1 - (v - lo) / (hi - lo)) * (h - top - bottom)
  const line = (key: 'gross' | 'net') =>
    weekly.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p[key]).toFixed(1)}`).join(' ')
  const last = weekly.length - 1
  const lastPoint = weekly[last]
  if (!lastPoint) return null
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label={`Illustrative weekly gross sales and net payout over 12 weeks. In ${PERIOD.label}, gross sales were ${usd(lastPoint.gross)} and net payout was ${usd(lastPoint.net)}.`}
      className="h-auto w-full text-ink-mute"
    >
      {[50000, 60000, 70000, 80000].map((g) => (
        <g key={g}>
          <line
            x1={left}
            x2={w - right}
            y1={y(g)}
            y2={y(g)}
            stroke="#e0ddd4"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <text x={left - 6} y={y(g) + 4} textAnchor="end" fontSize="12" fill="currentColor">
            {`$${g / 1000}k`}
          </text>
        </g>
      ))}
      {[1, 4, 8, 12].map((wk) => (
        <text
          key={wk}
          x={x(wk - 1)}
          y={h - 6}
          textAnchor={wk === 1 ? 'start' : wk === 12 ? 'end' : 'middle'}
          fontSize="12"
          fill="currentColor"
        >
          {`W${wk}`}
        </text>
      ))}
      <path d={line('gross')} fill="none" stroke="#25282c" strokeWidth="2" strokeLinejoin="round" />
      <path d={line('net')} fill="none" stroke="#f26a1b" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx={x(last)} cy={y(lastPoint.gross)} r="3.5" fill="#25282c" />
      <circle cx={x(last)} cy={y(lastPoint.net)} r="3.5" fill="#f26a1b" />
    </svg>
  )
}

function TrendCard() {
  return (
    <div className="rounded border border-line bg-paper p-3">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <p className="text-[0.8rem] font-medium">Weekly gross sales and net payout</p>
        <span className="flex items-center gap-4 text-[0.75rem] text-ink-soft">
          <span className="flex items-center gap-1.5">
            <i className="inline-block h-0.5 w-4 bg-ink" /> Gross sales
          </span>
          <span className="flex items-center gap-1.5">
            <i className="inline-block h-[3px] w-4 bg-copper" /> Net payout
          </span>
        </span>
      </div>
      <TrendChart />
    </div>
  )
}

function OverviewKpis() {
  return (
    <div className="grid grid-cols-1 gap-2 min-[480px]:grid-cols-3 sm:gap-3">
      <Kpi
        label="Gross sales"
        value={usd(total.gross)}
        note={`${pctSigned(change(total.gross, priorTotal.gross))} vs ${PERIOD.prior}`}
      />
      <Kpi
        label="Platform fees"
        value={usd(total.fees)}
        note={`${pct(rate(total.fees, total.gross))} of gross`}
      />
      <Kpi
        label="Net payout"
        value={usd(netTotal)}
        note={`${pctSigned(change(netTotal, netOf(priorTotal)))} vs ${PERIOD.prior}`}
      />
    </div>
  )
}

// --- panels -----------------------------------------------------------------------------------

export function RevenueOverviewMock({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-4 text-ink">
      <PanelHead title="Revenue overview" scope={`${PERIOD.label} · All locations`} />
      <OverviewKpis />
      <TrendCard />
      {!compact && (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[0.75rem] tabular-nums sm:text-[0.8rem]">
              <caption className="sr-only">
                Illustrative {PERIOD.label} gross sales, platform fees and net payout by location
              </caption>
              <thead>
                <tr className="t-label border-b border-line text-[0.75rem] text-ink-mute">
                  <th scope="col" className="py-2 font-medium">
                    Location
                  </th>
                  <th scope="col" className="py-2 text-right font-medium">
                    <span className="sm:hidden">Gross</span>
                    <span className="hidden sm:inline">Gross sales</span>
                  </th>
                  <th scope="col" className="py-2 text-right font-medium">
                    <span className="sm:hidden">Fees</span>
                    <span className="hidden sm:inline">Platform fees</span>
                  </th>
                  <th scope="col" className="py-2 text-right font-medium">
                    <span className="sm:hidden">Net</span>
                    <span className="hidden sm:inline">Net payout</span>
                  </th>
                  <th scope="col" className="py-2 text-right font-medium">
                    <span className="sm:hidden">Net %</span>
                    <span className="hidden sm:inline">% of gross</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {locations.map((l) => {
                  const a = byLocation[l.id]
                  return (
                    <tr key={l.id} className="border-b border-line/60">
                      <th scope="row" className="py-2 font-normal">
                        {l.name}
                      </th>
                      <td className="py-2 text-right">{usd(a.gross)}</td>
                      <td className="py-2 text-right text-ink-soft">{deduct(a.fees)}</td>
                      <td className="py-2 text-right">{usd(netOf(a))}</td>
                      <td className="py-2 text-right text-ink-soft">
                        {pct(rate(netOf(a), a.gross))}
                      </td>
                    </tr>
                  )
                })}
                <tr className="border-t border-ink/60 font-medium">
                  <th scope="row" className="py-2 font-medium">
                    All locations
                  </th>
                  <td className="py-2 text-right">{usd(total.gross)}</td>
                  <td className="py-2 text-right">{deduct(total.fees)}</td>
                  <td className="py-2 text-right">{usd(netTotal)}</td>
                  <td className="py-2 text-right">{pct(rate(netTotal, total.gross))}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Footnote>{DEFINITION}</Footnote>
        </>
      )}
    </div>
  )
}

export function GrossToNetMock() {
  const d = deliveryPlatforms
  const steps = [
    { label: 'Gross sales', value: d.gross, type: 'total' },
    { label: 'Discounts & promotions', value: -d.discounts, type: 'less' },
    { label: 'Refunds & adjustments', value: -d.refunds, type: 'less' },
    { label: 'Platform fees', value: -d.fees, type: 'less' },
    { label: 'Net payout', value: netOf(d), type: 'total' },
  ] as const
  let running = 0
  return (
    <div className="space-y-3 text-ink">
      <PanelHead
        title="Gross sales to net payout"
        scope={`${PERIOD.label} · Delivery platforms A + B · All locations`}
      />
      <ul className="space-y-2.5">
        {steps.map((s, i) => {
          const width = (Math.abs(s.value) / d.gross) * 100
          const start = s.type === 'total' ? 0 : running + s.value
          const left = s.type === 'total' ? 0 : (start / d.gross) * 100
          if (s.type === 'total') running = s.value
          else running += s.value
          return (
            <li
              key={s.label}
              className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1.5 text-[0.8rem] sm:grid-cols-[minmax(0,9.5rem)_1fr_4.5rem_3.25rem]"
            >
              <span
                className={cn('truncate', s.type === 'total' ? 'font-medium' : 'text-ink-soft')}
              >
                {s.label}
              </span>
              <span className="relative order-3 col-span-2 h-5 rounded-sm bg-ivory sm:order-none sm:col-span-1">
                <span
                  className={cn(
                    'absolute top-0 h-5 rounded-sm',
                    s.type === 'total' ? 'bg-ink' : 'bg-copper/80',
                  )}
                  style={{ left: `${left}%`, width: `${width}%` }}
                />
              </span>
              <span className={cn('text-right tabular-nums', s.type === 'total' && 'font-medium')}>
                {s.value < 0 ? `−${usd(-s.value)}` : usd(s.value)}
              </span>
              <span className="hidden text-right tabular-nums text-ink-mute sm:block">
                {i === 0 ? '100%' : pct(Math.abs(s.value) / d.gross)}
              </span>
            </li>
          )
        })}
      </ul>
      <Footnote>
        Percentages are shares of gross sales. Net payout is the amount the platforms report as
        payable, not profit or a bank deposit. {RATES_NOTE}
      </Footnote>
    </div>
  )
}

export function PayoutVisibilityMock() {
  const sum = (k: 'calculated' | 'reported' | 'difference') =>
    reconciliation.reduce((t, r) => t + r[k], 0)
  const flagged = reconciliation.filter((r) => r.note)
  return (
    <div className="space-y-3 text-ink">
      <PanelHead
        title="Payout reconciliation"
        scope={`${PERIOD.label} (${PERIOD.span}) · All locations`}
      />
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[0.75rem] tabular-nums sm:text-[0.8rem]">
          <caption className="sr-only">
            Illustrative comparison of calculated net payout and reported payout by source for{' '}
            {PERIOD.label}
          </caption>
          <thead>
            <tr className="t-label border-b border-line text-[0.75rem] text-ink-mute">
              <th scope="col" className="py-2 font-medium">
                Source
              </th>
              <th scope="col" className="py-2 pl-1.5 text-right sm:pl-2 font-medium">
                Calculated
              </th>
              <th scope="col" className="py-2 pl-1.5 text-right sm:pl-2 font-medium">
                <span className="sm:hidden">Reported</span>
                <span className="hidden sm:inline">Reported payout</span>
              </th>
              <th scope="col" className="py-2 pl-1.5 text-right sm:pl-2 font-medium">
                <span className="sm:hidden">Diff.</span>
                <span className="hidden sm:inline">Difference</span>
              </th>
              <th scope="col" className="hidden py-2 pl-3 text-right font-medium sm:table-cell">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {reconciliation.map((r) => (
              <tr key={r.id} className="border-b border-line/60">
                <th scope="row" className="py-2.5 pr-1 font-normal sm:pr-2">
                  {r.label}
                  <span className="mt-1 block sm:hidden">
                    <StatusChip status={r.status} />
                  </span>
                </th>
                <td className="py-2.5 text-right">{usd(r.calculated)}</td>
                <td className="py-2.5 text-right">{usd(r.reported)}</td>
                <td
                  className={cn(
                    'py-2.5 text-right',
                    r.difference === 0 ? 'text-ink-mute' : 'text-copper-ink',
                  )}
                >
                  {r.difference === 0 ? '$0' : usdSigned(r.difference)}
                </td>
                <td className="hidden py-2.5 pl-3 text-right sm:table-cell">
                  <StatusChip status={r.status} />
                </td>
              </tr>
            ))}
            <tr className="border-t border-ink/60 font-medium">
              <th scope="row" className="py-2.5 font-medium">
                Total
              </th>
              <td className="py-2.5 text-right">{usd(sum('calculated'))}</td>
              <td className="py-2.5 text-right">{usd(sum('reported'))}</td>
              <td className="py-2.5 text-right">{usdSigned(sum('difference'))}</td>
              <td className="hidden sm:table-cell" />
            </tr>
          </tbody>
        </table>
      </div>
      <ul className="space-y-1">
        {flagged.map((r) => (
          <li key={r.id}>
            <Footnote>
              <strong className="font-medium text-ink">{r.label}:</strong> {r.note}
            </Footnote>
          </li>
        ))}
      </ul>
      <dl className="space-y-1">
        {(
          [
            ['matched', 'Reported payout equals the calculated net payout.'],
            [
              'timing',
              'Transactions settle after the reporting period ends. Expected to clear in a later period, so not treated as a discrepancy.',
            ],
            ['review', 'The difference is not explained by timing and needs investigation.'],
          ] as const
        ).map(([status, meaning]) => (
          <div key={status} className="grid grid-cols-[5.25rem_1fr] items-start gap-2">
            <dt>
              <StatusChip status={status} />
            </dt>
            <dd className="t-caption text-[0.75rem] leading-snug">{meaning}</dd>
          </div>
        ))}
      </dl>
      <Footnote>
        Calculated is net payout from the order-level report for the same period and locations.
        In-store sales are not part of payout reconciliation. {RATES_NOTE}
      </Footnote>
    </div>
  )
}

export function LocationComparisonMock() {
  const rows = locations
    .map((l) => ({ ...l, a: byLocation[l.id], net: netOf(byLocation[l.id]) }))
    .sort((p, q) => q.net - p.net)
  const max = Math.max(...rows.map((r) => r.net))
  return (
    <div className="space-y-3 text-ink">
      <PanelHead title="Location comparison" scope={`${PERIOD.label} · Net payout`} />
      <div className="t-label hidden grid-cols-[5.5rem_1fr_5rem_4.75rem] gap-3 border-b border-line pb-2 text-[0.75rem] text-ink-mute sm:grid">
        <span>Location</span>
        <span>Net payout</span>
        <span className="text-right">Gross sales</span>
        <span className="text-right">% of gross</span>
      </div>
      <ul className="space-y-3">
        {rows.map((r) => (
          <li
            key={r.id}
            className="grid grid-cols-[5.5rem_1fr] items-center gap-x-3 gap-y-0.5 text-[0.8rem] sm:grid-cols-[5.5rem_1fr_5rem_4.75rem]"
          >
            <span className="text-ink-soft">{r.name}</span>
            <span className="flex items-center gap-2">
              <span className="h-4 flex-1 rounded-sm bg-ivory">
                <span
                  className="block h-4 rounded-sm bg-sage-deep"
                  style={{ width: `${(r.net / max) * 100}%` }}
                />
              </span>
              <span className="w-[4.25rem] text-right tabular-nums">{usd(r.net)}</span>
            </span>
            <span className="col-start-2 text-[0.75rem] tabular-nums text-ink-mute sm:hidden">
              Gross {usd(r.a.gross)} · {pct(rate(r.net, r.a.gross))} of gross
            </span>
            <span className="hidden text-right tabular-nums sm:block">{usd(r.a.gross)}</span>
            <span className="hidden text-right tabular-nums text-ink-soft sm:block">
              {pct(rate(r.net, r.a.gross))}
            </span>
          </li>
        ))}
      </ul>
      <Footnote>
        Sales volume and net payout can rank locations differently. Compare the share of gross sales
        that remains after discounts, refunds and platform fees. Net payout is not profit. All
        figures are invented.
      </Footnote>
    </div>
  )
}

export function ChannelMixMock() {
  const colors: Record<string, string> = {
    pos: 'bg-ink',
    platformA: 'bg-copper',
    platformB: 'bg-sage-deep',
    direct: 'bg-copper-soft',
  }
  return (
    <div className="space-y-4 text-ink">
      <PanelHead title="Sales by channel" scope={`${PERIOD.label} · All locations`} />
      <div
        className="flex h-9 overflow-hidden rounded-sm"
        role="img"
        aria-label={`Illustrative share of ${PERIOD.label} gross sales by channel: ${channels
          .map((c) => `${c.label} ${pct(rate(byChannel[c.id].gross, total.gross))}`)
          .join(', ')}`}
      >
        {channels.map((c) => (
          <span
            key={c.id}
            className={colors[c.id]}
            style={{ width: `${rate(byChannel[c.id].gross, total.gross) * 100}%` }}
          />
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[0.75rem] tabular-nums sm:text-[0.8rem]">
          <caption className="sr-only">
            Illustrative gross sales, share of gross and platform fee rate by channel
          </caption>
          <thead>
            <tr className="t-label border-b border-line text-[0.75rem] text-ink-mute">
              <th scope="col" className="py-2 font-medium">
                Channel
              </th>
              <th scope="col" className="py-2 pl-2 text-right font-medium">
                <span className="sm:hidden">Gross</span>
                <span className="hidden sm:inline">Gross sales</span>
              </th>
              <th scope="col" className="py-2 pl-2 text-right font-medium">
                Share
              </th>
              <th scope="col" className="py-2 pl-2 text-right font-medium">
                <span className="sm:hidden">Fees</span>
                <span className="hidden sm:inline">Fee rate</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {channels.map((c) => {
              const a = byChannel[c.id]
              return (
                <tr key={c.id} className="border-b border-line/60">
                  <th scope="row" className="py-2 font-normal">
                    <span className="flex items-center gap-2">
                      <i
                        className={cn('inline-block h-2.5 w-2.5 shrink-0 rounded-sm', colors[c.id])}
                      />
                      {c.label}
                    </span>
                  </th>
                  <td className="py-2 text-right">{usd(a.gross)}</td>
                  <td className="py-2 text-right text-ink-soft">
                    {pct(rate(a.gross, total.gross))}
                  </td>
                  <td className="py-2 text-right text-ink-soft">
                    {a.fees === 0 ? '—' : pct(rate(a.fees, a.gross))}
                  </td>
                </tr>
              )
            })}
            <tr className="border-t border-ink/60 font-medium">
              <th scope="row" className="py-2 font-medium">
                All channels
              </th>
              <td className="py-2 text-right">{usd(total.gross)}</td>
              <td className="py-2 text-right">100%</td>
              <td className="py-2 text-right">{pct(rate(total.fees, total.gross))}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footnote>{RATES_NOTE}</Footnote>
    </div>
  )
}

// --- application shell ------------------------------------------------------------------------

const shellNav = ['Overview', 'Revenue', 'Statements', 'Payouts', 'Locations']

/** Application shell with sidebar. Generic labels only; all figures are invented. */
function AppShell({
  active,
  nav = true,
  children,
}: {
  active: string
  nav?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-[minmax(0,1fr)] overflow-hidden rounded border border-line bg-ivory/50 text-ink',
        nav && 'sm:grid-cols-[9rem_minmax(0,1fr)]',
      )}
    >
      <aside className={cn('hidden border-r border-line bg-paper p-3', nav && 'sm:block')}>
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

export function DashboardMock() {
  return (
    <AppShell active="Overview">
      <PanelHead title="Overview" scope={`${PERIOD.label} · All locations`} />
      <OverviewKpis />
      <TrendCard />
    </AppShell>
  )
}

type StatementRow = {
  label: string
  indent?: boolean
  kind?: 'section' | 'subtotal' | 'total' | 'deduction'
  value?: (key: string, a: Amounts) => number
}

export function StatementMock({ compact = false }: { compact?: boolean }) {
  const columns = compact
    ? [{ key: 'all', label: PERIOD.label, amounts: total }]
    : [
        ...locations.map((l) => ({
          key: l.id,
          label: l.name.replace('Location ', 'Loc '),
          amounts: byLocation[l.id],
        })),
        { key: 'all', label: 'Total', amounts: total },
      ]
  const span = columns.length + 1 + (compact ? 1 : 0)
  const channelGross = (key: string, ch: (typeof channels)[number]['id']) =>
    key === 'all' ? byChannel[ch].gross : cell(key as LocationId, ch).gross

  const rows: StatementRow[] = [
    { label: 'Gross sales', kind: 'section' },
    ...channels.map((c) => ({
      label: c.label,
      indent: true,
      value: (key: string) => channelGross(key, c.id),
    })),
    { label: 'Total gross sales', kind: 'subtotal', value: (_k, a) => a.gross },
    { label: 'Discounts & promotions', kind: 'deduction', value: (_k, a) => a.discounts },
    { label: 'Refunds & adjustments', kind: 'deduction', value: (_k, a) => a.refunds },
    { label: 'Platform fees', kind: 'deduction', value: (_k, a) => a.fees },
    { label: 'Net payout', kind: 'total', value: (_k, a) => netOf(a) },
  ]

  return (
    <AppShell active="Statements" nav={!compact}>
      <PanelHead
        title="Statement"
        scope={`${PERIOD.label} (${PERIOD.span}) · ${compact ? 'All locations' : 'By location'}`}
      />
      <div className="overflow-x-auto rounded border border-line bg-paper">
        <table
          className={cn(
            'w-full text-left tabular-nums',
            compact ? 'text-[0.75rem]' : 'min-w-[34rem] text-[0.75rem]',
          )}
        >
          <caption className="sr-only">
            Illustrative {PERIOD.label} statement: gross sales by channel, deductions and net payout
          </caption>
          <thead>
            <tr className="t-label border-b border-line text-[0.75rem] text-ink-mute">
              <th scope="col" className="px-3 py-2 font-medium">
                USD
              </th>
              {columns.map((c) => (
                <th key={c.key} scope="col" className="px-2 py-2 text-right font-medium">
                  {c.label}
                </th>
              ))}
              {compact && (
                <th scope="col" className="px-2 py-2 text-right font-medium">
                  % of gross
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              if (r.kind === 'section')
                return (
                  <tr key={r.label} className="bg-ivory/50">
                    <th
                      scope="colgroup"
                      colSpan={span}
                      className="t-label px-3 py-1.5 text-[0.75rem] font-medium text-ink-mute"
                    >
                      {r.label}
                    </th>
                  </tr>
                )
              const strong = r.kind === 'subtotal' || r.kind === 'total'
              return (
                <tr
                  key={r.label}
                  className={cn(
                    'border-b border-line/60 last:border-0',
                    strong && 'border-t border-t-ink/50 font-medium',
                    r.kind === 'total' && 'bg-ivory/60',
                  )}
                >
                  <th
                    scope="row"
                    className={cn(
                      'px-3 py-2 font-normal',
                      strong && 'font-medium',
                      r.indent && 'pl-6',
                      r.kind === 'deduction' && 'text-ink-soft',
                    )}
                  >
                    {r.label}
                  </th>
                  {columns.map((c) => {
                    const v = r.value?.(c.key, c.amounts) ?? 0
                    return (
                      <td
                        key={c.key}
                        className={cn(
                          'px-2 py-2 text-right',
                          r.kind === 'deduction' && 'text-ink-soft',
                        )}
                      >
                        {r.kind === 'deduction' ? deduct(v) : usd(v)}
                      </td>
                    )
                  })}
                  {compact && (
                    <td className="px-2 py-2 text-right text-ink-mute">
                      {pct(rate(r.value?.('all', total) ?? 0, total.gross))}
                    </td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Footnote>{DEFINITION}</Footnote>
    </AppShell>
  )
}

// --- AI interfaces ----------------------------------------------------------------------------

/** Illustrative natural-language analysis experience. Invented question, figures and locations. */
export function AskYourDataMock() {
  const { items, netNow, netBefore, netDelta } = askDrivers
  const max = Math.max(...items.map((i) => Math.abs(i.delta)))
  const name = locationName(askLocation)
  const deltaOf = (l: string) => items.find((i) => i.label === l)?.delta ?? 0
  const feesAndRefunds = deltaOf('Platform fees') + deltaOf('Refunds & adjustments')
  const grossDelta = deltaOf('Gross sales')
  return (
    <div className="space-y-4 text-ink">
      <div>
        <p className="font-display text-lg tracking-tight">Ask your financial data</p>
        <p className="t-label mt-0.5 text-[0.75rem] text-ink-mute">
          Natural-language analysis · {name} · {PERIOD.label} vs {PERIOD.prior}
        </p>
      </div>
      <div className="ml-auto max-w-[88%] rounded-lg rounded-br-sm bg-ink px-4 py-3 text-[0.85rem] text-ivory">
        Why did net payout fall at {name} last week?
      </div>
      <div className="max-w-[96%] rounded-lg rounded-bl-sm border border-line bg-ivory/60 p-4 text-[0.85rem]">
        <p>
          Net payout at {name} was <strong className="tabular-nums">{usd(netNow)}</strong> in{' '}
          {PERIOD.label}, down <strong className="tabular-nums">{usd(-netDelta)}</strong> (
          {pct(-change(netNow, netBefore))}) from {PERIOD.prior}. Platform fees and refunds account
          for {usd(-feesAndRefunds)} of that change; gross sales were{' '}
          {grossDelta < 0 ? 'down' : 'up'} {usd(Math.abs(grossDelta))}.
        </p>
        <p className="t-label mb-2 mt-4 text-[0.75rem] text-ink-mute">Effect on net payout</p>
        <ul className="space-y-2">
          {items.map((d) => (
            <li
              key={d.label}
              className="grid grid-cols-[7.5rem_1fr_3.5rem] items-center gap-3 text-[0.75rem]"
            >
              <span className="text-ink-soft">{d.label}</span>
              <span className="h-2.5 rounded-sm bg-paper">
                <span
                  className="block h-2.5 rounded-sm bg-copper"
                  style={{ width: `${(Math.abs(d.delta) / max) * 100}%` }}
                />
              </span>
              <span className="text-right tabular-nums">{usdSigned(d.delta)}</span>
            </li>
          ))}
          <li className="grid grid-cols-[7.5rem_1fr_3.5rem] items-center gap-3 border-t border-ink/50 pt-2 text-[0.75rem] font-medium">
            <span className="col-span-2">Change in net payout</span>
            <span className="text-right tabular-nums">{usdSigned(netDelta)}</span>
          </li>
        </ul>
      </div>
      <ul className="flex flex-wrap gap-2 text-[0.75rem] text-ink-soft">
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
  const px = (i: number) => (i * (w - 6)) / (vals.length - 1) + 3
  const py = (v: number) => h - 3 - ((v - lo) / (hi - lo || 1)) * (h - 6)
  const pts = vals.map((v, i) => `${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(' ')
  const lastV = vals[vals.length - 1] ?? 0
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-7 w-24" aria-hidden>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <circle cx={px(vals.length - 1)} cy={py(lastV)} r="2.5" fill={color} />
    </svg>
  )
}

/** Illustrative anomaly insights. Invented locations and figures; for review, not verdicts. */
export function AnomalyInsightsMock() {
  return (
    <div className="space-y-3 text-ink">
      <PanelHead
        title="Insights for review"
        scope={`Anomaly detection · ${PERIOD.label} · ${insights.length} items`}
      />
      <ul className="space-y-2.5">
        {insights.map((it) => (
          <li
            key={it.id}
            className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 rounded border border-line bg-ivory/60 p-3.5"
          >
            <span>
              <span className="block text-[0.85rem] font-medium">{it.title}</span>
              <span className="t-caption block text-[0.75rem]">{it.detail}</span>
            </span>
            {spark(it.trend, '#f26a1b')}
            <span className="col-span-2 mt-1 inline-flex w-fit rounded-full bg-copper-soft px-2.5 py-0.5 text-[0.75rem] text-copper-ink">
              For review
            </span>
          </li>
        ))}
      </ul>
      <Footnote>
        Sparklines show recent weeks, ending with {PERIOD.label}. Items are flagged for a person to
        review, not treated as errors. {RATES_NOTE}
      </Footnote>
    </div>
  )
}
