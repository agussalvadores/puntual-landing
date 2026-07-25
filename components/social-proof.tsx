'use client'

import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '@/components/scroll-reveal'

const stats = [
  { value: '+10.000', label: 'Turnos procesados con éxito' },
  { value: '98%', label: 'Recordatorios entregados' },
  { value: '-40%', label: 'Ausencias a turnos' },
  { value: '4.9/5', label: 'Satisfacción de negocios' },
]

export function SocialProof() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Más de 10.000 turnos procesados con éxito
          </p>
        </ScrollReveal>

        <ScrollStagger className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <ScrollStaggerItem key={s.label} className="text-center">
              <div className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-pretty text-sm text-muted-foreground">{s.label}</div>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  )
}
