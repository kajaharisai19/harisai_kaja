import { Mail, Linkedin, Github, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  const contactMethods = [
    { icon: Mail, title: 'Email', value: 'kaja.harisai19@gmail.com', href: 'mailto:kaja.harisai19@gmail.com' },
    { icon: Phone, title: 'Phone', value: '+1 616 228-3449', href: 'tel:+16162283449' },
    { icon: Linkedin, title: 'LinkedIn', value: '/in/kajaharisai', href: 'https://www.linkedin.com/in/kajaharisai/' },
    { icon: Github, title: 'GitHub', value: '@kajaharisai19', href: 'https://github.com/kajaharisai19' },
  ]

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          tagline="Contact"
          title="Get In Touch"
          subtitle="Open to full-stack, platform, and AI engineering roles. Let's talk about what you're building."
        />

        {/* Centered CTA block */}
        <Reveal className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:kaja.harisai19@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/kajaharisai/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-border px-6 py-3 font-medium text-foreground transition-colors duration-300 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:translate-x-0" />
            <Linkedin className="relative z-10 h-4 w-4" />
            <span className="relative z-10">Connect on LinkedIn</span>
          </a>
        </Reveal>

        {/* Contact methods */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, index) => (
            <Reveal key={method.title} delay={index * 90}>
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center rounded-lg border border-border bg-background/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">{method.title}</h3>
                <p className="break-all text-sm text-muted-foreground">{method.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
