import { Button, TextLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProductFrame } from '@/components/product/ProductFrame'
import { FeatureTabs, type FeatureTab } from '@/components/product/FeatureTabs'
import { contact } from '@/content/site'
import { InspectionChecklistMock, NetworkOverviewMock } from '@/components/product/fmMocks'
import {
  AnomalyInsightsMock,
  AskYourDataMock,
  DashboardMock,
  GrossToNetMock,
  LocationComparisonMock,
  PayoutVisibilityMock,
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
    d: 'Sales are easy to see. What you actually keep, after fees and adjustments, is not.',
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
    heading: 'Reconcile payouts and surface discrepancies',
    body: 'Reconcile reported sales against platform payouts and identify the discrepancies worth a closer look.',
    frameTitle: 'Payout reconciliation',
    visual: <PayoutVisibilityMock />,
  },
  {
    id: 'ask',
    label: 'Natural-language analysis',
    heading: 'Ask your financial data a question',
    body: 'Ask why net payout moved or which platform is driving fees, and get an answer grounded in your reconciled figures. Illustrative experience; introduced through our next rollout phase and included by agreed scope.',
    frameTitle: 'AI-Enabled Financial Intelligence · Ask',
    visual: <AskYourDataMock />,
  },
  {
    id: 'anomalies',
    label: 'AI anomaly detection',
    heading: 'Surface what looks unusual',
    body: 'Unusual fee rates, refund spikes and payout gaps are surfaced for review, so your team investigates early. Illustrative experience; introduced through our next rollout phase and included by agreed scope.',
    frameTitle: 'AI-Enabled Financial Intelligence · Insights',
    visual: <AnomalyInsightsMock />,
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
              SG2 Technologies builds AI-Enabled Financial Intelligence and custom business software
              that connect data, reconcile reported figures, surface discrepancies and support
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

        <div className="container-page mt-14 lg:mt-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl bg-ink p-4 sm:p-8 lg:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-copper/20 blur-3xl"
              />
              <div className="relative grid gap-6 lg:grid-cols-12">
                <div className="min-w-0 lg:col-span-8">
                  <ProductFrame title="Financial Intelligence · Overview">
                    <DashboardMock />
                  </ProductFrame>
                </div>
                <div className="min-w-0 lg:col-span-4 lg:mt-24">
                  <ProductFrame title="AI-Enabled Financial Intelligence · Ask">
                    <AskYourDataMock />
                  </ProductFrame>
                </div>
              </div>
              <p className="relative mt-5 text-[0.8rem] text-[#a9adb3]">
                Illustrative interfaces with invented sample data.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                index="01"
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

      {/* FINANCIAL INTELLIGENCE */}
      <Section tone="ink">
        <SectionHeader
          index="02"
          eyebrow="Product · AI-Enabled Financial Intelligence"
          title="Know what your restaurants earn, not just what they sell."
          lead="Sales are the start of the story. Fees, adjustments and payout timing are where margin quietly changes. Ask questions in plain language and surface what looks unusual."
        />
        <div className="mt-14">
          <FeatureTabs tabs={featureTabs} dark />
        </div>
        <div className="rule-tick mt-14 flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[0.95rem] text-[#cdd0d4]">
            Natural-language analysis and AI anomaly detection are introduced through our next
            rollout phase and included in implementations by agreed scope.
          </p>
          <Button to="/solutions/financial-intelligence" variant="ghost-dark">
            See the full product
          </Button>
        </div>
      </Section>

      {/* FRANCHISE MANAGEMENT */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              index="03"
              eyebrow="Product · Franchise Management"
              title="One network. One standard. Full visibility."
              lead="Headquarters and every location work from the same standards, checklists and records, with solutions shaped to your network."
            />
            <ul className="mt-8">
              {[
                'Franchise oversight and reporting',
                'Inspections and operational checklists',
                'Training and employee management workflows',
                'Operational follow-ups',
                'Franchise invoicing and royalties',
              ].map((x) => (
                <li
                  key={x}
                  className="flex gap-3 border-b border-line py-3 text-[0.95rem] first:border-t"
                >
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-copper" />
                  {x}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button to="/solutions/franchise-management" variant="secondary">
                Explore Franchise Management
              </Button>
            </div>
          </div>
          <Reveal className="grid min-w-0 gap-6 lg:col-span-7">
            <ProductFrame title="Network overview">
              <NetworkOverviewMock />
            </ProductFrame>
            <ProductFrame title="Inspection checklist">
              <InspectionChecklistMock />
            </ProductFrame>
          </Reveal>
        </div>
      </Section>

      {/* TECHNOLOGY, SECURITY & INNOVATION */}
      <Section tone="ink">
        <SectionHeader
          index="04"
          eyebrow="Technology, security & innovation"
          title="Intelligent analytics, built on dependable engineering."
          lead="Connected data, reliable reconciliation and a clear path to AI-enabled analysis."
        />
        <div className="mt-14 grid gap-px bg-line-dark lg:grid-cols-3">
          <article className="bg-ink p-8 sm:p-10">
            <p className="t-label text-[#ff9a55]">Advanced data engineering</p>
            <h3 className="t-h3 mt-4">Reliable data. More informed decisions.</h3>
            <p className="t-body mt-4 text-[0.95rem]">
              Source reports and files are brought through structured pipelines into one consistent
              model, so every location and channel is measured the same way before it reaches a
              report.
            </p>
            <ol className="mt-6 space-y-2 text-[0.9rem]">
              {[
                'Ingest source data',
                'Structure and map it',
                'Reconcile and identify discrepancies',
                'Report',
              ].map((x, i) => (
                <li key={x} className="flex gap-3">
                  <span className="t-label mt-0.5 text-ivory/50">{i + 1}</span>
                  {x}
                </li>
              ))}
            </ol>
          </article>
          <article className="bg-ink p-8 sm:p-10">
            <p className="t-label text-[#ff9a55]">Security &amp; data protection</p>
            <h3 className="t-h3 mt-4">Security considered throughout the architecture.</h3>
            <p className="t-body mt-4 text-[0.95rem]">
              SG2 takes a security-focused approach to application architecture and data protection.
              We treat customer financial data as sensitive from the first design decision, not as
              something added at the end.
            </p>
            <p className="t-caption mt-6">
              Questions about specific safeguards are welcome at any stage of an evaluation.
            </p>
          </article>
          <article className="bg-ink p-8 sm:p-10">
            <p className="t-label text-[#ff9a55]">AI-Enabled Financial Intelligence</p>
            <h3 className="t-h3 mt-4">Ask your data. Catch what looks unusual.</h3>
            <p className="t-body mt-4 text-[0.95rem]">
              Natural-language financial analysis and AI anomaly detection, built on reconciled
              data. Introduced through our next rollout phase and included in customer
              implementations based on agreed requirements and scope.
            </p>
            <ul className="mt-4 space-y-2 text-[0.9rem]">
              {[
                'Natural-language financial analysis',
                'AI anomaly detection',
                'Built on existing reporting and reconciliation',
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-copper" />
                  {x}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      {/* CUSTOM SOFTWARE */}
      <Section tone="sage">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader
              index="05"
              eyebrow="Engineering capabilities"
              title="When off-the-shelf stops fitting, we build."
              lead="Custom software for organizations in any industry, delivered by the same team that builds our products. Your systems should work together. No black boxes. No unnecessary complexity."
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

      {/* HOW WE WORK */}
      <Section>
        <SectionHeader
          index="06"
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

      {/* FINAL CTA */}
      <section className="on-dark bg-ink py-24 text-ivory sm:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="t-h1 max-w-4xl">Let’s build something that works for your business.</h2>
            <p className="mt-8 text-lg text-ivory/80">
              <a href={contact.emailHref} className="underline underline-offset-4">
                {contact.email}
              </a>
              <span aria-hidden className="mx-3 opacity-50">
                ·
              </span>
              <a href={contact.phoneHref} className="underline underline-offset-4">
                {contact.phone}
              </a>
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/contact?inquiry=demo" variant="copper">
                Book a Demo
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
