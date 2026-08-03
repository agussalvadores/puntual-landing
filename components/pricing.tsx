'use client'

import { useState } from 'react'
import { Check, Info } from 'lucide-react'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '@/components/scroll-reveal'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { WHATSAPP_MESSAGES, whatsAppUrl } from '@/lib/whatsapp'

const LAUNCH_PROMO = '1er mes gratis + 6 meses al 50% off'
const WHATSAPP_COST_INFO =
  'Los recordatorios automáticos por WhatsApp tienen un costo adicional por mensaje.'

function LaunchDiscountBadge({ highlighted = false }: { highlighted?: boolean }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
        highlighted
          ? 'bg-accent text-accent-foreground shadow-sm shadow-accent/30'
          : 'bg-accent/15 text-accent ring-1 ring-inset ring-accent/35'
      }`}
    >
      Descuento por lanzamiento
    </span>
  )
}

function formatPromoPrice(usd: number) {
  return Number.isInteger(usd / 2) ? String(usd / 2) : (usd / 2).toFixed(2)
}

const tiers = [
  {
    name: 'Individual',
    priceUsd: 8,
    tagline: 'Para profesionales independientes',
    features: [
      'Turnos ilimitados',
      '1 profesional',
      '1 sucursal',
      'Agenda online con reservas 24/7',
      'Bloqueo de agenda y excepciones de horario',
      'Gestión de clientes (CRM)',
      'Perfil del profesional',
      'Configuración de servicios y horarios',
      'Cobro de servicios y señas con Mercado Pago',
      { text: 'Recordatorios automáticos por WhatsApp', info: WHATSAPP_COST_INFO },
    ],
    cta: 'Comenzar prueba gratis',
    whatsAppMessage: WHATSAPP_MESSAGES.individual,
  },
  {
    name: 'Equipo',
    priceUsd: 30,
    tagline: 'Para centros con equipo',
    features: [
      'Todo lo del plan Individual',
      'Hasta 5 profesionales',
      '1 sucursal',
      'Acceso individual por profesional',
    ],
    cta: 'Comenzar prueba gratis',
    highlighted: true,
    whatsAppMessage: WHATSAPP_MESSAGES.equipo,
  },
  {
    name: 'Estudio',
    priceUsd: 60,
    tagline: 'Para estudios con varias sedes',
    features: [
      'Todo lo del plan Equipo',
      'Hasta 15 profesionales',
      'Hasta 2 sucursales',
    ],
    cta: 'Comenzar prueba gratis',
    whatsAppMessage: WHATSAPP_MESSAGES.estudio,
  },
  {
    name: 'Cadena',
    priceUsd: null,
    tagline: 'Para cadenas y necesidades específicas',
    features: [
      'Todo lo del plan Estudio',
      'Profesionales y sucursales ilimitados',
      'Adaptaciones a medida',
      'Soporte prioritario',
    ],
    cta: 'Hablar con ventas',
    whatsAppMessage: WHATSAPP_MESSAGES.cadena,
  },
]

type FeatureItem = string | { text: string; info?: string }

function FeatureCheck({
  feature,
  variant = 'default',
}: {
  feature: FeatureItem
  variant?: 'default' | 'highlighted'
}) {
  const [infoOpen, setInfoOpen] = useState(false)
  const text = typeof feature === 'string' ? feature : feature.text
  const info = typeof feature === 'string' ? undefined : feature.info
  const lastSpace = info ? text.lastIndexOf(' ') : -1
  const leadText = lastSpace > 0 ? text.slice(0, lastSpace) : text
  const tailText = lastSpace > 0 ? text.slice(lastSpace + 1) : null

  const infoButtonClass =
    variant === 'highlighted'
      ? 'text-primary-foreground/80 hover:bg-white/15 hover:text-primary-foreground'
      : 'text-muted-foreground hover:bg-muted hover:text-foreground'

  const tooltipClass =
    variant === 'highlighted'
      ? 'bg-white text-foreground'
      : 'border border-border bg-card text-foreground'

  return (
    <li
      className={`w-full flex items-start gap-2 text-[13px] leading-snug xl:text-sm${info ? ' relative z-10' : ''}`}
    >
      {info && infoOpen && (
        <>
          <button
            type="button"
            aria-label="Cerrar"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setInfoOpen(false)}
          />
          <p
            role="tooltip"
            className={`absolute right-0 bottom-full left-0 z-50 mb-2 rounded-lg px-3 py-2.5 text-[11px] leading-relaxed text-pretty shadow-lg ${tooltipClass}`}
          >
            {info}
          </p>
        </>
      )}
      <span
        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
          variant === 'highlighted' ? 'bg-white/20' : 'bg-accent/15 text-accent'
        }`}
      >
        <Check className="size-3" />
      </span>
      <span className={variant === 'highlighted' ? 'text-primary-foreground/90' : 'text-foreground'}>
        {tailText ? (
          <>
            {leadText}{' '}
            <span className="whitespace-nowrap">
              {tailText}
              <button
                type="button"
                aria-label="Más información sobre recordatorios por WhatsApp"
                aria-expanded={infoOpen}
                onClick={() => setInfoOpen((prev) => !prev)}
                className={`ml-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full align-[-2px] transition-colors ${infoButtonClass}`}
              >
                <Info className="size-3.5" strokeWidth={2.5} />
              </button>
            </span>
          </>
        ) : (
          text
        )}
      </span>
    </li>
  )
}

export function Pricing() {
  const freeWhatsAppUrl = whatsAppUrl(WHATSAPP_MESSAGES.free)

  return (
    <section id="precios" className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Planes <span className="text-primary">simples</span> y transparentes
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Elegí el plan que acompañe el ritmo de tu negocio. Cambialo cuando quieras.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
            <p className="text-pretty text-sm leading-relaxed text-foreground sm:text-base">
              <span className="font-semibold">¿Estás arrancando?</span> Usa nuestro plan gratuito,
              con hasta 50 turnos al mes, 1 profesional y 1 sucursal.
            </p>
            <a
              href={freeWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <WhatsAppIcon className="size-4" />
              Crear cuenta gratis
            </a>
          </div>
        </ScrollReveal>

        <ScrollStagger className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-stretch lg:gap-5">
          {tiers.map((tier) => (
            <ScrollStaggerItem key={tier.name} className="h-full">
              <div
                className={`relative flex h-full flex-col overflow-visible rounded-3xl border p-5 lg:p-6 ${
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

                {tier.priceUsd !== null ? (
                  <div className="mt-5 min-h-[5.5rem]">
                    <LaunchDiscountBadge highlighted={tier.highlighted} />
                    <div className="mt-2.5 flex flex-col gap-0.5">
                      <span
                        className={`text-base font-semibold line-through decoration-1 ${
                          tier.highlighted
                            ? 'text-primary-foreground/45'
                            : 'text-muted-foreground'
                        }`}
                      >
                        USD {tier.priceUsd}/mes
                      </span>
                      <span className="font-heading text-2xl font-extrabold lg:text-[1.65rem] xl:text-3xl">
                        USD {formatPromoPrice(tier.priceUsd)}
                        <span
                          className={`ml-0.5 text-sm font-semibold xl:text-base ${
                            tier.highlighted
                              ? 'text-primary-foreground/80'
                              : 'text-muted-foreground'
                          }`}
                        >
                          /mes
                        </span>
                      </span>
                    </div>
                    <p
                      className={`mt-2 text-xs font-medium leading-snug ${
                        tier.highlighted ? 'text-primary-foreground/90' : 'text-foreground'
                      }`}
                    >
                      {LAUNCH_PROMO}
                    </p>
                  </div>
                ) : (
                  <div className="mt-5 min-h-[5.5rem]">
                    <p
                      className={`text-sm font-medium leading-snug xl:text-base ${
                        tier.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
                      }`}
                    >
                      Precio a convenir según tu operación
                    </p>
                  </div>
                )}

                <a
                  href={whatsAppUrl(tier.whatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                    tier.highlighted
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  <WhatsAppIcon className="size-4" />
                  {tier.cta}
                </a>

                <ul
                  className={`relative overflow-visible mt-5 flex flex-1 flex-col gap-2 border-t pt-5 xl:gap-2.5 ${
                    tier.highlighted ? 'border-primary-foreground/20' : 'border-border'
                  }`}
                >
                  {tier.features.map((feature) => {
                    const key = typeof feature === 'string' ? feature : feature.text
                    return (
                      <FeatureCheck
                        key={key}
                        feature={feature}
                        variant={tier.highlighted ? 'highlighted' : 'default'}
                      />
                    )
                  })}
                </ul>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  )
}
