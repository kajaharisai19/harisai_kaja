import { CheckCircle, Code, Layers, Cloud, Database } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      title: 'AI-Enabled Systems',
      description:
        'Built LLM-integrated clinical simulation platforms using MCP, OpenAI, and Anthropic APIs. Contributed to the Swecha Telugu LLM and applied NLP/sentiment analysis in production fintech and media platforms.',
    },
    {
      title: 'Full-Stack Architecture & Technical Leadership',
      description:
        'Led end-to-end architecture of enterprise SaaS platforms, microservices backends, and cloud-native systems. Drove sprint planning, architecture reviews, and client-facing delivery as the primary technical voice.',
    },
    {
      title: 'Research & Open Source',
      description:
        'Published 2 peer-reviewed papers on IoHT security. Managing Member of the Python Software Foundation. Speaker at DebConf 2021 and 20+ national and international conferences.',
    },
  ]

  const expertise = [
    {
      title: 'AI / LLM Engineering',
      skills: 'MCP, OpenAI API, Anthropic API, LangChain, RAG, NLP, Rasa',
      icon: Code,
    },
    {
      title: 'Full-Stack Development',
      skills: 'React, Next.js, TypeScript, NestJS, FastAPI, Django, shadcn/ui',
      icon: Layers,
    },
    {
      title: 'Cloud & DevOps',
      skills: 'AWS, Terraform, Docker, Kubernetes, Helm, Lambda, CloudWatch',
      icon: Cloud,
    },
    {
      title: 'Data & Streaming',
      skills: 'Kafka, Apache Druid, Elasticsearch, PostgreSQL, DynamoDB, Redis, ETL',
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
          {/* Left - Monogram */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-2xl">
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
              Senior Software Engineer with 9+ years of experience building production systems across healthcare, fintech, SaaS, media, and IoT. I design and ship full-stack platforms, lead engineering teams, and integrate AI and LLMs into real products — not demos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently finishing an M.S. in Applied Computer Science (Cyber Security) at GVSU (GPA 3.89, Dean's Honor List) while building an AI-assisted clinical simulation platform for nursing education. I care about systems that are secure, scalable, and owned — not just assembled.
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
