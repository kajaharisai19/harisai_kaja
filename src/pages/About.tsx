import { CheckCircle, Code, Palette, Cloud, Database } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      title: 'Cloud-Native Solutions',
      description: 'Expert in building scalable, secure cloud systems on AWS',
    },
    {
      title: 'Team Leadership',
      description: 'Experience leading backend teams and R&D initiatives',
    },
    {
      title: 'Problem Solver',
      description: 'Translating complex research into production-grade applications',
    },
  ]

  const expertise = [
    {
      title: 'Backend Development',
      skills: 'Python, Node.js, NestJS, Django, Flask',
      icon: Code,
    },
    {
      title: 'Frontend Development',
      skills: 'React, Next.js, TypeScript, Vue.js',
      icon: Palette,
    },
    {
      title: 'DevOps & Cloud',
      skills: 'AWS, Docker, Kubernetes, CI/CD, Terraform',
      icon: Cloud,
    },
    {
      title: 'Data Engineering',
      skills: 'ETL Pipelines, PostgreSQL, MongoDB, Pandas',
      icon: Database,
    },
  ]

  return (
    <section id="about" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">About</span>
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Creating{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Innovative Solutions
            </span>
          </h2> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image with Fallback */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <span className="text-white text-8xl font-bold block mb-2">HSK</span>
                <span className="text-white/80 text-xl">Hari Sai Kaja</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Results-driven Software Engineer with a strong background in building scalable, secure, and high-performance cloud systems. Adept at translating complex design and research concepts into production-grade applications that enhance efficiency and user experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently pursuing Master's in Applied Computer Science, I bring a blend of technical depth, problem-solving skills, and collaborative mindset focused on developing innovative, cloud-native solutions.
            </p>

            <div className="space-y-4 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.skills}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}