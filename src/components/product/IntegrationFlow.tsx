import { StatusBadge } from '@/components/ui/StatusBadge'
import { cn } from '@/lib/cn'

const sources = [
  { name: 'Uber Eats', how: 'Platform financial reports', badges: [['available', 'Reports']] },
  { name: 'DoorDash', how: 'Platform financial reports', badges: [['available', 'Reports']] },
  {
    name: 'Clover POS',
    how: 'Sales data via SFTP or CSV file',
    badges: [
      ['available', 'SFTP / CSV'],
      ['planned', 'Direct API'],
    ],
  },
] as const

const stages = [
  ['Ingest', 'Bring source files and reports in'],
  ['Structure', 'Map every source to one consistent model'],
  ['Report', 'Statements, trends and location views'],
] as const

const outputs = [
  'Revenue analysis',
  'Monthly statements',
  'Fees and payout visibility',
  'Location comparison',
]

/** Source-to-report data flow. Reflects confirmed ingestion methods only. */
export function IntegrationFlow({ dark = false }: { dark?: boolean }) {
  const box = dark ? 'border-line-dark bg-[#1f2227]' : 'border-line bg-paper'
  return (
    <figure>
      <div className="grid items-stretch gap-4 lg:grid-cols-[1.1fr_auto_1.2fr_auto_1fr] lg:gap-5">
        <ul className="space-y-3">
          {sources.map((s) => (
            <li key={s.name} className={cn('rounded border p-4', box)}>
              <p className="font-display text-lg tracking-tight">{s.name}</p>
              <p className="t-caption mt-0.5">{s.how}</p>
              <p className="mt-3 flex flex-wrap gap-1.5">
                {s.badges.map(([st, label]) => (
                  <span key={label} className="inline-flex items-center gap-1.5">
                    <StatusBadge status={st} />
                    <span className="text-[0.75rem] opacity-80">{label}</span>
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
        <Arrow />
        <ol className={cn('flex flex-col justify-between gap-3 rounded border p-4', box)}>
          <li className="t-label text-copper-deep">SG2 Financial Intelligence</li>
          {stages.map(([t, d], i) => (
            <li key={t} className="flex gap-3 border-t border-current/10 pt-3">
              <span className="t-label mt-0.5 text-copper-deep">{i + 1}</span>
              <span>
                <span className="block font-medium">{t}</span>
                <span className="t-caption block">{d}</span>
              </span>
            </li>
          ))}
        </ol>
        <Arrow />
        <ul className={cn('flex flex-col justify-start gap-2 rounded border p-4', box)}>
          <li className="t-label mb-1 text-copper-deep">What your team gets</li>
          {outputs.map((o) => (
            <li key={o} className="flex items-center gap-2.5 text-[0.95rem]">
              <i aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
              {o}
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="t-caption mt-4 max-w-3xl">
        Platform and product names identify compatible data sources. SG2 is not affiliated with or
        endorsed by Uber Eats, DoorDash or Clover. Direct Clover API integration is planned; Clover
        data is ingested today through SFTP or CSV. Support for other platforms is confirmed per
        customer.
      </figcaption>
    </figure>
  )
}

function Arrow() {
  return (
    <span aria-hidden className="grid place-items-center text-copper lg:px-0">
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 rotate-90 lg:rotate-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 12h15m-6-6 6 6-6 6" />
      </svg>
    </span>
  )
}
