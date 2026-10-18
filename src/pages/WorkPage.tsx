import { CtaBand, PageIntro } from '@/components/ui/Blocks'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="How we work"
        title="From business problem to working software."
        lead="Agree on outcomes, see progress throughout delivery and receive software your team can understand and maintain."
      />
      <Section tone="soft">
        <SectionHeader eyebrow="Delivery" title="A clear path from discovery to release." />
        <ol className="mt-8 grid gap-8 md:grid-cols-2">
          {[
            [
              'Understand the business',
              'Learn the workflows, people, constraints and existing systems, then agree on the outcome the software needs to support.',
            ],
            [
              'Define the solution',
              'Turn requirements into priorities, user experiences and a delivery plan, including what is in scope and what can wait.',
            ],
            [
              'Engineer and integrate',
              'Build in visible increments, review working software together and connect it to the systems your team already uses.',
            ],
            [
              'Test and validate',
              'Check functionality against the agreed requirements, fix defects and validate important business workflows before release.',
            ],
          ].map(([title, body], i) => (
            <li key={title} className="rule-tick pt-5">
              <p className="t-label text-copper-deep">0{i + 1}</p>
              <h3 className="t-h3 mt-3">{title}</h3>
              <p className="t-body mt-3">{body}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section id="documentation">
        <SectionHeader
          eyebrow="Documentation & handover"
          title="Built to be understood."
          lead="Document the decisions and workflows that help people maintain the software after delivery. The documentation package reflects the scope and complexity of your engagement."
        />
        <dl className="mt-8 space-y-6">
          {[
            [
              'Requirements and priorities',
              'Business requirements, user workflows and the roadmap explain what is being built, why it matters and what has been deferred.',
            ],
            [
              'Architecture and integrations',
              'System structure, data connections and technical decisions explain how the pieces fit together and the tradeoffs behind them.',
            ],
            [
              'Testing, deployment and handover',
              'QA records, release guidance and support documentation help your team understand what was validated and how to operate the software.',
            ],
          ].map(([title, body]) => (
            <div key={title} className="rule-tick pt-5">
              <dt className="t-h3">{title}</dt>
              <dd className="t-body mt-3 max-w-3xl">{body}</dd>
            </div>
          ))}
        </dl>
        <p className="t-body mt-6 max-w-3xl">
          After release, we improve the software based on real usage. Ownership and support terms
          are agreed in writing, so responsibilities stay clear as your organization evolves.
        </p>
      </Section>
      <CtaBand
        title="Let’s discuss your project."
        primary={{ label: 'Discuss a project', to: '/contact?inquiry=custom' }}
      />
    </>
  )
}
