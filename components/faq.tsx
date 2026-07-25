'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '@/components/scroll-reveal'

const faqs = [
  {
    q: '¿Necesito conocimientos técnicos?',
    a: 'No. Puntual está pensado para dueños de negocios, no para técnicos. La configuración inicial toma menos de 5 minutos y te acompañamos en todo el proceso.',
  },
  {
    q: '¿Puedo usar mi marca y colores?',
    a: 'Sí. Tu sitio de reservas se muestra con el nombre, logo y colores de tu negocio. Tus clientes ven tu marca, no la de Puntual.',
  },
  {
    q: '¿Funciona con Mercado Pago?',
    a: 'Sí. Podés cobrar señas al reservar y pagos completos a través de Mercado Pago de forma segura.',
  },
  {
    q: '¿Manda recordatorios por WhatsApp?',
    a: 'Sí. Enviamos confirmaciones y recordatorios automáticos por WhatsApp para reducir las ausencias sin que tengas que hacer nada.',
  },
  {
    q: '¿Puedo tener varias sucursales?',
    a: 'Sí. Con los planes que incluyen multi-sucursal podés gestionar todas tus ubicaciones y profesionales desde un mismo panel.',
  },
  {
    q: '¿Tengo que registrar mi tarjeta de crédito?',
    a: 'No. Podés empezar sin cargar ningún dato de pago. La prueba es gratis y sin tarjeta.',
  },
  {
    q: '¿Qué pasa si lo pruebo y no me gusta?',
    a: 'Sin problema. Podés darte de baja en cualquier momento, sin compromiso ni cargos ocultos. Si no es para vos, cerrás la cuenta y listo.',
  },
  {
    q: '¿Qué pasa si algo no se adapta a la operatoria de mi negocio?',
    a: 'Contanos cómo trabajás. Nuestro equipo de desarrollo se pone en contacto para adaptar Puntual a tu operatoria y hacerlo posible.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Todo lo que necesitás saber antes de empezar.
          </p>
        </ScrollReveal>

        <ScrollStagger className="mt-10 flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <ScrollStaggerItem key={f.q}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base font-bold text-card-foreground">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-muted-foreground transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  )}
                </div>
              </ScrollStaggerItem>
            )
          })}
        </ScrollStagger>
      </div>
    </section>
  )
}
