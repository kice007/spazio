import { useState } from 'react'
import Nav from './components/Nav'
import MenuOverlay from './components/MenuOverlay'
import BackToTop from './components/BackToTop'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Process from './sections/Process'
import Testimonials from './sections/Testimonials'
import Gallery from './sections/Gallery'
import Blog from './sections/Blog'
import Cta from './sections/Cta'
import Faq from './sections/Faq'
import Footer from './sections/Footer'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="relative overflow-x-clip">
      <Nav onOpenMenu={() => setMenuOpen(true)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <BackToTop />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Gallery />
        <Blog />
        <Cta />
        <Faq />
        <Footer />
      </main>
    </div>
  )
}
