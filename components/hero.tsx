'use client'

import { Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { CrmLaptop } from '@/components/mockups/crm-laptop'
import { PhoneBooking } from '@/components/mockups/phone-booking'
import { WhatsappChat } from '@/components/mockups/whatsapp-chat'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { staggerContainer, staggerItem } from '@/components/scroll-reveal'
import { WHATSAPP_MESSAGES, whatsAppUrl } from '@/lib/whatsapp'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#3730a3_0%,#1e1b4b_45%,#020617_100%)]" />
      <div className="pointer-events-none absolute -left-20 top-20 size-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-40 size-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-28 pt-16 sm:px-6 sm:pt-20">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={staggerItem}
            className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Tu agenda bajo{" "}
            <span className="text-accent">control</span>, tus turnos automatizados
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Automatización de turnos por WhatsApp, cobro de señas y control total de tus clientes.
            Sin complicaciones.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-col items-center justify-center"
          >
            <a
              href={whatsAppUrl(WHATSAPP_MESSAGES.trial)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <WhatsAppIcon className="size-4" />
              Comenzar Prueba Gratis
            </a>

            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-white/70">
              <Zap className="size-3.5 text-accent" />
              Configuración rápida en menos de 5 minutos
            </span>
          </motion.div>
        </motion.div>

        {/* Device composition */}
        <motion.div
          className="relative mx-auto mt-16 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1400 }}
        >
          {/* Desktop composition */}
          <div className="relative mx-auto hidden min-h-[420px] justify-center md:flex">
            {/* Laptop — center / back */}
            <div
              className="relative z-10 w-full max-w-[640px] origin-bottom"
              style={{
                transform: 'rotateX(6deg) rotateY(-2deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <CrmLaptop />
            </div>

            {/* Phone booking — left / front */}
            <div
              className="absolute bottom-0 left-0 z-20 origin-bottom lg:-left-2 xl:left-4"
              style={{
                transform: 'rotateZ(-8deg) rotateY(12deg) translateZ(40px)',
                transformStyle: 'preserve-3d',
              }}
            >
              <PhoneBooking />
            </div>

            {/* WhatsApp — right / front */}
            <div
              className="absolute bottom-0 right-0 z-20 origin-bottom lg:-right-2 xl:right-4"
              style={{
                transform: 'rotateZ(8deg) rotateY(-12deg) translateZ(40px)',
                transformStyle: 'preserve-3d',
              }}
            >
              <WhatsappChat />
            </div>
          </div>

          {/* Soft ground shadow */}
          <div className="pointer-events-none absolute -bottom-6 left-1/2 hidden h-10 w-[70%] -translate-x-1/2 rounded-[100%] bg-black/40 blur-2xl md:block" />

          {/* Mobile composition: phone + whatsapp */}
          <div className="flex items-end justify-center gap-4 md:hidden">
            <div style={{ transform: 'rotateZ(-4deg)' }}>
              <PhoneBooking />
            </div>
            <div className="hidden min-[420px]:block" style={{ transform: 'rotateZ(4deg)' }}>
              <WhatsappChat />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
