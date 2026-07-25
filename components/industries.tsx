'use client'

import {
  Scissors,
  Stethoscope,
  Dumbbell,
  Sparkles,
  HeartPulse,
  Flower2,
  Hand,
  Sun,
  PenTool,
  PawPrint,
  Brain,
  Apple,
  PersonStanding,
  Camera,
  GraduationCap,
  Smile,
  Eye,
  Waves,
  Palette,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '@/components/scroll-reveal'

const industries: { icon: LucideIcon; label: string }[] = [
  { icon: Scissors, label: 'Peluquerías & Estética' },
  { icon: Sparkles, label: 'Barberías' },
  { icon: Stethoscope, label: 'Consultorios Médicos' },
  { icon: Smile, label: 'Odontología' },
  { icon: Dumbbell, label: 'Gimnasios & Wellness' },
  { icon: Flower2, label: 'Spa & Masajes' },
  { icon: Hand, label: 'Manicura & Uñas' },
  { icon: Sun, label: 'Depilación' },
  { icon: PenTool, label: 'Tatuajes & Piercing' },
  { icon: PawPrint, label: 'Veterinarias' },
  { icon: Brain, label: 'Psicología & Coaching' },
  { icon: Apple, label: 'Nutrición' },
  { icon: HeartPulse, label: 'Fisioterapia' },
  { icon: PersonStanding, label: 'Yoga & Pilates' },
  { icon: Camera, label: 'Estudios de fotografía' },
  { icon: GraduationCap, label: 'Clases & Talleres' },
  { icon: Eye, label: 'Ópticas' },
  { icon: Waves, label: 'Centros de natación' },
  { icon: Palette, label: 'Maquillaje profesional' },
]

export function Industries() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Hecho para tu rubro
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Adaptamos Puntual a la forma de trabajar de cada negocio local.
          </p>
        </ScrollReveal>

        <ScrollStagger className="mt-10 flex flex-wrap justify-center gap-2.5" stagger={0.04}>
          {industries.map((ind) => (
            <ScrollStaggerItem key={ind.label}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm">
                <ind.icon className="size-4 shrink-0 text-primary" />
                {ind.label}
              </span>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  )
}
