import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Blue Nucleus — Clinical Simulation Platform',
      description:
        'AI-assisted simulation platform for the GVSU College of Nursing. Faculty enter patient diagnostics as a prompt; the system generates complete clinical cases and patient charts for student simulation labs. Owned full-stack architecture from data modeling to UI.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
      tech: ['Next.js', 'TypeScript', 'MCP', 'Anthropic API', 'shadcn/ui', 'Supabase', 'PostgreSQL'],
      role: 'Full-Stack Owner & AI Integration Lead',
      outcome: 'Piloted with GVSU College of Nursing; positive faculty and student feedback.',
      demo: null,
    },
    {
      title: 'SyncOffice — Enterprise Collaboration SaaS',
      description:
        'Led modernization and cloud-native rebuild of an enterprise SaaS platform used by healthcare providers, universities, and CA firms. Took a legacy PHP/React codebase to a production-grade Next.js + NestJS platform with modern security, Blue-Green deployments, and 60% cost reduction.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      tech: ['Next.js', 'NestJS', 'shadcn/ui', 'PostgreSQL', 'DynamoDB', 'AWS', 'Terraform', 'Docker', 'Kubernetes'],
      role: 'Architect & Tech Lead',
      outcome: 'Deployed overnight → minutes; ~60% cloud cost reduction; 12TB+ document migration.',
      demo: null,
    },
    {
      title: 'TallyCloud — Web Interface for Tally Accounting',
      description:
        'Designed and built TallyCloud to enable clients to access on-premise Tally accounting software through a browser-based interface. Ran requirements discovery with 3 CA firm clients managing multiple branches and 2,000+ end clients each.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop',
      tech: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'AWS'],
      role: 'Product Owner & Full-Stack Engineer',
      outcome: 'Delivered for 3 chartered accountant firms, each with 2,000+ end clients.',
      demo: null,
    },
    {
      title: 'NewsClick COVID-19 Data Intelligence Platform',
      description:
        'Architected and delivered a COVID-19 data intelligence platform used by national news media. Solved extraction of structured data from newspapers, social media, and online sources using KDD methodology. Also built a live election results dashboard with real-time vote counting and historical analysis.',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop',
      tech: ['Python', 'Apache Druid', 'PostgreSQL', 'Next.js', 'React Charts', 'MongoDB', 'GraphQL', 'Jenkins CI'],
      role: 'Data Engineer & Tech Lead',
      outcome: 'Used by national news media during the pandemic; election dashboard served real-time results.',
      demo: 'https://viz.newsclick.in/covid19-cases-graphs-maps-india-world',
    },
    {
      title: 'PUFchain — Secure IoHT Authentication',
      description:
        'Research project on a blockchain-based authentication system for IoT healthcare (IoHT) devices using Physically Unclonable Functions (PUFs) and Zero-Knowledge Proofs (ZKPs). Designed for resource-constrained edge nodes. Hardware-validated and published as a peer-reviewed paper (2026).',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format&fit=crop',
      tech: ['Python', 'Blockchain', 'ZKP', 'IoT Security', 'Distributed Systems', 'Hardware Prototyping'],
      role: 'Research Engineer (GVSU)',
      outcome: 'Published: PUFchain — Secure IoHT Authentication via PUFs, ZKPs, and Blockchain (2026).',
      demo: null,
    },
    {
      title: 'Swecha Telugu LLM',
      description:
        'Contributor to the Swecha Gonthuka project — one of the first open-source large language models for the Telugu language, spoken by 80M+ people. Developed under the Free Software Movement of India as a community-driven initiative.',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop',
      tech: ['Python', 'LLM', 'NLP', 'Open Source'],
      role: 'Contributor — Swecha / Free Software Movement of India',
      outcome: 'Community-use Telugu LLM; one of the first for the language.',
      demo: null,
    },
  ]

  return (
    <section id="projects" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Featured Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Production systems, applied research, and open source — each reflecting real ownership, architecture decisions, and measurable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col"
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
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">{project.role}</p>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed flex-1">{project.description}</p>

                {/* Outcome */}
                <p className="text-xs text-gray-500 italic mb-4 border-l-2 border-blue-200 pl-3">
                  {project.outcome}
                </p>

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

                {/* Action */}
                <div className="flex gap-3 mt-auto">
                  {project.demo ? (
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
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium flex-1 justify-center">
                      <ExternalLink className="w-4 h-4" />
                      Private / Research
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
