import { TextLink } from '@/components/ui/Button'
import { CtaBand, PageIntro } from '@/components/ui/Blocks'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { company } from '@/content/site'

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About SG2"
        title="Technology should make business simpler."
        lead="SG2 Technologies builds software products and custom business applications around real operational challenges. Our Financial Intelligence and Franchise Management products connect information and workflows; our engineering team builds tailored applications, integrations and automation."
      />
      <Section tone="soft">
        <SectionHeader
          eyebrow="Why SG2 exists"
          title="Enterprise experience for growing businesses."
        />
        <p className="t-body mt-5 max-w-3xl">
          Small and midsize businesses face complex systems and manual operations without the
          resources of a large enterprise. Our team brings experience in enterprise technology,
          product management, data engineering and software development to that gap. We apply it
          through focused products and tailored solutions, helping businesses understand their
          information and improve everyday work. What we learn building for customers also shapes
          our products.
        </p>
      </Section>
      <Section tone="ink">
        <p className="t-label text-[#ff9a55]">Our mission</p>
        <h2 className="t-h2 mt-5 max-w-4xl">{company.mission}</h2>
        <p className="t-label mt-8 text-[#ff9a55]">Our vision</p>
        <p className="t-lead mt-3 max-w-3xl">
          To make intelligent, enterprise-quality software accessible to businesses of every size.
        </p>
      </Section>
      <Section>
        <SectionHeader eyebrow="What guides us" title="Practical thinking. Lasting software." />
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {[
            [
              'Understand the business',
              'Learn the process, the people and the desired outcome before defining a solution. Choose technology because it serves that need.',
            ],
            [
              'Communicate clearly',
              'Agree on scope, explain decisions and be direct about what is available, being introduced or planned. Keep progress visible.',
            ],
            [
              'Build for long-term use',
              'Design maintainable systems, test the workflows, document the decisions and improve the software based on actual usage.',
            ],
          ].map(([title, body]) => (
            <article key={title} className="rule-tick pt-5">
              <h3 className="t-h3">{title}</h3>
              <p className="t-body mt-3">{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <TextLink to="/work">How we work</TextLink>
        </div>
      </Section>
      <CtaBand
        title="Have a problem worth solving?"
        primary={{ label: 'Talk to SG2', to: '/contact' }}
      />
    </>
  )
}
