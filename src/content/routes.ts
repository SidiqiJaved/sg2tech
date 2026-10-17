import { publishedCaseStudies } from './caseStudies'

export interface RouteMeta {
  path: string
  title: string
  description: string
  /** Included in sitemap.xml */
  indexable: boolean
}

export const routeMeta: RouteMeta[] = [
  {
    path: '/',
    title: 'SG2 Technologies | Software Products & Engineering',
    description:
      'SG2 builds AI-Enabled Financial Intelligence and Franchise Management software for multi-location restaurants and franchises, plus custom business applications that connect data and simplify operations.',
    indexable: true,
  },
  {
    path: '/solutions/financial-intelligence',
    title: 'AI-Enabled Financial Intelligence for Restaurants | SG2',
    description:
      'AI-Enabled Financial Intelligence for multi-location restaurants: revenue, platform fees and payouts in one view, with reconciliation, discrepancy identification, natural-language analysis and AI anomaly detection.',
    indexable: true,
  },
  {
    path: '/solutions/franchise-management',
    title: 'Franchise Management Software | SG2 Technologies',
    description:
      'One system for franchise inspections, standards, training, invoicing and royalty reporting. Operational oversight for franchisors and multi-unit operators.',
    indexable: true,
  },
  {
    path: '/services/custom-software-development',
    title: 'Custom Software Development | SG2 Technologies',
    description:
      'Custom web applications, integrations, workflow automation and business intelligence built around how your organization actually works.',
    indexable: true,
  },
  {
    path: '/about',
    title: 'About SG2 | Software Products & Engineering',
    description:
      'SG2 is a software products and engineering company focused on practical business problems. Learn how we approach problems and work with customers.',
    indexable: true,
  },
  {
    path: '/work',
    title: 'Our Work | SG2 Technologies',
    description:
      'How SG2 documents its work: challenge, approach, capabilities and verified outcomes. Case studies are published with client approval.',
    indexable: true,
  },
  {
    path: '/contact',
    title: 'Book a Demo or Discuss a Project | SG2 Technologies',
    description:
      'Request a product demonstration of SG2 Financial Intelligence or Franchise Management, or start a conversation about custom software.',
    indexable: true,
  },
]

routeMeta.push(
  ...publishedCaseStudies.map((c) => ({
    path: `/work/${c.slug}`,
    title: `${c.title} | SG2 Technologies`,
    description: c.summary,
    indexable: true,
  })),
)

export const notFoundMeta: RouteMeta = {
  path: '/404',
  title: 'Page not found | SG2 Technologies',
  description: 'The page you were looking for does not exist.',
  indexable: false,
}

export function metaFor(path: string): RouteMeta {
  const clean = path.split('?')[0]?.split('#')[0] ?? '/'
  const normalized = clean.length > 1 ? clean.replace(/\/$/, '') : clean
  return routeMeta.find((r) => r.path === normalized) ?? notFoundMeta
}
