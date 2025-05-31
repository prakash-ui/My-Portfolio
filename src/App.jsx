import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

export default function App() {
  return (
    <Router>
      <main className="font-sans">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </Router>
  )
}