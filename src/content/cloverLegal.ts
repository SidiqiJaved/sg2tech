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
