import { CtaBand, PageIntro } from '@/components/ui/Blocks'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

const stages = [
  [
    '01',
    'Understanding the Business',
    'We examine how the work is actually done: the workflows, the people who depend on them, the constraints, the systems already in place and the outcome the business wants. Requirements come from that understanding, not from a feature list.',
  ],
  [
    '02',
    'Defining the Solution',
    'Business requirements become product priorities, user experiences, technical decisions and a delivery plan. We agree on what “done” means before engineering begins, and on what can wait.',
  ],
  [
    '03',
    'Engineering & Integration',
    'Applications, data pipelines, integrations and custom workflows are built in increments you can see and react to, and connected to the systems your teams already use.',
  ],
  [
    '04',
    'Testing & Validation',
    'We check that the software does what the business needs, not only that it runs. Functionality is tested, defects are reviewed and fixed, requirements are verified, and findings feed the next iteration.',
  ],
]

const documents = [
  ['Business and functional requirements', 'What the software must do, and why.'],
  [
    'Product roadmaps and priorities',
    'What is being built now, what is next, and what is deferred.',
  ],
  ['User workflows', 'How people move through the software to get their work done.'],
  ['Architecture and integration documentation', 'How the pieces fit together and exchange data.'],
  ['Technical decisions', 'The options considered and the reasons for the choice made.'],
  ['Testing and QA records', 'What was tested, what was found and how it was resolved.'],
  ['Deployment documentation', 'How the software is released, configured and rolled back.'],
  ['Handover and support guidance', 'What the people who run the software need to know.'],
]

export function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="From business challenges to working software."
        lead="Every solution begins with understanding the business behind it. At SG2 Technologies, we bring discovery, product thinking, engineering, testing and documentation together to develop software around practical operational needs."
      />

      <Section tone="deep">
        <SectionHeader
          eyebrow="From challenge to delivery"
          title="How a business problem becomes working software."
        />
        <ol className="mt-14 grid gap-x-16 md:grid-cols-2">
          {stages.map(([n, t, d], i) => (
            <Reveal
              as="li"
              key={t}
              delay={(i % 2) * 70}
              className="rule-tick grid grid-cols-[2.5rem_1fr] gap-3 py-8"
            >
              <span className="t-label pt-1.5 text-copper-deep">{n}</span>
              <span>
                <span className="t-h3 block">{t}</span>
                <span className="t-body mt-2 block text-[0.95rem]">{d}</span>
              </span>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="ink" id="documentation">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="05"
              eyebrow="How we document our work"
              title="Documentation is part of the product."
              lead="It keeps the work transparent while it is built, preserves continuity when people change, and lets you maintain and own the software long after delivery."
            />
            <p className="t-caption mt-8 max-w-md">
              Documentation is tailored to the scope and complexity of each engagement. Not every
              document is produced for every project.
            </p>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {documents.map(([t, d]) => (
              <li key={t} className="rule-tick py-5">
                <p className="font-display text-xl tracking-tight sm:text-2xl">{t}</p>
                <p className="t-body mt-1 text-[0.95rem]">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="06"
              eyebrow="Built for long-term use"
              title="No black boxes. No unnecessary complexity."
            />
          </div>
          <div className="t-lead space-y-6 lg:col-span-6 lg:col-start-7">
            <p>
              Software should stay understandable, maintainable and adaptable as your organization
              evolves. We favor clear structure over cleverness, and we explain our decisions so
              that the people who inherit the system can work with it.
            </p>
            <p>
              After release, we improve the software based on how people actually use it, making
              everyday workflows clearer and more effective.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Have a software project to discuss?"
        primary={{ label: 'Discuss a project', to: '/contact?inquiry=custom' }}
        secondary={{ label: 'Book a demo', to: '/contact?inquiry=demo' }}
      />
    </>
  )
}
