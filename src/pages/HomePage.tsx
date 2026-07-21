import Navigation from '../components/Navigation'
import ChatbotButton from '../components/ChatbotButton'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Research from './Research'
import Skills from './Skills'
import Certifications from './Certifications'
import Education from './Education'
import Contact from './Contact'

export default function Home() {
  return (
    <div className="bg-app min-h-screen text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 Hari Sai Kaja. Built with React &amp; Tailwind CSS.</p>
        </div>
      </footer>
      <ChatbotButton />
    </div>
  )
}
