import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Extra delay before the entrance animation, in ms. */
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'span' | 'li'
}

/**
 * Fades + slides its children up (opacity 0→1, translateY 20px→0) the first
 * time it scrolls into view. Used for headings, subtext, and CTAs.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Tag = as as 'div'

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
