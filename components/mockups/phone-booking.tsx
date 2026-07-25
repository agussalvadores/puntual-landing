'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  MessageCircle,
  Clock,
  Plus,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Calendar,
  CalendarPlus,
  Copy,
  Check,
  Store,
} from 'lucide-react'
import { IPhoneFrame } from '@/components/mockups/device-frames'

const STEPS = 4
const INTERVAL_MS = 5000

const GASTON_IMG = '/pro-2.png'
const MARIA_IMG = '/maria-wa.png'
const BRANCH = 'Studio Bella Centro'
const ADDRESS = 'Av. Corrientes 1234, CABA'
const DATE_LABEL = 'Sábado 25 de julio 2026'
const TIME_LABEL = '11:15'
const SERVICE = 'Corte Femenino staff'
const PRICE = '$43.000'
const CODE = 'ABC123'

function Header({ showBack = true }: { showBack?: boolean }) {
  return (
    <div className="flex shrink-0 items-center justify-between px-3 py-1.5">
      {showBack ? (
        <ArrowLeft className="size-3.5 text-slate-500" />
      ) : (
        <span className="size-3.5" />
      )}
      <div className="text-center">
        <div className="text-[11px] font-black tracking-tight text-slate-900">STUDIO BELLA</div>
      </div>
      <span className="relative size-6 overflow-hidden rounded-full ring-1 ring-slate-200">
        <Image src={MARIA_IMG} alt="Maria" fill className="object-cover" sizes="24px" />
      </span>
    </div>
  )
}

function ScreenServices() {
  const tabs = [
    { label: 'Corte de cabello', active: true },
    { label: 'Peinados', active: false },
    { label: 'Alisado', active: false },
  ]
  const services = [
    {
      name: SERVICE,
      dur: '1h',
      desc: 'Transformá tu estilo con una consulta personalizada y un corte diseñado…',
      price: PRICE,
    },
    {
      name: 'Corte Femenino Director',
      dur: '1h',
      desc: 'Descubrí el arte del corte femenino con nuestro equipo de directores…',
      price: '$61.000',
    },
  ]

  return (
    <div className="flex h-full flex-col bg-white">
      <Header />
      <div className="relative shrink-0">
        <div className="relative h-[68px] w-full">
          <Image src="/salon-cover.png" alt="Salón" fill className="object-cover" sizes="230px" />
        </div>
        <div className="relative -mt-5 mx-2.5 rounded-xl border border-slate-100 bg-white p-2 shadow-sm">
          <div className="flex items-start gap-2">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[8px] font-black text-slate-800">
              SB
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-bold leading-tight text-slate-900">{BRANCH.toUpperCase()}</div>
              <div className="mt-0.5 truncate text-[7.5px] text-slate-400">{ADDRESS}</div>
            </div>
          </div>
          <div className="mt-1.5 flex gap-1.5">
            {[Phone, MessageCircle, Clock].map((Icon, i) => (
              <span
                key={i}
                className="flex size-5 items-center justify-center rounded-full border border-slate-200 text-slate-500"
              >
                <Icon className="size-2.5" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex shrink-0 gap-1.5 overflow-hidden px-2.5 py-2">
        {tabs.map((t) => (
          <span
            key={t.label}
            className={`whitespace-nowrap rounded-full border px-2 py-1 text-[7.5px] font-semibold ${
              t.active
                ? 'border-slate-800 bg-slate-800 text-white'
                : 'border-slate-200 text-slate-500'
            }`}
          >
            {t.label}
          </span>
        ))}
      </div>

      <div className="px-2.5 pb-1 text-[10px] font-bold text-slate-900">Corte de cabello</div>

      <div className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-hidden px-2.5 pb-2">
        {services.map((s) => (
          <div key={s.name} className="rounded-xl border border-slate-100 p-2 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="text-[9.5px] font-bold leading-tight text-slate-800">{s.name}</div>
                <div className="mt-0.5 flex items-center gap-1 text-[7.5px] text-slate-400">
                  <Clock className="size-2.5" />
                  {s.dur}
                </div>
              </div>
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-white">
                <Plus className="size-3" />
              </span>
            </div>
            <p className="mt-1 line-clamp-2 text-[7.5px] leading-snug text-slate-400">{s.desc}</p>
            <div className="mt-1 text-[9.5px] font-bold text-slate-900">{s.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenDatetime() {
  const days = [
    { d: 'Sáb', n: '25', active: true },
    { d: 'Dom', n: '26', active: false },
    { d: 'Lun', n: '27', active: false },
    { d: 'Mar', n: '28', active: false },
    { d: 'Mié', n: '29', active: false },
  ]
  const slots = [
    { t: '11:00', active: false },
    { t: '11:15', active: true },
    { t: '11:30', active: false },
    { t: '11:45', active: false },
  ]

  return (
    <div className="flex h-full flex-col bg-[#f4f5f7]">
      <Header />
      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden px-2.5 pb-2">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <span className="relative size-8 shrink-0 overflow-hidden rounded-full">
            <Image src={GASTON_IMG} alt="Gaston" fill className="object-cover" sizes="32px" />
          </span>
          <span className="flex-1 text-[11px] font-bold text-slate-900">Gaston</span>
          <span className="rounded-full border border-slate-300 px-2.5 py-1 text-[8px] font-semibold text-slate-700">
            Cambiar
          </span>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <ChevronLeft className="size-3.5 text-slate-500" />
              <span className="text-[10px] font-bold text-slate-900">Julio De 2026</span>
              <ChevronRight className="size-3.5 text-slate-500" />
            </div>
            <Calendar className="size-3.5 text-slate-400" />
          </div>
          <div className="flex gap-1">
            {days.map((day) => (
              <div
                key={day.n}
                className={`flex flex-1 flex-col items-center rounded-lg py-1.5 ${
                  day.active ? 'bg-slate-700 text-white' : 'text-slate-700'
                }`}
              >
                <span className="text-[7.5px] font-medium opacity-80">{day.d}</span>
                <span className="text-[11px] font-bold">{day.n}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          {slots.map((s) => (
            <div
              key={s.t}
              className={`rounded-xl border px-3 py-2 text-center text-[11px] font-semibold ${
                s.active
                  ? 'border-slate-700 bg-slate-700 text-white'
                  : 'border-slate-200 bg-white text-slate-700'
              }`}
            >
              {s.t}
            </div>
          ))}
        </div>

        <div className="mt-auto rounded-xl border border-slate-300 bg-white py-2.5 text-center text-[11px] font-bold text-slate-900 shadow-sm">
          Continuar
        </div>
      </div>
    </div>
  )
}

function ScreenConfirm() {
  return (
    <div className="flex h-full flex-col bg-[#f4f5f7]">
      <Header />
      <div className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-hidden px-2.5 pb-1">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
            <Calendar className="size-3.5" />
          </span>
          <div>
            <div className="text-[10px] font-bold text-slate-900">{DATE_LABEL}</div>
            <div className="text-[12px] font-semibold text-slate-500">{TIME_LABEL}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <span className="relative size-8 shrink-0 overflow-hidden rounded-full">
            <Image src={GASTON_IMG} alt="Gaston" fill className="object-cover" sizes="32px" />
          </span>
          <span className="text-[11px] font-bold text-slate-900">Gaston</span>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <span className="relative size-8 shrink-0 overflow-hidden rounded-full">
            <Image src={MARIA_IMG} alt="Maria" fill className="object-cover" sizes="32px" />
          </span>
          <span className="text-[11px] font-bold text-slate-900">Maria</span>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
          <div className="text-[10px] font-bold text-slate-900">{SERVICE}</div>
          <div className="mt-1 flex items-center justify-between">
            <span className="flex items-center gap-1 text-[8px] text-slate-400">
              <Clock className="size-2.5" />
              1h
            </span>
            <span className="text-[11px] font-bold text-slate-500">{PRICE}</span>
          </div>
        </div>

        <div className="rounded-xl border border-dashed border-slate-200 bg-white px-2.5 py-3 text-[9px] text-slate-400">
          Escribe aquí cualquier nota o comentario
        </div>

        <div className="mt-auto rounded-t-xl border border-slate-200 bg-white p-2.5 shadow-sm">
          <div className="mb-1.5 text-[7.5px] font-semibold uppercase tracking-wide text-slate-400">
            Método de pago
          </div>
          <div className="mb-2 flex items-center gap-1.5 rounded-lg border border-slate-200 px-2 py-1.5 text-[9px] font-medium text-slate-700">
            <Store className="size-3 text-slate-500" />
            Abonar en tienda
          </div>
          <div className="rounded-xl border border-slate-400 py-2 text-center text-[11px] font-bold text-slate-900">
            Confirmar Reserva
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenConfirmed() {
  return (
    <div className="flex h-full flex-col bg-[#f4f5f7]">
      <Header showBack={false} />
      <div className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-hidden px-2.5 pb-2">
        <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
          <span className="mx-auto flex size-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
            <Check className="size-4" strokeWidth={2.5} />
          </span>
          <div className="mt-2 text-[12px] font-bold text-slate-900">Reserva confirmada!</div>
          <div className="mt-1 flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-500">
            {CODE}
            <Copy className="size-3" />
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
            <Calendar className="size-3.5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-bold text-slate-900">{DATE_LABEL}</div>
            <div className="text-[12px] font-semibold text-slate-500">{TIME_LABEL}</div>
          </div>
          <span className="flex flex-col items-center gap-0.5 text-[7px] font-medium text-slate-500">
            <CalendarPlus className="size-3.5" />
            Agregar
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <span className="relative size-8 shrink-0 overflow-hidden rounded-full">
            <Image src={GASTON_IMG} alt="Gaston" fill className="object-cover" sizes="32px" />
          </span>
          <span className="text-[11px] font-bold text-slate-900">Gaston</span>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <span className="relative size-8 shrink-0 overflow-hidden rounded-full">
            <Image src="/salon-cover.png" alt={BRANCH} fill className="object-cover" sizes="32px" />
          </span>
          <div className="min-w-0">
            <div className="text-[10px] font-bold text-slate-900">{BRANCH}</div>
            <div className="truncate text-[7.5px] text-slate-400">{ADDRESS}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <span className="relative size-8 shrink-0 overflow-hidden rounded-full">
            <Image src={MARIA_IMG} alt="Maria" fill className="object-cover" sizes="32px" />
          </span>
          <span className="text-[11px] font-bold text-slate-900">Maria</span>
        </div>
      </div>
    </div>
  )
}

const screens = [ScreenServices, ScreenDatetime, ScreenConfirm, ScreenConfirmed]

export function PhoneBooking({ className = '' }: { className?: string }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % STEPS)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  const Screen = screens[step]

  return (
    <IPhoneFrame className={className} width={230}>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          className="h-full"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Screen />
        </motion.div>
      </AnimatePresence>
    </IPhoneFrame>
  )
}
