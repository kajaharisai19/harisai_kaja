import { CheckCircle, Code, Layers, Cloud, Database } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  const highlights = [
    {
      title: 'Agentic AI & 0-to-1 Products',
      description:
        'Build agentic AI and LLM products from prototype to production using MCP, custom agents, and RAG over Claude and Gemini — most recently an AI-driven clinical simulation platform taken from 0 to 1 and piloted live with nursing faculty.',
    },
    {
      title: 'Full-Stack, Platform & Cloud-Native',
      description:
        'Own the full delivery lifecycle across TypeScript and Python stacks: SOLID design, automated testing, DevSecOps (SAST/DAST in CI/CD), and cloud-native deployment to AWS and Kubernetes with infrastructure as code and blue-green releases.',
    },
    {
      title: 'Research & Open-Source Leadership',
      description:
        'Co-authored 2 peer-reviewed papers on IoHT security. Managing Member of the Python Software Foundation, Swecha executive committee member, and speaker at DebConf 2021 and 30+ institutions.',
    },
  ]

  const expertise = [
    {
      title: 'AI / LLM Engineering',
      skills: 'Agentic AI, Claude, Gemini, MCP, custom agents, RAG, AI-assisted development',
      icon: Code,
    },
    {
      title: 'Full-Stack Development',
      skills: 'React, Next.js, TypeScript, NestJS, FastAPI, Flask, Django, Prisma',
      icon: Layers,
    },
    {
      title: 'Platform, Cloud & DevSecOps',
      skills: 'AWS, Azure, Docker, Kubernetes, Terraform, Ansible, GitHub Actions, SAST/DAST',
      icon: Cloud,
    },
    {
      title: 'Data & Streaming',
      skills: 'Apache Kafka, Apache Druid, PostgreSQL, Redis, Elasticsearch, MongoDB, ETL',
      icon: Database,
    },
  ]

  return (
    <section id="about" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading tagline="About" title="Who I Am" />

        {/* Intro */}
        <Reveal className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Software engineer with 8+ years building and operating production systems across
            full-stack development, platform engineering, distributed data, cloud-native
            infrastructure, and applied AI. Strong fundamentals in data structures, SOLID design,
            and clean architecture, applied across TypeScript and Python stacks.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Currently finishing an M.S. in Applied Computer Science at GVSU (GPA 3.89, Dean's Honor
            List) while building an AI-driven clinical simulation platform for nursing education.
            Recent focus on agentic AI and LLM integration — building 0-to-1 AI products from
            prototype to production. Active open-source leader and Managing Member of the Python
            Software Foundation.
          </p>
        </Reveal>

        {/* Highlights */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <div className="h-full rounded-lg border border-border bg-background/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Expertise cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 90}>
                <div className="group h-full rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.skills}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
