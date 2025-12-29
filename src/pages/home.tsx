import Navigation from '../components/Navigation'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Hari Sai Kaja. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}