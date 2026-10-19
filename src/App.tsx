import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { CustomSoftwarePage } from '@/pages/CustomSoftwarePage'
import { FinancialIntelligencePage } from '@/pages/FinancialIntelligencePage'
import { FranchiseManagementPage } from '@/pages/FranchiseManagementPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { WorkPage } from '@/pages/WorkPage'
import { PrivacyPolicyPage, TermsPage } from '@/pages/LegalPages'

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="solutions/financial-intelligence" element={<FinancialIntelligencePage />} />
        <Route path="solutions/franchise-management" element={<FranchiseManagementPage />} />
        <Route path="services/custom-software-development" element={<CustomSoftwarePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-and-conditions" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
