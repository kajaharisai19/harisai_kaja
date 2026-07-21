import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react'
import { useEffect, useState } from 'react'

const NAME = 'Hari Sai Kaja'
const ROLES = [
  'Full-Stack Engineer',
  'Platform Engineer',
  'AI / LLM Engineer',
  'Technical Lead',
]

const socials = [
  { icon: Github, href: 'https://github.com/kajaharisai19', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kajaharisai/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kaja.harisai19@gmail.com', label: 'Email' },
  { icon: FileText, href: '/HariSaiKaja_Resume.pdf', label: 'Resume' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2600)
    return () => clearInterval(timer)
  }, [])

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <span
          className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for senior & lead roles
        </span>

        {/* Name — letter-by-letter sparkle entrance */}
        <h1 className="font-headline text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          <span className="sr-only">{NAME}</span>
          <span aria-hidden="true">
            {NAME.split('').map((char, i) => (
              <span
                key={i}
                className="inline-block animate-sparkle bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-transparent"
                style={{ animationDelay: `${0.3 + i * 0.05}s` }}
              >
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </span>
        </h1>

        {/* Animated role subtitle */}
        <div className="mt-5 h-8 overflow-hidden">
          <p
            key={roleIndex}
            className="animate-fade-up text-xl font-medium text-primary sm:text-2xl"
          >
            {ROLES[roleIndex]}
          </p>
        </div>

        <p
          className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: '1s' }}
        >
          8+ years building and operating production systems across full-stack development,
          platform engineering, distributed data, cloud-native infrastructure, and applied AI. I
          take products from 0 to 1 and integrate agentic AI and LLMs into real, shipped software.
        </p>

        <div
          className="mt-9 flex animate-fade-up flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: '1.15s' }}
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-6 py-3 font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get in Touch
          </button>
        </div>

        <div
          className="mt-10 flex animate-fade-up items-center gap-3"
          style={{ animationDelay: '1.3s' }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-glow-primary"
            >
              <s.icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
