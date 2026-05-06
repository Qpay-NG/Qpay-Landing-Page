import './App.css'
import Hero from './components/Hero'
import AboutQpay from './components/AboutQpay'
import ComingSoonSection from './components/ComingSoonSection'
import FAQs from './components/FAQS'
import AppShowcase from './components/AppShowcase'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div>
      <Hero />
      <AboutQpay />
      <Testimonials />
      <AppShowcase />
      <ComingSoonSection />
      <FAQs />
    </div>
  )
}

export default App
