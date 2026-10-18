import { CtaBand, PageIntro } from '@/components/ui/Blocks'
import { Section } from '@/components/ui/Section'

export function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="How we work"
        title="From problem to working software."
        lead="Clear priorities. Visible progress. A useful handover."
      />
      <Section tone="soft">
        <h2 className="sr-only">Our process</h2>
        <ol className="grid gap-6 md:grid-cols-2">
          {[
            ['Discover', 'Understand your workflows, systems and goals.'],
            ['Define', 'Agree on scope, priorities and delivery plans.'],
            ['Build', 'Review working software in small increments.'],
            ['Validate', 'Test requirements, workflows and integrations before release.'],
          ].map(([title, body], i) => (
            <li key={title} className="rule-tick pt-4">
              <p className="t-label text-copper-deep">0{i + 1}</p>
              <h3 className="t-h3 mt-2">{title}</h3>
              <p className="t-body mt-2">{body}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section id="documentation">
        <h2 className="t-h2">Ready for handover.</h2>
        <p className="t-body mt-3 max-w-2xl">
          Requirements, architecture, testing and release guidance, tailored to your project.
          Ownership and support terms are agreed in writing.
        </p>
      </Section>
      <CtaBand
        title="Let’s build it."
        primary={{ label: 'Discuss a project', to: '/contact?inquiry=custom' }}
      />
    </>
  )
}
