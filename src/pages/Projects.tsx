import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'LLM Clinical Simulation Platform',
      description:
        'AI-powered platform for nursing education at GVSU where faculty enter patient diagnostics as a prompt and the LLM generates complete clinical cases and patient charts for simulation labs. Co-ideated the product; led UX design, RBAC, and security architecture.',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
      tech: ['Next.js', 'OpenAI API', 'Anthropic API', 'Supabase', 'PostgreSQL', 'TypeScript'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Sana AI Chatbot',
      description:
        'AI assistant chatbot built in under 24 hours using Rasa. Won Special Appreciation Award at Vitwit Technologies. Demonstrated rapid LLM-adjacent prototyping and conversational AI design.',
      image:
        'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop',
      tech: ['Rasa', 'Python'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Tax Filing Assistant',
      description:
        'Conversational Rasa chatbot that analyses tax returns and recommends personalised tax-saving strategies. Built for a fintech client with a React + Node.js frontend.',
      image:
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop',
      tech: ['Rasa', 'Node.js', 'React', 'Python'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media Intelligence Platform',
      description:
        'Ingests public web and social data via boolean keyword queries, then runs NLP contextual sentiment analysis to classify content as positive, negative, or moderate. Backend led at Vitwit Technologies.',
      image:
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop',
      tech: ['Python', 'NLP', 'Sentiment Analysis', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'COVID-19 Prediction Model',
      description:
        'ML model predicting COVID-19 case trends integrated into a live public health dashboard at NewsClick.in during the pandemic. Paired with Kafka-based real-time streaming pipelines.',
      image:
        'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop',
      tech: ['Python', 'Machine Learning', 'Apache Kafka', 'ELK Stack'],
      github: '#',
      demo: 'https://viz.newsclick.in/covid19-cases-graphs-maps-india-world',
    },
    {
      title: 'Swecha Gonthuka (Telugu LLM)',
      description:
        'Contributed to one of the first open-source large language models for the Telugu language, spoken by 80M+ people. Community-driven project under the Free Software Movement of India.',
      image:
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop',
      tech: ['Python', 'LLM', 'Open Source', 'NLP'],
      github: '#',
      demo: '#',
    },
    {
      title: 'PUFchain',
      description:
        'Blockchain-based IoHT authentication system using Physically Unclonable Functions (PUFs) and Zero-Knowledge Proofs (ZKPs). Published research under Dr. Samah Mansour at GVSU.',
      image:
        'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format&fit=crop',
      tech: ['Python', 'Blockchain', 'IoT Security', 'Distributed Systems'],
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my expertise in building scalable
            applications and solving real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.demo !== '#' ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium flex-1 justify-center cursor-not-allowed">
                      <ExternalLink className="w-4 h-4" />
                      Private Project
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
