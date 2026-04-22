import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Purpose from './components/Purpose'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full">
      <Navigation />
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Purpose />
      <Footer />
    </div>
  )
}

export default App
