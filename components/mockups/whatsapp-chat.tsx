import { CheckCheck, Phone } from 'lucide-react'

function Bubble({
  children,
  time,
}: {
  children: React.ReactNode
  time: string
}) {
  return (
    <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-none bg-[#dcf8c6] px-2.5 py-1.5 shadow-sm">
      <div className="text-[10px] leading-snug text-slate-800">{children}</div>
      <div className="mt-0.5 flex items-center justify-end gap-0.5 text-[8px] text-slate-500">
        {time}
        <CheckCheck className="size-3 text-sky-500" />
      </div>
    </div>
  )
}

export function WhatsappChat() {
  return (
    <div className="w-[210px] overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-[#e5ddd5] shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-2 bg-[#075e54] px-3 py-2.5 text-white">
        <span className="flex size-7 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">
          SB
        </span>
        <div className="flex-1">
          <div className="text-[11px] font-semibold leading-tight">Studio Bella</div>
          <div className="text-[8px] text-white/70">en línea</div>
        </div>
        <Phone className="size-3.5" />
      </div>

      {/* Messages */}
      <div
        className="flex flex-col gap-2 px-2.5 py-3"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 0, transparent 40%)',
        }}
      >
        <div className="mx-auto rounded-md bg-white/70 px-2 py-0.5 text-[8px] text-slate-500">
          Hoy
        </div>

        <Bubble time="10:02">
          <p className="font-semibold">Reserva confirmada</p>
          <p className="mt-1">
            Hola María! Tu turno quedó confirmado para el <b>vie 12/07 a las 10:00</b>.
          </p>
          <p className="mt-1">Servicio: Corte + Barba</p>
          <p>Sucursal: Palermo</p>
          <p className="mt-1">
            Código: <b>ABC123</b>
          </p>
        </Bubble>

        <Bubble time="09:00">
          <p className="font-semibold">Recordatorio de turno</p>
          <p className="mt-1">
            Te esperamos mañana a las <b>10:00</b> en Studio Bella.
          </p>
          <p className="mt-1">Respondé SI para confirmar tu asistencia.</p>
        </Bubble>

        <div className="max-w-[55%] rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 shadow-sm">
          <div className="text-[10px] font-semibold text-slate-800">SI</div>
          <div className="mt-0.5 text-right text-[8px] text-slate-400">09:01</div>
        </div>
      </div>
    </div>
  )
}
