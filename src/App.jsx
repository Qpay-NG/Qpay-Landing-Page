import './App.css'
import Hero from './components/Hero'
import AboutQpay from './components/AboutQpay'
import ComingSoonSection from './components/ComingSoonSection'
import FAQs from './components/FAQS'
import AppShowcase from './components/AppShowcase'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CookiesPolicyPage from './components/CookiesPolicyPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import FoundersPage from './components/FoundersPage'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const isCookiesPolicyPage = pathname === '/cookies-policy'
  const isPrivacyPolicyPage = pathname === '/privacy-policy'
  const isContactUsPage = pathname === '/contact-us'
  const isFoundersPage = pathname === '/founders'

  return (
    <div>
      {isCookiesPolicyPage ? (
        <CookiesPolicyPage />
      ) : isPrivacyPolicyPage ? (
        <PrivacyPolicyPage />
      ) : isFoundersPage ? (
        <FoundersPage />
      ) : (
        <>
          <Hero autoOpenContactModal={isContactUsPage} />
          <AboutQpay />
          <Testimonials />
          <AppShowcase />
          <ComingSoonSection />
          <FAQs />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App
