import Image from 'next/image'
import {
  CheckCheck,
  Phone,
  Video,
  ChevronLeft,
  Smile,
  Paperclip,
  Camera,
  Mic,
} from 'lucide-react'
import { IPhoneFrame } from '@/components/mockups/device-frames'

function Bubble({
  children,
  time,
}: {
  children: React.ReactNode
  time: string
}) {
  return (
    <div className="ml-auto max-w-[88%] rounded-lg rounded-tr-none bg-[#dcf8c6] px-2.5 py-1.5 shadow-sm">
      <div className="text-[10px] leading-snug text-slate-800">{children}</div>
      <div className="mt-0.5 flex items-center justify-end gap-0.5 text-[8px] text-slate-500">
        {time}
        <CheckCheck className="size-3 text-sky-500" />
      </div>
    </div>
  )
}

export function WhatsappChat({ className = '' }: { className?: string }) {
  return (
    <IPhoneFrame
      className={className}
      width={230}
      statusBarLight
      statusBarClassName="bg-[#075e54]"
      screenClassName="bg-[#efeae2]"
    >
      <div className="flex h-full flex-col">
        {/* WhatsApp header */}
        <div className="flex shrink-0 items-center gap-1 bg-[#075e54] px-1.5 py-1.5 text-white">
          <ChevronLeft className="size-5 shrink-0" strokeWidth={2.5} />
          <span className="relative size-8 shrink-0 overflow-hidden rounded-full bg-slate-300">
            <Image
              src="/maria-wa.png"
              alt="Maria"
              fill
              className="object-cover"
              sizes="32px"
            />
          </span>
          <div className="min-w-0 flex-1 pl-1">
            <div className="truncate text-[12px] font-semibold leading-tight">Maria</div>
            <div className="text-[9px] text-white/70">en línea</div>
          </div>
          <Video className="mr-1 size-4" />
          <Phone className="mr-1.5 size-4" />
        </div>

        {/* Messages */}
        <div
          className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden px-2 py-2"
          style={{
            backgroundColor: '#efeae2',
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4cfc4\' fill-opacity=\'0.35\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        >
          <div className="mx-auto rounded-md bg-white/80 px-2 py-0.5 text-[8px] text-slate-500 shadow-sm">
            Jueves
          </div>

          <Bubble time="16:53">
            <p>
              Hola Maria!
              <br />
              <br />
              Tu reserva quedó confirmada para el <b>Sábado 25 de Julio</b> a las{' '}
              <b>11:15</b> en <b>Studio Bella</b>.
            </p>
          </Bubble>

          <div className="mx-auto rounded-md bg-white/80 px-2 py-0.5 text-[8px] text-slate-500 shadow-sm">
            Hoy
          </div>

          <Bubble time="11:15">
            <p>
              Hola <b>Maria</b>, te recordamos que tenés un turno en <b>Studio Bella</b>{' '}
              <b>Sábado 25 de Julio</b> a las <b>11:15</b>.
              <br />
              <br />
              ¡Te esperamos!
            </p>
          </Bubble>

          <div className="max-w-[75%] rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 shadow-sm">
            <div className="text-[10px] leading-snug text-slate-800">Gracias! Ahí estaré</div>
            <div className="mt-0.5 text-right text-[8px] text-slate-400">11:16</div>
          </div>
        </div>

        {/* Composer */}
        <div className="flex shrink-0 items-center gap-1.5 bg-[#f0f2f5] px-1.5 py-1.5">
          <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 shadow-sm">
            <Smile className="size-4 shrink-0 text-slate-400" />
            <span className="flex-1 truncate text-[11px] text-slate-400">Mensaje</span>
            <Paperclip className="size-3.5 shrink-0 text-slate-400" />
            <Camera className="size-3.5 shrink-0 text-slate-400" />
          </div>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#075e54] text-white">
            <Mic className="size-4" />
          </span>
        </div>
      </div>
    </IPhoneFrame>
  )
}
