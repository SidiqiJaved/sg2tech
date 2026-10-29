import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { company, contact } from '@/content/site'
import { policyDate } from '@/content/legal'

function Policy({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="container-page py-10 sm:py-16">
      <div className="max-w-3xl">
        <p className="t-label text-copper-deep">{company.legalName}</p>
        <h1 className="t-h1 mt-4">{title}</h1>
        <p className="t-caption mt-4">Effective date: {policyDate}</p>
        <div className="policy-content mt-8">{children}</div>
      </div>
    </article>
  )
}

export function TermsPage() {
  return (
    <Policy title="Terms of Service">
      <section>
        <h2>Website and business inquiries</h2>
        <p>
          These terms describe use of the SG2 Technologies, LLC website and our SMS program. Website
          information describes our products and engineering services; it does not create a project
          agreement, price commitment or guaranteed delivery date. Product access, implementation,
          ownership and support are governed by the applicable written agreement.
        </p>
      </section>
      <section>
        <h2>Acceptable use and content</h2>
        <p>
          Use this website lawfully. Do not submit harmful material, attempt unauthorized access,
          interfere with the website or misuse another person’s information. Submit only information
          you are authorized to share.
        </p>
        <p>
          Website content, branding and materials belong to SG2 or their respective owners.
          Third-party names identify their owners and do not imply endorsement. Do not reproduce or
          misrepresent SG2 materials without permission, except as allowed by law.
        </p>
      </section>
      <section id="sms">
        <h2>SG2 Technologies SMS program</h2>
        <p>
          If you separately opt in through our contact form, SG2 Technologies may send texts about
          your inquiry, product demos, project coordination and customer support. SMS consent is
          optional and is not a condition of purchase or service. Providing a phone number without
          checking the consent box does not enroll you.
        </p>
        <ul>
          <li>
            <strong>Frequency:</strong> Message frequency varies based on your requests and
            conversation.
          </li>
          <li>
            <strong>Charges:</strong> Message and data rates may apply. Your mobile carrier’s terms
            apply.
          </li>
          <li>
            <strong>Opt out:</strong> Reply STOP to stop receiving SMS messages. You may receive a
            confirmation of your opt-out.
          </li>
          <li>
            <strong>Help:</strong> Reply HELP, email {contact.email}, or call {contact.phone}.
          </li>
          <li>
            <strong>Delivery:</strong> Delivery depends on carrier and network availability.
            Carriers are not liable for delayed or undelivered messages.
          </li>
          <li>
            <strong>Your number:</strong> Only enroll a number you control. Contact us if your
            number changes.
          </li>
        </ul>
        <p>
          How we handle mobile information and consent is described in our{' '}
          <Link to="/privacy-policy#mobile-information">Privacy Policy</Link>.
        </p>
      </section>
      <section>
        <h2>Information and availability</h2>
        <p>
          We aim to keep website information accurate, but content, features and availability may
          change. Illustrative dashboards and sample figures are not customer results, financial
          advice or performance guarantees. To the extent permitted by applicable law, website
          information is provided as available without warranties of uninterrupted access or
          complete accuracy. Nothing in these terms excludes rights or liabilities that cannot
          lawfully be excluded.
        </p>
      </section>
      <section>
        <h2>Updates and contact</h2>
        <p>
          We may revise these terms by posting an updated version and effective date. For questions
          about the website or SMS program, contact <a href={contact.emailHref}>{contact.email}</a>{' '}
          or <a href={contact.phoneHref}>{contact.phone}</a>.
        </p>
      </section>
    </Policy>
  )
}
