import { Button, TextLink } from '@/components/ui/Button'
import { CtaBand, Faq, PageIntro } from '@/components/ui/Blocks'
import { Section } from '@/components/ui/Section'
import { ProductFrame } from '@/components/product/ProductFrame'
import {
  ComplianceStatusMock,
  InspectionChecklistMock,
  RoyaltyViewMock,
} from '@/components/product/fmMocks'

export function FranchiseManagementPage() {
  return (
    <>
      <PageIntro
        eyebrow="Franchise Management"
        title="Every location. One standard."
        lead="Inspections, people and franchise administration in one place."
        actions={
          <Button to="/contact?inquiry=demo&product=franchise-management">Book a demo</Button>
        }
        aside={
          <ProductFrame title="Sample network standards">
            <ComplianceStatusMock />
          </ProductFrame>
        }
      />
      <Section tone="soft" id="workflow">
        <h2 className="t-h2">Inspect. Assign. Resolve.</h2>
        <p className="t-body mt-3 max-w-2xl">
          Record findings and photos. Assign owners. Track follow-ups until resolution.
        </p>
        <div className="workflow-disclosures mt-5">
          <details>
            <summary>View a sample inspection</summary>
            <div className="max-w-2xl pb-5">
              <ProductFrame title="Sample inspection">
                <InspectionChecklistMock />
              </ProductFrame>
            </div>
          </details>
        </div>
      </Section>
      <Section>
        <h2 className="t-h2">Keep your network aligned.</h2>
        <ul className="benefit-list mt-6">
          <li>Location performance and network reporting</li>
          <li>Standards, SOPs and training</li>
          <li>Employee onboarding and certification workflows</li>
        </ul>
      </Section>
      <Section tone="ink">
        <h2 className="t-h2">Simpler royalties and invoicing.</h2>
        <p className="t-body mt-3 max-w-2xl">
          Turn reported sales and agreed rates into statements and franchise invoices. Rules are
          scoped to your agreements.
        </p>
        <div className="workflow-disclosures mt-5">
          <details>
            <summary>View a royalty statement</summary>
            <div className="max-w-2xl pb-5">
              <ProductFrame title="Sample royalty statement">
                <RoyaltyViewMock />
              </ProductFrame>
              <p className="t-caption mt-3">
                Invented figures. Payment collection is outside this example.
              </p>
            </div>
          </details>
        </div>
        <div className="mt-5">
          <TextLink to="/solutions/financial-intelligence">Explore financial reporting</TextLink>
        </div>
      </Section>
      <Section>
        <h2 className="t-h2">Made to fit your network.</h2>
        <div className="mt-6">
          <Faq
            items={[
              {
                q: 'What is included?',
                a: (
                  <p>
                    We confirm standard capabilities, configuration and custom engineering before
                    you commit.
                  </p>
                ),
              },
              {
                q: 'Can it handle our royalty terms?',
                a: (
                  <p>
                    Bring your agreements. We confirm supported rules and any custom work required.
                  </p>
                ),
              },
              {
                q: 'Does it connect to our systems?',
                a: (
                  <p>
                    Financial Intelligence connections and other integrations are scoped during
                    discovery, not assumed automatic.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </Section>
      <CtaBand
        title="Bring your network together."
        primary={{ label: 'Book a demo', to: '/contact?inquiry=demo&product=franchise-management' }}
      />
    </>
  )
}
