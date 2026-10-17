import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Button, TextLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { ProductFrame } from '@/components/product/ProductFrame'
import { FeatureTabs, type FeatureTab } from '@/components/product/FeatureTabs'
import { NetworkOverviewMock } from '@/components/product/fmMocks'
import {
  DashboardMock,
  StatementMock,
  GrossToNetMock,
  LocationComparisonMock,
  PayoutReconciliationMock,
  RevenueOverviewMock,
} from '@/components/product/fiMocks'

const problems = [
  {
    t: 'Disconnected systems',
    d: 'Point of sale, delivery apps, accounting and scheduling each hold part of the picture. None of them hold all of it.',
  },
  {
    t: 'Fragmented operational data',
    d: 'The same week is described differently depending on which report you open.',
  },
  {
    t: 'Manual reporting',
    d: 'Someone exports spreadsheets every week and stitches them together before anyone can ask a question.',
  },
  {
    t: 'Limited financial visibility',
    d: 'Sales are easy to see. What actually reached the bank, after fees and adjustments, is not.',
  },
  {
    t: 'Inefficient processes',
    d: 'Approvals, follow-ups and handoffs live in email threads and memory.',
  },
  {
    t: 'Many locations, no common view',
    d: 'Each new location adds another set of numbers to reconcile and another standard to check.',
  },
]

const solutions = [
  {
    n: '01',
    title: 'Financial Intelligence',
    kind: 'Software product',
    body: 'Financial visibility across restaurants, platforms, and locations.',
    to: '/solutions/financial-intelligence',
  },
  {
    n: '02',
    title: 'Franchise Management',
    kind: 'Software product',
    body: 'Operational oversight, compliance workflows, and franchise administration.',
    to: '/solutions/franchise-management',
  },
  {
    n: '03',
    title: 'Custom Software & Engineering',
    kind: 'Engineering service',
    body: 'Purpose-built applications, integrations, and automation.',
    to: '/services/custom-software-development',
  },
]

const featureTabs: FeatureTab[] = [
  {
    id: 'revenue',
    label: 'Revenue visibility',
    heading: 'See every sales channel in one place',
    body: 'Gross sales, fees and net payout side by side, by week and by location, so a question like “how did last week go?” has one answer.',
    frameTitle: 'Revenue overview',
    visual: <RevenueOverviewMock />,
  },
  {
    id: 'platforms',
    label: 'Delivery platform reporting',
    heading: 'Follow the money from order to payout',
    body: 'Break each platform’s statement into sales, discounts, commissions and fees, so the gap between what you sold and what you keep is explained.',
    frameTitle: 'Gross to net',
    visual: <GrossToNetMock />,
  },
  {
    id: 'payouts',
    label: 'Payout reconciliation',
    heading: 'Compare what was expected with what arrived',
    body: 'Line up reported sales against deposits and flag the differences worth a closer look.',
    frameTitle: 'Payout reconciliation',
    visual: <PayoutReconciliationMock />,
  },
  {
    id: 'locations',
    label: 'Location comparison',
    heading: 'Compare locations on the same basis',
    body: 'Measure each restaurant with the same definitions, so differences point to operations rather than to how the numbers were assembled.',
    frameTitle: 'Location comparison',
    visual: <LocationComparisonMock />,
  },
]

const steps = [
  [
    'Discover',
    'We learn how the business runs, where the numbers come from and who relies on them. No code yet.',
  ],
  [
    'Design',
    'We define the workflow and the screens people will use, and agree on what “done” means.',
  ],
  ['Build', 'Engineering in small increments that you can see and react to.'],
  ['Integrate', 'We connect the systems you already use so people stop re-entering data.'],
  [
    'Improve',
    'We watch real usage, then refine. Software is only finished when it stops needing explanation.',
  ],
]

const capabilities = [
  'Web application development',
  'API and system integrations',
  'Cloud-backed applications',
  'Business intelligence dashboards',
  'Workflow automation',
  'Data integration',
  'Software modernization',
]

export function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20 lg:pb-28">
        <div className="container-page">
          <p className="t-label mb-8 flex items-center gap-3 text-copper-deep">
            <span aria-hidden className="h-px w-8 bg-copper" /> Software products &amp; engineering
          </p>
          <h1 className="t-display max-w-[15ch]">
            Complex operations. <em className="font-normal italic text-copper-deep">Clearer</em>{' '}
            decisions.
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="t-lead max-w-2xl">
              SG2 Technologies develops intelligent software products and custom business
              applications that connect data, simplify operations, and help organizations make
              better decisions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/solutions/financial-intelligence">Explore Our Solutions</Button>
              <Button to="/contact?inquiry=custom" variant="secondary">
                Discuss a Project
              </Button>
            </div>
          </div>
        </div>

        <div className="container-page mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4 lg:pt-6">
            <p className="t-label mb-5 text-ink-mute">Financial Intelligence, in view</p>
            <ol className="space-y-5">
              {[
                [
                  'Gross sales and net payout',
                  'Two lines, one chart. The distance between them is what fees and adjustments cost.',
                ],
                [
                  'By week, by location',
                  'The same definitions everywhere, so locations are comparable.',
                ],
                [
                  'Built for the finance question',
                  'Fewer exports. More time spent on the decision itself.',
                ],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="t-label mt-1 text-copper-deep">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block font-medium">{t}</span>
                    <span className="t-caption block">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={120} className="min-w-0 lg:col-span-8">
            <ProductFrame title="Financial Intelligence · Overview">
              <DashboardMock />
            </ProductFrame>
            <p className="t-caption mt-3">
              Illustrative interface with sample data. Approved product screenshots will replace
              this view.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT SHOWCASE: Financial Intelligence ~60%, Franchise Management ~40% */}
      <Section tone="paper">
        <SectionHeader
          index="01"
          eyebrow="The products"
          title="See the software, not just the pitch."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12">
          <Reveal className="min-w-0">
            <ProductFrame title="Financial Intelligence · Statement">
              <StatementMock />
            </ProductFrame>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-md">
                <p className="t-label text-copper-deep">Financial Intelligence</p>
                <p className="t-h3 mt-2">
                  Point-of-sale (POS) sales, platform fees and payouts in one statement.
                </p>
              </div>
              <TextLink to="/solutions/financial-intelligence">Explore the product</TextLink>
            </div>
          </Reveal>
          <Reveal delay={120} className="min-w-0">
            <ProductFrame title="Franchise Management · Network">
              <NetworkOverviewMock />
            </ProductFrame>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-md">
                <p className="t-label text-copper-deep">Franchise Management</p>
                <p className="t-h3 mt-2">Oversight and compliance across every location.</p>
              </div>
              <TextLink to="/solutions/franchise-management">Explore the product</TextLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* PROBLEM */}
      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                index="02"
                eyebrow="The problem we solve"
                title={
                  <>
                    The data exists. <span className="text-ink-mute">It just doesn’t agree.</span>
                  </>
                }
                lead="Most growing businesses are not short of information. They are short of a single, trustworthy view of it."
              />
            </div>
          </div>
          <ol className="lg:col-span-7">
            {problems.map((p, i) => (
              <Reveal
                as="li"
                key={p.t}
                delay={i * 40}
                className="rule-tick grid gap-2 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span className="t-label pt-1.5 text-copper-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="t-h3">{p.t}</h3>
                  <p className="t-body mt-2 max-w-xl">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* SOLUTIONS */}
      <Section>
        <SectionHeader
          index="03"
          eyebrow="Our solutions"
          title="Two products and an engineering practice."
          lead="Products for the problems we see repeatedly. Engineering for the ones that need something built from scratch."
        />
        <ul className="mt-14 border-t border-ink/80">
          {solutions.map((s) => (
            <li key={s.to} className="border-b border-line">
              <Link
                to={s.to}
                className="group grid items-center gap-3 py-8 transition-colors hover:bg-ivory-deep/60 sm:grid-cols-[4rem_1.2fr_1fr_auto] sm:gap-8 sm:px-4 sm:py-10"
              >
                <span className="t-label text-copper-deep">{s.n}</span>
                <span>
                  <span className="t-label mb-2 block text-ink-mute">{s.kind}</span>
                  <span className="font-display text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
                    {s.title}
                  </span>
                </span>
                <span className="t-body max-w-sm">{s.body}</span>
                <span className="hidden h-12 w-12 place-items-center rounded-full border border-ink/60 transition-colors group-hover:bg-ink group-hover:text-ivory sm:grid">
                  <ArrowUpRight aria-hidden size={20} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* FEATURED PRODUCT */}
      <Section tone="ink">
        <SectionHeader
          index="04"
          eyebrow="Featured product · Financial Intelligence"
          title="Know what your restaurants earn, not just what they sell."
          lead="Sales are the start of the story. Fees, adjustments and payout timing are where margin quietly changes."
        />
        <div className="mt-14">
          <FeatureTabs tabs={featureTabs} dark />
        </div>
        <div className="rule-tick mt-14 flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[0.95rem] text-[#cdd0d4]">
            Next on the roadmap: operational insights such as anomaly detection and forecasting.{' '}
            <StatusBadge status="planned" className="ml-1 align-middle !text-ivory/80" />
          </p>
          <Button to="/solutions/financial-intelligence" variant="ghost-dark">
            See the full product
          </Button>
        </div>
      </Section>

      {/* HOW WE WORK */}
      <Section>
        <SectionHeader
          index="05"
          eyebrow="How we work"
          title="We start with the business, not the code."
          lead="Every engagement and every product decision follows the same five steps."
        />
        <ol className="mt-16 grid gap-0 md:grid-cols-5">
          {steps.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 70} className="rule-tick py-6 md:pr-6">
              <span className="t-label text-copper-deep">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="t-h3 mt-3">{t}</h3>
              <p className="t-body mt-3 text-[0.95rem]">{d}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ENGINEERING */}
      <Section tone="sage">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader
              index="06"
              eyebrow="Engineering capabilities"
              title="When off-the-shelf stops fitting, we build."
              lead="Custom software for organizations in any industry, delivered by the same team that builds our products."
            />
            <div className="mt-8">
              <TextLink to="/services/custom-software-development">
                Custom software development
              </TextLink>
            </div>
          </div>
          <ul className="lg:col-span-5 lg:col-start-8">
            {capabilities.map((c) => (
              <li
                key={c}
                className="flex items-baseline gap-4 border-b border-ink/20 py-4 font-display text-xl tracking-tight first:border-t"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 translate-y-[-3px] rounded-full bg-copper-deep"
                />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* WORK */}
      <Section>
        <SectionHeader
          index="07"
          eyebrow="Our work"
          title="Case studies, published with permission."
          lead="We only name clients, show their screens or report outcomes once they have approved it, and we do not publish numbers we cannot verify."
        />
        <Reveal className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-[1.2fr_1fr]">
          <div className="bg-paper p-8 sm:p-12">
            <StatusBadge status="planned" />
            <h3 className="t-h2 mt-6">Multi-location restaurant group</h3>
            <p className="t-body mt-4 max-w-lg">
              A walkthrough of how a restaurant group consolidates platform reporting and payouts is
              in preparation. It will be published once the client has reviewed and approved it.
            </p>
            <div className="mt-8">
              <TextLink to="/work">See how we document our work</TextLink>
            </div>
          </div>
          <div className="bg-ivory-deep p-8 sm:p-12">
            <p className="t-label mb-4 text-ink-mute">Every case study covers</p>
            <ul className="space-y-2.5 text-[0.95rem] text-ink-soft">
              {[
                'The business challenge',
                'Where things stood',
                'Our approach',
                'What was built',
                'Technology and integrations',
                'Verified outcomes',
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-copper" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* FINAL CTA */}
      <section className="on-dark bg-ink py-24 text-ivory sm:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="t-h1 max-w-4xl">Let’s build something that works for your business.</h2>
            <div className="mt-12 flex flex-wrap gap-3">
              <Button to="/solutions/financial-intelligence" variant="copper">
                Explore Our Products
              </Button>
              <Button to="/contact?inquiry=custom" variant="ghost-dark">
                Discuss a Custom Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
