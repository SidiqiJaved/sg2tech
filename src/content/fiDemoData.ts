/**
 * Illustrative dataset behind every Financial Intelligence interface on the site.
 *
 * ALL FIGURES ARE INVENTED. They describe a fictional four-location restaurant group and are not
 * taken from any customer. Only the per-location, per-channel inputs below are typed in; every
 * total, rate, difference and change shown in the interfaces is derived from them, so the panels
 * cannot drift out of agreement. `npm run validate:fi-demo` checks the arithmetic.
 *
 * METRIC DEFINITIONS (shown to the reader in the statement footnote)
 *  - Gross sales: item sales reported by a source, before deductions. Excludes sales tax and tips.
 *  - Discounts & promotions, Refunds & adjustments: amounts deducted from gross sales.
 *  - Platform fees: commissions, service and marketing charges a delivery platform or payment
 *    processor charges. No fee is modeled for in-store (POS) sales.
 *  - Net payout: gross sales less discounts, refunds & adjustments and platform fees, as reported
 *    by each source. It is not profit (operating costs are not included) and it is not a verified
 *    bank deposit. In-store figures are POS-reported; card settlement is not shown.
 */

export type LocationId = 'L01' | 'L02' | 'L03' | 'L04'
export type ChannelId = 'pos' | 'platformA' | 'platformB' | 'direct'

export const locations: ReadonlyArray<{ id: LocationId; name: string }> = [
  { id: 'L01', name: 'Location 01' },
  { id: 'L02', name: 'Location 02' },
  { id: 'L03', name: 'Location 03' },
  { id: 'L04', name: 'Location 04' },
]

export const channels: ReadonlyArray<{
  id: ChannelId
  label: string
  /** Delivery platforms and direct online orders report a payout that can be reconciled. */
  payoutSource: boolean
}> = [
  { id: 'pos', label: 'In-store sales (POS)', payoutSource: false },
  { id: 'platformA', label: 'Delivery platform A', payoutSource: true },
  { id: 'platformB', label: 'Delivery platform B', payoutSource: true },
  { id: 'direct', label: 'Direct online orders', payoutSource: true },
]

export interface Amounts {
  gross: number
  discounts: number
  refunds: number
  fees: number
}

export const PERIOD = { label: 'Week 12', prior: 'Week 11', span: 'Mon–Sun' } as const

/** Week 12, by location and channel. The only typed-in source for the current week. */
const week12: Record<LocationId, Record<ChannelId, Amounts>> = {
  L01: {
    pos: { gross: 12400, discounts: 240, refunds: 60, fees: 0 },
    platformA: { gross: 6200, discounts: 310, refunds: 80, fees: 1116 },
    platformB: { gross: 3100, discounts: 186, refunds: 50, fees: 620 },
    direct: { gross: 2300, discounts: 70, refunds: 20, fees: 69 },
  },
  L02: {
    pos: { gross: 9800, discounts: 180, refunds: 45, fees: 0 },
    platformA: { gross: 5100, discounts: 255, refunds: 60, fees: 918 },
    platformB: { gross: 4300, discounts: 258, refunds: 120, fees: 1075 },
    direct: { gross: 1500, discounts: 45, refunds: 15, fees: 45 },
  },
  L03: {
    pos: { gross: 8900, discounts: 170, refunds: 40, fees: 0 },
    platformA: { gross: 4800, discounts: 240, refunds: 75, fees: 864 },
    platformB: { gross: 3600, discounts: 216, refunds: 65, fees: 720 },
    direct: { gross: 1200, discounts: 35, refunds: 10, fees: 36 },
  },
  L04: {
    pos: { gross: 6100, discounts: 110, refunds: 25, fees: 0 },
    platformA: { gross: 3300, discounts: 165, refunds: 40, fees: 594 },
    platformB: { gross: 2100, discounts: 126, refunds: 30, fees: 420 },
    direct: { gross: 800, discounts: 25, refunds: 5, fees: 24 },
  },
}

/** Week 11, by location (all channels combined). Used for week-over-week change. */
const week11: Record<LocationId, Amounts> = {
  L01: { gross: 23600, discounts: 780, refunds: 200, fees: 1770 },
  L02: { gross: 20900, discounts: 700, refunds: 140, fees: 1780 },
  L03: { gross: 18300, discounts: 650, refunds: 185, fees: 1590 },
  L04: { gross: 11900, discounts: 410, refunds: 95, fees: 1000 },
}

/** Weeks 1–10, all locations combined. Weeks 11 and 12 are derived from the data above. */
const earlierWeeks: ReadonlyArray<{ gross: number; net: number }> = [
  { gross: 66200, net: 57800 },
  { gross: 67800, net: 59300 },
  { gross: 67100, net: 58500 },
  { gross: 69500, net: 60700 },
  { gross: 70300, net: 61400 },
  { gross: 69900, net: 61000 },
  { gross: 71800, net: 62800 },
  { gross: 72900, net: 63700 },
  { gross: 72400, net: 63300 },
  { gross: 73600, net: 64400 },
]

/** Typical (8-week) values that anomaly insights compare against. */
export const typical = {
  platformBFeeRate: 0.2,
  platformBRefundsPerLocation: 50,
  /** Platform B fee rate at Location 02 over weeks 5–11, as a fraction of gross. */
  platformBFeeRateTrend: [0.2, 0.199, 0.202, 0.2, 0.201, 0.2, 0.2],
  platformBRefundsTrend: [48, 55, 44, 52, 47, 50, 53],
}

/**
 * How each payout source's reported payout compares with the net payout calculated from its
 * order-level report, for the same location scope and the same Mon–Sun period.
 */
export type ReconStatus = 'matched' | 'timing' | 'review'
const reportedDifference: Partial<
  Record<ChannelId, { amount: number; status: ReconStatus; note: string }>
> = {
  platformB: {
    amount: -338,
    status: 'review',
    note: 'Payout is lower than the order report. The gap is not explained by listed fees or adjustments.',
  },
  direct: {
    amount: -175,
    status: 'timing',
    note: 'Orders settling after the period end. Expected to clear in the next period.',
  },
}

// ---------------------------------------------------------------------------
// Derived values. Nothing below contains a typed-in financial figure.
// ---------------------------------------------------------------------------

export const netOf = (a: Amounts) => a.gross - a.discounts - a.refunds - a.fees
export const sumAmounts = (list: Amounts[]): Amounts =>
  list.reduce(
    (t, a) => ({
      gross: t.gross + a.gross,
      discounts: t.discounts + a.discounts,
      refunds: t.refunds + a.refunds,
      fees: t.fees + a.fees,
    }),
    { gross: 0, discounts: 0, refunds: 0, fees: 0 },
  )

const channelIds = channels.map((c) => c.id)
const locationIds = locations.map((l) => l.id)

export const cell = (loc: LocationId, ch: ChannelId): Amounts => week12[loc][ch]

export const byLocation: Record<LocationId, Amounts> = Object.fromEntries(
  locationIds.map((l) => [l, sumAmounts(channelIds.map((c) => week12[l][c]))]),
) as Record<LocationId, Amounts>

export const byChannel: Record<ChannelId, Amounts> = Object.fromEntries(
  channelIds.map((c) => [c, sumAmounts(locationIds.map((l) => week12[l][c]))]),
) as Record<ChannelId, Amounts>

export const total: Amounts = sumAmounts(locationIds.map((l) => byLocation[l]))
export const priorByLocation = week11
export const priorTotal: Amounts = sumAmounts(locationIds.map((l) => week11[l]))

export const rate = (part: number, whole: number) => (whole === 0 ? 0 : part / whole)

/** Week-over-week change as a fraction of the prior value. */
export const change = (now: number, before: number) => (now - before) / before

export const weekly: ReadonlyArray<{ week: number; gross: number; net: number }> = [
  ...earlierWeeks.map((w, i) => ({ week: i + 1, ...w })),
  { week: 11, gross: priorTotal.gross, net: netOf(priorTotal) },
  { week: 12, gross: total.gross, net: netOf(total) },
]

/** Delivery platforms only (A + B): the scope of the gross-to-net breakdown. */
export const deliveryPlatforms: Amounts = sumAmounts([byChannel.platformA, byChannel.platformB])

export interface ReconRow {
  id: ChannelId
  label: string
  /** Net payout calculated from the order-level report. */
  calculated: number
  /** Payout the platform or processor reports for the same period. */
  reported: number
  difference: number
  status: ReconStatus
  note?: string
}

export const reconciliation: ReconRow[] = channels
  .filter((c) => c.payoutSource)
  .map((c) => {
    const calculated = netOf(byChannel[c.id])
    const diff = reportedDifference[c.id]
    return {
      id: c.id,
      label: c.label,
      calculated,
      reported: calculated + (diff?.amount ?? 0),
      difference: diff?.amount ?? 0,
      status: diff?.status ?? 'matched',
      note: diff?.note,
    }
  })

/** The question the natural-language demo answers: why did Location 02 net payout fall? */
export const askLocation: LocationId = 'L02'

export const askDrivers = (() => {
  const now = byLocation[askLocation]
  const before = week11[askLocation]
  // Positive numbers help net payout; negative numbers reduce it.
  const items = [
    { label: 'Platform fees', delta: -(now.fees - before.fees) },
    { label: 'Refunds & adjustments', delta: -(now.refunds - before.refunds) },
    { label: 'Gross sales', delta: now.gross - before.gross },
    { label: 'Discounts & promotions', delta: -(now.discounts - before.discounts) },
  ].sort((a, b) => a.delta - b.delta)
  return {
    items,
    netNow: netOf(now),
    netBefore: netOf(before),
    netDelta: netOf(now) - netOf(before),
  }
})()

export interface Insight {
  id: string
  title: string
  detail: string
  /** Trend with the current value as the last point. */
  trend: number[]
}

const l2b = week12.L02.platformB
const l2bFeeRate = rate(l2b.fees, l2b.gross)
const platformBRecon = reconciliation.find((r) => r.id === 'platformB')

export const insights: Insight[] = [
  {
    id: 'fee-rate',
    title: 'Platform fee rate above its usual range',
    detail: `Location 02 · Delivery platform B · ${(l2bFeeRate * 100).toFixed(1)}% of gross, against a typical ${(typical.platformBFeeRate * 100).toFixed(1)}%.`,
    trend: [...typical.platformBFeeRateTrend.map((r) => r * 100), l2bFeeRate * 100],
  },
  {
    id: 'refunds',
    title: 'Refunds higher than usual',
    detail: `Location 02 · Delivery platform B · $${l2b.refunds} in refunds & adjustments, ${(l2b.refunds / typical.platformBRefundsPerLocation).toFixed(1)}× the 8-week average of $${typical.platformBRefundsPerLocation}.`,
    trend: [...typical.platformBRefundsTrend, l2b.refunds],
  },
  {
    id: 'payout-gap',
    title: 'Payout lower than the order report implies',
    detail: `Delivery platform B · all locations · reported payout is $${Math.abs(platformBRecon?.difference ?? 0)} below the calculated net payout for ${PERIOD.label}.`,
    trend: [0, 12, 0, 20, 0, 9, 0, Math.abs(platformBRecon?.difference ?? 0)],
  },
]
