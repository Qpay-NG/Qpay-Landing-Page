import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import AboutQpay from './components/AboutQpay'
import FAQs from './components/FAQS'
import AppShowcase from './components/AppShowcase'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CookiesPolicyPage from './components/CookiesPolicyPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import TermsOfUsePage from './components/TermsOfUsePage'
import FoundersPage from './components/FoundersPage'
import ContactModal from './components/ContactModal'
import { applyPageMetadata } from './utils/pageMetadata'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const isCookiesPolicyPage = pathname === '/cookies-policy'
  const isPrivacyPolicyPage = pathname === '/privacy-policy'
  const isTermsOfUsePage = pathname === '/terms-of-use'
  const isContactUsPage = pathname === '/contact-us'
  const isFoundersPage = pathname === '/founders'

  useEffect(() => {
    applyPageMetadata(pathname)
  }, [pathname])

  return (
    <div>
      {isCookiesPolicyPage ? (
        <CookiesPolicyPage />
      ) : isPrivacyPolicyPage ? (
        <PrivacyPolicyPage />
      ) : isTermsOfUsePage ? (
        <TermsOfUsePage />
      ) : isFoundersPage ? (
        <FoundersPage />
      ) : (
        <>
          <Hero />
          <AboutQpay />
          <Testimonials />
          <AppShowcase />
          <FAQs />
        </>
      )}
      <Footer />
      <ContactModal
        variant={isPrivacyPolicyPage ? 'privacy' : 'contact'}
        autoOpen={isContactUsPage}
      />
    </div>
  )
}

export default App
