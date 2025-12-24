import './index.css'
import Navigation from './components/Navigation'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <footer className="bg-gray-950 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Hari Sai Kaja. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

export default App