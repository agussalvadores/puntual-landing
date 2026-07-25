import type { ReactNode } from 'react'

const PHONE_WIDTH = 230
const PHONE_SCREEN_HEIGHT = 460

function CellularIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 17 12"
      width="17"
      height="12"
      aria-hidden
    >
      <rect x="0" y="8.5" width="3" height="3.5" rx="0.6" fill="currentColor" />
      <rect x="4.5" y="6" width="3" height="6" rx="0.6" fill="currentColor" />
      <rect x="9" y="3.5" width="3" height="8.5" rx="0.6" fill="currentColor" />
      <rect x="13.5" y="0.5" width="3" height="11.5" rx="0.6" fill="currentColor" />
    </svg>
  )
}

function BatteryIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 27 13"
      width="24"
      height="12"
      fill="none"
      aria-hidden
    >
      <rect
        x="0.6"
        y="0.6"
        width="22"
        height="11.8"
        rx="2.4"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.4"
      />
      <rect x="2.2" y="2.3" width="17.5" height="8.4" rx="1.4" fill="currentColor" />
      <path
        d="M24.2 4.2c.9.4 1.45 1.1 1.45 2.3s-.55 1.9-1.45 2.3V4.2Z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  )
}

function StatusBar({
  light = false,
  className = '',
}: {
  light?: boolean
  className?: string
}) {
  const color = light ? 'text-white' : 'text-black'

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 z-30 flex h-[32px] items-center justify-between px-[18px] ${color} ${className}`}
    >
      <span
        className="min-w-[34px] origin-left scale-[0.8] text-center text-[12px] font-semibold leading-none tracking-[-0.02em]"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}
      >
        9:41
      </span>
      <div className="flex min-w-[34px] origin-right scale-[0.8] items-center justify-end gap-[3px]">
        <CellularIcon />
        <BatteryIcon />
      </div>
    </div>
  )
}

export function IPhoneFrame({
  children,
  className = '',
  width = PHONE_WIDTH,
  statusBarLight = false,
  statusBarClassName = '',
  screenClassName = 'bg-white',
}: {
  children: ReactNode
  className?: string
  width?: number
  statusBarLight?: boolean
  statusBarClassName?: string
  screenClassName?: string
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width, filter: 'drop-shadow(0 28px 40px rgba(0,0,0,0.45))' }}
    >
      {/* Side buttons */}
      <div className="absolute -left-[3px] top-[72px] h-5 w-[3px] rounded-l-sm bg-gradient-to-b from-slate-500 to-slate-700" />
      <div className="absolute -left-[3px] top-[100px] h-9 w-[3px] rounded-l-sm bg-gradient-to-b from-slate-500 to-slate-700" />
      <div className="absolute -left-[3px] top-[144px] h-9 w-[3px] rounded-l-sm bg-gradient-to-b from-slate-500 to-slate-700" />
      <div className="absolute -right-[3px] top-[112px] h-14 w-[3px] rounded-r-sm bg-gradient-to-b from-slate-500 to-slate-700" />

      {/* Chassis */}
      <div className="relative overflow-hidden rounded-[2.4rem] bg-gradient-to-b from-slate-700 via-slate-900 to-black p-[2.5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-black p-[7px]">
          <div className={`relative overflow-hidden rounded-[1.85rem] ${screenClassName}`}>
            <StatusBar light={statusBarLight} className={statusBarClassName} />
            {/* Dynamic Island — vertically centered with status bar */}
            <div className="pointer-events-none absolute left-1/2 top-[5px] z-40 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />

            <div
              className="flex flex-col overflow-hidden pt-[32px]"
              style={{ height: PHONE_SCREEN_HEIGHT }}
            >
              <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
              {/* Home indicator */}
              <div className="flex shrink-0 justify-center pb-2 pt-1">
                <div className="h-[3px] w-20 rounded-full bg-slate-900/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MacBookFrame({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ filter: 'drop-shadow(0 32px 48px rgba(0,0,0,0.5))' }}
    >
      <div className="relative mx-auto w-[96%]">
        <div className="overflow-hidden rounded-t-[12px] border border-slate-600/80 bg-gradient-to-b from-slate-600 to-slate-800 p-[10px] pt-[12px] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
          <div className="absolute left-1/2 top-[5px] z-10 size-[6px] -translate-x-1/2 rounded-full bg-slate-900 ring-1 ring-slate-500/40">
            <div className="absolute inset-[1.5px] rounded-full bg-sky-900/80" />
          </div>

          <div className="overflow-hidden rounded-[4px] border border-slate-900/60 bg-black">
            <div className="overflow-hidden bg-white">{children}</div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto">
        <div className="h-[10px] rounded-b-[4px] bg-gradient-to-b from-slate-500 via-slate-600 to-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]" />
        <div className="mx-auto h-[3px] w-[18%] rounded-b-full bg-slate-500/80" />
        <div className="mx-auto h-[8px] w-[108%] -translate-x-[3.7%] rounded-b-[10px] bg-gradient-to-b from-slate-500 to-slate-700 shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
          <div className="mx-auto h-full w-[28%] rounded-b-[6px] bg-slate-600/50" />
        </div>
      </div>
    </div>
  )
}
