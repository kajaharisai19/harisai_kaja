import { Award, ExternalLink, Calendar } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Certifications() {
  const certifications = [
    {
      title: 'RCR - Applied Computer Sciences Graduate Students',
      issuer: 'CITI Program',
      date: 'Nov 2025',
      credentialId: '',
      link: 'https://www.citiprogram.org/verify/?w9a657a2f-2e07-4bc7-9dbb-ed4badaa5fe7-73156874',
      logo: 'https://about.citiprogram.org/wp-content/uploads/2016/12/Logo-flat.png',
      skills: ['Responsible Research'],
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google',
      date: 'Nov 2024',
      credentialId: '',
      link: 'https://www.skills.google/public_profiles/15ea166b-5380-4fa2-b663-d6d023c30ed8/badges/13085459',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png',
      skills: ['Generative AI', 'Python', 'Large Language Models'],
    },
    {
      title: 'Introduction to Data Engineering',
      issuer: 'DataCamp',
      date: 'Sep 2024',
      credentialId: '',
      link: 'https://www.datacamp.com/statement-of-accomplishment/course/7aa3a5324fc4e3d72c915771effbcd13da722f22?raw=1',
      logo: 'https://logo.clearbit.com/datacamp.com',
      skills: ['Intro to DataEngineering', 'ETL'],
    },
  ]

  const stats = [
    { value: `${certifications.length}+`, label: 'Certifications' },
    { value: '8+', label: 'Years Experience' },
    { value: '20+', label: 'Technologies' },
  ]

  return (
    <section id="certifications" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading tagline="Credentials" title="Certifications & Licenses" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={(index % 3) * 90}>
              <div className="group h-full rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-muted p-3">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    loading="lazy"
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://ui-avatars.com/api/?name=' +
                        cert.issuer.substring(0, 2) +
                        '&size=80&background=6366F1&color=fff'
                    }}
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary">{cert.issuer}</p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>

                  {cert.credentialId && (
                    <p className="font-mono text-xs text-muted-foreground">ID: {cert.credentialId}</p>
                  )}

                  <div className="flex flex-wrap gap-2 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      View Credential
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <div className="rounded-lg border border-border bg-gradient-to-br from-primary/10 via-background/50 to-accent/10 p-6 text-center backdrop-blur-sm">
                <Award className="mx-auto mb-3 h-10 w-10 text-primary" />
                <p className="mb-1 font-headline text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
