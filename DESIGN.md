# SG2 Technologies: Design System & Creative Rationale

## Positioning

**SG2 Technologies | Software Products & Engineering.**
*We build software that makes businesses run better.*

Two software products (Financial Intelligence, Franchise Management) and one engineering practice (Custom Software). The site must read as a *product company with room to grow*, not a restaurant-only vendor and not an IT consultancy. That drives three structural choices:

1. **Solutions vs. Engineering** are separate top-level nav groups, so products and services never blur.
2. **Industry is never in the navigation.** Restaurants appear in product copy, not in the identity. A new product or industry means a new entry in `src/content/site.ts` plus a page, with no redesign.
3. **Maturity is explicit.** `StatusBadge` (`available`, `development`, `planned`, `illustrative`) is the single mechanism for separating what exists from what is intended.

## Creative direction: Editorial Enterprise

The interface borrows from print more than from SaaS templates.

- **Claim-style headlines** set in a high-contrast serif at large sizes, so each section makes an argument instead of naming a topic. (The structure of sidiqi.ai informed this: chaptered narrative, statement headlines, small eyebrow labels, status-tagged work. Its visual identity was not copied.)
- **Numbered mono eyebrows** (`01 ── THE PROBLEM WE SOLVE`) give the page a chaptered rhythm.
- **Hairline rules with a copper tick** replace boxed cards. The home page's problem list, solutions index, process steps and FAQ are typographic rows, not tiles.
- **Asymmetric 12-column layouts**: a narrow statement column against a wide evidence column, often with the heading sticky.
- **Dark ink sections** are used sparingly, only for the flagship product demo, the royalty view and CTAs, so they carry weight.

What was deliberately left out: gradients, glows, glass, stock photography, floating dashboards, logo walls, testimonials, statistics.

## Typography

| Role | Face | Notes |
|---|---|---|
| Display / headings | **Fraunces** (variable, self-hosted) | `opsz` 96–144 for large sizes, `SOFT` 30 for a slightly warm, human edge. Weight 380–450. |
| Body / UI | **Instrument Sans** (variable, self-hosted) | Neutral, legible at small sizes, less overused than Inter. |
| Labels / data | **IBM Plex Mono** 400/500 | Uppercase, tracked. Used for eyebrows, captions, table headers. |

Fonts come from `@fontsource` packages: no third-party font requests, no tracking, and CSP can stay `font-src 'self'`.

Roles are CSS classes in `src/styles/index.css`: `.t-display`, `.t-h1`, `.t-h2`, `.t-h3`, `.t-lead`, `.t-body`, `.t-label`, `.t-caption`. Sizes use `clamp()` so there are no breakpoint jumps.

## Color

Starting palette from the brief, refined for accessibility. All tokens live in `@theme` in `src/styles/index.css`.

| Token | Hex | Use |
|---|---|---|
| `ivory` | `#F5F2EA` | Page background |
| `ivory-deep` | `#ECE7DA` | Alternate section background |
| `paper` | `#FFFFFF` | Product frames, form fields |
| `ink` | `#1B2829` | Primary text, dark sections |
| `ink-soft` | `#435052` | Body text |
| `ink-mute` | `#5D6A6B` | Captions, labels |
| `copper` | `#B66B42` | Decorative rules, chart line, large accents only |
| `copper-deep` | `#944F2C` | Copper **text** and links, button hover |
| `copper-ink` | `#7A3E20` | Text on `copper-soft` badges |
| `copper-soft` | `#E9CDB9` | Badge backgrounds |
| `sage` / `sage-deep` | `#D3DDCE` / `#3E5A48` | Section tone, positive/"matches" states |

**Contrast (measured, WCAG relative luminance):** ink on ivory 13.6:1 · ink-soft on ivory 7.5:1 · ink-mute on ivory 5.0:1 · copper-deep on ivory 5.5:1 · copper-ink on copper-soft 5.5:1 · sage-deep on sage 5.4:1 · light text on ink ≥ 6.7:1. The brand copper `#B66B42` is only 3.6:1 on ivory, so it is never used for small text.

## Spacing & layout

- Container: `max-width: 84rem`, gutter `clamp(1.25rem, 4vw, 3rem)`.
- Section rhythm: `--section-y: clamp(4.5rem, 10vw, 9rem)`.
- Grid: 12 columns from `lg`; text columns 4–6, evidence columns 6–8.
- Radius: nearly square. Buttons are pills; frames use a small 8px radius. No pervasive rounded-card look.

## Components

`src/components/`
- **layout/**: `Header` (disclosure dropdowns, full-screen mobile nav, Escape-to-close), `Footer`, `Layout` (skip link, scroll and hash handling), `Logo` (typographic wordmark until the official asset is supplied).
- **ui/**: `Button`/`TextLink`, `Section` (tone variants), `SectionHeader`, `Reveal`, `StatusBadge`, and `Blocks` (`FeatureRow`, `Faq` on native `<details>`, `CtaBand`, `PageIntro`).
- **product/**: `ProductFrame` plus the mock interfaces (`fiMocks`, `fmMocks`) and `FeatureTabs`.

### Product visuals

Product visuals are the center of the site and are built to be **replaceable**. `ProductFrame` takes either illustrative `children` or a real `screenshot` prop. Passing a screenshot swaps the content with no layout change, and the "Illustrative data" label disappears automatically. Every mock uses invented numbers, generic names (`Location 01`, `Delivery platform A`) and always carries the visible label.

## Motion

- Easing `cubic-bezier(0.16, 1, 0.3, 1)`, entrance 800 ms, 18 px rise, optional per-element delay (≤ 120 ms).
- Hover: arrows nudge 4 px; solution rows shift 4 px; link and button colors transition in 300 ms.
- **Content is visible by default.** `Reveal` only arms the entrance for elements that start below the fold, after hydration. No JS, SSR, and `prefers-reduced-motion` all show everything immediately.
- No parallax, no scroll-jacking, no looping animation.

## Rendering architecture

Vite + React + TypeScript + Tailwind 4 with **build-time prerendering**. A ~60-line script (`scripts/prerender.mjs`) renders every route to static HTML with `react-dom/server`, injects per-page title, description, canonical and Open Graph tags, and writes `sitemap.xml` and `404.html`. The client then hydrates.

*Trade-off considered:* Next.js or Astro would also give static output, but they add a framework, a heavier toolchain and more to learn for a seven-page marketing site. The custom prerender gives the same SEO result (fully indexable HTML, no JS needed to read content) with no extra dependency, and it works unchanged on Netlify. If the site grows to dozens of dynamic pages, revisit.

## Accessibility decisions

Semantic landmarks and one `h1` per page, with no skipped levels. Skip link. Visible 3 px copper focus ring. Disclosure nav with `aria-expanded`, Escape to close. Tabs follow the ARIA pattern (roving tabindex, arrow/Home/End). Form: explicit labels, `aria-invalid`/`aria-describedby`, error summary with `role="alert"`, focus moved to the first invalid field. Charts have text alternatives (or sit beside real tables). Native `<details>` for the FAQ.
