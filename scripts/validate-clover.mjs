import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'

const sitemap = await readFile('dist/sitemap.xml', 'utf8')
const content = await readFile('src/content/cloverLegal.ts', 'utf8')
for (const [path, canonical] of [
  ['/eula', 'https://sg2tech.com/eula'],
  ['/privacy-policy', 'https://sg2tech.com/privacy-policy/'],
]) {
  const html = await readFile(`dist${path}/index.html`, 'utf8')
  const text = html.replace(/<!--.*?-->/g, '')
  assert.doesNotMatch(html, /Legal review draft|not approved for publication/)
  assert.doesNotMatch(html, /<meta name="robots" content="noindex"/)
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`))
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`))
  assert.ok(html.includes(`<meta property="og:url" content="${canonical}"`))
  assert.match(text, /Effective date: October 27, 2026/)
  assert.doesNotMatch(text, /REVIEW REQUIRED|REVIEW:|pending founder|Pending publication/)
}
const eula = await readFile('dist/eula/index.html', 'utf8')
for (const clause of ['5.1', '5.2', '5.3', '5.4', '9.1', '9.2', '9.3', '10.1', '10.2', '10.3']) {
  assert.ok(eula.includes(clause + ' '), `Missing substantive EULA clause ${clause}`)
}
assert.match(content, /immediately notify the Merchant/)
assert.match(content, /three months preceding/)
assert.match(content, /New York, New York/)
assert.match(content, /signed work-for-hire assignment/)
assert.match(eula, /href="\/privacy-policy\/"/)
const privacy = await readFile('dist/privacy-policy/index.html', 'utf8')
const text = privacy
  .replace(/<!--.*?-->/g, '')
  .replace(/<[^>]*>/g, ' ')
  .replace(/\s+/g, ' ')
for (const phrase of [
  'California privacy rights',
  'During the twelve months preceding October 27, 2026',
  'SG2 did not sell personal information or share it for cross-context behavioral advertising',
  'An authorized agent',
  'Merchant Data is not used for SG2',
  'Clover',
  'financial intelligence application',
  'STOP',
  'HELP',
  'not a condition of purchase',
])
  assert.ok(text.includes(phrase), `Missing unified policy disclosure: ${phrase}`)
assert.match(privacy, /mailto:privacy@sg2tech.com/)
assert.match(privacy, /1706 Amber Cir/)
assert.match(privacy, /id="mobile-information"/)
for (const anchor of [
  'scope',
  'categories',
  'purpose',
  'disclosures',
  'security',
  'rights',
  'california',
  'sale',
  'updates',
  'contact',
]) {
  assert.ok(privacy.includes(`id="${anchor}"`), `Preserve former Clover anchor ${anchor}`)
}
assert.match(privacy, /SG2 Technologies, LLC/)
assert.match(privacy, /<title>Privacy Policy \| SG2 Technologies<\/title>/)
assert.doesNotMatch(sitemap, /clover-privacy-policy/)
assert.equal(
  await access('dist/clover-privacy-policy/index.html').then(
    () => true,
    () => false,
  ),
  false,
  'No second privacy page may be generated',
)
const config = await readFile('netlify.toml', 'utf8')
const redirects = [...config.matchAll(/\[\[redirects\]\]([\s\S]*?)(?=\[\[redirects\]\]|$)/g)].map(
  (m) => m[1],
)
for (const from of ['/clover-privacy-policy', '/clover-privacy-policy/']) {
  const index = redirects.findIndex((rule) => rule.includes(`from = "${from}"`))
  assert.ok(index >= 0, `Missing host redirect ${from}`)
  const rule = redirects[index]
  assert.match(rule, /to = "\/privacy-policy\/"/)
  assert.match(rule, /status = 301/)
  assert.match(rule, /force = true/)
  assert.ok(
    index < redirects.findIndex((r) => r.includes('from = "/*"')),
    'Redirect precedes 404 fallback',
  )
}
console.log(
  'Clover OK: EULA provisions, unified privacy/CCPA/SMS coverage, canonical/sitemap and permanent redirect configuration',
)
