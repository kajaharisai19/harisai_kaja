import { ExternalLink, Lock } from 'lucide-react'
import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

type Category = 'AI / LLM' | 'Full-Stack' | 'Data' | 'Research'

interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  role: string
  outcome: string
  demo: string | null
  category: Category
}

const projects: Project[] = [
    {
      title: 'Blue Nucleus — Clinical Simulation Platform',
      description:
        'Took an AI-driven clinical-simulation platform from 0 to 1, architected end to end on Next.js + Supabase and piloted live with nursing faculty. Built an agentic AI layer with MCP and custom agents over Claude and Gemini, plus RAG, turning static clinical data into adaptive, real-time simulations.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
      tech: ['Next.js', 'TypeScript', 'MCP', 'Claude', 'Gemini', 'RAG', 'Supabase', 'PostgreSQL'],
      role: 'Full-Stack Owner & AI Integration Lead',
      outcome: 'Cut manual facilitation effort 40%; piloted live with GVSU nursing faculty.',
      demo: null,
      category: 'AI / LLM',
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
      category: 'Full-Stack',
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
      category: 'Full-Stack',
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
      category: 'Data',
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
      category: 'Research',
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
      category: 'AI / LLM',
    },
    {
      title: 'MathMentor AI — Adaptive Tutoring System',
      description:
        'A hybrid LLM-based adaptive tutoring system with knowledge tracing that personalizes math instruction to each learner, paired with critical AI-literacy training so students learn to use AI responsibly rather than blindly.',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop',
      tech: ['Python', 'LLM', 'Knowledge Tracing', 'RAG', 'Adaptive Learning'],
      role: 'Builder — Applied AI Project',
      outcome: 'Adaptive tutoring with knowledge tracing and AI-literacy training.',
      demo: null,
      category: 'AI / LLM',
    },
  ]

const tabs: ('All' | Category)[] = ['All', 'AI / LLM', 'Full-Stack', 'Data', 'Research']

export default function Projects() {
  const [active, setActive] = useState<'All' | Category>('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          tagline="Portfolio"
          title="Featured Work"
          subtitle="Production systems, applied research, and open source — each reflecting real ownership, architecture decisions, and measurable outcomes."
        />

        {/* Tabs */}
        <Reveal className="mb-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap justify-center gap-1 rounded-full border border-border bg-background/50 p-1 backdrop-blur-sm"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  active === tab
                    ? 'bg-primary text-primary-foreground shadow-glow-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 90}>
              <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full border border-border bg-background/80 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-1 text-lg font-bold text-foreground">{project.title}</h3>
                  <p className="mb-3 text-xs font-semibold text-primary">{project.role}</p>
                  <p className="mb-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <p className="mb-4 border-l-2 border-primary/40 pl-3 text-xs italic text-muted-foreground">
                    {project.outcome}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Live
                      </a>
                    ) : (
                      <div className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                        <Lock className="h-4 w-4" />
                        Private / Research
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
