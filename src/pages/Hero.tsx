import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 pt-16">
      <div className="text-center text-white px-6">
        <div className="mb-6">
          <span className="text-blue-400 text-lg font-mono">Hello, I'm</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Hari Sai Kaja
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold">
          Full-Stack Software Engineer
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Building scalable SaaS applications, fintech platforms, and microservices with 5+ years of experience.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            About Me
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
        <button
          onClick={scrollToAbout}
          className="mt-16 text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6 mx-auto" />
        </button>
      </div>
    </section>
  )
}