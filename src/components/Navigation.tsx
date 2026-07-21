import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { name: 'About', hash: '#about' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Research', hash: '#research' },
  { name: 'Skills', hash: '#skills' },
  { name: 'Contact', hash: '#contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com/kajaharisai19', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kajaharisai/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kaja.harisai19@gmail.com', label: 'Email' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (hash: string) => {
    setIsOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navItems.map((item) => item.hash.substring(1))
      const scrollPosition = window.scrollY + 120
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const top = section.offsetTop
          if (scrollPosition >= top && scrollPosition < top + section.offsetHeight) {
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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'bg-background/60 shadow-sm' : 'bg-background/95'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: avatar + name */}
          <button
            onClick={() => {
              navigate('/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground shadow-glow-primary">
              HSK
            </span>
            <span className="font-headline text-lg font-bold text-foreground">
              Hari Sai <span className="text-primary">Kaja</span>
            </span>
          </button>

          {/* Center: nav links */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.hash.substring(1)
              return (
                <button
                  key={item.hash}
                  onClick={() => scrollToSection(item.hash)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {item.name}
                </button>
              )
            })}
          </nav>

          {/* Right: socials + resume + theme toggle + mobile menu */}
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 sm:flex">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>

            <a
              href="/HariSaiKaja_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>

            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted lg:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-2 space-y-1 rounded-lg border border-border bg-card/80 p-2 shadow-lg backdrop-blur-md lg:hidden">
            {navItems.map((item) => {
              const isActive = activeSection === item.hash.substring(1)
              return (
                <button
                  key={item.hash}
                  onClick={() => scrollToSection(item.hash)}
                  className={`block w-full rounded-md px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {item.name}
                </button>
              )
            })}
            <div className="flex items-center gap-2 px-2 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
              <a
                href="/HariSaiKaja_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
