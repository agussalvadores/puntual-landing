import Image from 'next/image'
import { Phone, MessageCircle, Clock, Plus, ArrowLeft, LogIn } from 'lucide-react'

const tabs = [
  { label: 'Corte de cabello', active: true },
  { label: 'Peinados', active: false },
  { label: 'Alisado', active: false },
]

const services = [
  {
    name: 'Corte Femenino staff',
    dur: '1h',
    desc: 'Transformá tu estilo con una consulta personalizada y un corte diseñado…',
    price: '$43.000',
  },
  {
    name: 'Corte Femenino Director',
    dur: '1h',
    desc: 'Descubrí el arte del corte femenino con nuestro equipo de directores…',
    price: '$61.000',
  },
]

export function PhoneBooking() {
  return (
    <div className="w-[214px] overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-2xl">
      {/* Notch */}
      <div className="relative bg-white pt-2">
        <div className="mx-auto h-1.5 w-16 rounded-full bg-slate-200" />
      </div>

      {/* Top nav bar */}
      <div className="flex items-center justify-between px-3 py-2">
        <ArrowLeft className="size-3.5 text-slate-500" />
        <span className="text-[13px] font-black tracking-tight text-slate-900">
          STUDIO BELLA
        </span>
        <span className="flex size-6 items-center justify-center rounded-full bg-slate-100">
          <LogIn className="size-3 text-slate-500" />
        </span>
      </div>

      {/* Cover + profile card */}
      <div className="relative">
        <div className="relative h-20 w-full">
          <Image src="/salon-cover.png" alt="Salón" fill className="object-cover" sizes="214px" />
        </div>
        <div className="relative -mt-6 mx-2.5 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm">
          <div className="flex items-start gap-2">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[8px] font-black text-slate-800">
              SB
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-bold leading-tight text-slate-900">
                STUDIO BELLA CENTRO
              </div>
              <div className="mt-0.5 truncate text-[8px] text-slate-400">
                Av. Corrientes 1234, CABA
              </div>
            </div>
          </div>
          <div className="mt-2 flex gap-1.5">
            {[Phone, MessageCircle, Clock].map((Icon, i) => (
              <span
                key={i}
                className="flex size-6 items-center justify-center rounded-full border border-slate-200 text-slate-500"
              >
                <Icon className="size-3" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-1.5 overflow-hidden px-2.5 py-2.5">
        {tabs.map((t) => (
          <span
            key={t.label}
            className={`whitespace-nowrap rounded-full border px-2 py-1 text-[8px] font-semibold ${
              t.active
                ? 'border-slate-800 bg-slate-800 text-white'
                : 'border-slate-200 text-slate-500'
            }`}
          >
            {t.label}
          </span>
        ))}
      </div>

      {/* Section title */}
      <div className="px-2.5 pb-1 text-[11px] font-bold text-slate-900">Corte de cabello</div>

      {/* Service cards */}
      <div className="flex flex-col gap-2 px-2.5 pb-4">
        {services.map((s) => (
          <div key={s.name} className="rounded-xl border border-slate-100 p-2.5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="text-[10px] font-bold leading-tight text-slate-800">{s.name}</div>
                <div className="mt-0.5 flex items-center gap-1 text-[8px] text-slate-400">
                  <Clock className="size-2.5" />
                  {s.dur}
                </div>
              </div>
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-700 text-white">
                <Plus className="size-3.5" />
              </span>
            </div>
            <p className="mt-1 line-clamp-2 text-[8px] leading-snug text-slate-400">{s.desc}</p>
            <div className="mt-1 text-[10px] font-bold text-slate-900">{s.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
