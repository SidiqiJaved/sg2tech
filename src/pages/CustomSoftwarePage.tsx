import { Button, TextLink } from '@/components/ui/Button'
import { CtaBand, PageIntro } from '@/components/ui/Blocks'
import { Section } from '@/components/ui/Section'

export function CustomSoftwarePage() {
  return (
    <>
      <PageIntro
        eyebrow="Custom engineering"
        title="Built around your business."
        lead="Applications, integrations and automation for workflows standard tools can’t handle."
        actions={<Button to="/contact?inquiry=custom">Discuss a project</Button>}
      />
      <Section id="integrations" tone="soft">
        <h2 className="t-h2">What we build.</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            ['Applications', 'Customer tools, internal platforms and legacy modernization.'],
            ['Integrations', 'Connect APIs, business systems and data sources.'],
            ['Automation', 'Approvals, notifications and handoffs without repeat manual work.'],
            ['Analytics and AI', 'Dashboards and intelligent applications grounded in your data.'],
          ].map(([title, body]) => (
            <article key={title} className="rule-tick pt-4">
              <h3 className="t-h3">{title}</h3>
              <p className="t-body mt-2">{body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section id="process">
        <h2 className="t-h2">Clear scope. Working software.</h2>
        <p className="t-body mt-3 max-w-2xl">
          Agree on priorities. Review progress. Receive maintainable code and documentation.
          Timelines, ownership and support terms are agreed in writing.
        </p>
        <div className="mt-5">
          <TextLink to="/work">How we work</TextLink>
        </div>
      </Section>
      <CtaBand
        title="What do you need to build?"
        primary={{ label: 'Discuss a project', to: '/contact?inquiry=custom' }}
      />
    </>
  )
}
