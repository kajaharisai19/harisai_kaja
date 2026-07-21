import {
  SiPython, SiTypescript, SiJavascript, SiGo, SiGnubash, SiCplusplus, SiC,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiFastapi, SiFlask, SiDjango, SiNestjs, SiNodedotjs, SiPrisma, SiTypeorm,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiElasticsearch, SiApachedruid, SiSupabase, SiFirebase,
  SiApachekafka, SiScrapy,
  SiAmazonwebservices, SiDigitalocean, SiHetzner, SiVercel,
  SiDocker, SiKubernetes, SiTerraform, SiAnsible, SiGithubactions, SiGitlab, SiJenkins,
  SiPrometheus, SiGrafana, SiDatadog, SiNewrelic,
  SiClaude, SiGooglegemini, SiPandas,
  SiPytest, SiJira,
} from 'react-icons/si'
import {
  Code2, MonitorSmartphone, Server, Database, Workflow, Cloud, Boxes, ShieldCheck, Activity,
  Sparkles, FlaskConical, Accessibility, Webhook, Search, GitBranch, Fingerprint, KeyRound, Lock,
  Siren, Bot, Cable, TreePine, TestTube, RefreshCw, GitPullRequest, Building2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { IconType } from 'react-icons'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

type IconComp = LucideIcon | IconType

interface SkillMeta {
  icon: IconComp
  color?: string
}

// Brand logo + brand color per skill. `color` is omitted for logos that are
// black/near-black so they inherit the theme color and stay visible in dark mode.
const SKILL_META: Record<string, SkillMeta> = {
  // Languages
  Python: { icon: SiPython, color: '#3776AB' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  Golang: { icon: SiGo, color: '#00ADD8' },
  SQL: { icon: Database },
  Bash: { icon: SiGnubash, color: '#4EAA25' },
  'C++': { icon: SiCplusplus, color: '#00599C' },
  'Embedded C': { icon: SiC, color: '#659AD2' },
  // Frontend
  React: { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'Responsive UI': { icon: MonitorSmartphone },
  'Accessible UI': { icon: Accessibility },
  // Backend & APIs
  FastAPI: { icon: SiFastapi, color: '#009688' },
  Flask: { icon: SiFlask },
  Django: { icon: SiDjango, color: '#44B78B' },
  NestJS: { icon: SiNestjs, color: '#E0234E' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  'REST APIs': { icon: Webhook },
  Microservices: { icon: Boxes },
  Prisma: { icon: SiPrisma },
  TypeORM: { icon: SiTypeorm },
  // Databases & Caching
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  MySQL: { icon: SiMysql, color: '#4479A1' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  Redis: { icon: SiRedis, color: '#FF4438' },
  Elasticsearch: { icon: SiElasticsearch, color: '#00A9E0' },
  'Apache Druid': { icon: SiApachedruid },
  Supabase: { icon: SiSupabase, color: '#3FCF8E' },
  Firebase: { icon: SiFirebase, color: '#FFCA28' },
  // Streaming & Data
  'Apache Kafka': { icon: SiApachekafka },
  ETL: { icon: Workflow },
  KDD: { icon: Search },
  BeautifulSoup: { icon: Code2 },
  Scrapy: { icon: SiScrapy, color: '#60A839' },
  // Cloud
  AWS: { icon: SiAmazonwebservices, color: '#FF9900' },
  Azure: { icon: Cloud, color: '#0089D6' },
  DigitalOcean: { icon: SiDigitalocean, color: '#0080FF' },
  Hetzner: { icon: SiHetzner, color: '#D50C2D' },
  Vercel: { icon: SiVercel },
  // Platform & IaC
  Docker: { icon: SiDocker, color: '#2496ED' },
  Kubernetes: { icon: SiKubernetes, color: '#326CE5' },
  Terraform: { icon: SiTerraform, color: '#844FBA' },
  Ansible: { icon: SiAnsible, color: '#EE0000' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
  'GitLab CI': { icon: SiGitlab, color: '#FC6D26' },
  Jenkins: { icon: SiJenkins, color: '#D24939' },
  'Blue-Green': { icon: GitBranch },
  // Security
  DevSecOps: { icon: ShieldCheck },
  'SAST / DAST': { icon: ShieldCheck },
  IAM: { icon: Fingerprint },
  'Secrets Mgmt': { icon: KeyRound },
  'Key Rotation': { icon: KeyRound },
  'SSL/TLS': { icon: Lock },
  WAF: { icon: ShieldCheck },
  Cryptography: { icon: Lock },
  // Observability & Reliability
  Prometheus: { icon: SiPrometheus, color: '#E6522C' },
  Grafana: { icon: SiGrafana, color: '#F46800' },
  Datadog: { icon: SiDatadog, color: '#632CA6' },
  'New Relic': { icon: SiNewrelic, color: '#00AC69' },
  SRE: { icon: Activity },
  'Incident Response': { icon: Siren },
  // AI & ML
  'Agentic AI': { icon: Bot },
  Claude: { icon: SiClaude, color: '#D97757' },
  Gemini: { icon: SiGooglegemini, color: '#886FBF' },
  MCP: { icon: Cable },
  RAG: { icon: Search },
  'Custom Agents': { icon: Bot },
  pandas: { icon: SiPandas },
  'Random Forest': { icon: TreePine },
  // Testing & Practices
  pytest: { icon: SiPytest, color: '#0A9EDC' },
  Playwright: { icon: TestTube },
  'Agile / Scrum': { icon: RefreshCw },
  Jira: { icon: SiJira, color: '#0052CC' },
  'Code Review': { icon: GitPullRequest },
  Architecture: { icon: Building2 },
}

interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  { title: 'Languages', icon: Code2, skills: ['Python', 'TypeScript', 'JavaScript', 'Golang', 'SQL', 'Bash', 'C++', 'Embedded C'] },
  { title: 'Frontend', icon: MonitorSmartphone, skills: ['React', 'Next.js', 'Tailwind CSS', 'Responsive UI', 'Accessible UI'] },
  { title: 'Backend & APIs', icon: Server, skills: ['FastAPI', 'Flask', 'Django', 'NestJS', 'Node.js', 'REST APIs', 'Microservices', 'Prisma', 'TypeORM'] },
  { title: 'Databases & Caching', icon: Database, skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Apache Druid', 'Supabase', 'Firebase'] },
  { title: 'Streaming & Data', icon: Workflow, skills: ['Apache Kafka', 'ETL', 'KDD', 'BeautifulSoup', 'Scrapy'] },
  { title: 'Cloud', icon: Cloud, skills: ['AWS', 'Azure', 'DigitalOcean', 'Hetzner', 'Vercel'] },
  { title: 'Platform & IaC', icon: Boxes, skills: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'Blue-Green'] },
  { title: 'Security', icon: ShieldCheck, skills: ['DevSecOps', 'SAST / DAST', 'IAM', 'Secrets Mgmt', 'Key Rotation', 'SSL/TLS', 'WAF', 'Cryptography'] },
  { title: 'Observability & Reliability', icon: Activity, skills: ['Prometheus', 'Grafana', 'Datadog', 'New Relic', 'SRE', 'Incident Response'] },
  { title: 'AI & ML', icon: Sparkles, skills: ['Agentic AI', 'Claude', 'Gemini', 'MCP', 'RAG', 'Custom Agents', 'pandas', 'Random Forest'] },
  { title: 'Testing & Practices', icon: FlaskConical, skills: ['pytest', 'Playwright', 'Agile / Scrum', 'Jira', 'Code Review', 'Architecture'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          tagline="Technical Stack"
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to build, ship, and operate production systems end to end."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const CatIcon = category.icon
            return (
              <Reveal key={category.title} delay={(index % 3) * 90}>
                <div className="h-full rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CatIcon className="h-5 w-5" />
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const meta = SKILL_META[skill] ?? { icon: category.icon }
                      const Icon = meta.icon
                      return (
                        <span
                          key={skill}
                          className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                        >
                          <Icon
                            className="h-4 w-4 shrink-0"
                            style={meta.color ? { color: meta.color } : undefined}
                          />
                          {skill}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
