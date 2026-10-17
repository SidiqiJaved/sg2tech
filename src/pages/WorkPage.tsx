import { Link, useParams } from 'react-router-dom'
import { CtaBand, PageIntro } from '@/components/ui/Blocks'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { TextLink } from '@/components/ui/Button'
import { ProductFrame } from '@/components/product/ProductFrame'
import { publishedCaseStudies, type CaseStudy } from '@/content/caseStudies'
import { NotFoundPage } from './NotFoundPage'

const structure = [
  ['Client or project overview', 'Who the work was for and what they do.'],
  ['Business challenge', 'The problem in the client’s own terms.'],
  ['Initial state', 'The tools, processes and data before we started.'],
  ['Solution approach', 'How we scoped, designed and sequenced the work.'],
  ['Product capabilities', 'What was built and what people can now do.'],
  ['Technology and integrations', 'The systems involved and how they connect.'],
  ['Business outcomes', 'Results that have been verified with the client. Never estimates.'],
  ['Future opportunities', 'What comes next, where relevant.'],
]

export function WorkPage() {
  const has = publishedCaseStudies.length > 0
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Work we can stand behind, shown with permission."
        lead="We publish a client’s name, screens and results only after they have approved it, and we publish only outcomes that have been verified."
      />

      {has ? (
        <Section tone="deep">
          <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
            {publishedCaseStudies.map((c) => (
              <li key={c.slug} className="bg-paper p-8 sm:p-10">
                <p className="t-label mb-3 text-ink-mute">{c.industry}</p>
                <h2 className="t-h3 text-2xl">
                  <Link to={`/work/${c.slug}`} className="hover:text-copper-deep">
                    {c.title}
                  </Link>
                </h2>
                <p className="t-body mt-3">{c.summary}</p>
                <div className="mt-6">
                  <TextLink to={`/work/${c.slug}`}>Read the case study</TextLink>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      ) : (
        <Section tone="deep">
          <Reveal className="border border-dashed border-ink-mute/50 bg-ivory p-8 sm:p-14">
            <StatusBadge status="planned" />
            <h2 className="t-h2 mt-6 max-w-2xl">Our first case studies are in preparation.</h2>
            <p className="t-body mt-4 max-w-2xl">
              We are working with customers on write-ups that they can review and approve. Until one
              is ready, we would rather show you nothing than something we cannot verify. If you
              would like to see how the products behave, a live walkthrough is the best way.
            </p>
            <div className="mt-8">
              <TextLink to="/contact?inquiry=demo">Request a walkthrough</TextLink>
            </div>
          </Reveal>
        </Section>
      )}

      <Section>
        <SectionHeader
          index="01"
          eyebrow="How we document our work"
          title="Every case study follows the same structure."
          lead="So that you can compare projects, and so that nothing important is left out."
        />
        <ol className="mt-14 grid gap-x-16 md:grid-cols-2">
          {structure.map(([t, d], i) => (
            <Reveal as="li" key={t} className="rule-tick grid grid-cols-[2.5rem_1fr] gap-3 py-6">
              <span className="t-label pt-1.5 text-copper-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>
                <span className="t-h3 block">{t}</span>
                <span className="t-body mt-1 block text-[0.95rem]">{d}</span>
              </span>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="Want to be among our first case studies?"
        primary={{ label: 'Start a conversation', to: '/contact' }}
      />
    </>
  )
}

function Block({
  index,
  title,
  children,
}: {
  index: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Reveal className="rule-tick grid gap-4 py-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <p className="t-label mb-2 text-copper-deep">{index}</p>
        <h2 className="t-h3">{title}</h2>
      </div>
      <div className="t-body lg:col-span-8">{children}</div>
    </Reveal>
  )
}

function CaseStudyBody({ c }: { c: CaseStudy }) {
  return (
    <>
      <PageIntro
        eyebrow={`Case study · ${c.industry}`}
        title={c.title}
        lead={c.summary}
        aside={
          c.screenshot ? <ProductFrame title={c.client} screenshot={c.screenshot} /> : undefined
        }
      />
      <Section tone="deep">
        <Block index="01" title="Overview">
          <p>{c.anonymous ? `${c.client} (name withheld at the client’s request).` : c.client}</p>
        </Block>
        <Block index="02" title="Business challenge">
          <p>{c.challenge}</p>
        </Block>
        <Block index="03" title="Initial state">
          <p>{c.initialState}</p>
        </Block>
        <Block index="04" title="Solution approach">
          <p>{c.approach}</p>
        </Block>
        <Block index="05" title="Product capabilities">
          <ul className="list-disc space-y-1 pl-5">
            {c.capabilities.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Block>
        <Block index="06" title="Technology and integrations">
          <ul className="list-disc space-y-1 pl-5">
            {c.technology.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Block>
        {c.outcomes.length > 0 && (
          <Block index="07" title="Business outcomes">
            <ul className="list-disc space-y-1 pl-5">
              {c.outcomes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Block>
        )}
        {c.future && (
          <Block index="08" title="Future opportunities">
            <p>{c.future}</p>
          </Block>
        )}
      </Section>
      <CtaBand
        title="Facing something similar?"
        primary={{ label: 'Start a conversation', to: '/contact' }}
      />
    </>
  )
}

export function CaseStudyPage() {
  const { slug } = useParams()
  const c = publishedCaseStudies.find((x) => x.slug === slug)
  if (!c) return <NotFoundPage />
  return <CaseStudyBody c={c} />
}
