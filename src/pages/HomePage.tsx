import { Button, TextLink } from '@/components/ui/Button'
import { CtaBand } from '@/components/ui/Blocks'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProductFrame } from '@/components/product/ProductFrame'
import { FinancialSummary } from '@/components/product/FinancialSummary'
import { company, aiAvailability } from '@/content/site'

export function HomePage() {
  return (
    <>
      <section className="pb-12 pt-8 sm:py-20 lg:pb-24">
        <div className="container-page">
          <p className="t-label mb-5 text-copper-deep">Software products &amp; engineering</p>
          <h1 className="t-display max-w-[16ch]">
            Clearer operations.
            <br /> <em className="font-normal text-copper-deep">Better decisions.</em>
          </h1>
          <p className="t-lead mt-6 max-w-2xl">
            SG2 builds Financial Intelligence and Franchise Management software for restaurant and
            franchise teams, plus custom applications, integrations and automation for growing
            businesses.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button to="#products">Explore products</Button>
            <TextLink to="/contact?inquiry=custom">Discuss a project</TextLink>
          </div>
        </div>
      </section>

      <Section id="products" tone="soft">
        <SectionHeader eyebrow="Our products" title="Choose the clarity your team needs." />
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <article className="rule-tick pt-6">
            <h3 className="t-h2">Financial Intelligence</h3>
            <p className="t-body mt-4">
              One financial view for multi-location restaurants. Bring sales, fees and payouts
              together so your team can spend less time assembling reports and more time
              investigating what changed.
            </p>
            <ul className="benefit-list mt-5">
              <li>Revenue and location reporting</li>
              <li>Payout reconciliation and discrepancy review</li>
              <li>Royalty calculations and franchise invoices</li>
            </ul>
            <p className="t-body mt-4">AI-enabled analysis builds on your reconciled data.</p>
            <p className="t-caption mt-2">{aiAvailability}</p>
            <div className="mt-6">
              <TextLink to="/solutions/financial-intelligence">
                Explore Financial Intelligence
              </TextLink>
            </div>
          </article>
          <article className="rule-tick pt-6">
            <h3 className="t-h2">Franchise Management</h3>
            <p className="t-body mt-4">
              Keep your network working to the same standard. Give headquarters and location teams a
              shared view of responsibilities, records and the actions that still need attention.
            </p>
            <ul className="benefit-list mt-5">
              <li>Inspections, standards and follow-ups</li>
              <li>Training and employee workflows</li>
              <li>Franchise administration, royalties and invoicing</li>
            </ul>
            <p className="t-caption mt-4">
              Product capabilities, configuration and custom work are scoped to your network.
            </p>
            <div className="mt-6">
              <TextLink to="/solutions/franchise-management">Explore Franchise Management</TextLink>
            </div>
          </article>
        </div>
        <div className="mt-10 max-w-3xl">
          <ProductFrame title="Financial Intelligence · sample overview">
            <FinancialSummary />
          </ProductFrame>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            eyebrow="Custom engineering"
            title="When standard tools don’t fit."
            lead="The team behind our products also builds custom software. We connect your systems and design applications around the way your business works."
          />
          <div>
            <ul className="benefit-list">
              <li>Applications and modernization</li>
              <li>API, system and data integrations</li>
              <li>Workflow automation</li>
              <li>Analytics and AI-enabled applications</li>
            </ul>
            <p className="t-body mt-5">
              Start with a business problem. We agree on scope, show progress and plan for software
              your team can maintain.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <TextLink to="/services/custom-software-development">
                Explore custom engineering
              </TextLink>
              <TextLink to="/work">How we work</TextLink>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="soft">
        <p className="t-label text-copper-deep">Our mission</p>
        <h2 className="t-h2 mt-4 max-w-4xl">{company.mission}</h2>
        <div className="mt-6">
          <TextLink to="/about">About SG2</TextLink>
        </div>
      </Section>
      <CtaBand
        title="Let’s simplify your next step."
        primary={{ label: 'Book a demo', to: '/contact?inquiry=demo' }}
        secondary={{ label: 'Discuss a project', to: '/contact?inquiry=custom' }}
      />
    </>
  )
}
