import { Menu, X, LogIn } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { name: 'About', hash: '#about' },
    { name: 'Experience', hash: '#experience' },
    { name: 'Projects', hash: '#projects' },
    { name: 'Skills', hash: '#skills' },
    { name: 'Contact', hash: '#contact' },
  ]

  const scrollToSection = (hash: string) => {
    setIsOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map(item => item.hash.substring(1))
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
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => {
              navigate('/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className={`text-2xl font-bold transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <span className="text-blue-600">HSK</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.hash.substring(1)
              const isActive = activeSection === sectionId

              return (
                <button
                  key={item.hash}
                  onClick={() => scrollToSection(item.hash)}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-600 font-semibold'
                      : scrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              )
            })}

            <button
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white rounded-b-lg shadow-lg">
            {navItems.map((item) => {
              const sectionId = item.hash.substring(1)
              const isActive = activeSection === sectionId

              return (
                <button
                  key={item.hash}
                  onClick={() => scrollToSection(item.hash)}
                  className={`block w-full text-left px-4 py-2 transition-colors ${
                    isActive
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              )
            })}
            <button
              onClick={() => {
                setIsOpen(false)
                navigate('/login')
              }}
              className="flex items-center justify-center gap-2 w-full mx-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}