import { Button, TextLink } from '@/components/ui/Button'
import { CtaBand, Faq, PageIntro } from '@/components/ui/Blocks'
import { Section } from '@/components/ui/Section'
import { ProductFrame } from '@/components/product/ProductFrame'
import { FinancialSummary } from '@/components/product/FinancialSummary'
import {
  GrossToNetMock,
  PayoutVisibilityMock,
  RoyaltyInvoiceMock,
} from '@/components/product/fiMocks'
import { aiAvailability } from '@/content/site'

export function FinancialIntelligencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Financial Intelligence"
        title="Know where the money goes."
        lead="Restaurant sales, fees and payouts in one view."
        actions={
          <Button to="/contact?inquiry=demo&product=financial-intelligence">Book a demo</Button>
        }
        aside={
          <ProductFrame title="Sample overview">
            <FinancialSummary />
          </ProductFrame>
        }
      />
      <Section id="workflows" tone="soft">
        <h2 className="t-h2">Report. Reconcile. Compare.</h2>
        <ul className="benefit-list mt-6">
          <li>Compare revenue across locations and sales channels.</li>
          <li>Understand fees, deductions and net payouts.</li>
          <li>Separate timing differences from discrepancies that need review.</li>
        </ul>
        <div className="workflow-disclosures mt-6">
          <details>
            <summary>See a payout breakdown</summary>
            <div className="max-w-2xl pb-5">
              <ProductFrame title="Gross sales to net payout">
                <GrossToNetMock />
              </ProductFrame>
            </div>
          </details>
          <details>
            <summary>See reconciliation in action</summary>
            <div className="max-w-2xl pb-5">
              <ProductFrame title="Payout reconciliation">
                <PayoutVisibilityMock />
              </ProductFrame>
            </div>
          </details>
        </div>
      </Section>
      <Section>
        <h2 className="t-h2">Royalties to invoices.</h2>
        <p className="t-body mt-3 max-w-2xl">
          Calculate royalties from reported sales and agreed rates. Generate franchise invoices.
          Rules and scope follow your agreements.
        </p>
        <div className="workflow-disclosures mt-5">
          <details>
            <summary>View an example invoice</summary>
            <div className="max-w-2xl pb-5">
              <ProductFrame title="Sample royalty invoice">
                <RoyaltyInvoiceMock />
              </ProductFrame>
            </div>
          </details>
        </div>
        <div className="mt-5">
          <TextLink to="/solutions/franchise-management">Need franchise oversight?</TextLink>
        </div>
      </Section>
      <Section tone="ink">
        <h2 className="t-h2">Ask your data. Spot unusual patterns.</h2>
        <p className="t-body mt-3 max-w-2xl">
          Natural-language questions and AI anomaly detection, built on reconciled data.
        </p>
        <p className="t-caption mt-3 max-w-2xl">
          {aiAvailability} Insights support human review; detection is not guaranteed.
        </p>
      </Section>
      <Section>
        <h2 className="t-h2">Will it fit?</h2>
        <div className="mt-6">
          <Faq
            items={[
              {
                q: 'Supported systems',
                a: (
                  <p>
                    Uber Eats and DoorDash reporting. Clover sales through SFTP/CSV; direct API
                    planned. Other sources confirmed during discovery. No platform endorsement or
                    affiliation.
                  </p>
                ),
              },
              {
                q: 'Accounting and accuracy',
                a: (
                  <p>
                    Support your accountant with clearer reports. Source figures still require
                    review. Net payout is not profit or a verified bank deposit.
                  </p>
                ),
              },
              {
                q: 'Setup and scope',
                a: (
                  <p>
                    We agree on locations, integrations, safeguards and timelines during discovery.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </Section>
      <CtaBand
        title="See your numbers clearly."
        primary={{
          label: 'Book a demo',
          to: '/contact?inquiry=demo&product=financial-intelligence',
        }}
      />
    </>
  )
}
