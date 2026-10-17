import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { CtaBand, Faq, PageIntro } from '@/components/ui/Blocks'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProductFrame } from '@/components/product/ProductFrame'
import {
  ComplianceStatusMock,
  InspectionChecklistMock,
  NetworkOverviewMock,
  RoyaltyViewMock,
} from '@/components/product/fmMocks'
import { cn } from '@/lib/cn'

const lifecycle = [
  {
    who: 'Headquarters',
    title: 'Creates an inspection',
    body: 'Choose a checklist that reflects your brand standard and assign it to a location and a regional manager.',
    frame: 'Network overview',
    visual: <NetworkOverviewMock />,
  },
  {
    who: 'Regional manager',
    title: 'Visits the location',
    body: 'Walk the checklist on site, mark each item, and attach photos where something needs to be seen.',
    frame: 'Inspection checklist',
    visual: <InspectionChecklistMock />,
  },
  {
    who: 'Regional manager',
    title: 'Records findings',
    body: 'Items that miss the standard become findings, with notes and evidence attached to the right location.',
    frame: 'Inspection checklist',
    visual: <InspectionChecklistMock />,
  },
  {
    who: 'Location team',
    title: 'Follows up',
    body: 'Each finding becomes an action with an owner, so it is clear who is responsible and what is still open.',
    frame: 'Standards compliance',
    visual: <ComplianceStatusMock />,
  },
  {
    who: 'Headquarters',
    title: 'Reviews progress',
    body: 'See open actions and compliance by region or location, and know where to focus next.',
    frame: 'Standards compliance',
    visual: <ComplianceStatusMock />,
  },
]

const capabilities = [
  {
    t: 'Centralized franchise oversight',
    d: 'One place to see every location in the network and where each one stands, so headquarters spots problems early.',
    g: 'Oversee',
  },
  {
    t: 'Location-level accountability',
    d: 'Every task has an owner and a status, so follow-up does not depend on someone remembering.',
    g: 'Oversee',
  },
  {
    t: 'Franchise performance',
    d: 'Connect operational results with performance indicators that matter to the network.',
    g: 'Oversee',
  },
  {
    t: 'Reporting',
    d: 'Location, regional and network reporting that headquarters and operators can act on.',
    g: 'Oversee',
  },
  {
    t: 'Inspections and quality control',
    d: 'Checklists, observations, photos and follow-up actions.',
    g: 'Standardize',
  },
  {
    t: 'Compliance and standards',
    d: 'Help headquarters hold every location to the same operating standard.',
    g: 'Standardize',
  },
  {
    t: 'Training and documentation',
    d: 'Keep training material, SOPs and operational documents where teams can find them.',
    g: 'Standardize',
  },
  {
    t: 'Employee management workflows',
    d: 'Onboarding, certification and staffing workflows shaped to how your network manages its people.',
    g: 'Standardize',
  },
  {
    t: 'Royalty & Franchise Fee Management',
    d: 'Calculate and report royalties and franchise fees from reported sales and agreed rates.',
    g: 'Administer',
  },
  {
    t: 'Franchise invoicing',
    d: 'Generate and manage franchise-related invoices.',
    g: 'Administer',
  },
]

const faqs = [
  {
    q: 'Who is this designed for?',
    a: (
      <p>
        Franchisors who need visibility across a network, and multi-location operators who want a
        single standard.
      </p>
    ),
  },
  {
    q: 'Is this standard software or built to order?',
    a: (
      <p>
        Both. Franchise Management combines product functionality with configuration and, where a
        network needs it, custom development. In your demo we map your requirements to what comes as
        standard and what we would configure or build, so scope is clear before you commit.
      </p>
    ),
  },
  {
    q: 'Can it fit our royalty structure?',
    a: (
      <p>
        Royalty arrangements vary a lot between brands. Bring yours to the demo and we will tell you
        what the product supports and what would require custom work.
      </p>
    ),
  },
  {
    q: 'Does it connect to our financial data?',
    a: (
      <p>
        Franchise Management is designed to sit alongside Financial Intelligence, and SG2 can build
        integrations to your existing systems as an engineering project.
      </p>
    ),
  },
]

function LifecycleStepper() {
  const [i, setI] = useState(0)
  const step = lifecycle[i]!
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-5">
        <ol className="space-y-0" aria-label="Inspection workflow steps">
          {lifecycle.map((s, n) => (
            <li key={s.title}>
              <button
                type="button"
                aria-current={n === i ? 'step' : undefined}
                onClick={() => setI(n)}
                className={cn(
                  'grid w-full grid-cols-[2.25rem_1fr] gap-3 border-t border-line py-5 text-left transition-colors',
                  n === i ? 'text-ink' : 'text-ink-mute hover:text-ink',
                )}
              >
                <span className={cn('t-label pt-1.5', n === i ? 'text-copper-deep' : '')}>
                  {String(n + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="t-label block text-[0.65rem]">{s.who}</span>
                  <span className="font-display text-xl tracking-tight sm:text-2xl">{s.title}</span>
                  {n === i && <span className="t-body mt-2 block text-[0.95rem]">{s.body}</span>}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div className="min-w-0 lg:col-span-7">
        <ProductFrame title={step.frame}>{step.visual}</ProductFrame>
      </div>
    </div>
  )
}

export function FranchiseManagementPage() {
  return (
    <>
      <PageIntro
        eyebrow="Solutions · Franchise Management"
        title="One network. One standard. Full visibility."
        lead="SG2 helps franchise organizations run one standard across every location: inspections, operational checklists, franchise oversight, training, employee workflows, invoicing, royalties and reporting in one connected system, instead of emails, spreadsheets and phone calls."
        actions={
          <>
            <Button to="/contact?inquiry=demo">Book a Demo</Button>
            <Button to="#workflow" variant="secondary" arrow={false}>
              Follow an inspection
            </Button>
          </>
        }
        aside={
          <ProductFrame title="Standards compliance">
            <ComplianceStatusMock />
          </ProductFrame>
        }
      />

      {/* WORKFLOW */}
      <Section tone="deep" id="workflow">
        <SectionHeader
          index="01"
          eyebrow="Workflow"
          title="Follow one inspection from request to resolution."
          lead="The process below shows how the pieces connect, from the first inspection request to a resolved finding."
        />
        <div className="mt-14">
          <LifecycleStepper />
        </div>
        <p className="t-caption mt-8 max-w-2xl">
          Screens are illustrative visuals with invented data. Your workflow is configured around
          how your network operates.
        </p>
      </Section>

      {/* CAPABILITIES */}
      <Section>
        <SectionHeader
          index="02"
          eyebrow="Capabilities"
          title="Oversee the network. Standardize the work. Administer the franchise."
        />
        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          {['Oversee', 'Standardize', 'Administer'].map((g, gi) => (
            <Reveal key={g} delay={gi * 80}>
              <p className="t-label mb-2 text-copper-deep">{g}</p>
              <ul className="border-t border-ink/80">
                {capabilities
                  .filter((c) => c.g === g)
                  .map((c) => (
                    <li key={c.t} className="border-b border-line py-6">
                      <h3 className="t-h3">{c.t}</h3>
                      <p className="t-body mt-2 text-[0.95rem]">{c.d}</p>
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ROYALTY */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              index="03"
              eyebrow="Invoicing & royalties"
              title="Make the monthly royalty cycle routine."
              lead="Reported sales and agreed rates in, a clear statement per location out. Fewer spreadsheets, fewer disputes about how a number was reached."
            />
          </div>
          <div className="min-w-0 lg:col-span-7">
            <ProductFrame title="Royalty statement">
              <RoyaltyViewMock />
            </ProductFrame>
          </div>
        </div>
      </Section>

      {/* DELIVERY MODEL */}
      <Section>
        <SectionHeader
          index="04"
          eyebrow="Shaped to your network"
          title="Standard where it fits. Built where it matters."
          lead="Every franchise system has its own standards, fee structures and ways of working. SG2 brings a product foundation and the engineering to fit it to yours."
        />
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
          <div className="bg-ivory p-8 sm:p-10">
            <p className="t-label text-copper-deep">Configure</p>
            <h3 className="t-h3 mt-3">Product capabilities, tuned to your brand.</h3>
            <p className="t-body mt-3 text-[0.95rem]">
              Inspection checklists, operating standards, training material, reporting views and
              royalty and invoicing rules set up around your network.
            </p>
          </div>
          <div className="bg-ivory p-8 sm:p-10">
            <p className="t-label text-copper-deep">Build</p>
            <h3 className="t-h3 mt-3">Custom workflows and integrations.</h3>
            <p className="t-body mt-3 text-[0.95rem]">
              Employee management workflows, connections to your existing systems and anything
              specific to how your franchise operates, delivered by our engineering team.
            </p>
          </div>
        </div>
      </Section>

      {/* WHY PRODUCT */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="05"
              eyebrow="Why Franchise Management"
              title="Keep your standard intact as the network grows."
              lead="Every new location is another place for the brand standard to drift. Franchise Management gives headquarters the visibility and accountability to keep up."
            />
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {[
              [
                'One standard, checked the same way',
                'Every location is inspected against the same checklist, so results are comparable across the network.',
              ],
              [
                'Evidence, not recollection',
                'Findings carry notes and photos, so conversations with operators start from facts.',
              ],
              [
                'Follow-up that closes',
                'Open actions have an owner and stay visible until resolved, so findings do not fade away.',
              ],
              [
                'Headquarters stays in control',
                'Bring new locations, training and employees into the same workflows, and see invoicing and royalties alongside operations.',
              ],
            ].map(([t, d]) => (
              <li key={t} className="rule-tick py-6">
                <h3 className="t-h3">{t}</h3>
                <p className="t-body mt-1">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

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
        title="Bring your whole network onto one standard."
        primary={{ label: 'Book a Demo', to: '/contact?inquiry=demo' }}
        secondary={{ label: 'Financial Intelligence', to: '/solutions/financial-intelligence' }}
      />
    </>
  )
}
