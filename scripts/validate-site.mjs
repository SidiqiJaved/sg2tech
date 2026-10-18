// Check the generated pages a static host actually serves, including links and form detection.
// Run after npm run build.
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const routes = [
  '/',
  '/solutions/financial-intelligence',
  '/solutions/franchise-management',
  '/services/custom-software-development',
  '/about',
  '/work',
  '/contact',
]
const pages = new Map(
  await Promise.all(
    routes.map(async (route) => [
      route,
      await readFile(join('dist', route === '/' ? '' : route, 'index.html'), 'utf8'),
    ]),
  ),
)

for (const [route, html] of pages) {
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, `${route}: one primary heading`)
  assert.ok(html.includes('id="main"'), `${route}: skip-link destination`)
  for (const [, rawHref] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const href = rawHref.replaceAll('&amp;', '&')
    if (!href.startsWith('/') && !href.startsWith('#')) continue
    const target = new URL(href, `https://sg2tech.com${route}`)
    const targetRoute = target.pathname.replace(/\/$/, '') || '/'
    assert.ok(pages.has(targetRoute), `${route}: broken route ${href}`)
    if (target.hash) {
      assert.ok(
        pages.get(targetRoute).includes(`id="${target.hash.slice(1)}"`),
        `${route}: missing anchor ${href}`,
      )
    }
  }
}
for (const [route, anchor] of [
  ['/', 'products'],
  ['/solutions/financial-intelligence', 'workflows'],
  ['/solutions/franchise-management', 'workflow'],
  ['/services/custom-software-development', 'integrations'],
  ['/services/custom-software-development', 'process'],
  ['/work', 'documentation'],
])
  assert.ok(pages.get(route).includes(`id="${anchor}"`), `${route}: preserve ${anchor}`)

const contact = pages.get('/contact')
assert.match(contact, /<form[^>]*name="contact"[^>]*data-netlify="true"/)
for (const name of [
  'form-name',
  'inquiry',
  'product',
  'name',
  'email',
  'company',
  'locations',
  'message',
]) {
  assert.ok(contact.includes(`name="${name}"`), `Netlify form detection: missing ${name}`)
}
assert.ok(
  contact.indexOf('<form') < contact.indexOf('<aside'),
  'Form precedes contact alternatives',
)
console.log(
  'Site OK: 7 prerendered routes, internal links, preserved anchors, headings and contact schema',
)
