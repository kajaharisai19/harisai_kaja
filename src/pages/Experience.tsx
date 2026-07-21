import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Blue Nucleus / GVSU',
      period: 'Jan 2026 – Present',
      location: 'Grand Rapids, MI',
      highlights: [
        'Took an AI-driven clinical-simulation platform from 0 to 1, architecting it end to end on a Next.js and Supabase (PostgreSQL) stack and piloting it live with nursing faculty.',
        'Built an agentic AI layer with MCP and custom agents over Claude and Gemini, plus RAG, turning static clinical scenario data into adaptive, real-time simulations and cutting manual facilitation effort 40%.',
        'Designed clean, SOLID service boundaries and data models to give non-engineers a safe, self-serve way to extend platform functionality.',
        'Shipped continuously via a GitHub Actions CI/CD pipeline to Vercel and AWS, backed by integration tests and observability instrumentation.',
        'Triaged and resolved defects across the full stack — frontend, backend, and deployment layers — ahead of each release cycle.',
      ],
    },
    {
      role: 'Graduate Research Assistant',
      company: 'Grand Valley State University',
      period: 'Jan 2025 – Jan 2026',
      location: 'Grand Rapids, MI',
      highlights: [
        'Engineered a lightweight distributed consensus protocol for resource-constrained IoHT edge systems, designing efficient data structures for consensus state and co-authoring 2 peer-reviewed publications.',
        'Built event-driven pipelines across Layer 2 and Layer 3 networks on ESP32 and Raspberry Pi nodes using Kafka and pub/sub messaging, applying cryptography for secure authentication.',
        'Delivered an end-to-end Azure cloud-native data pipeline with Data Factory, Blob Storage, and RBAC-secured serverless functions.',
        'Automated the test harness and metrics collection in Python and Shell for reliable, repeatable benchmarking.',
        'Benchmarked real-hardware authentication latency across intra-edge mobility scenarios to validate system reliability.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Candy Technologies',
      period: 'Aug 2021 – Aug 2024',
      location: 'Hyderabad, India',
      highlights: [
        'Took SyncOffice from -1 to 0 to 1: stabilized and modernized an aging PHP/React monolith into a Next.js and NestJS (TypeScript) architecture serving 3 enterprise clients across 12TB, then built new capability on top as technical lead, applying SOLID principles and clean architecture.',
        'Migrated the data layer from MySQL to PostgreSQL, modeling schemas with Prisma ORM and indexes that sustained sub-second query performance under enterprise load.',
        'Provisioned cloud infrastructure as code with Terraform (EC2, ELB, S3, IAM, CloudWatch, CloudTrail, key rotation) and orchestrated containerized workloads on EKS, cutting infrastructure cost 60%.',
        'Achieved zero-downtime, progressive delivery with Dockerized blue-green pipelines on GitHub Actions and Jenkins, embedding DevSecOps (SAST/DAST) into the CI pipeline.',
        'Owned on-call incident response, runbooks, and blameless postmortems, reducing MTTR 25%, and mentored engineers through peer code reviews.',
        'Executed large-scale data migrations to Hetzner and DigitalOcean Spaces and onboarded 3 enterprise clients as client-facing technical lead.',
      ],
    },
    {
      role: 'Data Engineer',
      company: 'NewsClick',
      period: 'Oct 2019 – Aug 2021',
      location: 'New Delhi, India',
      highlights: [
        'Operated distributed, event-driven Kafka pipelines processing 100K+ records daily into election and COVID-19 dashboards, using ETL and KDD workflows.',
        'Built FastAPI and Flask REST APIs and React and Next.js dashboards (deployed on Vercel) consumed live by newsroom journalists under deadline pressure.',
        'Architected a COVID-19 analytics platform on Apache Druid for low-latency, multi-dimensional querying, tuning SQL to sub-second response under peak national election traffic.',
        'Automated data scraping and ingestion pipelines in Python (BeautifulSoup, Scrapy), using Redis for caching and MongoDB/Elasticsearch/Firebase for storage and search.',
        'Instrumented services with New Relic for observability and administered a bare-metal Hetzner Linux fleet (Nginx, SSL, Ansible, backups).',
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'Vitwit Technologies',
      period: 'Aug 2018 – Oct 2019',
      location: 'Hyderabad, India',
      highlights: [
        'Built a Go backend for smart contracts in partnership with Comdex (Cosmos ecosystem), and won the Consensus 2.0 Hackathon 2019.',
        'Shipped the TaxFriday AI chatbot end to end (React frontend, Python/Flask and Node.js backend), owning platform DevOps on AWS (EC2, IAM, CloudWatch, ELB), Docker, Ansible, and Jenkins.',
        'Built a high-throughput NLP sentiment-analysis platform processing 10k–50k records per minute on Elasticsearch, Kafka, Redis, and MongoDB.',
        'Embedded DevSecOps (SAST/DAST) into CI pipelines and instrumented services with Prometheus and Grafana for observability, covering on-call rotations.',
        'Led a 6-person team across Agile sprints (Jira), mentored 2 interns, and earned a Special Appreciation Award for the Sana platform.',
      ],
    },
    {
      role: 'Trainee Engineer',
      company: 'Jochebed Tech Solutions (JTS)',
      period: 'Nov 2017 – Aug 2018',
      location: 'Hyderabad, India',
      highlights: [
        'Built a full-stack Django/Flask inventory management system (MySQL, GitLab) with an Android client for real-time order tracking and automated sales reporting.',
        'Built an IoT pollution-monitoring dashboard from NodeMCU sensor telemetry, implementing edge data ingestion in Embedded C over MQTT.',
        'Translated stakeholder workflow requirements into shipped features, supporting debugging and maintenance in a small, cross-functional production team.',
      ],
    },
  ]

  return (
    <section id="experience" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading tagline="Career Path" title="Experience" />

        <div className="relative">
          {/* Connecting line: left on mobile, centered on desktop */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-10 lg:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`relative pl-12 lg:pl-0 ${
                    isLeft ? 'lg:pr-[calc(50%+2rem)]' : 'lg:pl-[calc(50%+2rem)]'
                  }`}
                >
                  {/* Glowing dot marker */}
                  <span className="absolute left-4 top-2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center lg:left-1/2">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-primary/40" />
                    <span className="h-3 w-3 rounded-full bg-primary shadow-glow-primary ring-4 ring-background" />
                  </span>

                  <Reveal>
                    <div className="rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary">
                      <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                          <p className="font-semibold text-primary">{exp.company}</p>
                        </div>
                        <div className="text-sm text-muted-foreground md:text-right">
                          <p className="font-medium text-foreground/80">{exp.period}</p>
                          <p>{exp.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
