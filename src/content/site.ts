/**
 * Company-wide facts and navigation. Only verified facts belong here.
 * Contact details (email / phone / address) are deliberately absent until
 * confirmed — see LAUNCH-CHECKLIST.md.
 */
export const SITE_URL = (import.meta.env?.VITE_SITE_URL ?? 'https://www.sg2tech.com').replace(
  /\/$/,
  '',
)

export const company = {
  name: 'SG2 Technologies',
  legalName: 'SG2 Technologies, LLC',
  tagline: 'Software Products & Engineering',
  mission: 'We build software that makes businesses run better.',
  year: new Date().getFullYear(),
} as const

export interface NavLink {
  label: string
  to: string
  description?: string
}
export interface NavGroup {
  label: string
  links: NavLink[]
}

export const navGroups: NavGroup[] = [
  {
    label: 'Solutions',
    links: [
      {
        label: 'Financial Intelligence',
        to: '/solutions/financial-intelligence',
        description: 'Revenue, fees and payouts across every location.',
      },
      {
        label: 'Franchise Management',
        to: '/solutions/franchise-management',
        description: 'Inspections, standards and invoicing in one system.',
      },
    ],
  },
  {
    label: 'Engineering',
    links: [
      {
        label: 'Custom Software Development',
        to: '/services/custom-software-development',
        description: 'Applications built around how your business works.',
      },
      {
        label: 'Integrations & Automation',
        to: '/services/custom-software-development#integrations',
        description: 'Connect systems and remove repeat manual work.',
      },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'About SG2', to: '/about', description: 'How we think and work.' },
      { label: 'Our Work', to: '/work', description: 'Case studies and walkthroughs.' },
    ],
  },
]

export const topLevelLinks: NavLink[] = [{ label: 'Contact', to: '/contact' }]

export const demoCta = { label: 'Book a Demo', to: '/contact?inquiry=demo' }

export const footerGroups: NavGroup[] = [
  ...navGroups,
  {
    label: 'Get in touch',
    links: [
      { label: 'Book a Demo', to: '/contact?inquiry=demo' },
      { label: 'Discuss a project', to: '/contact?inquiry=custom' },
    ],
  },
]
