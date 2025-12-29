import { ArrowRight, Mail} from 'lucide-react'
import { FaGithub , FaLinkedinIn} from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const codeText = `const developer = {
  name: "Hari Sai Kaja",
  role: "Software Engineer",
  experience: "5+ years",
  skills: [
    "Python", "JavaScript",
    "AWS", "Docker"
  ]
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
    }, 30)

    return () => clearInterval(timer)
  }, [codeText])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 pt-16 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-sm font-mono">&lt;/&gt;</span>
              <span className="text-blue-400 text-sm">Software Engineer</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Building Scalable
                <br />
                Cloud-Native
                <br />
                <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                Results-driven Software Engineer with expertise in building scalable, secure, and
                high-performance cloud systems. Currently pursuing Master's in Applied Computer
                Science.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:gap-3"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 border-2 border-gray-700 hover:border-blue-600 text-white rounded-lg font-medium transition-all duration-200"
              >
                Get in Touch
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/kajaharisai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors"
              >
                <FaGithub className="w-5 h-5 text-gray-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/kajaharisai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5 text-gray-400" />
              </a>

              <a
                href="mailto:kaja.harisai19@gmail.com"
                className="p-3 bg-gray-800/50 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Right Content - Code Snippet */}
          <div className="relative">
            <div className="bg-linear-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-500 text-sm ml-4 font-mono">portfolio.js</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm md:text-base">
                <pre className="text-gray-300">
                  <code>
                    <span className="text-gray-500">// portfolio.js</span>
                    {'\n'}
                    <span className="text-cyan-400">{typedText}</span>
                    <span className="animate-pulse text-cyan-400">|</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
