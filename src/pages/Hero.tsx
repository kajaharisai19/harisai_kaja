import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const codeText = `const engineer = {
  name: "Hari Sai Kaja",
  role: "Senior SWE | AI Systems | Tech Lead",
  experience: "9+ years",
  stack: [
    "Python", "TypeScript", "React",
    "AWS", "LLMs", "MCP"
  ],
  domains: [
    "Healthcare", "FinTech", "SaaS", "IoT"
  ],
  location: "Grand Rapids, MI"
};`

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= codeText.length) {
        setTypedText(codeText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 28)

    return () => clearInterval(timer)
  }, [])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
              <span className="text-blue-400 text-sm font-mono">&lt;/&gt;</span>
              <span className="text-white text-sm">Senior SWE · AI Systems · Technical Lead</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Building Systems
                <br />
                That Scale with
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AI at the Core
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Senior Software Engineer with 9+ years delivering production systems across healthcare, fintech, SaaS, and data engineering. I architect full-stack platforms, lead engineering teams, and integrate LLMs and AI into real products — from clinical simulation tools to enterprise collaboration SaaS.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:gap-3"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 glass text-white rounded-full font-medium transition-all duration-200 hover:bg-white/20 shadow-lg"
              >
                Get in Touch
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: 'https://github.com/kajaharisai19', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/kajaharisai/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:kaja.harisai19@gmail.com', label: 'Email' },
                { icon: FileText, href: '/HariSaiKaja_FullStack.pdf', label: 'Resume' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 glass hover:bg-white/20 rounded-full transition-all duration-200"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Code Snippet */}
          <div className="relative">
            <div className="glass-dark rounded-2xl shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-white/60 text-sm ml-4 font-mono">engineer.ts</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm md:text-base">
                <pre className="text-white/90">
                  <code>
                    <span className="text-white/50">// engineer.ts</span>
                    {'\n'}
                    <span className="text-cyan-300">{typedText}</span>
                    <span className="animate-pulse text-cyan-300">|</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
