import { GraduationCap, Award, Users } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Education() {
  const education = [
    {
      degree: 'M.S. Applied Computer Science',
      institution: 'Grand Valley State University',
      location: 'Grand Rapids, MI',
      gpa: '3.89 / 4.0',
      period: 'Aug 2024 – Apr 2026',
      note: "Badges: Cybersecurity, Databases, AI · Dean's Honor List",
    },
    {
      degree: 'B.E. Electronics & Communication Engineering',
      institution: 'Mahaveer Institute of Science & Technology',
      location: 'Hyderabad, India',
      gpa: '',
      period: 'Aug 2013 – May 2017',
      note: '',
    },
  ]

  const achievements = [
    'Winner — Consensus 2.0 Hackathon 2019 (Go smart-contract backend)',
    'Special Appreciation Award for the Sana platform (Vitwit)',
    "Dean's Honor List — Grand Valley State University",
    'Community speaker awards (Swecha)',
  ]

  const community = [
    {
      title: 'Python Software Foundation',
      role: 'Managing Member',
      period: 'Mar 2021 – Present',
      highlights: [
        'Managing Member of the Python Software Foundation; speaker at DebConf 2021.',
        'Validated upstream contributions to widely used pip packages.',
      ],
    },
    {
      title: 'Swecha, India',
      role: 'Executive Committee Member, Infra Maintainer & Community Organizer',
      period: 'Aug 2014 – Aug 2024',
      highlights: [
        'Co-architected Swecha Gonthuka, a large-scale indigenous Telugu voice-data platform: built early voice-data collection pipelines and produced audiobooks from Telugu novels.',
        'Scaled BigBlueButton to 10,000 concurrent users by building a live-streaming application during COVID, deployed across 10+ colleges.',
        'Operated 20+ community servers as infra/on-call engineer: Prometheus/Grafana observability, Terraform/Ansible IaC, self-managed on-prem Kubernetes, and DevSecOps in GitLab CI.',
        'Organized Rust India, DevOps, and JavaScript user groups; spoke at 30+ institutions and ran camps with 3,000+ participants.',
      ],
    },
  ]

  return (
    <section id="education" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading tagline="Background" title="Education & Community" />

        {/* Education */}
        <div className="mb-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="font-headline text-2xl font-bold text-foreground">Education</h3>
            </div>
          </Reveal>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Reveal key={edu.degree} delay={index * 90}>
                <div className="rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary">
                  <h4 className="mb-2 text-lg font-bold text-foreground">{edu.degree}</h4>
                  <p className="mb-2 font-semibold text-primary">{edu.institution}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span>{edu.location}</span>
                    {edu.gpa && (
                      <>
                        <span>•</span>
                        <span>GPA: {edu.gpa}</span>
                      </>
                    )}
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                  {edu.note && <p className="mt-2 text-sm font-medium text-primary">{edu.note}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="font-headline text-2xl font-bold text-foreground">Awards</h3>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm">
              <ul className="space-y-3">
                {achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start text-muted-foreground">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Community */}
        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="font-headline text-2xl font-bold text-foreground">
                Open Source & Community
              </h3>
            </div>
          </Reveal>
          <div className="space-y-6">
            {community.map((org, index) => (
              <Reveal key={org.title} delay={index * 90}>
                <div className="rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary">
                  <div className="mb-3 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-lg font-bold text-foreground">{org.title}</h4>
                    <span className="text-sm text-muted-foreground">{org.period}</span>
                  </div>
                  <p className="mb-3 font-semibold text-primary">{org.role}</p>
                  <ul className="space-y-2">
                    {org.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
