# Launch checklist: real assets and business details needed

The build contains **no invented company facts**. Everything below needs your input before production launch.

## 1. Facts to verify (blocking)

- [ ] **Capability status for every product claim.** Pages describe Financial Intelligence and Franchise Management capabilities in plain terms, but I could not verify what is shipped. For each, decide: available now / in development / planned, then add `StatusBadge`s (or edit copy) in `FinancialIntelligencePage.tsx` and `FranchiseManagementPage.tsx`. Currently only "future insights" is marked *Planned*, and the franchise workflow and royalty views are marked *Illustrative*.
- [ ] **Integrations.** The Financial Intelligence page lists Clover, Toast, Uber Eats and DoorDash "for context", with availability "confirmed per customer". Confirm which are actually supported, or remove the names.
- [ ] **FAQ answers** that make positioning statements: "not a POS replacement", "not an accounting system", "works alongside existing systems", "figures come from platform reports".
- [ ] **Franchise page:** royalty/invoicing support, and the "designed to sit alongside Financial Intelligence" claim.
- [ ] **Custom Software page:** the "you own the outcome / ownership agreed in writing" line must match your standard contracts.
- [ ] **Contact page:** "We will use the details you submit only to respond to your inquiry" must match your actual practice.

## 2. Company details to supply

- [x] Contact details added: hello@sg2tech.com and +1 (202) 468-1590 (footer, contact page, homepage CTA). **Mailbox delivery is not yet tested**: the Microsoft 365 mailbox is still being configured. Send a test message before launch. Postal address: not supplied, not shown.
- [x] Official logo applied from the supplied JPEG (`public/logo.png`, background removed, no redrawing). **A vector (SVG) master is still needed** for perfectly crisp rendering at all sizes and for a white/reversed variant on dark backgrounds (the footer uses an ivory chip as a stopgap).
- [ ] Open Graph share image (1200×630 PNG). Not included. Add `og:image` in `scripts/prerender.mjs` once available.
- [ ] Privacy policy (and terms, if wanted). The form should link to one before launch.
- [ ] Legal entity name confirmation ("SG2 Technologies, LLC" is used in the footer and structured data).
- [ ] Social profiles, if you want them linked (LinkedIn etc.).

## 3. Product assets

- [ ] Approved screenshots of Financial Intelligence (revenue overview, gross vs. net, payouts, location comparison).
- [ ] Approved screenshots of Franchise Management (location overview, inspection checklist, compliance, royalty, invoices).
- [ ] Replace illustrative `ProductFrame`s via the `screenshot` prop; alt text should describe what the screen shows.

## 4. Case studies

- [ ] **Halal Munchies:** written authorization to publish the name, logo, screenshots and any outcomes. Until then it is not mentioned anywhere on the site. The supplied dashboard screenshots are confidential references: they are not in the repository, `public/` or the build, and must stay out. A scan of `src`, `public`, `dist` and `index.html` for client names finds nothing.
- [ ] Verified outcomes only. If none exist, publish an anonymous write-up with no metrics (`anonymous: true`).

## 5. Technical launch tasks

- [ ] Create the Netlify site and deploy to a preview URL.
- [ ] Set `VITE_SITE_URL` (production origin) and `VITE_FORMS_ENABLED=true`.
- [ ] Submit a test form; confirm it appears in Netlify → Forms; configure email notifications.
- [ ] Decide on redirects from legacy URLs (`/services/`, `/small-business`, `/contact/`).
- [ ] Run Lighthouse and a screen-reader pass on the deployed preview.
- [ ] Verify CSP in the browser console on the deployed site.
- [ ] Submit sitemap to Google Search Console after cutover.
- [ ] **Get explicit approval before pointing the production domain at the new site.**

## 6. Content decisions for later

- Dedicated "Integrations & Automation" page (currently a section on the Custom Software page, linked from the nav as `#integrations`).
- Healthcare / clinic products: intentionally not mentioned anywhere. When they exist, add a product page and a nav entry.

## 7. Added in the executive review (needs human verification)

- [x] **Uber Eats / DoorDash:** owner confirmed financial reporting is available today, so the diagram's "Available now" badge stands. Still worth listing which report types are ingested.
- [ ] **Clover:** confirm the SFTP/CSV ingestion description and that the direct API is planned, not in development.
- [ ] **Toast and Grubhub** were removed from the site (availability unverified). Re-add only when confirmed.
- [ ] **Payout language:** copy now says "payout visibility" and compares reported sales with platform payout figures. No bank connectivity or bank reconciliation is claimed. Confirm that matches the product, or say if bank deposit comparison exists.
- [ ] **Security & data protection** copy is philosophy only. No controls, certifications, encryption, backup or monitoring claims are made. Supply verified specifics from engineering if you want them published.
- [ ] **Technology section** describes ingest → structure → check for gaps/mismatches → report. Confirm the "check for gaps and mismatches" step exists.
- [ ] **Franchise Management** capability list (inspections, checklists, training, follow-ups, invoicing, royalty workflows) is shown with illustrative visuals. Confirm each is shipped, and mark any that are not.
- [ ] **Staging:** set `VITE_NOINDEX=true` on the staging site so it is not indexed, and leave it unset on production. Set `VITE_FORMS_ENABLED=true` and confirm the `contact` form appears in Netlify Forms, then route notifications to the shared mailbox.
- [ ] Open Graph image, privacy policy, Lighthouse run and screen-reader pass are still outstanding.

## 8. AI positioning update (needs human verification)

- [ ] Copy now states, without hedging, that reporting, reconciliation (reported sales vs. platform payouts) and discrepancy identification are part of the existing platform. Confirm those are shipped and how they work.
- [ ] No page says AI performs current reconciliation. If any current workflow *is* AI-based, tell me and I will say so.
- [ ] AI capabilities (natural-language questions, generated summaries, anomaly detection, forecasting) are described as "being introduced" and carry a **Planned** badge. If some are further along, switch the badge to **In development**.
- [ ] "Reconciliation" is used for sales vs. platform payouts only. No bank connectivity or bank-deposit reconciliation is claimed.

### Owner decisions recorded
- Reconciliation and discrepancy identification are existing capabilities in customer reporting (compare reported figures, investigate differences, establish reconciled results). **The split between software-driven processing and manual investigation is pending confirmation by the engineering lead**, so no copy claims fully automated reconciliation.
- No operational AI workflow is confirmed. Copy never implies AI performs today's reconciliation.
- AI items stay **Planned** until engineering confirms which are in development.
- Reconciliation messaging covers reported sales, platform fees and platform payouts only. No bank-deposit matching or bank connectivity.
- Corporate positioning stays "Software Products & Engineering".

### Positioning decision: corporate site, not a release log
- The site presents SG2's solution capabilities and what SG2 can build, not a changelog. Per-capability "Planned" / "Illustrative" badges were removed from Franchise Management. The "Illustrative data" label stays on fictional visuals only. The one remaining "Planned" badge marks the AI capabilities, as agreed.
- Franchise Management copy now covers oversight, inspections and checklists, training, employee management workflows, invoicing, royalties and reporting, with a "Configure / Build" section so nothing promises every feature as standard software.
- Security copy states a security-focused approach to architecture and data protection. **Add verified safeguards when the engineering lead supplies them.** No certifications, encryption standards or compliance claims appear anywhere.

### AI-Enabled Financial Intelligence (owner decision)
- Product descriptor is now "AI-Enabled Financial Intelligence" on the homepage and Financial Intelligence page (title, meta, hero, product section, FAQ). Company identity stays "Software Products & Engineering".
- Natural-language financial analysis and AI anomaly detection are shown as capabilities introduced through the next rollout phase and included in customer implementations by agreed requirements and scope. They are **not** claimed as enabled for every customer or generally available today.
- The broad "Planned" badges on AI were removed. Copy never claims autonomous AI reconciliation or guaranteed anomaly-detection accuracy.
- The AI visuals (`AskYourDataMock`, `AnomalyInsightsMock`) use invented questions and figures and carry the "Illustrative data" label plus a caption saying they are not live product screenshots.
- Earlier "AI-generated summaries" and "revenue forecasting" were removed because only natural-language analysis and anomaly detection have been confirmed. Re-add if Adil confirms them.
- [ ] Ask Adil to review the example question, answer and anomaly wording so the illustrative experience reflects how the feature really behaves.
