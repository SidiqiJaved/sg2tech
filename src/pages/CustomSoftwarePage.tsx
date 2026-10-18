import { Button, TextLink } from '@/components/ui/Button'
import { CtaBand, PageIntro } from '@/components/ui/Blocks'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

const services = [
  [
    'Applications and modernization',
    'Customer-facing tools and internal platforms built around your workflow. Extend or replace a legacy application while preserving the business rules people rely on.',
  ],
  [
    'Integrations and data',
    'Connect APIs, point-of-sale, finance, CRM and operations systems. Structure data from different sources so people stop re-entering it or combining recurring exports by hand.',
  ],
  [
    'Workflow automation',
    'Replace inbox-based approvals and manual handoffs with clear owners, statuses and notifications. For example, move purchase approvals into a workflow your team can track.',
  ],
  [
    'Analytics and AI',
    'Build dashboards on your business definitions and AI-enabled applications where they fit the problem. For example, make operational data available for plain-language questions.',
  ],
]

export function CustomSoftwarePage() {
  return (
    <>
      <PageIntro
        eyebrow="Custom engineering"
        title="Software built around your business."
        lead="Custom applications, integrations and automation for workflows that standard tools cannot support."
        actions={<Button to="/contact?inquiry=custom">Discuss a project</Button>}
      />
      <Section tone="soft">
        <SectionHeader
          eyebrow="When custom makes sense"
          title="Start with the business problem."
          lead="A distinctive workflow, disconnected systems or repeated workarounds can justify a custom solution. If a standard product fits, we’ll say so."
        />
        <p className="t-body mt-5 max-w-2xl">
          The team behind SG2’s products brings the same product thinking and engineering discipline
          to client work. We define the outcome with you before deciding what to build.
        </p>
      </Section>
      <Section id="integrations">
        <SectionHeader eyebrow="What we build" title="Connect the work that matters." />
        <div className="mt-8 grid gap-x-16 gap-y-8 md:grid-cols-2">
          {services.map(([title, body]) => (
            <article key={title} className="rule-tick pt-5">
              <h3 className="t-h3">{title}</h3>
              <p className="t-body mt-3">{body}</p>
            </article>
          ))}
        </div>
        <p className="t-caption mt-6">
          Examples are illustrative, not customer case studies. Cloud architecture, data processing
          and integration requirements are scoped to each project.
        </p>
      </Section>
      <Section tone="soft" id="process">
        <SectionHeader
          eyebrow="Working with SG2"
          title="Clear scope. Visible progress. A useful handover."
        />
        <ul className="benefit-list mt-6 max-w-3xl">
          <li>Agree on requirements, priorities and timelines after discovery.</li>
          <li>Review working software throughout delivery and adjust with evidence.</li>
          <li>
            Receive maintainable code and documentation. Ownership terms are agreed in writing.
          </li>
        </ul>
        <p className="t-body mt-5 max-w-2xl">
          We explain tradeoffs, test the workflows and integrations, and plan for software your team
          can operate after launch. Documentation and support reflect the scope of your engagement.
        </p>
        <div className="mt-6">
          <TextLink to="/work">See how we work</TextLink>
        </div>
      </Section>
      <CtaBand
        title="Tell us what you need to build."
        primary={{ label: 'Discuss a project', to: '/contact?inquiry=custom' }}
      />
    </>
  )
}
