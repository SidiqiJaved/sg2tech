import { Link } from 'react-router-dom'
import { company, contact } from '@/content/site'
import { mobilePrivacyNotice } from '@/content/legal'

/** Consolidated approved disclosures; the merge remains a local review copy until approval. */
export function PrivacyPolicyPage() {
  return (
    <article className="container-page py-10 sm:py-16">
      <div className="max-w-3xl">
        <p className="t-label text-copper-deep">{company.legalName}</p>
        <h1 className="t-h1 mt-4">Privacy Policy</h1>
        <p className="t-caption mt-4">
          Effective date: October 27, 2026 · Last updated: October 29, 2026
        </p>
        <div className="policy-content mt-8">
          <section id="scope">
            <h2>1. Scope and our role</h2>
            <p>
              This Privacy Policy explains how {company.legalName} (SG2, we, us, or our) handles
              information in connection with our website, business inquiries, SMS communications,
              Clover integration, financial intelligence application and related financial-dashboard
              services (the App). It is our single Privacy Policy for these activities.
            </p>
            <p>
              The business using the App is the Merchant. Information processed on a Merchant’s
              behalf is Merchant Data. For Merchant Data, SG2 acts on the Merchant’s instructions
              under its services agreement and any applicable data-protection agreement. The
              Merchant determines the authorized business purposes and connected accounts. SG2 does
              not own Merchant Data or use it for its own marketing, independent analytics, model
              training or unrelated commercial purposes. SG2 separately handles website, inquiry,
              billing and support records to operate its business and manage client relationships.
            </p>
            <p>
              A Merchant agreement governs processing for that Merchant and controls a conflict to
              the extent permitted by law. Neither that agreement nor this policy permits processing
              prohibited by applicable law or overrides the mobile-information and SMS-consent
              restrictions below. This policy does not replace a Merchant’s own notices to its
              customers or personnel. Application license terms remain in our{' '}
              <Link to="/eula/">End-User License Agreement</Link>.
            </p>
          </section>
          <section id="categories">
            <h2>2. Information collected and its sources</h2>
            <p>
              When you contact us, we collect the information you submit, such as your name, email
              address, company, optional phone number, product interest, location count and message.
              If you choose SMS, we also record your consent choice, the disclosure version and a
              submission timestamp. Messages you exchange with us may be retained as business
              records. Business contact, billing and support records may also include job details,
              billing information and information voluntarily supplied by Merchants, authorized
              users and other people who contact us.
            </p>
            <p>
              Merchant Data is information the Merchant supplies or authorizes SG2 to receive from
              connected POS and online-ordering providers for the agreed financial dashboard. The
              service scope covers sales, costs, franchise and royalty reporting, invoices and
              report exports. Merchant Data can include customer or personnel names, contact
              information, employee records and other business data where supplied under the
              Merchant’s instructions. The information varies with the contracted scope and
              connected source.
            </p>
            <p>
              Our hosting and communication services may process technical information such as IP
              addresses, browser details and delivery logs to operate and protect the services. App
              technical information may include device details and access or error records. We do
              not knowingly collect sensitive personal information unless specifically required and
              instructed by the Merchant for the service. The information collected depends on the
              Merchant’s instructions, the agreed service scope and the connected sources.
            </p>
          </section>
          <section id="purpose">
            <h2>3. How we use information</h2>
            <p>
              We use website, inquiry and business records to respond to inquiries, arrange demos,
              coordinate projects, provide support, operate our website, manage billing and client
              relationships, send administrative and security notices, protect against abuse and
              meet applicable obligations. We send SMS messages only with the applicable consent,
              and use your phone number for the communications you have authorized.
            </p>
            <p>
              Merchant Data is used to develop, test, deliver, host where agreed, maintain and
              support the authorized application; organize and report the Merchant’s financial
              records; and respond to its service instructions. Merchant Data is not used for SG2’s
              own marketing, independent analytics or model training. Information may also be used
              to meet legal duties, enforce agreements, protect rights and prevent fraud or
              unauthorized access, subject to the Merchant Data and SMS restrictions in this policy.
            </p>
          </section>
          <section
            id="mobile-information"
            className="rounded border border-copper/40 bg-ivory p-5 sm:p-6"
          >
            <h2>4. Mobile information and SMS consent</h2>
            <p>{mobilePrivacyNotice}</p>
            <p>
              We do not sell consumer personal information, including mobile phone numbers, or share
              it with third parties or affiliates for marketing or lead generation. General
              information-sharing descriptions do not authorize sharing SMS opt-in data or consent;
              the restrictions in this section control throughout this policy.
            </p>
          </section>
          <section id="sms-choices">
            <h2>5. Your SMS choices</h2>
            <p>
              The phone field and SMS consent checkbox on our contact form are optional. Providing a
              number alone does not enroll you in SMS. Consent is not a condition of purchase or
              service. Message frequency varies, and message and data rates may apply. Reply STOP to
              opt out or HELP for help. You can also contact {contact.email}.
            </p>
            <p>
              See our <Link to="/terms-and-conditions#sms">SMS terms</Link> for more information.
            </p>
          </section>
          <section id="disclosures">
            <h2>6. Service providers and disclosures</h2>
            <p>
              We use providers for website hosting, inquiry processing and business communications.
              They process information to provide services on our behalf. Providers and
              subcontractors, such as hosting, payment, development and support services, may
              process information needed to perform their services under confidentiality and
              data-protection obligations. We return or disclose Merchant Data as directed by the
              Merchant and may make it available to its authorized users. Disclosures of Merchant
              Data remain limited by the Merchant’s instructions, applicable agreement and privacy
              law.
            </p>
            <p>
              We may disclose information when required by applicable law or to protect lawful
              rights, safety and security and prevent abuse. A business reorganization, acquisition
              or asset transfer may involve transfer of information, subject to applicable law and
              continuing privacy obligations. These general disclosures do not override the
              mobile-information and SMS-consent restrictions in section 4. Clover and other
              connected platforms have their own notices for processing they perform.
            </p>
          </section>
          <section id="sale">
            <h2>7. Sale or sharing of personal information</h2>
            <p>
              SG2 does not sell personal information or share it for cross-context behavioral
              advertising, as those terms are defined by the California Consumer Privacy Act (CCPA),
              as amended. Service-provider processing and Merchant-directed disclosures are subject
              to the restrictions described above.
            </p>
            <p>
              During the twelve months preceding October 27, 2026, SG2 did not sell personal
              information or share it for cross-context behavioral advertising.
            </p>
          </section>
          <section id="security">
            <h2>8. Retention and security</h2>
            <p>
              We retain information as needed for the purposes described here, business records,
              applicable obligations, honoring opt-out requests, resolving disputes and enforcing
              agreements. Merchant Data is retained under the Merchant’s instructions and service
              agreement, generally for the project or support period, and then returned or deleted
              unless otherwise agreed or lawfully required. Contact us about retention or deletion
              of information associated with your service.
            </p>
            <p>
              SG2 uses reasonable administrative, technical and physical safeguards to protect
              information. No internet transmission or storage method is completely secure, and no
              system can guarantee absolute security. Merchants remain responsible for protecting
              their accounts, authorized users and source systems.
            </p>
          </section>
          <section id="rights">
            <h2>9. Individual rights and requests</h2>
            <p>
              Depending on applicable law, individuals may have rights to access, correct, delete,
              obtain a portable copy of, restrict or object to processing of their information.
              Contact {contact.email} or use the privacy contact channels below to request access,
              correction or deletion of information you have provided. We will review requests
              subject to applicable requirements and recordkeeping needs and respond within the
              period required by applicable law.
            </p>
            <p>
              For Merchant Data, contact the relevant Merchant first so it can locate the records
              and determine the response. SG2 will refer direct requests to the responsible Merchant
              and reasonably assist with its response. For requests for which Clover is responsible,
              use <a href="https://www.clover.com/privacy-policy">Clover’s Privacy Notice</a>. SG2
              will assist the responsible Merchant or Clover as required by law and the applicable
              agreement.
            </p>
            <p>
              For information SG2 handles for its own website, inquiry, client relationship or
              support purposes, provide enough detail to identify your request and relevant
              relationship. Do not send passwords or full payment-card numbers.
            </p>
          </section>
          <section id="california">
            <h2>10. California privacy rights</h2>
            <p>
              Subject to the CCPA’s scope and exceptions, California residents may request the
              categories and specific pieces of personal information collected about them, its
              sources, the purposes of collection and the categories of recipients. Requests may
              also cover information disclosed for business purposes or sold during the preceding
              twelve months, including the relevant categories and recipients.
            </p>
            <p>
              Residents may request access, correction, deletion and a portable copy of their
              information; opt out of a qualifying sale or sharing for cross-context behavioral
              advertising; and limit uses of sensitive personal information where that right
              applies. We will not discriminate against a person for exercising applicable privacy
              rights.
            </p>
            <p>
              Submit a request using the email, telephone or postal channels below. For requests
              concerning Merchant Data, contact the relevant Merchant. We may verify identity using
              information reasonably necessary to match the requester with the records and may ask
              for clarification. An authorized agent may submit a request with evidence of
              authority; we may also seek identity confirmation from the individual as permitted by
              law. If an exception limits a request, we will explain the applicable reason where
              required.
            </p>
          </section>
          <section id="international">
            <h2>11. International transfers and third-party services</h2>
            <p>
              Where information is transferred internationally, SG2 uses safeguards required by
              applicable law, including appropriate contractual protections where required. External
              services are governed by their own notices; review those notices when using them.
            </p>
          </section>
          <section id="updates">
            <h2>12. Updates and contact</h2>
            <p>
              We may update this policy by posting a revised version with a new effective date and
              provide additional notice of material changes where required by law.
            </p>
            <p id="contact">
              Questions, complaints and privacy requests may be sent to {company.legalName} at{' '}
              <a href="mailto:privacy@sg2tech.com">privacy@sg2tech.com</a>,{' '}
              <a href={contact.emailHref}>{contact.email}</a>, or{' '}
              <a href={contact.phoneHref}>{contact.phone}</a>. Postal correspondence: 1706 Amber
              Cir, Alexandria, VA 22304. You may also contact the responsible Merchant directly.
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}
