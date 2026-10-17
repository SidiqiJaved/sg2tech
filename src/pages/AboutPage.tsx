import { CtaBand, PageIntro } from '@/components/ui/Blocks'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { company } from '@/content/site'

const principles = [
  [
    'Business understanding',
    'Software that ignores how the work is really done gets worked around. We start by learning the process, the people and the numbers.',
  ],
  [
    'Product thinking',
    'We ask who uses this, how often and what happens when it goes wrong, for client builds as much as for our own products.',
  ],
  ['Engineering discipline', 'Readable code, tested integrations and decisions we can explain.'],
  [
    'Transparency and communication',
    'Plain language about what is available, what is in development and what is only planned.',
  ],
  [
    'Long-term maintainability',
    'Software lives for years. We build it so that it can be understood, changed and extended.',
  ],
  [
    'Continuous improvement',
    'Launch is the beginning of learning. We watch how software is used and refine it.',
  ],
]

const steps = [
  'Understand how the business operates.',
  'Identify the underlying challenges.',
  'Define business outcomes and requirements.',
  'Design practical solutions.',
  'Engineer reliable systems.',
  'Test and validate functionality.',
  'Document important workflows and decisions.',
  'Improve the software based on actual usage.',
]

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About SG2"
        title="Technology should make business simpler."
        lead={
          <>
            SG2 Technologies develops software products and custom business applications designed
            around real operational challenges.
            <br />
            <br />
            We combine business understanding, product thinking and engineering discipline to help
            organizations connect information, simplify workflows and make better decisions.
          </>
        }
      />

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="01"
              eyebrow="Who we are"
              title="Products and engineering, one way of thinking."
            />
          </div>
          <div className="t-lead space-y-6 lg:col-span-6 lg:col-start-7">
            <p>
              We build our own software products, AI-Enabled Financial Intelligence and Franchise
              Management, and we build custom applications, integrations and automation for
              organizations whose needs are specific.
            </p>
            <p>
              The two feed each other. What we learn building for customers shapes our products, and
              what we build into our products makes our custom work stronger.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeader
          index="02"
          eyebrow="Why SG2 exists"
          title="Enterprise experience. Built for growing businesses."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="t-body space-y-5 lg:col-span-6">
            <p>
              Large enterprises have sophisticated software platforms, specialized engineering
              teams, experienced product managers and consulting organizations. Small and midsize
              businesses face complex challenges of their own: fragmented systems, disconnected
              financial information, manual operations and limited access to specialized technology
              expertise.
            </p>
            <p>
              They often cannot justify the cost or engagement model of large technology and
              consulting organizations. SG2 was established to help bridge that gap.
            </p>
          </div>
          <div className="t-body space-y-5 lg:col-span-6">
            <p>
              Our team brings professional experience from complex enterprise technology
              environments, combining business understanding, product management, data engineering
              and software development. We apply that perspective to create useful software products
              and tailored solutions for businesses that want to operate more effectively.
            </p>
            <p className="font-display text-2xl leading-snug tracking-tight text-ink">
              The sophistication of enterprise thinking. The practicality of a focused technology
              partner.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-px bg-line-dark lg:grid-cols-2">
          <Reveal className="bg-ink py-10 lg:p-12">
            <p className="t-label mb-5 flex items-center gap-3 text-[#ff9a55]">
              <span aria-hidden>03</span>
              <span aria-hidden className="h-px w-8 bg-copper" />
              Our mission
            </p>
            <h2 className="t-h2">{company.mission}</h2>
            <dl className="mt-8 space-y-3 text-[0.95rem]">
              {[
                ['Clarity', 'Businesses should understand their information and their operations.'],
                ['Confidence', 'Decision-makers should have dependable information to guide them.'],
                ['Ease', 'Software should reduce unnecessary complexity and manual work.'],
              ].map(([t, d]) => (
                <div key={t} className="grid grid-cols-[6.5rem_1fr] gap-3">
                  <dt className="t-label pt-1 text-[#ff9a55]">{t}</dt>
                  <dd>{d}</dd>
                </div>
              ))}
            </dl>
            <p className="t-body mt-8 text-[0.95rem]">
              We develop software that connects business systems, organizes information and improves
              everyday workflows.
            </p>
          </Reveal>
          <Reveal delay={80} className="bg-ink py-10 lg:p-12">
            <p className="t-label mb-5 flex items-center gap-3 text-[#ff9a55]">
              <span aria-hidden>04</span>
              <span aria-hidden className="h-px w-8 bg-copper" />
              Our vision
            </p>
            <h2 className="t-h2">
              To make intelligent, enterprise-quality software accessible to businesses of every
              size.
            </h2>
            <p className="t-body mt-8 text-[0.95rem]">
              We envision building scalable products and tailored solutions that help organizations
              simplify operations, understand performance and grow sustainably. We value technology
              that is practical, scalable, maintainable, adaptable, intelligently designed and
              connected to real business needs.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="05"
              eyebrow="Our philosophy"
              title="Understand the business before building the technology."
              lead="Software should begin with a real business problem. We are not interested in introducing technology just because it is fashionable."
            />
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {steps.map((s, i) => (
              <li
                key={s}
                className="rule-tick grid grid-cols-[2.5rem_1fr] gap-3 py-4 font-display text-xl tracking-tight"
              >
                <span className="t-label pt-2 text-copper-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section divider>
        <SectionHeader
          index="06"
          eyebrow="What guides our work"
          title="Six principles behind what we build."
        />
        <ul className="mt-14 grid gap-x-16 md:grid-cols-2">
          {principles.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={(i % 2) * 70} className="rule-tick py-7">
              <h3 className="t-h3">{t}</h3>
              <p className="t-body mt-2">{d}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Have a problem worth solving?"
        primary={{ label: 'Talk to SG2', to: '/contact' }}
        secondary={{ label: 'See how we deliver', to: '/work' }}
      />
    </>
  )
}
