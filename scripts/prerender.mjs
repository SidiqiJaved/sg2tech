// Static generation: renders every route to HTML, injects per-page <head> tags,
// writes sitemap.xml and the 404 page. Runs after `build:client` and `build:server`.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const serverDir = join(root, 'dist-server')

const { render, routeMeta, notFoundMeta, SITE_URL } = await import(
  pathToFileURL(join(serverDir, 'entry-server.js')).href
)

const template = await readFile(join(dist, 'index.html'), 'utf8')
// Set VITE_NOINDEX=true on staging/preview deploys so they are never indexed.
const NOINDEX = process.env.VITE_NOINDEX === 'true'
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SG2 Technologies, LLC',
  url: SITE_URL,
  description:
    'Software products and engineering: AI-Enabled Financial Intelligence and franchise management software, plus custom business applications.',
}

function head(meta, { home = false } = {}) {
  const url = SITE_URL + (meta.canonicalPath ?? (meta.path === '/' ? '/' : meta.path))
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.indexable && !NOINDEX ? '' : '<meta name="robots" content="noindex" />',
    meta.path !== '/404' ? `<link rel="canonical" href="${url}" />` : '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="SG2 Technologies" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    meta.path !== '/404' ? `<meta property="og:url" content="${url}" />` : '',
    `<meta name="twitter:card" content="summary" />`,
    home ? `<script type="application/ld+json">${JSON.stringify(orgJsonLd)}</script>` : '',
  ]
  return tags.filter(Boolean).join('\n    ')
}

function page(meta, urlPath, opts) {
  // React hoists resource hints (e.g. <link rel="preload" as="image">) to the start of the
  // rendered string. Inside #root they break hydration, so move them into <head>.
  const app = render(urlPath)
  const hoisted = app.match(/^(?:<link[^>]*>)+/)?.[0] ?? ''
  return template
    .replace(
      '<!--head-->',
      head(meta, opts) +
        (hoisted
          ? `
    ${hoisted}`
          : ''),
    )
    .replace('<!--app-->', () => app.slice(hoisted.length))
}

for (const meta of routeMeta) {
  const html = page(meta, meta.path, { home: meta.path === '/' })
  const outDir = meta.path === '/' ? dist : join(dist, meta.path)
  await mkdir(outDir, { recursive: true })
  await writeFile(join(outDir, 'index.html'), html)
  console.log('prerendered', meta.path)
}

// 404: render a path that matches no route.
await writeFile(join(dist, '404.html'), page(notFoundMeta, '/__not-found__'))

const today = new Date().toISOString().slice(0, 10)
const urls = routeMeta
  .filter((r) => r.indexable)
  .map(
    (r) =>
      `  <url><loc>${SITE_URL}${r.canonicalPath ?? (r.path === '/' ? '/' : r.path)}</loc><lastmod>${today}</lastmod></url>`,
  )
  .join('\n')
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
const robotsPath = join(dist, 'robots.txt')
const robots = await readFile(robotsPath, 'utf8')
await writeFile(
  robotsPath,
  robots.replace(/\n# Sitemap.*\n?$/, '').trimEnd() + `\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
)

await rm(serverDir, { recursive: true, force: true })
console.log('sitemap.xml and 404.html written')
