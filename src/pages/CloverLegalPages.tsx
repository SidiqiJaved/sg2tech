import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { company, contact } from '@/content/site'
import { eulaSections } from '@/content/cloverLegal'

function LegalShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="container-page py-10 sm:py-16">
      <div className="max-w-3xl">
        <p className="t-label text-copper-deep">{company.legalName} / Clover integration</p>
        <h1 className="t-h1 mt-4">{title}</h1>
        <p className="t-caption mt-4">Effective date: October 27, 2026</p>
        <div className="policy-content mt-8">{children}</div>
      </div>
    </article>
  )
}

function LegalContact() {
  return (
    <p>
      Contact {company.legalName} at <a href="mailto:privacy@sg2tech.com">privacy@sg2tech.com</a>,{' '}
      <a href={contact.emailHref}>{contact.email}</a>, or{' '}
      <a href={contact.phoneHref}>{contact.phone}</a>. Postal correspondence: 1706 Amber Cir,
      Alexandria, VA 22304.
    </p>
  )
}

export function CloverEulaPage() {
  return (
    <LegalShell title="End-User License Agreement">
      <p>
        This Agreement governs the Merchant's use of the SG2 Clover integration and related
        financial-dashboard services (the App). It is between the business or individual accepting
        these terms (the Merchant or you) and {company.legalName} (SG2 or App Provider). Clover is
        not a party. By accepting, installing, or using the App, you agree to these terms and
        represent that you can bind the Merchant. If you do not agree, do not install or use the
        App.
      </p>
      <p>
        A separately executed agreement or order controls conflicting commercial, ownership,
        warranty, support, and dispute terms for that Merchant. Existing ownership assignments,
        confidentiality agreements, and data-protection obligations are preserved. Neither that
        priority nor any separate agreement permits processing contrary to applicable privacy law or
        sections 9 and 10.
      </p>
      {eulaSections.map((section) => (
        <section key={section.id} id={section.id} className="mt-8">
          <h2>{section.title}</h2>
          {section.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {section.id === 'confidentiality' && (
            <p>
              Application data is also governed by our{' '}
              <Link to="/privacy-policy/">Clover Application Privacy Policy</Link>.
            </p>
          )}
        </section>
      ))}
      <section id="contact">
        <h2>12. Contact</h2>
        <LegalContact />
      </section>
    </LegalShell>
  )
}
