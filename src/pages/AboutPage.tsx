import { CtaBand, PageIntro } from '@/components/ui/Blocks'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

const principles = [
  [
    'Understand the operation first',
    'Software that ignores how the work is really done gets worked around. We start by learning the process, the people and the numbers.',
  ],
  [
    'Think like a product team',
    'We ask who uses this, how often, and what happens when it goes wrong. That applies to client builds as much as to our own products.',
  ],
  ['Engineering discipline', 'Readable code, tested integrations, and decisions we can explain.'],
  [
    'Clarity and transparency',
    'Plain language about what is available, what is in development, and what is only planned.',
  ],
  [
    'Maintainable by design',
    'Software lives for years. We build so that it can be understood, changed and extended.',
  ],
  [
    'Reuse what is worth reusing',
    'Solving a problem once and carrying that work into the next product is how a small company builds a lot.',
  ],
  [
    'Improve continuously',
    'Launch is the beginning of learning. We watch how software is used and refine it.',
  ],
  [
    'Measure business value',
    'A feature matters if it saves time, reduces risk, or improves a decision.',
  ],
]

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About SG2"
        title="Technology should make business simpler."
        lead="SG2 Technologies is a software products and engineering company focused on practical business problems. We build our own products and we build custom software for organizations whose needs are specific."
      />

      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="01"
              eyebrow="What we do"
              title="Two kinds of work, one way of thinking."
            />
          </div>
          <div className="t-lead space-y-6 lg:col-span-6 lg:col-start-7">
            <p>
              Our products, Financial Intelligence and Franchise Management, start with
              multi-location restaurants and franchise businesses, where fragmented systems and
              manual reporting are a daily cost.
            </p>
            <p>
              Our engineering practice builds custom applications, integrations and automation for
              organizations that need something tailored. The two feed each other: what we learn
              building for clients shapes our products, and what we build into our products makes
              our client work stronger.
            </p>
            <p>The problems are not unique to restaurants, and neither is our approach.</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          index="02"
          eyebrow="Principles"
          title="How we think about the work."
          lead="Eight commitments that shape what we build and how we talk about it."
        />
        <ul className="mt-14 grid gap-x-16 md:grid-cols-2">
          {principles.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={(i % 2) * 70} className="rule-tick py-7">
              <p className="t-label mb-2 text-copper-deep">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="t-h3">{t}</h3>
              <p className="t-body mt-2">{d}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="03"
              eyebrow="How we approach problems"
              title="Questions we ask before we write code."
            />
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {[
              'What decision is someone trying to make, and what do they need to see to make it?',
              'Where does the data come from today, and who trusts it?',
              'What is the simplest thing that would genuinely help?',
              'What will have to change in this software in a year, and have we left room for it?',
              'How will we know it worked?',
            ].map((q, i) => (
              <li
                key={q}
                className="rule-tick grid grid-cols-[2.5rem_1fr] gap-3 py-6 font-display text-xl tracking-tight sm:text-2xl"
              >
                <span className="t-label pt-2 text-[#ff9a55]">{i + 1}</span>
                {q}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="04"
              eyebrow="Working with customers"
              title="Collaboration, not handoffs."
            />
          </div>
          <div className="t-lead space-y-6 lg:col-span-6 lg:col-start-7">
            <p>
              We work closely with the people who run the business day to day, because they know
              where the real problems are. We share work in progress, explain trade-offs in plain
              language, and tell you when something is not a good idea.
            </p>
            <p>
              We are a growing company, and we would rather be exact about what we have built than
              impressive about what we hope to build.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Have a problem worth solving?"
        primary={{ label: 'Talk to SG2', to: '/contact' }}
        secondary={{ label: 'See our solutions', to: '/solutions/financial-intelligence' }}
      />
    </>
  )
}
