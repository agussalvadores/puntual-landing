'use client'

import { Check } from 'lucide-react'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '@/components/scroll-reveal'

const tiers = [
  {
    name: 'Emprendedor',
    price: 'Consultar',
    tagline: 'Para empezar a ordenar tu agenda',
    features: [
      'Agenda online',
      'Recordatorios por WhatsApp',
      '1 profesional',
      'Sitio de reservas con tu marca',
    ],
    cta: 'Comenzar gratis',
    highlighted: false,
  },
  {
    name: 'Profesional',
    price: 'Consultar',
    tagline: 'Para negocios en crecimiento',
    features: [
      'Todo lo de Emprendedor',
      'Multi-profesional',
      'Cobro de señas (Mercado Pago)',
      'Lista de espera inteligente',
      'Códigos de confirmación',
    ],
    cta: 'Comenzar prueba gratis',
    highlighted: true,
  },
  {
    name: 'Personalizado',
    price: 'A medida',
    tagline: 'Para cadenas y necesidades específicas',
    features: [
      'Todo lo de Profesional',
      'Multi-sucursal',
      'Adaptaciones a medida',
      'Soporte prioritario',
    ],
    cta: 'Hablar con ventas',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="precios" className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Planes <span className="text-primary">simples</span> y transparentes
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Elegí el plan que acompañe el ritmo de tu negocio. Cambialo cuando quieras.
          </p>
        </ScrollReveal>

        <ScrollStagger className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <ScrollStaggerItem key={tier.name}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  tier.highlighted
                    ? 'border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/20 lg:-translate-y-3'
                    : 'border-border bg-card text-card-foreground'
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    Más elegido
                  </span>
                )}
                <h3 className="text-lg font-bold">{tier.name}</h3>
                <p
                  className={`mt-1 text-sm ${
                    tier.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}
                >
                  {tier.tagline}
                </p>
                <div className="mt-5 font-heading text-3xl font-extrabold">{tier.price}</div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                          tier.highlighted ? 'bg-white/20' : 'bg-accent/15 text-accent'
                        }`}
                      >
                        <Check className="size-3" />
                      </span>
                      <span
                        className={
                          tier.highlighted ? 'text-primary-foreground/90' : 'text-foreground'
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`mt-8 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                    tier.highlighted
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  )
}
