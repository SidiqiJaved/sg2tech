import { Button, TextLink } from '@/components/ui/Button'
import { CtaBand, Faq, PageIntro } from '@/components/ui/Blocks'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProductFrame } from '@/components/product/ProductFrame'
import {
  ComplianceStatusMock,
  InspectionChecklistMock,
  RoyaltyViewMock,
} from '@/components/product/fmMocks'

const faqs = [
  {
    q: 'Is this standard software or built to order?',
    a: (
      <p>
        Both. We map your requirements to existing product capabilities, configuration and any
        custom engineering. You know what is included before you commit.
      </p>
    ),
  },
  {
    q: 'Can it fit our royalty structure?',
    a: (
      <p>
        Bring your franchise agreements to the demo. We confirm which rates, fees and invoice rules
        are supported, configured or require custom work. Scope varies by organization.
      </p>
    ),
  },
  {
    q: 'Does it connect to our financial data?',
    a: (
      <p>
        Franchise Management is designed to sit alongside Financial Intelligence. Connections
        between products and integrations with existing systems are scoped with you; they are not
        assumed to be automatic.
      </p>
    ),
  },
]

export function FranchiseManagementPage() {
  return (
    <>
      <PageIntro
        eyebrow="Franchise Management"
        title="One network. One standard. Full visibility."
        lead="Manage inspections, follow-ups, training and franchise administration across locations, with workflows configured for your network."
        actions={
          <Button to="/contact?inquiry=demo&product=franchise-management">Book a demo</Button>
        }
        aside={
          <ProductFrame title="Network standards">
            <ComplianceStatusMock />
          </ProductFrame>
        }
      />
      <Section tone="soft" id="workflow">
        <SectionHeader
          eyebrow="Inspection workflow"
          title="From inspection to resolution."
          lead="Give headquarters, regional managers and location teams a clear role in keeping standards consistent."
        />
        <div className="mt-8 workflow-disclosures">
          <details open>
            <summary>1. Inspect the location</summary>
            <div className="workflow-content">
              <p className="t-body">
                Headquarters assigns the brand checklist. A regional manager records findings, notes
                and photos against the location, so the team can see what passed and what needs
                attention.
              </p>
              <ProductFrame title="Sample inspection">
                <InspectionChecklistMock />
              </ProductFrame>
            </div>
          </details>
          <details>
            <summary>2. Assign the follow-up</summary>
            <div className="p-5">
              <p className="t-body max-w-2xl">
                Turn findings into actions with an owner and a status. Location teams can see their
                responsibilities, with evidence attached to the relevant finding.
              </p>
            </div>
          </details>
          <details>
            <summary>3. Review the resolution</summary>
            <div className="workflow-content">
              <p className="t-body">
                Headquarters reviews open actions and compliance by location or region, keeping
                unresolved findings visible as the network grows.
              </p>
              <ProductFrame title="Sample standards overview">
                <ComplianceStatusMock />
              </ProductFrame>
            </div>
          </details>
        </div>
        <p className="t-caption mt-4">
          Illustrative interfaces with invented data. Your workflow is configured to your network.
        </p>
      </Section>
      <Section>
        <SectionHeader eyebrow="Capabilities" title="Keep the whole network connected." />
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {[
            [
              'Network oversight',
              'Review locations, performance and network reports. Track accountability and focus headquarters’ attention on the work that remains open.',
            ],
            [
              'Standards and people',
              'Bring inspections, compliance, training, SOPs and employee onboarding or certification workflows into a shared operating standard.',
            ],
            [
              'Franchise administration',
              'Calculate royalties and franchise fees from reported sales and agreed rates, then generate and manage franchise invoices.',
            ],
          ].map(([title, body]) => (
            <article key={title} className="rule-tick pt-5">
              <h3 className="t-h3">{title}</h3>
              <p className="t-body mt-3">{body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="ink">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Royalties & invoicing"
              title="Make the royalty cycle routine."
              lead="Use reported sales and agreed rates to prepare clear statements and franchise invoices. We confirm your agreement rules and implementation scope during discovery."
            />
            <p className="t-body mt-4">
              Financial Intelligence covers the reporting and reconciliation behind the numbers.
              Payment collection is outside the example shown here.
            </p>
            <div className="mt-6">
              <TextLink to="/solutions/financial-intelligence">
                Explore Financial Intelligence
              </TextLink>
            </div>
          </div>
          <ProductFrame title="Sample royalty statement">
            <RoyaltyViewMock />
          </ProductFrame>
        </div>
      </Section>
      <Section>
        <SectionHeader eyebrow="Implementation" title="Configured for your network." />
        <dl className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rule-tick pt-5">
            <dt className="t-h3">Configure</dt>
            <dd className="t-body mt-3">
              Set up checklists, standards, training, reporting and supported royalty rules around
              your brand.
            </dd>
          </div>
          <div className="rule-tick pt-5">
            <dt className="t-h3">Build</dt>
            <dd className="t-body mt-3">
              Scope custom employee workflows and system integrations with SG2’s engineering team
              where needed.
            </dd>
          </div>
        </dl>
      </Section>
      <Section divider>
        <SectionHeader eyebrow="Questions" title="Know what’s included." />
        <div className="mt-8">
          <Faq items={faqs} />
        </div>
      </Section>
      <CtaBand
        title="Bring your network onto one standard."
        primary={{ label: 'Book a demo', to: '/contact?inquiry=demo&product=franchise-management' }}
      />
    </>
  )
}
