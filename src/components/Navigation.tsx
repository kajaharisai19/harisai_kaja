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
    { name: 'Certifications', hash: '#certifications' },
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
      setScrolled(window.scrollY > 20)

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
          ? 'glass-white shadow-xl'
          : 'glass-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => {
              navigate('/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-2xl font-bold text-white"
          >
            Hari<span className="text-blue-400">Dev</span>
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const sectionId = item.hash.substring(1)
              const isActive = activeSection === sectionId

              return (
                <button
                  key={item.hash}
                  onClick={() => scrollToSection(item.hash)}
                  className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                    isActive
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </button>
              )
            })}

            <button
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 px-5 py-2 ml-4 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2 glass-white rounded-b-2xl shadow-xl mt-2">
            {navItems.map((item) => {
              const sectionId = item.hash.substring(1)
              const isActive = activeSection === sectionId

              return (
                <button
                  key={item.hash}
                  onClick={() => scrollToSection(item.hash)}
                  className={`block w-full text-left px-4 py-3 mx-2 transition-all font-medium rounded-xl ${
                    isActive
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
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
              className="flex items-center justify-center gap-2 w-11/12 mx-auto px-4 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-xl transition-colors font-medium shadow-lg mt-2"
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