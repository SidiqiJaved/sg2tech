import { Button } from '@/components/ui/Button'
import { CtaBand, PageIntro } from '@/components/ui/Blocks'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

const capabilities = [
  [
    'Custom web applications',
    'Customer-facing and internal tools designed around a specific workflow.',
  ],
  [
    'Internal business platforms',
    'One system for the work that currently spans spreadsheets, email and several tools.',
  ],
  [
    'API development and integration',
    'Clean interfaces between your systems, and connections to the third-party services you rely on.',
  ],
  [
    'Workflow automation',
    'Approvals, notifications and routine handoffs that no longer depend on a person remembering.',
  ],
  [
    'Data processing and integration',
    'Bring data from different sources into a consistent shape you can use.',
  ],
  [
    'Business intelligence applications',
    'Dashboards and reporting built on your definitions, not a generic template.',
  ],
  [
    'AI-enabled applications',
    'Applications that put AI to work on your own data, where it genuinely fits the problem.',
  ],
  [
    'Cloud-based systems',
    'Applications designed to run reliably in the cloud and to be maintained over time.',
  ],
  [
    'Modernization and enhancement',
    'Improve or replace aging applications without losing what the business depends on.',
  ],
]

const examples = [
  [
    'Integration',
    'Systems that don’t talk to each other',
    'For example, a multi-site operator re-keys orders from one system into another every day. We connect them so the data moves once, accurately.',
  ],
  [
    'Analytics',
    'Reports assembled by hand',
    'For example, a distributor’s weekly performance pack takes a day to build from three exports. A data pipeline and dashboard produce it from the same sources every time.',
  ],
  [
    'Automation',
    'Approvals and handoffs in email',
    'For example, purchase and expense approvals chased across inboxes become a workflow application with clear owners and statuses.',
  ],
  [
    'Custom application',
    'A legacy tool nobody can change',
    'For example, an aging internal application the business depends on is rebuilt or extended without losing the rules it encodes.',
  ],
  [
    'AI-enabled application',
    'Questions the data could already answer',
    'For example, a services firm wants plain-language answers from its own operational data. We design applications that make that possible where it fits the problem.',
  ],
] as const

export function CustomSoftwarePage() {
  return (
    <>
      <PageIntro
        eyebrow="Engineering · Custom Software Development"
        title="Built around your business, not the other way around."
        lead="Some requirements cannot be met by off-the-shelf tools. SG2 designs and builds the software your organization actually needs, from connected data and integrations to workflow platforms and intelligent applications."
        actions={
          <>
            <Button to="/contact?inquiry=custom">Discuss a Project</Button>
            <Button to="/work" variant="secondary">
              How we deliver
            </Button>
          </>
        }
      />

      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="01"
              eyebrow="When custom makes sense"
              title="Off-the-shelf is the right answer, until it isn’t."
            />
          </div>
          <div className="t-lead space-y-6 lg:col-span-6 lg:col-start-7">
            <p>
              If a standard product fits, use it. We will say so. Custom software earns its cost
              when the workflow is distinctive, when several systems must work as one, or when the
              tools you have force people into workarounds.
            </p>
            <p>
              Because SG2 also builds its own software products, we bring product discipline to
              client work: clear scope, maintainable code, and software designed to be used, not
              just delivered.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader index="02" eyebrow="Capabilities" title="What we build." />
        <ul className="mt-14 grid gap-x-16 md:grid-cols-2">
          {capabilities.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={(i % 2) * 70} className="rule-tick py-7">
              <h3 className="t-h3">{t}</h3>
              <p className="t-body mt-2">{d}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="ivory">
        <SectionHeader
          index="03"
          eyebrow="Problems we solve"
          title="What this looks like in practice."
          lead="Illustrative examples of the business problems our integrations, custom applications, automation and analytics work addresses."
        />
        <ul className="mt-14 grid gap-x-16 md:grid-cols-2">
          {examples.map(([kind, t, d], i) => (
            <Reveal as="li" key={t} delay={(i % 2) * 70} className="rule-tick py-7">
              <p className="t-label text-[0.68rem] text-copper-deep">{kind}</p>
              <h3 className="t-h3 mt-2">{t}</h3>
              <p className="t-body mt-2 text-[0.95rem]">{d}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="integrations" className="border-t border-line">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeader
              index="04"
              eyebrow="Integrations & automation"
              title="Make your systems talk, and stop re-entering data."
              lead="Most of the cost of running a business on several tools is the manual work between them. We build the connections and automations that remove it."
            />
          </div>
          <ul className="space-y-4 lg:col-span-5 lg:col-start-8">
            {[
              'Connect point-of-sale, finance, CRM and operations systems',
              'Move and reconcile data on a schedule or on demand',
              'Replace recurring spreadsheet exports with automated reports',
              'Trigger notifications and approvals from business events',
            ].map((x) => (
              <li key={x} className="flex gap-4 border-b border-ink/20 pb-4">
                <span aria-hidden className="mt-2.5 h-px w-5 shrink-0 bg-copper-deep" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="process" className="border-t border-line">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              index="05"
              eyebrow="How we deliver"
              title="Scope, timelines and ownership are agreed with you."
              lead="Timelines depend on the project and are set after discovery, not promised up front. See how we move from business challenge to working, documented software."
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Button to="/work" variant="secondary">
              How we deliver software
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader index="06" eyebrow="Working with us" title="What to expect." />
          </div>
          <dl className="lg:col-span-6 lg:col-start-7">
            {[
              ['Clear scope', 'We write down what is in and out, and revisit it as we learn.'],
              ['Visible progress', 'You see working software throughout, not only at the end.'],
              [
                'You own the outcome',
                'Code and documentation are handed over in a form your team can maintain. Ownership terms are agreed in writing.',
              ],
              [
                'Honest feedback',
                'If we think a requirement will cost more than it returns, we will say so.',
              ],
            ].map(([k, v]) => (
              <div
                key={k}
                className="grid gap-1 border-b border-line py-5 first:border-t sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <dt className="font-medium">{k}</dt>
                <dd className="t-body">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <CtaBand
        title="Tell us what you need to build."
        primary={{ label: 'Discuss a Custom Project', to: '/contact?inquiry=custom' }}
        secondary={{ label: 'Explore our products', to: '/solutions/financial-intelligence' }}
      />
    </>
  )
}
