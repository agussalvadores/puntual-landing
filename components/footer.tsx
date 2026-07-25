'use client'

import Image from 'next/image'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '@/components/scroll-reveal'

const groups = [
  {
    title: 'Producto',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Precios', href: '#precios' },
      { label: 'Demo', href: '#contacto' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  {
    title: 'Rubros',
    links: [
      { label: 'Peluquerías', href: '#features' },
      { label: 'Consultorios', href: '#features' },
      { label: 'Gimnasios', href: '#features' },
      { label: 'Wellness', href: '#features' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Contacto', href: '#contacto' },
      { label: 'Soporte', href: '#contacto' },
      { label: 'Términos', href: '#' },
      { label: 'Privacidad', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <ScrollStagger className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <ScrollStaggerItem>
            <div className="flex items-center gap-2">
              <Image src="/puntual-logo.svg" alt="Puntual" width={28} height={28} className="h-7 w-7" />
              <span className="font-heading text-lg font-extrabold text-foreground">Puntual</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Automatizá tus turnos por WhatsApp y tomá el control de tu agenda.
            </p>
          </ScrollStaggerItem>

          {groups.map((g) => (
            <ScrollStaggerItem key={g.title}>
              <h4 className="font-heading text-sm font-bold text-foreground">{g.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>

        <ScrollReveal className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Puntual. Todos los derechos reservados.
          </p>
          <p className="text-sm font-medium text-muted-foreground">
            Puntual es un producto de <span className="font-semibold text-foreground">1M Tech</span>
          </p>
        </ScrollReveal>
      </div>
    </footer>
  )
}
