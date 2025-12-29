import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'COVID-19 Data Visualization',
      description:
        'Real-time COVID-19 dashboard displaying cases, graphs, and maps for India and the world. Built data pipelines and interactive visualizations for tracking pandemic statistics.',
      image:
        'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop',
      tech: ['Python', 'React', 'Data Visualization', 'APIs'],
      github: '#',
      demo: 'https://viz.newsclick.in/covid19-cases-graphs-maps-india-world',
    },
    {
      title: 'SyncOffice',
      description:
        'Cloud solution for Tally ERP integration enabling real-time data synchronization and backup. Increased client productivity by 70% through automated workflows and seamless cloud infrastructure.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      tech: ['NestJS', 'Next.js', 'AWS', 'Cloud Integration'],
      github: '#',
      demo: 'https://syncoffice.com/',
    },
    {
      title: 'TaxFriday',
      description:
        'AI-based fintech application automating 80% of manual efforts in e-filing of income tax. Implemented OCR for document processing and intelligent form filling using machine learning.',
      image:
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop',
      tech: ['Python', 'React', 'OCR', 'Machine Learning'],
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
