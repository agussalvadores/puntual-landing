'use client'

import { industries } from '@/lib/industries'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '@/components/scroll-reveal'

export function Industries() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Hecho para{" "}
            <span className="text-primary">tu rubro</span>
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Adaptamos Puntual a la forma de trabajar de cada negocio local.
          </p>
        </ScrollReveal>

        <ScrollStagger className="mt-10 flex flex-wrap justify-center gap-2.5" stagger={0.04}>
          {industries.map((ind) => (
            <ScrollStaggerItem key={ind.label}>
              <span className="group inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-md hover:shadow-primary/10">
                <ind.icon className="size-4 shrink-0 text-primary transition-transform duration-200 group-hover:scale-110" />
                {ind.label}
              </span>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  )
}
