import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'esbuild'

const dir = await mkdtemp(join(tmpdir(), 'sg2-sms-'))
try {
  const outfile = join(dir, 'validation.mjs')
  await build({
    entryPoints: ['src/lib/contactValidation.ts'],
    bundle: true,
    format: 'esm',
    outfile,
    logLevel: 'silent',
  })
  const { validate, recordSmsConsent } = await import(pathToFileURL(outfile).href)
  const inquiry = () => {
    const data = new FormData()
    for (const [k, v] of Object.entries({
      name: 'Preview Test',
      email: 'preview@example.com',
      company: 'Test Company',
      inquiry: 'demo',
    }))
      data.set(k, v)
    return data
  }
  const timestamp = '2026-10-18T20:00:00.000Z'
  const withoutSms = inquiry()
  assert.deepEqual(validate(withoutSms), {})
  recordSmsConsent(withoutSms, timestamp)
  assert.equal(withoutSms.get('sms-consent'), 'no')
  assert.equal(withoutSms.get('sms-consent-at'), '')
  const phoneOnly = inquiry()
  phoneOnly.set('phone', '+1 (202) 555-0100')
  assert.deepEqual(validate(phoneOnly), {})
  recordSmsConsent(phoneOnly, timestamp)
  assert.equal(phoneOnly.get('sms-consent'), 'no', 'Phone alone must not enroll a visitor')
  const optedIn = inquiry()
  optedIn.set('sms-consent', 'yes')
  assert.ok(validate(optedIn).phone, 'Consent requires a number')
  optedIn.set('phone', 'invalid')
  assert.ok(validate(optedIn).phone, 'Reject malformed phone numbers')
  optedIn.set('phone', '+44 7700 900123')
  assert.deepEqual(validate(optedIn), {})
  recordSmsConsent(optedIn, timestamp)
  assert.equal(optedIn.get('sms-consent'), 'yes')
  assert.equal(optedIn.get('sms-consent-at'), timestamp)
  const custom = inquiry()
  custom.set('inquiry', 'custom')
  assert.ok(validate(custom).message, 'Project inquiries still require a description')
  console.log(
    'SMS OK: optional consent, phone validation, explicit opt-in records and existing inquiry rules',
  )
} finally {
  await rm(dir, { recursive: true, force: true })
}
