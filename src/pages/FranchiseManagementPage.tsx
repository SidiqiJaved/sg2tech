import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { CtaBand, Faq, PageIntro } from '@/components/ui/Blocks'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatusBadge } from '@/components/ui/StatusBadge'
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
    d: 'One place to see every location in the network and where each one stands.',
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
    t: 'Franchise invoicing',
    d: 'Generate and manage franchise-related invoices.',
    g: 'Administer',
  },
  {
    t: 'Royalty calculations',
    d: 'Calculate and report royalties from reported sales and agreed rates.',
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
    q: 'Which capabilities are available today?',
    a: (
      <p>
        We confirm the current status of each capability during your demo, and we separate what is
        available now from what is in development or planned.
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
        lead="A centralized operational system for franchise organizations: inspections, standards, training, invoicing and royalty reporting in one place, instead of spread across emails, spreadsheets and phone calls."
        actions={
          <>
            <Button to="/contact?inquiry=demo">Book a Demo</Button>
            <Button to="#workflow" variant="secondary" arrow={false}>
              Follow an inspection
            </Button>
          </>
        }
        aside={
          <ProductFrame title="Network overview">
            <NetworkOverviewMock />
          </ProductFrame>
        }
      />

      {/* WORKFLOW */}
      <Section tone="deep" id="workflow">
        <SectionHeader
          index="01"
          eyebrow="Workflow"
          title="Follow one inspection from request to resolution."
          lead={
            <>
              The process below shows how the pieces connect.{' '}
              <StatusBadge status="illustrative" className="ml-1 align-middle" />
            </>
          }
        />
        <div className="mt-14">
          <LifecycleStepper />
        </div>
        <p className="t-caption mt-8 max-w-2xl">
          Workflow shown for illustration. Which steps are available today is confirmed during your
          demo.
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
            <StatusBadge status="illustrative" className="mt-8 !text-ivory/80" />
          </div>
          <div className="min-w-0 lg:col-span-7">
            <ProductFrame title="Royalty statement">
              <RoyaltyViewMock />
            </ProductFrame>
          </div>
        </div>
      </Section>

      {/* WHY PRODUCT */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="04"
              eyebrow="Why a product"
              title="A system of record, not a consulting engagement."
              lead="Franchise oversight is a recurring need. It should live in software that your whole network uses every week."
            />
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {[
              ['Same standard everywhere', 'Every location is checked against the same criteria.'],
              ['Evidence, not recollection', 'Findings carry notes and photos.'],
              ['Follow-up that closes', 'Open actions are visible until they are resolved.'],
              ['Room to grow', 'Add locations without adding administrative overhead.'],
            ].map(([t, d]) => (
              <li key={t} className="rule-tick py-6">
                <h3 className="t-h3">{t}</h3>
                <p className="t-body mt-1">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader index="05" eyebrow="Questions" title="Straight answers." />
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
