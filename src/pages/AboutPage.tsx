import { TextLink } from '@/components/ui/Button'
import { CtaBand, PageIntro } from '@/components/ui/Blocks'
import { Section } from '@/components/ui/Section'
import { company } from '@/content/site'

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About SG2"
        title="Make business simpler."
        lead="We build Financial Intelligence, Franchise Management and custom software for growing businesses."
      />
      <Section tone="ink">
        <p className="t-label text-[#ff9a55]">Our mission</p>
        <h2 className="t-h2 mt-4 max-w-4xl">{company.mission}</h2>
      </Section>
      <Section>
        <h2 className="t-h2">Enterprise experience. Practical software.</h2>
        <p className="t-body mt-3 max-w-2xl">
          Our team brings enterprise technology, product and engineering experience to businesses
          that need clearer information and simpler workflows.
        </p>
        <p className="t-body mt-4 max-w-2xl">
          We understand the business, communicate clearly and build for long-term use.
        </p>
        <div className="mt-5">
          <TextLink to="/work">How we work</TextLink>
        </div>
      </Section>
      <CtaBand title="Let’s talk." primary={{ label: 'Contact SG2', to: '/contact' }} />
    </>
  )
}
