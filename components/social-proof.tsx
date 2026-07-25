'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { ScrollReveal } from '@/components/scroll-reveal'

const stats = [
  {
    end: 100000,
    prefix: '+',
    suffix: '',
    decimals: 0,
    label: 'Turnos procesados con éxito',
  },
  {
    end: 32,
    prefix: '-',
    suffix: '%',
    decimals: 0,
    label: 'Ausencias a turnos',
  },
  {
    end: 4.9,
    prefix: '',
    suffix: '/5',
    decimals: 1,
    label: 'Satisfacción de negocios',
  },
]

function formatNumber(value: number, decimals: number) {
  if (decimals > 0) {
    return value.toFixed(decimals).replace('.', ',')
  }
  return Math.round(value).toLocaleString('es-AR')
}

function AnimatedStat({
  end,
  prefix,
  suffix,
  decimals,
  label,
  duration = 1800,
}: {
  end: number
  prefix: string
  suffix: string
  decimals: number
  label: string
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(formatNumber(0, decimals))

  useEffect(() => {
    if (!inView) return

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(formatNumber(end * eased, decimals))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, end, decimals, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-pretty text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

export function SocialProof() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Más de 100.000 turnos procesados con éxito
          </p>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <AnimatedStat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
