import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { company, contact } from '@/content/site'
import { mobilePrivacyNotice, policyDate } from '@/content/legal'

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

export function PrivacyPolicyPage() {
  return (
    <Policy title="Privacy Policy">
      <section>
        <h2>About this policy</h2>
        <p>
          SG2 Technologies, LLC (SG2, we, us) provides this policy for our website, business
          inquiries and SMS communications. Customer product data may also be governed by a separate
          service agreement.
        </p>
      </section>
      <section>
        <h2>Information we collect</h2>
        <p>
          When you contact us, we collect the information you submit, such as your name, email
          address, company, optional phone number, product interest, location count and message. If
          you choose SMS, we also record your consent choice, the disclosure version and a
          submission timestamp. Messages you exchange with us may be retained as business records.
        </p>
        <p>
          Our hosting and communication services may process technical information such as IP
          addresses, browser details and delivery logs to operate and protect the services.
        </p>
      </section>
      <section>
        <h2>How we use information</h2>
        <p>
          We use information to respond to inquiries, arrange demos, coordinate projects, provide
          support, operate our website, protect against abuse and meet applicable obligations. We
          send SMS messages only with the applicable consent, and use your phone number for the
          communications you have authorized.
        </p>
      </section>
      <section
        id="mobile-information"
        className="rounded border border-copper/40 bg-ivory p-5 sm:p-6"
      >
        <h2>Mobile information and SMS consent</h2>
        <p>{mobilePrivacyNotice}</p>
        <p>
          We do not sell consumer personal information, including mobile phone numbers, or share it
          with third parties or affiliates for marketing or lead generation.
        </p>
      </section>
      <section>
        <h2>Service providers and disclosures</h2>
        <p>
          We use providers for website hosting, inquiry processing and business communications. They
          process information to provide services on our behalf. We may disclose information when
          required by applicable law or to protect rights and prevent abuse. General
          information-sharing descriptions do not authorize sharing SMS opt-in data or consent; the
          SMS restrictions above control.
        </p>
      </section>
      <section>
        <h2>Your SMS choices</h2>
        <p>
          The phone field and SMS consent checkbox on our contact form are optional. Providing a
          number alone does not enroll you in SMS. Consent is not a condition of purchase or
          service. Message frequency varies, and message and data rates may apply. Reply STOP to opt
          out or HELP for help. You can also contact {contact.email}.
        </p>
        <p>
          See our <Link to="/terms-and-conditions#sms">SMS terms</Link> for more information.
        </p>
      </section>
      <section>
        <h2>Retention, security and requests</h2>
        <p>
          We retain information as needed for the purposes described here, business records,
          applicable obligations and honoring opt-out requests. No internet transmission or storage
          method is completely secure.
        </p>
        <p>
          Contact {contact.email} to request access, correction or deletion of information you have
          provided. We will review requests subject to applicable requirements and recordkeeping
          needs.
        </p>
      </section>
      <section>
        <h2>Updates and contact</h2>
        <p>
          We may update this policy by posting a revised version with a new effective date.
          Questions can be sent to <a href={contact.emailHref}>{contact.email}</a> or directed to{' '}
          <a href={contact.phoneHref}>{contact.phone}</a>.
        </p>
      </section>
    </Policy>
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
