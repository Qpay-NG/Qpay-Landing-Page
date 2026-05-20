import './App.css'
import Hero from './components/Hero'
import AboutQpay from './components/AboutQpay'
import ComingSoonSection from './components/ComingSoonSection'
import FAQs from './components/FAQS'
import AppShowcase from './components/AppShowcase'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CookiesPolicyPage from './components/CookiesPolicyPage'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const isCookiesPolicyPage = pathname === '/cookies-policy'

  return (
    <div>
      {isCookiesPolicyPage ? (
        <CookiesPolicyPage />
      ) : (
        <>
          <Hero />
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
