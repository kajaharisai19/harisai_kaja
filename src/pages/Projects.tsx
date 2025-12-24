import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'AI-Powered Fintech Application',
      description: 'Automated 80% of manual efforts in e-filing of income tax using AI and machine learning algorithms.',
      tech: ['Python', 'Machine Learning', 'Node.js', 'React'],
      github: '#',
      live: '#',
    },
    {
      title: 'Real-Time Covid-19 Dashboard',
      description: 'Built a real-time dashboard integrating multiple APIs with optimized data pipelines for rapid performance.',
      tech: ['Python', 'PostgreSQL', 'APIs', 'Data Visualization'],
      github: '#',
      live: '#',
    },
    {
      title: 'IoHT Authentication Protocol',
      description: 'Designed lightweight continuous authentication protocol for IoT/IoHT devices using blockchain technology.',
      tech: ['Blockchain', 'Security', 'Python', 'Algorithms'],
      github: '#',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-600 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-900 text-blue-400 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}