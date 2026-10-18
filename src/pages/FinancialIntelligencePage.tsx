import { Button, TextLink } from '@/components/ui/Button'
import { CtaBand, Faq, PageIntro } from '@/components/ui/Blocks'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProductFrame } from '@/components/product/ProductFrame'
import { FinancialSummary } from '@/components/product/FinancialSummary'
import {
  GrossToNetMock,
  PayoutVisibilityMock,
  RoyaltyInvoiceMock,
  AskYourDataMock,
} from '@/components/product/fiMocks'
import { aiAvailability } from '@/content/site'

const faqs = [
  {
    q: 'Will it work with our systems?',
    a: (
      <p>
        Keep your existing point-of-sale system. Uber Eats and DoorDash financial reporting is
        supported. Clover sales data is ingested through SFTP or CSV; a direct Clover API
        integration is planned. Support for other sources is confirmed before you commit.
      </p>
    ),
  },
  {
    q: 'Does this replace accounting or verify bank deposits?',
    a: (
      <p>
        No. It organizes revenue, fees and platform-reported payouts for review. Net payout is not
        profit or a verified bank deposit. Figures come from source reports; your team and
        accountant still review the underlying statements.
      </p>
    ),
  },
  {
    q: 'What does AI do, and is it available?',
    a: (
      <p>
        {aiAvailability} Natural-language analysis and anomaly detection build on established
        reporting and reconciliation. AI supports human review and builds on core reconciliation. It
        does not guarantee detection of every anomaly.
      </p>
    ),
  },
  {
    q: 'How are onboarding, safeguards and scope agreed?',
    a: (
      <p>
        We review your locations, source systems, royalty agreements and requirements during
        discovery. We confirm included capabilities, data protection safeguards and onboarding scope
        with you before you commit. Timelines depend on your implementation.
      </p>
    ),
  },
]

export function FinancialIntelligencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Financial Intelligence"
        title="See revenue, fees and payouts clearly."
        lead="Bring restaurant sales and payouts into one view. Compare locations, reconcile platform reports and investigate discrepancies without assembling every report by hand."
        actions={
          <Button to="/contact?inquiry=demo&product=financial-intelligence">Book a demo</Button>
        }
        aside={
          <ProductFrame title="Sample financial overview">
            <FinancialSummary />
          </ProductFrame>
        }
      />

      <Section id="workflows" tone="soft">
        <SectionHeader
          eyebrow="Reporting & reconciliation"
          title="Three ways to understand your numbers."
        />
        <div className="mt-8 workflow-disclosures">
          <details open>
            <summary>Revenue and location reporting</summary>
            <div className="workflow-content">
              <div>
                <h3 className="t-h3">Compare the same measures.</h3>
                <p className="t-body mt-3">
                  View revenue across supported sales channels and locations with consistent
                  definitions. Follow weekly trends, compare restaurants and prepare structured
                  reports for your finance team or accountant.
                </p>
              </div>
              <ProductFrame title="Revenue overview">
                <FinancialSummary />
              </ProductFrame>
            </div>
          </details>
          <details>
            <summary>Fees and payout breakdown</summary>
            <div className="workflow-content">
              <div>
                <h3 className="t-h3">Follow sales through to payout.</h3>
                <p className="t-body mt-3">
                  See how discounts, refunds, adjustments and platform fees change the amount
                  reported as payable. Understand the deductions in a statement-style breakdown,
                  rather than comparing sales totals alone.
                </p>
              </div>
              <ProductFrame title="Gross sales to net payout">
                <GrossToNetMock />
              </ProductFrame>
            </div>
          </details>
          <details>
            <summary>Reconciliation and discrepancy review</summary>
            <div className="workflow-content">
              <div>
                <h3 className="t-h3">Investigate what doesn’t match.</h3>
                <p className="t-body mt-3">
                  Compare calculated net payout with platform-reported payout. Separate timing
                  differences from unexplained gaps and review the underlying detail. A person
                  decides what needs investigation and whether a difference is expected.
                </p>
              </div>
              <ProductFrame title="Payout reconciliation">
                <PayoutVisibilityMock />
              </ProductFrame>
            </div>
          </details>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Supported sources" title="Start with the systems you use." />
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {[
            ['Uber Eats & DoorDash', 'Financial reporting supported'],
            ['Clover POS', 'Sales data through SFTP or CSV today; direct API planned'],
            ['Other systems', 'Compatibility and implementation confirmed during discovery'],
          ].map(([name, description]) => (
            <div key={name} className="grid gap-2 py-5 sm:grid-cols-2">
              <dt className="font-medium">{name}</dt>
              <dd className="t-body">{description}</dd>
            </div>
          ))}
        </dl>
        <p className="t-caption mt-4">
          Platform names identify compatible data sources. SG2 is not affiliated with or endorsed by
          Uber Eats, DoorDash or Clover.
        </p>
      </Section>

      <Section tone="soft">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Franchise finance"
              title="Royalty calculations & franchise invoicing."
              lead="Use reported sales and agreed rates to calculate royalties and generate franchise invoices. Terms and implementation scope are tailored to each organization’s agreements."
            />
            <p className="t-body mt-4">
              For inspections, standards and wider network administration, explore Franchise
              Management. Product connections and custom integrations are agreed during discovery.
            </p>
            <div className="mt-6">
              <TextLink to="/solutions/franchise-management">Explore Franchise Management</TextLink>
            </div>
          </div>
          <ProductFrame title="Sample royalty invoice">
            <RoyaltyInvoiceMock />
          </ProductFrame>
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="AI-enabled analysis"
              title="Ask questions. Spot unusual patterns."
              lead="Ask why a payout moved or which platform is driving fees. Surface unusual fee rates, refunds and payout gaps for a person to review."
            />
            <p className="t-body mt-5">{aiAvailability}</p>
            <p className="t-caption mt-4">
              The example is illustrative, with invented data. AI supports a person’s judgment; it
              does not guarantee that every anomaly will be detected.
            </p>
          </div>
          <ProductFrame title="Illustrative AI analysis">
            <AskYourDataMock />
          </ProductFrame>
        </div>
      </Section>
      <Section>
        <SectionHeader eyebrow="Questions" title="Before you get started." />
        <div className="mt-8">
          <Faq items={faqs} />
        </div>
      </Section>
      <CtaBand
        title="See how it fits your restaurants."
        primary={{
          label: 'Book a demo',
          to: '/contact?inquiry=demo&product=financial-intelligence',
        }}
      />
    </>
  )
}
