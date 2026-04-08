import { CheckCircle, Code, Palette, Cloud, Database } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      title: 'AI & LLM Integration',
      description: 'Integrating OpenAI and Anthropic APIs into production platforms across healthcare and fintech',
    },
    {
      title: 'Team Leadership & Architecture',
      description: 'Led teams of 5+ engineers, designed end-to-end system architecture, and managed client relationships',
    },
    {
      title: 'Open Source & Community',
      description: 'Contributed to Telugu LLM, PyConf organiser, DebConf speaker, tech speaker at 20+ conferences',
    },
  ]

  const expertise = [
    {
      title: 'AI / ML Engineering',
      skills: 'LangChain, OpenAI API, Anthropic API, Rasa, NLP, LLMs, Machine Learning',
      icon: Code,
    },
    {
      title: 'Full Stack Development',
      skills: 'React, Next.js, TypeScript, NestJS, Node.js, Django, FastAPI',
      icon: Palette,
    },
    {
      title: 'Cloud & DevOps',
      skills: 'AWS, Terraform, Docker, Kubernetes, CI/CD, Prometheus, Grafana',
      icon: Cloud,
    },
    {
      title: 'Data Engineering',
      skills: 'Apache Kafka, ELK Stack, PostgreSQL, DynamoDB, Redis, ETL Pipelines',
      icon: Database,
    },
  ]

  return (
    <section id="about" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">About</span>
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
              Senior Software Engineer with 9+ years of experience building production-grade systems across healthcare, fintech, SaaS, and data engineering. Passionate about working at the intersection of AI and human experience — from integrating LLMs into production platforms to leading engineering teams.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently pursuing a Master's in Applied Computer Science (Cyber Security) at GVSU with a 3.89 GPA, and contributing to open-source communities including a Telugu language LLM and the Debian global conference.
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
