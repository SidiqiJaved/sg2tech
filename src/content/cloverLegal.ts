// Founder-approved terms. Publication remains separately controlled. See CLOVER-REVIEW.md.
export interface LegalSection {
  id: string
  title: string
  paragraphs: string[]
}
export const eulaSections: LegalSection[] = [
  {
    id: 'app',
    title: '1. The App and license',
    paragraphs: [
      '1.1 The App supports the collection, organization, viewing, and export of merchant-authorized sales and financial information for reporting, reconciliation, and franchise operations. Features and implementation work are governed by the applicable order or service agreement.',
      '1.2 To the extent SG2 owns or is authorized to license the relevant software, SG2 grants a limited, nonexclusive, nontransferable, nonsublicensable, revocable license during this Agreement for your internal business operations. You may not resell, rent, sublicense, distribute, reverse engineer, decompile, or derive source code from the App, except where applicable law permits. Preserve proprietary notices and respect third-party intellectual property. This license does not transfer ownership or trademark rights.',
      '1.3 A signed work-for-hire assignment or other ownership grant remains effective. This Agreement does not alter ownership of a dashboard assigned to a client or expand SG2’s rights to reuse client branding, datasets, royalty rates, business rules, or confidential information.',
      '1.4 Updates and maintenance may interrupt availability. SG2 may require updates and discontinue support for older versions. You are responsible for your equipment, connectivity, and access to integrated third-party services.',
    ],
  },
  {
    id: 'fees',
    title: '2. Fees',
    paragraphs: [
      'Fees, milestones, billing periods, payment methods, and refunds are those you accept in a signed agreement, order, or applicable marketplace purchase. This Agreement does not create an additional subscription or replace agreed fixed-fee milestones. You are responsible for applicable transaction taxes other than taxes on SG2 income. Notify SG2 promptly of billing errors so they can be investigated; existing contractual dispute rights remain effective.',
    ],
  },
  {
    id: 'term',
    title: '3. Term',
    paragraphs: [
      'This Agreement begins when you accept it or first install or use the App and continues while you are authorized to use the App, unless ended under section 4 or an applicable signed agreement. Any agreed project or subscription term remains controlling.',
    ],
  },
  {
    id: 'termination',
    title: '4. Suspension and termination',
    paragraphs: [
      'SG2 may suspend or terminate access for material breach, unlawful or fraudulent use, security threats, interference with the service, or loss of a third-party authorization necessary to provide the App. SG2 will give notice where reasonably practicable and may act immediately to protect systems, data, or legal compliance.',
      'You may stop using the App, revoke its Clover authorization, and notify SG2 that you wish to terminate. Any remaining contractual term, payment obligations, refund rights, and notice requirements are determined by your applicable agreement or purchase terms. Termination does not itself erase records that must lawfully be retained. SG2 will return or delete Merchant Data under the Merchant’s instructions and applicable agreement, subject to lawful retention requirements. Confidentiality, privacy obligations, accrued payment obligations, and provisions intended to survive remain effective.',
    ],
  },
  {
    id: 'confidentiality',
    title: '5. Confidentiality, Data, and Ideas',
    paragraphs: [
      '5.1 Each party will keep the other party’s nonpublic technical, customer, operational, strategic, financial, and contractual information confidential and maintain reasonable protective safeguards. These duties exclude information that becomes public without the recipient’s fault, was already lawfully held, was developed independently without using confidential information, or was lawfully received without a confidentiality duty.',
      '5.2 Disclosure is permitted only to directors, officers, employees, or representatives who need the information to perform this Agreement and are subject to appropriate confidentiality duties, in response to a subpoena or court order, or as otherwise required by law. Existing nondisclosure obligations remain effective.',
      '5.3 SG2 may process data obtained through the App to deliver the agreed services, subject to the application privacy policy, applicable law, and sections 9 and 10. Merchant Data and personal information may not be used for SG2’s independent research, model training, advertising, or other independent commercial purposes. These restrictions control any inconsistent general permission to use data.',
      '5.4 You may voluntarily provide product ideas or feedback. Do not include Merchant Data, personal information, or confidential material in feedback. For nonconfidential feedback that you have authority to provide, you grant SG2 a nonexclusive, perpetual, worldwide, royalty-free right to use and incorporate it without payment or an obligation to implement it. This permission does not transfer rights in client-owned software, client business rules, or confidential information.',
    ],
  },
  {
    id: 'account',
    title: '6. Accounts and Merchant responsibilities',
    paragraphs: [
      'Provide accurate account details and keep them current. Authorize only accounts and locations you are entitled to connect. Protect credentials and restrict access to authorized users; notify SG2 promptly of a suspected compromise. You are responsible for your authorized users, source-data accuracy, and maintaining appropriate copies of business records. Do not access another merchant’s records or upload unlawful material, malicious code, or content infringing another person’s rights.',
    ],
  },
  {
    id: 'risk',
    title: '7. Risk allocation',
    paragraphs: [
      '7.1 Express warranties and support commitments in a separately signed agreement remain controlling, including any agreed defect-warranty period, support allowance, or hourly support rate. Otherwise, to the extent permitted by law, the App is provided on an “as available” and “as is” basis, without implied warranties of merchantability, fitness, noninfringement, uninterrupted operation, or error-free reporting. Source-platform availability and timing can affect results; reports do not guarantee settlement, profit, or accounting accuracy.',
      '7.2 Subject to any different allocation in a signed agreement and applicable law, you will indemnify SG2 and its personnel against third-party claims, reasonable defense costs, and damages arising from your unlawful use of the App or breach of this Agreement. SG2 may manage the defense with your reasonable cooperation. A settlement imposing nonmonetary obligations on SG2 requires its written consent.',
      '7.3 Subject to applicable law and any controlling terms in a signed agreement, SG2 is not liable for indirect, incidental, consequential, special, exemplary, or punitive damages, including lost profits, revenue, or business opportunities. Its aggregate liability connected with this Agreement is limited to fees paid to SG2 for the App during the three months preceding the event giving rise to the claim. These limitations do not exclude liability that cannot lawfully be excluded.',
    ],
  },
  {
    id: 'communications',
    title: '8. Communications',
    paragraphs: [
      'SG2 may send service, security, billing, and agreement notices using your account or supplied contact details. You are responsible for your communications provider’s charges. This Agreement does not enroll you in marketing SMS or authorize automated marketing calls. Existing website and SMS consent, opt-out, and help disclosures continue to apply.',
    ],
  },
  {
    id: 'privacy-laws',
    title: '9. Compliance with privacy laws',
    paragraphs: [
      '9.1 SG2 commits, represents, and warrants that it will process Merchant Data and Personal Information only on behalf of the Merchant as its service provider, to perform this Agreement and as permitted by the California Consumer Privacy Act (CCPA), as amended, and other applicable privacy and data-protection laws (Privacy Laws). It will not sell that personal information as “sale” is defined by Privacy Laws.',
      '9.2 SG2 will not collect, retain, use, disclose, sell, or otherwise make Merchant Data or Personal Information available for SG2’s own commercial purposes or in violation of Privacy Laws.',
      '9.3 Collection, use, retention, and disclosure will be limited to activities reasonably necessary and proportionate to the contracted services or a compatible operational purpose permitted by Privacy Laws. Merchant Data includes information made available by or for the Merchant through the App; Personal Information has the meaning given by applicable Privacy Laws.',
    ],
  },
  {
    id: 'rights',
    title: '10. Data-subject rights and assistance',
    paragraphs: [
      '10.1 SG2 will reasonably cooperate with the Merchant’s privacy-law compliance and inquiries, including verifiable consumer requests, taking into account the nature of its processing and the information available to it. Consistent with the service’s capabilities and SG2’s service-provider role, SG2 will make available the ability to fulfill applicable individual rights.',
      '10.2 If an individual sends SG2 a request about Merchant Data, SG2 will direct the individual to the Merchant. The Merchant remains responsible for the response, and SG2 will comply with reasonable requests for assistance.',
      '10.3 SG2 will immediately notify the Merchant of any complaint, notice, or communication directly or indirectly concerning either party’s compliance with Privacy Laws in connection with the services.',
    ],
  },
  {
    id: 'general',
    title: '11. General',
    paragraphs: [
      'Each party will comply with laws applicable to its performance. SG2 will give notice of material changes through the App, email, or a dated notice on this page. Continued use after the notified effective date signifies acceptance to the extent permitted by law. Stop using the App if you do not accept a change. Changes to this Agreement do not amend a separately signed agreement except in accordance with that agreement.',
      'New York law governs, without regard to conflict-of-law rules. Unless a signed agreement specifies otherwise, proceedings will be brought in the state or federal courts located in New York, New York. In a dispute arising under this Agreement, the prevailing party may recover reasonable attorney fees and necessary costs, consistent with the existing contractual allocation.',
      'This Agreement and applicable signed agreements or accepted orders form the terms for the App; the priority stated above preserves existing contractual rights. Invalid provisions are severable. Delay in enforcement does not waive a right. The parties are independent contractors. The Agreement binds permitted successors and assigns; neither party may assign it without the other party’s prior written consent, except where a controlling signed agreement provides otherwise.',
    ],
  },
]

export const privacySections: LegalSection[] = [
  {
    id: 'scope',
    title: '1. Our role and the information covered',
    paragraphs: [
      'For Merchant Data, SG2 acts on the Merchant’s instructions under its services agreement and any applicable data-protection agreement. The Merchant determines the authorized business purposes and connected accounts. SG2 does not own this data or use it for its own marketing, analytics, or unrelated commercial purposes. SG2 separately handles its business contact, billing, and support records to manage the client relationship.',
      'A Merchant agreement governs processing for that Merchant and controls a conflict to the extent permitted by law. Neither that agreement nor this policy permits processing prohibited by applicable law.',
    ],
  },
  {
    id: 'categories',
    title: '2. Information collected and its sources',
    paragraphs: [
      'Business contact and support information includes names, email addresses, telephone numbers, company and job details, billing information, and information voluntarily supplied in support communications. We receive it from Merchants, their authorized users, and people who contact us.',
      'Merchant Data is information the Merchant supplies or authorizes SG2 to receive from connected POS and online-ordering providers for the agreed financial dashboard. The service scope covers sales, costs, franchise and royalty reporting, invoices, and report exports. Merchant Data can include customer or personnel names, contact information, employee records, and other business data where supplied under the Merchant’s instructions. The exact information varies with the contracted scope and connected source.',
      'Technical information associated with operating the service may include IP addresses, device or browser details, and access or error records. We do not knowingly collect sensitive personal information unless specifically required and instructed by the client for the service. The information collected depends on the Merchant’s instructions, the agreed service scope, and the connected sources.',
    ],
  },
  {
    id: 'purpose',
    title: '3. How we use information',
    paragraphs: [
      'Merchant Data is used to develop, test, deliver, host where agreed, maintain, and support the authorized application; organize and report the Merchant’s financial records; and respond to its service instructions. Merchant Data is not used for SG2’s own marketing, independent analytics, or model training.',
      'Business contact and support records are used to respond to inquiries, perform agreements, manage billing and the client relationship, send administrative and security notices, and address support requests. Information may also be used to meet legal duties, enforce agreements, protect rights, and prevent fraud or unauthorized access.',
    ],
  },
  {
    id: 'disclosures',
    title: '4. Disclosures and service providers',
    paragraphs: [
      'We return or disclose Merchant Data as directed by the Merchant and may make it available to its authorized users. Providers and subcontractors, such as hosting, payment, development, and support services, may process information needed to perform their services under confidentiality and data-protection obligations. Disclosures of Merchant Data remain limited by the Merchant’s instructions, applicable agreement, and privacy law.',
      'Information may be disclosed when legally required or necessary to protect lawful rights and safety. A business reorganization, acquisition, or asset transfer may involve transfer of information, subject to applicable law and continuing privacy obligations. Clover and other connected platforms have their own privacy notices for processing they perform.',
    ],
  },
  {
    id: 'security',
    title: '5. Security and retention',
    paragraphs: [
      'SG2 uses reasonable administrative, technical, and physical safeguards to protect information. No system can guarantee absolute security. Merchants remain responsible for protecting their accounts, authorized users, and source systems.',
      'We retain information only as necessary to perform the service, meet legal duties, resolve disputes, and enforce agreements. Merchant Data is retained under the Merchant’s instructions and service agreement, generally for the project or support period, and then returned or deleted unless otherwise agreed or lawfully required. Contact us about retention or deletion of information associated with your service.',
    ],
  },
  {
    id: 'rights',
    title: '6. Individual rights and requests',
    paragraphs: [
      'Depending on applicable law, individuals may have rights to access, correct, delete, obtain a portable copy of, restrict, or object to processing of their information. For information processed for a Merchant, contact that Merchant first so it can locate the records and determine the response. SG2 will refer direct requests to the responsible Merchant and reasonably assist with its response.',
      'For information SG2 handles for its own client relationship or support purposes, use the contact channels below. Provide enough detail to identify your request and relevant relationship. Do not send passwords or full payment-card numbers. We will respond within the period required by applicable law.',
    ],
  },
  {
    id: 'california',
    title: '7. California privacy rights',
    paragraphs: [
      'Subject to the CCPA’s scope and exceptions, California residents may request the categories and specific pieces of personal information collected about them, its sources, the purposes of collection, and the categories of recipients. Requests may also cover information disclosed for business purposes or sold during the preceding twelve months, including the relevant categories and recipients.',
      'Residents may request access, correction, deletion, and a portable copy of their information; opt out of a qualifying sale or sharing for cross-context behavioral advertising; and limit uses of sensitive personal information where that right applies. We will not discriminate against a person for exercising applicable privacy rights.',
      'Submit a request using the email, telephone, or postal channels below. For requests concerning Merchant Data, contact the relevant Merchant. We may verify identity using information reasonably necessary to match the requester with the records and may ask for clarification. An authorized agent may submit a request with evidence of authority; we may also seek identity confirmation from the individual as permitted by law. If an exception limits a request, we will explain the applicable reason where required.',
    ],
  },
  {
    id: 'sale',
    title: '8. Sale or sharing of personal information',
    paragraphs: [
      'SG2 does not sell personal information or share it for cross-context behavioral advertising, as those terms are defined by the CCPA. Service-provider processing and Merchant-directed disclosures are subject to the restrictions described above.',
      'During the twelve months preceding the effective date of this policy, SG2 did not sell personal information or share it for cross-context behavioral advertising.',
    ],
  },
  {
    id: 'updates',
    title: '9. Transfers, third-party services, and updates',
    paragraphs: [
      'Where information is transferred internationally, SG2 uses safeguards required by applicable law, including appropriate contractual protections where required. External services are governed by their own notices; review those notices when using them.',
      'SG2 will post policy changes with an updated effective date and provide additional notice of material changes where required by law. Existing website and SMS disclosures continue to apply to those activities; these application terms do not authorize sharing SMS opt-in information or bypassing consent requirements.',
    ],
  },
]
