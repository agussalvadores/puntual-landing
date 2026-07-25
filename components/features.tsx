'use client'

import {
  Bell,
  CreditCard,
  Clock,
  Building2,
  Users,
  BarChart3,
} from 'lucide-react'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '@/components/scroll-reveal'

const features = [
  {
    icon: Bell,
    title: 'Recordatorios automáticos por WhatsApp',
    desc: 'Confirmaciones y recordatorios que reducen las ausencias sin que muevas un dedo.',
  },
  {
    icon: CreditCard,
    title: 'Cobro de señas y pagos online',
    desc: 'Cobrá señas al reservar y pagos completos con Mercado Pago, de forma segura.',
  },
  {
    icon: Clock,
    title: 'Lista de espera inteligente',
    desc: 'Cuando se libera un turno, avisamos automáticamente a quienes esperan.',
  },
  {
    icon: Building2,
    title: 'Multi-sucursal y multi-profesional',
    desc: 'Gestioná todas tus sucursales y agendas de cada profesional en un solo lugar.',
  },
  {
    icon: Users,
    title: 'Gestión CRM de clientes',
    desc: 'Historial, datos de contacto y seguimiento de cada cliente en un solo lugar.',
  },
  {
    icon: BarChart3,
    title: 'Métricas de tu negocio',
    desc: 'Turnos, ausencias, ingresos y rendimiento de tu equipo en paneles claros.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-extrabold tracking-tight">
            Una plataforma pensada para{" "}
            <span className="text-primary">tu negocio</span>
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Automatizá lo repetitivo y dedicá tu tiempo a lo que importa:{" "}
            <span className="font-semibold text-primary">tus clientes</span>.
          </p>
        </ScrollReveal>

        <ScrollStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <ScrollStaggerItem key={f.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  )
}
