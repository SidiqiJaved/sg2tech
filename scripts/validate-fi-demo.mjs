// Arithmetic checks for the illustrative Financial Intelligence dataset.
// Run with: npm run validate:fi-demo
import assert from 'node:assert/strict'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'esbuild'

const dir = mkdtempSync(join(tmpdir(), 'fi-demo-'))
const out = join(dir, 'data.mjs')
try {
  await build({
    entryPoints: ['src/content/fiDemoData.ts'],
    bundle: true,
    format: 'esm',
    outfile: out,
    logLevel: 'silent',
  })
  const d = await import(pathToFileURL(out).href)
  const ids = d.locations.map((l) => l.id)
  const chs = d.channels.map((c) => c.id)
  const sum = (xs) => xs.reduce((a, b) => a + b, 0)

  // Every figure is a whole number of dollars and no deduction is negative.
  for (const l of ids)
    for (const c of chs) {
      const a = d.cell(l, c)
      for (const [k, v] of Object.entries(a)) {
        assert.ok(Number.isInteger(v) && v >= 0, `${l}/${c}/${k} must be a non-negative integer`)
      }
      assert.ok(d.netOf(a) > 0, `${l}/${c} net payout must be positive`)
    }
  // POS has no platform fee by definition.
  for (const l of ids) assert.equal(d.cell(l, 'pos').fees, 0)

  // Totals foot both ways: by location and by channel.
  for (const k of ['gross', 'discounts', 'refunds', 'fees']) {
    assert.equal(sum(ids.map((l) => d.byLocation[l][k])), d.total[k], `locations sum ${k}`)
    assert.equal(sum(chs.map((c) => d.byChannel[c][k])), d.total[k], `channels sum ${k}`)
  }
  // Net payout identity.
  const net = d.netOf(d.total)
  assert.equal(net, d.total.gross - d.total.discounts - d.total.refunds - d.total.fees)
  assert.equal(sum(ids.map((l) => d.netOf(d.byLocation[l]))), net)
  assert.equal(sum(chs.map((c) => d.netOf(d.byChannel[c]))), net)

  // Gross-to-net scope (delivery platforms A + B) agrees with the reconciliation table.
  const reconA = d.reconciliation.find((r) => r.id === 'platformA')
  const reconB = d.reconciliation.find((r) => r.id === 'platformB')
  assert.equal(d.netOf(d.deliveryPlatforms), reconA.calculated + reconB.calculated)

  // Reconciliation: reported = calculated + difference, and the total difference foots.
  for (const r of d.reconciliation) assert.equal(r.reported, r.calculated + r.difference)
  assert.equal(
    sum(d.reconciliation.map((r) => r.reported)) - sum(d.reconciliation.map((r) => r.calculated)),
    sum(d.reconciliation.map((r) => r.difference)),
  )
  for (const r of d.reconciliation)
    assert.equal(r.status === 'matched', r.difference === 0, `${r.id} status matches difference`)

  // Timing and review items always carry an explanation for the reader.
  for (const r of d.reconciliation)
    if (r.status !== 'matched') assert.ok(r.note && r.note.length > 20, `${r.id} needs a note`)

  // Natural-language answer: drivers explain the whole change in net payout, to the dollar.
  assert.equal(sum(d.askDrivers.items.map((i) => i.delta)), d.askDrivers.netDelta)
  assert.ok(d.askDrivers.netDelta < 0, 'the demo question asks why net payout fell')

  // Trend: weeks are consecutive and the last two weeks come from the detailed data.
  assert.deepEqual(
    d.weekly.map((w) => w.week),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  )
  assert.equal(d.weekly[11].gross, d.total.gross)
  assert.equal(d.weekly[11].net, net)
  assert.equal(d.weekly[10].net, d.netOf(d.priorTotal))
  for (const w of d.weekly) assert.ok(w.net < w.gross)

  // Pinned values quoted in the interfaces, so an accidental data edit is noticed.
  assert.equal(d.total.gross, 75500)
  assert.equal(d.total.fees, 6501)
  assert.equal(net, 65628)
  assert.equal(d.askDrivers.netDelta, -596)
  console.log(
    `FI demo data OK: gross ${d.total.gross}, deductions ${d.total.discounts + d.total.refunds}, fees ${d.total.fees}, net ${net}`,
  )
} finally {
  rmSync(dir, { recursive: true, force: true })
}
