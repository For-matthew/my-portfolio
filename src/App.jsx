import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import OffClock from './components/OffClock.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="editor-bar">
        <div className="dots"><span></span><span></span><span></span></div>
        <div className="filename mono">portfolio<span>.jsx</span></div>
      </div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <OffClock />
      <Contact />
      <Footer />
    </>
  )
}
