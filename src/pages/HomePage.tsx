import { Button, TextLink } from '@/components/ui/Button'
import { CtaBand } from '@/components/ui/Blocks'
import { Section } from '@/components/ui/Section'

export function HomePage() {
  return (
    <>
      <section className="pb-10 pt-8 sm:py-16">
        <div className="container-page">
          <p className="t-label mb-4 text-copper-deep">SG2 Technologies</p>
          <h1 className="t-display max-w-[18ch]">
            Less busywork.
            <br /> <span className="text-copper-deep">More clarity.</span>
          </h1>
          <p className="t-lead mt-5 max-w-xl">
            Software products and custom engineering for growing businesses.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Button to="#products">Explore products</Button>
            <TextLink to="/contact?inquiry=custom">Discuss a project</TextLink>
          </div>
        </div>
      </section>
      <Section id="products" tone="soft">
        <h2 className="t-label text-copper-deep">Our products</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <article className="rule-tick pt-5">
            <h3 className="t-h2">Financial Intelligence</h3>
            <p className="t-body mt-3 max-w-lg">
              Restaurant revenue, reconciliation and payout reporting. Royalty calculations and
              franchise invoicing.
            </p>
            <div className="mt-5">
              <TextLink to="/solutions/financial-intelligence">See Financial Intelligence</TextLink>
            </div>
          </article>
          <article className="rule-tick pt-5">
            <h3 className="t-h2">Franchise Management</h3>
            <p className="t-body mt-3 max-w-lg">
              Inspections, standards, training and employee workflows. Manage royalties and invoices
              across your network.
            </p>
            <div className="mt-5">
              <TextLink to="/solutions/franchise-management">See Franchise Management</TextLink>
            </div>
          </article>
        </div>
      </Section>
      <Section>
        <div className="grid items-center gap-5 lg:grid-cols-2">
          <div>
            <h2 className="t-h2">Built for your business.</h2>
            <p className="t-body mt-3 max-w-xl">
              Custom applications, integrations, automation and analytics built around your
              workflows.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <TextLink to="/services/custom-software-development">
              Explore custom engineering
            </TextLink>
          </div>
        </div>
      </Section>
      <CtaBand
        title="See what fits."
        primary={{ label: 'Book a demo', to: '/contact?inquiry=demo' }}
      />
    </>
  )
}
