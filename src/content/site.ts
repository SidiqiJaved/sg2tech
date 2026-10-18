/** Company-wide facts and navigation. Only verified facts belong here. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://www.sg2tech.com').replace(
  /\/$/,
  '',
)

export const company = {
  name: 'SG2 Technologies',
  legalName: 'SG2 Technologies, LLC',
  tagline: 'Software Products & Engineering',
  mission: 'To help businesses operate with greater clarity, confidence, and ease.',
  year: new Date().getFullYear(),
} as const

export const contact = {
  email: 'hello@sg2tech.com',
  phone: '+1 (202) 468-1590',
  phoneHref: 'tel:+12024681590',
  emailHref: 'mailto:hello@sg2tech.com',
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

export const aiAvailability =
  'Natural-language analysis and AI anomaly detection are being introduced through our next rollout phase. They are not enabled for every customer; availability and scope are confirmed before you commit.'

export const navGroups: NavGroup[] = [
  {
    label: 'Products',
    links: [
      {
        label: 'Financial Intelligence',
        to: '/solutions/financial-intelligence',
        description: 'Revenue, fees, payouts and reconciliation.',
      },
      {
        label: 'Franchise Management',
        to: '/solutions/franchise-management',
        description: 'Standards, oversight, royalties and invoices.',
      },
    ],
  },
]

export const topLevelLinks: NavLink[] = [
  { label: 'Custom Engineering', to: '/services/custom-software-development' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
export const mobileLinks = [...navGroups.flatMap((group) => group.links), ...topLevelLinks]
export const demoCta = { label: 'Book a demo', to: '/contact?inquiry=demo' }
export const footerGroups: NavGroup[] = [
  ...navGroups,
  { label: 'SG2', links: [...topLevelLinks, { label: 'How we work', to: '/work' }] },
]
