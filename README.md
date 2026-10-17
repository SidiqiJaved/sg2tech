# SG2 Technologies website

Corporate website for SG2 Technologies, LLC. React + TypeScript + Vite + Tailwind CSS 4, statically prerendered for SEO, deployable to Netlify.

> **Status: staging build.** It does not replace the live site at sg2tech.com. Nothing here has been deployed. See [LAUNCH-CHECKLIST.md](./LAUNCH-CHECKLIST.md) before going live and [DESIGN.md](./DESIGN.md) for the design system.

## Local development

Requires Node 20+.

```bash
npm install
npm run dev        # http://localhost:5173 (client-rendered, hot reload)
```

| Script              | Purpose                                                     |
| ------------------- | ----------------------------------------------------------- |
| `npm run dev`       | Dev server                                                  |
| `npm run typecheck` | Strict TypeScript check                                     |
| `npm run lint`      | ESLint                                                      |
| `npm run format`    | Prettier                                                    |
| `npm run build`     | Typecheck, client build, server build, prerender to `dist/` |
| `npm run preview`   | Preview `dist/` (see note)                                  |

> **Note on `preview`:** `vite preview` serves the homepage HTML for every route, which causes harmless hydration warnings on inner pages. Netlify serves the correct per-route HTML. To test the real output locally, use any static server that maps `/about` to `/about/index.html` (e.g. `npx serve dist`).

## Project structure

```
src/
  content/       site.ts (nav, company facts) · routes.ts (SEO per route)
  components/    layout/ · ui/ · product/ (ProductFrame + illustrative mock UIs)
  pages/         one file per route
  styles/        index.css (design tokens + type roles)
scripts/prerender.mjs   static generation, sitemap, 404
public/                 favicon, robots.txt, _headers (security headers + caching)
netlify.toml
```

### Common edits

- **Add a page:** create it in `src/pages`, add a `<Route>` in `src/App.tsx`, an entry in `src/content/routes.ts` (title, description) and, if needed, a nav link in `src/content/site.ts`. It is prerendered and added to the sitemap automatically.
- **Add a product or industry:** same as a page, plus a nav entry. No design changes are needed.
- **Replace an illustrative visual with a real screenshot:** put the approved image in `src/assets/` or `public/` and pass `screenshot={{ src, alt, width, height }}` to that `ProductFrame`. The illustrative label disappears.
- **Mark a capability's status:** use `<StatusBadge status="available | development | planned" />`. Only use `available` for shipped functionality.

## Contact form

The form posts to **Netlify Forms** (it is detected from the prerendered HTML). Spam protection is a honeypot field plus Netlify's built-in filtering. Client-side validation runs in the browser. Netlify Forms performs no custom server-side validation, so treat submissions as untrusted input in whatever reads them. Add a Netlify Function if you need schema validation or delivery to a CRM.

**Safety behavior:** the form only reports success when `VITE_FORMS_ENABLED=true`. Without it (local, previews) a valid submission shows _"Message not sent. Form delivery is not connected"_, so the site can never pretend a message was delivered.

## Environment variables

Set in Netlify → Site configuration → Environment variables. Copy `.env.example` for local use. Never commit `.env`.

| Variable             | Purpose                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| `VITE_SITE_URL`      | Canonical origin for canonical tags, Open Graph and sitemap. Set to the production origin at launch. |
| `VITE_FORMS_ENABLED` | Set to `true` after deploy once the `contact` form shows up under Netlify → Forms.                   |

Both are public build-time values. Do not put secrets in `VITE_*` variables.

## Deploying to Netlify

1. Push the project to a Git repository and import it in Netlify. `netlify.toml` sets the build command (`npm run build`), publish directory (`dist`) and Node 20.
2. Set the environment variables above.
3. Deploy to a **preview URL first**. Review every page, submit a test form, and check Netlify → Forms.
4. Only after sign-off, follow the domain steps in the launch checklist.

Security headers (CSP, frame denial, referrer policy, HSTS) and asset caching are defined in `public/_headers`. There is no analytics, tracking script, cookie or third-party request. If analytics is added later, update the CSP and add a privacy notice.

## Domain migration notes

- The current live site uses different URLs (`/services/`, `/small-business`). Decide on redirects before cutover so existing links and search rankings are not lost. Add them to `netlify.toml` as `[[redirects]]`.
- Lower DNS TTL ahead of cutover. Keep the old deployment available for rollback.
- After launch, submit `sitemap.xml` in Google Search Console and verify the canonical URLs resolve.
