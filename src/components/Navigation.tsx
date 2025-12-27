import { Menu, X, Github, Linkedin, Mail, LogIn } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', hash: '#home' },
    { name: 'About', hash: '#about' },
    { name: 'Skills', hash: '#skills' },
    { name: 'Education', hash: '#education' },
    { name: 'Experience', hash: '#experience' },
    { name: 'Projects', hash: '#projects' },
    { name: 'Contact', hash: '#contact' },
  ]

  const scrollToSection = (hash: string) => {
    setIsOpen(false)
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.hash.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // keeping your original deps

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('#home')}
            className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            HSK
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const sectionId = item.hash.substring(1)
              const isActive = activeSection === sectionId

              return (
                <button
                  key={item.hash}
                  onClick={() => scrollToSection(item.hash)}
                  className={`transition-colors duration-200 ${
                    isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              )
            })}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/kajaharisai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/kajaharisai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:kaja.harisai19@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => {
              const sectionId = item.hash.substring(1)
              const isActive = activeSection === sectionId

              return (
                <button
                  key={item.hash}
                  onClick={() => scrollToSection(item.hash)}
                  className={`block w-full text-left transition-colors ${
                    isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              )
            })}

            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-800">
              <div className="flex space-x-4">
                <a
                  href="https://github.com/kajaharisai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kajaharisai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="mailto:kaja.harisai19@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false)
                  navigate('/login')
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
