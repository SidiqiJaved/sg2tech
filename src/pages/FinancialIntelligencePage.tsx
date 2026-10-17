import { Button } from '@/components/ui/Button'
import { CtaBand, Faq, FeatureRow, PageIntro } from '@/components/ui/Blocks'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProductFrame } from '@/components/product/ProductFrame'
import {
  ChannelMixMock,
  DashboardMock,
  GrossToNetMock,
  LocationComparisonMock,
  PayoutReconciliationMock,
  StatementMock,
} from '@/components/product/fiMocks'

const faqs = [
  {
    q: 'Do I have to replace my point-of-sale system?',
    a: (
      <p>
        No. The product is designed to work alongside the systems you already run, not replace them.
      </p>
    ),
  },
  {
    q: 'Which platforms and POS systems are supported?',
    a: (
      <p>
        It depends on the platform and on your account. We confirm exactly which integrations are
        available for your setup before you commit to anything, and we will tell you plainly if
        something is not supported.
      </p>
    ),
  },
  {
    q: 'Is this an accounting system?',
    a: (
      <p>
        No. It focuses on visibility into revenue, fees and payouts. It is meant to give your
        finance team and your accountant clearer inputs, not to replace your books.
      </p>
    ),
  },
  {
    q: 'How accurate are the numbers?',
    a: (
      <p>
        Figures come from the reports and statements your platforms provide. The product shows where
        sources disagree so a person can look into it. It does not replace review of the underlying
        statements.
      </p>
    ),
  },
  {
    q: 'Are forecasting and AI-generated insights available?',
    a: (
      <p>
        Not yet. They are planned, and we mark anything that is not released as planned or in
        development.
      </p>
    ),
  },
  {
    q: 'How long does onboarding take?',
    a: (
      <p>
        That depends on how many locations and systems are involved. We scope it with you during the
        demo rather than quoting a generic timeline.
      </p>
    ),
  },
]

export function FinancialIntelligencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Solutions · Financial Intelligence"
        title="Know what your restaurants earn, not just what they sell."
        lead="Restaurants generate financial data across point-of-sale (POS) systems, delivery platforms and direct ordering. Financial Intelligence brings POS sales, platform fees and payout information into one place, so your team spends less time assembling reports."
        actions={
          <>
            <Button to="/contact?inquiry=demo">Book a Demo</Button>
            <Button to="#workflows" variant="secondary" arrow={false}>
              See the workflows
            </Button>
          </>
        }
        aside={
          <ProductFrame title="Statement">
            <StatementMock />
          </ProductFrame>
        }
      />

      {/* THE GAP */}
      <Section tone="deep">
        <SectionHeader
          index="01"
          eyebrow="The gap"
          title="Sold is not the same as earned."
          lead="A delivery order rings up at one number and lands in your bank account at another. The difference is made of pieces that rarely appear in one report."
        />
        <Reveal className="mt-14 grid gap-px border border-line bg-line md:grid-cols-4">
          {[
            ['Sales', 'What customers paid, including items, taxes where reported, and tips.'],
            ['Adjustments', 'Discounts, promotions, refunds, and order corrections.'],
            ['Platform fees', 'Commissions and service or marketing charges set by each platform.'],
            ['Net payout', 'What actually arrives, and when.'],
          ].map(([t, d], i) => (
            <div key={t} className="bg-ivory p-7">
              <p className="t-label text-copper-deep">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="t-h3 mt-3">{t}</h3>
              <p className="t-body mt-3 text-[0.95rem]">{d}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* WORKFLOWS */}
      <section id="workflows" className="pb-8">
        <div className="container-page">
          <div className="pt-[var(--section-y)]">
            <SectionHeader
              index="02"
              eyebrow="Workflows"
              title="Built around the questions owners and finance teams ask every week."
            />
          </div>

          <FeatureRow
            index="A"
            eyebrow="Revenue intelligence"
            title="One view of revenue across locations and channels."
            visual={
              <ProductFrame title="Overview">
                <DashboardMock />
              </ProductFrame>
            }
          >
            <p>
              Compare in-store sales from your point-of-sale (POS) system with delivery and direct
              ordering revenue by week, by location, or in total.
            </p>
            <p>Trends are easier to trust when every location is measured the same way.</p>
          </FeatureRow>

          <FeatureRow
            index="B"
            eyebrow="Gross vs. net revenue"
            title="Explain the distance between sales and payout."
            flip
            visual={
              <ProductFrame title="Gross to net">
                <GrossToNetMock />
              </ProductFrame>
            }
          >
            <p>
              See sales, discounts, adjustments, platform fees and net payout in a single
              statement-style breakdown.
            </p>
            <p>When margin moves, you can see which line moved it.</p>
          </FeatureRow>

          <FeatureRow
            index="C"
            eyebrow="Delivery platform analytics"
            title="Consolidate platform reporting instead of logging in to each one."
            visual={
              <ProductFrame title="Sales by channel">
                <ChannelMixMock />
              </ProductFrame>
            }
          >
            <p>
              Where an integration is supported, reporting from delivery platforms such as Uber Eats
              and DoorDash can be brought into the same view as the rest of your sales.
            </p>
            <p>Which platforms are supported for your account is confirmed before you start.</p>
          </FeatureRow>

          <FeatureRow
            index="D"
            eyebrow="Payout reconciliation"
            title="Spot payouts that don’t match what you expected."
            flip
            visual={
              <ProductFrame title="Payout reconciliation">
                <PayoutReconciliationMock />
              </ProductFrame>
            }
          >
            <p>
              Compare reported sales and expected payouts with the money that arrived, and surface
              the differences.
            </p>
            <p>
              The product highlights what to look into. A person still decides what is an error and
              what is expected.
            </p>
          </FeatureRow>

          <FeatureRow
            index="E"
            eyebrow="Multi-location visibility"
            title="Compare restaurants on the same footing."
            visual={
              <ProductFrame title="Location comparison">
                <LocationComparisonMock />
              </ProductFrame>
            }
          >
            <p>Rank and compare locations on net results, not just top-line sales.</p>
            <p>That makes it easier to tell a busy location from a profitable one.</p>
          </FeatureRow>

          <FeatureRow
            index="F"
            eyebrow="Financial reporting"
            title="Structured reports you can hand to a partner or an accountant."
          >
            <p>
              Consistent definitions and clear breakdowns turn a pile of exports into something a
              finance manager can review and an accountant can use.
            </p>
          </FeatureRow>

          <FeatureRow
            index="G"
            eyebrow="Future intelligent insights"
            title="Anomaly detection and forecasting are on the roadmap."
            status="planned"
          >
            <p>
              We are planning insights that flag unusual fees or payout patterns and help estimate
              what is coming. They are not released, and we will not describe them as available
              until they are.
            </p>
          </FeatureRow>
        </div>
      </section>

      {/* SCENARIO */}
      <Section tone="ink">
        <SectionHeader
          index="03"
          eyebrow="A typical Monday"
          title="From assembling reports to reading them."
          lead="An illustrative scenario for a four-location operator."
        />
        <div className="mt-14 grid gap-px bg-line-dark md:grid-cols-2">
          {[
            {
              h: 'Before',
              items: [
                'Log in to each delivery platform and download last week’s statement.',
                'Export sales from the POS for every location.',
                'Combine everything in a spreadsheet and fix the column differences.',
                'Notice a deposit is lower than expected and start searching for why.',
              ],
            },
            {
              h: 'With Financial Intelligence',
              items: [
                'Open one view of last week’s revenue, fees and payouts.',
                'Compare locations on net results.',
                'Open the payouts that don’t match and review the detail.',
                'Spend the time on what to change.',
              ],
            },
          ].map((col) => (
            <div key={col.h} className="bg-ink p-8 sm:p-12">
              <p className="t-label mb-6 text-[#ff9a55]">{col.h}</p>
              <ol className="space-y-4">
                {col.items.map((x, i) => (
                  <li key={x} className="flex gap-4 text-[#d6d9dd]">
                    <span className="t-label mt-1 text-ivory/50">{i + 1}</span>
                    {x}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      {/* INTEGRATIONS */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="04"
              eyebrow="Integrations"
              title="Works with the systems restaurants already use."
              lead="Names below are given for context. Availability of each integration is confirmed per customer before any commitment."
            />
          </div>
          <dl className="lg:col-span-6 lg:col-start-7">
            {[
              ['Point of sale', 'For example Clover and Toast'],
              ['Delivery platforms', 'For example Uber Eats and DoorDash'],
              ['Direct ordering', 'Online ordering sources you operate yourself'],
              ['Bank and payout data', 'Deposits received, for comparison with expected payouts'],
            ].map(([k, v]) => (
              <div
                key={k}
                className="grid gap-1 border-b border-line py-5 first:border-t sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <dt className="font-medium">{k}</dt>
                <dd className="t-body">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* AUDIENCE */}
      <Section tone="sage">
        <SectionHeader
          index="05"
          eyebrow="Who it is for"
          title="Made for the people who answer for the numbers."
        />
        <ul className="mt-12 grid gap-x-12 gap-y-0 sm:grid-cols-2">
          {[
            'Multi-location restaurant owners',
            'Restaurant groups',
            'Franchise operators',
            'Finance managers',
            'Operations directors',
            'Owners working across several delivery and POS platforms',
          ].map((x) => (
            <li key={x} className="border-b border-ink/20 py-4 font-display text-xl tracking-tight">
              {x}
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader index="06" eyebrow="Questions" title="Straight answers." />
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs} />
          </div>
        </div>
      </Section>

      <CtaBand
        title="See your own numbers in one view."
        primary={{ label: 'Book a Demo', to: '/contact?inquiry=demo' }}
        secondary={{ label: 'Franchise Management', to: '/solutions/franchise-management' }}
      />
    </>
  )
}
