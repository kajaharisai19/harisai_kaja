import Reveal from './Reveal'

interface SectionHeadingProps {
  tagline: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ tagline, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="tagline-glow inline-block cursor-default text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        {tagline}
      </span>
      <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </Reveal>
  )
}
