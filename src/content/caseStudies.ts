/**
 * Case studies. Add an entry here to publish one: it automatically gets a
 * /work/<slug> page, a card on /work, and a sitemap entry.
 *
 * PUBLISHING RULES
 *  - `approved` must be true only after written client approval for every
 *    name, logo, screenshot and figure used.
 *  - `outcomes` must contain only verified results. Never estimate.
 *  - Use `anonymous: true` and a descriptive `client` (e.g. "Multi-location
 *    restaurant group") when the client has not approved being named.
 */
export interface CaseStudy {
  slug: string
  approved: boolean
  anonymous: boolean
  client: string
  title: string
  summary: string
  industry: string
  challenge: string
  initialState: string
  approach: string
  capabilities: string[]
  technology: string[]
  outcomes: string[]
  future?: string
  screenshot?: { src: string; alt: string; width: number; height: number }
}

export const caseStudies: CaseStudy[] = []

export const publishedCaseStudies = caseStudies.filter((c) => c.approved)
