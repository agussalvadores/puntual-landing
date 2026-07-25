import Image from 'next/image'
import {
  Calendar,
  Scissors,
  Users,
  Smile,
  Ticket,
  DollarSign,
  Ban,
  Settings2,
  Bell,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Plus,
  Clock,
} from 'lucide-react'
import { MacBookFrame } from '@/components/mockups/device-frames'

type Appt = {
  top: number
  h: number
  name: string
  service: string
  time: string
  tone: string
}

const blue = 'bg-[#e2e8f5] border-[#c7d2e8] text-slate-700'
const salmon = 'bg-[#f3ddd7] border-[#e6c6bd] text-slate-700'
const beige = 'bg-[#f0e6d8] border-[#e2d3bd] text-slate-700'

const columns: { pro: string; img: string; appts: Appt[] }[] = [
  {
    pro: 'Barbara',
    img: '/pro-3.png',
    appts: [
      { top: 0, h: 54, name: 'Ausencia de profesional', service: '', time: '09:00 - 11:00', tone: 'hatched' },
      { top: 150, h: 30, name: 'Cecilia', service: 'Color AlfaParf', time: '14:00', tone: salmon },
      { top: 188, h: 30, name: 'Cecilia', service: 'Brushing', time: '15:00 - 15:30', tone: salmon },
    ],
  },
  {
    pro: 'Lali',
    img: '/pro-lali.png',
    appts: [
      { top: 24, h: 34, name: 'Melina', service: 'Alisado Permanente', time: '10:00 - 11:00', tone: blue },
      { top: 66, h: 34, name: 'Natalia', service: 'Corte Femenino staff', time: '11:30 - 12:30', tone: blue },
      { top: 132, h: 26, name: 'alisado', service: '', time: '13:00 - 14:00', tone: 'hatched' },
      { top: 200, h: 34, name: 'Alicia', service: 'Lavado y Brushing', time: '16:00 - 17:00', tone: beige },
    ],
  },
  {
    pro: 'Gaston',
    img: '/pro-2.png',
    appts: [
      { top: 14, h: 24, name: 'Guillermo', service: 'Corte Femenino staff', time: '09:45', tone: blue },
      { top: 42, h: 34, name: 'Marina', service: 'Corte Femenino staff', time: '10:30 - 11:15', tone: blue },
      { top: 80, h: 30, name: 'Maria', service: "Color Majirel L'oreal", time: '11:15 - 11:55', tone: salmon },
      { top: 116, h: 30, name: 'Maria', service: '', time: '12:00 - 13:00', tone: blue },
      { top: 178, h: 30, name: 'Beatriz', service: 'Lavado y Brushing', time: '15:30 - 16:35', tone: beige },
    ],
  },
  {
    pro: 'Marly',
    img: '/pro-5.png',
    appts: [
      { top: 28, h: 24, name: 'Sabina', service: '', time: '10:00', tone: beige },
      { top: 56, h: 40, name: 'Barbara', service: 'Reflejos con Papel', time: '10:45 - 11:45', tone: salmon },
      { top: 116, h: 30, name: 'Graciana', service: 'Corte Femenino staff', time: '12:00 - 13:00', tone: blue },
      { top: 168, h: 34, name: 'Anabella', service: 'Corte Femenino staff', time: '15:00 - 15:40', tone: salmon },
    ],
  },
  {
    pro: 'Martin',
    img: '/pro-4.png',
    appts: [
      { top: 0, h: 30, name: 'Sabrina', service: 'Reflejos con Gorra', time: '09:00 - 09:40', tone: salmon },
      { top: 34, h: 30, name: 'Delma', service: 'Corte Femenino staff', time: '09:45 - 10:45', tone: blue },
      { top: 70, h: 30, name: 'María Eugenia', service: 'Reflejos con Gorra', time: '10:45 - 11:45', tone: salmon },
      { top: 116, h: 30, name: 'Fernanda', service: 'Corte Femenino staff', time: '12:00 - 13:00', tone: blue },
      { top: 178, h: 44, name: 'Chiara', service: 'Alisado Permanente', time: '14:00 - 17:00', tone: beige },
    ],
  },
  {
    pro: 'Araceli',
    img: '/pro-araceli.png',
    appts: [
      { top: 0, h: 24, name: 'Fabiana', service: 'Color AlfaParf', time: '09:00', tone: salmon },
      { top: 26, h: 24, name: 'Silvana', service: 'Color AlfaParf', time: '09:30', tone: salmon },
      { top: 52, h: 40, name: 'Julia', service: 'Lavado y Brushing', time: '10:00 - 11:10', tone: beige },
      { top: 96, h: 30, name: 'Aldana', service: 'Reflejos con Papel', time: '11:15 - 12:30', tone: salmon },
      { top: 178, h: 30, name: 'Soledad', service: 'Brushing', time: '16:00 - 16:40', tone: beige },
    ],
  },
]

function CrmScreen() {
  return (
    <>
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <div className="ml-2 hidden flex-1 rounded-md bg-white px-3 py-1 text-[10px] text-slate-400 sm:block">
          app.puntual.com/agenda
        </div>
      </div>

      <div className="flex">
        <div className="hidden w-10 flex-col items-center gap-3.5 bg-slate-900 py-3 sm:flex">
          <div className="flex size-6 items-center justify-center rounded-md bg-white/15">
            <Calendar className="size-3.5 text-white" />
          </div>
          <Scissors className="size-3.5 text-slate-400" />
          <Users className="size-3.5 text-slate-400" />
          <Smile className="size-3.5 text-slate-400" />
          <Ticket className="size-3.5 text-slate-400" />
          <DollarSign className="size-3.5 text-slate-400" />
          <Ban className="size-3.5 text-slate-400" />
          <Settings2 className="size-3.5 text-slate-400" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 border-b border-slate-200 px-2.5 py-2">
            <div className="flex items-center gap-1 rounded-md border border-slate-200 px-1.5 py-1 text-[9px] font-semibold text-slate-600">
              Semana <ChevronDown className="size-2.5 text-slate-400" />
            </div>
            <span className="rounded-md border border-slate-200 px-1.5 py-1 text-[9px] font-semibold text-slate-600">
              Hoy
            </span>
            <div className="flex items-center gap-1 rounded-md border border-slate-200 px-1.5 py-1 text-[9px] font-semibold text-slate-700">
              <ChevronLeft className="size-2.5 text-slate-400" />
              sáb, 25 jul
              <ChevronRight className="size-2.5 text-slate-400" />
            </div>
            <div className="hidden items-center gap-1 rounded-md border border-slate-200 px-1.5 py-1 text-[9px] font-semibold text-slate-600 lg:flex">
              Studio Bella Centro <ChevronDown className="size-2.5 text-slate-400" />
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="relative">
                <Bell className="size-3.5 text-slate-400" />
                <span className="absolute -right-1.5 -top-1.5 flex h-3 min-w-3 items-center justify-center rounded-full bg-red-500 px-0.5 text-[7px] font-bold text-white">
                  193
                </span>
              </div>
              <button
                type="button"
                className="flex size-6 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600"
                aria-label="Lista de espera"
              >
                <Clock className="size-3" />
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-0.5 rounded-md border border-slate-200 bg-white px-1.5 py-1 text-[9px] font-semibold text-slate-800"
              >
                <Plus className="size-2.5" />
                Agendar
              </button>
            </div>
          </div>

          <div className="flex overflow-hidden">
            <div className="w-7 shrink-0 border-r border-slate-100 pt-8">
              {['09', '10', '11', '12', '13', '14', '15', '16'].map((t) => (
                <div key={t} className="h-7 pr-1 text-right text-[7px] text-slate-300">
                  {t}:00
                </div>
              ))}
            </div>

            <div className="grid flex-1 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {columns.map((col, ci) => (
                <div
                  key={col.pro}
                  className={`border-slate-100 ${ci > 0 ? 'border-l' : ''} ${ci >= 3 ? 'hidden md:block' : ''} ${ci >= 4 ? 'md:hidden lg:block' : ''}`}
                >
                  <div className="flex flex-col items-center gap-0.5 border-b border-slate-100 py-1.5">
                    <span className="relative size-5 overflow-hidden rounded-full">
                      <Image
                        src={col.img}
                        alt={col.pro}
                        fill
                        className="object-cover"
                        sizes="20px"
                      />
                    </span>
                    <span className="max-w-full truncate px-1 text-[7px] font-semibold text-slate-600">
                      {col.pro}
                    </span>
                  </div>
                  <div className="relative h-56">
                    {col.appts.map((a, i) =>
                      a.tone === 'hatched' ? (
                        <div
                          key={i}
                          className="absolute inset-x-0.5 rounded-sm border border-slate-200 bg-[repeating-linear-gradient(45deg,#f1f5f9,#f1f5f9_4px,#e2e8f0_4px,#e2e8f0_8px)] px-1 py-0.5"
                          style={{ top: a.top, height: a.h }}
                        >
                          <div className="truncate text-[6px] font-medium text-slate-500">{a.name}</div>
                          <div className="truncate text-[6px] text-slate-400">{a.time}</div>
                        </div>
                      ) : (
                        <div
                          key={i}
                          className={`absolute inset-x-0.5 overflow-hidden rounded-sm border px-1 py-0.5 ${a.tone}`}
                          style={{ top: a.top, height: a.h }}
                        >
                          <div className="truncate text-[6.5px] font-bold leading-tight">{a.name}</div>
                          {a.service && (
                            <div className="truncate text-[6px] leading-tight opacity-80">{a.service}</div>
                          )}
                          <div className="truncate text-[6px] leading-tight opacity-60">{a.time}</div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function CrmLaptop({ className = '' }: { className?: string }) {
  return (
    <MacBookFrame className={className}>
      <CrmScreen />
    </MacBookFrame>
  )
}
