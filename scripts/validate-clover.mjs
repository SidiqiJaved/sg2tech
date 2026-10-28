import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const sitemap = await readFile('dist/sitemap.xml', 'utf8')
const content = await readFile('src/content/cloverLegal.ts', 'utf8')
for (const path of ['/eula', '/clover-privacy-policy']) {
  const html = await readFile(`dist${path}/index.html`, 'utf8')
  const text = html.replace(/<!--.*?-->/g, '')
  assert.doesNotMatch(html, /Legal review draft|not approved for publication/)
  assert.doesNotMatch(html, /<meta name="robots" content="noindex"/)
  assert.ok(sitemap.includes(`<loc>https://sg2tech.com${path}</loc>`))
  assert.ok(html.includes(`<link rel="canonical" href="https://sg2tech.com${path}"`))
  assert.ok(html.includes(`<meta property="og:url" content="https://sg2tech.com${path}"`))
  assert.match(html, /<title>Clover Application/)
  assert.match(text, /Effective date: October 27, 2026/)
  assert.doesNotMatch(
    text,
    /REVIEW REQUIRED|REVIEW:|Insert verified|All collection.*unverified|pending founder|Pending publication/,
  )
}
const eula = await readFile('dist/eula/index.html', 'utf8')
for (const clause of ['5.1', '5.2', '5.3', '5.4', '9.1', '9.2', '9.3', '10.1', '10.2', '10.3']) {
  assert.ok(eula.includes(clause + ' '), `Missing substantive EULA clause ${clause}`)
}
assert.match(content, /immediately notify the Merchant/)
assert.match(content, /twelve months preceding the effective date/)
assert.match(content, /authorized agent/)
assert.match(
  content,
  /SG2 does not sell personal information or share it for cross-context behavioral advertising/,
)
assert.match(
  content,
  /During the twelve months preceding the effective date of this policy, SG2 did not sell personal information or share it for cross-context behavioral advertising/,
)
assert.match(content, /three months preceding/)
assert.match(content, /New York, New York/)
assert.match(content, /signed work-for-hire assignment/)
const privacy = await readFile('dist/clover-privacy-policy/index.html', 'utf8')
assert.match(privacy, /California privacy rights/)
assert.match(privacy, /mailto:privacy@sg2tech.com/)
assert.match(privacy, /1706 Amber Cir/)
assert.match(privacy, /SG2 Technologies, LLC/)
assert.match(eula, /SG2 Technologies, LLC/)
assert.doesNotMatch(privacy, /Upon first publication|does not assert a particular hosting/)
assert.doesNotMatch(eula, /Upon first publication|silently amend|reclaim a client-owned/)
console.log(
  'Clover OK: substantive clauses, existing-contract priority, California disclosures, approved metadata and sitemap inclusion',
)
