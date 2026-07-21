import { BookOpen, Cpu, HeartPulse, GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Research() {
  const publications = [
    {
      title: 'PUFchain: Secure IoHT Authentication via PUFs, Zero-Knowledge Proofs, and Blockchain',
      year: '2026',
      type: 'Peer-Reviewed',
      summary:
        'Research on lightweight distributed security for IoT healthcare edge devices. Combines Physically Unclonable Functions (PUFs) and Zero-Knowledge Proofs (ZKPs) with a blockchain-based authentication layer designed for resource-constrained nodes.',
    },
    {
      title: 'Lightweight Consensus Mechanisms for IoHT Edge Devices',
      year: '2025 / 2026',
      type: 'Peer-Reviewed',
      summary:
        'Proposes and evaluates a lightweight consensus protocol for IoT healthcare (IoHT) edge nodes. Based on hardware prototype research at GVSU, including the intra-edge node mobility component, and validated on physical devices.',
    },
  ]

  const areas = [
    {
      icon: Cpu,
      title: 'IoT & Edge Security',
      description:
        'Lightweight authentication and consensus for resource-constrained IoHT edge nodes. Focus on PUF-based identity, ZKP-based verification, and blockchain coordination without heavy compute overhead.',
    },
    {
      icon: HeartPulse,
      title: 'Healthcare + AI',
      description:
        'AI-assisted clinical workflows — from LLM-generated patient case simulation (Blue Nucleus, GVSU) to secure device authentication in connected medical infrastructure (PUFchain).',
    },
    {
      icon: GraduationCap,
      title: 'Education + AI',
      description:
        'Applied AI to nursing simulation and clinical education at GVSU — building tools that reduce faculty prep time and give students exposure to realistic EHR-style workflows before clinical placement.',
    },
    {
      icon: BookOpen,
      title: 'Open Source & Language AI',
      description:
        'Contributed to the Swecha Telugu LLM — one of the first open-source large language models for Telugu (80M+ speakers). Member of the Free Software Movement of India since 2014.',
    },
  ]

  return (
    <section id="research" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          tagline="Research & Publications"
          title="Research Work"
          subtitle="Peer-reviewed research on secure distributed systems for healthcare IoT, plus applied work at the intersection of AI, healthcare, and education."
        />

        {/* Publications */}
        <div className="mb-16">
          <Reveal>
            <h3 className="mb-6 flex items-center gap-2 font-headline text-2xl font-bold text-foreground">
              <BookOpen className="h-6 w-6 text-primary" />
              Publications
            </h3>
          </Reveal>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Reveal key={pub.title} delay={index * 90}>
                <div className="rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h4 className="text-lg font-bold leading-snug text-foreground">{pub.title}</h4>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {pub.year}
                      </span>
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                        {pub.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pub.summary}</p>
                  <p className="mt-3 text-xs font-medium text-muted-foreground/70">
                    Grand Valley State University — Graduate Research
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div>
          <Reveal>
            <h3 className="mb-6 font-headline text-2xl font-bold text-foreground">
              Research & Applied Areas
            </h3>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {areas.map((area, index) => {
              const Icon = area.icon
              return (
                <Reveal key={area.title} delay={(index % 2) * 90}>
                  <div className="group h-full rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-foreground">{area.title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
